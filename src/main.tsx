import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Twitter, Mail, Rss } from 'lucide-react';

// TODO: typo
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const mainClass = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800';
  const accentColor = darkMode ? 'text-emerald-400' : 'text-emerald-600';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <>
      <div className={`min-h-screen ${mainClass} transition-colors duration-300`}>
        {/* Header / Navigation */}
        <header className="fixed w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold flex items-center gap-2">
              <span className={accentColor}>&lt;</span>
              <span className="inline-block">YourName</span>
              <span className={accentColor}>&gt;</span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`hover:${accentColor} transition-colors ${
                    activeSection === link.href.substring(1) ? accentColor : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleDarkMode} 
                className="ml-4 p-2 rounded-full hover:bg-gray-800"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute w-full bg-gray-900 border-b border-gray-700">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}  
                      href={link.href}
                      className={`hover:${accentColor} transition-colors ${
                        activeSection === link.href.substring(1) ? accentColor : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  ))}
                  <button 
                    onClick={toggleDarkMode} 
                    className="self-start p-2 mt-2 rounded-full hover:bg-gray-800"
                  >
                    {darkMode ? '🌙' : '☀️'}
                  </button>
                </nav>
              </div>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 pt-24">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-32">
            <div className="max-w-3xl">
              <p className={`${accentColor} mb-5 font-mono`}>Hi, my name is</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">YourName.</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-8">
                I build things for the web.
              </h2>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </p>
              <div className="flex gap-6">
                <a 
                  href="#projects" 
                  className={`border-2 border-${accentColor.split('-')[1]}-500 ${accentColor} px-6 py-3 rounded hover:bg-emerald-500 hover:bg-opacity-10 transition-all`}
                >
                  Check out my work
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-gray-500 text-gray-400 px-6 py-3 rounded hover:bg-gray-500 hover:bg-opacity-10 transition-all"
                >
                  Contact me
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <span className={`${accentColor} mr-2`}>01.</span>
                <span>About Me</span>
                <div className={`h-px bg-gray-700 ml-4 flex-1`}></div>
              </h2>
              
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Hello! I'm YourName, a passionate developer with a love for creating 
                    intuitive and engaging web experiences. My journey in tech started when I was 
                    tinkering with simple HTML pages, which evolved into a deep fascination with 
                    how technology can solve real-world problems.
                  </p>
                  <p className="mb-4">
                    I believe in clean code, thoughtful UX, and building products that make a 
                    difference. Beyond just writing code, I'm committed to understanding the 
                    "why" behind every feature and ensuring that what I build serves genuine user needs.
                  </p>
                  <p className="mb-4">
                    When I'm not coding, you'll find me participating in hackathons, building side 
                    projects, or exploring the latest in tech. I'm particularly interested in 
                    [YOUR SPECIFIC INTERESTS - e.g., "AI applications in healthcare, open-source 
                    development, and accessible design"].
                  </p>
                  
                  <p className="mb-4">Here are a few technologies I've been working with recently:</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> JavaScript (ES6+)
                    </div>
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> React
                    </div>
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> Node.js
                    </div>
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> Tailwind CSS
                    </div>
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> TypeScript
                    </div>
                    <div className="flex items-center">
                      <span className={`${accentColor} mr-2`}>▹</span> Next.js
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="relative group">
                    <div className={`absolute inset-0 border-2 ${accentColor} rounded translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300`}></div>
                    <div className={`relative z-10 overflow-hidden rounded ${accentColor} bg-opacity-20`}>
                      <img 
                        src="/api/placeholder/400/400" 
                        alt="YourName"
                        className="w-full h-auto mix-blend-multiply grayscale contrast-100 brightness-90 hover:mix-blend-normal hover:filter-none transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <span className={`${accentColor} mr-2`}>02.</span>
                <span>Experience</span>
                <div className={`h-px bg-gray-700 ml-4 flex-1`}></div>
              </h2>

              <div className="mb-16">
                <h3 className="text-xl font-semibold mb-2">Solo Startup Founder</h3>
                <p className={`${accentColor} mb-2`}>YourStartupName</p>
                <p className="text-gray-400 mb-4">January 2023 - Present</p>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className={`${accentColor} mr-2 flex-shrink-0 mt-1`}>▹</span>
                    <span>Built and launched a web platform that [describe what your startup does]</span>
                  </li>
                  <li className="flex">
                    <span className={`${accentColor} mr-2 flex-shrink-0 mt-1`}>▹</span>
                    <span>Developed the entire tech stack from scratch using [relevant technologies]</span>
                  </li>
                  <li className="flex">
                    <span className={`${accentColor} mr-2 flex-shrink-0 mt-1`}>▹</span>
                    <span>Grew user base to [X number] within [timeframe] through [strategies]</span>
                  </li>
                </ul>
              </div>

              <div className="mb-16">
                <h3 className="text-xl font-semibold mb-2">Hackathon Achievements</h3>
                
                <div className={`mb-10 p-6 rounded ${cardBg} border ${borderColor}`}>
                  <h4 className="text-lg font-medium mb-1">1st Place - HackTech 2023</h4>
                  <p className={`${accentColor} mb-2`}>Team Role: Full-stack Developer</p>
                  <p className="text-gray-400 mb-4">48-hour challenge</p>
                  <p className="mb-3">
                    Created [project name], a [brief description of what your project did]
                  </p>
                  <p className="mb-3">
                    <span className="font-medium">Tech Stack:</span> React, Node.js, MongoDB, WebSockets
                  </p>
                  <p className="mb-3">
                    <span className="font-medium">Key Contributions:</span> Implemented real-time features, designed database schema, led frontend development
                  </p>
                  <p>
                    <span className="font-medium">Key Takeaway:</span> Learned how to rapidly prototype and deliver a working product under extreme time constraints
                  </p>
                </div>
                
                <div className={`p-6 rounded ${cardBg} border ${borderColor}`}>
                  <h4 className="text-lg font-medium mb-1">Runner-up - AI Hackathon 2022</h4>
                  <p className={`${accentColor} mb-2`}>Team Role: Backend Developer</p>
                  <p className="text-gray-400 mb-4">36-hour challenge</p>
                  <p className="mb-3">
                    Built [project name], which [brief description of the project]
                  </p>
                  <p className="mb-3">
                    <span className="font-medium">Tech Stack:</span> Python, Flask, TensorFlow, AWS
                  </p>
                  <p className="mb-3">
                    <span className="font-medium">Key Contributions:</span> Implemented machine learning model integration, created API endpoints, managed cloud deployment
                  </p>
                  <p>
                    <span className="font-medium">Key Takeaway:</span> Gained experience in rapidly integrating and deploying AI models in production environments
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <span className={`${accentColor} mr-2`}>03.</span>
                <span>Projects</span>
                <div className={`h-px bg-gray-700 ml-4 flex-1`}></div>
              </h2>

              {/* Featured Projects */}
              <div className="space-y-24 mb-24">
                {/* Project 1 */}
                <div className="relative grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-7 md:order-2">
                    <div className="relative h-full">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="Project 1" 
                        className="w-full h-full object-cover rounded shadow-lg"
                      />
                      <div className="absolute inset-0 bg-emerald-900 bg-opacity-20 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-6 md:order-1 relative z-10 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                    <p className={`${accentColor} font-mono mb-1`}>Featured Project</p>
                    <h3 className="text-xl font-bold mb-4">Project One</h3>
                    <div className={`${cardBg} p-5 rounded shadow-lg mb-4`}>
                      <p className="mb-4">
                        A comprehensive description of your project here. Explain what problem you 
                        were solving, your approach, and the impact it had. Make sure to highlight 
                        your unique contributions.
                      </p>
                      <p>
                        <span className="font-medium">Problem:</span> What issue were you addressing?
                      </p>
                      <p>
                        <span className="font-medium">Solution:</span> How did you solve it?
                      </p>
                      <p>
                        <span className="font-medium">Your Role:</span> What was your specific contribution?
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4 font-mono text-sm">
                      <span className="bg-gray-800 px-3 py-1 rounded">React</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">MongoDB</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <GitHub size={20} />
                      </a>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="relative grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-7 md:order-1">
                    <div className="relative h-full">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="Project 2" 
                        className="w-full h-full object-cover rounded shadow-lg"
                      />
                      <div className="absolute inset-0 bg-emerald-900 bg-opacity-20 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-6 md:order-2 relative z-10 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-right">
                    <p className={`${accentColor} font-mono mb-1`}>Featured Project</p>
                    <h3 className="text-xl font-bold mb-4">Project Two</h3>
                    <div className={`${cardBg} p-5 rounded shadow-lg mb-4 text-left`}>
                      <p className="mb-4">
                        A comprehensive description of your project here. Explain what problem you 
                        were solving, your approach, and the impact it had. Make sure to highlight 
                        your unique contributions.
                      </p>
                      <p>
                        <span className="font-medium">Problem:</span> What issue were you addressing?
                      </p>
                      <p>
                        <span className="font-medium">Solution:</span> How did you solve it?
                      </p>
                      <p>
                        <span className="font-medium">Your Role:</span> What was your specific contribution?
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4 font-mono text-sm justify-end">
                      <span className="bg-gray-800 px-3 py-1 rounded">React</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">GraphQL</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">AWS</span>
                      <span className="bg-gray-800 px-3 py-1 rounded">TypeScript</span>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <GitHub size={20} />
                      </a>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Notable Projects */}
              <h3 className="text-xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Small Project 1 - Widget */}
                <div className={`${cardBg} rounded-lg shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border ${borderColor}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-2xl ${accentColor}`}>🧩</div>
                    <div className="flex gap-3">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <GitHub size={18} />
                      </a>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Klotski Puzzle</h4>
                  <p className="text-gray-400 mb-4">
                    A web implementation of the classic sliding block puzzle with multiple difficulty levels.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">HTML Canvas</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">CSS</span>
                  </div>
                </div>

                {/* Small Project 2 - Widget */}
                <div className={`${cardBg} rounded-lg shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border ${borderColor}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-2xl ${accentColor}`}>🌐</div>
                    <div className="flex gap-3">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <GitHub size={18} />
                      </a>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">IP Tracker</h4>
                  <p className="text-gray-400 mb-4">
                    A tool that visualizes geographical information and network details for any IP address.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="bg-gray-700 px-2 py-1 rounded">React</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">IP API</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">Mapbox</span>
                  </div>
                </div>

                {/* Small Project 3 - Widget */}
                <div className={`${cardBg} rounded-lg shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border ${borderColor}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-2xl ${accentColor}`}>🔍</div>
                    <div className="flex gap-3">
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <GitHub size={18} />
                      </a>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">DNS Detector</h4>
                  <p className="text-gray-400 mb-4">
                    A utility that checks DNS propagation and identifies DNS issues across multiple providers.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="bg-gray-700 px-2 py-1 rounded">Node.js</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">DNS APIs</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">Vue.js</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://github.com/yourusername" 
                  className={`inline-flex items-center gap-2 border-2 border-${accentColor.split('-')[1]}-500 ${accentColor} px-6 py-3 rounded hover:bg-emerald-500 hover:bg-opacity-10 transition-all`}
                >
                  View More Projects
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <span className={`${accentColor} mr-2`}>04.</span>
                <span>Blog</span>
                <div className={`h-px bg-gray-700 ml-4 flex-1`}></div>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <a 
                  href="#" 
                  className={`${cardBg} rounded-lg shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border ${borderColor}`}
                >
                  <p className="text-gray-400 mb-2">January 15, 2024</p>
                  <h3 className="text-lg font-bold mb-2 hover:text-emerald-400 transition-colors">
                    Building Responsive Layouts with Tailwind CSS
                  </h3>
                  <p className="text-gray-400 mb-4">
                    An exploration of techniques for creating flexible, responsive web designs using Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="bg-gray-700 px-2 py-1 rounded">CSS</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">Tailwind</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">Web Design</span>
                  </div>
                </a>

                <a 
                  href="#" 
                  className={`${cardBg} rounded-lg shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border ${borderColor}`}
                >
                  <p className="text-gray-400 mb-2">March 8, 2024</p>
                  <h3 className="text-lg font-bold mb-2 hover:text-emerald-400 transition-colors">
                    Optimizing React Performance
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Tips and techniques for identifying and resolving performance bottlenecks in React applications.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm">
                    <span className="bg-gray-700 px-2 py-1 rounded">React</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">Performance</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
                  </div>
                </a>
              </div>

              <div className="text-center">
                <a 
                  href="https://yourblog.com" 
                  className={`inline-flex items-center gap-2 border-2 border-${accentColor.split('-')[1]}-500 ${accentColor} px-6 py-3 rounded hover:bg-emerald-500 hover:bg-opacity-10 transition-all`}
                >
                  View All Posts
                  <ExternalLink size={16} />
                </a>
                <div className="mt-4">
                  <a 
                    href="https://yourblog.com/rss" 
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Rss size={16} />
                    RSS Feed
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <p className={`${accentColor} font-mono mb-2`}>05. What's Next?</p>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-400 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll do my best to get back to you!
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className={`inline-flex items-center gap-2 border-2 border-${accentColor.split('-')[1]}-500 ${accentColor} px-8 py-4 rounded hover:bg-emerald-500 hover:bg-opacity-10 transition-all text-lg`}
              >
                Say Hello
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`border-t ${borderColor} py-6 text-center text-gray-400`}>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <GitHub size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}