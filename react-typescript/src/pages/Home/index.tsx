import React, { Component } from 'react'
import { connect } from "react-redux"
class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 1
        }
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('更新');
        console.log(prevState, 'prevState');
        console.log(prevProps, 'prevProps');
    }


    componentDidMount(): void {
        console.log('页面加载完成');
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): any {
        console.log(nextProps,'nextProps');
        console.log(nextState,'nextState');
        return true
    }

    componentWillUnmount(): void {
        console.log('组件卸载');
    }

    add = () => {
        console.log(this.props,'props')
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        const { num } = this.state
        return (
            <div>
                <h1>{num}</h1>
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => ({ ...state })
export default connect((state:any)=>({...state}))(Home);
