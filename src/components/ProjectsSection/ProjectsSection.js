'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy, FaCrown, FaCheck } from 'react-icons/fa';
import styles from './ProjectsSection.module.css';

// Dados dos Planos
const plansData = [
  { 
    title: "Plano Bronze",
    price: "R$ 7,50",
    unit: "/ economia",
    icon: <FaMedal />,
    styleClass: styles.bronze,
    features: [
      "Inspeção Predial",
      "Suporte (Tel/Email)",
      "Avaliação Elétrica",
      "Análise de Propostas",
      "Sistemas de Segurança",
      "Visitas Trimestrais",
      "Avaliação PPCI (7 sistemas)"
    ]
  },
  { 
    title: "Plano Prata",
    price: "R$ 10,00",
    unit: "",
    icon: <FaTrophy />,
    styleClass: styles.silver,
    features: [
      "Todas do Bronze",
      "Laudos LTIP Anuais",
      "Acompanhamento Técnico",
      "Visitas Bimestrais",
      "Fiscalização Rigorosa"
    ]
  },
  { 
    title: "Plano Ouro",
    price: "R$ 15,00",
    unit: "",
    icon: <FaCrown />,
    styleClass: styles.gold,
    isPopular: true,
    features: [
      "Todas do Prata",
      "Gestão de Contratos",
      "Acompanhamento Intensivo",
      "Visitas Mensais",
      "Proteção Total"
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ProjectsSection = () => {
  return (
    <section id="planos" className={styles.plansSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.mainTitle}>Nossos Planos</h2>
          <p className={styles.mainSubtitle}>
            Soluções escaláveis para a gestão do seu patrimônio.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plansData.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`${styles.card} ${plan.styleClass} ${plan.isPopular ? styles.popularCard : ''}`} 
              variants={itemVariants}
            >
              {plan.isPopular && <span className={styles.popularBadge}>Recomendado</span>}
              
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{plan.icon}</div>
                <h3 className={styles.planTitle}>{plan.title}</h3>
              </div>

              <div className={styles.priceBox}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>{plan.price.replace('R$ ', '')}</span>
                {plan.unit && <span className={styles.unit}>{plan.unit}</span>}
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/555130295468?text=Olá, tenho interesse no ${plan.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.planButton}
              >
                Contratar Agora
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;