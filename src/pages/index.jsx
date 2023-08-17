import Head from "next/head";
import { HelpWidget } from "../components/HelpWidget";
import Footer from '~/components/footer'
import Header from '~/components/header'
import CallToActionWithAnnotation from '~/components/home';
import {
  useColorModeValue,
  Box
} from '@chakra-ui/react';


const Home = () => {

  return (
    <>
      <Head>
        <title>OGOGO Academy</title>
        <link rel="icon" type="image/png" href='https://english.ogogoacademy.kg/logo.png' />

      </Head>

      <Box>
        <CallToActionWithAnnotation />
      </Box>
    </>
  );
};

export default Home;
