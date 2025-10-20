import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <img src="/assets/logos/sinFondo.png" alt="Logo TKD Sierra Nevada" className="h-12" />
      <nav>
        <ul className="flex gap-6">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Nuestra Escuela</Link></li>
          <li><Link to="/classes">Clases y Sedes</Link></li>
          <li><Link to="/sponsors">Patrocinadores</Link></li>
          <li><Link to="/blog">Blog y Noticias</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
