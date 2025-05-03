import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Blog from '../components/blog/Blog';
import CTA from '../components/cta/CTA';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col  max-w-6xl mx-auto min-h-screen">
      <Navbar className='sticky top-0 z-80' />
      <main>
        <Hero />
        <Features />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
