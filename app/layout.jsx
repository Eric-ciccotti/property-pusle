import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Property pulse | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keyword: 'rental,find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;
