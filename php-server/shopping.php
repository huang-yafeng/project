<?php
@header('Content-Type:text/html;charset=utf-8');
@include_once('mysql.php');

if (!(isset($_POST['user']) && isset($_POST['id']) && isset($_POST['buyNum']) && isset($_POST['jiage']))) {
    $obj = array();
    $obj['status'] = false;
    $obj['msg'] = '请传入完整参数';
    $json = json_encode($obj);
    exit($json);
}
//参数
$user = $_POST['user'];
$id = $_POST['id'];
$buyNum = $_POST['buyNum'];
$jiage = $_POST['jiage'];
$title = $_POST['title'];
$img = $_POST['img'];
// 查询
$sql = "select * from shoppingacar where user = '$user' and gid = '$id'";
// 执行mysql语句
$result = mysqli_query($conn, $sql);
// print_r($result);
$obj = array();//创建一个数组
if ($result) {
    $item = mysqli_fetch_assoc($result);
    if ($item) {  //有数据就更新
        $sql = "update shoppingacar set buyNum = buyNum + $buyNum where user = '$user' and gid = '$id'";
    } else {
        // 没有数据就新增
        $sql = "insert into shoppingacar(user,gid,buyNum,jiage,title,img) values('$user','$id','$buyNum','$jiage','$title','$img')";
    }
    // 执行mysql语句
    $result = mysqli_query($conn, $sql);
    // print_r($result);
    if ($result) {
        $rows = mysqli_affected_rows($conn);
        // echo $rows;
        if ($rows > 0) { // 新增成功
            $obj['code'] = 0;
            $obj['msg'] = '添加成功';
        } else {
            $obj['code'] = 1;
            $obj['msg'] = '添加失败';
        }
    } else {
        $obj['code'] = -1;
        $obj['msg'] = 'sql语句有误';
        $obj['sql'] = $sql;
    }

} else {
    $obj['code'] = -1;
    $obj['msg'] = 'sql语句有误';
    $obj['sql'] = $sql;
}
//解析成JSON数据
echo json_encode($obj);

