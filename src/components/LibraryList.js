import React,{Component} from 'react'
import {View,Text,ListView} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Listitem from './Listitem'

class LibraryList extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2 
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }
    
    renderRow(library){
        return <Listitem library={library} />
    }
    render(){
        // console.log(this.props);
        return (
                <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                 />
        );
    }
}

const mapStateToProps = state => {
    return ({libraries:state.librariers})
}
export default connect(mapStateToProps)(LibraryList);