import { useParams } from "react-router-dom"

export function Questionnaire() {
  const { id } = useParams()
  return <h1>Questionnaire {id}</h1>
}