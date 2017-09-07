'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, RefreshControl, ScrollView, ToastAndroid, Image, Dimensions, PixelRatio, Alert, AlertIOS,TouchableOpacity} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import computeTime from '../util/computeTime';
import MainScene from './MainPage';
import Swiper from 'react-native-swiper';

const bannerImages = [
    require('../image/banner1.jpg'),
    require('../image/banner2.png')
];

const imgBtnImages = [
    require('../image/trend.png'),
    require('../image/rank.png'),
    require('../image/hot.png')
];

export default class CompassFragment extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [],
            btnName: ['沸点','贡献榜','本周最热']
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red','#ffd500','#0080ff','#99e600']}
                            tintColor={theme.themeColor}
                            title="Loading..."
                            titleColor={theme.themeColor}
                        />
                    }>
                    <Swiper
                        height={px2dp(130)}
                        autoplay={true}
                        bounces={true}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
                        </View>
                    </Swiper>
                    { this._renderListView() }
                </ScrollView>
            </View>
        );
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }

    _renderListView(){
        if(!this.state.refreshing || this.state.loadedData) {
            return (
                <View contents={this.state.dataBlob}>
                    <Text>底层数据拉取完毕</Text>
                    <TouchableOpacity onPress={this._alert}>
                        <View>
                            <Text>
                                点击跳转到一个大类页面
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    _fetchData(){
        var event=setTimeout(()=>{
            this.setState({
                loadedData: true,
                refreshing: false
            });
            clearTimeout(event);
        },2000);
        // 在这里拉取数据
        // var url = 'http://example.com';
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((responseData) => {               
        //         this.setState({
        //             dataBlob: responseData,
        //             loadedData: true,
        //             refreshing: false
        //         });
        //     }).done();
    }

    componentDidMount(){
        this._fetchData();
    }

    _alert(){
        if(Platform.OS === 'android') {
            Alert.alert(
                'Message',
                "您确定跳转到一个大类页面",
                [{text: 'OK', onPress: () => {MainScene.switchToWebViewPage("big go success")}}]
            );
        }else if(Platform.OS === 'ios'){
            AlertIOS.alert(
                'Message',
                "您确定跳转到一个大类页面",
                [{text: 'OK', onPress: () => {}}]
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    slide: {

    },
    image: {
        height: px2dp(130),
        width: Dimensions.get('window').width
    },
    imageBtnLine:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#c4c4c4'
    },
    imgBtn: {
        height: px2dp(80),
        width: Dimensions.get('window').width/3,
    }
});
