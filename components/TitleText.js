import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	bodyText: {
		fontFamily: 'open-sans-bold',
		fontSize: 30,
		color: 'blue',
	}

});

export default props => <Text style={{...styles.bodyText, ...props.style}}>{props.children}</Text>;