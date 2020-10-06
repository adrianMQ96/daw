function Sudoku(numeros) {
    this.numeros = [];
    if (numeros == false) {
        // Generar un sudoku
        this.numeros = [
            [0, 0, 0, 0, 9, 0, 1, 0, 5],
            [0, 0, 8, 0, 5, 4, 3, 2, 7],
            [0, 0, 5, 0, 1, 0, 0, 8, 6],
            [0, 8, 3, 7, 0, 6, 0, 0, 5],
            [5, 0, 6, 0, 3, 1, 0, 0, 0],
            [1, 2, 0, 0, 8, 0, 4, 0, 0],
            [6, 3, 1, 0, 0, 9, 0, 5, 2],
            [2, 7, 0, 5, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 7, 0, 0, 0, 0],
        ]
    } else {
        // Ja ho farem
    }
 }
  
 Sudoku.prototype.dibujar = function (cont) {
    let tabla = document.createElement('table');
    tabla.id = 'tablasudoku';
    for (let i = 0; i < 9; i++) {
        let fila = document.createElement('tr');
        if (i == 2 | i == 5) fila.className = 'separador';
        for (let j = 0; j < 9; j++) {
            let celda = document.createElement('td');
            celda.id = `celda${i}-${j}`;
            let div = document.createElement('div');
            celda.appendChild(div);
            if (this.numeros[i][j] > 0) div.innerText = this.numeros[i][j]; else {
                let input = document.createElement('input');
                input.value = 0; input.className = 'su';
                div.appendChild(input);
            }
            fila.appendChild(celda);
            if (j == 2 | j == 5) { celda.className = 'separador' };
        }
        tabla.appendChild(fila);
    }
    cont.appendChild(tabla);
 };
  
 Sudoku.prototype.traspasar = function () {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let celda = document.getElementById(`celda${i}-${j}`);
            if (celda.getElementsByTagName('input').length == 1) {
                this.numeros[i][j] = parseInt(celda.querySelector('input').value);
            }
  
        }
    }
 };
  
 Sudoku.prototype.validar = function () {
    //validar files
    let valida = true;
  
    function validar9(fila) {
        fila.sort();
        for (let j = 0; j < 9; j++) {
            if (fila[j] != j + 1) { valida = false; };
        }
    }
  
    console.log('**************************************');
    //console.log(this.numeros);
  
    for (let i = 0; i < 9; i++) { // Validació de files
        let fila = this.numeros[i].slice();
        valida = validar9(fila); }
 
        for (let i = 0; i < 9; i++) { // Validació de columnes
            let columna = [];
            for (let j = 0; j < 9; j++) {
                columna.push(this.numeros[j][i]);
            }
            validar9(columna);
        }
      
        // Validació de quadrats
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let quadrat = [];
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        quadrat.push(this.numeros[i * 3 + k][j * 3 + l]);
                    }
                }
                validar9(quadrat);
            }
        }
      
        console.log(valida);
     };
      
     let sudoku;
      
     (function () {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            let contenedor = document.getElementById('sudoku');
            console.log(contenedor);
            sudoku = new Sudoku(false);
            sudoku.dibujar(contenedor);
        });
     })();
      
     function validar() {
        // copiar el sudoku en el array
        sudoku.traspasar();
        //console.log(sudoku.numeros);
        // Validar el sudoku
        sudoku.validar();
 
 
 
   return false;
}
