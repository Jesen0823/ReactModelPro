import {Component} from "react";
import url from 'url';
import { URL, URLSearchParams }from 'universal-url';

export default class HotDetail extends Component{

    constructor(props) {
        super(props);
        this.state ={

        };
    }

    render(){
        return(
            <div>
                详情页
            </div>
        )
    }

    componentDidMount() {
        /*const url1 = new URL('https://user:pass@host.com:8080/p/a/t/h?query=string#hash');
        const lid = url1.searchParams.get('query');
        console.log(lid);
        console.log(this.props);*/
        console.log(url.parse(this.props.location.search,true).query);
    }
}