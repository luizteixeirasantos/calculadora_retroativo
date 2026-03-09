import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* botão mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-100 bg-gray-800 text-white w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200`}
      >
        <div className="p-6 text-xl font-bold border-b border-gray-700">
          Calculadora de Retroativo Salarial
        </div>

        <nav className="flex flex-col p-4 gap-3">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Calculadora
          </Link>

          <Link to="/history" className="hover:bg-gray-700 p-2 rounded">
            Histórico
          </Link>
        </nav>
      </div>
    </>
  );
}
