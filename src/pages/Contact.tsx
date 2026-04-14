import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8">Get in Touch</h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-primary/5"
            >
              <h2 className="text-3xl font-display font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-4 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-cream/30 border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-4 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-cream/30 border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-4 uppercase tracking-wider">Subject</label>
                  <select 
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-cream/30 border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Mentorship Question</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-4 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-cream/30 border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all flex items-center justify-center shadow-xl"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Mail, title: 'Email Us', info: 'hello@afrilumina.org', sub: 'Online support 24/7' },
                  { icon: Phone, title: 'Call Us', info: '+254 700 000 000', sub: 'Mon-Fri, 9am-5pm EAT' },
                  { icon: MapPin, title: 'Visit Us', info: 'Nairobi, Kenya', sub: 'Innovation Hub, Westlands' },
                  { icon: MessageSquare, title: 'Social', info: '@AfriLumina', sub: 'Follow our journey' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-cream p-8 rounded-3xl border border-primary/5"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-primary font-bold mb-1">{item.info}</p>
                    <p className="text-sm text-primary/50">{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden bg-primary p-8 flex items-center justify-center"
              >
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map Background" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                    <Globe className="w-4 h-4" />
                    <span>Headquartered in Nairobi, Kenya</span>
                  </div>
                  <div className="relative">
                    {/* Abstract Africa/Kenya Highlight */}
                    <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto text-cream/20 fill-current">
                      <path d="M50,20 L150,20 L180,80 L160,150 L100,180 L40,150 L20,80 Z" />
                      {/* Kenya Highlight */}
                      <circle cx="140" cy="110" r="8" className="text-accent fill-current animate-pulse" />
                      <circle cx="140" cy="110" r="20" className="text-accent stroke-current fill-none stroke-2 opacity-30 animate-ping" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16">
                      <p className="text-cream font-display font-bold text-2xl">Kenya</p>
                      <p className="text-accent text-sm font-bold">Our Primary Hub</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="pt-8 border-t border-primary/10">
                <h4 className="font-bold mb-6">Follow our journey</h4>
                <div className="flex space-x-6">
                  {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
