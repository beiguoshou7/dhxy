/**
 * Created by X on 2018/11/19.
 */
$(function(){
    //nav
    $(".nav-wz").find('a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    //轮播
    ~function () {
        var i = 0;
        function aa() {
            if (i ==$(".banner").find($('img')).length ) {
                i = 0
            }
            $(".banner").find($('img')).eq(i).animate({opacity: 1}, 1000).css({display: 'inline-block'}).siblings().animate({opacity: 0}, 1500).css({display: 'none'})
            i++;
        }

        var timer = setInterval(aa, 3000);
        $(".banner").hover(function () {
                clearInterval(timer);
            },
            function () {
                timer = setInterval(aa, 3000);
            });
        $(".prev").click(function(){
            i--;
            if (i < 0) {
                i = $(".banner").find($('img')).length-1
            }
            console.log(i);
            $(".banner").find($('img')).eq(i).animate({opacity: 1}, 1000).css({display: 'inline-block'}).siblings().animate({opacity: 0}, 500).css({display: 'none'})

        })
        $(".next").click(function(){
            i++;
            if (i > $(".banner").find($('img')).length - 1) {
                i = 0
            }
            console.log(i);
            $(".banner").find($('img')).eq(i).animate({opacity: 1}, 1000).css({display: 'inline-block'}).siblings().animate({opacity: 0}, 500).css({display: 'none'})

        })

    }()

    $(".list1-middle").find($(".btn")).hover((function(){
        $(".underline").eq($(this).index()).show()
    }),function(){
        $(".underline").eq($(this).index()).hide()
    })



    $(".top-right").find($("a")).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $(".bottom1").eq($(this).index()).addClass('active').siblings().removeClass('active')
    })

    //lunbo
~function () {
    var i = 0;

    function aa() {
        if (i == 5) {
            i = 0
        }
        $(".bottom1").find($('.item')).eq(i).addClass('active').siblings().removeClass('active')
        $(".bottom-nav").find($('a')).eq(i).addClass('active').siblings().removeClass('active');
        i++;
    }

    var timer = setInterval(aa, 2000);
    $(".bottom1").hover(function () {
            clearInterval(timer);
        },
        function () {
            timer = setInterval(aa, 2000);
        });
    $(".bottom-nav").find($('a')).hover(function () {
        i = $(this).index()
        $(".bottom-nav").find($('a')).eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(".bottom1").find($('.item')).eq($(this).index()).addClass('active').siblings().removeClass('active')

    })
}()



~function () {
    var i = 0;

    function aa() {
        if (i == 4) {
            i = 0
        }
        $(".bottom2").find($('.item')).eq(i).addClass('active').siblings().removeClass('active')
        $(".bottom-nav2").find($('a')).eq(i).addClass('active').siblings().removeClass('active');
        i++;
    }

    var timer = setInterval(aa, 2000);
    $(".bottom2").hover(function () {
            clearInterval(timer);
        },
        function () {
            timer = setInterval(aa, 2000);
        });
    $(".bottom-nav2").find($('a')).hover(function () {
        i = $(this).index()
        $(".bottom-nav2").find($('a')).eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(".bottom2").find($('.item')).eq($(this).index()).addClass('active').siblings().removeClass('active')

    })
}()


    ////list选项卡
    $(".news-nav").find('a').hover(function(){
        $(this).addClass('slide-active').siblings().removeClass("slide-active");
        $(".li-more").find('ul').eq($(this).index()).show().siblings().hide()
    })
    $(".list2-news-nav").find('a').hover(function(){
        $(this).addClass('slide-active').siblings().removeClass("slide-active");
        $(".news-box").find('div').eq($(this).index()).show().siblings().hide()
    });
    $(".entry-nav").find('a').hover(function(){
        $(this).addClass('active').siblings().removeClass("active");
        console.log($(".slide-wrapper").find(".slide-item").eq($(this).index()));

        $(".slide-wrapper .aaa").eq($(this).index()).show().siblings().hide()
    })
    let i= $(".gundong-box").position().left;
    setInterval( function(){
        i--;
        if (i<-400){
            i=0;
        }
        $("ul").animate({left:i+"px"}
            ,1)},30)

    /*   $(".cal-prev").click(function(){
           $(".slide-wrapper").css({"transform":translateX=translateX("-545"+"px")})
       })*/
})