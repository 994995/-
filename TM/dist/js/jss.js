"use strict";$(window).scroll(function(){300<=$("html").scrollTop()?($("#mouse").slideDown(300),$("#anchor").show(300)):($("#mouse").slideUp(300),$("#anchor").hide(300)),$("html").scrollTop()>=$(".mart01").offset().top-57?$("#anchor a").eq(1).css("background","red").siblings().css("background",""):$("#anchor a").eq(1).css("background",""),$("html").scrollTop()>=$(".mart02").offset().top-57?$("#anchor a").eq(2).css("background","red").siblings().css("background",""):$("#anchor a").eq(2).css("background",""),$("html").scrollTop()>=$(".mart03").offset().top-57?$("#anchor a").eq(3).css("background","red").siblings().css("background",""):$("#anchor a").eq(3).css("background",""),$("html").scrollTop()>=$(".mart04").offset().top-57?$("#anchor a").eq(4).css("background","red").siblings().css("background",""):$("#anchor a").eq(4).css("background","")}),$("#anchor a").not("#oo").click(function(){$("html").animate({scrollTop:$(".mart0".concat($(this).index())).offset().top-56},150),$(this).css("background","red").siblings().css("background","")}),$("#anchor a").eq(9).click(function(){$("html").animate({scrollTop:0})});var num=0,timer1=setInterval(function(){++num%2==0?($(".tm_ctr_1_top span:eq(1)").addClass("color_bg").siblings().removeClass("color_bg"),$(".tm_ctr_1_bottom:eq(0)").addClass("tm_ctr_1_bottom no").siblings().removeClass("no")):($(".tm_ctr_1_top span:eq(0)").addClass("color_bg").siblings().removeClass("color_bg"),$(".tm_ctr_1_bottom:eq(1)").addClass("tm_ctr_1_bottom no").siblings().removeClass("no"))},1e3);function times(){var t=new Date("2020-8-31")-new Date,s=parseInt(t/36e5),o=parseInt(t%36e5/1e3/60),e=parseInt(t%6e4/1e3);o<10&&(o="0"+o),e<10&&(e="0"+e),s<=0?(clearInterval(timer),$("#seek .time div span:eq(0)").html("00"),$("#seek .time div span:eq(1)").html("00"),$("#seek .time div span:eq(2)").html("00")):($("#seek .time div span:eq(0)").html(s),$("#seek .time div span:eq(1)").html(o),$("#seek .time div span:eq(2)").html(e))}$(".tm_ctr_1_top span").mouseover(function(){clearInterval(timer1),$(this).addClass("color_bg").siblings().removeClass("color_bg"),$(".tm_ctr_1_bottom").eq($(this).index()).addClass("tm_ctr_1_bottom no").siblings().removeClass("no");var t=$(this).index();t=1==t?0:1,$(".tm_ctr_1_bottom").eq(t).addClass("tm_ctr_1_bottom no").siblings().removeClass("no")}),$(".tm_ctr_1_top").mouseout("span",function(){timer1=setInterval(function(){++num%2==0?($(".tm_ctr_1_top span:eq(1)").addClass("color_bg").siblings().removeClass("color_bg"),$(".tm_ctr_1_bottom:eq(0)").addClass("tm_ctr_1_bottom no").siblings().removeClass("no")):($(".tm_ctr_1_top span:eq(0)").addClass("color_bg").siblings().removeClass("color_bg"),$(".tm_ctr_1_bottom:eq(1)").addClass("tm_ctr_1_bottom no").siblings().removeClass("no"))},1e3)}),times();var timer=setInterval(function(){times()},1e3);localStorage.getItem("user")&&($(".hea_left a:eq(0)").attr("href","../pages/index.html"),$(".hea_left a:eq(0)").html(localStorage.getItem("user")),$(".hea_left a:eq(1)").html("退出"),$(".hea_left a:eq(1)").click(function(){localStorage.clear(),$(".hea_left a:eq(1)").attr("href","")}));