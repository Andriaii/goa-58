import React from "react";
import Nav from "./Components/Nav";
import AboutOurWebPage from "./Sections/AboutOurWebPage";
import ContactUs from "./Sections/ContactUs";
import Services from "./Sections/Services";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <AboutOurWebPage />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;
