var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import 'antd/dist/antd.css'
// import { Button, Flex, WingBlank } from 'antd-mobile';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));