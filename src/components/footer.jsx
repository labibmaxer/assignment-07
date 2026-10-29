import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2a5043] text-white">
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-6 text-center">
        <h2 className="text-5xl font-bold">
          Keen<span className="font-medium">Keeper</span>
        </h2>

        <p className="mt-4 text-sm text-white/80">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="mt-8 text-base">Social Links</h3>
        <div className="mt-3 flex justify-center gap-3">
          <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2a5043]">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2a5043]">
            <FaFacebook />
          </a>
          <a href="#" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2a5043]">
            <FaXTwitter />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;