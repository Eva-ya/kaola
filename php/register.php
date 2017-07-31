<?php
$user = $_POST['user'];
$pswd = $_POST['pswd'];
if($user=="18323232323"&$pswd=="123456"){
	$arr['status'] = 1;
	$arr['info'] = "登录成功";
}else {
	$arr['status'] = 2;
	$arr['info'] = "登录失败";
}
echo json_encode($arr);
?>