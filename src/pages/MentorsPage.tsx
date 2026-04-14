import { motion } from 'motion/react';
import { CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MentorsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-primary text-cream relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">Empower the Next Generation</h1>
            <p className="text-xl lg:text-2xl text-cream/70 leading-relaxed">
              Join a global network of professionals dedicated to unlocking the potential of African youth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Why Mentor with AfriLumina?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Direct Impact', desc: 'See the immediate transformation in your mentees as they navigate their career paths.' },
                  { title: 'Global Network', desc: 'Connect with other high-level professionals across various industries and continents.' },
                  { title: 'Leadership Growth', desc: 'Refine your own coaching and leadership skills while giving back.' },
                  { title: 'Flexible Commitment', desc: 'Our structured programs are designed to fit into your busy professional schedule.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <CheckCircle2 className="w-7 h-7 text-accent shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Mentorship" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-3xl shadow-xl max-w-xs">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="italic text-primary/80 mb-4">"The most rewarding part is seeing my mentee land their dream role."</p>
                <p className="font-bold text-sm">— Michael K., Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-12">How the Mentorship Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Fill out our mentor application form with your professional background.' },
              { step: '02', title: 'Match', desc: 'We pair you with a student whose goals align with your expertise.' },
              { step: '03', title: 'Mentor', desc: 'Engage in bi-weekly sessions and share your journey.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5">
                <div className="text-5xl font-display font-bold text-accent/20 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-primary/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Ready to inspire?</h2>
          <Link to="/get-involved" className="inline-flex bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all shadow-xl">
            Apply to Mentor <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
