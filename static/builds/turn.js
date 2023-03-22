function convertTable(tbl) {
    var rows = tbl.rows.length;
    var cols = tbl.rows[0].cells.length;
    var tbl2 = document.createElement('table');

    for (var i = 0; i < cols; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < rows; j++) {
            var td = document.createElement('td');
            var tdih = tbl.rows[j].cells[i].innerHTML;
            td.innerHTML = tdih;
            tr.appendChild(td);
        }
        tbl2.appendChild(tr);
    }
    return tbl2;
}