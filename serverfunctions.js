function doGet(e) {
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
      const htmlService = HtmlService.createTemplateFromFile("Main")
      htmlService.organizaciones = getOrganizaciones()
      htmlService.estados = getEstados()
      htmlService.sectores = getSector()
      htmlService.equipos = getEquipoAcap()
      htmlService.orientaciones = getOrientacion()   
      const html = htmlService.evaluate().addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no").setTitle('ACAP').setFaviconUrl("https://img.icons8.com/plasticine/256/bookmark-ribbon--v1.png")
      return html
    }
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}



