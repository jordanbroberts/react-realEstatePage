import { Fragment } from "react";
import "./App.css";
import CallToAction from "./Components/CallToAction/CallToAction";
import ContentAds from "./Components/ContentAds/ContentAds";
import FeaturedPropertiesSlider from "./Components/FeaturedProperties/FeaturedPropertiesSlider";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderSlider from "./Components/HeaderSlider/HeaderSlider";
import SearchElement from "./Components/SearchElement/SearchElement";

function App() {
  return (
    <Fragment>
      <Header />
      <HeaderSlider />
      <SearchElement />
      <CallToAction />
      <FeaturedPropertiesSlider />
      <ContentAds />
      <Footer />
    </Fragment>
  );
}

export default App;
