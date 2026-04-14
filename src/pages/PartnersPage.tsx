import { motion } from 'motion/react';
import { Globe, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PartnersPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-primary text-cream relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">Partner for Impact</h1>
            <p className="text-xl lg:text-2xl text-cream/70 leading-relaxed">
              Join forces with AfriLumina to build a sustainable ecosystem for Africa's future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Globe, title: 'Global Reach', desc: 'Access a diverse pool of talent from across the African continent.' },
              { icon: Users, title: 'Talent Pipeline', desc: 'Identify and recruit high-potential students for your organization.' },
              { icon: Zap, title: 'Brand Visibility', desc: 'Showcase your commitment to youth development and CSR.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-[3rem] p-12 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-8">Collaboration Opportunities</h2>
                <div className="space-y-6">
                  {[
                    'Co-branded Skills Bootcamps',
                    'Exclusive Career Fairs & Talks',
                    'Internship & Graduate Placement Programs',
                    'Customized CSR Initiatives',
                    'Sponsorship of Core Programs'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 text-lg font-medium text-primary/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Partnership" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Let's build together</h2>
          <Link to="/get-involved" className="inline-flex bg-primary text-cream px-12 py-5 rounded-full text-xl font-bold hover:bg-primary/90 transition-all shadow-xl">
            Partner With Us <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
