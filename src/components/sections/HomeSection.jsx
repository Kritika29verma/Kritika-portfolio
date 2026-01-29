import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeSection = ({ data, onNavigate }) => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 text-6xl font-bold md:text-8xl bg-gradient-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {data.name}
          </motion.h1>

          <motion.p
            className="mb-2 text-2xl font-semibold text-primary md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {data.title}
          </motion.p>

          <motion.p
            className="mb-12 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              onClick={() => onNavigate('projects')}
              className="group bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              View My Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="mx-auto h-8 w-8 text-primary opacity-70" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
