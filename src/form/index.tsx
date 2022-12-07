import { useForm } from "react-hook-form";
import { useRef } from "react";

// interface ILoginForm {
//   email: string;
//   password: string;
//   password_Confirm: string;
// }

function FormNumberOne() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    // setError,
  } = useForm();
  console.log(watch("email"));

  const password = useRef();
  password.current = watch("password");

  const onValid = (data: any) => {
    console.log(data);
  };

  // const onSubmit = (data: any) => {
  //   console.log("data", data);
  // };

  // const onValid = (data: ILoginForm) => {
  //   if (data.password !== data.password_Confirm) {
  //     setError(
  //       "pwConfirm", // 에러 핸들링할 input요소 name
  //       { message: "비밀번호가 일치하지 않습니다." }, // 에러 메세지
  //       { shouldFocus: true } // 에러가 발생한 input으로 focus 이동
  //     );
  //   }
  //   return data;
  // };

  // function getMessage(message: string) {
  //   return message || "";
  // }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: true,
          // pattern: {
          //   value: /^S+@S+$/i,
          //   message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
          // },
        })}
        // {...register("email", {
        //   required: true,
        //   pattern: {
        //     // input의 정규식 패턴
        //     value: /^[A-za-z0-9가-힣]{3,10}$/,
        //     message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자", // 에러 메세지
        //   },
        // })}
        // placeholder="닉네임을 입력해주세요"
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
      <input
        type="password"
        {...register("password_confirm", {
          validate: (value) => value === password.current,
        })}
        required={true}
      />

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

export default FormNumberOne;
