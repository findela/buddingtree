$(function () {
    
    $('.toast').toast({ delay: 5000 });

    validateRegistration = function () {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        $('small[data-validator=firstName]').removeClass('d-block').addClass("d-none");
        $('small[data-validator=lastName]').removeClass('d-block').addClass("d-none");
        $('small[data-validator=confirm-password]').removeClass('d-block').addClass("d-none");
        $('small[data-validator=password]').removeClass('d-block').addClass("d-none");
        $('small[data-validator=email]').removeClass('d-block').addClass("d-none");
        $('.toast').toast('show');
        if ($("input[name=firstName]").val() === "") {
            $('small[data-validator=firstName]').addClass("d-block");
        }
        if ($("input[name=lastName]").val() === "") {
            $('small[data-validator=lastName]').addClass("d-block");
        }
        if ($("input[name=confirm-password]").val() === "") {
            $('small[data-validator=confirm-password]').addClass("d-block");
        }
        if ($("input[name=password]").val() === "") {
            $('small[data-validator=password]').addClass("d-block");
        }
        if ($("input[name=email]").val() === "" || ($("input[name=email]").val().length && !regex.test($("input[name=email]").val()))) {
            $('small[data-validator=email]').addClass("d-block");
        }
     }


    // visibilityToggle = function (elm) {
    //     let toggleStatus = $(elm).siblings('input').attr("type");
    //     if (toggleStatus === 'password') {
    //         $(elm).removeClass("fa-eye");
    //         $(elm).addClass("fa-eye-slash");
    //     }
    //     else {
    //         $(elm).removeClass("fa-eye-slash");
    //         $(elm).addClass("fa-eye");
    //     }
    //     $(elm).siblings('input').attr("type", toggleStatus === 'password'  ? 'text' : 'password');
    // };

    $("#toggle-visibility").click(function(){
        let toggleStatus = $(this).siblings('input').attr("type");
        if (toggleStatus === 'password') {
            $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        }
        else {
            $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        }
        $(this).siblings('input').attr("type", toggleStatus === 'password'  ? 'text' : 'password');
    });
});