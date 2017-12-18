import React from 'react';
import {View,} from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './reducers'

import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
    return (
    <Provider store={createStore(Reducers)}>
        <View style={{ flex:1 }}>
        <Header title="Redux Tips" />
        <LibraryList />
        </View>
    </Provider>
    );
}

export default App;