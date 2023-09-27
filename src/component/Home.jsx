import React from 'react';
import { Box,Heading,Image , Stack,Text,Button, VStack,Card,CardBody,Divider,CardFooter,ButtonGroup, } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';
import img6 from '../assests/remove bg logo - Copy.png';

const headingopt={
pos:"absolute",
left:"50vw",
top :"50vh",
trasform:"translate(-50%, -50%)",
texttransform:"uppercase",
p:"4",
size:'4xl'
};
  
const imageStyles = {
    objectFit: 'cover', // Adjust this property based on your needs (cover, contain, etc.)
    width: '100%',
    height: '100vh', // Set the desired height
  };
  const carouselContainerStyles = {
    height: '100vh',
    zIndex: 1, // Add a higher z-index to the carousel container
  };

const Home = () => {

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };


  return (
   <Box overflowX={'hidden'}>
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
      <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}  style={carouselContainerStyles}>
<Box w="full" h={'100vh'} maxH={'40vh'}>
<Image src={img1} style={imageStyles}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingopt}>Watch the future</Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={img2} style={imageStyles}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'}{...headingopt}>Game consoles and Fun</Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={img3} style={imageStyles}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'}{...headingopt}>Popular Courses</Heading>
</Box>
<Box w="full" h={'100vh'}>
<Image src={img4} style={imageStyles}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'}{...headingopt}>Popular Courses</Heading>
</Box>


    </Carousel>

<VStack w={'100vw'} minH={'100vh'} p={['8','16']}>
  <VStack>
  <Heading texttransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid '} m={'auto'}>Services</Heading>
<Stack
direction={['column','row']}
alignItems={'center'}
p={['0','4']}
h={'full'}
>

<Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>
<Text lineHeight={'190%'} textAlign={'center'} p={['4','16']} > 
{showFullText ?
              `At [Your Company Name], we are committed to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth.
and rewarding. Company Name. Partner with us, and together, we'll unlock the doors to endless possibilities. Your success is our success, and we're here to support you every step of the way.`
              :
              `At [Your Company Name], we are committed to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 mmitted to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 mmitted to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 Creative Design: Impress your audience with captivating visual elements. Our creative designers craft stunning graphics, websites, and branding materials that reflect your unique identitycellence: Reach a wider audience and drive growth through our strategic marketing services. From digital marketing to traditional advertising, we've got you covered.
              Customer-Centric Approach: We prioritize your satisfaction above all else. Our commitment to delivering exceptional customer service ensures that your experience with us is smooth 
 Expert Consultation: Our team of industry experts is dedicated to providing you with personalized advice and guidance. Whether you're a budding entrepreneur or an established business, we offer valuable insights to help you make informed decisions.`}
            <Button variant="link" colorScheme="purple" onClick={toggleShowFullText}>
              {showFullText ? 'Show More' : 'Show Less'}
            </Button>

</Text>   
</Stack>
</VStack>



<VStack>
  <Heading texttransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid '} m={'auto'}>Subscriptions</Heading>
<Stack
direction={['column','row']}
alignItems={'center'}
p={'4'}
h={'full'}
>


<Text lineHeight={'190%'} textAlign={'center'} p={['4','16']} > 
{showFullText ?
              `At [Your Company Name], we are committed to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth.
and rewarding. Company Name. Partner with us, and together, we'll unlock the doors to endless possibilities. Your success is our success, and we're here to support you every step of the way.`
              :
              `At [Your Company Name], we are committed to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 mmitted to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 mmitted to empowering your journey towards success. Our comprehensive range of services is designed to cater to all your needs, ensuring your satisfaction and growth. lorem12 Creative Design: Impress your audience with captivating visual elements. Our creative designers craft stunning graphics, websites, and branding materials that reflect your unique identitycellence: Reach a wider audience and drive growth through our strategic marketing services. From digital marketing to traditional advertising, we've got you covered.
              Customer-Centric Approach: We prioritize your satisfaction above all else. Our commitment to delivering exceptional customer service ensures that your experience with us is smooth 
 Expert Consultation: Our team of industry experts is dedicated to providing you with personalized advice and guidance. Whether you're a budding entrepreneur or an established business, we offer valuable insights to help you make informed decisions.`}
            <Button variant="link" colorScheme="purple" onClick={toggleShowFullText}>
              {showFullText ? 'Show More' : 'Show Less'}
            </Button>

</Text>   
<Image src={img6} filter={'hue-rotate(30deg)'} h={['40','400']}/>
</Stack>
</VStack>



<VStack  w={'100%'} >
  <Heading texttransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid '} m={'auto'}>Learn Here..</Heading>
  <Stack w={'full'} spacing={'8'} direction={['column','row']} overflowX={'auto'} >






<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card >
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w='
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

      </Stack>
</VStack>


</VStack>

   </Box>
  )
}

export default Home