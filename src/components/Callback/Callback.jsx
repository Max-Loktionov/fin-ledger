import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { SectionTitle } from "../About/About.styled";
import { ContactImgWrapper, CallbackButton, CallbackBox, Form, Input, ErrorText } from "./Callback.styled";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

export default function Callback() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  //   setFocus,
  //   watch,
  // } = useForm({
  //   mode: "onBlur",
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <ContactImgWrapper />
      <CallbackBox>
        <SectionTitle>Request Callback</SectionTitle>

        {/* <form onSubmit={handleSubmit(onSubmit)}>
         
          <input defaultValue="test" {...register("example")} />

         
          <input {...register("exampleRequired", { required: true })} />
        
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form> */}

        <Form onSubmit={handleSubmit(onSubmit)} name="contact" netlify netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <Input
            label="Name"
            {...register("name", {
              required: "This is required",
              pattern: { value: "/[a-zA-Z]+/", message: "Enter only letters" },
            })}
            type="text"
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            {...register("email", {
              required: "This is required",
              // pattern: { value: emailRegex, message: "Check your email" },
            })}
            type="email"
            placeholder="Enter email*"
          />
          <ErrorText>{errors?.email && <p>{errors?.email?.message}</p>}</ErrorText>
          <CallbackButton type="submit">Send</CallbackButton>
        </Form>
      </CallbackBox>
    </section>
  );
}
