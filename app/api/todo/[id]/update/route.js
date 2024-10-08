import { deleteDataByAny, updateDataByAny } from "@/services/serviceOperations";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  const { id } = params;
  try {
    const body = await req.json();

    const data = await updateDataByAny(id, { completed: body.completed });

    if (!data || data.error) {
      return NextResponse.json(
        { status: "error", error: data.error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "Todo updated successfully", data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};