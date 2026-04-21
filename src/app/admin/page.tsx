"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Home, Users, BookOpen, FileText, ClipboardList, 
  Bell, Settings, LogOut, Plus, Trash2, Edit, Search, UserPlus
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

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "teachers", icon: Users, label: "Teachers" },
  { id: "students", icon: BookOpen, label: "Students" },
  { id: "materials", icon: FileText, label: "Materials" },
  { id: "tests", icon: ClipboardList, label: "Tests" },
  { id: "announcements", icon: Bell, label: "Announcements" },
];

function Sidebar({ activeSection, setActiveSection, onLogout }: { activeSection: string; setActiveSection: (id: string) => void; onLogout: () => void }) {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-5 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xl font-extrabold">
          <GraduationCap className="w-7 h-7 text-blue-400" />
          <span>Bright<span className="text-blue-400">Minds</span></span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Admin Panel</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={clsx(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeSection === item.id 
                ? "bg-blue-600 text-white" 
                : "text-slate-300 hover:bg-slate-800"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-slate-800 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

function Dashboard() {
  const stats = [
    { label: "Total Students", value: "450", color: "bg-blue-500" },
    { label: "Total Teachers", value: "8", color: "bg-green-500" },
    { label: "Active Tests", value: "5", color: "bg-amber-500" },
    { label: "Announcements", value: "12", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Admin Dashboard</h2>
        <p className="text-slate-500">Overview of BrightMinds Academy</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-4", stat.color)}>
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Registrations</h3>
          <div className="space-y-3">
            {[
              { name: "Rohan Kumar", type: "Student", date: "Today" },
              { name: "Priya Singh", type: "Student", date: "Yesterday" },
              { name: "Rahul Sir", type: "Teacher", date: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.type}</div>
                  </div>
                </div>
                <span className="text-sm text-slate-400">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
              <UserPlus className="w-5 h-5" />
              <span className="text-sm font-medium">Add Student</span>
            </button>
            <button className="flex items-center gap-2 p-4 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Add Teacher</span>
            </button>
            <button className="flex items-center gap-2 p-4 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-100 transition-colors">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Upload Material</span>
            </button>
            <button className="flex items-center gap-2 p-4 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="text-sm font-medium">Announcement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Teachers() {
  const teachers = [
    { name: "Rahul Sir", email: "rahul@brightminds.com", subject: "Physics", classes: "Class 11, 12", status: "Active" },
    { name: "Priya Ma'am", email: "priya@brightminds.com", subject: "Chemistry", classes: "Class 10, 11", status: "Active" },
    { name: "Amit Sir", email: "amit@brightminds.com", subject: "Mathematics", classes: "Class 10, 11, 12", status: "Active" },
    { name: "Dr. Kavita", email: "kavita@brightminds.com", subject: "Biology", classes: "Class 11, 12", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Teachers Management</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Add Teacher
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search teachers..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 text-sm"
            />
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Classes</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {teachers.map((teacher, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-slate-900">{teacher.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{teacher.email}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{teacher.subject}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{teacher.classes}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {teacher.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                      <Edit className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Students() {
  const students = [
    { name: "Rohan Kumar", email: "rohan@email.com", class: "Class 12", board: "CBSE", roll: "BM-001", status: "Active" },
    { name: "Anjali Singh", email: "anjali@email.com", class: "Class 11", board: "ICSE", roll: "BM-002", status: "Active" },
    { name: "Dev Patel", email: "dev@email.com", class: "Class 10", board: "CBSE", roll: "BM-003", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Students Management</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Add Student
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 text-sm"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
            <option>All Classes</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
            <option>All Boards</option>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>State Board</option>
          </select>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Roll No.</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Board</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{student.name}</div>
                      <div className="text-sm text-slate-500">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.roll}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.class}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{student.board}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                      <Edit className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Materials() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Study Materials</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Uploaded By</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { title: "Physics Unit 1", subject: "Physics", class: "Class 12", by: "Rahul Sir", date: "20 Apr 2026" },
              { title: "Chemistry Notes", subject: "Chemistry", class: "Class 11", by: "Priya Ma'am", date: "18 Apr 2026" },
            ].map((material, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">{material.title}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{material.subject}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{material.class}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{material.by}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{material.date}</td>
                <td className="px-4 py-3">
                  <button className="p-2 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tests() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Tests Management</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Test Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Created By</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { title: "Physics Unit 1 Test", subject: "Physics", class: "Class 12", by: "Rahul Sir", status: "Completed" },
              { title: "Chemistry Monthly", subject: "Chemistry", class: "Class 11", by: "Priya Ma'am", status: "Scheduled" },
            ].map((test, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">{test.title}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{test.subject}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{test.class}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{test.by}</td>
                <td className="px-4 py-3">
                  <span className={clsx(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    test.status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                  )}>
                    {test.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Announcements</h2>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <form className="space-y-4 max-w-xl">
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

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Target</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Posted By</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { title: "Exam Schedule", target: "All Classes", by: "Admin", date: "21 Apr 2026" },
              { title: "Parent Meeting", target: "Class 12", by: "Admin", date: "15 Apr 2026" },
            ].map((ann, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">{ann.title}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{ann.target}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{ann.by}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{ann.date}</td>
                <td className="px-4 py-3">
                  <button className="p-2 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return <Dashboard />;
      case "teachers": return <Teachers />;
      case "students": return <Students />;
      case "materials": return <Materials />;
      case "tests": return <Tests />;
      case "announcements": return <Announcements />;
      default: return <Dashboard />;
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