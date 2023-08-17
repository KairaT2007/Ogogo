import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';
// import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
// import { Text } from '@chakra-ui/react';


// export default function Login() {

//     const [show, setShow] = useState(false)
//     const router = useRouter()
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validate: login_validate,
//         onSubmit
//     })

//     async function onSubmit(values) {
//         const status = await signIn('credentials', {
//             redirect: false,
//             email: values.email,
//             password: values.password,
//             callbackUrl: "/"
//         })

//         if (status.ok) router.push(status.url)

//     }

//     // Google Handler function
//     async function handleGoogleSignin() {
//         signIn('google', { callbackUrl: "http://localhost:3000" })
//     }

//     // Github Login 
//     async function handleGithubSignin() {
//         signIn('github', { callbackUrl: "http://localhost:3000" })
//     }

//     return (
//         <>
//             <Head>
//                 <title>Login</title>
//             </Head>

//             <section className='w-3/4 mx-auto flex flex-col gap-10'>
//                 <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
//                     <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
//                         <input
//                             type="email"
//                             name='email'
//                             placeholder='Email'
//                             className={styles.input_text}
//                             {...formik.getFieldProps('email')}
//                         />
//                         <span className='icon flex items-center px-4'>
//                             <HiAtSymbol size={25} />
//                         </span>

//                     </div>
//                     {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

//                     <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
//                         <input
//                             type={`${show ? "text" : "password"}`}
//                             name='password'
//                             placeholder='password'
//                             className={styles.input_text}
//                             {...formik.getFieldProps('password')}
//                         />
//                         <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
//                             <HiFingerPrint size={25} />
//                         </span>

//                     </div>
//                     <div className="input-button">
//                         <button type='submit' className={styles.button}>
//                             Login
//                         </button>
//                     </div>
//                     <div className="input-button">
//                         <Button onClick={handleGoogleSignin} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
//                             <Center>
//                                 <Text>Sign in with Google</Text>
//                             </Center>
//                         </Button>
//                     </div>
//                     <div className="input-button">
//                         <Button onClick={handleGithubSignin} w={'full'} variant={'outline'} leftIcon={<FaGithub />}>
//                             <Center>
//                                 <Text>Sign in with Google</Text>
//                             </Center>
//                         </Button>
//                     </div>
//                 </form>

//                 {/* bottom */}
//                 <p className='text-center text-gray-400 '>
//                     don't have an account yet? <Link href={'/register'} className='text-blue-700'>Sign Up</Link>
//                 </p>
//             </section>


//         </>
//     )
// }

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })

    async function onSubmit(values) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })

        if (status.ok) router.push(status.url)

    }

    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }

    async function handleGithubSignin() {
        signIn('github', { callbackUrl: "http://localhost:3000" })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    className={styles.input_text}
                                    {...formik.getFieldProps('email')}
                                />
                            </FormControl>
                            <FormControl id="password" >
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder='password'
                                        className={styles.input_text}
                                        {...formik.getFieldProps('password')}
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    type="submit"
                                >
                                    Sign in
                                </Button>
                                <Button onClick={handleGoogleSignin} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                                    <Center>
                                        <Text>Sign in with Google</Text>
                                    </Center>
                                </Button>
                                <Button onClick={handleGithubSignin} w={'full'} variant={'outline'} leftIcon={<FaGithub />}>
                                    <Center>
                                        <Text>Sign in with Github</Text>
                                    </Center>
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    No already a user? <Link href='/register' color={'blue.400'}>Sign up</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

