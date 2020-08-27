<?php

$user = $_POST['user'];
$pass = $_POST['pass'];

$conn = mysqli_connect('localhost','root','root','tm');
$sql = "SELECT * FROM `info` WHERE `user`='$user'";
$res = mysqli_query($conn,$sql);
$data = mysqli_fetch_assoc($res);

if($data){
    $arr = array('code'=>0,'msg'=>'该账号已被注册');
}else{ 
    $sql = "INSERT INTO `info` (`user`,`pass`) VALUES ('$user','$pass')";
    $res = mysqli_query($conn,$sql);
    if($res){
        $arr = array('code'=>1);
    }else{
        $arr = array('code'=>0,'msg'=>'后端出错');
    }
}
echo json_encode($arr);
?>