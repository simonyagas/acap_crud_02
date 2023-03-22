function editarUsuario(form) {

  const fila = buscarFila(form.usuarioId);
  /* console.log(fila); */
  sheetUsuarios.getRange(fila,2,1,sheetUsuarios.getLastColumn()-1).setValues([[
                  form.organizacion,
                  form.equipo,
                  form.sector,
                  form.orientacion1,
                  form.orientacion2,
                  form.cantEstudiantes,
                  form.dias,
                  form.hsAcap,
                  form.estudiantes,
                  form.turnos,
                  form.fecha,
                  form.horario,
                  form.lanzamiento,
                  form.acuerdo,
                  form.linkPp,
                  form.linkAp,
                  form.plataforma,
                  form.acuerdoFecha,
                  form.recepcionFecha,
                  form.acuerdoFirma,
                  form.nombreReferente,
                  form.cargoReferente,
                  form.telReferente,
                  form.mailReferente,
                  form.escuela,
                  form.cerrado
                ]])
  
  return "Usuario editado";
  
}

function buscarFila(id = '3'){
  const ids = sheetUsuarios.getRange(2,1,sheetUsuarios.getLastRow()-1,1).getValues().map( id => id[0]);
  /* console.log(ids); */
  const index = ids.indexOf(Number(id));
  /* console.log(index); */
  const row = index + 2;
  return row;
}