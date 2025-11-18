'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutSummary.module.css';
import { FaBullseye, FaLeaf, FaArrowRight, FaAward, FaHandshake } from 'react-icons/fa';

// Dados extraídos do PDF da Auttoma
const aboutData = {
  about: {
    title: "Sobre a Auttoma Engenharia",
    items: [
      { 
        icon: <FaBullseye />, 
        title: "Nossa Missão", 
        text: "Criada com o objetivo de oferecer suporte técnico especializado, auxiliando clientes na identificação de problemas, na compatibilidade de projetos e na redução de custos gerados por retrabalhos." 
      },
      { 
        icon: <FaLeaf />, 
        title: "Conceito LEED", 
        text: "Nosso trabalho incorpora o conceito LEED (Leadership in Energy and Environmental Design), promovendo a qualidade e a eficiência energética em sistemas prediais inteligentes." 
      },
      { 
        icon: <FaAward />, 
        title: "30 Anos de Excelência", 
        text: "Com mais de três décadas de atuação, nossa experiência nos confere a competência técnica para projetar e fiscalizar soluções prediais com precisão e padrão global de qualidade." 
      }
    ]
  },
  differentials: {
    title: "Por que escolher a Auttoma?",
    // Imagem atualizada conforme solicitado
    image: "/aaautoma.jpeg", 
    paragraphs: [
      "A Auttoma se destaca pela independência e confiabilidade. Atuamos sem conflito de interesses: não executamos obras nem revendemos equipamentos.",
      "Isso nos permite tomar decisões técnicas imparciais, com foco exclusivo no sucesso do seu projeto e na otimização do 'Target Financeiro da Obra'."
    ],
    commitment: {
      title: "Defesa do seu Patrimônio",
      text: "Nossa fiscalização atua como um escudo contra abusos, impedindo contratos de manutenção com valores abusivos ou cobranças por serviços desnecessários. Garantimos que você tenha controle total sobre seus investimentos."
    }
  }
};

const AboutSummary = () => {
  const whatsappUrl = "https://wa.me/5551984448616?text=" + encodeURIComponent("Olá! Vim pelo site e gostaria de conhecer mais sobre a Auttoma.");

  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Coluna da Esquerda: Sobre e Missão */}
          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className={styles.mainTitle}>{aboutData.about.title}</h2>
            
            {aboutData.about.items.map((item, index) => (
              <div key={index} className={styles.infoBlock}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.infoTitle}>{item.title}</h3>
                  <p className={styles.infoText}>{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Coluna da Direita: Diferenciais e Independência */}
          <motion.div 
            className={styles.diffContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.diffCard}>
              <h3 className={styles.diffTitle}>{aboutData.differentials.title}</h3>
              
              {/* Imagem AAAuttoma inserida aqui */}
              <div className={styles.imageWrapper}>
                <Image 
                  src={aboutData.differentials.image}
                  alt="Auttoma Engenharia"
                  width={600}
                  height={350}
                  className={styles.diffImage}
                  style={{ objectFit: 'cover' }} // Garante que preencha sem distorcer
                />
              </div>
              
              {aboutData.differentials.paragraphs.map((p, i) => (
                <p key={i} className={styles.diffText}>{p}</p>
              ))}
              
              <div className={styles.commitmentBox}>
                <h4><FaHandshake className={styles.boxIcon} /> {aboutData.differentials.commitment.title}</h4>
                <p>{aboutData.differentials.commitment.text}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Card de CTA */}
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.ctaContent}>
              <h3>Excelência e Economia para seu Empreendimento</h3>
              <p>Fale com nossos especialistas e descubra como podemos otimizar seus custos.</p>
            </div>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaCardButton}
            >
              Falar com a Gente <FaArrowRight />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSummary;