<?php
    @header('Content-Type:text/html;charset=utf-8');
    class userinfo
    {
        var $code;
        var $msg;
        var $username;
        var $password;
        var $userid;
        var $userphone;
        var $useremail;

        function setCode($params){
            $this->code=$params;
        }
        function setMsg($params){
            $this->msg=$params;
        }
        function setUsername($name){
            $this->username=$name;
        }
        function setPassword($name){
            $this->password=$name;
        }

        function setUserid($name){
            $this->userid=$name;
        }

        function setUserphone($name){
            $this->userphone=$name;
        }
        function setUseremail($name){
            $this->useremail=$name;
        }
    }

    $getUsername=new userinfo();
    $getUsername->setCode(200);
    $getUsername->setMsg('成功');
    $getUsername->setUsername('黄亚枫');
    $getUsername->setPassword('123456');
    $getUsername->setUserid('110');
    $getUsername->setUserphone('15512341234');
    $getUsername->setUseremail('123@qq。com');
    echo json_encode($getUsername);



?>