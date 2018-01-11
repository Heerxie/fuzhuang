/**
 * Created by yy on 2017/9/23.
 */
/*==============================固定导航位置==========================*/
var myNav=document.getElementsByTagName("nav")[0];
//console.log(myNav);
window.onscroll= function () {
    var myScrollY=window.scrollY;//滚动条的位置
    if(myScrollY>=210){
        myNav.style.position="fixed";
        myNav.style.top="0";
        myNav.style.backgroundColor="rgba(255,255,255,.8)"
    }else if(myScrollY<210){
        myNav.style.position="relative";
        myNav.style.top="0";
    }
};
/*==============================点击向上==========================*/
var set;//装滚动条的行为调用
var before;//装滚动条原始的位置
$("#toTop").click(function(){
    before=document.body.scrollTop;//将滚动条在body上的原始位置赋值给before
    goTop=setInterval(goTop,5);//无限次调用滚动条行为
});
function goTop(){//滚动条行为
    //如果滚动条所处位置小于=零，那么就不再调用行为，如果滚动条现在的位置大于之前的位置，也不再调用行为（说明滚动条向下滑）
    if(document.body.scrollTop<=0||document.body.scrollTop>before){
        clearInterval(set);//清楚无限次调用行为
    }else{
        document.body.scrollTop=document.body.scrollTop-10;
        before=document.body.scrollTop;
    }
}
/*==============================点击小主菜单==========================*/
$(".subNav").click(function(){
    $("body").css("overflow","hidden");
    $("#zhe").css("display","block");
    $(".sliderNav").css("right","0");
    $(window).resize(function () {          //当浏览器大小变化时
        //alert($(window).width());          //浏览器时下窗口可视区域宽度
        if($(window).width()>=768){
            $("#zhe").css("display","none");
            $(".sliderNav").css("display","none");
        }else{
            $(".sliderNav").css("display","block");
            $("#zhe").css("display","block");
        }
    });
});
/*==============================点击菜单叉叉==========================*/
$("#close").click(function(){
    $("body").css("overflow","visible");
    $("#zhe").css("display","none");
    $(".sliderNav").css("right","-253px");
    $(window).resize(function () {          //当浏览器大小变化时
        //alert($(window).width());          //浏览器时下窗口可视区域宽度
        if($(window).width()<768){
            $("#zhe").css("display","none");
        }
    });
});