import { useEffect, useState } from "react";

export default function SimpleCalculator() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);

  function append(value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  }

  function clear() {
    setDisplay("0");
  }

  function backspace() {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  function calculate() {
    try {
      const sanitized = display.replace(/×/g, "*").replace(/÷/g, "/");
      const result = Function(`"use strict"; return (${sanitized})`)();
      setDisplay(result.toString());
    } catch {
      setDisplay("Erro");
    }
  }

  function percent() {
    try {
      const value = parseFloat(display) / 100;
      setDisplay(value.toString());
    } catch {
      setDisplay("Erro");
    }
  }

  function sqrt() {
    try {
      const value = Math.sqrt(parseFloat(display));
      setDisplay(value.toString());
    } catch {
      setDisplay("Erro");
    }
  }

  function square() {
    try {
      const value = Math.pow(parseFloat(display), 2);
      setDisplay(value.toString());
    } catch {
      setDisplay("Erro");
    }
  }

  // memória
  function memoryAdd() {
    setMemory(memory + parseFloat(display || 0));
  }

  function memoryRecall() {
    setDisplay(memory.toString());
  }

  function memoryClear() {
    setMemory(0);
  }

  // teclado
  useEffect(() => {
    function handleKey(e) {
      const key = e.key;

      if (!isNaN(key) || key === ".") append(key);

      if (key === "+") append("+");
      if (key === "-") append("-");
      if (key === "*") append("×");
      if (key === "/") append("÷");

      if (key === "Enter") calculate();
      if (key === "Backspace") backspace();
      if (key === "Escape") clear();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const btn =
    "bg-gray-200 hover:bg-gray-300 p-4 rounded text-lg font-semibold border border-black";

  const operator =
    "bg-blue-500 hover:bg-blue-600 text-white p-4 rounded text-lg font-semibold";

  const special =
    "bg-gray-400 hover:bg-gray-500 text-white p-4 rounded text-lg font-semibold";

  return (
    <div className="max-w-md mx-auto p-6 border border-black">
      <h1 className="text-2xl font-bold mb-4">Calculadora</h1>

      <div className="bg-black text-green-400 text-right text-3xl p-4 rounded mb-4 break-all">
        {display}
      </div>

      <div className="grid grid-cols-5 gap-3">
        {/* memória */}
        <button className={special} onClick={memoryClear}>
          MC
        </button>
        <button className={special} onClick={memoryRecall}>
          MR
        </button>
        <button className={special} onClick={memoryAdd}>
          M+
        </button>
        <button className={special} onClick={percent}>
          %
        </button>
        <button className={special} onClick={backspace}>
          ⌫
        </button>

        {/* linha 2 */}
        <button className={btn} onClick={() => append("7")}>
          7
        </button>
        <button className={btn} onClick={() => append("8")}>
          8
        </button>
        <button className={btn} onClick={() => append("9")}>
          9
        </button>
        <button className={operator} onClick={() => append("÷")}>
          ÷
        </button>
        <button className={special} onClick={sqrt}>
          √
        </button>

        {/* linha 3 */}
        <button className={btn} onClick={() => append("4")}>
          4
        </button>
        <button className={btn} onClick={() => append("5")}>
          5
        </button>
        <button className={btn} onClick={() => append("6")}>
          6
        </button>
        <button className={operator} onClick={() => append("×")}>
          ×
        </button>
        <button className={special} onClick={square}>
          x²
        </button>

        {/* linha 4 */}
        <button className={btn} onClick={() => append("1")}>
          1
        </button>
        <button className={btn} onClick={() => append("2")}>
          2
        </button>
        <button className={btn} onClick={() => append("3")}>
          3
        </button>
        <button className={operator} onClick={() => append("-")}>
          -
        </button>
        <button className={special} onClick={clear}>
          C
        </button>

        {/* linha 5 */}
        <button
          className="col-span-2 bg-gray-200 hover:bg-gray-300 p-4 rounded text-lg font-semibold border border-black"
          onClick={() => append("0")}
        >
          0
        </button>

        <button className={btn} onClick={() => append(".")}>
          .
        </button>

        <button className={operator} onClick={() => append("+")}>
          +
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded text-lg font-semibold"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}
