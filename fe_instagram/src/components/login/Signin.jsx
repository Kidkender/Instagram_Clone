import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signinAction } from "~/redux/auth/Action";
import { useEffect } from "react";
import { getUserProfileAction } from "~/redux/user/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const { user, signin } = useSelector((store) => store);
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    if (jwt) dispatch(getUserProfileAction(jwt || signin));
  }, [jwt, signin]);

  console.log("data in store login", user);

  useEffect(() => {
    if (user.reqUser?.userName && jwt) {
      // navigate(`/${user.reqUser.userName}`);
      navigate("/");
      toast({
        title: "Login successfully...",
        status: "success",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    }
  }, [user.reqUser]);

  const handleNavigate = () => navigate("/singup");
  const handleSubmit = (values, action) => {
    dispatch(signinAction(values));
    action.setSubmitting(false);
  };
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
            initialValues={initialValues}
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

                <p className="text-center text-sm">
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn More
                </p>
                <p className="text-center text-sm">
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
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          If You Dont Have Account
          <span
            className="ml-2 text-blue-700 cursor-pointer"
            onClick={handleNavigate}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
