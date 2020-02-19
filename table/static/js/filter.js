$(document).ready( function () {
    $('#myTable').DataTable();
} );

// function getSelectValue() {
//     var selectedValue = document.getElementById("#selectField").property("Sector");
//     console.log(selectedValue);
// }

// // find data
// //build table
// var myTable = myTable

// //Filterdata
// function filtermyTable() {
//     var Sector = d3.select("#selectField").property("value");
//     let filteredTable = myTable;
//     console.log(filteredTable)
//     if (Sector){
//         filteredTable = filteredTable.filter(row => row.Sector=== Sector);
//         console.log(filteredTable)
//     }
//     buildTable(filteredTable)

//     d3.selectAll("selected").on("change", filtermyTable);
// }


$ (document).ready (function() {
    // function addRemoveClass (theRows) {
    //     theRows.removeClass ("odd even");
    //     theRows.filter(":odd").addClass ("odd");
    //     theRows.filter(":even").addClass ("even");
    // }
    var rows= ("#myTable tr:not (HeadRow)");
    removeClass (rows);
    
    $ ("#selectField").change (function() {
        var selected = $(this).value;
    
        if (selected !="All") {

            rows.filter("[Sector="+ selected +"]").show();
            rows.not("[Sector="+ selected +"]").hide();
            var visibleRows = rows.filter("[Sector="+ selected +"]");
            addClass (visibleRows);
        } 
        else {
            rows.show();
            addClass (rows);
        }
    });
});