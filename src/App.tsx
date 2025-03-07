import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, page }) => {
          const PageComponent = page;
          const MyApp = () => {
            return (
              <div className="my-app">
                <header className="header header--sticky">
                  <HeaderComponent />
                </header>
                <PageComponent />
                <footer className="footer"></footer>
              </div>
            );
          };
          return <Route key={path} path={path} element={<MyApp />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
