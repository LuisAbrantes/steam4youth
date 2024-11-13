import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-steam-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-steam-orange rounded-lg"></div>
              <span className="text-2xl font-bold text-steam-black">STEAM4YOUTH</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Missão', 'Estrutura', 'Equipe', 'Competições'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-steam-black hover:text-steam-blue transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-steam-orange text-steam-white px-6 py-2 rounded-lg hover:bg-steam-red transition-colors duration-300">
              Participe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
