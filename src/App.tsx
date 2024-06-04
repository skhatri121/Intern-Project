import { Toaster } from "react-hot-toast";
import HeaderFooter from "./Components/HeaderFooter";
import RoutePath from "./Route/RoutePath";

function App() {
  return (
    <>
      <HeaderFooter>
        <RoutePath />
      </HeaderFooter>
      <Toaster />
    </>
  );
}

export default App;
