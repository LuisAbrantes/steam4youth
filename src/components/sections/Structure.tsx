import { motion } from 'framer-motion';

const Structure = () => {
  const areas = [
    {
      title: "Competições",
      items: ["Matemática", "Matemática Financeira", "Química", "Física", "Biologia", "SAT"]
    },
    {
      title: "Grupos de Estudo",
      items: ["Artigos Científicos", "Preparação para Competições", "Mentoria"]
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-gradient-to-br from-steam-white to-steam-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-steam-black mb-4">Nossa Estrutura</h2>
          <p className="text-xl text-steam-blue">Organizados para maximizar o aprendizado</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-steam-white rounded-xl shadow-lg p-8 border border-steam-blue/10"
            >
              <h3 className="text-2xl font-bold text-steam-orange mb-6">{area.title}</h3>
              <ul className="space-y-4">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-steam-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-steam-black">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
