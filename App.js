import "react-native-gesture-handler";
import Navigation from "./Navigation";
import { StatusBar } from "react-native";

function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}

export default App;
