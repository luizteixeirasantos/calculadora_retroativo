import { useState, useEffect } from "react";

export default function useSalaryCalculator() {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("salaryHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("salaryHistory", JSON.stringify(history));
  }, [history]);

  function calculate({ salary, months, discount }) {
    const retroactive = salary * months;
    const discountValue = retroactive * (discount / 100);
    const total = retroactive - discountValue;

    const result = {
      date: new Date().toLocaleDateString(),
      salary,
      months,
      discount,
      retroactive,
      discountValue,
      total,
    };

    setHistory((prev) => [result, ...prev]);

    return result;
  }

  return { history, calculate };
}
