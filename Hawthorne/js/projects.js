$('.caption-link').click(function(evt){
	evt.preventDefault();
	var project_href = $(this).attr('href');
	$( ".project-expanded" ).load( project_href);
});