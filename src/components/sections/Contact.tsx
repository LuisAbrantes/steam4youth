import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-steam-blue to-steam-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-steam-white mb-4">Junte-se a Nós</h2>
          <p className="text-xl text-steam-white/80">Faça parte dessa comunidade em crescimento</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-steam-white rounded-xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Área de Interesse</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Competições</option>
                <option>Artigos Científicos</option>
                <option>Grupos de Estudo</option>
                <option>Mentoria</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
            </div>
            <button className="w-full bg-steam-orange text-steam-white py-3 rounded-lg hover:bg-steam-red transition-colors">
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
