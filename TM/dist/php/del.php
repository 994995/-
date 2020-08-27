<?php

$id = $_REQUEST['id'];
$conn = mysqli_connect('localhost','root','root','tm');
$sql = "DELETE FROM `cart` WHERE `id`='$id'";
$res = mysqli_query($conn,$sql);
echo json_encode($id);

?>