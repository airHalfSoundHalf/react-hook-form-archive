import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("email"));

  return (
    <form
    // onSubmit={handleSubmit(onSubmit)}
    >
      <label>Email</label>
      <input type="email" {...register("email")} />
      {errors.email && <p>이메일을 올바르게 입력하세요.</p>}
      <label>Name</label>
      <input name="name" />
      <label>Password</label>
      <input name="password" type="password" />
      <label>Password Confirm</label>
      <input name="password_confirm" type="password" />
      <input type="submit" />
    </form>
  );
}

export default App;
