import "./App.css";
import FirstSection from "./components/First section/FirstSection";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./components/Our service section/OurServices";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <OurServices></OurServices>
    </div>
  );
}
export default App;