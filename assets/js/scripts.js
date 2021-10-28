$(function() {

    //fetch data from mock API
    fetchData = function() {
        $(".table tbody").append(
            "<tr>"+
            "<th colspan='6'>Loading...</th>"+
            "</tr>"
        )
        $.ajax({
            url : "https://demo7389246.mockable.io/api/v1/imeritone"+"/partner/list",
            type: "GET", // GET,POST,PATCH,PUT,DELETE
            dataType: "json",
            success: function(data)
            {
                $(".table tbody tr:first").remove();
                data.result.forEach(function(key, index){
                    $(".table tbody").append(
                        "<tr>"+
                        "<th scope='row'>"+(index+1)+"</th>"+
                        "<td>"+key.partner_name+"</td>"+
                        "<td>"+key.partner_code+"</td>"+
                        "<td><img src="+key.partner_image+" width='48'/></td>"+
                        "<td>"+key.activity_count+"</td>"+
                        "<td>"+key.enroll_limit+"</td>"+
                        "<td>"+key.enroll_count+"</td>"+
                        "<td>"+key.partner_email+"</td>"+
                        "<td>"+key.status+"</td>"+
                        "<td>"+key.last_changed_on+"</td>"+
                        "</tr>"
                    )
                });
            }
        });
    }

    // for registering an user
    validateRegistration = function () {
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let VALIDATED = false;
        let requestObject = {};
        $("input").each(function() {
            $(this).siblings().addClass('d-none').removeClass("d-block");
            if(!this.value.length) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
            }
            else if(this.type === 'email' && !emailRegex.test(this.value)) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
            }
            else if(this.name === 'confirm-password' && this.value !== $("#password").val()) {
                $('small[data-validator='+this.name+']').addClass("d-block").removeClass('d-none');
            }
            else{
                if(this.name !== 'confirm-password') {
                    requestObject[this.name] = this.value;
                }
                VALIDATED = true;
            }
        });

        if(VALIDATED) {
            requestObject.status = 1;
            requestRegistration(requestObject);
        }
    }

    //request data to server
    requestRegistration = function(requestJSON) {
        toastr.options = {"positionClass": "toast-bottom-center"};
        $.ajax({
            url : "http://localhost:5001/api/v1"+"/user/register",
            type: "POST",
            dataType: "json",
            data: requestJSON,
            success: function(response) {
                toastr.success(response.message);
                $("input").each(function() {
                    this.value = '';
                });
            },
            error: function (error) {
                toastr.error(
                    error.responseJSON.status === 500 ? 
                    error.responseJSON.data.sqlMessage : error.responseJSON.message
                );
            }
        });
    }
});