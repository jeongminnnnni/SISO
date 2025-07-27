
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { user_id, password } = await request.json();

    // This is a mock authentication. In a real application, you would validate against a database.
    if (user_id === 'youngho.jeong@gmail.com' && password === 'siso_password') {
      // In a real app, you'd generate a JWT or session token here.
      const token = 'fake-jwt-token'; 
      const user = { name: '정영호', email: 'youngho.jeong@gmail.com' };
      
      // Return user data and token
      return NextResponse.json({ user, token });
    } else {
      // If authentication fails, return an error message.
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An error occurred during login.' }, { status: 500 });
  }
}
