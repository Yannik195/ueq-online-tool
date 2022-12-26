import { Routes as RoutesDom, Route } from "react-router-dom";
import { Home } from "../Pages/Home"
import { Fill } from "../Pages/q/fill"
import { Create } from "../Pages/q/create"
import { Evaluate } from "../Pages/q/evaluate"
import { Confirmation } from "../Pages/q/confirmation"

export default function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/q/fill/:link_uuid" element={<Fill />} />
      <Route path="/q/create/" element={<Create />} />
      <Route path="/q/evaluate/:link_uuid" element={<Evaluate />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </RoutesDom>
  )
}