function myFunction2() {
  var sheet = SpreadsheetApp.openById('SHEET_ID').getSheetByName('SHEET_NAME');
  var dataRange = sheet.getRange(2,1,getNextRow(sheet)-1,5).getDisplayValues();
  var url = 'FIREBASE_URL.json';
  
  var request = JSON.parse(UrlFetchApp.fetch(url));
  
  for(var i in dataRange){
    
    if(dataRange[i][2]!="") continue;
    
    if(!request) continue;
    
    try {
    var id = dataRange[i][1];
    
    sheet.getRange(Number(i)+2, 3).setValue(request[id].FIELD_NAME_1);
    sheet.getRange(Number(i)+2, 4).setValue(request[id].FIELD_NAME_2);
    }
    catch(err) {
      Logger.log(err);
    }
  }
 }
