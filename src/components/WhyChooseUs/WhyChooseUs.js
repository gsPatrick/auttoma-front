'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaShieldAlt, FaPiggyBank } from 'react-icons/fa';
import styles from './WhyChooseUs.module.css';

// Dados extraídos do PDF (Páginas 5 a 9)
const featuresData = {
  title: "Nossos Diferenciais",
  subtitle: "Por que a Auttoma Engenharia é a escolha certa para o seu empreendimento?",
  features: [
    {
      icon: <FaAward />,
      title: "Experiência e Autoridade",
      description: "Mais de 30 anos de atuação conferem competência técnica para projetar e fiscalizar com precisão, seguindo padrões globais de qualidade."
    },
    {
      icon: <FaHandshake />,
      title: "Independência e Confiabilidade",
      description: "Atuação sem conflito de interesse: não executamos obras nem revendemos equipamentos, garantindo decisões técnicas imparciais."
    },
    {
      icon: <FaShieldAlt />,
      title: "Defesa do seu Patrimônio",
      description: "Proteção contra abusos em contratos de manutenção e cobranças indevidas, garantindo controle total sobre seus investimentos."
    },
    {
      icon: <FaPiggyBank />,
      title: "Foco na Eficiência e Economia",
      description: "Consultoria que proporciona economias financeiras significativas, garantindo que cada item adquirido atenda precisamente à necessidade."
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.mainTitle}>{featuresData.title}</h2>
          <p className={styles.mainSubtitle}>{featuresData.subtitle}</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(2, 24, 125, 0.1)' }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;