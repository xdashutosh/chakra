import {  VStack ,Stack,FormLabel,Input,Textarea,FormControl,Select,Button,Box,Heading} from '@chakra-ui/react'
import React from 'react'
import { BiUpload } from 'react-icons/bi';
import { useState } from 'react';

const Upload = () => {

    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseFees, setCourseFees] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSave = () => {
        // Handle saving course data here
        console.log({
          courseName,
          courseDescription,
          courseFees,
          selectedSubject,
        });
      };
    
      const handleClear = () => {
        // Clear form fields here
        setCourseName('');
        setCourseDescription('');
        setCourseFees('');
        setSelectedSubject('');
      };
      const handleupload = () =>{
        console.log("uploading...");
      }

  return (
<Stack direction={['column','row']} h={'100vh'} mt={'20'} overflowX={'hidden'} >
<VStack w={'full'} h={'100vh'} justifyContent={'center'} >
<Box p={4} borderBottom={['2px solid','0px solid']} borderRight={['0px solid','2px solid']} ml={['0','auto']} pr={['0','20']} w={['80%','60%']}>
      <Heading as="h2" size="lg" mb={4}>
        Course Information
      </Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Course Name</FormLabel>
          <Input
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Course Description</FormLabel>
          <Textarea
            placeholder="Enter course description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Course Fees</FormLabel>
          <Input
            type="number"
            placeholder="$price"
            value={courseFees}
            onChange={(e) => setCourseFees(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Subjects</FormLabel>
          <Select
            placeholder="Select subjects"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="Digital Marketing">Math</option>
            <option value="Development">Science</option>
            <option value="Application development">History</option>
            <option value="Database design">English</option>
          </Select>
        </FormControl>
        <Stack direction="row" spacing={4} justify="center">
          <Button colorScheme="purple" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </Stack>
      </Stack>
    </Box>
</VStack>
<VStack w={'full'} h={'full'} justifyContent={'center'} spacing={'2'}>
<Heading as="h2" size="lg" mb={4}>
        Upload Course
      </Heading>
<BiUpload size={'10vmax'}/>
<Input required type='file' accept='video/*' w={'-webkit-fit-content'}  />

</VStack>
</Stack>
  )
}

export default Upload
