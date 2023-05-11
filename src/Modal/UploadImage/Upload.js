import React, { useState ,useRef} from "react";
import style from "../Login/login.module.css"
import { Button } from "@chakra-ui/react";

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
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../Store/Slices/imageSlices";
export default function Upload() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const[image,setImage] =useState("") 
  const dispatch = useDispatch();
  const time = new Date();
 
  const data=useSelector((state)=>{
    return state.images
   })

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // It wile create a constructor which help to read the selected file.
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    // It loads the reader and updated to state.
    reader.onload = () => {
      setImage(reader.result)
    };
  };

  function handleUploadImage(){
    dispatch(
        addImages({ reader:image, time: time.toLocaleTimeString(),like:0 })
      );
      setImage("")
  }

  return (
    <>
      <span onClick={onOpen}>Upload Image</span>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent className={style.maincont}>
          <ModalHeader className={style.header}>
            Upload Your Images.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className={style.modelbody} pb={6}>
            <FormControl>
              <FormLabel>Images</FormLabel>
              <Input
                className={style.inp}
                onChange={handleImageChange}
                type="file"
              />
            </FormControl>

           <img src={image} alt="" width="90" />
          </ModalBody>

          <ModalFooter>
            
            <Button colorScheme="blue" mr={3}onClose={onClose} onClick={handleUploadImage}>
              Upload Image
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
