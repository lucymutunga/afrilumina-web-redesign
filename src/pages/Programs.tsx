import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, Target, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { programs } from '@/src/data/programs';

export function Programs() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8">Our Programs</h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              Designed to equip you with the tools, knowledge, and network you need to succeed in the real world.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Programs Listing */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-24">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer" onClick={() => navigate(`/programs/${program.id}`)}>
                    <img
                      src={program.img}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2 className="text-4xl font-display font-bold mb-6">{program.title}</h2>
                  <p className="text-lg text-primary/70 mb-8 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-sm">{program.for}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Target className="w-5 h-5 text-accent mr-2" />
                      Key Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {program.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-center text-primary/70">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-3" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary text-cream px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => navigate(`/programs/${program.id}`)}
                      className="bg-cream text-primary border border-primary/10 px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-all flex items-center justify-center"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-cream">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">How It Works</h2>
            <p className="text-cream/60 max-w-xl mx-auto">Your step-by-step guide to joining the AfriLumina ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application for the program that fits your goals.' },
              { step: '02', title: 'Selection', desc: 'Our team reviews applications to find the most committed students.' },
              { step: '03', title: 'Engage', desc: 'Dive into learning, mentorship, and community activities.' },
              { step: '04', title: 'Succeed', desc: 'Access opportunities and join our alumni network.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display font-bold text-accent/20 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-accent/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <div className="bg-cream rounded-[3rem] p-12 lg:p-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Start Your Journey</h2>
            <p className="text-xl text-primary/70 mb-12 max-w-2xl mx-auto">Don't wait for opportunity. Create it. Apply for one of our programs today and take the first step towards your future.</p>
            <button className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all shadow-xl">
              Apply for a Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
