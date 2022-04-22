<template>
  <div>
    <div ref="gridRef"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  rows: Array,
  columns: Array,
  limit: Number,
});

const emits = defineEmits(["rowClick"]);

const gridRef = ref();
const grid = getGrid(props.rows, props.columns, props.limit);
grid.on("rowClick", (...args) => handleRowClick(args));

onMounted(() => {
  grid.render(gridRef.value);
});

watchEffect(() => {
  if (gridRef.value) {
    grid.config.data = props.rows;
    grid.forceRender();
  }
});

const handleRowClick = (args) => {
  emits("rowClick", args);
};
</script>

<style></style>
