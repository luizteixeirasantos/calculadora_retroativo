export default function useHistory() {
  function saveCalculation(calc) {
    const history = JSON.parse(localStorage.getItem("calcHistory")) || [];

    history.unshift({
      ...calc,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("calcHistory", JSON.stringify(history));
  }

  function getHistory() {
    return JSON.parse(localStorage.getItem("calcHistory")) || [];
  }

  function clearHistory() {
    localStorage.removeItem("calcHistory");
  }

  return {
    saveCalculation,
    getHistory,
    clearHistory,
  };
}
