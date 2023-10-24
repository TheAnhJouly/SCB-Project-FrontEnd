
$(".form-contact").validate({
    rules: { 
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    }, 
    messages: {
        name: "Please enter your name",
        subject : "Please enter your subject",
        message: "Please enter your message",
        email: "Please enter a valid email address",
    }
});

	