<?php
    @header('Content-Type:text/html;charset=utf-8');
    @include_once('mysql.php');//连接MySQL数据库;
    if (!empty($_POST)) {
        $username = $_POST['username'];
        $userpwd = $_POST['userpwd'];

        $sql = "select * from userlogin where username='$username' and userpwd='$userpwd'";

        $res = mysqli_query($conn, $sql);

        $resmysql =mysqli_fetch_assoc($res);//查询MySQL数据返回一个数组;

        $result = array();//创建一个result的数组

        if (!empty($resmysql)) {
            $result['code'] = 0;
            $result['msg'] = '登录成功';
        } else {
            $result['code'] = 1;
            $result['msg'] = '登录失败';
        }

        echo json_encode($result);//解析成json数据
    }
