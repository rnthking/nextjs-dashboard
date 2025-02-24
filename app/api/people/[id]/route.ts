import { NextResponse } from "next/server";
import { people } from "@/app/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "");

  const person = people.find((p) => p.id === id);

  if (!person) {
    return NextResponse.json(
      {
        status: "error",
        message: `未找到 ID 为 ${id} 的用户信息`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "success",
    data: person,
  });
}
