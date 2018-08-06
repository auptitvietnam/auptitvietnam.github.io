

$(document).ready(function () {
    var amountScrolled = 300;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#goToTop').fadeIn('slow');
        } else {
            $('#goToTop').fadeOut('slow');
        }
    });

    var scrollToElement = function (el, ms) {
        var speed = (ms) ? ms : 600;
        $('html,body').animate({
            scrollTop: $(el).offset().top
        }, speed);
    }

    $('.goTo').click(function (e) {
        // prevent default action
        e.preventDefault();

        // get id of target div (placed in href attribute of anchor element)
        // and pass it to the scrollToElement function
        // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)

        scrollToElement($(this).attr('href'), 2000);
    });

    $('.goToTop').click(function (e) {
        // prevent default action
        e.preventDefault();

        // get id of target div (placed in href attribute of anchor element)
        // and pass it to the scrollToElement function
        // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
        scrollToElement($(this).attr('href'), 700);
    });

    $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            contactName: {
                minlength: 2,
                required: true
            },
            contactEmail: {
                required: true,
                email: true
            },
            contactTelephone: {
                minlength: 10,
                required: true,
                number: true
            },
            contactSubject: {
                minlength: 2,
                required: true
            },
            contactMessage: {
                minlength: 10,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    });

    $("#envoyer").click(function () {
        if ($('#contact-form').valid()) {
            postContactToGoogle();
        }
    });

    function postContactToGoogle() {
        var contactName = $('#contactName').val();
        var contactEmail = $('#contactEmail').val();
        var contactTelephone = $('#contactTelephone').val();
        var contactSubject = $('#contactSubject').val();
        var contactMessage = $('#contactMessage').val();

        $('#spinner-1').show();

        var data = {
            "entry.1796670417": contactName,
            "entry.59496202": contactEmail,
            "entry.1379946513": contactTelephone,
            "entry.2012326572": contactSubject,
            "entry.2092208587": contactMessage
        };

        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScvsUU5N2YC99wAb0_5sCR-5pZw3Sxj7CAZECr1ri5XWRnpdA/formResponse",
            data: data,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $('#contactName').val("");
                    $('#contactEmail').val("");
                    $('#contactTelephone').val("");
                    $('#contactSubject').val("");
                    $('#contactMessage').val("");
                    
                    $('#spinner-1').hide();
                    $('.login-success').fadeIn(400).delay(3000).fadeOut(400); //fade out after 3 seconds
                },
                200: function () {
                    $('#contactName').val("");
                    $('#contactEmail').val("");
                    $('#contactTelephone').val("");
                    $('#contactSubject').val("");
                    $('#contactMessage').val("");
                    
                    $('#spinner-1').hide();
                    $('.login-success').fadeIn(400).delay(3000).fadeOut(400); //fade out after 3 seconds
                }
            }
        });
    };
});