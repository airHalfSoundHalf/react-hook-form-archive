import "./App.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function App() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(watch("email"));

  const password = useRef();

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email")}
        required={true}
        // pattern={"/^S+@S+$/i"}
      />
      {errors.email && <p>이메일을 올바르게 입력하세요.</p>}
      <label>Name</label>
      <input name="name" />
      {errors.name && <p>이메일을 올바르게 입력하세요.</p>}
      <label>Password</label>
      <input
        // name="password"
        type="password"
        {...register("password")}
        required={true}
        minLength={6}
      />
      {errors.password && <p>패스워드를 올바르게 입력하세요.</p>}
      <label>Password Confirm</label>
      <input type="password" {...register("password")} required={true} />

      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <p>비밀번호를 입력하세요.</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>비밀번호와 중복 비밀번호가 일치하지 않습니다.</p>
        )}
      <input type="submit" />
    </form>
  );
}

export default App;
