<?php
//注册接口
@include_once('mysql.php');//连接MySQL数据库
$username = $_POST['username'];//用户名
$userpwd = $_POST['userpwd'];//密码
$phone = $_POST['phone'];//手机号
$email = $_POST['email'];//邮箱地址
//查询语句
$sql = "insert into userInfo (username,userpwd,phone,email) values('$username','$userpwd','$phone','$email')";
$res = mysqli_query($conn, $sql);//连接MySQL数据库，查询

$result = array();//创建一个存放数据的数组

if ($res) {
    $rows = mysqli_affected_rows($conn);
    if ($rows > 0) {
        $result['code'] = 0;
        $result['msg'] = '注册成功';
    } else {
        $result['code'] = 1;
        $result['msg'] = '注册失败';
    }
} else {
    $result['code'] = -1;
    $result['msg'] = 'sql语法有误';
    $result['sql'] = $sql;
}

echo json_encode($result);//解析成json数据