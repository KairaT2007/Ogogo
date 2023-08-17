// @ts-nocheck
import "../styles/globals.css";
import { api } from "../utils/api";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "~/pages/layout"
import { SessionProvider } from 'next-auth/react'
import './18n'
import { Suspense } from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Suspense>
    </ChakraProvider>
  )
};


export default api.withTRPC(MyApp);