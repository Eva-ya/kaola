<?php

session_start();
//sessionytorage
if(!empty($_SESSION['username'])){
	$nmnm['info'] = $_SESSION['username'];
//	$nmnm['status'] = 1;
}else{
	$nmnm['info'] = '<a href="../html/login.html">请登录</a>';
//	$nmnm['status'] = 2;
}
echo json_encode($nmnm);

?>