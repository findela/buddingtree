$(function() {
    fetchData = function() {
        $.ajax({
            url : "https://demo7389246.mockable.io/api/v1/imeritone"+"/partner/list",
            type: "GET",
            dataType: "json",
            success: function(data)
            {
                data.result.forEach(function(key, index){
                    $(".table tbody").append(
                        "<tr>"+
                        "<th scope='row'>"+(index+1)+"</th>"+
                        "<td>"+key.partner_name+"</td>"+
                        "<th scope='row'>"+key.partner_code+"</th>"+
                        "<th scope='row'><img src="+key.partner_image+" width='48'/></th>"+
                        "<th scope='row'>"+key.activity_count+"</th>"+
                        "<th scope='row'>"+key.enroll_limit+"</th>"+
                        "<th scope='row'>"+key.enroll_count+"</th>"+
                        "<th scope='row'>"+key.partner_email+"</th>"+
                        "<th scope='row'>"+key.status+"</th>"+
                        "<th scope='row'>"+key.last_changed_on+"</th>"+
                        "</tr>"
                    )
                });
            }
        });
    }
});