import { Instagram, Facebook } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {[
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
      ].map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
      {/* TikTok custom icon */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13v-3.5a6.37 6.37 0 0 0-.88-.07 6.26 6.26 0 0 0 0 12.52 6.27 6.27 0 0 0 6.26-6.27V8.55a8.19 8.19 0 0 0 3.84.96V6.09a4.78 4.78 0 0 1-.59.04h-.41z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
