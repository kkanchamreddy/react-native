/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 import React, { Component } from 'react';
 import {
 	AppRegistry,
 	NavigatorIOS,
 	StyleSheet
 } from 'react-native';

var SearchScreen = require('./SearchScreen');

class NativeReact extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Movies',
					component: SearchScreen,
				}}
			/>
		);
	}
};

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

AppRegistry.registerComponent('NativeReact', () => NativeReact);
