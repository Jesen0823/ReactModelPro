import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Hot from './component/Hot';
import Recommend from './component/Recommend';
import Follow from './component/Follow';

class App extends Component{

  render(){
    return(
        <Router>
            <div className="App">
                <nav>
                    <li>
                        <Link to="/">推荐</Link>
                    </li>
                    <li>
                        <Link to="/hot/">热门</Link>
                    </li>
                    <li>
                        <Link to="/follow/">关注</Link>
                    </li>
                </nav>
                <br/>
                <br/>
                <br/>
                <hr/>
                <Route path ="/" component={Recommend}/>
                <Route path ="/hot/" component={Hot}/>
                <Route path ="/follow/" component={Follow}/>

            </div>
        </Router>
    );
  }
}

export default App;
