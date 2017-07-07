'use strict';

const Footer =  (update) => {
  const footer    = $('<footer></footer>');
  const row       = $('<div class="row"></div>');
  const colMain   = $('<div class="col md-3"></div>');
  const logo      = $('<img src="assets/img/logo-footer.png" alt="laboraotria logo">');
  const firstLine = $('<p>&copy;Editado por Laboratoria</p>');
  const secLine   = $('<p>Av. José Pardo #601 Lima 1 Perú</p>');
  const thirdLine   = $('<p>Copyright &copy; Laboratoria.la</p>');
  const fourthLine  = $('<p>Todos los derechos reservados.</p>');
  const colSec      = $('<div class="col md-4"></div>');

  const colThird    = $('<div class="col md-5"></div>');
  const thirdTop    = $('<div class=""></div>');
  const term        = $('<ul></ul>')
  const thirdBot    = $('<div class=""></div>');

  let listasArray = ["TÉRMINOS Y CONDICIONES DE USO", "TRABAJA CON NOSOTROS", "LIBRO DE RECLAMACIONES", "SEDES PRINCIPALES", "POLÍTICAS DE PRIVACIDAD"];
  for (let i = 0; i < listasArray.length; i++) {
     const listas= $('<li><a href="#">'+listasArray[i]+'</a></li>');
     term.append(listas);
  }




  colMain.append(logo);
  colMain.append(firstLine);
  colMain.append(secLine);
  colMain.append(thirdLine);
  colMain.append(fourthLine);

  thirdTop.append(term);
  colThird.append(thirdTop);
  row.append(colMain);
  row.append(colSec);
  row.append(colThird);
  footer.append(row);
  return footer;
}
