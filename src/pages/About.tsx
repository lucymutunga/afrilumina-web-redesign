import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-primary text-cream relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8">About AfriLumina</h1>
            <p className="text-xl lg:text-2xl text-cream/70 leading-relaxed">
              We are a mission-driven platform dedicated to bridging the gap between potential and opportunity for African youth.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-3xl -z-10"></div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Why AfriLumina was created</h2>
              <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
                <p>
                  Across Africa, millions of talented students face a common challenge: a lack of exposure to the global professional landscape and a shortage of structured mentorship.
                </p>
                <p>
                  AfriLumina was born out of the belief that talent is universal, but opportunity is not. We saw brilliant minds stuck behind invisible barriers—not for lack of effort, but for lack of guidance.
                </p>
                <p>
                  Our vision is an Africa where every young person, regardless of their background, has the tools, the network, and the confidence to compete and lead on the world stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-primary/5"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-primary/70 leading-relaxed">
                To equip African students with the skills, mentorship, and exposure required to thrive in the modern global economy.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary text-cream p-12 rounded-[3rem] shadow-xl"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-xl text-cream/70 leading-relaxed">
                An Africa empowered by a generation of leaders who are globally competitive, locally impactful, and deeply connected.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do (Expanded) */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Core Pillars</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">We focus on four key areas to ensure a holistic development experience for our students.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Mentorship', desc: 'Connecting students with experienced professionals for long-term career guidance and personal growth.' },
              { title: 'Learning', desc: 'Providing access to curated courses and workshops that teach high-demand digital and soft skills.' },
              { title: 'Exposure', desc: 'Opening doors to internships, global conferences, and networking opportunities that expand horizons.' },
              { title: 'Inspiration', desc: 'Sharing stories of success and failure to build resilience and a growth mindset among youth.' },
            ].map((pillar, i) => (
              <div key={i} className="flex space-x-6 p-8 rounded-3xl border border-primary/5 hover:bg-cream/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-2xl font-bold mb-3">{pillar.title}</h4>
                  <p className="text-primary/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-primary text-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Students Served', value: '5,000+' },
              { label: 'Active Mentors', value: '450+' },
              { label: 'Programs Launched', value: '15+' },
              { label: 'Success Stories', value: '1,200+' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-display font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-cream/60 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-accent rounded-[3rem] p-12 lg:p-20 text-white text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Join the Movement</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">Be part of the generation that redefines Africa's future. Whether as a student or a mentor, your journey starts here.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/programs"
                className="bg-white text-accent px-10 py-4 rounded-full text-lg font-bold hover:bg-cream transition-all shadow-xl"
              >
                Join as a Student
              </Link>
              <Link
                to="/get-involved"
                className="bg-primary text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
