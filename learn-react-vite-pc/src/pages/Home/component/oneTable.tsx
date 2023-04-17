import React, {forwardRef, useImperativeHandle} from 'react';

function OneTable(props: any) {
    const {refInstance} = props
    useImperativeHandle(refInstance, () => ({
        query: () => {
            return {
                code: 200,
                data: [],
                msg: "返回的数据",
                type:false
            }
        }
    }))
    return (
        <div>
            Login
        </div>
    );
}

export default forwardRef((props, ref) => <OneTable {...props} refInstance={ref}/>);