import React, { useEffect } from "react";
// import 
function List() {
    useEffect(() => {
        const h1 = React.createElement('h1',{name:'div'}, '你好啊');
        console.log(h1.props);
    }, [])
    return (
        <div>
            list
            {React.createElement('h1', {}, <div>11111</div>)}
        </div>
    )
}

export default List;