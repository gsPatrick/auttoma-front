'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import styles from './FaqSection.module.css';

const faqData = [
  {
    question: "O que significa 'Fiscalização Independente' e por que é importante?",
    answer: "Significa que a Auttoma não executa obras nem vende equipamentos. Isso elimina conflitos de interesse, garantindo que nossas decisões e relatórios técnicos sejam 100% imparciais e focados exclusivamente na qualidade, no cumprimento das normas e na defesa do seu patrimônio."
  },
  {
    question: "Como a Auttoma ajuda na redução de custos da obra?",
    answer: "Atuamos na otimização de custos e benefícios desde a análise técnica dos orçamentos até a fiscalização. Evitamos a compra de itens desnecessários, prevenimos retrabalhos através da compatibilização de projetos e blindamos o cliente contra cobranças abusivas de fornecedores."
  },
  {
    question: "Vocês atendem quais tipos de empreendimentos?",
    answer: "Atendemos condomínios residenciais, edifícios comerciais, indústrias e empresas corporativas. Nossa expertise cobre desde a fase de projeto executivo até a manutenção e gestão predial de empreendimentos já ocupados."
  },
  {
    question: "O que é o conceito LEED mencionado nos serviços?",
    answer: "LEED (Leadership in Energy and Environmental Design) é um sistema internacional de certificação ambiental. Aplicamos esses conceitos para projetar sistemas prediais inteligentes que garantem eficiência energética, sustentabilidade e redução de custos operacionais a longo prazo."
  }
  // ATUALIZADO: Pergunta sobre planos removida
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>Dúvidas Frequentes</h2>
          <p className={styles.subtitle}>
            Esclareça as principais questões sobre como a Auttoma Engenharia pode transformar a gestão do seu empreendimento.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div key={index} className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}>
              <button
                className={styles.questionButton}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionText}>
                  <FaQuestionCircle className={styles.icon} />
                  {item.question}
                </span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;