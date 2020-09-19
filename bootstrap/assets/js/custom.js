function generatePassword() {
    len = 21;
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
       entity1 = Math.ceil(string.length * Math.random()*Math.random());
       entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
       hold = string.charAt( entity1 );
       hold = (entity1%2==0)?(hold.toUpperCase()):(hold);
       character += hold;
       character += numeric.charAt( entity2 );
       password = character;
    }
    return password;

}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
}

jQuery(document).ready(function($) {
    
    $('#tiny').after(`<p style="margin-top:10px;margin-left:10px;font-size: 12px;"><a href="https://uploadfiles.io" target="uploadfiles.io"><i class='fa fa-upload'> </i> Upload Files</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://dropbox.com" target="uploadfiles.io"><i class='fa fa-dropbox'> </i> Dropbox</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com" target="uploadfiles.io"><i class='fa fa-cloud-upload'> </i> Google Drive</a></p>`);


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



