import React from "react";
import { Spin } from "antd"

function Loading() {
    return (
        <div>
            <Spin tip="加载中" size="large">
                <div className="content" />
            </Spin>
        </div>
    )
}

export default Loading