import { Avatar, HStack } from '@chakra-ui/react'
import React from 'react'
import {  VStack ,Stack,FormLabel,Input,Textarea,FormControl,Button,Heading,Text} from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');

    
  return (
   <Stack w={'full'} h={'100vh'} p={'16'}  alignItems={'center'} justifyContent={'center'} mt={['64','0']}  >
<Heading borderBottom={'2px solid'}>Sign Up</Heading>
    <VStack w={['full','40%']}  p={['2','16']} spacing={['0','8']}>
    <Avatar name= {`${firstName } ${lastName}`} fontSize={'30'} boxSize={'32'} / >
        <FormControl  >
          <FormLabel>Name</FormLabel>
          <HStack>

          <Input
            placeholder="first name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            />
               <Input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            />
            </HStack>
        </FormControl>
        <FormControl>
          <FormLabel>Tell us about yourself..</FormLabel>
          <Textarea
            placeholder="here..."
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            />
        </FormControl>
        <FormControl>
        <Stack direction={['column','row']}>
        <FormLabel>Email</FormLabel>

<Input
  placeholder="Your email"
  value={firstName}
  onChange={(e) => setlastName(e.target.value)}
  />
    <FormLabel>Password</FormLabel>
     <Input
  placeholder="Your password"
  value={firstName}
  onChange={(e) => setfirstName(e.target.value)}
  />
  </Stack>
        </FormControl>

        <HStack m={'2'}>
        <FormLabel><Button fontSize={'small'} size={'sm'}>Send OTP</Button></FormLabel>
     <Input
  placeholder="6 digits"
  value={firstName}
  type='number'
  onChange={(e) => setfirstName(e.target.value)}
  />
  </HStack>
        <Stack direction={['column','row']} spacing={['1','10']}>
            <Button colorScheme='purple'>Register</Button>
            <Text>already have account? <Link to="/login"><Button>Login</Button></Link></Text>
          
            <Button colorScheme='purple'>Signup with google</Button>
        </Stack>
    
              </VStack>

   </Stack>
  )
}

export default Signup
