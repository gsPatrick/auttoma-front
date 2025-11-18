'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Links baseados no Sumário do PDF da Auttoma
  const navLinks = [
    { targetId: 'hero', label: 'Início' },
    { targetId: 'sobre', label: 'Sobre' },
    { targetId: 'servicos', label: 'Serviços' },
    { targetId: 'processo', label: 'Processo' },
    { targetId: 'planos', label: 'Planos' },
    { targetId: 'contato', label: 'Contato' },
  ];

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 90; // Ajustado conforme globals.css
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setNavOpen(false);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className={styles.container}>
        {/* Logo Auttoma */}
        <a href="#hero" onClick={(e) => handleScrollToSection(e, 'hero')} className={styles.logo}>
          <Image
            src="/auttoma.png" // Certifique-se de ter este arquivo em /public
            alt="Auttoma - Soluções em Automação"
            width={220}
            height={60}
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Navegação Desktop */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollToSection(e, link.targetId)}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <a
            href="#contato"
            onClick={(e) => handleScrollToSection(e, 'contato')}
            className={styles.ctaButton}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            Fale com a Gente
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Abrir menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            className={styles.navMobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                className={styles.navLinkMobile}
                onClick={(e) => handleScrollToSection(e, link.targetId)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleScrollToSection(e, 'contato')}
              className={`${styles.ctaButton} ${styles.ctaButtonMobile}`}
            >
              <FaWhatsapp className={styles.whatsappIcon} />
              Solicitar Proposta
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;