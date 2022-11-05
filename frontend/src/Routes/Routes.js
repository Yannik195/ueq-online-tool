import { Routes as RoutesDom, Route } from "react-router-dom";
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Questionnaire } from "../Pages/Questionnaire"

export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/questionnaire/:id" element={<Questionnaire />} />
    </RoutesDom>
  )
}
