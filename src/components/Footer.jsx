import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube
} from "lucide-react"; // make sure lucide-react is installed

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: <Facebook size={24} /> },
    { name: "Twitter", href: "#", icon: <Twitter size={24} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={24} /> },
    { name: "YouTube", href: "#", icon: <Youtube size={24} /> },
  ];

  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
        
        <div className="flex flex-col gap-4">
          <div className="font-black text-2xl uppercase">Eagles Nest</div>
          <div className="text-green-200 text-sm">
            13 Egret Street,<br />
            Elspark, Germiston 1418
          </div>
        </div>

        <div className="flex gap-4 flex-wrap text-white">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-green-200">
        &copy; {new Date().getFullYear()} Elsburg Junior Football Club. All rights reserved.
      </div>
    </footer>
  );
}
