import { NextResponse } from "next/server";
import { people } from "@/app/lib/data";

export async function GET() {
  return NextResponse.json({
    status: "success",
    data: people,
    total: people.length,
  });
}
