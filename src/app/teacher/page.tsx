"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Home, BookOpen, Calendar, FileText, ClipboardList, Bell, 
  LogOut, Users, Download, Plus, CheckCircle, AlertCircle, Upload
} from "lucide-react";
import { clsx } from "clsx";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const subjectIcons: Record<string, { icon: string; color: string; bg: string }> = {
  Physics: { icon: "⚛️", color: "text-purple-600", bg: "bg-purple-100" },
  Chemistry: { icon: "🧪", color: "text-green-600", bg: "bg-green-100" },
  Mathematics: { icon: "📐", color: "text-blue-600", bg: "bg-blue-100" },
  Biology: { icon: "🧬", color: "text-emerald-600", bg: "bg-emerald-100" },
};

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "classes", icon: BookOpen, label: "My Classes" },
  { id: "students", icon: Users, label: "Students" },
  { id: "materials", icon: FileText, label: "Upload Materials" },
  { id: "tests", icon: ClipboardList, label: "Tests" },
  { id: "attendance", icon: CheckCircle, label: "Attendance" },
  { id: "announcements", icon: Bell, label: "Announcements" },
  { id: "settings", icon: Users, label: "Settings" },
];

function Sidebar({ activeSection, setActiveSection, onLogout }: { activeSection: string; setActiveSection: (id: string) => void; onLogout: () => void }) {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col">
      <div className="p-5 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
          <GraduationCap className="w-7 h-7 text-blue-600" />
          <span>Bright<span className="text-blue-600">Minds</span></span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={clsx(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeSection === item.id 
                ? "bg-blue-50 text-blue-600" 
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

function Dashboard({ teacherData }: { teacherData: any }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome back, {teacherData.name}! 👋</h2>
        <p className="text-slate-500">Here's your teaching overview</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Classes", value: "3", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
          { label: "Total Students", value: "120", icon: Users, color: "bg-green-100 text-green-600" },
          { label: "Upcoming Tests", value: "2", icon: ClipboardList, color: "bg-amber-100 text-amber-600" },
          { label: "Materials", value: "15", icon: FileText, color: "bg-purple-100 text-purple-600" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center mb-3", stat.color)}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: "09:00 AM - 10:00 AM", subject: "Physics", class: "Class 12" },
              { time: "10:00 AM - 11:00 AM", subject: "Physics", class: "Class 11" },
              { time: "02:00 PM - 03:00 PM", subject: "Physics", class: "Class 10" },
            ].map((cls, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <div className="font-medium text-slate-900">{cls.subject}</div>
                  <div className="text-sm text-slate-500">{cls.class}</div>
                </div>
                <div className="text-sm text-slate-600">{cls.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Announcements</h3>
          <div className="space-y-3">
            {[
              { title: "Exam schedule released", date: "Today", priority: "high" },
              { title: "Parent meeting on Saturday", date: "Yesterday", priority: "medium" },
            ].map((ann, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <AlertCircle className={clsx("w-5 h-5 mt-0.5", ann.priority === "high" ? "text-red-500" : "text-amber-500")} />
                <div>
                  <div className="font-medium text-slate-900">{ann.title}</div>
                  <div className="text-sm text-slate-500">{ann.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MyClasses() {
  const classes = [
    { id: 1, subject: "Physics", class: "Class 12", students: 45, schedule: "Mon, Wed, Fri - 9AM" },
    { id: 2, subject: "Physics", class: "Class 11", students: 40, schedule: "Tue, Thu - 10AM" },
    { id: 3, subject: "Physics", class: "Class 10", students: 35, schedule: "Sat - 2PM" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">My Classes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                {subjectIcons[cls.subject]?.icon || "📚"}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{cls.subject}</h3>
                <p className="text-sm text-slate-500">{cls.class}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Students</span>
                <span className="font-medium text-slate-900">{cls.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Schedule</span>
                <span className="font-medium text-slate-900">{cls.schedule}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              View Students
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Students() {
  const students = [
    { name: "Rohan Kumar", roll: "BM-001", class: "Class 12", attendance: "90%" },
    { name: "Anjali Singh", roll: "BM-002", class: "Class 12", attendance: "95%" },
    { name: "Dev Patel", roll: "BM-003", class: "Class 12", attendance: "85%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Students</h2>
        <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
          <option>All Classes</option>
          <option>Class 10</option>
          <option>Class 11</option>
          <option>Class 12</option>
        </select>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Roll No.</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">{student.name}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.roll}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.class}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UploadMaterials() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Upload Materials</h2>
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <form className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300" placeholder="Material title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Mathematics</option>
                <option>Biology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Class</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
              <option>Notes</option>
              <option>Question Paper</option>
              <option>Sheet</option>
              <option>Previous Papers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Upload File</label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400">PDF, DOC up to 10MB</p>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
            Upload Material
          </button>
        </form>
      </div>
    </div>
  );
}

function Tests() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Tests & Results</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Create Test
        </button>
      </div>
      <div className="space-y-4">
        {[
          { title: "Physics Unit 1 Test", class: "Class 12", date: "25 Apr 2026", status: "Scheduled", totalMarks: 50 },
          { title: "Physics Monthly Test", class: "Class 11", date: "22 Apr 2026", status: "Completed", totalMarks: 100 },
        ].map((test, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">{test.title}</h3>
              <p className="text-sm text-slate-500">{test.class} • {test.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                {test.totalMarks} marks
              </span>
              <span className={clsx(
                "px-3 py-1 rounded-full text-xs font-medium",
                test.status === "Scheduled" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
              )}>
                {test.status}
              </span>
              <button className="text-blue-600 text-sm font-medium hover:underline">View Results</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Attendance() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Mark Attendance</h2>
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Class</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
              <option>Class 12</option>
              <option>Class 11</option>
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Subject</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
              <option>Physics</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: "Rohan Kumar", roll: "BM-001", present: true },
            { name: "Anjali Singh", roll: "BM-002", present: true },
            { name: "Dev Patel", roll: "BM-003", present: false },
          ].map((student, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-medium text-slate-600">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-slate-900">{student.name}</div>
                  <div className="text-sm text-slate-500">{student.roll}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  student.present ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-500"
                )}>
                  Present
                </button>
                <button className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  !student.present ? "bg-red-100 text-red-700" : "bg-slate-200 text-slate-500"
                )}>
                  Absent
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
          Submit Attendance
        </button>
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Announcements</h2>
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300" placeholder="Announcement title" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300" rows={3} placeholder="Write announcement..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Class</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
                <option>All Classes</option>
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
            Post Announcement
          </button>
        </form>
      </div>
    </div>
  );
}

function Settings({ teacherData, onUpdate }: { teacherData: any; onUpdate: (data: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Information</h3>
        <div className="grid md:grid-cols-2 gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              defaultValue={teacherData.name}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              defaultValue={teacherData.email}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input 
              type="tel" 
              defaultValue={teacherData.phone || ''}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300" 
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
            <input type="password" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
            <input type="password" className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeacherDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [teacherData, setTeacherData] = useState({ name: 'Teacher', email: 'teacher@brightminds.com', subjects: ['Physics'] });

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setTeacherData(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return <Dashboard teacherData={teacherData} />;
      case "classes": return <MyClasses />;
      case "students": return <Students />;
      case "materials": return <UploadMaterials />;
      case "tests": return <Tests />;
      case "attendance": return <Attendance />;
      case "announcements": return <Announcements />;
      case "settings": return <Settings teacherData={teacherData} onUpdate={setTeacherData} />;
      default: return <Dashboard teacherData={teacherData} />;
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onLogout={handleLogout}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
}