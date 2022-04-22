import { html } from "gridjs";

export const vehicleColumns = [
  {
    name: "Make",
    width: "20%",
    hidden: false,
    formatter: (cell) => getNameHtml(cell),
  },
  {
    name: "Model",
    width: "15%",
    hidden: false,
  },
  {
    name: "Year",
    width: "15%",
    hidden: false,
  },
  {
    name: "Color",
    width: "15%",
    hidden: false,
    formatter: (cell) => html(`<b class="has-text-primary">${cell}</b>`),
  },
  {
    name: "Picture",
    width: "35%",
    hidden: false,
    formatter: (cell) => html(`<img src="${cell}"/>`),
  },
];

const getNameHtml = (cell) => {
  return html(`<b class="is-size-4">${cell}</b>`);
};
