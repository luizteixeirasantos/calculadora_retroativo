import {
  saveCalculation,
  getAllCalculations,
  clearCalculations,
} from "../db/historyDB";

export default function useHistory() {
  async function addCalculation(calc) {
    await saveCalculation({
      ...calc,
      date: new Date().toLocaleString(),
    });
  }

  async function getHistory() {
    return await getAllCalculations();
  }

  async function clearHistory() {
    await clearCalculations();
  }

  return {
    addCalculation,
    getHistory,
    clearHistory,
  };
}
