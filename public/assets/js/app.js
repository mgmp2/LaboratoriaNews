'use strict';
const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};
	wrapper.append(Header(update));
	wrapper.append(News(update));
	wrapper.append(Footer(update));
	root.append(wrapper);

};

const state = {
	news: null,
	idNews: null,
	categories: null,
	idCategories: null
};

$( _ => {

	const token = "Abt9DqiGVqIRi5YiudzVES8zdhUbFM4pbUqLpSZEItcfpsA05gAAAAA";
	const pinterest = "https://api.pinterest.com/v1";

	$.get('api/news', (response) =>{
	        state.news = response;
					console.log(response);
	 });

	//  $.get('api/news/29', (response) =>{
	// 					console.log(response);
 // 	        state.idNews = response;
 // 	 });


	//  $.get('api/categories', (response) =>{
	// 					console.log(response);
 // 	        state.categories = response;
 // 	 });

	//  $.get('api/categories/'+idCat, (response) =>{
	// 	 			console.log(response);
 // 	        state.idCategories = response;
 // 	 });


	const root = $('.root');
	render(root)
});

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

'use strict';

const Header = (update) => {
  const header      = $('<header class="header"></header>');
  const headerTop   = $('<div class="header__top"></div>');
  const menuSearch  = $('<div class="header__top--left"></div>');
  const menu        = $('<div><img src="assets/img/menu.png" alt="menu laboratoria"><span>SECTIONS</span></div>');
  const search      = $('<div><img src="assets/img/search.png" alt="menu laboratoria"><span>SEARCH</span></div>');
  const iconos      = $('<div class="header__top--right"></div>');
  const fb          = $('<img src="assets/img/fb.png" alt="facebook">');
  const tw          = $('<img src="assets/img/tw.png" alt="twitter">');
  const lk          = $('<img src="assets/img/in.png" alt="linkedin">');
  const headerCent  = $('<div class="header__center"></div>');
  const logo        = $('<img src="assets/img/logoicon.png" alt="laboratoria logo">');
  const boxDate     = $('<div class="header__center--text">');
  const date        = $('<p>Lunes, Junio 12 de 2017  </p><span>  |  </span><img src="assets/img/cloud.png" alt="nube"><p>22°</p>');
  const headerBot   = $('<div class="header__bottom"></div>');
  const boxList     = $('<ul class="header__bottom--listas"></ul>');

  let listasArray = ["Lo último", "Opinión", "Cultura", "Perú", "Tecnología", "Mundo", "Economía", "Lifestyle", "Deporte"];
  for (let i = 0; i < listasArray.length; i++) {
     const listas= $('<li><a href="#">'+listasArray[i]+'</a></li>');
     boxList.append(listas);
  }
  // top
  menuSearch.append(menu);
  menuSearch.append(search);
  headerTop.append(menuSearch);
  iconos.append(fb);
  iconos.append(tw);
  iconos.append(lk);
  headerTop.append(iconos);
  header.append(headerTop);
  // center
  boxDate.append(date);
  headerCent.append(logo);
  headerCent.append(boxDate);
  header.append(headerCent);
  // bottom
  headerBot.append(boxList);
  header.append(headerBot);
 return header;
}

'use strict';
const News = (update) => {

  const news   = $('<section id="mainNew"></section>');
  const row     = $('<div class="row"></div>');
  const col     = $('<div class="col xs-12"></div>');
  const titulo  = $('<h1 class="hidden-sm">LO ÚLTIMO</h1>');
  const boxNew  = $('<div class="box-main"></div>');
  const img     = $('<img src="assets/img/news/news-0.png" alt="noticia principal">');
  const boxDesc = $('<div class="col sm-12 md-9"></div>');
  // const titleNew = $('<h3 class="white-text">'+state.news[0].title+'</h3>');
  const subt    = $('<p class="white-text hidden-xs show-md">Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</p>');
  // boxDesc.append(titleNew);
  boxDesc.append(subt);
  boxNew.append(img);
  boxNew.append(boxDesc);
  col.append(titulo);
  col.append(boxNew);
  row.append(col);
  news.append(row);
  return news;
}
