import { Link } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-900">
      {/* botão mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* sidebar */}
      <aside
        className={`
        fixed md:relative
        bg-slate-900 text-white
        w-64 p-6
        min-h-screen
        transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform
      `}
      >
        <h2 className="text-xl font-bold mb-8">Retroativo</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:bg-slate-700 p-2 rounded">
            Calculadora
          </Link>

          <Link to="/history" className="hover:bg-slate-700 p-2 rounded">
            Histórico
          </Link>
        </nav>
      </aside>

      {/* conteúdo */}
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
