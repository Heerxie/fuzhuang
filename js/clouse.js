/**
 * Created by yy on 2017/9/23.
 */
/*==============================�̶�����λ��==========================*/
var myNav=document.getElementsByTagName("nav")[0];
//console.log(myNav);
window.onscroll= function () {
    var myScrollY=window.scrollY;//��������λ��
    if(myScrollY>=210){
        myNav.style.position="fixed";
        myNav.style.top="0";
        myNav.style.backgroundColor="rgba(255,255,255,.8)"
    }else if(myScrollY<210){
        myNav.style.position="relative";
        myNav.style.top="0";
    }
};
/*==============================�������==========================*/
var set;//װ����������Ϊ����
var before;//װ������ԭʼ��λ��
$("#toTop").click(function(){
    before=document.body.scrollTop;//����������body�ϵ�ԭʼλ�ø�ֵ��before
    goTop=setInterval(goTop,5);//���޴ε��ù�������Ϊ
});
function goTop(){//��������Ϊ
    //�������������λ��С��=�㣬��ô�Ͳ��ٵ�����Ϊ��������������ڵ�λ�ô���֮ǰ��λ�ã�Ҳ���ٵ�����Ϊ��˵�����������»���
    if(document.body.scrollTop<=0||document.body.scrollTop>before){
        clearInterval(set);//������޴ε�����Ϊ
    }else{
        document.body.scrollTop=document.body.scrollTop-10;
        before=document.body.scrollTop;
    }
}
/*==============================���С���˵�==========================*/
$(".subNav").click(function(){
    $("body").css("overflow","hidden");
    $("#zhe").css("display","block");
    $(".sliderNav").css("right","0");
    $(window).resize(function () {          //���������С�仯ʱ
        //alert($(window).width());          //�����ʱ�´��ڿ���������
        if($(window).width()>=768){
            $("#zhe").css("display","none");
            $(".sliderNav").css("display","none");
        }else{
            $(".sliderNav").css("display","block");
            $("#zhe").css("display","block");
        }
    });
});
/*==============================����˵����==========================*/
$("#close").click(function(){
    $("body").css("overflow","visible");
    $("#zhe").css("display","none");
    $(".sliderNav").css("right","-253px");
    $(window).resize(function () {          //���������С�仯ʱ
        //alert($(window).width());          //�����ʱ�´��ڿ���������
        if($(window).width()<768){
            $("#zhe").css("display","none");
        }
    });
});