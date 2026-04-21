import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import { User } from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'brightminds-secret-key-2024';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { name, email, password, class: studentClass, board, phone } = await request.json();

    if (!name || !email || !password || !studentClass || !board) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    const rollNumber = `BM-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const user = await User.create({
      name,
      email,
      password,
      role: 'student',
      class: studentClass,
      board,
      phone,
      rollNumber,
      isActive: true
    });

    const token = jwt.sign(
      { 
        id: user._id, 
        email: user.email, 
        role: user.role,
        name: user.name 
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({
      message: 'Registration successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        class: user.class,
        rollNumber: user.rollNumber
      }
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}