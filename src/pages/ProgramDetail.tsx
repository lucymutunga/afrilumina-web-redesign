import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { programs } from '@/src/data/programs';
import { ArrowRight, CheckCircle2, Clock, Users, Target, Zap, Globe, GraduationCap } from 'lucide-react';

export function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) return <Navigate to="/programs" />;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-cream overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
                {program.tag}
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                {program.title}
              </h1>
              <p className="text-xl lg:text-2xl text-cream/70 leading-relaxed mb-10">
                {program.description}
              </p>
              <button className="bg-accent text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all shadow-2xl hover:scale-105">
                Apply Now
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Overview & What You'll Gain */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">Overview</h2>
              <p className="text-xl text-primary/70 leading-relaxed mb-12">
                {program.overview}
              </p>
              
              <div className="bg-cream/30 p-10 rounded-[2.5rem] border border-primary/5">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Target className="w-6 h-6 text-accent mr-3" />
                  Who It's For
                </h3>
                <p className="text-lg text-primary/80 leading-relaxed">
                  {program.for}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">What You'll Gain / Learn</h2>
              <ul className="space-y-6">
                {program.entails.map((item, i) => (
                  <li key={i} className="flex items-start text-primary/70">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-cream">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">How It Works</h2>
            <p className="text-cream/60 max-w-xl mx-auto">A simple, step-by-step process to guide your journey.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {program.howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-accent/20 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-accent/20"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format & Impact */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-12 rounded-[3rem] border border-primary/5"
            >
              <Zap className="w-12 h-12 text-accent mb-8" />
              <h2 className="text-3xl font-display font-bold mb-6">Program Format</h2>
              <p className="text-xl text-primary/70 leading-relaxed mb-8">
                {program.format}
              </p>
              <div className="flex items-center space-x-3 text-primary font-bold">
                <Clock className="w-6 h-6 text-accent" />
                <span>Duration: {program.duration}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-8">Impact / Outcomes</h2>
              <div className="space-y-6">
                {program.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg font-bold text-primary/80">{outcome}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Webinar Special Section (Exposure Page Only) */}
      {program.id === 'exposure' && (
        <section className="py-24 bg-cream/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Experience Our Webinars</h2>
                <p className="text-xl text-primary/70 leading-relaxed mb-10">
                  Get a taste of the global exposure we provide. Our webinars feature leaders from top-tier firms sharing insights on the future of work, global trends, and career acceleration.
                </p>
                <a 
                  href="https://youtube.com/@afrilumina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-lg"
                >
                  Visit our Youtube channel for more webinar experiences
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800" 
                    alt="Webinar Screenshot" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">Live Session Highlight</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Mentors Section (Mentorship Page Only) */}
      {program.id === 'mentorship' && program.mentors && (
        <section className="py-24 bg-cream">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Mentors</h2>
              <p className="text-primary/60 max-w-xl mx-auto">Learn from industry leaders who are committed to your growth.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {program.mentors.map((mentor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8"
                >
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-3xl object-cover shadow-lg"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold mb-1">{mentor.name}</h4>
                    <p className="text-accent font-bold mb-4">{mentor.role}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream/50 p-3 rounded-xl">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary/40 mb-1">Experience</p>
                        <p className="font-bold text-sm">{mentor.exp}</p>
                      </div>
                      <div className="bg-cream/50 p-3 rounded-xl">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary/40 mb-1">Mentees</p>
                        <p className="font-bold text-sm">{mentor.mentees}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-cream text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Ready to Join?</h2>
              <p className="text-xl text-cream/70 mb-12">
                Take the first step towards your professional growth. Apply for the {program.title} today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all shadow-xl">
                  Apply Now
                </button>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md text-cream border border-white/20 px-12 py-5 rounded-full text-xl font-bold hover:bg-white/20 transition-all"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
