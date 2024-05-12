import { useEffect, useState } from "react";

import "./App.css";
import Cell from "./Cell";

function App() {
  const popolaMatrice = () => {
    // Definizione della matrice
    const matrix: { id: { row: number; col: number }; value: number }[][] = [];

    // Riempimento della matrice con valori e ID
    for (let row = 0; row < 9; row++) {
      matrix[row] = [];
      for (let col = 0; col < 4; col++) {
        matrix[row][col] = {
          id: { row, col },
          value: Math.floor(Math.random() * 9) + 1,
        };
      }
    }

    matrix[3].pop();
    return matrix;
  };
  const [numbers, setNumbers] = useState<
    { id: { row: number; col: number }; value: number }[][]
  >(popolaMatrice());
  const [selectedNumbers, setSelectedNumber] = useState<
    { id: { row: number; col: number }; value: number }[]
  >([]);

  const check = (numero: {
    id: { row: number; col: number };
    value: number;
  }) => {
    selectedNumbers.push(numero);
    if (selectedNumbers.length === 2) {
      if (CheckIfNear())  //TODO
      if (
        selectedNumbers[0].value === selectedNumbers[1].value ||
        selectedNumbers[0].value + selectedNumbers[1].value === 10
      ) {
        console.log("Ciaooo");
      }
      setSelectedNumber([]);
    }
  };
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(9, 100px)",
    gridAutoRows: "100px",
  };
  return (
    <div style={gridContainerStyle}>
      {numbers.map((y) => {
        return y.map((x) => {
          return (
            <Cell
              key={`${x.id.row}${x.id.col}`}
              size={100}
              number={x}
              onClick={(num: {
                id: { row: number; col: number };
                value: number;
              }) => check(num)}
            />
          );
        });
      })}
    </div>
  );
}
//

export default App;
