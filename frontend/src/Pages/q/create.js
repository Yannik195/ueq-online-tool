import axios from 'axios';
import { useForm } from "react-hook-form";

export function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // axios.post(`http://localhost:3001/api/questionnaire`, data)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  };

  return (
    <header className="App-header">
      <h1>Create a new questionnaire</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='product'>
          <strong>Product</strong> {errors.product && <span>required</span>}
          <br />
          <input
            id='product'
            placeholder="Product"
            {...register("product", {
              required: true,
              maxLength: 35,
            })}
          />
          <p>Die Bezechnung des Produkts, für das ein Questionnaire erstellt werden soll.</p>


        </label>

        <label htmlFor='password'>
          <strong>Password</strong> {errors.password && <span>required</span>}
          <br />
          <input
            id='password'
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          <p>Ein Passwort wird benötigt um die Ergebnisse zu schützen.</p>
        </label>

        <label htmlFor="email">
          <strong>E-Mail</strong> {errors.email && <span>required</span>}
          <br />
          <input
            id='email'
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          <p>An die E-Mail Adresse werden Informationen über das angelegte Questionnaire gesendet.</p>
          <p>Die E-Mail Adresse wird den Probanden für potentielle Rückfragen angezeigt.</p>
        </label>

        <fieldset>
          <legend><strong>UEQ Version</strong></legend>

          <label htmlFor="version_long">
            <input {...register("ueq_version")} type="radio" id="version_long" value="long" checked="checked" />
            Long
          </label>

          <br></br>

          <label htmlFor="version_short">
            <input {...register("ueq_version")} type="radio" id="version_short" value="short" />
            Short
          </label>

          <p>Wählen, ob du die lange oder kurze Version des UEQ verwendet werden soll.</p>

        </fieldset>

        <fieldset>
          <legend><strong>Demographic Data</strong></legend>
          <input {...register("demographics")} type="checkbox" value="age" id="demographics_age" />
          <label htmlFor="demographics_age">Age</label>
          <br />
          <input {...register("demographics")} type="checkbox" value="gender" id="demographics_gender" />
          <label htmlFor="demographics_gender">Gender</label>
          <br />
          <input {...register("demographics")} type="checkbox" value="education" id="demographics_education" />
          <label htmlFor="demographics_education">Education</label>

          <p>Auswählen, welche Demographischen Daten erhoben werden sollen. Die Angaben sind für die Probanden Optional.</p>

        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </header>
  );
}