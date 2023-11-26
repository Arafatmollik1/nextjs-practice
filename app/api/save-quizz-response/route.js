// pages/api/save-quizz-response.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { gameID, quizzAnswer, participantEmail } = await request.json();

  // Validate gameID and participantEmail
  if (!Number.isInteger(gameID)) {
    return NextResponse.json({ error: 'gameID must be an integer' }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(participantEmail)) {
    return NextResponse.json({ error: 'participantEmail must be a valid email' }, { status: 400 });
  }

  try {
    // Save the data into the database
    await sql`INSERT INTO quizz_responses (Game_id, Quizz_answer, Participant_email , Time_created) VALUES (${gameID}, ${quizzAnswer}, ${participantEmail}, now());`;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
}
