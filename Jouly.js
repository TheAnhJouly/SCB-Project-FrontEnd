$('.main-last-cont').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$("#form-footer").validate({
    rules: { 
        email: {
            required: true,
            email: true,
        },
    },  
    messages: {
        email: "Please enter a valid email address",
    }
});

