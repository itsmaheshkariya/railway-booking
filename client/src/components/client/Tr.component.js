import React, { Component } from 'react';
import Td from './Td.component';
import Btn from './Btn.component'
export default class Tr extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){


    }

    render() {
        return (
                <tr>
                    {
                        this.props.rows.map((eachitem)=>

                            <Td  title={this.props.title} key={eachitem} row={eachitem} tditem={this.props.item} />
                        )
                    }
                    {/* {
                        this.props.btns.map((eachitem)=>
                            <Btn title={this.props.title} key={eachitem} btn={eachitem} btnitem={this.props.item} />
                        )
                    } */}
                </tr>
        )
    }
}
