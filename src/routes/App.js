import { Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "../layout/header";
import Topheader from "../layout/topheader";
import AllRoutes from ".";
import Footer from "../layout/footer";

function App() {
  return (
    <div>
      <Topheader />
      <Header />
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <Route
              key={item.name}
              name={item.name}
              exact={true}
              path={item.path}
              element={<item.element />}
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
