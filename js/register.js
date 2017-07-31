	//登录名注册重名验证
	$("#in-count").blur(function(){
		var reg1 = /[\S]{6,18}/;
		if($(this).val()){
			if(!reg1.test($(this).val())){
				$('span.aa').html("登录名不符合要求");
				$("#in-count").addClass("main_in-count");
			}else{
				$.ajax({
					type:"post",
					url:"../php/02zhuce0.php",
					async:true,
					dataType:'json',
					data:{
						user:$("#in-count").val(),
					},
					success:function(data){
						$('span.aa').html(data.info);
						if(data.status=2){
							$("#in-count").removeClass("main_in-count");	
						}else{
							$("#in-count").addrClass("main_in-count");	
							
						}
					}
				})
				
			}
			
		}else{
			$("#in-count").removeClass("main_in-count");
			
		}
	})
	//密码
	$("#in-key").blur(function(){
		var reg2 = /[\S]{6,16}/g;
		if($(this).val()){
			if(!reg2.test($(this).val())){
				$('span.bb').html("密码不符合要求");
				$("#in-key").addClass("main_in-count");
			}else{
				$("#in-key").removeClass("main_in-count");	
				$('span.bb').html("√密码可用");
			}
			
		}
	})
	//重复密码
	$("#in-re-key").blur(function(){
		if($(this).val()!=$("#in-key").val()){
			$('span.cc').html("密码不一致");
			$("#in-re-key").addClass("main_in-count");
		}else{
			$("#in-re-key").removeClass("main_in-count");
			$('span.cc').html("√密码一致");
		}
	})
	//手机号格式验证
	$("#in-phone").blur(function(){
		var reg3 = /^1[3578]\d{9}$/;
		if($(this).val()){
			if(!reg3.test($(this).val())){
				$('span.dd').html("格式不正确");
				$("#in-phone").addClass("main_in-count");
			}else{
				$("#in-phone").removeClass("main_in-count");
				$('span.dd').html("√");
			}
			
		}
	})
	//用户勾选
	$("#agree").on("click",function(){
		if($("#agree").prop('checked')){
			$("#register").addClass("main_register");
		}else{
			$("#register").removeClass("main_register");
		}
		
	})
	//注册
	$("#register").on("click",function(){
		if($("#agree").prop('checked')){
			$.ajax({
				type:"post",
				url:"../php/02zhuce1.php?random"+Math.random(),
				async:true,
				dataType:'json',
				data:{
					user:$("#in-count").val(),
					pswd:$("#in-key").val(),
					phone:$("#in-phone").val(),
				},
				success:function(data){
					$('p.show').html(data.info);
					if(data.status=2){
						setTimeout(function(){
							location.href='../index.html';
							console.log("222")
						},2000)
						
					}
				}
			});
		}
		
	})
	
	
