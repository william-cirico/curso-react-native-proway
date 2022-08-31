import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';

export default function App() {
  const [operation, setOperation] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  function handleOperationPress(operation: string) {
    setOperation(operation);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }

  function handleNumberPress(number: string) {
    if (firstNumber.length < 11) {
      if (firstNumber === "0.0") {
        setFirstNumber(number);
      } else {
        setFirstNumber(firstNumber + number);
      }
    }
  }

  function getFirstNumber() {
    if (!firstNumber) {
      return <Text style={styles.displayFirstNumber}>0.0</Text>
    }

    if (firstNumber.length > 6 && firstNumber.length <= 8) {
      return <Text style={[styles.displayFirstNumber, { fontSize: 70 }]}>{firstNumber}</Text>
    }

    if (firstNumber.length > 8) {
      return <Text style={[styles.displayFirstNumber, { fontSize: 50 }]}>{firstNumber}</Text>
    }

    return <Text style={styles.displayFirstNumber}>{firstNumber}</Text>
  }

  function handleBackspacePress() {
    setFirstNumber(firstNumber.slice(0, -1));
  }

  function handleClearPress() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  }

  function getResult() {
    let result = 0;
    switch (operation) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        handleClearPress();
        setFirstNumber(result.toString());
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        handleClearPress();
        setFirstNumber(result.toString());
        break;
      case "÷":
        result = Number(firstNumber) / Number(secondNumber);
        handleClearPress();
        setFirstNumber(result.toString());
        break;
      case "×":
        result = Number(firstNumber) * Number(secondNumber);
        handleClearPress();
        setFirstNumber(result.toString());
        break;
      case "%":
        result = Number(firstNumber) % Number(secondNumber);
        handleClearPress();
        setFirstNumber(result.toString());
        break;
      case "+/-":
        break;
      default:
        handleClearPress();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displaySecondNumber}>
          {secondNumber} <Text style={styles.displayOperation}>{operation}</Text>
        </Text>
        {getFirstNumber()}
      </View>
      <View style={styles.row}>
        <Button text="C" onPress={() => handleClearPress()} isGray />
        <Button text="+/-" onPress={() => handleOperationPress("+/-")} isGray />
        <Button text="%" onPress={() => handleOperationPress("%")} isGray />
        <Button text="÷" onPress={() => handleOperationPress("÷")} isBlue />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => handleNumberPress("7")} />
        <Button text="8" onPress={() => handleNumberPress("8")} />
        <Button text="9" onPress={() => handleNumberPress("9")} />
        <Button text="×" onPress={() => handleOperationPress("×")} isBlue />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => handleNumberPress("4")} />
        <Button text="5" onPress={() => handleNumberPress("5")} />
        <Button text="6" onPress={() => handleNumberPress("6")} />
        <Button text="-" onPress={() => handleOperationPress("-")} isBlue />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => handleNumberPress("1")} />
        <Button text="2" onPress={() => handleNumberPress("2")} />
        <Button text="3" onPress={() => handleNumberPress("3")} />
        <Button text="+" onPress={() => handleOperationPress("+")} isBlue />
      </View>
      <View style={styles.row}>
        <Button text="." onPress={() => handleNumberPress(".")}  />
        <Button text="0" onPress={() => handleNumberPress("0")}  />
        <Button text="⌫" onPress={() => handleBackspacePress()} />
        <Button text="=" onPress={() => getResult()} isBlue />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row"
  },
  display: {
    height: 120,
    width: "84%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  displayFirstNumber: {
    fontSize: 96,
    fontWeight: "200",
    color: "#fff"
  },
  displaySecondNumber: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  displayOperation: {
    color: "#4B5EFC",
    fontSize: 50,
    fontWeight: "500"
  }
});
