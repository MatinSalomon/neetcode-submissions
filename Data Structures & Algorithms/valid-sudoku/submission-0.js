class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let registro = new Set();
        for(let i=0; i<9; i++){
            for (let j = 0; j < 9; j++) {
            let valor = board[i][j];

                if (valor !== '.') {
                    let bloqueFila = Math.floor(i / 3);
                    let bloqueColumna = Math.floor(j / 3);

                    let claveFila = `fila ${i}: ${valor}`;
                    let claveColumna = `col ${j}: ${valor}`;
                    let claveBloque = `bloque ${bloqueFila}-${bloqueColumna}: ${valor}`;

                    if (registro.has(claveFila) || registro.has(claveColumna) || registro.has(claveBloque)) {
                        return false; 
                    }

                    registro.add(claveFila);
                    registro.add(claveColumna);
                    registro.add(claveBloque);
                }
            }
        }
        return true
    }
}