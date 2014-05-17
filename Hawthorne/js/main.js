$('nav ul li a').click(function(evt){

	var href = $(this).attr('href'), 
		isResume = href.search('.pdf');

		if (isResume === -1 ) {
			isResume = false;
		} else {
			isResume = true;
		}

	if (!isResume)  {
		evt.preventDefault();
		$( ".page-container" ).load( href );
	}
});
