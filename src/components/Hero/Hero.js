'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Hero.module.css';

const slidesData = [
  {
    id: 1,
    backgroundImage: '/hero/processo-01.jpg',
    headline: "Projetos Executivos de Alta Precisão para Obras de Alto Desempenho",
    subheadline: "Elaboramos projetos completos, compatibilizados e otimizados para garantir eficiência, segurança e redução de custos ao longo de toda a obra.",
  },
  {
    id: 2,
    backgroundImage: '/hero/processo-02.jpg',
    headline: "Memoriais Descritivos e Documentação Técnica",
    subheadline: "Criamos memoriais descritivos detalhados, especificações técnicas e documentação legal conforme as normas, garantindo segurança jurídica e rastreabilidade.",
  },
  {
    id: 3,
    backgroundImage: '/hero/processo-03.jpg',
    headline: "Consultoria Técnica de Engenharia para Decisões Inteligentes e Econômicas",
    subheadline: "Acompanhamos seu empreendimento com análise especializada, ajudando a definir soluções eficientes, reduzir custos e elevar o desempenho da obra.",
  },
  {
    id: 4,
    backgroundImage: '/hero/processo-04.jpg', // Imagem reutilizada para o ciclo
    headline: "Desempenho Operacional e Longevidade Predial",
    subheadline: "Desenvolvemos e fiscalizamos planos de manutenção preventiva e corretiva conforme NBRs, assegurando eficiência e longevidade para todas as instalações prediais.",
  },
  {
    id: 5,
    backgroundImage: '/hero/processo-05.jpg', // Imagem reutilizada para o ciclo
    headline: "Fiscalização Independente de Obras para Garantia Total da Qualidade",
    subheadline: "Atuamos com rigor técnico para assegurar que a obra seja executada conforme o contratado, minimizando riscos e protegendo seu investimento.",
  },
  {
    id: 6,
    backgroundImage: '/hero/processo-06.jpg', // Imagem reutilizada para o ciclo
    headline: "Gerenciamento Otimizado de Prazos e Custos",
    subheadline: "Aplicamos metodologias avançadas de gestão para reduzir custos, prever riscos e garantir o controle total do cronograma.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    // Tempo de transição aumentado levemente para dar tempo de ler os textos
    const slideInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 90, // Ajuste para o header fixo da Auttoma
        behavior: 'smooth'
      });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.4 } }
  };
  
  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: 'easeIn' } }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundImageContainer}>
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${slidesData[currentSlide].backgroundImage})` }}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
      </div>
      
      <div className={styles.overlay} />

      <div className={styles.contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1 className={styles.headline} variants={textVariants}>
              {slidesData[currentSlide].headline}
            </motion.h1>
            <motion.p className={styles.subheadline} variants={textVariants}>
              {slidesData[currentSlide].subheadline}
            </motion.p>
            <motion.div className={styles.ctaWrapper} variants={textVariants}>
              <a href="#contato" onClick={handleScroll} className={styles.ctaPrimary}>
                Solicitar Proposta
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.carouselControls}>
        <button onClick={prevSlide} className={styles.controlButton} aria-label="Slide anterior">
          <FaChevronLeft />
        </button>
        <span className={styles.slideNumber}>{currentSlide + 1}</span>
        <div className={styles.progressContainer}>
          {slidesData.map((_, index) => (
            <div
              key={index}
              className={`${styles.progressBar} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
        <span className={styles.slideNumber}>{slidesData.length}</span>
        <button onClick={nextSlide} className={styles.controlButton} aria-label="Próximo slide">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;