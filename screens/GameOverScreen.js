import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
	<SafeAreaView>
	<ScrollView>
      <View style={styles.screen}>
        <TitleText>This Game is Over!!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            // source={{uri: 'https://now.northropgrumman.com/wp-content/uploads/2017/11/11.07.17_mt_everest.jpg'}}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
	</ScrollView>
	</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
	alignItems: "center",
	paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    fontSize: 24,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 40,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
