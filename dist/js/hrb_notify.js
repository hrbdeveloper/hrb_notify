// HRB_NOTIFY Powered By Hamidreza Biglari WWW.HRBCMS.IR
var count_hrb_notify = 0;
function hrb_notify([Type, Text, Position, easeIn, easeOut, timeout]) {
    var $Text = '', $Position = '', $Type = '', $timeout = '', objectTimeout;
    if (Text != null) {
        $Text = Text;
    } else {
        $Text = 'پیغامی وارد نشده';
    }
    if (easeOut != null) {
        $easeOut = easeOut;
    } else {
        $easeOut = 'bounceOut';
    }
    if (easeIn != null) {
        $easeIn = easeIn;
    } else {
        $easeIn = 'bounceIn';
    }
    if (timeout != null) {
        $timeout = timeout;
    } else {
        $timeout = '10';
    }
    switch (Type) {
        case 'success' :
            $Type = '<div class="box_hrb_notify hrb_notify_success" ease-in="'+$easeIn+'" ease-out="'+$easeOut+'" data-count="' + count_hrb_notify + '"><i class="close fa fa-times" data-count="' + count_hrb_notify + '"></i><i class="progress_hrb_notify" style="transition: all ' + $timeout + 's"></i>' + $Text + '</div>';
            break;
        case 'danger' :
            $Type = '<div class="box_hrb_notify hrb_notify_danger" ease-in="'+$easeIn+'" ease-out="'+$easeOut+'"  data-count="' + count_hrb_notify + '"><i class="close fa fa-times" data-count="' + count_hrb_notify + '"></i><i class="progress_hrb_notify" style="transition: all ' + $timeout + 's""></i>' + $Text + '</div>';
            break;
        case 'warning' :
            $Type = '<div class="box_hrb_notify hrb_notify_warning" ease-in="'+$easeIn+'" ease-out="'+$easeOut+'"  data-count="' + count_hrb_notify + '"><i class="close fa fa-times" data-count="' + count_hrb_notify + '"></i><i class="progress_hrb_notify" style="transition: all ' + $timeout + 's""></i>' + $Text + '</div>';
            break;
        case 'info' :
            $Type = '<div class="box_hrb_notify hrb_notify_info" ease-in="'+$easeIn+'" ease-out="'+$easeOut+'"  data-count="' + count_hrb_notify + '"><i class="close fa fa-times" data-count="' + count_hrb_notify + '"></i><i class="progress_hrb_notify" style="transition: all ' + $timeout + 's""></i>' + $Text + '</div>';
            break;
        default :
            break;
    }
    switch (Position) {
        case 'topLeft' :
            $Position = 'hrb_notify_topLeft';
            if ($(".content_hrb_notify.hrb_notify_topLeft").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_topLeft "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_topLeft").length == 1) {
                $(".content_hrb_notify.hrb_notify_topLeft").append($Type);
            }

            break;
        case 'topCenter' :
            $Position = 'hrb_notify_topCenter';
            if ($(".content_hrb_notify.hrb_notify_topCenter").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_topCenter "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_topCenter").length == 1) {
                $(".content_hrb_notify.hrb_notify_topCenter").append($Type);
            }
            break;
        case 'topRight' :
            $Position = 'hrb_notify_topRight';
            if ($(".content_hrb_notify.hrb_notify_topRight").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_topRight "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_topRight").length == 1) {
                $(".content_hrb_notify.hrb_notify_topRight").append($Type);
            }
            break;
        case 'middleLeft' :
            $Position = 'hrb_notify_middleLeft';
            if ($(".content_hrb_notify.hrb_notify_middleLeft").length < 1) {

                $("body").append('<div class="content_hrb_notify hrb_notify_middleLeft "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_middleLeft").length == 1) {
                $(".content_hrb_notify.hrb_notify_middleLeft").append($Type);
            }
            break;
        case 'middleCenter' :
            $Position = 'hrb_notify_middleCenter';
            if ($(".content_hrb_notify.hrb_notify_middleCenter").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_middleCenter "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_middleCenter").length == 1) {
                $(".content_hrb_notify.hrb_notify_middleCenter").append($Type);
            }
            break;
        case 'middleRight' :
            $Position = 'hrb_notify_middleRight';
            if ($(".content_hrb_notify.hrb_notify_middleRight").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_middleRight "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_middleRight").length == 1) {
                $(".content_hrb_notify.hrb_notify_middleRight").append($Type);
            }
            break;
        case 'bottomLeft' :
            $Position = 'hrb_notify_bottomLeft';
            if ($(".content_hrb_notify.hrb_notify_bottomLeft").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_bottomLeft "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_bottomLeft").length == 1) {
                $(".content_hrb_notify.hrb_notify_bottomLeft").append($Type);
            }
            break;
        case 'bottomCenter' :
            $Position = 'hrb_notify_bottomCenter';
            if ($(".content_hrb_notify.hrb_notify_bottomCenter").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_bottomCenter "></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_bottomCenter").length == 1) {
                $(".content_hrb_notify.hrb_notify_bottomCenter").append($Type);
            }
            break;
        case 'bottomRight' :
            $Position = 'hrb_notify_bottomRight';
            if ($(".content_hrb_notify.hrb_notify_bottomRight").length < 1) {
                $("body").append('<div class="content_hrb_notify hrb_notify_bottomRight"></div>');
            }
            if ($(".content_hrb_notify.hrb_notify_bottomRight").length == 1) {
                $(".content_hrb_notify.hrb_notify_bottomRight").append($Type);
            }
            break;
        default :
            break;
    }
    $('.box_hrb_notify').each(function (i) {
        if (!$(this).hasClass('stop')) {
            objectTimeout = $(this);
            $(this).addClass('stop')
            setTimeout(function () {
                objectTimeout.addClass(objectTimeout.attr('ease-in')).addClass('animated');
            }, 100)

        }
    });
    setTimeout(function () {
        objectTimeout.children('.close').click();
    }, parseInt($timeout) * 1000);
    $(".box_hrb_notify i.close").click(function () {
        var $tClose = $(this).parent();
        $tClose.removeClass($tClose.attr('ease-in')).addClass('stop').addClass('animated').addClass($tClose.attr('ease-out'));
        setTimeout(function () {
            $tClose.remove();
        }, 500);
    });
    count_hrb_notify++;
}
// HRB_NOTIFY Powered By Hamidreza Biglari WWW.HRBCMS.IR
