<?php
$id = $_POST['id'];
session_start();
//添加购物车
if(!empty($_SESSION['username'])){
	$uid = $_SESSION['uid'];
	$sql1 = "SELECT * FROM goods WHERE id=$id";
	$res1 = getone($sql1);
	$price = $res1['price'];
	$sql = "SELECT * FROM shoppingcart WHERE userid=$uid AND goodid=$id";
	$res = getone($sql);
	//print_r($res);
	if($res){
		$num = $res['num']+1;
		$sql = "UPDATE shoppingcart SET num=$num WHERE goodid=$id";
		$res = add($sql);
		if($res){
			$arr['status'] = 1;
			$arr['info'] = "√添加购物车成功,请去购物车查看";
		}else{
			$arr['status'] = 2;
			$arr['info'] = "*添加购物车失败，请重新添加";
		}
	}else{
		$sql = "INSERT INTO shoppingcart (userid,goodid,num,price) VALUES ($uid,$id,1,'$price')";
		$res = add($sql);
		if($res){
			$arr['status'] = 1;
			$arr['info'] = "√添加购物车成功,请去购物车查看";
		}else{
			$arr['status'] = 2;
			$arr['info'] = "*添加购物车失败，请重新添加";
		}
	}
	
}else{
	$arr = "请登录";
}


echo json_encode($arr);



function getone($sql){
	@mysql_connect("localhost","root","root") or die("数据连接失败");
	mysql_select_db("kaola_shopping");
	mysql_query("set names utf8");
	$res = mysql_query($sql);
	$one = mysql_fetch_assoc($res);
	if($one){
		return $one;
	}else{
		return false;
	}	
}




function add($sql){
	$res = mysql_connect("localhost","root","root") ;
	 mysql_select_db("kaola_shopping");
	mysql_query("set names utf8");
	$reslut = mysql_query($sql);
	if($reslut){
		return true;
	}else{
		return false;
	}
}
?>

