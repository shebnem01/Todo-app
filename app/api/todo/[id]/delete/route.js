import { deleteDataByAny } from "@/services/serviceOperations";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const { id } = params;
    try {
      const data = await deleteDataByAny(id);
  
      if (!data || data.error) {
        return NextResponse.json(
          { status: "error", error: data.error },
          { status: 500 }
        );
      }
  
      return NextResponse.json(
        { status: "success", message: "Todo deleted successfully", data },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { status: "error", error: error.message || "Internal Server Error" },
        { status: 500 }
      );
    }
  };
  
  