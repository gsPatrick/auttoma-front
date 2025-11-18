'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaFileAlt, 
  FaChess, 
  FaChartLine, 
  FaClipboardCheck, 
  FaBuilding, 
  FaArrowRight 
} from 'react-icons/fa';
import styles from './DynamicServicesSection.module.css';

// Dados extraídos do PDF da Auttoma Engenharia
const servicesData = {
  servicos: [
    { 
      categoria: "Projetos e Documentação", 
      icon: <FaProjectDiagram />, 
      itens: [ 
        {
          titulo: "Projetos Executivos de Alta Performance",
          descricao: "Elaboração detalhada com análise minuciosa de interferências e compatibilização entre todas as disciplinas, garantindo integração perfeita e funcionalidade."
        },
        {
          titulo: "Memoriais Descritivos e Documentação Técnica",
          descricao: "Transparência e conformidade através da elaboração de documentos que detalham produtos, serviços e instalações, garantindo segurança jurídica e rastreabilidade."
        }
      ] 
    },
    { 
      categoria: "Consultoria e Gestão", 
      icon: <FaChess />, 
      itens: [ 
        {
          titulo: "Consultoria Estratégica em Engenharia",
          descricao: "Suporte técnico especializado em todas as fases de implantação, com foco na otimização de custos e benefícios para garantir o melhor valor agregado."
        },
        {
          titulo: "Gerenciamento Otimizado de Prazos e Custos",
          descricao: "Estratégias para eficiência financeira, redução de custos e rigoroso controle para cumprimento dos prazos estabelecidos, garantindo previsibilidade."
        }
      ] 
    },
    { 
      categoria: "Obras e Manutenção", 
      icon: <FaClipboardCheck />, 
      itens: [ 
        {
          titulo: "Fiscalização Independente de Obras",
          descricao: "Atuação como consultoria independente para assegurar a qualidade dos materiais, conformidade das instalações e proteção do seu investimento."
        },
        {
          titulo: "Desempenho Operacional e Longevidade Predial",
          descricao: "Elaboração e fiscalização de planos de manutenção inteligentes baseados nas NBRs, assegurando a durabilidade e sustentabilidade dos ativos prediais."
        }
      ] 
    }
  ]
};

const generateWhatsAppLink = (serviceName) => {
  // Número extraído do PDF da Auttoma
  const phone = '5551984448616';
  const baseText = 'Olá, gostaria de mais informações sobre';
  const encodedText = encodeURIComponent(`${baseText} ${serviceName}.`);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
};

const DynamicServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCategory = servicesData.servicos[activeIndex];

  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Serviços</h2>
        <p className={styles.subtitle}>
          Soluções completas em engenharia, desde a concepção do projeto até a manutenção predial, focadas em eficiência e proteção do patrimônio.
        </p>

        <div className={styles.categoryTabs}>
          {servicesData.servicos.map((service, index) => (
            <button
              key={index}
              className={`${styles.categoryButton} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {service.icon}
              <span>{service.categoria}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={styles.contentDisplay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              className={styles.serviceGrid}
              variants={{
                visible: { transition: { staggerChildren: 0.07 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {currentCategory.itens.map((item, index) => (
                <motion.a
                  key={index}
                  href={generateWhatsAppLink(item.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceCard}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <h3 className={styles.serviceTitle}>{item.titulo}</h3>
                  <p className={styles.serviceDescription}>{item.descricao}</p>
                  <div className={styles.consultLink}>
                    Saiba mais <FaArrowRight />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DynamicServicesSection;