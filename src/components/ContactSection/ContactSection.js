'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactSection.module.css';
// Importe sua função de envio real aqui, se tiver
// import { sendQuoteRequest } from '../../../services/api.service';

// Configuração baseada no PDF da Auttoma
const formDataConfig = {
  informacoes_contato: {
    telefone: "+55 (51) 9 8444-8616",
    email: "carlos.bill@auttoma.com.br",
    endereco: "Rua Liane Alves, 60, Porto Alegre - RS",
    site: "auttoma.com.br"
  }
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    celular: '',
    email: '',
    empresa: '',
    servicos_interesse: [],
    mensagem: ''
  });

  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });

  // Serviços baseados no PDF
  const serviceOptions = [
    "Projetos Executivos",
    "Fiscalização de Obras",
    "Consultoria Estratégica",
    "Planos de Manutenção",
    "Gerenciamento de Custos",
    "Plano Bronze/Prata/Ouro",
    "Outro"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentServices = prev.servicos_interesse;
      if (checked) {
        return { ...prev, servicos_interesse: [...currentServices, value] };
      } else {
        return { ...prev, servicos_interesse: currentServices.filter(s => s !== value) };
      }
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.servicos_interesse.length === 0) {
      setFormStatus({ status: 'error', message: 'Por favor, selecione ao menos um serviço de interesse.' });
      return;
    }
    
    setFormStatus({ status: 'sending', message: '' });
    
    // Simulação de envio - Substitua pela sua chamada de API real
    setTimeout(() => {
       console.log("Dados enviados:", formData);
       setFormStatus({ status: 'success', message: 'Recebemos sua mensagem! Entraremos em contato em breve.' });
       setFormData({ nome_completo: '', celular: '', email: '', empresa: '', servicos_interesse: [], mensagem: '' });
    }, 1500);
  };

  const info = formDataConfig.informacoes_contato;

  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.mainPanel}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Lado Esquerdo: Formulário */}
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Fale com a Gente</h2>
            <p className={styles.description}>
              Entre em contato hoje mesmo e descubra como a Auttoma Engenharia pode impulsionar o seu sucesso.
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <div className={styles.field}>
                  <label htmlFor="nome_completo">Nome Completo*</label>
                  <input type="text" id="nome_completo" name="nome_completo" required value={formData.nome_completo} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="empresa">Empresa / Condomínio</label>
                  <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.field}>
                  <label htmlFor="celular">Celular / WhatsApp*</label>
                  <input type="tel" id="celular" name="celular" required value={formData.celular} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">E-mail*</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.field}>
                <label>Como podemos ajudar? (Selecione)</label>
                <div className={styles.checkboxGrid}>
                  {serviceOptions.map(option => (
                    <div key={option} className={styles.checkboxItem}>
                      <input 
                        type="checkbox" 
                        id={`srv-${option}`} 
                        value={option} 
                        checked={formData.servicos_interesse.includes(option)} 
                        onChange={handleCheckboxChange} 
                      />
                      <label htmlFor={`srv-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="mensagem">Mensagem Adicional</label>
                <textarea id="mensagem" name="mensagem" rows="3" value={formData.mensagem} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={formStatus.status === 'sending'}>
                {formStatus.status === 'sending' ? 'Enviando...' : 'Enviar Solicitação'}
              </button>

              {formStatus.message && (
                <p className={`${styles.formMessage} ${formStatus.status === 'success' ? styles.success : styles.error}`}>
                    {formStatus.message}
                </p>
              )}
            </form>
          </div>

          {/* Lado Direito: Informações de Contato (Azul Escuro) */}
          <aside className={styles.infoSidebar}>
             <h3 className={styles.sidebarTitle}>Nossos Canais</h3>
             
             <ul className={styles.contactList}>
               <li>
                 <div className={styles.iconBox}><FaPhone /></div>
                 <div>
                    <span>Telefone / WhatsApp</span>
                    <a href={`https://wa.me/5551984448616`} target="_blank" rel="noopener noreferrer">{info.telefone}</a>
                 </div>
               </li>
               <li>
                 <div className={styles.iconBox}><FaEnvelope /></div>
                 <div>
                    <span>E-mail</span>
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                 </div>
               </li>
               <li>
                 <div className={styles.iconBox}><FaMapMarkerAlt /></div>
                 <div>
                    <span>Endereço</span>
                    <p>{info.endereco}</p>
                 </div>
               </li>
             </ul>

             <div className={styles.mapWrapper}>
                {/* Embed Google Maps aproximado para Rua Liane Alves, 60, Porto Alegre */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9275077687214!2d-51.1358!3d-30.0102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977ec8d45e5e7%3A0x56789abcdef!2sRua%20Liane%20Alves%2C%2060%20-%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;