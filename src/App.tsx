import React, { useState } from 'react';
import { MapPin, Users, BookOpen, Hammer, Heart, Moon, Sun, ExternalLink } from 'lucide-react';

type Role = 'developer' | 'designer' | 'activist';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('form-name', 'join-team');
    formData.append('email', email);
    formData.append('skills', skills);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Successfully joined the movement!');
        setEmail('');
        setSkills('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Check the console for details.');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-black bg-clip-text text-transparent">
                Tech In Need
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <a
                href="#join"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-red-500/10 via-green-500/10 to-black/10 dark:from-red-900/20 dark:via-green-900/20 dark:to-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-green-600 to-black bg-clip-text text-transparent dark:from-red-500 dark:via-green-500 dark:to-white">
            Unite to Stop All the Wars
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">
            Code. Design. Organize. Rescue.
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400">
            Join us in building tools and organizing efforts to support those in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(['developer', 'designer', 'activist'] as Role[]).map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-6 py-3 rounded-lg text-lg capitalize transition
                  ${selectedRole === role
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                  }`}
              >
                I'm a {role}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Imagine What We Can Achieve Together
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Your unique skills can transform lives. Here are just a few ways you can make an impact:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {[
                {
                  title: 'AI-Powered Crisis Analysis',
                  description: 'Machine learning tools to identify patterns and predict emerging crises',
                  icon: < Hammer className="h-8 w-8 text-blue-500" />
                },
                {
                  title: 'Decentralized Communication Networks',
                  description: 'Build resilient communication systems that work even when infrastructure fails',
                  icon: < Users className="h-8 w-8 text-purple-500" />
                },
                {
                  title: 'Anonymous Support Platforms',
                  description: 'Safe spaces for mental health support and community connection',
                  icon: < Heart className="h-8 w-8 text-pink-500" />
                },
                {
                  title: 'Crowdsourced Resource Mapping',
                  description: 'Real-time maps showing available resources and safe zones',
                  icon: < MapPin className="h-8 w-8 text-green-500" />
                },
                {
                  title: 'Blockchain Verification Systems',
                  description: 'Tamper-proof evidence collection for legal accountability',
                  icon: < BookOpen className="h-8 w-8 text-yellow-500" />
                },
                {
                  title: 'Emergency Response Coordination',
                  description: 'Apps to connect responders with those in need efficiently',
                  icon: < Hammer className="h-8 w-8 text-red-500" />
                },
                {
                  title: 'Educational Gamification',
                  description: 'Interactive learning tools to educate about human rights',
                  icon: < BookOpen className="h-8 w-8 text-teal-500" />
                },
                {
                  title: 'AI Misinformation Detection',
                  description: 'Tools to identify and combat propaganda in real-time',
                  icon: < Hammer className="h-8 w-8 text-indigo-500" />
                },
                {
                  title: 'Sustainable Resource Distribution',
                  description: 'Optimized systems for delivering aid where it is needed most',
                  icon: < Users className="h-8 w-8 text-lime-500" />
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                You Don't Need to Be a Hero to Change the World
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Every small action contributes to the bigger picture. Whether you're a developer, designer, or activist, your unique perspective and skills are exactly what we need. When we combine our strengths, we create something greater than any of us could alone. The world needs your courage, your creativity, and your commitment. Join us today and be part of the solution.
              </p>
              <a
                href="#join"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg"
              >
                Start Making a Difference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Take Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Build Tools',
                icon: <Hammer className="h-6 w-6" />,
                description: 'Develop tools for documentation and communication',
                action: 'Join Hackathon',
              },
              {
                title: 'Organize',
                icon: <Users className="h-6 w-6" />,
                description: 'Coordinate local and online protests',
                action: 'Find Events',
              },
              {
                title: 'Document',
                icon: <BookOpen className="h-6 w-6" />,
                description: 'Help collect and verify evidence',
                action: 'Start Contributing',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="text-green-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <button className="flex items-center text-green-600 hover:text-green-700">
                  {item.action}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Hub */}
      <section id="join" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Join Our Team</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="form-name"
                value="join-team"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
              <select
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              >
                <option value="">Select Your Skills</option>
                <option value="dev">Development</option>
                <option value="design">Design</option>
                <option value="organize">Organization</option>
                <option value="document">Documentation</option>
                <option value="ai">AI Engineering</option>
                <option value="art">Art</option>
                <option value="medical">Medical</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Join the Movement
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Resource Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Evidence Collection Guide',
              'Digital Security Toolkit',
              'Protest Organization Manual',
            ].map((resource) => (
              <div
                key={resource}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">{resource}</h3>
                <button className="text-green-600 hover:text-green-700 flex items-center">
                  Download PDF
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <p className="text-gray-400">
            Together we can make a difference. Join the movement for peace and justice.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;