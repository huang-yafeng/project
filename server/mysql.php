<?php
   @header('Content-Type:text/json;charset=utf-8');
    $conn = mysqli_connect('localhost', 'root', '', 'web_server');
    if (!$conn) {
        die('MySQL数据库连接失败');
    }
    //低版本兼容
    // mysqli_query($conn, 'set names utf-8');//从数据库取数据的时候，将编码转为utf-8;
    // mysqli_query($conn, 'set character set utf-8');//向数据存数据的时候，将编码转为utf-8; -->