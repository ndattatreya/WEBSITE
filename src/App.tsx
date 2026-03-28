import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Code2,
  BrainCircuit,
  Globe,
  GraduationCap,
  UserCircle,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronRight,
  Star,
  Zap,
  ShieldCheck,
  ExternalLink,
  Clock,
  Search,
  Phone,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolio } from './data/portfolio';
import { AIChatbot } from './components/AIChatbot';
const CapstonePage = lazy(() => import('./pages/Capstone'))
const FinalYearPage = lazy(() => import('./pages/FinalYear'))
const ResearchPage = lazy(() => import('./pages/Research'))
const PlagiarismPage = lazy(() => import('./pages/Plagiarism'))

// --- Data ---
const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwQVhk4l2AtLxl63xXMW7TP91hznjtIdaEJrbcsklbQs1CQWg9IlEtng-QyXBqucxq1iQ/exec";

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Floating WhatsApp Button ---
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918074223801"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-6 h-6 fill-current" />

      <span className="absolute left-full ml-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

const services = [
  {
    id: 1,
    title: "Web Development Services",
    icon: <Globe className="w-8 h-8" />,
    items: [
      "Custom Business Websites",
      "High-Converting Landing Pages",
      "E-commerce Solutions (Shopify/MERN)",
      "SEO-Friendly Architecture",
      "Progressive Web Apps (PWA)"
    ],
    color: "bg-amber-500/10 text-amber-600",
    description: "We build fast, responsive, and SEO-optimized websites that turn visitors into loyal customers. From simple landing pages to complex e-commerce platforms, IndiWebPros ensures your business stands out online."
  },
  {
    id: 2,
    title: "AI Solutions & Automation",
    icon: <BrainCircuit className="w-8 h-8" />,
    items: [
      "Intelligent AI Chatbots",
      "Smart Recommendation Systems",
      "Business Process Automation",
      "Predictive Data Analytics",
      "Custom Machine Learning Models"
    ],
    color: "bg-orange-500/10 text-orange-600",
    description: "Leverage the power of Artificial Intelligence to automate your workflows and provide personalized experiences. IndiWebPros develops smart applications that save time and increase efficiency."
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: <Code2 className="w-8 h-8" />,
    items: [
      "React & Next.js Frontend",
      "Node.js & Express Backend",
      "Scalable Database Design",
      "API Integration & Development",
      "Cloud Deployment & Hosting"
    ],
    color: "bg-rose-500/10 text-rose-600",
    description: "Our full-stack expertise ensures your application is robust from the ground up. We use modern technologies like React and Node.js to build scalable, high-performance systems for your business."
  },
  {
    id: 4,
    title: "Technical Consulting",
    icon: <Zap className="w-8 h-8" />,
    items: [
      "Tech Stack Selection",
      "Code Audit & Optimization",
      "Security Best Practices",
      "Performance Tuning",
      "Scalability Planning"
    ],
    color: "bg-indigo-500/10 text-indigo-600",
    description: "Not sure which technology to choose? IndiWebPros provides expert technical consulting to help you make informed decisions that align with your long-term business goals."
  }
];

const pricingData = [
  {
    category: "Programming & Technical Help",
    plans: [
      { name: "C / C++ Help", desc: "Assignments / Debugging", price: "₹500" },
      { name: "Python Help", desc: "Scripting / Logic", price: "₹650" },
      { name: "DBMS Help", desc: "SQL / Schema Design", price: "₹800" }
    ]
  },
  {
    category: "AI & Data Science",
    plans: [
      { name: "Machine Learning", desc: "Model Training / Evaluation", price: "₹2K – ₹4K" },
      { name: "Deep Learning", desc: "Neural Networks / Computer Vision", price: "₹2K – ₹6K" },
      { name: "Data Analysis", desc: "Custom Pricing", price: "Contact Us" }
    ]
  },
  {
    category: "Website Development",
    plans: [
      { name: "Static Website", desc: "3–5 Pages / Portfolio", price: "₹1500" },
      { name: "Dynamic Website", desc: "Login / Database / Admin Panel", price: "₹3000" },
      { name: "Full Stack System", desc: "Complete Application", price: "₹5K – ₹8K" }
    ]
  },
  {
    category: "Student Project Services",
    plans: [
      { name: "Minor Project", desc: "Code + Report + PPT", price: "₹3K – ₹8K" },
      { name: "Major Project", desc: "Complete Academic Support", price: "₹5K – ₹10K" },
      { name: "Research Paper", desc: "6–10+ Pages", price: "₹1000+" }
    ]
  },
  {
    category: "Academic & Professional",
    plans: [
      { name: "Assignments", desc: "Quick Solutions", price: "₹200 – ₹500" },
      { name: "Resume + ATS", desc: "Optimization", price: "₹1000" },
      { name: "Portfolio", desc: "Creation", price: "₹700" }
    ]
  },
  {
    category: "Business & Hosting",
    plans: [
      { name: "Landing Page", desc: "Marketing / Sales", price: "₹3K – ₹15K" },
      { name: "Domain Hosting", desc: "Setup", price: "₹1K – ₹2K" },
      { name: "Custom Features", desc: "Chatbots / Payment", price: "₹750+" }
    ]
  }
];

const processSteps = [
  { title: "Requirement Discussion", icon: <MessageSquare className="w-6 h-6" />, desc: "We understand your needs and project goals." },
  { title: "Solution Design", icon: <Zap className="w-6 h-6" />, desc: "We architect the best technical approach." },
  { title: "Development", icon: <Code2 className="w-6 h-6" />, desc: "Our experts build your solution with precision." },
  { title: "Delivery & Support", icon: <ShieldCheck className="w-6 h-6" />, desc: "Final delivery with 24/7 technical support." }
];

const testimonials = [
  { name: "Rahul S.", text: "Very helpful for programming assignments and fast delivery. Highly recommended!", role: "Student" },
  { name: "Priya M.", text: "Professional AI project support and great communication throughout the process.", role: "Researcher" },
  { name: "Amit K.", text: "The website they built for my portfolio is amazing. Clean and fast!", role: "Freelancer" }
];

// --- Components ---

const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Outer Globe Arc */}
    <path
      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16"
      stroke="url(#logo-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-30"
    />
    {/* Brackets */}
    <path
      d="M9 10L5 16L9 22"
      stroke="url(#logo-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 10L27 16L23 22"
      stroke="url(#logo-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central AI Node & Connections */}
    <circle cx="16" cy="16" r="3.5" fill="url(#logo-gradient)" />
    <path
      d="M16 7V12.5M16 19.5V25M7 16H12.5M19.5 16H25"
      stroke="url(#logo-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="7" r="1" fill="url(#logo-gradient)" className="opacity-60" />
    <circle cx="16" cy="25" r="1" fill="url(#logo-gradient)" className="opacity-60" />
    <circle cx="7" cy="16" r="1" fill="url(#logo-gradient)" className="opacity-60" />
    <circle cx="25" cy="16" r="1" fill="url(#logo-gradient)" className="opacity-60" />
  </svg>
);

const Logo = ({ isDark = false, size = "md" }: { isDark?: boolean, size?: "sm" | "md" | "lg" }) => {
  const boxSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-14 h-14" : "w-11 h-11";
  const iconSize = size === "sm" ? "w-5 h-5" : size === "lg" ? "w-8 h-8" : "w-7 h-7";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative ${boxSize} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-cyan-500/10 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-sm"></div>
        <div className="absolute inset-0 bg-purple-500/10 rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 blur-sm"></div>
        <div className={`relative ${boxSize} bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-all duration-500`}>
          <LogoMark className={iconSize} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-500 transition-colors duration-300`}>
          INDI<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">WEB</span>PROS
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">Tech Solutions</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md shadow-sm py-5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo isDark={!isScrolled && location.pathname === '/'} size={isScrolled ? "md" : "lg"} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors ${isActive(link.href)
                  ? 'text-amber-600'
                  : isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-amber-200"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled || location.pathname !== '/' ? 'text-slate-600' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium ${isActive(link.href) ? 'text-amber-600' : 'text-slate-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-6 py-3 rounded-xl text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-200 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Badge */}
          <span className="inline-block px-3 py-1 mb-4 text-[10px] sm:text-xs font-bold tracking-widest text-slate-900 uppercase bg-slate-50 rounded-full">
            IndiWebPros – Expert Tech Solutions
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight mb-4">
            IndiWebPros –{" "}
            <span className="text-amber-600 block sm:inline">
              Web Development & AI Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
            Build powerful websites and AI solutions with{" "}
            <strong>IndiWebPros</strong>. We deliver{" "}
            <strong>full stack development</strong>, automation, and SEO-driven
            digital products to help you grow faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-amber-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto bg-white text-amber-600 border border-amber-200 px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-amber-50 transition-all"
            >
              Free Consultation
            </Link>

          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-slate-100 pt-8">

            {[
              { label: "Fast Delivery", sub: "Launch in Days", icon: <Clock className="w-4 h-4" /> },
              { label: "Secure & Scalable", sub: "Enterprise Grade", icon: <Zap className="w-4 h-4" /> },
              { label: "Expert Tech", sub: "Modern Stack", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "24/7 Support", sub: "Always Online", icon: <MessageSquare className="w-4 h-4" /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-slate-600 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <span className="font-semibold text-slate-900">{item.label}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400">{item.sub}</span>
              </div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">About IndiWebPros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">IndiWebPros: Your Strategic Partner in Digital Growth</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                At <strong>IndiWebPros</strong>, we don't just build websites; we create digital assets that drive revenue.
                As a premier <strong>freelance web developer in India</strong>, we understand that your online presence is the face of your business.
                That's why we focus on building <strong>high-converting websites</strong> that combine stunning design with <strong>SEO-friendly architecture</strong>.
              </p>
              <p>
                Our expertise spans across <strong>full stack development</strong> using the MERN stack (React, Node.js, MongoDB) and
                <strong>AI-driven solutions</strong> that automate repetitive tasks and provide intelligent insights.
                We help businesses in India and globally to stay ahead of the curve by implementing
                <strong>smart applications</strong> and <strong>scalable backend systems</strong>.
              </p>
              <p>
                Whether you are a startup looking for your first <strong>MVP</strong> or an established enterprise needing
                <strong>technical consulting</strong>, IndiWebPros delivers custom solutions that are fast, secure, and
                optimized for <strong>maximum client conversion</strong>.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-1">50+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-1">100%</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="IndiWebPros Team working on professional web development and AI projects"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-2xl font-bold mb-1">5+ Years</p>
              <p className="text-amber-100 text-sm">Industry Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    { title: "Fast Delivery", desc: "We understand that time is money. IndiWebPros delivers high-quality projects on time, ensuring your business launches without delays.", icon: <Clock className="w-6 h-6" /> },
    { title: "Affordable Pricing", desc: "Get premium web development and AI solutions at competitive rates. We offer flexible pricing models tailored to your budget.", icon: <Zap className="w-6 h-6" /> },
    { title: "Custom Solutions", desc: "No cookie-cutter templates. Every project at IndiWebPros is custom-built to meet your unique business requirements and goals.", icon: <UserCircle className="w-6 h-6" /> },
    { title: "AI Expertise", desc: "Stay ahead of the competition with our cutting-edge AI expertise. We implement smart features that automate and optimize your business.", icon: <BrainCircuit className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose IndiWebPros?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine technical mastery with a commitment to excellence, making us the preferred choice for <strong>web development</strong> and <strong>AI solutions</strong> in India.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expert Web Development & AI Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            <strong>IndiWebPros</strong> provides comprehensive <strong>full stack development</strong> and <strong>AI-driven technical solutions</strong>
            tailored for business growth, performance, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <ChevronRight className="w-4 h-4 text-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Quality services at competitive rates. Choose the plan that fits your needs.</p>
        </div>

        <div className="space-y-16">
          {pricingData.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
                {group.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {group.plans.map((plan, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{plan.name}</h4>
                      <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                      <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
                      <Link to="/contact" className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-600 hover:text-white transition-all">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'student' | 'business'>('all');
  const [subFilter, setSubFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Get unique categories for the current filter type
  const availableSubFilters = React.useMemo(() => {
    if (filter === 'all') return [];
    const categories = portfolio
      .filter(p => p.type === filter)
      .map(p => p.category);
    return ['all', ...Array.from(new Set(categories))];
  }, [filter]);

  // Reset subFilter and showAll when main filter changes
  useEffect(() => {
    setSubFilter('all');
    setShowAll(false);
  }, [filter]);

  const filteredPortfolio = portfolio.filter(project => {
    const matchesFilter = filter === 'all' ? true : project.type === filter;
    const matchesSubFilter = subFilter === 'all' ? true : project.category === subFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSubFilter && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work | Portfolio of Completed Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Explore the IndiWebPros portfolio featuring successful case studies in web development, AI solutions, and full-stack applications.</p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects by title, tech, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all text-sm placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 p-1 bg-slate-800 rounded-2xl border border-slate-700">
            {['all', 'student', 'business'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === type
                  ? 'bg-slate-700 text-white shadow-lg shadow-slate-900/20'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Filter Tabs */}
        <AnimatePresence>
          {availableSubFilters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {availableSubFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSubFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${subFilter === cat
                    ? 'bg-slate-700/10 border-slate-500 text-slate-400'
                    : 'bg-slate-800/50 border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-600'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredPortfolio.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPortfolio.slice(0, showAll ? undefined : 6).map((project, i) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="group bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700/50 flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} - Developed by IndiWebPros`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-slate-400 transition-colors">{project.title}</h3>
                        {project.problem && (
                          <span className="text-[9px] font-bold uppercase tracking-widest bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20">
                            Case Study
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.desc}</p>

                      {project.problem && (
                        <div className="mb-4 space-y-3 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30">
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">The Problem</h4>
                            <p className="text-xs text-slate-400 line-clamp-2 italic">"{project.problem}"</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/70 mb-1">The Result</h4>
                            <p className="text-xs text-slate-300 line-clamp-2 font-medium">{project.result}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="text-[10px] font-medium px-2 py-1 bg-slate-700/50 rounded-md text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-300 transition-colors group/link"
                        >
                          View Live Project <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredPortfolio.length > 6 && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-amber-900/20 group"
                >
                  {showAll ? 'Show Less' : 'View More Projects'}
                  <ChevronRight className={`w-5 h-5 transition-transform ${showAll ? '-rotate-90' : 'rotate-90 group-hover:translate-x-1'}`} />
                </button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-800/30 rounded-3xl border border-dashed border-slate-700"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-slate-400 mb-6">We couldn't find any projects matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
                setSubFilter('all');
              }}
              className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-950 transition-all"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How IndiWebPros Delivers Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our streamlined development process ensures high-quality delivery, transparency, and complete client satisfaction.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-slate-900 group-hover:text-slate-900 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Step {i + 1}: {step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say About IndiWebPros</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-white">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Service: 'Programming Help',
    ProjectTitle: '',
    ExpectedPrice: '',
    Message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const data = new FormData();
      data.append('Name', formData.Name);
      data.append('Email', formData.Email);
      data.append('Phone', formData.Phone);
      data.append('Service', formData.Service);
      data.append('Message', formData.Message);
      data.append('Source', 'Website');
      data.append('Timestamp', new Date().toISOString());
      data.append('ProjectTitle', formData.ProjectTitle);
      data.append('ExpectedPrice', formData.ExpectedPrice);

      await fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Google Apps Script requires no-cors for simple POST if not handling preflight
      });

      setSuccessMessage("Thank you! Your enquiry has been received. Our team will contact you soon.");
      setFormData({
        Name: '',
        Email: '',
        Phone: '',
        Service: 'Programming Help',
        ProjectTitle: '',
        ExpectedPrice: '',
        Message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Us Today</h2>
            <p className="text-lg text-slate-600 mb-8">
              Ready to start your project? Reach out to IndiWebPros and let's build something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="font-bold text-slate-900">admin@indiwebpros.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp Support</p>
                  <a className="font-bold text-slate-900" href="https://wa.me/918074223801">Click Here</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/918074223801"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-950 transition-all shadow-lg shadow-slate-100"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            {successMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enquiry Sent!</h3>
                <p className="text-slate-600 mb-8">{successMessage}</p>
                <button
                  onClick={() => setSuccessMessage('')}
                  className="text-slate-900 font-bold hover:underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      required
                      name="Phone"
                      value={formData.Phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service</label>
                    <select
                      name="Service"
                      value={formData.Service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all appearance-none bg-white text-sm"
                    >
                      <option>Programming Help</option>
                      <option>AI & Data Science</option>
                      <option>Website Development</option>
                      <option>Student Projects</option>
                      <option>Academic & Professional</option>
                      <option>Business & Hosting</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Title</label>
                    <input
                      required
                      name="ProjectTitle"
                      value={formData.ProjectTitle}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. AI Chatbot"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Expected Price</label>
                    <input
                      required
                      name="ExpectedPrice"
                      value={formData.ExpectedPrice}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. ₹5000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all text-sm"
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  className={`w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-lg shadow-amber-100 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="mb-6">
              <Logo isDark={true} />
            </div>
            <p className="max-w-sm mb-8">
              IndiWebPros empowers businesses and students with cutting-edge technical solutions, AI implementations, and professional web presence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/we-freelance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/indiwebpros" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full Stack Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Student Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admin@indiwebpros.in</li>
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> +91 xx</li>
              <li className="mt-4">
                <a
                  href="https://wa.me/918074223801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-rose-700 transition-all"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 IndiWebPros. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IndiWebPros | Expert Freelance Web Developer India & AI Solutions</title>
        <meta name="description" content="IndiWebPros offers high-performance web development, AI solutions, and full-stack services in India. Boost your business with our expert digital solutions." />
        <link rel="canonical" href="https://indiwebpros.in/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IndiWebPros",
              "url": "https://indiwebpros.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://indiwebpros.in/projects?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "IndiWebPros",
              "image": "https://indiwebpros.in/logo.png",
              "@id": "https://indiwebpros.in/",
              "url": "https://indiwebpros.in/",
              "telephone": "+919344482322",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.5937,
                "longitude": 78.9629
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.linkedin.com/company/indiwebpros",
                "https://github.com/indiwebpros"
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <About />
      <WhyChoose />

      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
};

const AboutPage = () => (
  <div className="pt-20">
    <Helmet>
      <title>About Us | IndiWebPros - Expert Web & AI Developers India</title>
      <meta name="description" content="Learn more about IndiWebPros, your partner in digital excellence. We specialize in high-performance web development and AI solutions for startups and businesses." />
      <link rel="canonical" href="https://indiwebpros.in/about" />
    </Helmet>
    <About />
    <WhyChoose />
    <Process />
  </div>
);

const ServicesPage = () => (
  <div className="pt-20">
    <Helmet>
      <title>Web Development & AI Services | IndiWebPros India</title>
      <meta name="description" content="Explore our expert web development services, custom AI solutions, and full-stack development. We build scalable digital products for global clients." />
      <link rel="canonical" href="https://indiwebpros.in/services" />
    </Helmet>
    <Services />

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Trust Our Services</h2>
            <div className="space-y-6">
              {[
                { title: "Strategic Approach", desc: "We don't just write code; we build solutions that align with your business objectives." },
                { title: "Cutting-Edge Tech", desc: "We use the latest frameworks like Next.js, React, and OpenAI to ensure your project is future-proof." },
                { title: "SEO-First Mindset", desc: "Every website we build is optimized for search engines from day one to ensure maximum visibility." },
                { title: "Dedicated Support", desc: "We provide ongoing maintenance and support to ensure your digital assets continue to perform." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
              <p className="text-slate-400 mb-8">Get a free consultation and a custom quote for your project. Let's build something amazing together.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition-all">
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>

    <Services />

    {/* 🔥 NEW SEO PROJECT LINKS SECTION */}
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Explore Popular Student Projects
        </h2>

        <p className="text-slate-600 max-w-3xl mb-10">
          We provide complete support for final year academic projects including development, documentation, and deployment. Explore our most in-demand project categories below.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <Link to="/ai-projects" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-amber-600 mb-2">AI Projects</h3>
            <p className="text-sm text-slate-600">Machine learning, NLP, chatbots, and intelligent systems.</p>
          </Link>

          <Link to="/web-development-projects" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-amber-600 mb-2">Web Projects</h3>
            <p className="text-sm text-slate-600">Full-stack MERN apps, portals, and real-world platforms.</p>
          </Link>

          <Link to="/data-science-projects" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-amber-600 mb-2">Data Science</h3>
            <p className="text-sm text-slate-600">Prediction models, analytics, and dashboards.</p>
          </Link>

          <Link to="/iot-projects" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-amber-600 mb-2">IoT Projects</h3>
            <p className="text-sm text-slate-600">Smart systems using sensors, automation, and hardware.</p>
          </Link>

        </div>
      </div>
    </section>

    <Pricing />
    <Process />
  </div>
);

const ProjectsPage = () => (
  <div className="pt-20">
    <Helmet>
      <title>Portfolio | IndiWebPros - Web & AI Project Showcases</title>
      <meta name="description" content="Browse our portfolio of successful web development and AI projects. See how IndiWebPros helps clients achieve digital success." />
      <link rel="canonical" href="https://indiwebpros.in/projects" />
    </Helmet>
    <Portfolio />

    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Have a Project in Mind?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">Whether you're a startup looking for your first website or an established business needing AI automation, we're here to help you succeed.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-100">
            Start Your Project
          </Link>
          <a href="https://wa.me/918074223801" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <Helmet>
      <title>Contact Us | IndiWebPros - Get a Free Quote Today</title>
      <meta name="description" content="Ready to start your project? Contact IndiWebPros for a free consultation and quote on web development and AI solutions." />
      <link rel="canonical" href="https://indiwebpros.in/contact" />
    </Helmet>

    <Contact />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-slate-100 selection:text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 🔥 ADD THESE NEW SEO PAGES */}
            <Route path="/capstone-project-help" element={<Suspense fallback={<div>Loading...</div>}><CapstonePage /></Suspense>} />
            <Route path="/final-year-project-help" element={<Suspense fallback={<div>Loading...</div>}><FinalYearPage /></Suspense>} />
            <Route path="/research-paper-writing" element={<Suspense fallback={<div>Loading...</div>}><ResearchPage /></Suspense>} />
            <Route path="/plagiarism-removal-service" element={<Suspense fallback={<div>Loading...</div>}><PlagiarismPage /></Suspense>} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
