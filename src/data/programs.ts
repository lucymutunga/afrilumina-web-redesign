export interface Program {
  id: string;
  title: string;
  tag: string;
  img: string;
  description: string;
  overview: string;
  entails: string[];
  outcomes: string[];
  howItWorks: { step: string; title: string; desc: string }[];
  format: string;
  for: string;
  duration: string;
  mentors?: {
    name: string;
    role: string;
    exp: string;
    mentees: string;
    img: string;
  }[];
}

export const programs: Program[] = [
  {
    id: 'mentorship',
    title: 'Lumina Mentorship Hub',
    tag: '6 Months',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    description: 'One-on-one mentorship with global professionals across tech, finance, and creative sectors.',
    overview: 'The Lumina Mentorship Hub is our flagship program designed to bridge the gap between academic learning and professional reality by connecting students with experienced industry leaders.',
    entails: [
      'Bi-weekly one-on-one sessions with assigned mentors',
      'Monthly group masterclasses with industry leaders',
      'Access to a private community of high-achieving peers',
      'Personalized career roadmap development'
    ],
    outcomes: [
      'Clarity on career direction and industry requirements',
      'Enhanced professional networking skills',
      'Soft skills development (communication, leadership, resilience)',
      'Direct referrals to internship and job opportunities'
    ],
    howItWorks: [
      { step: '01', title: 'Application', desc: 'Submit your profile and career goals for matching.' },
      { step: '02', title: 'Matching', desc: 'Get paired with a mentor based on your industry interests.' },
      { step: '03', title: 'Engagement', desc: 'Participate in bi-weekly sessions and masterclasses.' },
      { step: '04', title: 'Graduation', desc: 'Complete your roadmap and join the alumni network.' }
    ],
    format: 'Hybrid (Virtual sessions with optional local meetups)',
    duration: '6 Months',
    for: 'Final year students & recent graduates',
    mentors: [
      {
        name: 'Sarah Chen',
        role: 'Senior Product Manager at Google',
        exp: '10+ Years',
        mentees: '25+',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
      },
      {
        name: 'David Okoro',
        role: 'VP of Engineering at Flutterwave',
        exp: '12+ Years',
        mentees: '40+',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills Accelerator',
    tag: '12 Weeks',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive bootcamps focused on high-demand skills like Data Science, UX Design, and Digital Marketing.',
    overview: 'Our Skills Accelerator is a fast-track program to get you job-ready in the most in-demand fields of the 21st century through project-based learning.',
    entails: [
      'Project-based learning with real-world datasets',
      'Weekly code/design reviews by industry experts',
      'Soft skills workshops (CV writing, interview prep)',
      'Final capstone project presented to hiring partners'
    ],
    outcomes: [
      'Industry-recognized certification',
      'A professional portfolio of real-world projects',
      'Technical proficiency in chosen track',
      'Guaranteed interview opportunities with partner firms'
    ],
    howItWorks: [
      { step: '01', title: 'Track Selection', desc: 'Choose your specialization track (Tech or Creative).' },
      { step: '02', title: 'Learning Phase', desc: 'Engage in intensive weekly modules and workshops.' },
      { step: '03', title: 'Capstone Project', desc: 'Build a real-world solution for a partner organization.' },
      { step: '04', title: 'Placement', desc: 'Showcase your work to recruiters and land a role.' }
    ],
    format: 'Virtual Bootcamps (Live workshops and recorded content)',
    duration: '12 Weeks',
    for: 'Students looking to pivot into tech or creative roles'
  },
  {
    id: 'exposure',
    title: 'Global & Local Career Exposure',
    tag: 'Ongoing',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    description: 'Access to international internships, career fairs, and webinars with global firms.',
    overview: 'We open doors that were previously closed, providing students with the visibility they need to succeed globally through direct corporate engagement.',
    entails: [
      'Quarterly Virtual Career Fairs with top-tier employers',
      'Monthly Career Talks and Webinars with global leaders',
      'Exclusive access to internship postings from partner orgs',
      'Networking mixers with professionals across the continent'
    ],
    outcomes: [
      'Direct interaction with recruiters from global companies',
      'Understanding of global workplace cultures and expectations',
      'Access to hidden job markets',
      'Increased visibility in the professional ecosystem'
    ],
    howItWorks: [
      { step: '01', title: 'Registration', desc: 'Join our talent pool to receive exclusive invites.' },
      { step: '02', title: 'Preparation', desc: 'Attend prep workshops for international applications.' },
      { step: '03', title: 'Engagement', desc: 'Participate in career fairs and networking events.' },
      { step: '04', title: 'Application', desc: 'Apply for roles with direct referrals from AfriLumina.' }
    ],
    format: 'Virtual Events (Webinars, Virtual Fairs, and Mixers)',
    duration: 'Ongoing',
    for: 'Ambitious students seeking global and local career growth'
  },
  {
    id: 'finance',
    title: 'Financial Literacy Program',
    tag: '8 Weeks',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    description: 'Mastering the fundamentals of money management, investing, and financial planning.',
    overview: 'Empowering students to build long-term wealth and manage their finances effectively as they enter the workforce through practical financial education.',
    entails: [
      'Workshops on budgeting and savings strategies',
      'Introduction to stock markets and crypto assets',
      'Sessions on debt management and credit scores',
      'Tax planning for early-career professionals'
    ],
    outcomes: [
      'Personal financial plan for the next 5 years',
      'Confidence in making investment decisions',
      'Understanding of financial tools and platforms',
      'Mindset shift towards long-term wealth creation'
    ],
    howItWorks: [
      { step: '01', title: 'Enrollment', desc: 'Sign up for the next cohort of financial training.' },
      { step: '02', title: 'Foundations', desc: 'Learn the basics of budgeting and debt management.' },
      { step: '03', title: 'Wealth Building', desc: 'Explore investment vehicles and asset classes.' },
      { step: '04', title: 'Planning', desc: 'Create your personalized 5-year financial roadmap.' }
    ],
    format: 'Virtual Workshops (Interactive sessions and tools)',
    duration: '8 Weeks',
    for: 'Students and early-career professionals'
  }
];
