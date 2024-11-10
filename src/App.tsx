import React from 'react';
import { Users, Rocket, Globe2, MessageSquare, TrendingUp, ArrowRight, Building2, Users2 } from 'lucide-react';
import PricingCard from './components/PricingCard';
import TeamMember from './components/TeamMember';
import SignupForm from './components/SignupForm';

function App() {
  const pricingTiers = {
    gold: {
      title: 'Gold',
      price: 3000,
      features: [
        'Access to entrepreneur network',
        'Monthly mastermind sessions',
        'Resource library access',
        'Priority support',
        'Quarterly strategy review',
        'Investment opportunities'
      ]
    },
    premium: {
      title: 'Premium',
      price: 4700,
      features: [
        'All Gold features',
        'Weekly 1-on-1 mentoring',
        'Exclusive CEO roundtables',
        'Annual retreat access',
        'Dedicated account manager',
        'Investment matchmaking',
        'Board advisor network access',
        'Custom growth roadmap'
      ]
    }
  };

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Torres',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      linkedin: '#'
    },
    {
      name: 'Emily Zhang',
      role: 'Community Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Growth',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
      linkedin: '#'
    },
    {
      name: 'Lisa Johnson',
      role: 'Investment Lead',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
      linkedin: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Partnerships Director',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
      twitter: '#'
    },
    {
      name: 'Anna Smith',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400',
      linkedin: '#'
    },
    {
      name: 'James Wilson',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      twitter: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-indigo-900">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">VentureConnect</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-300">
              <a href="#features" className="hover:text-indigo-400 transition">Features</a>
              <a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a>
              <a href="#about" className="hover:text-indigo-400 transition">About</a>
              <a href="#team" className="hover:text-indigo-400 transition">Team</a>
            </div>
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">
              Join Now
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Where Entrepreneurs Build Together
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join a thriving community of founders, innovators, and visionaries. Share insights, find partners, and grow your business in a supportive ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About VentureConnect</h2>
            <p className="text-xl text-gray-300">
              We're on a mission to democratize entrepreneurship by creating the most powerful network of founders and innovators worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                We believe that great ideas can come from anywhere, and that success in entrepreneurship should be determined by the quality of your ideas and execution, not by your location or background.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Building2 className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-300">Founded in 2020</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users2 className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-300">10,000+ Active Members</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=300"
                alt="Team collaboration"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300"
                alt="Community event"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-96"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                  alt="Sarah Chen"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-indigo-400 font-semibold tracking-wide">
                  Founder & CEO
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Sarah Chen
                </h3>
                <p className="mt-4 text-gray-300">
                  With over 15 years of experience in technology and entrepreneurship, Sarah founded VentureConnect with a vision to create a global platform where entrepreneurs can thrive together. Previously, she led innovation at Fortune 500 companies and founded two successful startups.
                </p>
                <div className="mt-6">
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your entrepreneurial journey</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <PricingCard {...pricingTiers.gold} />
            <PricingCard {...pricingTiers.premium} isPopular />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The passionate people behind VentureConnect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 bg-gray-900" id="signup">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Join VentureConnect</h2>
            <p className="text-xl text-gray-300">Take the first step towards growing your business</p>
          </div>

          <SignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-6 w-6 text-indigo-400" />
                <span className="text-lg font-bold text-white">VentureConnect</span>
              </div>
              <p className="text-sm">Building the future of entrepreneurship, one connection at a time.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-indigo-400 transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a></li>
                <li><a href="#team" className="hover:text-indigo-400 transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-indigo-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 VentureConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;