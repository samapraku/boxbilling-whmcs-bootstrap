jQuery(document).ready(function($) {
    
	$('.dtt').DataTable({
		"initComplete": function(settings, json) {
		    $('.dataTables_filter input[type=search]').prop({
		    	placeholder: 'Enter search term...'
		    });
		  }
	});
   
    $('body').on('click', '.dtt td', function(event) {
        url = $(this).closest('tr').find('td').eq(0).find('a').prop('href');
        window.location = url;
    });

    $('#optional_manage button[value="Change password"]').click(function(event) {
        $('#loaderwrapper').show();
        var myVar = setInterval(function(){
            if (($(".bootbox").data('bs.modal') || {}).isShown) {
                clearInterval(myVar);
                $('#loaderwrapper').hide();         
            }
        }, 300);
    });
});



