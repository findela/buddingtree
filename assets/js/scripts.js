$(function() {
    validateRegistration = function () {
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let VALIDATE = false;
        $("input").each(function() {
            $(this).siblings().addClass('d-none').removeClass("d-block");
            if(!this.value.length) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
                VALIDATE = true;
            }
            else if(this.type === 'email' && !emailRegex.test(this.value)) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
                VALIDATE = true;
            }
            else if(this.name === 'confirm-password' && this.value !== $("#password").val()) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
                VALIDATE = true;
            }
        });

        if(!VALIDATE) {
            alert('form submitted successfully');
        }
    }







     // visible toggle function
     $("#toggle-visibility").click(function(){
        let toggleStatus = $(this).siblings('input').attr("type");
        console.info(toggleStatus);
        if (toggleStatus === 'password') {
            $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        }
        else {
            $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        }
        $(this).siblings('input').attr("type", toggleStatus === 'password'  ? 'text' : 'password');
    });
});