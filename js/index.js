/**
 * Created by yy on 2017/9/21.
 */

/*===============================�ֲ�==============================*/
var myImg=$("#banner div");//��ȡͼƬ�ڵ�����
var now = 0;//������
setInterval(autoPlay,5000);//�Զ��ֲ�
function autoPlay(){
    now++;
    if(now > myImg.length-1) {
        now = 0;
    }
    myImg.each(function (ele,i) {
        $(this).css("opacity","0");
        $(this).css("-webkit-transform","scale(1)");
    });
    $(myImg[now]).css("opacity","1");//���õ�ǰ�ֲ�ͼ
    $(myImg[now]).css("-webkit-transform","scale(1.1)");
}
//console.log(myImg);
/*===============================�ֲ�==============================*/

/*==============================�������==========================*/
var set;//װ����������Ϊ����
var before;//װ������ԭʼ��λ��
$("#toBottom").click(function(){
    before=document.body.scrollTop;//����������body�ϵ�ԭʼλ�ø�ֵ��before
    set=setInterval(backTop,10);//���޴ε��ù�������Ϊ
});
function backTop(){//��������Ϊ
    //�������������λ��С��=�㣬��ô�Ͳ��ٵ�����Ϊ��������������ڵ�λ�ô���֮ǰ��λ�ã�Ҳ���ٵ�����Ϊ��˵�����������»���
    if(document.body.scrollTop>=680||document.body.scrollTop>before){
        clearInterval(set);//������޴ε�����Ϊ
        $("body").css("overflow","visible");
    }else{
        document.body.scrollTop=document.body.scrollTop+10;
        before=document.body.scrollTop;
    }
}
/*==============================�������==========================*/
$("#toTop").click(function(){
    before=document.body.scrollTop;//����������body�ϵ�ԭʼλ�ø�ֵ��before
    goTop=setInterval(goTop,10);//���޴ε��ù�������Ϊ
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
/*==============================�̶�����λ��==========================*/
var myNav=document.getElementsByTagName("nav")[0];
//console.log(myNav);
window.onscroll= function () {
    var myScrollY=window.scrollY;//��������λ��
    if(myScrollY>=680){
        myNav.style.position="fixed";
        myNav.style.backgroundColor="rgba(255,255,255,.8)"
    }else if(myScrollY<680){
        myNav.style.position="absolute";
    }
};
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
