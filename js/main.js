$(function(){
    //slide

    var num = 0;
    var slide;

    $(".slide li").eq(num).css({"left":"0%"});

    slide = setInterval(function(){
        start();
    }, 3500); //setInterval: 일정한 주기로 함수 반복

    //이미지 돌아가게 구현하기
    function start(){
        var no = num + 1; //다음 이미지 불러오기 위함
        
        if(no>=$(".slide li").length){ //이미지를 처음으로 돌리기 위함
            no = 0;
        }
        
        // 다음 이미지를 왼쪽으로 이동 후 animation으로 보여주기 위함
        $(".slide li").eq(no).css({"left":"-100%"}).stop().animate({"left":"0%"});
        // 이미 나온 이미지를 오른쪽으로 보내기 위함
        $(".slide li").eq(num).stop().animate({"left":"100%"});
        
        num = no; // 반복
    };
});