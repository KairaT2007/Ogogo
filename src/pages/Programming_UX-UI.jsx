import dynamic from 'next/dynamic'
import ThreeTierPricing2 from '~/components/price2'
import VoxelDogLoader from '~/components/voxel-dog-loader'
import WithSpeechBubbles from '~/components/testimonials';
import Desc from '~/components/desc'

import {
  Box,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import NivoBump from '../components/static2';
import Carousel from '../components/carousel';
import { Image } from '@chakra-ui/react';
import Map from '../components/map';

const LazyVoxelDog = dynamic(() => import('~/components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})


const Programming = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
    >
      <Flex
        justify={'center'}
        align={'center'}
        bg={useColorModeValue('gray.100', 'gray.700')}
        mt={{ base: 20, xl: 250 }}
        mb={{ base: 40, xl: 300 }}
        direction={{ base: 'column', xl: 'row' }}
        gap={10}
      >
        <Desc
          zag="Develop with us"
          desc="The 'Ogogo' Academy is one of the leading institutions for programming education, providing students with all the necessary knowledge and tools to excel in this field. Through the active work of teachers and innovative teaching methods, 'Ogo-Go' students gain not only theoretical knowledge but also practical skills that help them succeed in their careers as programmers."
        />
        <LazyVoxelDog />
      </Flex>
      <Carousel />
      <Flex
        direction={{ base: 'column', md: 'row-reverse' }}
        justify={'center'}
        align={'center'}
        bg={useColorModeValue('gray.100', 'gray.700')}
        my={{ base: 10, md: 120 }}
        gap={10}
      >
        <Desc
          zag="Develop with us"
          desc="JavaScript (JS) currently holds the top spot as the most popular programming language in the world, with Python (Py) coming in at a close second, according to recent statistics. JS is widely used for web development, while Py is known for its simplicity and versatility, making it a popular choice for data science and artificial intelligence projects. Both languages are in high demand by employers and have active communities contributing to their development."
        />
        <NivoBump />
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        bg={useColorModeValue('gray.100', 'gray.700')}
        my={{ base: 10, md: 120 }}
        gap={10}
      >
        <Desc
          zag="Develop with us"
          desc="The demand for UX/UI designers continues to rise as businesses recognize the importance of creating intuitive and user-friendly experiences for their customers. With more companies investing in digital transformation, UX/UI designers are essential in ensuring that products and services meet the needs and expectations of users"
        />
        <Box
          w={'50%'}
          align={'center'}
        >
          <Image
            fit={'cover'}
            border={'1px solid'}
            borderRadius={35}
            src={
              'https://cdn-icons-png.flaticon.com/512/1197/1197544.png?w=1380&t=st=1679607839~exp=1679608439~hmac=124f31c1796ee8a9e6e5fd0c77890ea85e4a4dfca30a1977723d656c4fcfaa13'
            }
          />
        </Box>

      </Flex>

      <ThreeTierPricing2
        desc2={'Caworking access'}
        desc1={'Multiple portfolio projects'}
        desc3={'Laptop from us'}
      />
      <Map />
    </Box>
  )
}

export default Programming