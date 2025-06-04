import { NextResponse } from 'next/server';
import db from "@/lib/db";

// Define the SignupRequestBody interface
interface SignupRequestBody {
  email: string;
  password: string;
}

// Handle the POST request for signup
export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { email, password }: SignupRequestBody = await req.json();

    // Check if the user already exists
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Insert the new user into the database
    const insert = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
    insert.run(email, password);

    // Return success response
    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
