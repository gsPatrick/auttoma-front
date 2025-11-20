'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialsSection.module.css';

const testimonialsData = [
  {
    image: '/pnavel.jpeg', 
    name: 'André Fagundes',
    role: 'Gerente de Engenharia – Panvel',
    rating: 5,
    quote: '"A Auttoma Engenharia foi essencial na compatibilização dos projetos executivos e na fiscalização independente das nossas obras de expansão. O nível de precisão técnica e o acompanhamento próximo evitaram retrabalhos e reduziram significativamente nossos custos. Um parceiro extremamente confiável."'
  },
  {
    image: '/iguatemi.jpeg',
    logo: '/logos/iguatemi.png',
    name: 'Juliana Martins',
    role: 'Coordenadora de Engenharia – Shopping Iguatemi',
    rating: 5,
    quote: '"Contamos com a Auttoma para desenvolver os planos de manutenção predial e revisar toda documentação técnica das instalações. A equipe demonstrou alto nível de conhecimento normativo e trouxe uma visão estratégica que impactou diretamente na segurança e na longevidade dos nossos sistemas. Trabalho impecável."'
  },
  {
    image: '/cfl.jpeg',
    logo: '/logos/cfl.png',
    name: 'Rodrigo Albuquerque',
    role: 'Gerente de Obras – Construtora CFL',
    rating: 5,
    quote: '"A Auttoma nos apoiou com consultoria técnica em engenharia e no gerenciamento de prazos e custos em um empreendimento de grande porte. A atuação colaborativa, o controle rigoroso e a antecipação de riscos foram fundamentais para manter o cronograma dentro das metas. Profissionais extremamente competentes."'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const TestimonialsSection = () => {
  return (
    // ATUALIZADO: Adicionado o ID cases
    <section id="cases" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Clientes e Parceiros</h2>
        <p className={styles.mainSubtitle}>
          A confiança de grandes empresas é o nosso maior selo de qualidade.
        </p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={styles.card} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(2, 24, 125, 0.15)' }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={90}
                  height={90}
                  className={styles.profileImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <FaQuoteLeft className={styles.quoteIcon} />
              
              <p className={styles.quote}>{testimonial.quote}</p>
              
              <div className={styles.rating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;