import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="StartUpYou Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-8 h-8 bg-secondary/30 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-32 left-40 w-12 h-12 bg-accent/25 rounded-full animate-float delay-2000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Accelerate Your{" "}
            <span className="text-gradient">Developer Career</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            The ultimate platform for junior developers to boost career readiness, 
            connect with peers, and land their dream job.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="btn-hero text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-2 hover:bg-muted/50">
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="card-elevated group hover:scale-105 transition-bounce">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Track Your Goals</h3>
              <p className="text-muted-foreground">Monitor coding progress, job applications, and career milestones.</p>
            </div>

            <div className="card-elevated group hover:scale-105 transition-bounce delay-100">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Connect & Learn</h3>
              <p className="text-muted-foreground">Join communities, collaborate on projects, and grow together.</p>
            </div>

            <div className="card-elevated group hover:scale-105 transition-bounce delay-200">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">AI Interview Prep</h3>
              <p className="text-muted-foreground">Practice with AI-powered mock interviews and get instant feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;