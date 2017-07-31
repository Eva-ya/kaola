<?php
$user = $_POST['user'];
$sql = "SELECT *FROM account WHERE user='$user'";
//数据表名
$res = getone($sql);
if($res){
	$arr['status'] = 1;
	$arr['info'] = "*此账号已使用，请重新设置";
}else{
	$arr['status'] = 2;
	$arr['info'] = "√此账号可用";
}

echo json_encode($arr);

function getone($sql){
	@mysql_connect("localhost","root","root") or die("数据连接失败");
	mysql_select_db("kaola_shopping");
	//数据库名
	mysql_query("set names utf8");
	$res = mysql_query($sql);
	$one = mysql_fetch_assoc($res);
	if($one){
		return $one;
	}else{
		return false;
	}	
}
?>