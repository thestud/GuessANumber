import React from 'react';
import {Text, StyleSheet} from 'react-native';


// const BodyText = props => <Text style={{...styles.bodyText, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	bodyText: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		color: 'blue',
	}

});

// export default BodyText;
export default props => <Text style={{...styles.bodyText, ...props.style}}>{props.children}</Text>;