import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Image,
  Stack,
  Badge,
 
} from "@chakra-ui/react";
import { isColorGender, isStatusColor } from "../../utils/utils";

 
const Character = ({character}) => {
  const{name, gender, status, species, image, location} = character
  return (
     <Card
      direction={{ base: "column", sm: "row" }}
      whidt={{base:'80%', md:'45%', xl:'30%'  }}
      overflow="hidden"
      variant="outline"
      background={isColorGender(gender)}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Stack direction='row'>
            <Badge colorScheme={isStatusColor(status)}>
            {status} 
            </Badge>
            <Badge colorScheme='black'>{species}</Badge>
          </Stack>
          <Text>Gender: {gender}</Text>
        </CardBody>

        <CardFooter>
          <Text py="2">
           Last known location: {location.name}
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Character;
