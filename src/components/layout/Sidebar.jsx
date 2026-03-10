import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO HAMBURGER */}

      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* HEADER SIDEBAR */}

        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Calculadora de Retroativo</h2>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X size={22} />
          </button>
        </div>

        {/* MENU */}

        <nav className="flex flex-col p-4 gap-3">
          <Link
            to="/"
            className="hover:bg-gray-800 p-2 rounded"
            onClick={() => setOpen(false)}
          >
            Calculadora Retroativo
          </Link>

          <Link
            to="/simple-calculator"
            className="hover:bg-gray-800 p-2 rounded"
          >
            Calculadora
          </Link>

          <Link
            to="/history"
            className="hover:bg-gray-800 p-2 rounded"
            onClick={() => setOpen(false)}
          >
            Histórico
          </Link>
        </nav>
      </aside>
    </>
  );
}
