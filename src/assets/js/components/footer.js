'use strict';

const Footer =  (update) => {
  const footer    = $('<footer></footer>');
  const row       = $('<div class="row"></div>');
  const colMain   = $('<div class="col xs-12 sm-12 md-3 "></div>');
  const logo      = $('<img src="assets/img/logo-footer.png" alt="laboraotria logo">');
  const firstLine = $('<p>&copy;Editado por Laboratoria</p>');
  const secLine   = $('<p>Av. José Pardo #601 Lima 1 Perú</p>');
  const thirdLine   = $('<p>Copyright &copy; Laboratoria.la</p>');
  const fourthLine  = $('<p>Todos los derechos reservados.</p>');
  const colSec      = $('<div class="col md-3 hidden-xs show-md"></div>');
  const secDesc     = $('<p>DIRECTOR GENERAL:</p><span>Francisco Miró Quesada Cantuarias</span><p>DIRECTOR PERIODÍSTICO:</p><span>Fernando Berckemeyer Olaechea</span><p>SUSCRIPCIONES:</p><span>suscriptores@comercio.com.pe</span><p>PUBLICIDAD ONLINE:</p><span>fonoavisos@comercio.com.pe</span><p>CLUB EL COMERCIO:</p><span>clubelcomercio@comercio.com.pe</span><p>Compromiso de Autorregulación Comercial</p>');
  const colThird    = $('<div class="col md-4 hidden-xs show-md"></div>');
  const thirdTop    = $('<div class=""></div>');
  const term        = $('<ul></ul>')
  const thirdBot    = $('<div class=""></div>');

  let listasArray = ["TÉRMINOS Y CONDICIONES DE USO", "TRABAJA CON NOSOTROS", "LIBRO DE RECLAMACIONES", "SEDES PRINCIPALES", "POLÍTICAS DE PRIVACIDAD"];
  for (let i = 0; i < listasArray.length; i++) {
     const listas= $('<li><a href="#">'+listasArray[i]+'</a></li>');
     term.append(listas);
  }

const follow = $('<div class="header__top--right"><span>SÍGUENOS: </span><img src="assets/img/fb.png" alt="facebook"><img src="assets/img/tw.png" alt="twitter"><img src="assets/img/in.png" alt="linkedin"></div>');


  colMain.append(logo);
  colMain.append(firstLine);
  colMain.append(secLine);
  colMain.append(thirdLine);
  colMain.append(fourthLine);
  colSec.append(secDesc);
  thirdTop.append(term);
  thirdBot.append(follow);
  colThird.append(thirdTop);
  colThird.append(thirdBot);
  row.append(colMain);
  row.append(colSec);
  row.append(colThird);
  footer.append(row);
  return footer;
}
