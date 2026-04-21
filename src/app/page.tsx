"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, ChartLine, Trophy, Clock, MapPin, Phone, Mail, ArrowRight, Menu, X, Eye, EyeOff } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const courses = [
  { id: 1, subject: "Physics", class: "class10,class11,class12", teacher: "Rahul Sir", duration: "6 months", desc: "Physics for all boards with concepts & numericals." },
  { id: 2, subject: "Chemistry", class: "class10,class11,class12", teacher: "Priya Ma'am", duration: "6 months", desc: "Organic, inorganic & physical chemistry." },
  { id: 3, subject: "Mathematics", class: "class10,class11,class12", teacher: "Amit Sir", duration: "8 months", desc: "Complete maths with problem-solving." },
  { id: 4, subject: "Biology", class: "class11,class12", teacher: "Dr. Kavita", duration: "6 months", desc: "Biology with diagrams & NCERT focus." },
  { id: 5, subject: "Social Science", class: "class10", teacher: "Rajendra Sir", duration: "4 months", desc: "History, Geography, Civics & Economics." },
  { id: 6, subject: "English", class: "class10,class11,class12", teacher: "Sarah Ma'am", duration: "4 months", desc: "Grammar, literature & writing." },
];

const teachers = [
  { id: 1, name: "Rahul Sharma", subject: "Physics", exp: "12 Years", intro: "Expert physics teacher." },
  { id: 2, name: "Priya Mishra", subject: "Chemistry", exp: "10 Years", intro: "PhD in Chemistry." },
  { id: 3, name: "Amit Sharma", subject: "Mathematics", exp: "15 Years", intro: "Math expert." },
  { id: 4, name: "Dr. Kavita Devi", subject: "Biology", exp: "8 Years", intro: "Biology expert." },
];

const testimonials = [
  { id: 1, text: "Scored 98% in Class 12! Best coaching ever.", student: "Rohan Kumar", result: "CBSE - 98%" },
  { id: 2, text: "Amazing teachers! Helped me clear all doubts.", student: "Anjali Singh", result: "ICSE - 95%" },
  { id: 3, text: "From 65% to 95% in 6 months!", student: "Dev Patel", result: "Class 11 - 95%" },
];

const notices = [
  { id: 1, date: "25", month: "APR", title: "New Batch Starting", desc: "Fresh batch for Class 10-12." },
  { id: 2, date: "20", month: "APR", title: "Mock Tests", desc: "Free mock tests for students." },
  { id: 3, date: "15", month: "APR", title: "Parent Meet", desc: "Monthly PTM. All parents invited." },
];

const stats = [
  { label: "Students", value: "500+" },
  { label: "Pass Rate", value: "90%" },
  { label: "Toppers", value: "50+" },
  { label: "Years", value: "10+" },
];

function Navbar({ onLoginClick }: { onLoginClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "backdrop-blur-xl bg-white/90 border-b border-slate-200 py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <span>Bright<span className="text-blue-600">Minds</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Courses", "Teachers", "Results", "Admission"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onLoginClick}
            className="text-slate-600 hover:text-blue-600 font-medium text-sm px-4 py-2 transition-colors"
          >
            Login
          </button>
          <button 
            onClick={onLoginClick}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02]"
          >
            Join Now
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6">
          <nav className="flex flex-col gap-4">
            {["Home", "Courses", "Teachers", "Results", "Admission"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-lg font-medium text-slate-600" onClick={() => setMobileOpen(false)}>
                {link}
              </a>
            ))}
            <button 
              onClick={() => { setMobileOpen(false); onLoginClick?.(); }}
              className="text-lg font-medium text-slate-600 text-left"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Trusted by 500+ Students</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Crack Your <span className="text-blue-600">Board Exams</span> With Expert Teachers
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Expert coaching for CBSE, ICSE & State Boards. Class 10, 11 & 12 with proven results and personal attention.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.button 
                onClick={onCtaClick}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                data-testid="hero-cta-button"
              >
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a 
                href="#courses" 
                whileHover={{ scale: 1.02 }}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                View Courses
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="hidden lg:flex justify-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 w-full max-w-md">
              <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Popular Subjects</h3>
              <div className="space-y-3">
                {[
                  { name: "Mathematics", sub: "CBSE, ICSE | Class 10-12", icon: "📐" },
                  { name: "Physics", sub: "CBSE, ICSE | Class 10-12", icon: "⚛️" },
                  { name: "Biology", sub: "CBSE, ICSE | Class 11-12", icon: "🧬" },
                  { name: "Chemistry", sub: "CBSE, ICSE | Class 10-12", icon: "🧪" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer border border-transparent hover:border-blue-100"
                    data-testid={`course-filter-${item.name.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from experienced teachers with 10+ years of expertise.", color: "bg-purple-100 text-purple-600" },
    { icon: Users, title: "Small Batches", desc: "Only 20-25 students per batch for personal attention.", color: "bg-amber-100 text-amber-600" },
    { icon: ChartLine, title: "Regular Tests", desc: "Weekly tests and performance analysis for improvement.", color: "bg-green-100 text-green-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
            Why Choose Us
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Everything You Need to Excel
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const subjectIcons: Record<string, { icon: string; color: string; bg: string }> = {
  Physics: { icon: "⚛️", color: "text-purple-600", bg: "bg-purple-100" },
  Chemistry: { icon: "🧪", color: "text-green-600", bg: "bg-green-100" },
  Mathematics: { icon: "📐", color: "text-blue-600", bg: "bg-blue-100" },
  Biology: { icon: "🧬", color: "text-emerald-600", bg: "bg-emerald-100" },
  "Social Science": { icon: "🌍", color: "text-amber-600", bg: "bg-amber-100" },
  English: { icon: "📖", color: "text-rose-600", bg: "bg-rose-100" },
};

function Courses() {
  const [filter, setFilter] = useState("all");
  const filteredCourses = filter === "all" ? courses : courses.filter(c => c.class.includes(filter));

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
            Our Programs
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Choose Your Path to Success
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600">
            Comprehensive coaching for every board and class
          </motion.p>
        </motion.div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { key: "all", label: "All" },
            { key: "class10", label: "Class 10" },
            { key: "class11", label: "Class 11" },
            { key: "class12", label: "Class 12" },
          ].map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                filter === f.key 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              )}
              data-testid={`course-filter-${f.key}`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course) => {
            const iconData = subjectIcons[course.subject] || { icon: "📚", color: "text-blue-600", bg: "bg-blue-100" };
            return (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${iconData.bg} rounded-xl flex items-center justify-center text-2xl`}>
                    {iconData.icon}
                  </div>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">
                    {course.class.includes("class10") && course.class.includes("class12") 
                      ? "Class 10-12" 
                      : course.class.replace("class", "Class ")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.subject}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>{course.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Teachers() {
  const teacherProfiles = [
    { name: "Rahul Sharma", subject: "Physics", exp: "12 Years", intro: "Expert physics teacher with deep subject knowledge.", color: "from-purple-500 to-purple-600", icon: "⚛️" },
    { name: "Priya Mishra", subject: "Chemistry", exp: "10 Years", intro: "PhD in Chemistry, specialized in organic chemistry.", color: "from-green-500 to-green-600", icon: "🧪" },
    { name: "Amit Sharma", subject: "Mathematics", exp: "15 Years", intro: "Mathematics expert with proven teaching methods.", color: "from-blue-500 to-blue-600", icon: "📐" },
    { name: "Dr. Kavita Devi", subject: "Biology", exp: "8 Years", intro: "Biology expert focusing on conceptual learning.", color: "from-emerald-500 to-emerald-600", icon: "🧬" },
  ];

  return (
    <section id="teachers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
            Our Team
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Meet Your Mentors
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teacherProfiles.map((teacher, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-blue-200 text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${teacher.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}>
                {teacher.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{teacher.name}</h3>
              <div className="text-blue-600 font-semibold text-sm mb-1">{teacher.subject}</div>
              <div className="text-xs text-slate-500 mb-3">{teacher.exp} Experience</div>
              <p className="text-sm text-slate-600">{teacher.intro}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Results() {
  const statsData = [
    { label: "Active Students", value: "500+", icon: "👨‍🎓", color: "bg-blue-500" },
    { label: "Pass Rate", value: "95%", icon: "📈", color: "bg-green-500" },
    { label: "Top Scorers", value: "50+", icon: "🏆", color: "bg-amber-500" },
    { label: "Years Experience", value: "10+", icon: "⭐", color: "bg-purple-500" },
  ];

  const studentResults = [
    { name: "Rohan Kumar", result: "98%", board: "CBSE", subject: "Class 12", quote: "The teachers here are amazing! They helped me achieve my dream score." },
    { name: "Anjali Singh", result: "96%", board: "ICSE", subject: "Class 12", quote: "Excellent study material and mock tests. Highly recommended!" },
    { name: "Dev Patel", result: "95%", board: "CBSE", subject: "Class 11", quote: "From 65% to 95% in just 6 months. Great coaching!" },
  ];

  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-2">
            Our Track Record
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
            Proven Results
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-xl p-5 text-center border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {studentResults.map((student, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-lg font-bold text-slate-600">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.board} • {student.subject}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">{student.result}</div>
              </div>
              <p className="text-slate-600 text-sm italic">"{student.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="admission" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-2">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-slate-900">
            Take Admission
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-sm mt-1">
            Fill the form below and our team will contact you shortly
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Student Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                    placeholder="Enter student name"
                    data-testid="form-name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Parent's Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                    placeholder="Enter parent's name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Class *</label>
                  <select required className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-white">
                    <option value="">Select Class</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Board *</label>
                  <select required className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-white">
                    <option value="">Select Board</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>State Board</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                    placeholder="Enter phone number"
                    data-testid="form-phone"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                    placeholder="Enter email address"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                data-testid="form-submit"
              >
                {submitted ? "✓ Submitted!" : "Submit Enquiry"}
              </button>
            </form>

            <div className="mt-4 h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.1!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600">123 Education Hub, New Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600">hello@brightminds.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600">Mon - Sat: 8AM - 8PM</span>
                </div>
              </div>
            </div>

            <div className="bg-green-500 rounded-xl p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-medium text-sm">WhatsApp Us</span>
              </div>
              <p className="text-xs text-green-100 mb-3">Get quick responses on WhatsApp</p>
              <a href="https://wa.me/919876543210" className="block text-center bg-white text-green-600 py-2 rounded-lg text-sm font-medium hover:bg-green-50">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 text-white">
              <p className="text-xs text-blue-100 mb-2">Need instant help?</p>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-white text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Notices() {
  return (
    <section id="notices" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
            Latest Updates
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {notices.map((notice, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-xl p-5 flex gap-4 items-center border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                <div className="text-xl font-bold">{notice.date}</div>
                <div className="text-[10px] uppercase tracking-wide">{notice.month}</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">{notice.title}</h4>
                <p className="text-slate-500 text-sm">{notice.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] uppercase text-blue-600 mb-2">
            Demo Mode
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900">
            Explore Our Dashboards
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 mt-2">
            Click below to explore each dashboard (no login required)
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Student Dashboard</h3>
            <p className="text-slate-500 text-sm mb-6">View courses, schedule, materials, tests & results</p>
            <a 
              href="/dashboard" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Open Student Dashboard
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Teacher Dashboard</h3>
            <p className="text-slate-500 text-sm mb-6">Manage classes, students, materials, attendance</p>
            <a 
              href="/teacher" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Open Teacher Dashboard
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Admin Panel</h3>
            <p className="text-slate-500 text-sm mb-6">Manage teachers, students, materials & announcements</p>
            <a 
              href="/admin" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Open Admin Panel
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold mb-4">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <span>Bright<span className="text-blue-500">Minds</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner in academic excellence. Helping students achieve their dreams since 2014.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Courses", "Teachers", "Results", "Admission"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Education Hub, Delhi</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@brightminds.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-slate-400">
          © 2025 BrightMinds Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function AuthModal({ isOpen, onClose, initialTab = "login" }: { isOpen: boolean; onClose: () => void; initialTab?: "login" | "signup" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      class: formData.get('class'),
      board: formData.get('board'),
    };

    try {
      const endpoint = activeTab === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          if (result.user.role === 'admin') {
            window.location.href = '/admin';
          } else if (result.user.role === 'teacher') {
            window.location.href = '/teacher';
          } else {
            window.location.href = '/dashboard';
          }
        }, 1500);
      } else {
        alert(result.error || 'Something went wrong');
        setSubmitted(false);
      }
    } catch (error) {
      alert('Network error');
      setSubmitted(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-extrabold text-slate-900">Bright<span className="text-blue-600">Minds</span></span>
          </div>

          <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setActiveTab("login")}
              className={clsx(
                "flex-1 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeTab === "login" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={clsx(
                "flex-1 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeTab === "signup" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === "signup" && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email *</label>
              <input 
                type="email" 
                name="email"
                required 
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                placeholder="Enter your email"
                suppressHydrationWarning
              />
            </div>
            {activeTab === "signup" && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                  placeholder="Enter phone number"
                />
              </div>
            )}
            {activeTab === "signup" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Class *</label>
                  <select 
                    name="class"
                    required 
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-white"
                  >
                    <option value="">Select</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Board *</label>
                  <select 
                    name="board"
                    required 
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-white"
                  >
                    <option value="">Select</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>State Board</option>
                  </select>
                </div>
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Password *</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {activeTab === "login" && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-blue-600 hover:underline">Forgot Password?</a>
              </div>
            )}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {submitted ? "✓ Success!" : activeTab === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={() => setActiveTab("signup")} className="text-blue-600 font-medium hover:underline">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={() => setActiveTab("login")} className="text-blue-600 font-medium hover:underline">
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login");

  const openLogin = () => {
    setAuthModalTab("login");
    setAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthModalTab("signup");
    setAuthModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar onLoginClick={openLogin} />
      <Hero onCtaClick={openSignup} />
      <Features />
      <Courses />
      <Teachers />
      <Results />
      <Contact />
      <Notices />
      <DemoSection />
      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialTab={authModalTab} />
    </main>
  );
}