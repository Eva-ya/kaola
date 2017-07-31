<?php
//$id = file_get_contents("3.3.txt");
$id = $_POST["id"];
//从当前location对象获取id
$sql = "SELECT * FROM goods WHERE id=$id";
$list = getone($sql);

echo json_encode($list);


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

?>