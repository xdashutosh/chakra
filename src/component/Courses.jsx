import {Stack, VStack,Button, Box, Heading,Text,  useToast,useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalHeader,ModalFooter,ModalBody,Input} from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import {BiAddToQueue,BiNotepad,BiAward, BiHelpCircle} from 'react-icons/bi';

const Courses = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
      ];
    
const videotitlearray=[
"React Course",
"nodejs installation",
"mongodb course",
"Redux Cart adding",
"batch file creation",
"best animation ever",
"lean mern stack!",
];

    const [videosrc,setvideosrc] = useState(videosArr[0]);
    const [videotitle,setvideotitle] = useState(videotitlearray[0]);
const videohandler = (videoindex)=>{
setvideosrc(videosArr[videoindex]);
setvideotitle(videotitlearray[videoindex]);
}

const toast = useToast()

const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState('');

const addNote = () => {
  if (newNote.trim() !== '') {
    setNotes([...notes, newNote]);
    setNewNote('');
  }
};

const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const scrollContainerStyle = {
     // Adjust the maximum height as needed
    overflowY: "auto",
    scrollbarWidth: "thin", // Customize scrollbar width
    scrollbarColor: "#4a90e2 #f2f2f2", // Customize scrollbar colors
  };



  return (

 <Stack direction={['column','row']} h={'100vh'} mt={'20'} overflowX={'hidden'}>
     <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-thumb {
              background: #4a90e2; // Color of the scrollbar thumb
              border-radius: 4px; // Adjust the thumb's border radius
            }
          `}
        </style>
<Stack p={'2'} align={'flex-start'} bg={'blackAlpha.300'} h={'-webkit-fit-content'} w={'-webkit-fit-content'} ml={'2'} mb={'-2'} direction={['row','column']} spacing={'5'}>
    

    <Button size={'xs'}  
          onClick={() =>
            toast({
              title: videotitle,
              description: "Added to Queue!",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
          }
    
    >

        <BiAddToQueue size={'25'} 
        onClick={()=>{
        
        }}
        />
        </Button>

      <Button size={'xs'} onClick={onOpen}>
    <BiNotepad size={'25'} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keep Notes</ModalHeader>
          <ModalCloseButton />
          <Box maxH={'50vh'} style={scrollContainerStyle}>
         
          <ModalBody >
          <div className="App">
      <h1>Notes App</h1>
      <div>
        <Input
          type="text"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          size={'lg'}
        />
        <Button m={'2'} onClick={addNote}>Add</Button>
      </div>
      <VStack  alignItems={'stretch'}  spacing={'2'} overflowY={'auto'} mr={['0','10']}  >
        {notes.map((note, index) => (
            <Stack w={'100%'} borderBottom={'1px solid'} direction={['column','row']}>

            <li key={index} style={{listStyle:'none',overflow:'hidden',padding:'2rem'}}>
            {note}
         
            <Button mt={'4'} ml={'4'} fontSize={'md'} onClick={() => deleteNote(index)}>Delete</Button>

           
          </li>
            </Stack>
        ))}
        </VStack>
     
    </div>
          </ModalBody>
          </Box>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>






<Button size={'xs'}>
    <BiAward size={'25'} />

</Button>



<Button size={'xs'}>
    <BiHelpCircle size={'25'} />

</Button>



</Stack>
<VStack w={'full'} ml={['0','2']} >
    <video 
    src={videosrc}
    style={
        {
            width: '100%',
            borderRadius:'.5rem',
        }
    }
    controls
    controlsList='nodownload'
    >

    </video>
    <VStack borderBottom={['2px solid','0px solid']} alignItems={'flex-start'} p={['1','8']} w={'full'} overflowY={'auto'}>
    <Heading>{videotitle}</Heading>
    <Text textAlign={'center'}>
        {videotitle}
  </Text>
</VStack >
</VStack>


<VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'} mr={['0','10']} >
    <Heading fontSize={'x-large'}>Full Stack in 15 days!</Heading>

{
    videosArr.map((eachvideo,index)=>(
<Button

variant={'ghost'}
colorScheme='purple'
onClick={()=>videohandler(index)}
>
Lecture {index+1}
</Button>
    ))
}


</VStack>
 </Stack>

  )
}

export default Courses
