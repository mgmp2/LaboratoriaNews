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
