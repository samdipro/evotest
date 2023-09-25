import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShoppingBasket from "./components/ShoppingBasket";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>Samdipro Nainggolan</Text>
        <Text>Test at Evo</Text>
      </View>
      <ShoppingBasket></ShoppingBasket>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
});
