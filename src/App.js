import "./App.css";
import BannerBG from "./components/big/BannerBG";
import Banner from "./components/big/Banner";
import Technologies from "./components/medium/Technologies";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh", width: "100vw" }}>
        <BannerBG />
        <Banner />
      </div>
      <Technologies />
    </div>
  );
}

export default App;
