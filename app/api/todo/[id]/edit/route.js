import { updateDataByAny } from "@/services/serviceOperations";
import { NextResponse } from "next/server";
export const PUT = async (req, { params }) => {
    const { id } = params;
    try {
      const body = await req.json();
      const updatedTodo = {
        title: body.title,
      };
      const data = await updateDataByAny(id, updatedTodo);
      if (!data || data.error) {
        return NextResponse.json(
          { status: "error", error: data.error },
          { status: 500 }
        );
      }
  
      return NextResponse.json(
        { status: "success", message: "Todo updated successfully", data },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { status: "error", error: error.message || "Internal Server Error" },
        { status: 500 }
      );
    }
  };