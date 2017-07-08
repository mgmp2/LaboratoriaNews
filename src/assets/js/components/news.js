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
             const h1   = $('<h1>LO ÚLTIMO</h1><hr class="show-sm hidden-md">');
             const row     = $('<div class="row"></div>');

            $.each(state.news, (j) => {
              if (state.news[j].categories[0] == i) {
                const boxMain   = $('<div class="box-'+state.categories[i].title+'"></div>')
                const img       = $('<img src="assets/img/news/'+state.news[j].img+'" alt="noticia principal">');
                const info      = $('<div class="info"></div>')
                const boxTitle  = $('<div class="col xs-12 md-8"></div>');
                const title     = $('<h3>'+state.news[j].title+'</h3>');
                const boxParr   = $('<div class="col md-6"></div>');
                if(state.news[j].brief) {
                  const parr = $('<p class="hidden-sm">'+state.news[j].brief+'</p>');
                  boxParr.append(parr);
                }

                boxMain.append(img);
                boxTitle.append(title);
                info.append(boxTitle);
                info.append(boxParr);
                boxMain.append(info);
                row.append(boxMain);
              }
            });

             cat.append(row);
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
