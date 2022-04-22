export default defineNuxtPlugin(async (nuxtApp) => {
  const cars = useCars();
  cars.value = await $fetch("/api/cars");
});
