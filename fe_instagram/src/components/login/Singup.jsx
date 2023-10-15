import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Sinup.css";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "~/redux/auth/Action";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Singup = () => {
  const initalValues = { email: "", userName: "", name: "", password: "" };
  const navigate = useNavigate();
  const toast = useToast();
  const handleNavigate = () => navigate("/login");
  const dispatch = useDispatch();
  // const { auth } = useSelector((store) => store);
  const auth = useSelector((store) => store.auth);

  // console.log("Store signup ", auth.signup);

  const handleSubmit = (values, actions) => {
    // console.log("values Submit ", values);
    dispatch(signupAction(values));
    actions.setSubmitting(false);
  };

  // console.log("signup ", auth);

  useEffect(() => {
    // console.log("data input ", auth.signup?.userName);
    if (auth.signup?.userName) {
      navigate("/login");
      toast({
        title: `Account created ${auth.signup?.userName}`,
        description: "Created successfully...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [auth.signup]);

  return (
    <div>
      <div className="border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            className="mb-5 w-[180px] h-[58px] items-center justify-center "
            src="https://i.imgur.com/zqpwkLQ.png"
            alt=""
          />

          <Formik
            initialValues={initalValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className="space-y-8">
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="email"
                        placeholder="Mobile Number or Email"
                      ></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="userName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.userName && form.touched.userName}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="userName"
                        placeholder="UserName"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.userName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="name"
                        placeholder="Fullname"
                      ></Input>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="password"
                        placeholder="Password"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <p className="mt-[0.9rem] text-center text-xs ">
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn More
                </p>
                <p className="mt-[0.625rem] text-center text-xs ">
                  By signing up, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
                <Button
                  className="w-full"
                  mt={4}
                  type="submit"
                  colorScheme="blue"
                  isLoading={formikProps.isSubmitting}
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          If You Have Account Already
          <span
            className="ml-2 text-blue-700 cursor-pointer"
            onClick={handleNavigate}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Singup;
