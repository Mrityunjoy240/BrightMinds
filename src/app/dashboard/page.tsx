"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Home, BookOpen, Calendar, FileText, ClipboardList, Bell, 
  LogOut, User, Phone, Mail, MapPin, Clock, Download, 
  ChevronRight, Menu, X, CheckCircle, AlertCircle, SettingsIcon
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

const studentData = {
  name: "Rohan Kumar",
  email: "rohan.kumar@email.com",
  phone: "+91 98765 43210",
  class: "Class 12",
  board: "CBSE",
  rollNumber: "BM-2024-0123",
  avatar: "RK",
  courses: [
    { subject: "Physics", teacher: "Rahul Sir", progress: 75, totalClasses: 48, attendedClasses: 36 },
    { subject: "Chemistry", teacher: "Priya Ma'am", progress: 60, totalClasses: 48, attendedClasses: 29 },
    { subject: "Mathematics", teacher: "Amit Sir", progress: 80, totalClasses: 60, attendedClasses: 48 },
    { subject: "Biology", teacher: "Dr. Kavita", progress: 65, totalClasses: 48, attendedClasses: 31 },
  ],
  schedule: [
    { day: "Monday", time: "09:00 AM - 10:00 AM", subject: "Mathematics", teacher: "Amit Sir" },
    { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Physics", teacher: "Rahul Sir" },
    { day: "Monday", time: "11:00 AM - 12:00 PM", subject: "Chemistry", teacher: "Priya Ma'am" },
    { day: "Tuesday", time: "09:00 AM - 10:00 AM", subject: "Physics", teacher: "Rahul Sir" },
    { day: "Tuesday", time: "10:00 AM - 11:00 AM", subject: "Biology", teacher: "Dr. Kavita" },
    { day: "Tuesday", time: "11:00 AM - 12:00 PM", subject: "Mathematics", teacher: "Amit Sir" },
    { day: "Wednesday", time: "09:00 AM - 10:00 AM", subject: "Chemistry", teacher: "Priya Ma'am" },
    { day: "Wednesday", time: "10:00 AM - 11:00 AM", subject: "Mathematics", teacher: "Amit Sir" },
    { day: "Wednesday", time: "11:00 AM - 12:00 PM", subject: "Physics", teacher: "Rahul Sir" },
  ],
  materials: [
    { id: 1, title: "Physics Unit 1 - Motion", type: "Notes", subject: "Physics", date: "20 Apr 2026", size: "2.5 MB" },
    { id: 2, title: "Chemistry Formula Sheet", type: "Notes", subject: "Chemistry", date: "18 Apr 2026", size: "1.2 MB" },
    { id: 3, title: "Maths Important Questions", type: "Question Paper", subject: "Mathematics", date: "15 Apr 2026", size: "3.1 MB" },
    { id: 4, title: "Biology Chapter Summary", type: "Notes", subject: "Biology", date: "12 Apr 2026", size: "1.8 MB" },
  ],
  tests: [
    { id: 1, title: "Physics - Chapter 1 Test", subject: "Physics", date: "25 Apr 2026", status: "Upcoming", marks: null },
    { id: 2, title: "Chemistry Monthly Test", subject: "Chemistry", date: "22 Apr 2026", status: "Completed", marks: "85/100" },
    { id: 3, title: "Maths Half Yearly", subject: "Mathematics", date: "18 Apr 2026", status: "Completed", marks: "92/100" },
    { id: 4, title: "Biology - Cell Division", subject: "Biology", date: "15 Apr 2026", status: "Completed", marks: "78/100" },
  ],
  announcements: [
    { id: 1, title: "New Batch Starting from 1st May", date: "21 Apr 2026", priority: "high" },
    { id: 2, title: "Exam Schedule Released", date: "18 Apr 2026", priority: "medium" },
    { id: 3, title: "Parent Teacher Meeting on 25th", date: "15 Apr 2026", priority: "low" },
  ]
};

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "courses", icon: BookOpen, label: "My Courses" },
  { id: "schedule", icon: Calendar, label: "Schedule" },
  { id: "materials", icon: FileText, label: "Study Materials" },
  { id: "tests", icon: ClipboardList, label: "Tests & Results" },
  { id: "announcements", icon: Bell, label: "Announcements" },
  { id: "settings", icon: SettingsIcon, label: "Settings" },
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

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome back, {studentData.name.split(' ')[0]}! 👋</h2>
        <p className="text-slate-500">Here's your learning progress overview</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Classes", value: "204", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
          { label: "Attendance", value: "85%", icon: CheckCircle, color: "bg-green-100 text-green-600" },
          { label: "Upcoming Tests", value: "1", icon: ClipboardList, color: "bg-amber-100 text-amber-600" },
          { label: "Materials", value: "12", icon: FileText, color: "bg-purple-100 text-purple-600" },
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
          <h3 className="text-lg font-bold text-slate-900 mb-4">Course Progress</h3>
          <div className="space-y-4">
            {studentData.courses.slice(0, 3).map((course, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-900">{course.subject}</span>
                  <span className="text-slate-500">{course.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="h-full bg-blue-600 rounded-full" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Upcoming Tests</h3>
          <div className="space-y-3">
            {studentData.tests.filter(t => t.status === "Upcoming").map((test, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                <div>
                  <div className="font-medium text-slate-900">{test.title}</div>
                  <div className="text-sm text-slate-500">{test.subject} • {test.date}</div>
                </div>
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">My Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {studentData.courses.map((course, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{course.subject}</h3>
                <p className="text-sm text-slate-500">{course.teacher}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {course.progress}% Complete
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-full bg-blue-600 rounded-full" 
              />
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>{course.attendedClasses} classes attended</span>
              <span>of {course.totalClasses}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Schedule() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Class Schedule</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Day</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Teacher</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {studentData.schedule.map((item, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50"
                >
                  <td className="px-4 py-3 text-sm text-slate-900">{item.day}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{item.time}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{item.subject}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{item.teacher}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const subjectIcons: Record<string, { icon: string; color: string; bg: string }> = {
  Physics: { icon: "⚛️", color: "text-purple-600", bg: "bg-purple-100" },
  Chemistry: { icon: "🧪", color: "text-green-600", bg: "bg-green-100" },
  Mathematics: { icon: "📐", color: "text-blue-600", bg: "bg-blue-100" },
  Biology: { icon: "🧬", color: "text-emerald-600", bg: "bg-emerald-100" },
};

const studyMaterialsBySubject = [
  {
    subject: "Physics",
    icon: "⚛️",
    color: "bg-purple-100",
    materials: [
      { title: "Unit 1 - Motion Notes", type: "Notes", date: "20 Apr 2026", size: "2.5 MB" },
      { title: "Chapter 2 - Forces", type: "Notes", date: "18 Apr 2026", size: "1.8 MB" },
      { title: "Important Formulas", type: "Sheet", date: "15 Apr 2026", size: "500 KB" },
    ]
  },
  {
    subject: "Chemistry",
    icon: "🧪",
    color: "bg-green-100",
    materials: [
      { title: "Organic Chemistry Notes", type: "Notes", date: "19 Apr 2026", size: "3.2 MB" },
      { title: "Periodic Table", type: "Sheet", date: "14 Apr 2026", size: "1 MB" },
    ]
  },
  {
    subject: "Mathematics",
    icon: "📐",
    color: "bg-blue-100",
    materials: [
      { title: "Algebra Important Questions", type: "Questions", date: "21 Apr 2026", size: "2.1 MB" },
      { title: "Geometry Formulas", type: "Sheet", date: "16 Apr 2026", size: "800 KB" },
      { title: "Previous Year Papers", type: "Papers", date: "10 Apr 2026", size: "4.5 MB" },
    ]
  },
  {
    subject: "Biology",
    icon: "🧬",
    color: "bg-emerald-100",
    materials: [
      { title: "Cell Division Notes", type: "Notes", date: "17 Apr 2026", size: "2.8 MB" },
      { title: "Diagram Practice", type: "Sheet", date: "12 Apr 2026", size: "1.5 MB" },
    ]
  },
];

function Materials() {
  const [expandedSubject, setExpandedSubject] = useState<string | null>("Physics");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Study Materials</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {studyMaterialsBySubject.map((subject) => (
          <motion.div
            key={subject.subject}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            <button
              onClick={() => setExpandedSubject(expandedSubject === subject.subject ? null : subject.subject)}
              className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {subject.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">{subject.subject}</h3>
                  <p className="text-sm text-slate-500">{subject.materials.length} files</p>
                </div>
              </div>
              <ChevronRight className={clsx(
                "w-5 h-5 text-slate-400 transition-transform",
                expandedSubject === subject.subject && "rotate-90"
              )} />
            </button>
            {expandedSubject === subject.subject && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="border-t border-slate-100"
              >
                {subject.materials.map((material, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 border-b border-slate-50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{material.title}</p>
                        <p className="text-xs text-slate-500">{material.type} • {material.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">{material.size}</span>
                      <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Tests() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Tests & Results</h2>
      <div className="space-y-4">
        {studentData.tests.map((test, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl p-5 border border-slate-200 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-slate-900">{test.title}</h3>
              <p className="text-sm text-slate-500">{test.subject} • {test.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={clsx(
                "px-3 py-1 rounded-full text-xs font-medium",
                test.status === "Upcoming" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
              )}>
                {test.status}
              </span>
              {test.marks && (
                <span className="text-lg font-bold text-blue-600">{test.marks}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Announcements</h2>
      <div className="space-y-4">
        {studentData.announcements.map((announcement, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={clsx(
              "bg-white rounded-2xl p-5 border-l-4",
              announcement.priority === "high" ? "border-l-red-500" :
              announcement.priority === "medium" ? "border-l-amber-500" : "border-l-blue-500"
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{announcement.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{announcement.date}</p>
              </div>
              <span className={clsx(
                "px-2 py-1 rounded text-xs font-medium",
                announcement.priority === "high" ? "bg-red-100 text-red-700" :
                announcement.priority === "medium" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
              )}>
                {announcement.priority}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
      
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              defaultValue={studentData.name}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              defaultValue={studentData.email}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input 
              type="tel" 
              defaultValue={studentData.phone}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Roll Number</label>
            <input 
              type="text" 
              defaultValue={studentData.rollNumber}
              disabled
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-500"
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return <Dashboard />;
      case "courses": return <Courses />;
      case "schedule": return <Schedule />;
      case "materials": return <Materials />;
      case "tests": return <Tests />;
      case "announcements": return <Announcements />;
      case "settings": return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onLogout={() => window.location.href = "/"}
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