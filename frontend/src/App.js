import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import HomePage from "./pages/HomePage/Homepage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import FaqPage from "./pages/FAQPage/FaqPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* These are the routing before Login*/}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
