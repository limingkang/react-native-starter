'use strict';

import React, {Component} from 'react';
import {Text, View, BackHandler, ToastAndroid, Platform} from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';
import SplashScreen from '../native_modules/SplashScreen';

export default class MainScene extends Component{
    constructor(props){
        super(props);
        MainScene.switchToWebViewPage = MainScene.switchToWebViewPage.bind(this);
    }

    static switchToWebViewPage(rowData){
        this.props.navigator.push({
            component: WebViewPage,
            args: {rowData: rowData}
        });
    }

    componentDidMount(){
        // 解决启动白屏的问题，必须在android原生中导出SplashScreen类
        if(Platform.OS === 'android')
            SplashScreen.hide();
        BackHandler.addEventListener('hardwareBackPress', function () {
            BackHandler.exitApp(0);
            return true;
        });
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}