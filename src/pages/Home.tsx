import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, GraduationCap, Globe, Zap, Quote, Mail, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from '@/src/components/Modal';
import { StudentForm, ProfessionalForm, OrganizationForm } from '@/src/components/Forms';

export function Home() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = React.useState<'student' | 'professional' | 'organization' | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const impactImages = [
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', caption: 'Students engaged in collaborative learning sessions.' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', caption: 'Group activities fostering teamwork and leadership.' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', caption: 'One-on-one mentorship moments that spark growth.' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', caption: 'Interactive workshops building market-ready skills.' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b083?auto=format&fit=crop&q=80&w=800', caption: 'Authentic human-centered interactions within our community.' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % impactImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + impactImages.length) % impactImages.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSuccess = () => {
    setActiveModal(null);
    alert('Thank you for your interest! We will get back to you soon.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                Empowering Africa's Future
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Your Journey to <span className="text-accent italic">Greatness</span> Starts Here.
              </h1>
              <p className="text-xl text-primary/70 mb-10 max-w-lg leading-relaxed">
                AfriLumina connects ambitious African students with world-class mentorship, essential skills, and global opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Join as a Student
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/get-involved"
                  className="bg-primary text-cream px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center"
                >
                  Become a Mentor
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                  alt="African students collaborating"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5,000+</p>
                  <p className="text-sm text-primary/60">Students Empowered</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-primary text-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Countries Reached', value: '12+' },
              { label: 'Active Mentors', value: '450+' },
              { label: 'Success Rate', value: '94%' },
              { label: 'Partner Orgs', value: '50+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-cream/60 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Built for Your Growth</h2>
            <p className="text-lg text-primary/70">We provide the ecosystem you need to transition from student to professional leader.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Mentorship', desc: 'One-on-one guidance from industry professionals who have walked the path.' },
              { icon: GraduationCap, title: 'Skills Accelerator', desc: 'Practical, market-ready skills in tech, business, and creative industries.' },
              { icon: Globe, title: 'Global Exposure', desc: 'Access to international internships, workshops, and networking events.' },
              { icon: Zap, title: 'Inspiration & Visibility', desc: 'Inspiration from fellow Africans who have successfully walked similar paths.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-cream/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Core Programs</h2>
              <p className="text-lg text-primary/70">Tailored pathways designed to meet you where you are and take you where you want to go.</p>
            </div>
            <Link to="/programs" className="text-accent font-bold flex items-center hover:underline">
              View all programs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'mentorship', title: 'Lumina Mentorship', tag: '6 Months', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', desc: 'One-on-one guidance from industry professionals.' },
              { id: 'skills', title: 'Skills Accelerator', tag: '12 Weeks', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600', desc: 'Intensive bootcamps for high-demand skills.' },
              { id: 'exposure', title: 'Global & Local Career Exposure', tag: 'Ongoing', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600', desc: 'Career fairs, talks, and webinars.' },
              { id: 'finance', title: 'Financial Literacy', tag: '8 Weeks', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600', desc: 'Mastering money management and investing.' },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/programs/${program.id}`)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                    {program.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{program.title}</h3>
                  <p className="text-primary/60 text-sm">{program.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-cream relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">There's a place for <span className="text-accent italic">you</span> here.</h2>
                <p className="text-xl text-cream/70 mb-12">Whether you're looking to learn, give back, or partner for impact, we have a path for you.</p>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'I am a Student', type: 'student' as const },
                  { title: 'I am a Professional', type: 'professional' as const },
                  { title: 'I represent an Organization', type: 'organization' as const },
                ].map((path, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveModal(path.type)}
                    className="w-full flex items-center justify-between p-8 rounded-2xl border border-cream/10 hover:bg-cream hover:text-primary transition-all group"
                  >
                    <h4 className="text-2xl font-bold">{path.title}</h4>
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" alt="Impact Story" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl shadow-xl text-white max-w-xs">
                <p className="text-3xl font-display font-bold mb-2">94%</p>
                <p className="text-sm font-medium opacity-90">Of our students land their first professional role within 6 months of graduation.</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Changing Lives, One Student at a Time.</h2>
              <p className="text-xl text-primary/70 leading-relaxed mb-8">
                Our impact goes beyond metrics. We are building a community of resilient, skilled, and connected leaders who are ready to take on the world's toughest challenges.
              </p>
              <div className="space-y-4">
                {['Personalized Mentorship', 'Job-Ready Skills', 'Global Opportunities'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-lg font-bold">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Action Carousel */}
      <section className="py-24 bg-cream/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Impact in Action</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              A glimpse into how AfriLumina is empowering young people through real programs and meaningful experiences.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl bg-primary/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={impactImages[currentImageIndex].url}
                  alt="Impact moment"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 lg:p-8">
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all border border-white/30"
                >
                  <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {impactImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentImageIndex ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-8 text-center">
              <p className="text-primary/60 italic font-medium">
                “Uthiru Girls Pilot Program – Our first step in empowering young African students.”
              </p>
              <p className="text-sm text-primary/40 mt-2">
                {impactImages[currentImageIndex].caption}
              </p>
            </div>
          </div>

          {/* Webinar Video Section */}
          <div className="mt-32 pt-24 border-t border-primary/5">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">A Glimpse Into Our Webinars</h2>
              <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                Experience how AfriLumina brings learning, mentorship, and community to life through interactive sessions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Webinar Thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Featured Session</p>
                  <h4 className="text-2xl font-bold">Building Resilience in the Modern Workplace</h4>
                </div>
              </div>
              <p className="mt-8 text-center text-primary/60 italic">
                “Highlights from AfriLumina sessions and engagements.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Voices of Impact</h2>
            <p className="text-primary/60">Hear from the students whose lives have been transformed.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Amara Okafor', role: 'Software Engineer', text: 'AfriLumina gave me the confidence to apply for international roles I thought were out of reach.' },
              { name: 'Kofi Mensah', role: 'Business Analyst', text: 'The mentorship program was a game-changer. My mentor helped me navigate my first corporate role with ease.' },
              { name: 'Fatima Zahra', role: 'Creative Director', text: 'I found a community of like-minded creatives who push me to be better every single day.' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <p className="text-lg italic mb-8 text-primary/80 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-primary/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-primary">Stay Connected</h2>
                <p className="text-xl text-primary/70 leading-relaxed">
                  Join our newsletter to get the latest updates on programs, success stories, and opportunities delivered to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-14 pr-6 py-5 rounded-full bg-cream border border-primary/5 outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <button className="bg-primary text-cream px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={activeModal === 'student'} onClose={() => setActiveModal(null)} title="Join as a Student">
        <StudentForm onSuccess={handleFormSuccess} />
      </Modal>
      <Modal isOpen={activeModal === 'professional'} onClose={() => setActiveModal(null)} title="Join as a Mentor">
        <ProfessionalForm onSuccess={handleFormSuccess} />
      </Modal>
      <Modal isOpen={activeModal === 'organization'} onClose={() => setActiveModal(null)} title="Partner With Us">
        <OrganizationForm onSuccess={handleFormSuccess} />
      </Modal>
    </div>
  );
}
