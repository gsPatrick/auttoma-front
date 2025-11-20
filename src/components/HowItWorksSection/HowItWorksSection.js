'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import styles from './HowItWorksSection.module.css';

// Dados extraídos do PDF (Páginas 17-22)
const processSteps = [
  {
    stepNumber: "01",
    title: "Concepção e Planejamento",
    description: "Alinhamento estratégico e técnico inicial.",
    subItems: [ 
      "Definição do Escopo e necessidades", 
      "Planejamento detalhado (cronograma e orçamento)", 
      "Análise e compatibilização de projetos" 
    ],
    // Placeholder: mantenha suas imagens ou use cores sólidas se preferir
    backgroundImage: '/processo/processo-01.jpg' 
  },
  {
    stepNumber: "02",
    title: "Busca e Otimização",
    description: "Avaliação rigorosa de mercado e custos.",
    subItems: [ 
      "Análise técnica de produtos e serviços", 
      "Otimização de Custos e Benefícios", 
      "Projetos para Eficiência (Conceito LEED)" 
    ],
    backgroundImage: '/processo/processo-02.jpg'
  },
  {
    stepNumber: "03",
    title: "Gestão e Fiscalização",
    description: "Supervisão independente e técnica.",
    subItems: [ 
      "Gerenciamento de Obras e prazos", 
      "Fiscalização Independente (Olhos do dono)", 
      "Mitigação de Riscos e conflitos" 
    ],
    backgroundImage: '/images/processo-03.jpg'
  },
  {
    stepNumber: "04",
    title: "Entrega e Desempenho",
    description: "Garantia de longevidade e resultados.",
    subItems: [ 
      "Validação dos Resultados e entregas", 
      "Planos de Manutenção baseados em NBRs", 
      "Suporte Pós-Projeto contínuo" 
    ],
    backgroundImage: '/processo/processo-04.jpg' // Reutilizando imagem genérica se necessário
  }
];

// Conteúdo da página 28 do PDF ("Aqui está o seu próximo passo...")
const conclusionInfo = {
  title: "O Próximo Passo Rumo à Excelência",
  content: [
    "Não adie mais a segurança e a eficiência do seu investimento.",
    "Seja qual for a complexidade do seu empreendimento, temos a experiência e a expertise para garantir projetos de alta performance, redução de custos efetiva, máxima segurança e longevidade para seu patrimônio."
  ]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
          staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const HowItWorksSection = () => {
  return (
    <section id="processo" className={styles.howItWorksSection}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className={styles.mainTitle}>Nosso Processo</h2>
          <p className={styles.mainSubtitle}>
            Uma metodologia estruturada em 4 etapas para transformar e proteger seu patrimônio.
          </p>
        </motion.div>

        <motion.div 
          className={styles.processGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} 
          variants={containerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.stepNumber} 
              className={styles.stepCardContainer}
              variants={itemVariants}
            >
              <motion.div
                className={styles.cardFlipper}
                variants={{
                  hidden: { rotateY: 0 },
                  visible: { 
                    rotateY: 180,
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.2 + index * 0.2 
                    }
                  }
                }}
              >
                {/* FACE DA FRENTE */}
                <div 
                  className={styles.cardFront} 
                  style={{ backgroundImage: `url(${step.backgroundImage})` }}
                >
                  <div className={styles.frontOverlay}></div>
                  <span className={styles.stepNumberIcon}>{step.stepNumber}</span>
                </div>
                
                {/* FACE DE TRÁS */}
                <div className={styles.cardBack}>
                  <div className={styles.cardContent}>
                    <h3>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <ul className={styles.subItemsList}>
                      {step.subItems.map((item, i) => (
                        <li key={i}><FaCheckCircle className={styles.checkIcon} /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.conclusionBox}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.conclusionTitle}>
            <FaLightbulb />
            {conclusionInfo.title}
          </h3>
          {conclusionInfo.content.map((paragraph, index) => (
            <p key={index} className={styles.conclusionText}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;