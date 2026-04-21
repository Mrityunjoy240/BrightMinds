import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User } from '@/models/User';

export async function POST() {
  try {
    await connectDB();

    // Create Admin
    const adminExists = await User.findOne({ email: 'admin@brightminds.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin',
        email: 'admin@brightminds.com',
        password: 'admin123',
        role: 'admin',
        isActive: true
      });
    }

    // Create sample teachers
    const teachers = [
      { name: 'Rahul Sir', email: 'rahul@brightminds.com', subjects: ['Physics'], password: 'teacher123' },
      { name: 'Priya Ma\'am', email: 'priya@brightminds.com', subjects: ['Chemistry'], password: 'teacher123' },
      { name: 'Amit Sir', email: 'amit@brightminds.com', subjects: ['Mathematics'], password: 'teacher123' },
      { name: 'Dr. Kavita', email: 'kavita@brightminds.com', subjects: ['Biology'], password: 'teacher123' },
    ];

    for (const teacher of teachers) {
      const exists = await User.findOne({ email: teacher.email });
      if (!exists) {
        await User.create({
          name: teacher.name,
          email: teacher.email,
          password: teacher.password,
          role: 'teacher',
          subjects: teacher.subjects,
          isActive: true
        });
      }
    }

    return NextResponse.json({ message: 'Seed completed successfully' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}