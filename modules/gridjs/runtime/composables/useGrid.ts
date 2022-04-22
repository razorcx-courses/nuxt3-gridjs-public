import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

export const getGrid = (rows, columns, limit = 2) =>
  new Grid({
    columns: columns,
    data: rows,
    search: {
      enabled: true,
    },
    resizable: true,
    sort: true,
    pagination: {
      enabled: true,
      limit: limit,
      summary: true,
    },
    style: {
      // td: {
      //   border: '1px solid #ccc'
      // },
      table: {
        "font-size": "1rem",
      },
    },
  });

const handleRowClick = (args) => {
  console.log("row: " + JSON.stringify(args), args[1]?.cells);
};

const handleCellClick = (args) => {
  console.log("cell: " + JSON.stringify(args), args);
};

export const registerGridEvents = (grid) => {
  grid.on("rowClick", (...args) => handleRowClick(args));
  grid.on("cellClick", (...args) => handleCellClick(args));
};
