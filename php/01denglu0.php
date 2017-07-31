<?php
//  帐号框失去焦点时判断库中是否有此帐号
$user = $_POST['user'];
//  sql语句，查询数据库中是否有此用户
$sql = "SELECT * FROM account WHERE user='$user'";
//  执行sql语句，是否有数据返回
$res = getone($sql);
//  判断是否有数据返回
if($res){
	$arr['status'] = 1;
	$arr['info'] = "√帐号正确";
}else {
	$arr['status'] = 2;
	$arr['info'] = "*请输入正确的帐号";
}
//  数据传递，将获得的结果打包成json数据
echo json_encode($arr);

//  封装查询数据库函数    
//  获取数据库的一条内容，即一个id代表的数据
function getone($sql){
	//  连接数据库
	@mysql_connect("localhost","root","root") or die("数据连接失败");
	//  选择数据库名称
	mysql_select_db("kaola_shopping");
	//  设置入库编码
	mysql_query("set names utf8");
	//  执行sql语句，获得结果
	$res = mysql_query($sql);
	//  处理结果，转换成标准数组
	$one = mysql_fetch_assoc($res);
	if($one){
		return $one;
	}else{
		return false;
	}
}
?>