import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BanknotesIcon,
  GlobeAmericasIcon,
  StarIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import type { FC } from 'react';

interface TeamMember {
  name: string;
  icon: React.ElementType;
  title?: string;
}

interface TeamGroup {
  role: string;
  members: TeamMember[];
  description: string;
  roleIcon: React.ElementType;
}

const Team: FC = () => {
  const team: TeamGroup[] = [
    {
      role: "Fundadores e Presidentes",
      members: [
        { name: "Maria Braga", icon: StarIcon },
        { name: "Gabriel Fortes", icon: StarIcon }
      ],
      description: "Liderança e visão estratégica",
      roleIcon: AcademicCapIcon
    },
    {
      role: "Coordenadores",
      members: [
        { name: "Rebeca", icon: BeakerIcon, title: "Coordenadora de Competições" },
        { name: "Renzo", icon: BanknotesIcon, title: "Tesoureiro" },
        { name: "Lucas", icon: GlobeAmericasIcon, title: "Relações Externas" }
      ],
      description: "Gestão e desenvolvimento de projetos",
      roleIcon: UserGroupIcon
    },
    {
      role: "Áreas de Atuação",
      members: [
        { name: "Competições", icon: ChartBarIcon },
        { name: "Artigos", icon: DocumentTextIcon },
        { name: "Tesouraria", icon: BanknotesIcon },
        { name: "Relações Externas", icon: GlobeAmericasIcon }
      ],
      description: "Equipes especializadas",
      roleIcon: StarIcon
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600">Pessoas extraordinárias com um propósito em comum</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <group.roleIcon className="w-6 h-6 text-primary-500" />
                <h3 className="text-xl font-bold text-primary-600">{group.role}</h3>
              </div>
              
              <ul className="space-y-4 mb-4">
                {group.members.map((member, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <member.icon className="w-5 h-5 text-secondary-500" />
                    <div>
                      <span className="text-gray-700 font-medium">{member.name}</span>
                      {member.title && (
                        <span className="text-gray-500 text-sm block">
                          {member.title}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">{group.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
