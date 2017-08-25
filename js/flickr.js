$(document).ready(function(){
	

	$("form").submit(function(e){
		e.preventDefault();

		var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var animal = $('#search').val();
		console.log(animal);
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		$('#search').prop("disabled", true);
		$("#submit").val('...searching').prop("disabled", true);
		
			$.getJSON(flickrAPI, flickrOptions, function(response){
				console.log(response);
				
				var ul = '<ul>';
				$.each(response.items, function(index, photo){
					ul+= '<li class="grid-25 tablet-grid-50">';
					ul+= '<a href="'+photo.media.m+'" class="image" data-lightbox=\'1\'>';
					ul+= '<img src="'+photo.media.m+'"></a></li>';
				});//end each
				ul+='</ul>';
				$('#photos').html(ul);

				$('#search').prop("disabled", false);
				$('#submit').val("Search").prop("disabled", false);
			});
		
	});
});// end ready