var credential;
var cred_counter = 0;
var cred_timeout;

function get_credential() {
	if(Comagic === undefined || Comagic === null) {
		return;
	}
	credential = Comagic.getCredentials();
	if( isNaN(credential.hit_id) && cred_counter++ < 15 ) {
setTimeout(get_credential, 300);
	}
	else {
		clearTimeout(cred_timeout);
		set_credential();
	}
}

function set_credential() {
	
	var $input_comagic = $("input[data-field='comagic']");
	$input_comagic.val(JSON.stringify(credential));
}



/*
BX.addCustomEvent('onAjaxSuccess', function(){
	set_credential();
});*/
