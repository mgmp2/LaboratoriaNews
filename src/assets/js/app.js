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




	//  $.get('api/categories/'+idCat, (response) =>{
	// 	 			console.log(response);
 // 	        state.idCategories = response;
 // 	 });


	const root = $('.root');
	render(root)
});
