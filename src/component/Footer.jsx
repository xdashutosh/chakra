import {Heading,Input,Text, Button, Box,Stack,VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillFacebook,AiFillWechat,AiFillInstagram,AiFillTwitterCircle,AiOutlineLinkedin} from  'react-icons/ai';
const Footer = () => {
  return (
  <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
<Stack direction={['column','row']}>
<VStack w={'full'} px={'4'} alignItems={'stretch'}>
<Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>Subscribe to get updates</Heading>
<HStack borderBottom={'2px solid'}>
    <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'></Input>
    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}><AiOutlineSend size={20}/></Button></HStack>
</VStack>

<VStack w={'full'}
 borderLeft={['none','1px solid']}
 borderRight={['none','1px solid']}
 >
<Heading size={'md'} textAlign={'center'} textTransform={'uppercase'}>EduOrage</Heading>
<Text>All @rights reserved...</Text>
</VStack>

<VStack w={'full'}
 borderRight={['none','1px solid']}
 >
<Heading size={'md'} textAlign={'center'} textTransform={'uppercase'}>Social Media</Heading>
<HStack>
    <AiFillFacebook size={'30'}/>
    <AiFillInstagram size={'30'}/>
    <AiFillTwitterCircle size={'30'}/>
    <AiFillWechat size={'30'}/>
    <AiOutlineLinkedin size={'30'}/>

</HStack>
</VStack>

</Stack>
  </Box>
  )
}

export default Footer
