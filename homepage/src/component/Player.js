/**
 * Created by Administrator on 2017/11/22.
 */
import  React, {Component} from 'react'
import './player.css'

class Player extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       return <video src={this.props.src} controls />
    }
}

export default Player;