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
    axios.post(`http://localhost:3001/api/questionnaire`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  return (
    <header className="App-header">
      <h1>Create a new questionnaire</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product
          <input
            {...register("product", {
              required: true,
              maxLength: 35,
            })}
          />
        </label>

        <label>Password
          <input
            {...register("password", {
              required: true,
            })}
          />
        </label>

        <label>E-Mail
          <input
            {...register("email", {
              required: true,
            })}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

    </header>
  );
}