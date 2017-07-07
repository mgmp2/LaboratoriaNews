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
