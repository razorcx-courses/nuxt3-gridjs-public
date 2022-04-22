<template>
  <div class="container my-6">
    <h2 class="title is-3 mt-6">Nuxt3<b>Grid.js</b></h2>
    <Grid :rows="rows" :columns="columns" :limit="limit" @rowClick="handleRowClick"/>
    <button class="button" @click="handleAddVehicle">Add Vehicle</button>
  </div>
</template>

<script setup>
const cars = useCars(); //global state

const data = cars.value.slice(0, 2); //first 2 cars

const rows = ref(data);
const columns = vehicleColumns;
const limit = ref(2);

const handleAddVehicle = () => {
  data.push(...cars.value.splice(2, 1)); //add 3rd car
  rows.value = [...data];
};

const handleRowClick = (args) => {
  console.log(args)
}
</script>
