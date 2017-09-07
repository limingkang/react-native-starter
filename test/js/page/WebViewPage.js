import React, {PropTypes,Component} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid, BackAndroid, ActivityIndicator} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainPage from './MainPage';

export default class WebViewPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        //创建一个原生的WebView，可以用于访问一个网页，页可播放视屏,直接写一个网页地址进uri即可
        const data = this.props.rowData;
        return(
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: "http://v.youku.com/v_show/id_XMTg0MzgyOTQ5Mg==.html?spm=a2hzp.8253869.0.0"}}
                    style={styles.webView}
                    renderLoading={this._renderLoading.bind(this)}
                    startInLoadingState={true}
                    onLoad={this._showTips.bind(this, 'load')}
                    onError={this._showTips.bind(this, 'error')}
                />
                <View style={styles.bottom}>
                    <Icon name="favorite-border" color='#58c900' size={px2dp(22)}/>
                    <Icon name="chat-bubble-outline" size={px2dp(22)} color={theme.grayColor} style={{marginLeft: px2dp(17)}}/>
                    <Icon name="share" size={px2dp(22)} color={theme.grayColor} style={{marginLeft: px2dp(17)}}/>
                    <View style={styles.info}>
                        <Text style={{fontSize: 13}} onPress={()=>{this.gomain('canshu')}}>点击回到首页</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize: 13}}>{data}</Text>
                    </View>
                </View>
            </View>
        );
    }

    _showTips(msg){
        //ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    gomain(rowData){
        this.props.navigator.push({
            component: MainPage,
            args: {rowData: rowData}
        });
    }

    _renderLoading(){
        return(
            <View style={{justifyContent: 'center', paddingTop: px2dp(20)}}>
                <ActivityIndicator color={theme.themeColor} size="large"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    bottom: {
        width: theme.screenWidth,
        height: px2dp(49),
        backgroundColor: '#fff',
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#c4c4c4',
        flexDirection: 'row',
        paddingLeft: px2dp(20),
        paddingRight: px2dp(20),
        alignItems: 'center'
    },
    info:{
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems:'center',
    }
});