import cars from "../data/cars.json";

export default defineEventHandler(async (event) => {
  try {
    return cars;
  } catch (error) {
    return error.message;
  }
});