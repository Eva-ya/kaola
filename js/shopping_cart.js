
//	var flag_username=false;
	//判断是否登录
	$.ajax({
		type:"post",
		url:"../php/00session.php",
		//路径是根据html的路径
		async:true,
		dataType:'json',
		success:function(data){
			if(data.info="请登录"){
				
//				$("#ajax_welcome").html('<a href="html/login.html">请登录</a><span class="sep">|</span>');
//				$("#ajax_register").html('<a href="html/register.html">免费注册</a>');
//				console.log("sss")
			}else{
//				$("#ajax_welcome").html('欢迎 '+data.info);
//				$("#ajax_register").html();
//				console.log("ddd")
			}
			$("#ajax_welcome").html(data.info);
//			flag_username=true;
//			console.log("aaa");
	},
		error:function(data){
//			console.log("aaa");
//			flag_username=true;
		}
	});
	//购物车商品加载
//	console.log(flag_username);
//	if(flag_username){
		$.ajax({
						type:"post",
						url:"../php/06car0.php",
						async:true,
						dataType:'json',
						success:function(data){
							console.log(data)
							if(data=="请登录"){
								location.href="login.html"
							}else{
								var str="";
								var total_price = 0;
								if(data.length>0){
									for(var i=0;i<data.length;i++){
	//									console.log(typeof data[i].price)
										var single_price=parseInt(data[i].price)*parseInt(data[i].num);
										total_price+=single_price;
	//									console.log(single_price)
										str+='<li><img src="../php/upload/'+data[i].imgurl+'" /><span>'+data[i].name+'</span><span>'+data[i].price+'</span><span>'+data[i].num+'</span><span>'+single_price+'</span></li>';
									}
									$("section.main_a").html('<ul id="goods_wrap"><li><span>商品</span><span>商品名称</span><span>商品价格</span><span>商品数量</span><span>商品总价</span></li></ul>');
									
									$("ul#goods_wrap").append($(str+'<h2>商品总价：<span style="font-size:22px"></span></h2>'))
									$("section.main_a h2 span").html("￥"+total_price);
		//							$(".aaaa").addClass("hidden");
								}
								else{
									var str='<i class="iconfont icon-gouwuche"></i><p>购物车里空空如也，赶紧去<a href="../index.html"> 逛逛吧></a></p><p>或者您可以先进行<a href="login.html"> 登录></a></p>';
									$("section.main_a").html(str);
								}
								
							}
						},
				});
		
//	}else{
//		console.log("hhh")
//		var str='<i class="iconfont icon-gouwuche"></i><p>购物车里空空如也，赶紧去<a href="../index.html"> 逛逛吧></a></p><p>或者您可以先进行<a href="login.html"> 登录></a></p>';
//		$("section.main").html(str);
//		
//	}
	
$(function(){	
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
})
