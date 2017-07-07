'use strict';

const Header = (update)=> {
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
