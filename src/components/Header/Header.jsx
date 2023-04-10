import React from "react";
import {
  Button,
  Input,
  InputGroup,
  Select,
  InputRightElement,
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const Header = ({setName, valueName, setValueName, status, setStatus, gender, setGender}) => {
  
  return (
      <VStack >
        <VStack  background='purple.400' p={4} rounded={10} boxShadow='3px 4px white'>
            <Heading>Práctica useEffect</Heading>
            <Text>Rick & MOrty API</Text>
        </VStack>
    <Stack gap={3} rounded={10} p={3}  background='purple.300' direction={{base:'column', md:'row'}}>
        <InputGroup size="md">
            <Input value={valueName} onChange={(e)=>setValueName(e.target.value)} pr="4.5rem" placeholder="Search by name" />
            <InputRightElement width="4.5rem">
            <Button onClick={()=>setName(`name=${valueName}`)}h="1.75rem" size="sm"></Button>
            </InputRightElement>
        </InputGroup>
        <Select onChange={(e)=>setStatus(e.target.value)} value= {status} placeholder="Status">
            <option value="">All</option>
            <option value="status=alive">Alive</option>
            <option value="status=dead">Dead</option>
            <option value="status=unknown">Unknown</option>
        </Select>
        <Select onChange={(e)=>setGender(e.target.value)} value= {gender} placeholder="Gender">
            <option value="">All</option>
            <option value="gender=female">Female</option>
            <option value="gender=male">Male</option>
            <option value="gender=genderless">Genderless</option>
            <option value="gender=unknown">Unkown</option>

        </Select>
    </Stack>
    </VStack>
  );
};

export default Header;
