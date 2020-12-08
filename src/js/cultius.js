$(function omplirtaula() {
    var array = [["avellana", 15.66, 90, 540, 20, 8, 10, 1, 11, 8, 7, 2], ["atmetlla", 28.22, 20, 980, 22, 12, 8, 4, 45, 9, 6, 8], ["oliva", 1.4, 80, 325, 35, 10, 8, 14, 19, 40, 20, 8], ["enciam", 10.4, 90, 925, 83, 28.6, 8, 87, 19, 9.8, 20, 8]];
    var table = document.getElementById("taula");


    for (var i = 0; i < array.length; i++) {
        // create a new row
        var newRow = table.insertRow(table.length);
        for (var j = 0; j < array[i].length; j++) {
            // create a new cell
            var cell = newRow.insertCell(j);

            // add value to the cell
            cell.innerHTML = array[i][j];
            var color = "Green ";

            switch (j) {
                case 0:

                    color = "White";


                    break;
                case 1:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " graus"
                    break;
                case 2:
                    if (array[i][j] > 80 || array[i][j] < 10) {
                        color = "Red";
                    }
                    cell.innerHTML += "  %"
                    break;
                case 3:
                    if (array[i][j] > 1000 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " mm"
                    break;
                case 4:
                    if (array[i][j] > 28 || array[i][j] < 15) {
                        color = "Red";
                    }
                    break;
                case 5:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " hores de sol"
                    break;
                case 6:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " Mj/m2"
                    break;
                case 7:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " mm"
                    break;
                case 8:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " graus"
                    break;
                case 9:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " hores"
                    break;
                case 10:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " grams/m2"
                    break;
                case 11:
                    if (array[i][j] > 30 || array[i][j] < 5) {
                        color = "Red";
                    }
                    cell.innerHTML += " L/m2"
                    break;
            }
            cell.bgColor = color;

        }
    }
});