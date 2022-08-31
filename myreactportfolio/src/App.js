import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Contact from "./screens/ContactScreen";
import ProjectScreen from "./screens/ProjectsScreen";
import ExperienceScreen from "./screens/ExperienceScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/MyReactPortfolio/" element={<HomeScreen />} />
            <Route
              path="/MyReactPortfolio/projects"
              element={<ProjectScreen />}
            />
            <Route
              path="/MyReactPortfolio/experience"
              element={<ExperienceScreen />}
            />
            <Route path="MyReactPortfolio/contact" element={<Contact />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
