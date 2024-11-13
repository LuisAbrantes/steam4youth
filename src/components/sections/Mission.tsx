import { motion } from 'framer-motion';
import { BeakerIcon, AcademicCapIcon, UsersIcon, LightBulbIcon, ChatBubbleBottomCenterTextIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const missions = [
  { title: "Artigo Científico e Meta Análise", icon: BeakerIcon, description: "Desenvolvimento e publicação de pesquisas científicas" },
  { title: "Estudar fora", icon: AcademicCapIcon, description: "Suporte para estudos internacionais" },
  { title: "Compartilhar projetos", icon: ChatBubbleBottomCenterTextIcon, description: "Troca de experiências e conhecimentos" },
  { title: "Ensino Simplificado", icon: PresentationChartLineIcon, description: "Conteúdo didático e acessível" },
  { title: "Comunidade STEAM", icon: UsersIcon, description: "Formação de grupos de interesse" },
  { title: "Aplicação Prática", icon: LightBulbIcon, description: "Experiências hands-on em STEAM" }
];

const Mission = () => {
  return (
    <section id="missao" className="py-20 bg-steam-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-steam-black mb-4">Nossa Missão</h2>
          <p className="text-xl text-steam-blue">Transformando o futuro através da educação STEAM</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-steam-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-steam-blue/10"
            >
              <mission.icon className="w-12 h-12 text-steam-orange mb-4" />
              <h3 className="text-xl font-semibold text-steam-black mb-2">{mission.title}</h3>
              <p className="text-steam-blue/80">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
