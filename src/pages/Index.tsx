import CircuitLoader from "@/components/CircuitLoader";
import EmailCapture from "@/components/EmailCapture";
import ContactOptions from "@/components/ContactOptions";
import SocialLinks from "@/components/SocialLinks";
import { Shield, Zap, Tag, LayoutGrid } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center px-4 py-8 sm:py-16 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold gradient-text tracking-tight">TECHTROVE</h2>
        </div>

        {/* Hero */}
        <section className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            We're Upgrading Your{" "}
            <span className="gradient-text text-glow">Tech Experience</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Techtrove is currently undergoing a major upgrade to serve you better.
          </p>
        </section>

        {/* Animated Loader */}
        <CircuitLoader />

        {/* Progress bar */}
        <div className="w-full max-w-xs mb-8">
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--glow-blue))] animate-progress" />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">Upgrade in progress...</p>
        </div>

        {/* Brand positioning */}
        <p className="text-center text-sm sm:text-base text-secondary-foreground mb-10 max-w-md">
          Your trusted platform for laptops, smartphones, and electronics at competitive prices.
        </p>

        {/* Email Capture */}
        <section className="w-full mb-10">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Get Notified When We're Back
          </h3>
          <EmailCapture />
        </section>

        {/* Contact Options */}
        <section className="w-full mb-8">
          <p className="text-center text-sm text-muted-foreground mb-4">
            Need a device urgently? Reach out to us directly.
          </p>
          <ContactOptions />
        </section>

        {/* What's Coming */}
        <section className="w-full mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Zap, label: "Faster Browsing" },
            { icon: Tag, label: "Better Prices" },
            { icon: LayoutGrid, label: "New Categories" },
            { icon: Shield, label: "Secure Checkout" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border text-center">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </section>

        {/* Social Links */}
        <SocialLinks />

        {/* Trust Signal */}
        <p className="text-center text-xs text-muted-foreground mt-8 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-primary" />
          All previous orders and accounts remain safe and secure.
        </p>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border w-full text-center">
          <p className="text-xs text-muted-foreground">
            Redeveloped by{" "}
            <a href="https://westvolt.nichesite.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">Westvolt Industries</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
