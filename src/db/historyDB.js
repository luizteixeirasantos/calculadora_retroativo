import { openDB } from "idb";

const DB_NAME = "retroCalcDB";
const STORE_NAME = "history";

export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function saveCalculation(data) {
  const db = await getDB();
  return db.add(STORE_NAME, data);
}

export async function getAllCalculations() {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}

export async function clearCalculations() {
  const db = await getDB();
  return db.clear(STORE_NAME);
}
