import React,{Component} from "react";

class Login extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state={
            num:0
        }
    }

    add=()=>{
        this.setState({num:this.state.num+10})
    }

    componentDidMount() {
        console.log('页面加载完成')
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log(prevProps,'prevProps')
        console.log(prevState,'prevState')
    }

    componentWillUnmount() {
        console.log('卸载组件')
    }


    render() {
        const {num}=this.state
        return (
            <div>
                <h1>num:{num}</h1>
                <button onClick={this.add}>+10</button>
            </div>
        )
    }
}

export default Login;