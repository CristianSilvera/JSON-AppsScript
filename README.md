# JSON-AppsScript

##  Google Sheets JSON API ej. 1 p.2.


![image](https://user-images.githubusercontent.com/22043269/229360882-f4e74ea4-36ec-4503-bfb2-4d9136a91e9d.png)
![image](https://user-images.githubusercontent.com/22043269/229360808-1ace23cc-371c-47d0-9da0-1407b80502d8.png)


``` function doGet() {

  const response = [{ status: "Hello QR Code. test: Concatenating user data." }]

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
