var Excel = require('exceljs');
var workbook = new Excel.Workbook();
workbook.xlsx.readFile("test.xlsx")
    .then(function() {
        ws = workbook.getWorksheet("Εκπαιδευτικοί")
        cell = ws.getCell('A1').value
        console.log(cell)
    });