import { content } from "../content";
import { Send, MessageCircle, Youtube, Facebook, Mail } from "lucide-react";

export function Footer() {
  const footerData = content.footer;

  const courseName = footerData.courseName;
  const logo = content.theme.logo;
  const description = footerData.description;
  
  const telegram = content.contact.telegram;
  const whatsapp = content.contact.whatsapp;
  const email = content.contact.email;

  const facebook = content.social.facebook;
  const youtube = content.social.youtube;

  const copyrightText = footerData.copyright;


  return (
    <footer className="border-t border-white/10 bg-[#030303] py-16 px-6 md:px-12 lg:px-24 mt-20 text-neutral-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        {/* Brand & Logo Column */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt={`${courseName} Logo`}
                className="w-10 h-10 object-contain rounded-xl bg-white/5 p-1 border border-white/10"
                onError={(e) => {
                  // Fallback if logo image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {courseName}
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Messaging Links */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-xs font-bold text-accent uppercase tracking-widest">
            সাপোর্ট ও যোগাযোগ
          </h3>
          <ul className="space-y-2.5 text-sm">
            {whatsapp && (
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="WhatsApp Support"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </li>
            )}
            {telegram && (
              <li>
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Telegram Channel"
                >
                  <Send className="w-4 h-4 text-[#0088cc]" />
                  <span>Telegram</span>
                </a>
              </li>
            )}
            {email && (
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email Support"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>{email}</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-xs font-bold text-accent uppercase tracking-widest">
            সামাজিক মাধ্যম
          </h3>
          <ul className="space-y-2.5 text-sm">
            {youtube && (
              <li>
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
              </li>
            )}
            {facebook && (
              <li>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Facebook</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <p>{copyrightText}</p>
        <p className="font-mono text-[11px] text-neutral-600">Knowledge • Guidance • Success</p>
      </div>
    </footer>
  );
}

