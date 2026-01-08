import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Duecento Café</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Coffee. Atmosphere. Community.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-sm tracking-wider uppercase text-primary-foreground/60">
              Find Us
            </h4>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                Heritage Courtyard, Old Town<br />
                Open Daily: 8AM - 10PM
              </p>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">+1 (555) 200-200</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-sm tracking-wider uppercase text-primary-foreground/60">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Duecento Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
