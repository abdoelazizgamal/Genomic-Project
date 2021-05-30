/*
$(document).ready(function (e) {

    let formSubmitBtn   = $("#submitBtn"),
        formBlock       = $(".form-info-change"),
        formFileInput   = $(".form-info-change input"),
        userInfoArea    = $("#infoFromForm"),
        userImage       = $("#infoFromForm .img img"),
        userName        = $("#infoFromForm .name p"),
        editBtn         = $("#infoFromForm button"),
        errorMsg        = $(".err");

    formSubmitBtn.on('click', function () {

        console.log( formFileInput );

        var form_data = new FormData();
        var ins = document.getElementById('multiFiles').files.length;

        if( ins == 0 ) {
            $('#msg').html('<span style="color:red">Select at least one file</span>');
            return;
        }

        if ( $('#name').val() == '' ) {

            $('#msg').html('<span style="color:red">Please Insert Your Name</span>');
            return;

        }

        for (var x = 0; x < ins; x++) {
            form_data.append("files[]", document.getElementById('multiFiles').files[x]);
        }

        $.ajax({
            url: 'process', // point to server-side URL
            dataType: 'json', // what to expect back from server
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (response) { // display success response

                formBlock.css('display','none');
                userInfoArea.css('display','block');

                console.log( response );

                $('#msg').html('');
                $('#user-name').text('Welcome ' + $('#name').val() );
                $('#your-result').text('Result ' + response.result );

                $.each(response, function (key, data) {
                    if(key !== 'message') {
                        $('#msg').append(key + ' -> ' + data + '<br/>');
                    } else {
                        $('#msg').append(data + '<br/>');
                    }
                });

            },
            error: function (response) {
                $('#msg').html(response.message); // display error response
            }
        });
    });

    $("#infoFromForm button").on('click', function () {
        formBlock.css('display','none');
        userInfoArea.css('display','block');
        // formFileInput[0].value = "";
        // formFileInput[1].value = "";
    });

    // formFileInput[0].addEventListener("change",function(event) {
    //     var reader = new FileReader();
    //     reader.onload = function(){
    //       userImage.src = reader.result;
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    // });

    // console.log('Working');
    //
    // $('#mutationFormSubmit').on('click', function (event) {
    //
    //
    //
    // });
*/
$(document).ready(function (e) {
    $("#disease_btn").on('click', function () {


        var form_data = new FormData();
        var ins = document.getElementById('multiFiles').files.length;

        if( ins == 0 ) {
            $('#msg').html('<span style="color:red">Select at least one file</span>');
            return;
        }

        // if ( $('#name').val() == '' ) {
        //
        //     $('#msg').html('<span style="color:red">Please Insert Your Name</span>');
        //     return;
        //
        // }

        for (var x = 0; x < ins; x++) {
            form_data.append("files[]", document.getElementById('multiFiles').files[x]);
        }

        var disease = $('.disease_name').val();

        form_data.append("disease", disease );

        console.log( form_data );
        $('#msg').html('');

        $.ajax({
            url: 'process', // point to server-side URL
            dataType: 'json', // what to expect back from server
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            // data: {
            //     disease: $('.disease_name').val(),
            //     files: form_data
            // },
            type: 'post',
            success: function (response) { // display success response

               /*  alert(response.result); */
                swal("We Are Sorry , Your Result Is Positive");
                // formBlock.css('display','none');
                // userInfoArea.css('display','block');

                // console.log( response );

                // $('#msg').html(response.disease);

                // $('#user-name').text('Welcome ' + $('#name').val() );
                // $('#your-result').text('Result ' + response.result );

                // $.each(response, function (key, data) {
                //     if(key !== 'message') {
                //         $('#msg').append(key + ' -> ' + data + '<br/>');
                //     } else {
                //         $('#msg').append(data + '<br/>');
                //     }
                // });

            },
            error: function (response) {
                /* $('#msg').html(response.message); */ // display error response
                swal("We Are Happy , you Are in Good Health ");
            }
        });

    });

});