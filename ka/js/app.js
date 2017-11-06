(function ($) {
    $(function () {
        $('.plan_block_link a').mouseover(function () {
            $(this).parent().parent().find('.plan_img').addClass('active');
        });
        $('.plan_block_link a').mouseleave(function () {
            $(this).parent().parent().find('.plan_img').removeClass('active');
        });
        $('.plan_img').mouseover(function () {
            $(this).next('.plan_block_link').children('a').addClass('active');
        });
        $('.plan_img').mouseleave(function () {
            $(this).next('.plan_block_link').children('a').removeClass('active');
        });
        $('.popup_form_check_link').click(function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).find('input[type="checkbox"]').attr('checked', true);
            }
            else {
                $(this).find('input[type="checkbox"]').attr('checked', false);
            }
        });

        $('.client_table_th_option').click(function () {
            $(this).next('.client_table_th_option_block').toggleClass('active');
        });
        $('.client_table_td_cv').click(function () {
            $(this).next('.client_table_th_option_block').toggleClass('active');
        });
        $('.option_block_link').click(function () {
            $(this).parent().toggleClass('active');
        });

        $('.client_table_th_option_block').mouseleave(function () {
            $(this).removeClass('active');
        });
        $('.client_table_th_option_block_checkbox a').click(function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).find('input[type="checkbox"]').prop('checked', true);
            }
            else {
                $(this).find('input[type="checkbox"]').prop('checked', false);
            }
        });
        $('.form_avatar').click(function () {
            $(this).toggleClass('active');
            $(this).parent().find('.header_block_login').slideToggle();
        });
        $('.edit_data').click(function () {
            $('.editable').addClass('active');
            $('.editable_hide').addClass('active');
            $('.agency_txt_block .select2-container').addClass('active');
            $('.edit_data_save').show();
        });
        $('.edit_data_save.hide').click(function () {
            $('.editable').removeClass('active');
            $('.editable_hide').removeClass('active');
            $('.agency_txt_block .select2-container').removeClass('active');
            $('.edit_data_save').hide();
        });
        $(window).on("load", function () {
            $(".scrollbar").mCustomScrollbar({
                theme: "minimal-dark",
                scrollInertia: 150,
                callbacks: {
                    onTotalScroll: function () {
                        totalScroll();
                    }
                }
            });
            $(".tooltip.absolute").each(function () {
                $(this).css('height', $(this).parent().css('height'));
            });

            init_plugins();
        });


    });

})(jQuery);


/**init plugins***/
function init_plugins() {

    $('.popup_select').select2({
        placeholder: 'Выберите из предлагаемого списка',
        minimumResultsForSearch: Infinity,
        allowClear: true
    });
    $('.client_table_td_select').select2({
        placeholder: 'Выбрать',
        minimumResultsForSearch: Infinity,
        allowClear: true
    });

    $('.table_datatimepicker').datetimepicker({
        controlType: 'select',
        timeFormat: 'HH:mm',
        beforeShow: function () {
            $(this).data("old", $(this).val());
        },
        onClose: function () {
            function isDonePressed() {
                return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
            }

            if (isDonePressed()) {
                setMeetingdate($(this).val(), $(this).data("id"));
            } else {
                $(this).val($(this).data("old"));
            }
        }
    });

    $('#user-companyfoundationdate').datepicker({
        controlType: 'select',
    });
    $.datepicker.regional['ru'] = {
        prevText: '<Пред',
        nextText: 'След>',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('.table_datatimepicker').timepicker({
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Минуты',
        secondText: 'Секунды',
        currentText: 'Сейчас',
        closeText: 'Установить'
    });

}
/***modal***/
function set_popup_text(name_popup, related_field, text) {

    if (related_field == "") {
        jQuery("#" + name_popup).find("textarea").text(text).val(text);
        jQuery("#" + name_popup).find("textarea").attr("disabled", true);
        jQuery("#" + name_popup).find("input[type=submit]").hide();
        jQuery("#" + name_popup).find("p.standart_txt.center").hide();
    } else {
        var val = $("#" + related_field).val();
        jQuery("#" + name_popup).find("textarea").attr("disabled", false);
        jQuery("#" + name_popup).find("textarea").data("related", related_field);
        jQuery("#" + name_popup).find("textarea").text(val).val(val);
        jQuery("#" + name_popup).find("input[type=submit]").show();
        jQuery("#" + name_popup).find("p.standart_txt.center").show();
    }

    popup_open(name_popup);

    return false;
}

function set_alert_text(text) {
    $('#alert_popup').children('p').text(text);
    popup_open('alert_popup');

    return false;
}

function set_rating_popup(type, rating, offer_id) {
    var rating_popup = $("#popup_client_rating"),
        rating_input = rating_popup.find("#rating_input"),
        type_input = rating_popup.find("#type_input"),
        offer_input = rating_popup.find("#offer_input"),
        ag_type_span = rating_popup.find(".agency_type"),
        rating_text_span = rating_popup.find(".rating_text"),
        rating_text = "";

    rating_input.val(rating);
    type_input.val(type);
    offer_input.val(offer_id);
    ag_type_span.text(type == "ka" ? "агентства" : "сотруднику агентства");

    switch (rating) {
        case 1:
            rating_text = "Плохо!";
            break;
        case 2:
            rating_text = "Неудовлетворительно!";
            break;
        case 3:
            rating_text = "Удовлетворительно!";
            break;
        case 4:
            rating_text = "Хорошо!";
            break;
        case 5:
            rating_text = "Отлично!";
            break;
    }

    rating_text_span.text(rating_text);
    popup_open("popup_client_rating");

    return false;

}

function set_blacklist_popup(ka_id, ka_name) {
    var blacklist_popup = $("#black_list_popup"),
        ka_id_input = blacklist_popup.find("#blacklist-ka"),
        ka_input = blacklist_popup.find("span.ka_name");

    ka_id_input.val(ka_id);
    ka_input.text('"' + ka_name + '"');

    popup_open('black_list_popup');

    return false;
}

function popup_open(name_popup) {
    jQuery("#wrapper_popup").fadeIn(0);
    jQuery("#background_popup").fadeIn(0);
    jQuery("#background_popup").css({"height": "auto"});
    jQuery("#" + name_popup).css({"display": "block", "top": "0px"});
    jQuery('body').addClass('modal-open');

    return false;
}

function popup_close() {
    if (jQuery(".popup:visible").attr("id") == "black_list_popup") {
        $(".popup_form_check_link.active").removeClass("active").find('input[type="checkbox"]').attr('checked', true);
    }
    if (jQuery(".popup:visible").attr("id") == "reject_reason_popup") {
        $("#reject_reason_text").val("");
        if (window.dataid !== "") {
            $(".client_table_td_select[data-id=" + window.dataid + "]").val(window.previous).change();
            window.dataid = "";
        }
    }


    jQuery("#wrapper_popup").fadeOut(0);
    jQuery("#background_popup").fadeOut(0);
    jQuery(".popup").fadeOut(0);
    jQuery('body').removeClass('modal-open');

    return false;
}
/***modal***/