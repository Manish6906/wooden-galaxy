import { create } from "zustand";

const fetchDiningData = async (set) => {
  try {
    const endPoint = "/api/v1/fetch/dining";
    const api =
      import.meta.env.BACKEND_URL ||
      "https://woodenbackend.onrender.com" + endPoint;
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    set({ dining: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchBedroomData = async (set) => {
  try {
    const endPoint = "/api/v1/fetch/bedroom";
    const api =
      import.meta.env.BACKEND_URL ||
      "https://woodenbackend.onrender.com" + endPoint;
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    set({ bedroom: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchLivingData = async (set) => {
  try {
    const endPoint = "/api/v1/fetch/living";
    const api =
      import.meta.env.BACKEND_URL ||
      "https://woodenbackend.onrender.com" + endPoint;
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    set({ living: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const useFetch = create((set) => ({
  dining: null,
  bedroom: null,
  living: null,
  fetchDiningData: () => fetchDiningData(set),
  fetchBedroomData: () => fetchBedroomData(set),
  fetchLivingData: () => fetchLivingData(set),
}));

export default useFetch;
