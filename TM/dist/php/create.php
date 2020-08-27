<?php
$id = $_REQUEST['id'];
$img = $_REQUEST['img'];
$name = $_REQUEST['name'];
$price = $_REQUEST['price'];
$num = $_REQUEST['num'];

$conn = mysqli_connect('localhost','root','root','tm');
$sql = "SELECT * FROM `cart` WHERE `id`= '$id'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
if($row){
    $num = $row['num']+$num;
    $sql = "UPDATE `cart` SET `num` = '$num' WHERE `id`='$id'";
}else{
    $sql = "INSERT INTO `cart` VALUES ('$id','$img','$name','$price','$num')";
}
$res = mysqli_query($conn,$sql);

if($res){
    $sql = "SELECT * FROM `cart` WHERE `id`= '$id'";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);
    echo json_encode(array('code'=>1,'data'=>$row)); 
}else{
    echo json_encode(array('code'=>0)); 
}
?>