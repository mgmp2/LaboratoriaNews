'use strict';
const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};
  //
	// wrapper.append(Header(update));
	// wrapper.append(Board(update));
	root.append(wrapper);

};

const state = {
	news: null,
	idNews: null
};

$( _ => {

	const token = "Abt9DqiGVqIRi5YiudzVES8zdhUbFM4pbUqLpSZEItcfpsA05gAAAAA";
	const pinterest = "https://api.pinterest.com/v1";

	$.get('api/news', (response) =>{
	        state.news = response;
					console.log(response);
	       });

	const root = $('.root');
	render(root)
});
