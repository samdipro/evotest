import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function ShoppingBasket() {
  const [goods, setGoods] = useState("");
  const [price, setPrice] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState("local");
  const [category, setCategory] = useState("others");
  const [cart, setCart] = useState([]);

  const addCart = () => {
    try {
      // check
      if (!goods || !price) {
        throw new Error("Please, complete the input.");
      }

      // create
      const newItem = {
        goods,
        price: parseFloat(price),
        type,
        category,
      };

      setCart([...cart, newItem]);
      setGoods("");
      setPrice("");
    } catch (error) {
      alert(error);
    }
  };

  // calculate function
  const calculateTax = (price, type, category) => {
    let taxRate = 0;
    if (type === "import") {
      taxRate += 5;
    }
    if (category !== "book" && category !== "food" && category !== "medical") {
      taxRate += 10;
    }
    const tax = Math.ceil(((price * taxRate) / 100) * 20) / 20;
    return tax;
  };

  // process order from cart
  const processInput = () => {
    try {
      if (!cart) {
        throw new Error("Please, complete the input.");
      }

      let totalCost = 0;
      let totalTaxes = 0;

      const receiptDetails = cart.map((item, index) => {
        const tax = calculateTax(item.price, item.type, item.category);
        const itemCost = item.price + tax;
        totalTaxes += tax;
        totalCost += itemCost;

        return `1 ${item.type === "import" ? item.type + "ed" : null} ${
          item.category
        } - ${item.goods} - Rp ${itemCost.toFixed(2)}`;
      });

      const receipt = [
        ...receiptDetails,
        `Sales Taxes: ${totalTaxes.toFixed(2)}`,
        `Total: ${totalCost.toFixed(2)}`,
      ];

      setOutput(receipt.join("\n"));
      setCart([]);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shopping Basket</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Goods"
          value={goods}
          onChangeText={(val) => setGoods(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price (Rp)"
          keyboardType="numeric"
          value={price.toString()}
          onChangeText={(val) => setPrice(val)}
        />
      </SafeAreaView>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Type:</Text>
        <Picker
          selectedValue={type}
          onValueChange={(val) => setType(val)}
          style={styles.picker}
          mode={Platform.OS === "ios" ? "dropdown" : "dialog"} // Adjust for iOS and Android
        >
          <Picker.Item label="Local" value="local" />
          <Picker.Item label="Import" value="import" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(val) => setCategory(val)}
          style={styles.picker}
          mode={Platform.OS === "ios" ? "dropdown" : "dialog"} // Adjust for iOS and Android
        >
          <Picker.Item label="others" value="others" />
          <Picker.Item label="book" value="book" />
          <Picker.Item label="food" value="food" />
          <Picker.Item label="medical" value="medical" />
        </Picker>
      </View>
      <Button title="Add to Cart" onPress={addCart} />
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart:</Text>
        {cart.map((item, index) => (
          <Text key={index}>
            1 {item.type === "import" ? item.type + "ed" : null} {item.category}{" "}
            - {item.goods} - Rp {item.price}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.button}>
        <Button title="Process" onPress={processInput} />
      </View>
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Result:</Text>
        <Text>{output}</Text>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  picker: {
    flex: 1, // Adjust flex as needed
  },
  cartContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    margin: 10,
  },
});
