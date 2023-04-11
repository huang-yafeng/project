import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    add = () => {
        this.setState({
            num: this.state.num + 1
        }, () => {
            console.log(this.state.num, '异步更细');
        })

        console.log(this.state.num, '同步更新');
    }


    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.add}>更新</button>
            </div>
        )
    }
}

export default Home;