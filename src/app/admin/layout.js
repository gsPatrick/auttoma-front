import React from 'react';
import { Montserrat, Open_Sans } from 'next/font/google';
import '../globals.css'; // O caminho agora é '../'
import styles from './AdminLayout.module.css';

// Usar as mesmas fontes para manter a consistência visual
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
});

export const metadata = {
  title: 'Auttoma Engenharia - Soluções em Automação',
  description: 'Projetos, Consultoria e Fiscalização que Transformam e Protegem seu Patrimônio.',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${openSans.variable} ${styles.adminBody}`}>
        {children}
      </body>
    </html>
  );
}