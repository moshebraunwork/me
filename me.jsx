import React, { useState, useEffect } from "react";
import {
  ArrowRight, Mail, Globe, Zap, Server, Terminal,
  ChevronDown, Send, CheckCircle, Layers,
  MessageSquare, User, AtSign
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || "Not specified"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:support@mobrauntech.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/85 backdrop-blur-md rounded-2xl px-6 py-3.5 shadow-lg border border-gray-200/70 flex items-center justify-between"
        >
          <span className="font-bold text-gray-900 text-lg tracking-tight">
            mobr<span className="text-blue-600">aun</span>tech
          </span>
          <div className="hidden sm:flex items-center gap-7">
            {[
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Work", id: "work" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40" />
        <div
          className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        />
        <div
          className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-sm font-medium">
                Website Dev · Automation · Backend
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-5 tracking-tight">
              mobrauntech
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mb-4">
              We build software that works.
            </p>
            <p className="text-lg text-gray-500 mb-5 max-w-xl mx-auto leading-relaxed">
              Custom websites, automation, backend systems — if it involves code, we can build it.
            </p>
            <p className="text-base text-blue-600 font-semibold mb-10">
              Projects starting at $499
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-blue-100"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("work")}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollTo("about")}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.button>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Software development you can actually rely on
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  We're mobrauntech — a software development company that builds real solutions
                  for real businesses. Whether you need a brand-new website, a custom automation,
                  or a backend system, we've got you covered.
                </p>
                <p>
                  No fluff, no bloated processes. Just clean, functional software delivered on time.
                </p>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200 group"
              >
                Work with us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Happy Clients", value: "40+" },
                { label: "Years Experience", value: "5+" },
                { label: "Starting Price", value: "$499" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From front-end to back-end, automation to deployment — we handle the full spectrum
              of software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Website Development",
                description:
                  "Fast, modern websites and web apps built to perform. E-commerce, portfolios, dashboards, landing pages — whatever you need.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description:
                  "Eliminate repetitive tasks. We build automations that save time and reduce errors across your business.",
              },
              {
                icon: Server,
                title: "Backend & APIs",
                description:
                  "Robust server-side systems, REST APIs, databases, and integrations that power your applications.",
              },
              {
                icon: Terminal,
                title: "Custom Software",
                description:
                  "Bespoke tools built exactly to your spec. Internal tools, scripts, integrations — if you can describe it, we can build it.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl border border-gray-200 group-hover:border-blue-200 flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-4">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Simple from start to finish
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Tell us what you need",
                description:
                  "Reach out with your idea or requirement. No lengthy forms — just a quick conversation.",
              },
              {
                step: "02",
                icon: Layers,
                title: "We scope & plan",
                description:
                  "We'll outline exactly what we'll build, how long it'll take, and what it'll cost. No surprises.",
              },
              {
                step: "03",
                icon: CheckCircle,
                title: "We build & deliver",
                description:
                  "You get a working product. Clean, tested, and ready to go live.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <p className="text-6xl font-bold text-gray-100 mb-3 leading-none">{item.step}</p>
                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work / Projects ── */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A few things we've built
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Custom CRM",
                description:
                  "Streamlined customer management system built for an internal team, replacing a spreadsheet-based workflow.",
                category: "Web App",
              },
              {
                title: "AI-Powered Notepad",
                description:
                  "Smart note-taking application with AI writing assistance and auto-organization features.",
                category: "Automation",
              },
              {
                title: "Emergency Dispatch Tool",
                description:
                  "Real-time coordination system for emergency response teams with live status tracking.",
                category: "Backend",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Left col */}
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-4">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Let's build something together
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Ready to start a project or just have a question? Fill out the form and we'll get
                back to you promptly.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Email us</p>
                    <a
                      href="mailto:support@mobrauntech.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                    >
                      support@mobrauntech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className="mt-10 border-t border-gray-100 pt-8 space-y-3">
                {[
                  "Fast turnaround on quotes",
                  "No commitment to inquire",
                  "Projects starting at $499",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right col — form */}
            <div>
              {formSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl border border-green-200 bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                    <p className="text-gray-500 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Your name"
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="you@company.com"
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition text-gray-600 bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="Backend & APIs">Backend &amp; APIs</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Other">Other / Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={5}
                      placeholder="Tell us about your project — what you need, your timeline, budget, etc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-blue-100"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-950 text-gray-500 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-white text-base tracking-tight">
            mobr<span className="text-blue-400">aun</span>tech
          </span>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} mobrauntech. All rights reserved.
          </p>
          <a
            href="mailto:support@mobrauntech.com"
            className="text-sm hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            support@mobrauntech.com
          </a>
        </div>
      </footer>
    </div>
  );
}
