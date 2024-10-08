import { createNewData, getAllData } from "@/services/serviceOperations";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const todoList = await getAllData();
    if (!todoList) {
      return NextResponse.json(
        { status: "error", error: "Todos not found!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { status: "success", data: todoList },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { status: "error", error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};



