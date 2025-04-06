import React, { useState } from 'react';
import { MapPin, Users, BookOpen, Hammer, Heart, Moon, Sun, ExternalLink } from 'lucide-react';

type Role = 'developer' | 'designer' | 'activist';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-black bg-clip-text text-transparent">
                Tech for Gaza
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
            Unite to Stop the War
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">
            Code. Design. Organize. Rescue.
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400">
            Join us in building tools and organizing efforts to support those in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(['developer', 'designer', 'activist', 'AI Engineer', 'Artist', 'Doctor'] as Role[]).map((role) => (
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

      {/* Crisis Dashboard */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Live Crisis Dashboard</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108989.57861441544!2d34.4026239779004!3d31.44760025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd844104b258b9%3A0xfddcb14b194be8e7!2sGaza!5e0!3m2!1sen!2s!4v1709840444230!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <select className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <option value="">Select Your Skills</option>
                <option value="dev">Development</option>
                <option value="design">Design</option>
                <option value="organize">Organization</option>
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