import React, { useState, useEffect } from 'react';
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
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolio } from './data/portfolio';
import { AIChatbot } from './components/AIChatbot';

// --- Data ---

const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwQVhk4l2AtLxl63xXMW7TP91hznjtIdaEJrbcsklbQs1CQWg9IlEtng-QyXBqucxq1iQ/exec";

const services = [
  {
    id: 1,
    title: "Programming & Technical Help",
    icon: <Code2 className="w-8 h-8" />,
    items: ["C / C++", "Python", "DBMS", "Debugging", "Assignment Help"],
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    id: 2,
    title: "AI & Data Science",
    icon: <BrainCircuit className="w-8 h-8" />,
    items: ["Machine Learning", "Deep Learning", "Data Analysis", "Computer Vision"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    id: 3,
    title: "Website Development",
    icon: <Globe className="w-8 h-8" />,
    items: ["Static Websites", "Dynamic Websites", "Full Stack Systems"],
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    id: 4,
    title: "Student Project Services",
    icon: <GraduationCap className="w-8 h-8" />,
    items: ["Minor Projects", "Major Projects", "Research Papers"],
    color: "bg-fuchsia-500/10 text-fuchsia-600"
  },
  {
    id: 5,
    title: "Academic & Professional",
    icon: <UserCircle className="w-8 h-8" />,
    items: ["Assignments", "Resume + ATS Optimization", "Portfolio Creation"],
    color: "bg-violet-500/10 text-violet-600"
  },
  {
    id: 6,
    title: "Business & Hosting",
    icon: <Briefcase className="w-8 h-8" />,
    items: ["Landing Pages", "Domain & Hosting Setup", "Custom Features"],
    color: "bg-purple-500/10 text-purple-600"
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
    <path 
      d="M16 2L4 9V23L16 30L28 23V9L16 2Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinejoin="round" 
      className="opacity-40"
    />
    <path 
      d="M10 14V22L16 18L22 22V14" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="16" cy="9" r="2" fill="currentColor" />
    <path 
      d="M16 18V25" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      className="opacity-60"
    />
  </svg>
);

const Logo = ({ isDark = false, size = "md" }: { isDark?: boolean, size?: "sm" | "md" | "lg" }) => {
  const boxSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const iconSize = size === "sm" ? "w-5 h-5" : size === "lg" ? "w-7 h-7" : "w-6 h-6";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";
  
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative ${boxSize}`}>
        <div className="absolute inset-0 bg-amber-600 rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
        <div className="absolute inset-0 bg-rose-500 rounded-xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-300"></div>
        <div className={`relative ${boxSize} bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-transform duration-300`}>
          <LogoMark className={iconSize} />
        </div>
      </div>
      <div className="leading-none">
        <span className={`${textSize} font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          indiwebpros
        </span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo isDark={!isScrolled} size={isScrolled ? "md" : "lg"} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-amber-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-amber-200"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
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
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-slate-900 text-white px-6 py-3 rounded-xl text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
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
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-slate-900 uppercase bg-slate-50 rounded-full">
            Expert Tech Solutions
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Professional Programming, AI & <br className="hidden lg:block" />
            <span className="text-slate-900">Website Development</span> Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            We help students and businesses with programming assignments, AI solutions, academic projects, and professional websites.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-200 flex items-center justify-center gap-2"
            >
              View Services <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-amber-600 border border-amber-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all"
            >
              Enquire Now
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-12">
            {[
              { label: "Fast Delivery", icon: <Clock className="w-5 h-5 text-slate-900" /> },
              { label: "Affordable Pricing", icon: <Zap className="w-5 h-5 text-slate-900" /> },
              { label: "Expert Support", icon: <ShieldCheck className="w-5 h-5 text-slate-900" /> },
              { label: "24/7 Enquiry", icon: <MessageSquare className="w-5 h-5 text-slate-900" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-slate-600 font-medium text-sm">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Specialized Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive technical solutions tailored for academic success and business growth.</p>
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
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
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
                      <a href="#contact" className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-600 hover:text-white transition-all">
                        Enquire Now
                      </a>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Take a look at some of our featured projects and technical implementations.</p>
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
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === type 
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
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                    subFilter === cat 
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
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-slate-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 flex-grow line-clamp-2">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
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
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-300 transition-colors group/link mt-auto"
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our streamlined process ensures high-quality delivery and client satisfaction.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Get Help With Your Project</h2>
            <p className="text-lg text-slate-600 mb-8">
              Have a complex assignment or a business idea? Reach out to us and let's build something amazing together.
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
                  <p className="font-bold text-slate-900">+91 80742 23801</p>
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
              Empowering students and businesses with cutting-edge technical solutions, AI implementations, and professional web presence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/we-freelance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/helpingstudents2026/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-slate-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-slate-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-slate-400 transition-colors">Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-slate-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admin@indiwebpros.in</li>
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> +91 80742 23801</li>
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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-100 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
