import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { SlLike } from "react-icons/sl";
import "./card.css";
export function Cards() {
  // data fetch from local storage to persistance.
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="card">
      {data.map((item) => (
        <Card maxW="sm">
          <CardBody>
            <Image src={item?.selectedImage} alt="Selected" borderRadius="lg" />
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="4">
              <Button>
                <SlLike />
              </Button>
              Uploaded at - {item.time}
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
