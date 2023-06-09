import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReactComponent as WarningIcon } from "../../assets/images/form/worning.svg";
import { SectionTitle } from "../About/About.styled";
import {
  CallbackSection,
  CallbackImgWrapper,
  CallbackButton,
  CallbackBox,
  FormWrapper,
  Form,
  Input,
  ErrorText,
  Label,
  Placeholder,
} from "./Callback.styled";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Callback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });
      alert("Success!");
      reset();
    } catch (error) {
      (error) => alert(error);
    }
  };

  return (
    <CallbackSection>
      <CallbackImgWrapper />
      <CallbackBox>
        <SectionTitle>Request Callback</SectionTitle>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)} name="contact" netlify netlify-honeypot="bot-field" autoComplete="on">
            <input type="hidden" name="form-name" value="contact" />

            <Label>
              <Input
                label="Name"
                {...register("name", {
                  required: "This is required",
                  pattern: { value: "/[a-zA-Z]+/", message: "Enter only letters" },
                })}
                type="text"
                placeholder="Enter your name"
              />
              <Placeholder>Enter your name</Placeholder>
            </Label>
            <Label>
              <Input
                label="Email"
                {...register("email", {
                  required: "This is required",
                })}
                type="email"
                placeholder="Enter email*"
              />
              <Placeholder>Enter email*</Placeholder>
            </Label>
            <ErrorText>
              {errors?.email && (
                <>
                  <WarningIcon />
                  <p>{errors?.email?.message}</p>
                </>
              )}
            </ErrorText>
            <CallbackButton type="submit" aria-label="button for submit contact form">
              Send
            </CallbackButton>
          </Form>
        </FormWrapper>
      </CallbackBox>
    </CallbackSection>
  );
}
