import { useNavigate } from "react-router-dom";


export function Home() {
  let navigate = useNavigate();

  const createUEQ = () => {
    navigate(`/q/create/`);
  }
  return <div>
    <section>
      <h1>Jetzt online UEQ Fragebogen anlegen und analysieren</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.</p>
      <button onClick={createUEQ}>Jetzt kostenlos UEQ erstellen*</button>
      <p>*kein Account erforderlich</p>
    </section>
    <section>
      <h1>FAQ</h1>
      <h2>How does it work</h2>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
      <h2>Do I need an account</h2>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
      <h2>What does it cost</h2>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
    </section>
  </div>
}