$(document).ready(function () {
    $('#contactForm').validate({ 
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            surname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 14,
                digits : true
            },
            country: {
                required: true
            },
            message: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            name: {
                required: "Lütfen isminizi girin",
                minlength: "İsminiz en az 2 karakter olmalıdır"
            },
            surname: {
                required: "Lütfen soyadınızı girin",
                minlength: "Soyadanız en az 2 karakter olmalıdır"
            },
            email: {
                required: "Lütfen email adresinizi girin",
                email: "Lütfen geçerli bir email adresi girin"
            },
            phone: {
                required: "Lütfen telefon numaranızı girin",
                minlength: "Telefon numaranız en az 10 haneli olmalıdır",
                maxlength: "Telefon numaranız en fazla 14 haneli olabilir"
            },
            country: {
                required: "Lütfen ülkenizi seçiniz"
            },
            message: {
                required: "Lütfen bir mesaj girin",
                minlength: "Mesajınız en az 5 karakter olmalıdır"
            },
        },
        submitHandler: function(form) {
            // form başarılı bir şekilde doğrulandığında yapılacak işlemler
           alert('Form başarıyla gönderildi!');
            // form başarılı bir şekilde doğrulandığında yapılacak işlemler
           // $("#dialog-message").dialog("open"); // Dialog Widgetini aç
            //$("#messageBox").html("Form başarıyla gönderildi!").fadeIn();
            // Formu temizle
            $('#name').val('');
            $('#email').val('');
            $('#surname').val('');
            $('#phone').val('');
            $('#message').val('');
            $('#country').val('');

        }
    });
});
