'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HorizontalCtaSection.module.css';

const CtaButtonSection = () => {
  // Número do PDF da Auttoma
  const whatsappUrl = "https://wa.me/5551984448616?text=" + encodeURIComponent("Olá! Gostaria de solicitar uma proposta comercial.");

  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.textWrapper}>
          <h3>Pronto para otimizar seus custos?</h3>
          <p>Não adie mais a segurança e a eficiência do seu investimento.</p>
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Solicitar Proposta
        </a>
      </motion.div>
    </section>
  );
};

export default CtaButtonSection;