import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    Flex
  } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import {BiMenuAltLeft ,BiHome,BiVideoPlus,BiUpload,BiHelpCircle, BiConversation,BiBookAdd} from 'react-icons/bi';

const buttonStyles = {
    _hover: {
      bg: 'transparent', // Set the background color to the same as the default state
    },
  };

const Header = () => {
    const {isOpen,onOpen,onClose}= useDisclosure();
  return (
   <>
   <Button 
   colorScheme={'purple'} 
   pos={'fixed'} 
   top={'4'} 
   left={'4'} 
   borderRadius={'full'}
   onClick={onOpen}
   zIndex={2}
   >
    
    <BiMenuAltLeft 
    size={'20'}/>
    </Button>
    <Button 

   pos={'fixed'} 
   top={'2'} 
   left={['20','40']} 

   zIndex={2}
   h={'14'}
   w={'60'}
   fontSize={['xl','4xl']}
   bg={'transparent'}
   _hover={buttonStyles}
   
   >    
🅴🅳🆄🅾🆁🅰🅶🅴
    </Button>

    <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
<DrawerOverlay>
    <DrawerContent >
        <DrawerCloseButton/>
        <DrawerHeader>EduOrage</DrawerHeader>
<DrawerBody >
    <VStack spacing={'5'} align="stretch">

     <Button w={'100%'}colorScheme='purple' variant={'ghost'} onClick={onClose} >
     <Link to={'/'}>  <Flex alignItems="center">
        <BiHome style={{ marginRight: '0.5rem' }} size={'25'}/>
        Home
      </Flex></Link>
     </Button>
     <Button w={'100%'} colorScheme='purple' variant={'ghost'} onClick={onClose}>
     <Link to={'/courses'}>
     <Flex alignItems="center">
        <BiVideoPlus style={{ marginRight: '0.5rem' }} size={'25'}/>
        Courses
      </Flex>
     </Link>
     </Button>
     <Button w={'100%'} colorScheme='purple'variant={'ghost'} onClick={onClose}>
     <Link to={'/mylearn'}>
     <Flex alignItems="center">
        <BiBookAdd style={{ marginRight: '0.5rem' }} size={'25'}/>
        My Learning
      </Flex>
     </Link>
     </Button>
     <Button w={'100%'}colorScheme='purple'variant={'ghost'} onClick={onClose} >
     <Link to={'/upload'}><Flex alignItems="center">
        <BiUpload style={{ marginRight: '0.5rem' }} size={'25'}/>
        Upload Course
      </Flex></Link>
     </Button>
     <Button w={'100%'}colorScheme='purple'variant={'ghost'} onClick={onClose} >
     <Link to={'/contact'}>  <Flex alignItems="center">
        <BiConversation style={{ marginRight: '0.5rem' }} size={'25'} />
        Contact us
      </Flex></Link>
     </Button>
     <Button w={'100%'} colorScheme='purple'variant={'ghost'}onClick={onClose} >
     <Link to={'/help'}>
     <Flex alignItems="center">
        <BiHelpCircle style={{ marginRight: '0.5rem' }} size={'25'} />
        Help Out
      </Flex>
     </Link>
     </Button>
    </VStack>
</DrawerBody>

<DrawerFooter>
           <Link to={'/signup'}>           
           <Button variant='outline' mr={3} onClick={onClose} >
              Sign up
            </Button>
           </Link> 
           <Link to={'/login'}>
            <Button colorScheme='blue' onClick={onClose}>Login</Button>
           </Link>
          </DrawerFooter>
    </DrawerContent>
</DrawerOverlay>
    </Drawer>
   </>
  )
}

export default Header
