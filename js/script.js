$(function(){
	//判断是否登录
	$.ajax({
		type:"post",
		url:"php/00session.php",
		//路径是根据html的路径
		async:true,
		dataType:'json',
		success:function(data){
//			if(data.info="请登录"){
//				$("#ajax_welcome").html('<a href="html/login.html">请登录</a><span class="sep">|</span>');
//				$("#ajax_register").html('<a href="html/register.html">免费注册</a>');
//				console.log("sss")
//			}else{
//				$("#ajax_welcome").html('欢迎 '+data.info);
//				$("#ajax_register").html();
//				console.log("ddd")
//			}
			$("#ajax_welcome").html(data.info);
		},

		
	});
	$("#turn_to_cart").on("click",function(){
		location.href='html/shopping_cart.html';
	})
	//顶部header栏 左
	$("header.top .left li").eq(3).hover(function(){
		$(this).find(".app_code").css("display","block");
	},function(){
		$(this).find(".app_code").css("display","none");
	});
	//顶部header栏 右
	var flag_top_a=true;
	$("header.top .right li").eq(2).hover(function(){
		flag_top_a=!flag_top_a;
		$(".down_a").css("display","block");
		$(this).addClass("personal_center_a");
		$(this).find(".tri").addClass("personal_center_b");
	},function(){
		$(".down_a").hover(function(){
			flag_top_a=true;
		},function(){
			$(".down_a").css("display","none");
			$("header.top .right li").eq(2).removeClass("personal_center_a");
			$("header.top .right li").eq(2).find(".tri").removeClass("personal_center_b");
		})
		if(!flag_top_a){
			$(".down_a").css("display","none");
			$("header.top .right li").eq(2).removeClass("personal_center_a");
			$("header.top .right li").eq(2).find(".tri").removeClass("personal_center_b");
		}
		
	})
	
	var flag_top_b=true;
	$("header.top .right li").eq(3).hover(function(){
		flag_top_b=!flag_top_b;
		$(".down_b").css("display","block");
		$(this).addClass("personal_center_a");
		$(this).find(".tri").addClass("personal_center_b");
	},function(){
		$(".down_b").hover(function(){
			flag_top_b=true;
		},function(){
			$(".down_b").css("display","none");
			$("header.top .right li").eq(3).removeClass("personal_center_a");
			$("header.top .right li").eq(3).find(".tri").removeClass("personal_center_b");
		})
		if(!flag_top_b){
			$(".down_b").css("display","none");
			$("header.top .right li").eq(3).removeClass("personal_center_a");
			$("header.top .right li").eq(3).find(".tri").removeClass("personal_center_b");
		}
		
	})
	
	var flag_top_c=true;
	$("header.top .right li").eq(4).hover(function(){
		flag_top_c=!flag_top_c;
		$(".down_c").css("display","block");
		$(this).addClass("personal_center_a");
		$(this).find(".tri").addClass("personal_center_b");
	},function(){
		$(".down_c").hover(function(){
			flag_top_c=true;
		},function(){
			$(".down_c").css("display","none");
			$("header.top .right li").eq(4).removeClass("personal_center_a");
			$("header.top .right li").eq(4).find(".tri").removeClass("personal_center_b");
		})
		if(!flag_top_c){
			$(".down_c").css("display","none");
			$("header.top .right li").eq(4).removeClass("personal_center_a");
			$("header.top .right li").eq(4).find(".tri").removeClass("personal_center_b");
		}
		
	})
	var flag_top_d=true;
	$("header.top .right li").eq(6).hover(function(){
		flag_top_d=!flag_top_c;
		$(".down_d").css("display","block");
		$(this).addClass("personal_center_a");
		$(this).find(".tri").addClass("personal_center_b");
	},function(){
		$(".down_d").hover(function(){
			flag_top_d=true;
		},function(){
			$(".down_d").css("display","none");
			$("header.top .right li").eq(6).removeClass("personal_center_a");
			$("header.top .right li").eq(6).find(".tri").removeClass("personal_center_b");
		})
		if(!flag_top_d){
			$(".down_d").css("display","none");
			$("header.top .right li").eq(6).removeClass("personal_center_a");
			$("header.top .right li").eq(6).find(".tri").removeClass("personal_center_b");
		}
		
	})
	
	//大导航
	var flag_tab_a=true;
	$("nav.top_tab .menu li").eq(0).hover(function(){
		flag_tab_a=!flag_tab_a;
		$(".hid").css("display","block");
		$(".hid .ul_a").css("display","block");
	},function(){
		$(".hid").hover(function(){
			flag_tab_a=true;
			$(".hid").css("display","block");
			$(".hid .ul_a").css("display","block");
		},function(){
			$(".hid").css("display","none");
			$(".hid .ul_a").css("display","none");
		});
		
		if(!flag_tab_a){
			$(".hid").css("display","none");
			$(".hid .ul_a").css("display","none");
			flag_tab_a=true;
			
		}
		
			
	})
	
	//导航轮播
	var num=1;
	var top_ca=setInterval(funCarousel,1000);
	function funCarousel(){
		if(num==6) num=0;
		if(!$(".top_carousel .pic img").is(':animated')){
			$(".top_carousel .pic img").eq(num).fadeIn().siblings().fadeOut();
			$(".top_carousel .circle li").eq(num).addClass("span_red").siblings().removeClass("span_red");
			num++;
		}
			
	}
		
	
	$(".top_carousel").hover(function(){
		clearInterval(top_ca);
	},function(){
		top_ca=setInterval(funCarousel,1000);
	})
	
	$(".top_carousel .circle li").hover(function(){
		clearInterval(top_ca);
		num=$(this).index();
	},function(){
		top_ca=setInterval(funCarousel,1000);
	})
	
	$(".top_carousel span.right").click(function(){
		clearInterval(top_ca);
		funCarousel();
		top_ca=setInterval(funCarousel,1000);
	})
	
	$(".top_carousel span.left").click(function(){
		clearInterval(top_ca);
		if(num==-1) num=5;
		if(!$(".top_carousel .pic img").is(':animated')){
			$(".top_carousel .pic img").eq(num).fadeIn().siblings().fadeOut();
			$(".top_carousel .circle li").eq(num).addClass("span_red").siblings().removeClass("span_red");
			num--;
		}
		
		top_ca=setInterval(funCarousel,1000);
	})
	$(".main_d .left").hover(function(){
		$("#b_prev_button").css("display","block");
		$("#b_next_button").css("display","block");
	},function(){
		$("#b_prev_button").css("display","none");
		$("#b_next_button").css("display","none");
	})
	$("section.main_d li.itm").hover(function(){
		$(this).find(".mask").css("display","block");
	},function(){
		$(this).find(".mask").css("display","none");
	})
	
	//导航书签效果
	var head_top=$("header.search").offset().top;
	var aside_left_top=$("#index_left").offset().top;
	$(window).scroll(function(){
		var this_top=$(this).scrollTop();
		if(this_top>=head_top){
			$("header.hidd").css("display","block");
		}else{
			$("header.hidd").css("display","none");
		}
		console.log("this_top"+this_top);
		console.log("aside_left_top"+aside_left_top	);
		if(this_top>=aside_left_top){
			$("#index_left").addClass("index_left");
			$("#index_right").addClass("index_right");
			console.log(1)
		}else{
			$("#index_left").removeClass("index_left");
			$("#index_right").removeClass("index_right");
		}
		
	})
	$("#index_right .aa").first().hover(function(){
		$(this).find(".hid_a").css("display","block");
	},function(){
		$(this).find(".hid_a").css("display","none");
	})
	$("#index_right .aa").eq(2).hover(function(){
		$(this).find(".hid_b").css("display","block");
	},function(){
		$(this).find(".hid_b").css("display","none");
	})
	$("#to_top").click(function(){
			$(window).scrollTop(0);
		})
	var he_main_b=$("section.main_b").offset().top;
	$("#he_main_b").click(function(){
			$("body").animate({
				scrollTop:he_main_b
			},250)
		})
	var he_main_c=$("section.main_c").offset().top;
	$("#he_main_c").click(function(){
			$("body").animate({
				scrollTop:he_main_c
			},250)
		})
	var he_main_d=$("section.main_d").offset().top;
	$("#he_main_d").click(function(){
			$("body").animate({
				scrollTop:he_main_d
			},250)
		})
	
	
})
