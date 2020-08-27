<?php

$num = $_REQUEST['num'];
$id = $_REQUEST['id'];
$conn = mysqli_connect('localhost','root','root','tm');
    $sql = "UPDATE `cart` SET `num`='$num' WHERE `id`='$id'";
$res = mysqli_query($conn,$sql);


?>



