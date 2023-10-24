$("#form").validate({
		rules: {
			name:{
				required: true,
				minlength: 8
			},
			address:{
				required: true,
				minlength: 8
			},
			city:{
				required: true,
				minlength: 8
			},
			nameOnCard:{
				required: true,
				minlength: 8
			},
			creditCard:{
				required: true,
				minlength: 8
			},
			Day:{
				required: true,
			},
			Year:{
				required: true,
			},
			CVV:{
				required: true,
				minlength: 3
			}
		},
		messages: {
			name:{
				required: "Full name not null!",
				minlength: "Name more than 8 character!"
			},
			address:{
				required: "Address not null!",
				minlength: "Address more than 8 character!"
			},
			city:{
				required: "City not null!",
				minlength: "City more than 8 character!"
			},
			nameOnCard:{
				required: "Name not null!",
				minlength: "Name more than 8 character!"
			},
			creditCard:{
				required: "Credit Card not null!",
				minlength: "Credit Card more than 12 character!"
			},
			Day:{
				required: "Day not null!"
			},
			Year:{
				required: "Year not null!"
			},
			CVV:{
				required: "CVV not null!",
				minlength: "Credit Card more than 3 character!"
			},
		}
	})

function validateEmail(email)
 {
	    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	$("#button-sub").click(function(){
		var inputEmail = $("#email-form");
		if(inputEmail.val() === ""){
			$(".emails").text("Email not null!");
			$(".emails").show();
		}
		else if(!validateEmail(inputEmail.val())){
			$(".emails").text("Email invalidate!");
			$(".emails").show();
		}else{
			$(".emails").text("");
			$(".emails").hide();
		}
	})