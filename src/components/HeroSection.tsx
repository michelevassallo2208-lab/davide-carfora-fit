import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Personal Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <p
            className="font-body text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Personal Trainer
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Davide<br />
            <span className="text-gradient">Carfora</span>
          </h1>
          <p
            className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Trasforma il tuo corpo, supera i tuoi limiti.<br />
            Prima lezione di prova <span className="text-primary font-semibold">gratuita</span>.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-teal-light transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Prenota Ora
            </a>
            <a
              href="#prezzi"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              Listino Prezzi
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#chi-sono"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary transition-colors duration-300 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
