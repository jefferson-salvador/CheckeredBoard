var x = 0;
for(x = 0; x <= 511; x++){
    var number1= parseInt(x.toString(2));
    var number = number1,
    output = [0,0,0,0,0,0,0,0,0],
    sNumber = number.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.shift();
        output.push(+sNumber.charAt(i));
    }
    
    document.getElementById("binary").innerHTML = typeof(output);
    var newArr = [];
    while(output.length) newArr.push(output.splice(0,3));
    
    document.getElementById("binary").innerHTML = newArr;
    document.getElementById("number").innerHTML = x;
    console.log(newArr);
    createTable();
}

function createTable(){
    let title = document.createElement('div');
    title.innerHTML = "<b>" + "BOARD " + (x + 1);

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(title);
    title.style.textAlign = "center";

    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('tables').appendChild(table);
    // Creating and adding data to second row of the table
    let row_1 = document.createElement('tr');
    let row_1_data_1 = document.createElement('td');
    row_1_data_1.style.backgroundColor = newArr[0][0] == 1 ? "black" : "white";
    let row_1_data_2 = document.createElement('td');
    row_1_data_2.style.backgroundColor = newArr[0][1] == 1 ? "black" : "white";
    let row_1_data_3 = document.createElement('td');
    row_1_data_3.style.backgroundColor = newArr[0][2] == 1 ? "black" : "white";
    
    row_1.appendChild(row_1_data_1);
    row_1.appendChild(row_1_data_2);
    row_1.appendChild(row_1_data_3);
    tbody.appendChild(row_1);
    
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.style.backgroundColor = newArr[1][0] == 1 ? "black" : "white";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.style.backgroundColor = newArr[1][1] == 1 ? "black" : "white";
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.style.backgroundColor = newArr[1][2] == 1 ? "black" : "white";
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
    
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.style.backgroundColor = newArr[2][0] == 1 ? "black" : "white";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.style.backgroundColor = newArr[2][1] == 1 ? "black" : "white";
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.style.backgroundColor = newArr[2][2] == 1 ? "black" : "white";
    
    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
}
