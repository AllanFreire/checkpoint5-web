import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-400 px-6 py-8 text-gray-900">
      <div className="rounded-2xl mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-3 md:text-left">
        <section>
          <h3 className="text-xl font-bold">Entre em contato</h3>
          <ul className="mt-3 space-y-1">
            <li>WhatsApp: 119910-1010</li>
            <li>Email: contato@gourmeton.com.br</li>
          </ul>
        </section>

        <section className="md:text-center">
          <h3 className="text-xl font-bold">Nossas Redes</h3>
          <div className="mt-3 flex justify-center gap-4">
            <a aria-label="Instagram" className="text-2xl transition hover:text-white">
              <FaInstagram />
            </a>
            <a aria-label="TikTok" className="text-2xl transition hover:text-white">
              <FaTiktok />
            </a>
          </div>
        </section>

        <section className="md:text-right">
          <h3 className="text-xl font-bold">Termos de uso</h3>
          <a  className="mt-3 inline-block underline transition hover:text-white">
            Leia nossos termos
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
