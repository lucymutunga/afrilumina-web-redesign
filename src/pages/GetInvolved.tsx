import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Handshake, CheckCircle2, ArrowRight, ShieldCheck, Trophy, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from '@/src/components/Modal';
import { VolunteerForm } from '@/src/components/Forms';

export function GetInvolved() {
  const navigate = useNavigate();
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = React.useState(false);

  const handleVolunteerSuccess = () => {
    setIsVolunteerModalOpen(false);
    alert('Thank you for volunteering! We will be in touch soon.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-primary text-cream relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8">Get Involved</h1>
            <p className="text-xl text-cream/70 leading-relaxed">
              Be part of shaping Africa's future. Join our community of mentors, partners, and volunteers.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Path Selection */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Mentors',
                desc: 'Share your expertise and guide the next generation of African professionals.',
                points: ['Flexible commitment', 'Global network', 'Direct impact'],
                cta: 'Become a Mentor',
                color: 'bg-accent',
                onClick: () => navigate('/mentors')
              },
              {
                icon: Handshake,
                title: 'Partners',
                desc: 'Collaborate with us to scale impact and provide opportunities for youth.',
                points: ['Co-branded programs', 'Talent pipeline', 'CSR impact'],
                cta: 'Partner With Us',
                color: 'bg-primary',
                onClick: () => navigate('/partners')
              },
              {
                icon: Heart,
                title: 'Volunteers',
                desc: 'Support our operations and help us reach more students across the continent.',
                points: ['Skill-based volunteering', 'Community building', 'Event support'],
                cta: 'Join as Volunteer',
                color: 'bg-accent',
                onClick: () => setIsVolunteerModalOpen(true)
              }
            ].map((path, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${path.color} rounded-2xl flex items-center justify-center mb-8 text-white`}>
                  <path.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">{path.title}</h3>
                <p className="text-primary/70 mb-8 leading-relaxed flex-grow">{path.desc}</p>
                <ul className="space-y-4 mb-10">
                  {path.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm font-semibold text-primary/80">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={path.onClick}
                  className={`w-full py-4 rounded-full font-bold text-white transition-all shadow-lg ${path.color} hover:opacity-90`}
                >
                  {path.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-24 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Ways to Contribute</h2>
            <p className="text-primary/60 max-w-xl mx-auto">Beyond direct involvement, there are many ways to support our mission.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Host Workshops', desc: 'Share your skills through virtual or physical masterclasses.' },
              { title: 'Sponsor Programs', desc: 'Provide financial support for our core development tracks.' },
              { title: 'Provide Opportunities', desc: 'Offer internships or job placements to our top students.' },
              { title: 'Donate Equipment', desc: 'Help students access the hardware they need to learn.' },
              { title: 'Spread the Word', desc: 'Be an ambassador for AfriLumina in your professional circles.' },
              { title: 'Advisory Support', desc: 'Join our advisory board and help shape our strategy.' },
            ].map((way, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5">
                <h4 className="text-xl font-bold mb-3">{way.title}</h4>
                <p className="text-primary/70 leading-relaxed">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Sponsorship Tiers</h2>
            <p className="text-primary/60 max-w-xl mx-auto">Partner with us at a level that fits your organization's goals.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                tier: 'Bronze',
                icon: Star,
                value: '$5,000',
                benefits: ['Logo on website', 'Social media mention', 'Quarterly impact report'],
                impact: 'Supports 10 students for a full mentorship cycle.'
              },
              {
                tier: 'Silver',
                icon: Trophy,
                value: '$15,000',
                benefits: ['All Bronze benefits', 'Feature in newsletter', 'Host one career talk', 'Access to talent pool'],
                impact: 'Funds a full skills accelerator bootcamp for 25 students.'
              },
              {
                tier: 'Gold',
                icon: ShieldCheck,
                value: '$50,000+',
                benefits: ['All Silver benefits', 'Co-branded program', 'Keynote at annual summit', 'Board advisory seat'],
                impact: 'Scales our operations to a new country, reaching 500+ students.'
              }
            ].map((tier, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border ${i === 1 ? 'bg-primary text-cream border-primary shadow-2xl scale-105 z-10' : 'bg-white text-primary border-primary/5 shadow-sm'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${i === 1 ? 'bg-accent text-white' : 'bg-accent/10 text-accent'}`}>
                  <tier.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.tier} Partner</h3>
                <p className={`text-3xl font-display font-bold mb-6 ${i === 1 ? 'text-accent' : 'text-primary'}`}>{tier.value}</p>
                <div className="space-y-4 mb-10">
                  <p className="font-bold text-sm uppercase tracking-wider opacity-60">Benefits</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-3 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-6 rounded-2xl ${i === 1 ? 'bg-white/5' : 'bg-cream/50'}`}>
                  <p className="text-sm font-medium leading-relaxed">
                    <span className="font-bold block mb-1">Impact:</span>
                    {tier.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reinforcement */}
      <section className="py-24 bg-cream">
        <div className="container-custom">
          <div className="bg-primary text-cream rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">"Mentoring at AfriLumina has been one of the most rewarding experiences of my career."</h2>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">JD</div>
                  <div>
                    <p className="text-xl font-bold">John Doe</p>
                    <p className="text-cream/60">Senior Product Manager, Google</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                <p className="text-3xl font-display font-bold text-accent mb-4">98%</p>
                <p className="text-lg text-cream/80 mb-8">Of our mentors say they would recommend the program to their colleagues.</p>
                <button className="text-accent font-bold flex items-center hover:underline">
                  Read more impact stories <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Ready to make an <span className="text-accent">impact?</span></h2>
          <p className="text-xl text-primary/70 mb-12 max-w-2xl mx-auto">Join our growing community of change-makers and help us illuminate the path for Africa's youth.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} title="Volunteer Application">
        <VolunteerForm onSuccess={handleVolunteerSuccess} />
      </Modal>
    </div>
  );
}
