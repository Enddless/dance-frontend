import Footer from '../../components/footer';
import Header from '../../components/header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
