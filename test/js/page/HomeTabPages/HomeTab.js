'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import computeTime from '../../util/computeTime';
import theme from '../../config/theme';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: []
        };
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        return (
            <ScrollView
                style={{}}
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
                { this._renderContents() }
            </ScrollView>
        );
    }

    _renderContents() {
        var {tabTag} = this.props;
        if (tabTag === '首页')
            tabTag = '热门推荐';
        else
            tabTag += '热门';

        if (!this.state.refreshing || this.state.loadedData) {
            return (
                <View>
                    { tabTag === '热门推荐' ?
                        <Text>热门推荐{this.state.dataBlob}</Text>
                        :
                        <Text>热门{this.state.dataBlob}</Text>
                    }
                </View>
            );
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }

    _fetchData() {
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
}
