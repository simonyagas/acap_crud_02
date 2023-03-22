function agregarUsuario(form) {
  /* console.log(form); */
  const usuarioId = crearNuevoId();
  const organizacion= form.organizacion;
  const equipo= form.equipo;
  const sector= form.sector;
  const orientacion1= form.orientacion1;
  const orientacion2= form.orientacion2;
  const cantEstudiantes= form.cantEstudiantes;
  const dias= form.dias;
  const hsAcap= form.hsAcap;
  const estudiantes= form.estudiantes;
  const turnos= form.turnos;
  const fecha= form.fecha;
  const horario= form.horario;
  const lanzamiento= form.lanzamiento;
  const acuerdo= form.acuerdo;
  const linkPp= form.linkPp;
  const linkAp= form.linkAp;
  const linkEscuela= form.linkEscuela;
  const plataforma= form.plataforma;
  const acuerdoFecha= form.acuerdoFecha;
  const recepcionFecha= form.recepcionFecha;
  const acuerdoFirma= form.acuerdoFirma;
  const nombreReferente= form.nombreReferente;
  const cargoReferente= form.cargoReferente;
  const telReferente= form.telReferente;
  const mailReferente= form.mailReferente;
  const escuela= form.escuela;
  const cerrado= form.cerrado;

  sheetUsuarios.appendRow([
                          usuarioId,
                          organizacion,
                          equipo,
                          sector,
                          orientacion1,
                          orientacion2,
                          cantEstudiantes,
                          dias,
                          hsAcap,
                          estudiantes,
                          turnos,
                          fecha,
                          horario,
                          lanzamiento,
                          acuerdo,
                          linkPp,
                          linkAp,
                          plataforma,
                          acuerdoFecha,
                          recepcionFecha,
                          acuerdoFirma,
                          nombreReferente,
                          cargoReferente,
                          telReferente,
                          mailReferente,
                          escuela,
                          cerrado
                          ]);

  return "Usuario agregado";

}

function crearNuevoId(){
  let id = 1;
  if( sheetUsuarios.getLastRow() === 1){
    return id;
  }
  const ids = sheetUsuarios.getRange(2,1,sheetUsuarios.getLastRow()-1,1).getValues().map(id=>id[0]);
  /* console.log(ids); */
  let maxId = 0;
  ids.forEach(id=>{
    if( id > maxId ){
      maxId = id;
    }
  });
  return maxId + 1;
}