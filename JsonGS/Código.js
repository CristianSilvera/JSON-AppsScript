function doGet() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const data = ws.getRange("A1").getDataRegion().getValue();
  const headers = data.shift();

  //[{id:3, firstName: "John"}, {}]

  const jsonArray = data.map(r => {
    let obj = {}
    headers.array.forEach((h, i) => {
      obj [h] = r[i];
    });
    return obj;
  });

  const response = [{ status: 200, data: jsonArray }]

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);

}

function doPost(e) {
  // { "name": "Joe" }
  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('test');
  ws.appendRow([bodyJSON.name, bodyJSON.lastname]);
  
}