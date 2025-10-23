import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ExperienciaIT } from "./components/It/ExperienciaIt";
import { ExperienciaDiseñador } from "./components/Diseñador/ExperienciaDiseñador";
import { ExperienciaAdministrativo } from "./components/ExperienciaAdministrativo/ExperienciaAdministrativo";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/it" element={<ExperienciaIT></ExperienciaIT>}></Route>
        <Route
          path="/diseñador"
          element={<ExperienciaDiseñador></ExperienciaDiseñador>}
        ></Route>
        <Route
          path="/administrativo"
          element={<ExperienciaAdministrativo></ExperienciaAdministrativo>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
