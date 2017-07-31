<?php
if(!file_exists("upload/")){
	mkdir("upload/");
}
$nb = mt_rand(1, 1000000);
$imgurl = time().$nb.$_FILES['imgurl']['name'];
//tmp_name存储img详细信息
$res = move_uploaded_file($_FILES['imgurl']['tmp_name'],'upload/'.$imgurl);
//将上传的文件移动到upload文件夹
if($res){
	$arr['imgurl'] = 1;
//1为成功
}else{
	$arr['imgurl'] = 2;
//2为失败
}

$name = $_POST['name'];
$price = $_POST['price'];
$shopname = $_POST['shopname'];
$num = $_POST['num'];


$sql = "INSERT INTO goods (name,price,imgurl,num,shopname) VALUES ('$name','$price','$imgurl','$num','$shopname')";
$ress = add($sql);
if($ress){
	$arr['status'] = 2;
	$arr['info'] = "=√上传成功";
}else{
	$arr['status'] = 3;
	$arr['info'] = "*上传失败";
}


echo json_encode($arr);



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