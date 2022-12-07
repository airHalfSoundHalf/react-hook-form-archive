// @ts-nocheck
import React, { useState } from "react";
import { useForm, useFormState, useWatch } from "react-hook-form";
import Headers from "./Header";
// import "./styles.css";

let renderCount = 0;

type FormParams = {
  control: any;
  register: string | undefined;
  name: string | undefined;
  rules: string | undefined;
  render: string | undefined;
};

const Controller = ({ control, register, name, rules, render }: FormParams) => {
  const value = useWatch({
    control,
    name,
  });
  const { errors } = useFormState({
    control,
    name,
  });
  const props = register(name, rules);

  console.log(errors);

  return render({
    value,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

const Input = (props) => {
  const [value, setValue] = React.useState(props.value || "");

  const book = { title: "책" };
  const setBook = "js";
  book[setBook] = "js책";
  console.log("book:", book);
  // js: 'js책' , title: '책';

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};

export default function Form03() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const [submittedVal, setSubmittedVal] = useState();
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedVal(data);
  };
  renderCount++;

  console.log("errors", errors);

  React.useEffect(() => {
    setTimeout(() => {
      setValue("lastName", "test");
    }, 1000);
  }, [setValue]);

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />

        <Controller
          {...{
            control,
            register,
            name: "lastName",
            rules: {
              required: true,
            },
            render: (props: any) => <Input {...props} />,
          }}
        />

        <input type="submit" />
      </form>
      {submittedVal && (
        <div>
          Submitted Data:
          <br />
          {JSON.stringify(submittedVal)}
        </div>
      )}
    </div>
  );
}
