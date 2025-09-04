import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, ExternalLink, Code, Zap, Settings, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// EDITABLE PROJECTS CONFIGURATION - Edit this object to modify projects
const PROJECTS_CONFIG = [
  {
    name: "Custom CRM for Internal Use",
    description: "Streamlined customer management system",
    link: "https://example.com/crm-project",
    tech: "React, Node.js"
  },
  {
    name: "AI-Powered Notepad",
    description: "Smart note-taking with AI assistance",
    link: "https://example.com/ai-notepad",
    tech: "Next.js, OpenAI"
  },
  {
    name: "Emergency Dispatch Tool",
    description: "Real-time emergency response system",
    link: "https://example.com/dispatch-tool",
    tech: "React, WebSocket"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailClick = () => {
    const subject = encodeURIComponent("I'd like to connect with you");
    const body = encodeURIComponent(`Hi Moshe,

I saw your website and wanted to reach out. Here's what I'm looking for:

[Insert details here]

Looking forward to your response.`);
    
    window.location.href = `mailto:mb6428133@gmail.com?subject=${subject}&body=${body}`;
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:845-642-8133";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Moshe Braun
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              I help people bring software ideas to life.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
              AI tools, custom websites, automation — if it involves tech, I can help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Moshe Braun. I've worked on all kinds of software — from internal tools 
                to public websites, to AI integrations that solve real problems.
              </p>
              <p>
                I don't like fluff, just clean solutions. If you're building something with tech, I can help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I Can Help
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Build fast & modern websites",
                description: "Responsive, performant web applications"
              },
              {
                icon: Zap,
                title: "Automate workflows with AI",
                description: "Smart automation solutions"
              },
              {
                icon: Settings,
                title: "Debug or upgrade existing software",
                description: "Optimize and modernize your tech stack"
              },
              {
                icon: MessageSquare,
                title: "Offer strategic tech advice",
                description: "Technology consulting and planning"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A few things I've worked on
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_CONFIG.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  {project.tech}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Let's connect
            </h2>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmailClick}
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Me
                </motion.button>
              </div>
              
              <div className="border-t border-gray-100 pt-8">
                <p className="text-gray-600 mb-6">Or just reach out directly:</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-mono">845-642-8133</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-mono">mb6428133@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200"
        >
          <div className="flex items-center gap-6">
            {[
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Section Anchors */}
      <div id="about" className="absolute" style={{ top: "100vh" }} />
      <div id="services" className="absolute" style={{ top: "200vh" }} />
      <div id="projects" className="absolute" style={{ top: "300vh" }} />
      <div id="contact" className="absolute" style={{ top: "400vh" }} />
    </div>
  );
}