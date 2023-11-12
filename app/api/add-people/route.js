/* import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const Name = searchParams.get('Name');
  const Gender = searchParams.get('Gender');
 
  try {
    if (!Name || !Gender) throw new Error('Names required');
    await sql`INSERT INTO sample (Name, Gender) VALUES (${Name}, ${Gender});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const names = await sql`SELECT * FROM sample;`;
  return NextResponse.json({ names }, { status: 200 });
} */