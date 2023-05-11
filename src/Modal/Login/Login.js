import React, { useRef } from "react";
import style from "./login.module.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <span onClick={onOpen}>Login</span>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent className={style.maincont}>
          <ModalHeader className={style.header}>
            Create your account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className={style.modelbody} pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                className={style.inp}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            Already have an account ? <Link to="/register">Register</Link>
            <Button colorScheme="blue" mr={3}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
