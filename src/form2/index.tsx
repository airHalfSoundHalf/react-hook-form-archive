import { useForm } from "react-hook-form";
import Headers from "../Header";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  developer: string;
};

export default function FormTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;
  console.log(watch("firstName"));

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        {...register("firstName", { required: "first error" })}
      />
      {errors.firstName?.message}

      <label htmlFor="lastName">Last Name:</label>
      <input {...(register("lastName"), { required: true, maxLength: 6 })} />
      {errors.firstName?.message}

      <label htmlFor="age">Age</label>
      <input type="number" {...register("age")} id="age" />

      <label htmlFor="gender"></label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input {...register("developer")} value="yes" type="checkbox" />

      <input type="submit" />
    </form>
  );
}
