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
      <h2>What is a Usability Engineering Questionnaire</h2>
    </section>
    <section>
      <h2>FAQ</h2>
      <h3>How does it work</h3>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
      <h3>Do I need an account</h3>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
      <h3>What does it cost</h3>
      <p>lorem-ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet</p>
    </section>
  </div>
}