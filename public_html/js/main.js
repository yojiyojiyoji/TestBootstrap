function calc_rebate(amt){
    
    var rebate = 0.0;
    
    if(isNaN(amt) || amt <= 0) {
        alert("Please enter a valid number.");
    }
    else if(amt > 750) {
        alert("The amount must be maximum $750.");
    }
    else if(amt <= 25) {
        rebate = 0.0;
    }
    else if(amt <= 100) {
        rebate = amt * 0.5;
    }
    else if(amt <= 240) {
        rebate = 40 + (amt - 100) * 0.25;
    }
    else {
        rebate = 75;
    }
    rebate = Math.round(rebate * 100) / 100;
    return rebate;
};

function display_rebate(){
    $("#amount_rebate").text("");
    var amt = $("#amount_donation").val();
    $("#amount_rebate").text("CAD$" + calc_rebate(amt));
};

function display_amount(){
  $("#amount_rebate").text("");
  var amt = $('input[name="temp_amt"]:checked').val();
  $("#amount_donation").val(amt);
  //$("#amount_rebate").text(calc_rebate(amt));
};

function set_listener_rebate_amount(){
    $("#amount_donation").focus(function() {
        $("#amount_rebate").text("");
        $("#amount_donation").css({'background-color':'#FFFFFF'});
        $(".radio_btn_donation_amount").attr('checked', false);
      });
};

function set_validation_donation() {
    $('form').submit(function () {
        
        var donation_amt = $("#amount_donation").val();

        if(isNaN(donation_amt) || donation_amt <= 0){
            alert("Please enter a valid number for the donation amount.");
            $("#amount_donation").css({'background-color':'#FFAAAA', 'color':'#000000', 'border':'1px solid #FF2222'});
            return false;
        }
        else if(donation_amt > 750 ) {
            alert("The amount must be maximum $750.");
            $("#amount_donation").css({'background-color':'#FFAAAA', 'color':'#000000', 'border':'1px solid #FF2222'});
            return false;
        }
        else {
            return true;
        }
    });
};

function resize_image(){
    //size of the image: 1260 * 621
    var w = $(".front-image").width();
    //var h = $(".front-image").height();
    var h = w / 1260 * 621;
    //alert("W:" + w + " " + "H:" + h);
    
    var h_unit_space = h / 7;
    var h_nbsp1 = Math.round(h_unit_space * 5);
    var h_nbsp2 = Math.round(h_unit_space);
    var h_nbsp3 = Math.round(h_unit_space);
    $(".space-1").css("height", h_nbsp1);
    $(".space-2").css("height", h_nbsp2);
    $(".space-3").css("height", h_nbsp3);
};

$(document).ready(function(){
    resize_image();
    //set_validation_donation();
    //set_listener_rebate_amount();
    
});
$( window ).resize(function() {
    resize_image();
});


	//Check the required fields.
/*	var submit=true;
	$('.required').each(function(){
		if($(this).val()=='')
		{
			var name = $(this).attr("name");
			$(this).css({'background-color':'#FFAAAA', 'color':'#000000', 'border':'5px solid #ed1c24'});
			$('form').append('<div class="red"><span class="glyphicon glyphicon-warning-sign"></span> Please fill up the ' + name + ' field.</div>');
			submit=false;
		}
		else
		{
			$(this).css('background-color','#FFFFFF');
		}
	});
	if(submit==true)
	{
		//Add anything you want to do upon success here, returning true will send the form and end the function.
		return true;
	}
	else
	{
		//Add anything you want to do upon failure here, returning false will stop the form and end the function.
		return false;
	}*/

//$("#amount_donation[type='text']").change(function(){
//    var amt = $("#amount_donation").val();
    //alert(amt);
//    $("#amount_rebate").text(calc_rebate(amt));
//});

//$('input, select').keypress(function() { 
//    return event.keyCode != 13; 
//});


