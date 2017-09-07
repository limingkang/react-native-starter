'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CustomTabBar extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	        data: "test"
	    };
	}

    render() {
        return (
            <View>
                {this.props.tabNames.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }

    renderTabOption(tab, i) {
      const color = this.props.activeTab == i? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
      return (
        <TouchableOpacity onPress={()=>this.props.goToPage(i)} key={i}>
            <View>
                <Text style={{color: color}}>
                    {this.props.tabNames[i]}
                </Text>
            </View>
        </TouchableOpacity>
       );
    }
}