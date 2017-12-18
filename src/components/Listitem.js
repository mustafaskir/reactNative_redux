import React,{Component} from 'react'
import {Text,TouchableWithoutFeedback,View,LayoutAnimation,UIManager,Platform} from 'react-native'
import {CardSection} from './common'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import * as actions from '../actions'

class Listitem extends Component{

    constructor(){
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
          }
    }

    renderDesc(){
        const { library,expanded } = this.props;
        const { desc } = styles;
        if(expanded){
            return (
                <CardSection>
                    <Text style={desc}>
                        {library.desc}
                    </Text>
                </CardSection>
            );
        }
    }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    render(){
        const { title } = styles;
        // const { id,title } = this.props.library;
        return(
            <TouchableWithoutFeedback
            onPress={ () => this.props.selectLibrary(this.props.library.id) }
            >
                <View>
                    <CardSection>
                        <Text style={title}>{this.props.library.title}</Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = {
    title:{
        fontSize:18,
        paddingLeft:15,
        flex:1,
        textAlign:'center',
    },
    desc:{
        flex:1,
        textAlign:'center',
        padding:20,
        fontSize:16,
        color:'grey'
    }
}

const mapStateToProps = (state,ownProps) => {
    const expanded = ownProps.library.id === state.selectedLibrary;
    return {expanded}
}

export default connect(mapStateToProps,actions)(Listitem);