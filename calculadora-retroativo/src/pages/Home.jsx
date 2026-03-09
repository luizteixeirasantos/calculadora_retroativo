import Dashboard from "../components/Dashboard";
import useSalaryCalculator from "../hooks/useSalaryCalculator";

export default function Home() {
  const { history, calculate } = useSalaryCalculator();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">
        Calculadora de Retroativo Salarial
      </h1>

      <Dashboard history={history} onCalculate={calculate} />
    </div>
  );
}
