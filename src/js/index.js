const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//forms

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            text: "required",
            email: {
                required: true,
                email: true
            },
            checkbox: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа")
            },
            text: "Пожалуйста, введите ваше сообщение",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            checkbox: "Чтобы продолжить, установите этот флажок"
          }
    });
};

validateForms('.contacts__form');

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});