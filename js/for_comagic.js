// comagic form start

//for form http://kvartir-remonty.ru/remont-kvartir-tseny/ .b-project__form

$('#zakazat_remont_button').click(function(e){
    e.preventDefault();
    var _this_ = $(this);
    var $input = $('.b-project__form form .b-project_input_tel input'), phone = $input.val();
    if (phone) {
        $("#loader-wrapper").css("display", "block");
        if (comagicYesOrNo == "yes") {
            //Comagic.push(['addOfflineRequest', {phone: phone, message: 'dizain_proekt_besplatno'}]);
        }
        setTimeout(function () {
            $(_this_).closest('form').submit();
        }, 2000);
    }else{
        $input.focus();
    }
});

//for form http://kvartir-remonty.ru/remont-kvartir/

$('.b_contact_zhdu_bg form input[type=submit]').click(function(e){
    e.preventDefault();
    var $input = $('.b_contact_zhdu_bg .b_contact_input_zhdu input'), phone = $input.val();
    if (phone) {
        $("#loader-wrapper").css("display", "block");
        if (comagicYesOrNo == "yes") {
            //Comagic.push(['addOfflineRequest', {phone: phone, message: 'vyzov_zamershika'}]);
        }
        setTimeout(function () {
            jQuery('.b_contact_zhdu_bg form').submit();
        }, 2000);
    }else{
        $input.focus();
    }
});

$( ".comagic_phone" ).on( "click", function() {
	var newComagicPhone = $('.comagic_phone').html();		  
	$( ".comagic_phone" ).parent("a").attr( "href", "tel:"+newComagicPhone+"" );
});

/*
// add new tel in href after replace
function comagicPhoneReplaceInHref() {
  var newComagicPhone = $('.comagic_phone').html();		  
  $( ".comagic_phone" ).parent("a").attr( "href", "tel:"+newComagicPhone+"" );
}
setTimeout(comagicPhoneReplaceInHref, 2000);
*/



//template_ceo
$('#b_contact_ceo_but260').click(function()
{	
	var template_name=$('#form_text_12').val();
	var template_tel=$('#form_text_13').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pismo_directoru'}]);
		}					
		setTimeout(function () {
			jQuery('.b_contact_ceo_form form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_13').focus();
	}
});	

$('#b_contact_ceo_but').click(function()
{	
	var template_name=$('#form_text_12').val();
	var template_tel=$('#form_text_13').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pismo_directoru'}]);
		}			
		setTimeout(function () {
			jQuery('.b_contact_ceo_form form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_13').focus();
	}
});
$('#pismo_directoru_but').click(function()
{	
	var form = $(this).closest('form');
	var template_name=$(form).find('[name="form_textarea_61"]').val();
	var template_tel=$(form).find('[name="form_text_60"]').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pismo_directoru'}]);
		}			
		setTimeout(function () {
			$(form).submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$(form).find('[name="form_text_60"]').focus();
	}
	return false;
});


//template_kupitdeshevle	
$('#modal_hochu_but').click(function()
{	
	var template_name=$('#form_text_1').val();
	var template_tel=$('#form_text_2').val();
	var _this_ = $(this);
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'kupit_deshevle'}]);
		}			
		setTimeout(function () {
			$(_this_).closest('form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_2').focus();
	}
	return false;
});	


//template_otdelka
$('#template_otdelka_but').click(function()
{	
	var template_tel=$('#form_text_20').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'otdelka'}]);
		}			
		setTimeout(function () {
			jQuery('.calc_otdelka__right_2 form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_20').focus();
	}
});

$('#form_text_20').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_20').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'otdelka'}]);
			}			
			setTimeout(function () {
				jQuery('.calc_otdelka__right_2 form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_20').focus();
		}
		return false;
	}
});

$('#template_otdelka_but260').click(function()
{	
	var template_tel=$('#form_text_20').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'otdelka'}]);
		}			
		setTimeout(function () {
			jQuery('.calc_otdelka__right_2 form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_20').focus();
	}
});	


//template_perezv5min	
$('#template_perezv5min').click(function()
{	
	var template_tel=$('#form_text_10').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'perezvonim_za_5min'}]);
		}			
		setTimeout(function () {
			jQuery('.es17_blockbg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_10').focus();
	}
});

$('#form_text_10').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_10').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'perezvonim_za_5min'}]);
			}			
			setTimeout(function () {
				jQuery('.es17_blockbg form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_10').focus();
		}
		return false;
	}
});

$('#template_perezv5min260').click(function()
{	
	var template_tel=$('#form_text_10').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'perezvonim_za_5min'}]);
		}			
		setTimeout(function () {
			jQuery('.es17_blockbg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_10').focus();
	}
});


//template_poeskizu	
$('#template_poeskizu_but').click(function()
{	
	var template_name=$('#form_text_4').val();
	var template_tel=$('#form_text_3').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'rasschitaem_po_eskizu'}]);
		}			
		setTimeout(function () {
			jQuery('.es4_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_3').focus();
	}
});	


//template_smsskidka	
$('#template_smsskidka_but').click(function()
{	
	var template_tel=$('#form_text_11').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'sms_skidka'}]);
		}		
		setTimeout(function () {
			jQuery('.b-sms_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_11').focus();
	}
});	

$('#form_text_11').keypress(function(e){
    if(e.which == 13){  //Enter is key 13
        var template_tel=$('#form_text_11').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'sms_skidka'}]);
			}		
			setTimeout(function () {
				jQuery('.b-sms_bg form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_11').focus();
		}
		
		return false;
    }
});




//template_za5min	
$('#template_za5min_but').click(function()
{	
	var template_name=$('#form_text_6').val();
	var template_tel=$('#form_text_7').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'raschet_za_5_min'}]);
		}			
		setTimeout(function () {
			jQuery('.es8_form form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_7').focus();
	}
});	

$('#template_za5min_but260').click(function()
{	
	var template_name=$('#form_text_6').val();
	var template_tel=$('#form_text_7').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'raschet_za_5_min'}]);
		}			
		setTimeout(function () {
			jQuery('.es8_form form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_7').focus();
	}
});	


//template_zafixtsenu	
$('#template_zafixtsenu_but').click(function()
{	
	var template_tel=$('#form_text_9').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zafiksirovat_tsenu'}]);
		}			
		setTimeout(function () {
			jQuery('.es13_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_9').focus();
	}
});

$('#form_text_9').keypress(function(e){
    if(e.which == 13){  //Enter is key 13	
		var template_tel=$('#form_text_9').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zafiksirovat_tsenu'}]);
			}			
			setTimeout(function () {
				jQuery('.es13_bg form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_9').focus();
		}
		return false;
	}
});

$('#template_zafixtsenu_but260').click(function()
{	
	var template_tel=$('#form_text_9').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zafiksirovat_tsenu'}]);
		}			
		setTimeout(function () {
			jQuery('.es13_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_9').focus();
	}
});	


//template_zakaz	
$('#template_zakaz_but').click(function()
{	
	var template_name=$('#form_text_16').val();
	var template_tel=$('#form_text_17').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zakaz_shop'}]);
		}			
		setTimeout(function () {
			jQuery('.b_market_item_form_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_17').focus();
	}
});

$('#template_zakaz_but260').click(function()
{	
	var template_name=$('#form_text_16').val();
	var template_tel=$('#form_text_17').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zakaz_shop'}]);
		}			
		setTimeout(function () {
			jQuery('.b_market_item_form_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_17').focus();
	}
});


//template_zhdu	
$('#template_zhdu_but').click(function()
{	
	var template_tel=$('#form_text_15').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zhdu_zvonok'}]);
		}			
		setTimeout(function () {
			jQuery('.b_contact_zhdu_bg form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_15').focus();
	}
});

$('#form_text_15').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_15').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zhdu_zvonok'}]);
			}			
			setTimeout(function () {
				jQuery('.b_contact_zhdu_bg form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_15').focus();
		}
		return false;
	}
});


//template_happy
$('#happy_but').click(function()
{	
	var template_name=$('#form_text_21').val();
	var template_tel=$('#form_text_22').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pozdravlyaem'}]);
		}			
		setTimeout(function () {
			jQuery('.modal_form_happy form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_22').focus();
	}
});

$('#call_zamershikk').click(function()
{	
	var template_tel=$('[name="form_text_53"]').val();
	var template_name=$('#call_zamershik_name_city').val();
	var _this_ = $(this);
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name, phone: template_tel, message: 'call_zamershik'}]);
		}			
		setTimeout(function () {
			$(_this_).closest('form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('[name="form_text_53"]').focus();
	}
});	

$('[name="form_text_53"]').keypress(function(e){
    if(e.which == 13) {  //Enter is key 13
		var template_tel=$('[name="form_text_53"]').val();
	var template_name=$('#call_zamershik_name_city').val();
		var _this_ = $(this);
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {name: template_name, phone: template_tel, message: 'call_zamershik'}]);
			}			
			setTimeout(function () {
				$(_this_).closest('form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('[name="form_text_53"]').focus();
		}
		return false;
	}
});


//template_zamer	
$('#template_zamer_but').click(function()
{	
	var template_tel=$('#form_text_25').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zapis_na_zamer'}]);
		}			
		setTimeout(function () {
			jQuery('.butzamer form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_25').focus();
	}
});	

$('#form_text_25').keypress(function(e){
    if(e.which == 13) {  //Enter is key 13
		var template_tel=$('#form_text_25').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zapis_na_zamer'}]);
			}			
			setTimeout(function () {
				jQuery('.butzamer form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_25').focus();
		}
		return false;
	}
});


$('#template_zamer_but_260').click(function()
{	
	var template_tel=$('#form_text_25').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zapis_na_zamer'}]);
		}		
		setTimeout(function () {
			jQuery('.butzamer form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_25').focus();
	}
});	
	


//template_ceo df
/*
$('#template_otzivy_but_260').click(function()
{	
	var template_name=$('#form_text_27').val();
	
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name, message: 'new_otzyv'}]);
		}			
		setTimeout(function () {
			jQuery('.es1_otzivy__form_bg form').submit();
		}, 1000); // ??????????????? ??? ??????
});	

$('#template_otzivy_but').click(function() s
{	
	var template_name=$('#form_text_27').val();
	
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {name: template_name, message: 'new_otzyv'}]);
		}			
		setTimeout(function () {
			jQuery('.es1_otzivy__form_bg form').submit();
		}, 1000); // ??????????????? ??? ??????
	
});
*/



//template_gift	
$('#gift_but').click(function()
{	
	var template_tel=$('#form_text_23').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'ne_uhodite_bez_podarka'}]);
		}			
		setTimeout(function () {
			jQuery('.modal_form_gift form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_23').focus();
	}
});	

$('#form_text_23').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_23').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'ne_uhodite_bez_podarka'}]);
			}			
			setTimeout(function () {
				jQuery('.modal_form_gift form').submit();
			}, 2000); // ??????????????? ??? ??????
		}
		else {
			$('#form_text_23').focus();
		}
		return false;
	}
});

$('#gift_but260').click(function()
{	
	var template_tel=$('#form_text_23').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			//Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'ne_uhodite_bez_podarka'}]);
		}
		setTimeout(function () {
			jQuery('.modal_form_gift form').submit();
		}, 2000); // ??????????????? ??? ??????
	}
	else {
		$('#form_text_23').focus();
	}
});	
	



// comagic form end	