'use strict';

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import MainPage from '../page/MainPage';
// import WebViewPage from '../page/WebViewPage';

export default class Navigation extends Component{
    // route的每次push跳转都会传递component和args如：
    // this.props.navigator.push({
    //     component: WebViewPage,
    //     args: {rowData: rowData}
    // });
    render(){
        return(
        <Navigator
            initialRoute={{component: MainPage}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }></Navigator>
        );
    }

    // componentDidMount(){
    //     if(Platform.OS === 'android')
    //         SplashScreen.hide();
    // }
}