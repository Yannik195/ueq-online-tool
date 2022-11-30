import { Routes as RoutesDom, Route } from "react-router-dom";
import { Home } from "../Pages/Home"
import { Fill } from "../Pages/q/fill"
import { Create } from "../Pages/q/create"
import { Evaluate } from "../Pages/q/evaluate"

export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/q/fill/:id" element={<Fill />} />
      <Route path="/q/create/" element={<Create />} />
      <Route path="/q/evaluate/:id" element={<Evaluate />} />
    </RoutesDom>
  )
}