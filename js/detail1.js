$(function(){
	var flag = false;
	//判断是否登录
	$.ajax({
		type:"post",
		url:"../php/00session.php",
		//路径是根据html的路径
		async:true,
		dataType:'json',
		success:function(data){
			$("#ajax_welcome").html(data.info);
			flag = true;
		},
		
	});
	//页面信息加载
	var str = location.search;
	var arr = str.split("=");
	var id = arr[1];
	$.ajax({
		type:'post',
		url:'../php/05shopping0.php',
		dataType:'json',
		data:{
			id:id
		},
		success:function(data){
			console.log(data);
			$(".main .goods_wrap .showImgBox").css("background-image","url(../img/detail1/ee0cad5d-e133-41c5-a8fd-cd383436a4e2.jpg)");
			$("#goods_name").html(data.name);
			$(".right p.tit").html(data.shopname);
			$("#goods_price").html(data.price);
		}
		
	})
	
	//点击添加购物车
	$("#addToCart").on("click",function(){
			if(flag){
					$.ajax({
						type:"post",
						url:"../php/05shopping1.php",
						async:true,
						dataType:'json',
						data:{
							id:id
						},
						success:function(data){
	//						console.log(data);
//							$("p.atta").html(data.info);
						}
					});
					
				}else{
					alert("请先登录")
				}
	})
	//点击立即购买
	$(".main .right a.buy").on("click",function(){
			if(flag){
					$.ajax({
						type:"post",
						url:"../php/05shopping1.php",
						async:true,
						dataType:'json',
						data:{
							id:id
						},
						success:function(data){
							setTimeout(function(){
								location.href="shopping_cart.html";
							},1000)
						}
					});
					
				}else{
					alert("请先登录")
				}
	})
	
	//顶部header栏 右
	var flag_top_a=true;
	$("header.top .right li").eq(1).hover(function(){
		flag_top_a=!flag_top_a;
		$(".down_a").css("display","block");
		$(this).addClass("personal_center_a");
		$(this).find(".tri").addClass("personal_center_b");
	},function(){
		$(".down_a").hover(function(){
			flag_top_a=true;
		},function(){
			$(".down_a").css("display","none");
			$("header.top .right li").eq(1).removeClass("personal_center_a");
			$("header.top .right li").eq(1).find(".tri").removeClass("personal_center_b");
		})
		if(!flag_top_a){
			$(".down_a").css("display","none");
			$("header.top .right li").eq(1).removeClass("personal_center_a");
			$("header.top .right li").eq(1).find(".tri").removeClass("personal_center_b");
		}
		
	})
	
	$(".main .header_top .r_supply").hover(function(){
		$(".main .header_top .supply_hidden").css("display","block");
	},function(){
		$(".main .header_top .supply_hidden").css("display","none");
	})
	$(".main .header_top .r_service").hover(function(){
		$(".main .header_top .service_hidden").css("display","block");
	},function(){
		$(".main .header_top .service_hidden").css("display","none");
	})
	
	//商品详情放大镜
	var showPic=["url(../img/detail1/ee0cad5d-e133-41c5-a8fd-cd383436a4e2.jpg)","url(../img/detail1/80e0cd2b-cfe3-434c-befd-30fc2167a1ab.jpg)","url(../img/detail1/50ec25d7-f50f-4866-9634-36f70b2f1755.jpg)","url(../img/detail1/d5ccc187-c334-47cf-a05d-ae11db767019.jpg)"];
	$(".goods_wrap .items li").hover(function(){
//			console.log($(this).index())
		$(".showImgBox").css("background",showPic[$(this).index()]);
		$(this).addClass("main_goods_wrap_items").siblings().removeClass("main_goods_wrap_items");
	},function(){
		
	})
	var showImg_left=$(".showImgBox").offset().left;
	var showImg_top=$(".showImgBox").offset().top;
	$(".showImgBox").mousemove(function(ev){
		$(".goods_wrap .box").css("display","block");
		$(".goods_wrap .magnifier").css("display","block");
			var ev = ev || event;
			var va_left=ev.pageX-showImg_left-100;
			var va_top=ev.pageY-showImg_top-100;			if(va_left<=0) {
				va_left=0;
				
			}
			if(va_left>=200) va_left=200;
			if(va_top<=0) va_top=0;
			if(va_top>=200) va_top=200;
			$(".goods_wrap .box").css({
				left:va_left,
				top:va_top
			})
			$(".magnifier img").css({
				left:-va_left*2,
				top:-va_top*2
			})
	})
	$(".showImgBox").mouseout(function(){
		$(".goods_wrap .box").css("display","none");
		$(".goods_wrap .magnifier").css("display","none");
		
	})
	//商品评价照片放大镜
	var flag_comm=true;
	var big_pic_url=["../img/detail1/j4nlsj4e11607427 (1).png","../img/detail1/j4nlsqns82509030 (1).png"]
	$(".pic_list .img-magni").click(function(){
		var aa=$(this).index(".img-magni");
		if(flag_comm){
			console.log(aa)
			$(this).parent().children().css({
				width:"35px",
				height:"35px"
			})
			$(this).parent().find(".img_b").css("left","51px");
			$(this).css("border","1px solid #E31436");
		}else{
			$(this).parent().children().css({
				width:"74px",
				height:"74px"
			})
			$(this).css("border","1px solid transparent");
			$(this).parent().find(".img_b").css("left","91px");
		}
		$(this).parent().parent().find(".list_b").toggleClass("main_pic_list_list_b").find(".big_pic").attr("src",big_pic_url[aa]);
		flag_comm=!flag_comm;
		
	})
	$(window).scroll(function(){
		var good_de_top=$(".goods_details").offset().top;
		var this_top=$(this).scrollTop();
		var user_comm_top=$(".user_comments").offset().top;
		if(this_top>=good_de_top){
			$(".p_nav-").removeClass("hidden");
			$(".p_nav- .nav_a").addClass("main_nav_");
			$(".p_nav- .nav_b").removeClass("main_nav_");
			if(this_top>=user_comm_top){
				$(".p_nav- .nav_a").removeClass("main_nav_");
				$(".p_nav- .nav_b").addClass("main_nav_")
			}
		}else{
			$(".p_nav-").addClass("hidden");
		}
	})
	//下标页
	$(".main ul.index .middle").eq(0).addClass("main_ul_index_middle_first-child");
	
	//头部导航
	$(".p_nav- .nav_a").click(function(){
		$(window).scrollTop($(".p_nav").offset().top);
	})
	$(".p_nav- .nav_b").click(function(){
		$(window).scrollTop($(".user_comments").offset().top);
	})
	//添加购物车特效
	$("#addToCart").click(function(ev){
		var ev=ev||event;
		var shoppingImg=$("<img src='../img/detail1/ee0cad5d-e133-41c5-a8fd-cd383436a4e2.jpg' />");
		shoppingImg.appendTo(this);
		shoppingImg.addClass("addToCart");
		console.log(ev.clientX-30);
		console.log(ev.clientY);
		
		shoppingImg.animate({
			top:-ev.clientY,
			left:-ev.clientX
		},1000,'swing',function(){
			$(this).remove();
		})
	})
	//收藏效果
	var flag_pop=true;
	$(".main .right .collect").click(function(){
		if(flag_pop){
			$("#pop_up").removeClass("hidden");
			$(".mask").removeClass("hidden");
			$(this).html('<i class="iconfont icon-aixin1"></i><a href="javascript:;">已收藏</a>');
		}else{
			$(this).html('<i class="iconfont icon-aixin"></i><a href="javascript:;">收藏</a>');
		}
		flag_pop=!flag_pop;
	})
	$("#pop_up .head a").click(function(){
		$("#pop_up").addClass("hidden");
		$(".mask").addClass("hidden");
	})
	
})
