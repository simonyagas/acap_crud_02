function borrarUsuario(id) {
  /* sheetUsuarios.deleteRow(5); */
  const fila = buscarFila(id);
  sheetUsuarios.deleteRow(fila);
}