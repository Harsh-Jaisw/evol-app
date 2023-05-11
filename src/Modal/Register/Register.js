import React from "react";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "../../Validation";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
const tonav=useNavigate()

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
   
  localStorage.setItem("FormData",JSON.stringify([...FormData,values]))
 tonav("/home")
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // <Box p={4}>
     <>
      <span onClick={onOpen} colorScheme="blue">
       Register
      </span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                      mb={4}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        type="text"
                        {...field}
                        id="username"
                        placeholder="Username"
                      />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      mb={4}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        type="email"
                        {...field}
                        id="email"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mb={4}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        {...field}
                        id="password"
                        placeholder="Password"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <ModalFooter>
                  <Button type="submit" onClick={onClose} colorScheme="blue">
                    Register
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                  <span>
                    Already have an account? <Link to="/login">Login</Link>
                  </span>
                </ModalFooter>
              </Form>
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    {/* // </Box> */}
    </>
  );
};
export default Register;