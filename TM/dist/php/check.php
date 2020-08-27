<?php

$conn = mysqli_connect('localhost','root','root','tm');
$sql = "SELECT * FROM `cart`";
$res = mysqli_query($conn,$sql);
$arr = mysqli_fetch_all($res,MYSQL_ASSOC);
echo json_encode(array('data'=>$arr));

?>