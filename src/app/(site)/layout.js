import { Montserrat, Open_Sans } from 'next/font/google';
import '../globals.css'; // Mantendo o caminho conforme seu projeto
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';

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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Componente flutuante com WhatsApp e Chatbot */}
        <FloatingActions />
      </body>
    </html>
  );
}