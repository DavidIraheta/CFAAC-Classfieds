function data(row, col)
{
    var Excel;
    Excel = new ActiveXObject("Excel.Application");
    Excel.Visible = false;
    return Excel.Workbooks.Open("H:\My Documents\Cyber Security\CFAAC Project\CFAAC Website\test.xls").ActiveSheet.Cells(row,col).Value;
}

function test(x, y)
{
	return x+y;
}
where l is number of rows and i are columns...
var i=1;
var l=1;

document.getElementById("test").innerHTML = test(1,1);