import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactOptions = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a
        href="https://wa.me/254706165580?text=Hi%2C%20I%20need%20a%20device%20urgently"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground hover:border-primary/40 hover:box-glow-sm transition-all text-sm font-medium"
      >
        <MessageCircle className="w-4 h-4 text-primary" />
        Chat on WhatsApp
      </a>
      <a
        href="tel:+254727795929"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground hover:border-primary/40 hover:box-glow-sm transition-all text-sm font-medium"
      >
        <Phone className="w-4 h-4 text-primary" />
        Call Us
      </a>
      <a
        href="mailto:support@techtrove.com"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground hover:border-primary/40 hover:box-glow-sm transition-all text-sm font-medium"
      >
        <Mail className="w-4 h-4 text-primary" />
        Email Support
      </a>
    </div>
  );
};

export default ContactOptions;
