<?php
//$name = $_POST['name'];
//$old = $_POST['age'];
//$sex = $_POST['sex'];
$user = $_POST['user'];
$pswd = $_POST['pswd'];
$phone = $_POST['phone'];

$sql = "SELECT *FROM account WHERE user='$user'";
$res = getone($sql);
if($res){
	$arr['status'] = 1;
	$arr['info'] = "*此账号已使用，请重新设置";
}else{
	$sql = "INSERT INTO account (user,pswd,phone) VALUES ('$user','$pswd','$phone')";
	$ress = add($sql);
	if($ress){
		$arr['status'] = 2;
		$arr['info'] = "√注册成功,请登录";
	}else{
		$arr['status'] = 3;
		$arr['info'] = "*注册失败，请重新注册";
	}
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
	$res = mysql_connect("localhost","root","root");
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