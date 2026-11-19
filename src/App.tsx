import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SecurityLabs from '@/components/SecurityLabs';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { useToast } from '@/hooks/useToast';

export default function App() {
  const { toast, showToast, hideToast } = useToast();

  return (
    <div className="min-h-screen bg-obsidian text-fafafa font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SecurityLabs />
        <Experience />
        <Skills />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      <Toast
        message={toast.message}
        visible={toast.visible}
        variant={toast.variant}
        onClose={hideToast}
      />
    </div>
  );
}
