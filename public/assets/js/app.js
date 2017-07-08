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



	//  $.get('api/news/29', (response) =>{
	// 					console.log(response);
 // 	        state.idNews = response;
 // 	 });







	const root = $('.root');
	render(root)
});

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

'use strict';

const Header = (update) => {
  const header      = $('<header class="header"></header>');
  const headerTop   = $('<div class="header__top hidden-md"></div>');
  const menuSearch  = $('<div class="header__top--left"></div>');
  const menu        = $('<div><img src="assets/img/menu.png" alt="menu laboratoria"><span>SECTIONS</span></div>');
  const search      = $('<div><img src="assets/img/search.png" alt="menu laboratoria"><span>SEARCH</span></div>');
  const iconos      = $('<div class="header__top--right "></div>');
  const fb          = $('<img src="assets/img/fb.png" alt="facebook">');
  const tw          = $('<img src="assets/img/tw.png" alt="twitter">');
  const lk          = $('<img src="assets/img/in.png" alt="linkedin">');
  const headerCent  = $('<div class="header__center"></div>');
  const logo        = $('<img src="assets/img/logoicon.png" alt="laboratoria logo">');
  const boxDate     = $('<div class="header__center--text hidden-sm">');
  const date        = $('<p>Lunes, Junio 12 de 2017  </p><span>  |  </span><img src="assets/img/cloud.png" alt="nube"><p>22°</p>');
  const headerBot   = $('<div class="header__bottom hidden-sm"></div>');
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

  const news   = $('<section id="box-news"></section>');
  const col     = $('<div class="col xs-12"></div>');
  const boxDesc = $('<div class="col sm-12 md-9"></div>');


  // const titleNew = $('<h3 class="white-text">'+state.news[0].title+'</h3>');
  const subt    = $('<p class="white-text hidden-xs show-md">Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</p>');
  // boxDesc.append(titleNew);

  $.get('api/news', (response) =>{
	        state.news = response;
          for (let i = 0; i < state.news.length; i++) {
            // const par =  $('<p>'+state.news[i].title+'</p>')
            // news.append(par);
          }
	 });
   $.get('api/categories', (response) =>{
         state.categories = response;
         $.each(state.categories, (i)=>  {
           const cat =  $('<section id="'+state.categories[i].title+'"></section>');

           if ([i] == 0) { //noticia principal
             const h1   = $('<h1 >LO ÚLTIMO</h1><hr class="show-sm hidden-md">');
             const row     = $('<div class="row"></div>');
             const rowSec     = $('<div class="row newSec"></div>');

            $.each(state.news, (j) => {
              if (state.news[j].categories[0] == i) {
                if(state.news[j].brief) {
                  const boxMain   = $('<div class="box-'+state.categories[i].title+'"></div>')
                  const img       = $('<img src="assets/img/news/'+state.news[j].img+'" alt="noticia principal">');
                  const info      = $('<div class="info"></div>')
                  const boxTitle  = $('<div class="col xs-12 md-8"></div>');
                  const title     = $('<h3>'+state.news[j].title+'</h3>');
                  const boxParr   = $('<div class="col md-6"></div>');
                  const parr = $('<p class="hidden-sm">'+state.news[j].brief+'</p>');
                  boxParr.append(parr);

                  boxMain.append(img);
                  boxTitle.append(title);
                  info.append(boxTitle);
                  info.append(boxParr);
                  boxMain.append(info);
                  row.append(boxMain);
                } else {

                  const boxMain   = $('<div class="box-'+state.categories[i].title+' col xs-12 md-4"></div>')
                  const img       = $('<img src="assets/img/news/'+state.news[j].img+'" alt="noticia principal">');
                  const info      = $('<div class="newSec__relative"></div>')
                  const boxTitle  = $('<div class="newSec__relative--absolute"></div>');
                  const title     = $('<h4>'+state.news[j].title+'</h4>');


                  boxMain.append(img);
                  boxTitle.append(title);
                  info.append(boxTitle);
                  boxMain.append(info);
                  rowSec.append(boxMain);

                }

              }
            });

            cat.append(row);
             cat.append(rowSec);
             cat.prepend(h1);
             news.append(cat);
           }
          //  OTRAS CATEGORIAS
           else if([i]>=1 && [i] <5) {
             const cat =  $('<section id="'+state.categories[i].title+'"></section>');
             const h1   = $('<h1>'+state.categories[i].title+'</h1><hr>');
             const row     = $('<div class="row"></div>');

             row.append(h1);
             cat.append(row);
             news.append(cat);

            //  CARROUSEL

           } else {
             const cat =  $('<section id="'+state.categories[i].title+'"></section>');
             news.append(cat);
           }

         });
   });




  boxDesc.append(subt);

  return news;
}
