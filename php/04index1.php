<?php
$id = $_GET["id"];
$res = file_put_contents("3.3.txt",$id);
if($res){
	$arr = "写入成功";
}else{
	$arr = "写入失败";
}

echo json_encode($arr);

?>