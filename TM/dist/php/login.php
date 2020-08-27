<?php

$user = $_POST['user'];
$pass = $_POST['pass'];

$conn = mysqli_connect('localhost','root','root','tm');
$sql = "SELECT * FROM `info` WHERE `user`='$user' AND `pass`='$pass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
if($row){
    $arr = array('code'=>1,'user'=>$user);
}else{
    $arr = array('code'=>0);
}

echo json_encode($arr);


?>