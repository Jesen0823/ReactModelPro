import {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class Hot extends Component{
    constructor(props) {
        super(props);
        this.state ={
            list:[
                {lid:"001",title:"第1条热门"},
                {lid:"002",title:"第2条热门"},
                {lid:"003",title:"第3条热门"},
                {lid:"004",title:"第4条热门"},
            ]
        };
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.list.map((value,index)=>{
                        return(
                            <li key={index}>
                                <Link to={`/hot_detail?lid=${value.lid}`}>
                                    {value.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        // 动态路由组件取值
        console.log(this.props.match.params.hid);
    }
}