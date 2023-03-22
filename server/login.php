<?php
@header('Content-Type:text/json;charset=utf-8');
@include_once('mysql.php'); //连接MySQL数据库;

// $username = $_POST['username'];
// $password = $_POST['password'];

class userinfo
{
    var $code;
    var $msg;
    var $token;
    var $username;
    var $userid;
    var $phone;
    var $email;

    function setCode($params)
    {
        $this->code = $params;
    }

    function setMsg($params)
    {
        $this->msg = $params;
    }

    function setToken($params)
    {
        $this->token = $params;
    }

    function setUsername($params)
    {
        $this->username = $params;
    }

    function setUserid($params)
    {
        $this->userid = $params;
    }

    function setPhone($params)
    {
        $this->phone = $params;
    }

    function setEmail($params)
    {
        $this->email = $params;
    }
}

$sql = "SELECT * FROM userinfo WHERE username='adm' AND password='123456'";

$res = mysqli_query($conn, $sql);
$resmysql = mysqli_fetch_assoc($res);

$result = new userinfo();


if (!empty($resmysql)) {

    $result->setCode(0);
    $result->setMsg('成功');
    $result->setToken(crypt($resmysql['username'], $resmysql['password']));
    $result->setUsername($resmysql['username']);
    $result->setUserid($resmysql['userid']);
    $result->setPhone($resmysql['phone']);
    $result->setEmail($resmysql['email']);
    setcookie("user", crypt($resmysql['username'], $resmysql['password']), time() + 3600);
} else {
    $result->setCode(1);
    $result->setMsg('失败');
    
}

echo json_encode($result);
