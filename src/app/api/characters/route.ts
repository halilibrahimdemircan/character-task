import { NextResponse } from "next/server";
import { getAllCharacters } from "../../_services/getAllCharacters";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const gender = searchParams.get("gender");

  try {
    // Merkezi fonksiyonu çağırıyoruz
    const characters = await getAllCharacters(status || undefined, gender || undefined);
    return NextResponse.json(characters);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}