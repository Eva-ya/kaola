<?php
$sql = "SELECT * FROM goods";
$list = getlist($sql);
echo json_encode($list);

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