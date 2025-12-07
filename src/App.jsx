import React, { useState } from 'react';
import { 
  Instagram, Play, Zap, Menu, X, ArrowUpRight, Phone, 
  Bike, Heart, Building2, Video, Camera, ArrowRight, MessageCircle
} from 'lucide-react';
import logo from "../src/assets/logo.jpeg"

// Custom Logo (Play Button)

const StrekzzzLogo = ({ className = "" }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    <img
      src={logo}
      alt="Strekzzz Logo"
      className="w-full h-full object-cover"
    />
  </div>
);


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Toggle Contact Modal
  const toggleContactModal = () => setShowContactModal(!showContactModal);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white p-2 md:p-4">
      
      {/* Navbar (Floating Pill) */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-gray-200/50 rounded-full px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <StrekzzzLogo className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">Strekzzz.</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </div>

          <div className="flex items-center gap-3">
             <a 
              href="https://www.instagram.com/streakzzz.1?igsh=MWZlOTFjd2g1aHZ6Yg==" 
              target="_blank"
              className="hidden md:flex bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition-all items-center gap-2"
            >
              Let's Talk <ArrowUpRight size={16} />
            </a>
            <button className="md:hidden p-2 bg-gray-100 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2 md:hidden z-50">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="p-3 bg-gray-50 rounded-xl font-semibold text-center">Services</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="p-3 bg-gray-50 rounded-xl font-semibold text-center">Work</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="p-3 bg-gray-50 rounded-xl font-semibold text-center">About</a>
            <button onClick={() => {toggleContactModal(); setIsMenuOpen(false);}} className="p-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-center">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto mt-24 space-y-4">
        
        {/* HERO GRID (Bento Box Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          
          {/* Box 1: Main Title (Large) */}
          <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Available for Shoots
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-slate-900">
                WE CREATE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">VISUAL HYPE.</span>
              </h1>
            </div>
            
            <div className="relative z-10 mt-8 md:mt-0 max-w-md">
              <p className="text-lg text-slate-500 font-medium mb-6">
                The go-to media Boosting team for Colleges, Corporates, and Viral Moments.
              </p>
              <div className="flex gap-3">
                <a href="#work" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
                  See Our Work <Play size={16} fill="white"/>
                </a>
              </div>
            </div>
          </div>

          {/* Box 2: Visual Loop (Right Top) */}
          <div className="md:col-span-4 bg-black rounded-3xl overflow-hidden relative min-h-[300px] md:min-h-0 group">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
              alt="Camera"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Camera className="mb-2 text-blue-400" />
              <p className="font-bold text-xl">Cinematic <br/>Quality</p>
            </div>
          </div>

          {/* Box 3: Stats / Trust (Bottom Left Split) */}
          <div className="md:col-span-4 bg-blue-600 text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer">
            <h3 className="text-5xl font-black mb-1">150K+</h3>
            <p className="text-blue-100 font-medium text-sm uppercase tracking-widest">Total Views Generated</p>
          </div>

          {/* Box 4: Contact CTA (Bottom Right Split) */}
          <div className="md:col-span-8 bg-gray-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="relative z-10 text-center md:text-left">
               <h3 className="text-2xl font-bold mb-1">Ready to shoot?</h3>
               <p className="text-gray-400">Book your slot for events or reels.</p>
             </div>
             <div className="relative z-10 flex gap-3">
               <button onClick={toggleContactModal} className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                 <Phone size={18}/> Contact Us
               </button>
               <a href="https://www.instagram.com/streakzzz.1?igsh=MWZlOTFjd2g1aHZ6Yg==" target="_blank" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                 <Instagram size={18}/> Insta
               </a>
             </div>
          </div>
        </div>

        {/* MARQUEE STRIP */}
        <div className="w-full bg-white rounded-2xl py-4 overflow-hidden border border-gray-100 shadow-sm my-4">
           <div className="flex whitespace-nowrap gap-12 animate-marquee font-bold text-slate-300 uppercase tracking-widest text-lg">
             <span className="text-slate-900">⚡ Reels Production</span>
             <span>•</span>
             <span className="text-slate-900">🎬 Corporate Events</span>
             <span>•</span>
             <span className="text-slate-900">🏍️ Vehicle Delivery</span>
             <span>•</span>
             <span className="text-slate-900">💍 Wedding Films</span>
             <span>•</span>
             <span className="text-slate-900">🎓 College Culturals</span>
             <span>•</span>
              <span className="text-slate-900">⚡ Reels Production</span>
             <span>•</span>
             <span className="text-slate-900">🎬 Corporate Events</span>
           </div>
        </div>

        {/* SERVICES GRID */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Social Media", icon: <Zap size={24} />, desc: "Viral Reels for Brands & Colleges", color: "bg-purple-50 text-purple-600" },
            { title: "Corporate", icon: <Building2 size={24} />, desc: "Seminars & Product Launches", color: "bg-blue-50 text-blue-600" },
            { title: "Weddings", icon: <Heart size={24} />, desc: "Cinematic Wedding Highlights", color: "bg-rose-50 text-rose-600" },
            { title: "Deliveries", icon: <Bike size={24} />, desc: "Car & Bike Grand Reveals", color: "bg-orange-50 text-orange-600" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* WORK / PORTFOLIO SECTION (Masonry Vibe) */}
        <div id="work" className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
           <div className="flex justify-between items-end mb-10">
             <div>
               <h2 className="text-4xl font-black text-slate-900 tracking-tight">FEATURED<br/>PROJECTS</h2>
             </div>
             <a href="https://www.instagram.com/streakzzz.1?igsh=MWZlOTFjd2g1aHZ6Yg==" target="_blank" className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:underline">
               View Instagram <ArrowRight size={20} />
             </a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {/* Large Item */}
            <div className="relative rounded-3xl overflow-hidden w-[250px] md:w-[300px] aspect-[9/16] mx-auto">
               <video id="video3" src="/video3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-30" alt="College Fest" onClick={() => { const v = document.getElementById("video3"); v.muted = !v.muted; v.play(); }}/>
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 pointer-events-none"></div>
               <div className="absolute bottom-6 left-6 text-white z-40">
                 <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">College</span>
                 <h3 className="text-2xl font-bold">College Shoot</h3>
               </div>
             </div>
             
             {/* Standard Item */}
             <div className="relative rounded-3xl overflow-hidden w-[250px] md:w-[300px] aspect-[9/16] mx-auto">
               <video id="video2" src="/video2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-30" alt="College Fest" onClick={() => { const v = document.getElementById("video2"); v.muted = !v.muted; v.play(); }}/>
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 pointer-events-none"></div>
               <div className="absolute bottom-6 left-6 text-white z-40">
                 <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Cinematic</span>
                 <h3 className="text-2xl font-bold">Rhythm of Rain</h3>
               </div>
             </div>

             {/* Wide Item */}
             <div className="relative rounded-3xl overflow-hidden w-[250px] md:w-[300px] aspect-[9/16] mx-auto">
               <video id="video1" src="/video1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-30" alt="College Fest" onClick={() => { const v = document.getElementById("video1"); v.muted = !v.muted; v.play(); }}/>
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 pointer-events-none"></div>
               <div className="absolute bottom-6 left-6 text-white z-40">
                 <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Golden Moments</span>
                 <h3 className="text-2xl font-bold">The Cutest duo</h3>
               </div>
             </div>
           </div>
        </div>

        {/* FOOTER - Now Acts as "About" Section */}
        <footer id="about" className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 text-center">
           <div className="flex flex-col items-center gap-6">
             <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
               <StrekzzzLogo className="w-16 h-16"/>
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
               STREKZZZ<span className="text-blue-600">.</span>
             </h2>
             <p className="text-slate-500 max-w-lg mx-auto font-medium">
               Professional Video Boosting for the Social Media Generation. We specialize in capturing the energy of your events and transforming them into viral content.
             </p>
             <div className="flex flex-wrap justify-center gap-4 mt-4">
               <button onClick={toggleContactModal} className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                 <Phone size={18}/> Contact Us
               </button>
               <a href="https://www.instagram.com/streakzzz.1?igsh=MWZlOTFjd2g1aHZ6Yg==" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                 <Instagram size={18}/> Follow Us
               </a>
             </div>
             <div className="mt-12 text-sm text-slate-400 font-semibold">
               &copy; 2025 Strekzzz Media. All rights reserved.
             </div>
           </div>
        </footer>

      </main>

      {/* Contact Options Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleContactModal}></div>
          <div className="relative bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-bounce-in">
            <button className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200" onClick={toggleContactModal}>
              <X size={20} />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Get in Touch</h3>
              <p className="text-slate-500 font-medium">Choose how you want to connect with Strekzzz.</p>
            </div>

            <div className="space-y-3">
              <a href="tel:7550018595" className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-transform active:scale-95">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/917550018595" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-transform active:scale-95">
                <MessageCircle size={20} /> WhatsApp Message
              </a>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-6 font-semibold">
              Available 9 AM - 9 PM
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;