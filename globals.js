const BD_ID = '1QZ3e7UicsznKwG7Wl4zTK1lnOGIV8n1mwnRtHnC-Yxw';
const SS = SpreadsheetApp.openById(BD_ID);
const sheetUsuarios = SS.getSheetByName('ACAP2');



function getOrganizaciones(){
  
  const ws = SS.getSheetByName("Informacion dg")

  const organizaciones = ws.getRange("B2:B500").getValues().filter(r => r[0] !== "").map(r => r[0])
  return organizaciones
}

function getEstados(){
  
  const ws = SS.getSheetByName("Estados y orientaciones")

  const estados = ws.getRange("A2:A10").getValues().filter(r => r[0] !== "").map(r => r[0])
  return estados
}

function getSector(){
  
  const ws = SS.getSheetByName("Estados y orientaciones")

  const sector = ws.getRange("C2:C5").getValues().filter(r => r[0] !== "").map(r => r[0])
  return sector
}

function getEquipoAcap(){
  
  const ws = SS.getSheetByName("Estados y orientaciones")

  const equipoAcap = ws.getRange("E2:E18").getValues().filter(r => r[0] !== "").map(r => r[0])
  return equipoAcap
}

function getOrientacion(){
  
  const ws = SS.getSheetByName("Estados y orientaciones")

  const orientacion = ws.getRange("F2:F22").getValues().filter(r => r[0] !== "").map(r => r[0])
  return orientacion
}

