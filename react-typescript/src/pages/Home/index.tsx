import React from "react";
import { Uploader } from 'react-vant'
import userServe from "../../server/userServer";
function Home() {
    const defaultValue: any = [

    ]

    const getUploader = async (params: any) => {
        console.log(params, 'params');
        const obj = {
            name: "测试图1",
            url: params[0].url
        }
        // console.log(obj);

        const res = await userServe.add(obj);
        console.log(res, '上传');

    }

    return (
        <div>
            <h1>图片上传</h1>
            <Uploader
                accept='*'
                defaultValue={defaultValue}
                onChange={getUploader}
            />

        </div>
    )
}

export default Home