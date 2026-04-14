import React from 'react';

interface FormProps {
  onSuccess: () => void;
}

export function StudentForm({ onSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Full Name</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Enter your name" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Email Address</label>
        <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="your@email.com" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Level of Study</label>
        <select required className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all">
          <option value="">Select level</option>
          <option>High School</option>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
          <option>Recent Graduate</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">What excites you about AfriLumina?</label>
        <textarea required rows={3} className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all resize-none" placeholder="Tell us more..."></textarea>
      </div>
      <button type="submit" className="w-full bg-accent text-white py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl">
        Submit Application
      </button>
    </form>
  );
}

export function ProfessionalForm({ onSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Full Name</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Enter your name" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Email Address</label>
        <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="your@email.com" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Field of Work</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="e.g. Software Engineering" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Years of Experience</label>
        <input required type="number" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="e.g. 5" />
      </div>
      <button type="submit" className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl">
        Join as Mentor
      </button>
    </form>
  );
}

export function OrganizationForm({ onSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Organization Name</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Enter org name" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Type of Organization</label>
        <select required className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all">
          <option value="">Select type</option>
          <option>Corporate</option>
          <option>Non-Profit</option>
          <option>Educational Institution</option>
          <option>Government</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Contribution Type</label>
        <select required className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all">
          <option value="">Select contribution</option>
          <option>Partner for events</option>
          <option>Sponsor (financial)</option>
          <option>Participate in career fairs</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-accent text-white py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl">
        Partner With Us
      </button>
    </form>
  );
}

export function VolunteerForm({ onSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Full Name</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Enter your name" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Email Address</label>
        <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="your@email.com" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-primary/60 uppercase tracking-wider">Skills You Can Offer</label>
        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="e.g. Graphic Design, Writing" />
      </div>
      <button type="submit" className="w-full bg-accent text-white py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl">
        Apply to Volunteer
      </button>
    </form>
  );
}
