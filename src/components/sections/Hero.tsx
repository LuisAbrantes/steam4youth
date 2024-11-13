const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-steam-white via-steam-white to-steam-blue/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-steam-black mb-8">
            Impulsionando o
            <span className="text-steam-orange block mt-2">Futuro STEAM</span>
          </h1>
          <p className="text-xl text-steam-blue max-w-2xl mx-auto mb-12">
            Desenvolvendo talentos, compartilhando conhecimento e criando oportunidades 
            em ciência, tecnologia, engenharia, artes e matemática.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-steam-orange text-steam-white px-8 py-4 rounded-lg hover:bg-steam-red transition-all duration-300 text-lg font-semibold">
              Comece Agora
            </button>
            <button className="border-2 border-steam-blue text-steam-blue px-8 py-4 rounded-lg hover:bg-steam-blue hover:text-steam-white transition-all duration-300 text-lg font-semibold">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
