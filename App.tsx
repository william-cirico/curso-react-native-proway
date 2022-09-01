import { StatusBar } from "react-native";
import { DrawerLayoutAndroidComponent } from "./components/DrawerLayoutAndroidComponent";
import FlatListComponent from "./components/FlatListComponent";
import { ScrollViewComponent } from "./components/ScrollViewComponent";
import { ToastComponent } from "./components/ToastComponent";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <DrawerLayoutAndroidComponent /> */}
      {/* <ToastComponent /> */}
      {/* <ScrollViewComponent /> */}
      <FlatListComponent />
    </>
  );
}
