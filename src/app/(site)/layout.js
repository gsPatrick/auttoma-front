import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css'; // Ajuste o caminho conforme sua estrutura de pastas (ex: ./globals.css ou ../globals.css)
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';

// Configuração das Fontes
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

// Metadados atualizados para Auttoma Engenharia
export const metadata = {
  title: 'Auttoma Engenharia - Soluções Inteligentes em Automação',
  description: 'Projetos Executivos, Consultoria Estratégica e Fiscalização de Obras que transformam e protegem seu patrimônio. Especialistas em eficiência e redução de custos.',
  keywords: 'Engenharia, Automação, Fiscalização de Obras, Projetos Executivos, Consultoria LEED, Gestão de Obras, Porto Alegre',
  openGraph: {
    title: 'Auttoma Engenharia - Soluções Inteligentes',
    description: 'Projetos, Consultoria e Fiscalização que Transformam e Protegem seu Patrimônio.',
    url: 'https://auttoma.com.br',
    siteName: 'Auttoma Engenharia',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        {/* Cabeçalho Fixo */}
        <Header />
        
        {/* Conteúdo Principal da Página */}
        <main>{children}</main>
        
        {/* Rodapé */}
        <Footer />
        
        {/* Botões Flutuantes (WhatsApp e Chatbot) */}
        <FloatingActions />
      </body>
    </html>
  );
}