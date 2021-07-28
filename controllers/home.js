let isVisible = [false, false, false, false];

const map1 = new Map();

map1.set('card1', 0);
map1.set('card2', 1);
map1.set('card3', 2);
map1.set('card4', 3);

function toggle_table(cardId) {
    console.log(cardId)
    let node = document.getElementById(cardId);
    let index = map1.get(cardId)
    if(!isVisible[index]){
        const product_prices = [10,15,20,25]
        const product_names = ["Banner", "Vinil", "+ Structure", "+ Instalation"]

        var tbl = document.createElement("table");
        tbl.setAttribute("class", "table");
        var tblBody = document.createElement("tbody");
        var columnOutput;
    
        for (var i = 0; i < product_names.length ; i++) {    
            var row = document.createElement("tr");
            for (var j = 0; j < 2 ; j++) {
                var cell = document.createElement("td");
                if(j == 0)  {
                    columnOutput = product_names[i] 
                }  else {
                    columnOutput = "$ " + product_prices[i]
                }
                var cellText = document.createTextNode(columnOutput);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
    
        tbl.appendChild(tblBody);
        node.appendChild(tbl);
        tbl.setAttribute("border", "2");
        isVisible[index] = true;
    } else {
        console.log(cardId)
        console.log(index)
        console.log(isVisible[index])
        let table = node.getElementsByTagName("table")[0]; 
        node.removeChild(table);
        isVisible[index] = false;
    }
}
