import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card.js";
import Colors from "../constants/colors.js";
import Input from "../components/Input.js";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
		Dimensions.removeEventListener("change", updateLayout);
	};
  });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmContainer}>
        <Text>You Selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          style={styles.button}
          title="Start the Game"
          onPress={() => props.onStartGame(selectedNumber)}
        >
          Start The Game!
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
              <Text style={styles.text}>Select a Number</Text>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Colors.accent}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  //   button: {
  //     // width: 100,
  //     width: Dimensions.get("window").width / 4,
  //   },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default StartGameScreen;
