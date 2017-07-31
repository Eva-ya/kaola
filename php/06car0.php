<?php

session_start();
if(!empty($_SESSION['username'])){
	$uid = $_SESSION['uid'];
	
//	$sql = "SELECT commodity.imgurl,commodity.shuxing,commodity.merchant, commodity.name, commodity.money,car.id, car.num FROM commodity JOIN car ON car.commodityid=commodity.id WHERE uid=$uid";
	$sql = "SELECT goods.imgurl,goods.name,goods.price,shoppingcart.id,shoppingcart.num FROM goods JOIN shoppingcart ON shoppingcart.goodid=goods.id WHERE userid=$uid";
	$arr = getlist($sql);
}else{
	$arr = "请登录";
}
echo json_encode($arr);


function getlist($sql){
	@mysql_connect("localhost","root","root") or die("数据连接失败");
	mysql_select_db("kaola_shopping");
	mysql_query("set names utf8");
	$res = mysql_query($sql);
	while($one = mysql_fetch_assoc($res)){
		$list[] = $one;
	};
	if(!empty($list)){
		return $list;
	}else{
		return false;
	}
}

?>