import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-cream pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
              Afri<span className="text-accent">Lumina</span>
            </Link>
            <p className="text-cream/70 leading-relaxed max-w-xs">
              Empowering the next generation of African leaders through mentorship, skills training, and global exposure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-cream/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-cream/70 hover:text-accent transition-colors">Our Programs</Link></li>
              <li><Link to="/get-involved" className="text-cream/70 hover:text-accent transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-cream/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="text-cream/70 hover:text-accent transition-colors">Mentorship Hub</Link></li>
              <li><Link to="/programs" className="text-cream/70 hover:text-accent transition-colors">Skills Accelerator</Link></li>
              <li><Link to="/programs" className="text-cream/70 hover:text-accent transition-colors">Career Exposure</Link></li>
              <li><Link to="/programs" className="text-cream/70 hover:text-accent transition-colors">Leadership Lab</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-cream/70">hello@afrilumina.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-cream/70">Lagos, Nigeria | Nairobi, Kenya | Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/50">
          <p>© {new Date().getFullYear()} AfriLumina Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
