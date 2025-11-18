'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const footerData = {
  info: {
    description: "Soluções inteligentes em engenharia, automação e fiscalização de obras. Transformando e protegendo seu patrimônio com eficiência e técnica.",
    social: [
      { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/auttomaengenharia" },
      { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/auttomaengenharia" },
      { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/company/auttomaengenharia" }
    ]
  },
  navigation: [
    { label: "Início", targetId: "hero" },
    { label: "Sobre Nós", targetId: "sobre" },
    { label: "Serviços", targetId: "servicos" },
    { label: "Nosso Processo", targetId: "processo" },
    { label: "Planos de Serviço", targetId: "planos" },
    { label: "Contato", targetId: "contato" }
  ],
  services: [
    "Projetos Executivos",
    "Fiscalização de Obras",
    "Consultoria LEED",
    "Gestão de Contratos",
    "Planos de Manutenção"
  ],
  contact: {
    phone: "(51) 3029-5468",
    whatsappLink: "555130295468",
    email: "contato@auttoma.com.br",
    address: "Av. Guido Mondim, 884 - São Geraldo, Porto Alegre - RS"
  }
};

const Footer = () => {

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  
  const generateWhatsAppLink = (serviceName) => {
    const phone = footerData.contact.whatsappLink;
    const text = encodeURIComponent(`Olá, gostaria de saber mais sobre ${serviceName}.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Coluna 1: Info e Logo */}
          <div className={styles.infoColumn}>
            <Link href="/" className={styles.logoWrapper}>
              {/* Certifique-se de ter esta logo na pasta public */}
              <Image 
                src="/auttoma-branco.png" 
                alt="Auttoma Engenharia" 
                width={180} 
                height={150} 
                className={styles.logoImage} 
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.description}>{footerData.info.description}</p>
            <div className={styles.socialIcons}>
              {footerData.info.social.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Navegação</h3>
            <ul className={styles.navList}>
              {footerData.navigation.map(link => (
                <li key={link.label}>
                  <a href={`#${link.targetId}`} onClick={(e) => handleScrollToSection(e, link.targetId)}>
                    <FaChevronRight className={styles.arrowIcon} /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Serviços</h3>
            <ul className={styles.navList}>
              {footerData.services.map(service => (
                <li key={service}>
                  <a href={generateWhatsAppLink(service)} target="_blank" rel="noopener noreferrer">
                    <FaChevronRight className={styles.arrowIcon} /> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <ul className={styles.contactList}>
              <li>
                <FaWhatsapp className={styles.contactIcon} />
                <a href={`https://wa.me/${footerData.contact.whatsappLink}`} target="_blank" rel="noopener noreferrer">
                  {footerData.contact.phone}
                </a>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${footerData.contact.email}`}>
                  {footerData.contact.email}
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{footerData.contact.address}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.bottomContent}>
          <p>© {new Date().getFullYear()} Auttoma Engenharia. Todos os direitos reservados.</p>
          <p>Facilitando sua vida.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;