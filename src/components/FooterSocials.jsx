import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/MarciHomes/", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" }, // Replace if you have a business Instagram!
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/marci-metzger-30642496/", label: "LinkedIn" },
  { icon: <FaYelp />, href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump", label: "Yelp" }
];

const FooterSocials = () => (
  <footer className="bg-neutral-900 py-6 m-0 border-t border-neutral-800">
    <div className="flex justify-center items-center gap-10">
      {socialIcons.map(({ icon, href, label }) => (
        <a
          href={href}
          key={label}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white text-3xl md:text-4xl flex items-center transition-transform duration-200 hover:scale-125"
          style={{ lineHeight: 1, margin: 0, padding: 0 }}
        >
          {icon}
        </a>
      ))}
    </div>
  </footer>
);

export default FooterSocials;
