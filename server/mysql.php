<?php
    $conn=mysqli_connect('localhost','root','','web_server','3306') or die('mysql连接失败');
    var_dump($conn);