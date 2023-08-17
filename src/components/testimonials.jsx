import { Grid } from '@chakra-ui/react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { db, auth, storage } from "~/config/firebase";
import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
            </Stack>
        </Flex>
    );
};



export default function WithSpeechBubbles() {

    const [commentsList, setCommentsList] = useState([]);

    const [newCommentsTitle, setNewCommentsTitle] = useState("");
    const [newCommentsName, setNewCommentsName] = useState("");
    const [newCommentsDesc, setNewCommentsDesc] = useState("");
    const [newCommentsImage, setNewCommentsImage] = useState("");

    const commentsCollectionRef = collection(db, "comments");

    const getCommentsList = async () => {
        try {
            const data = await getDocs(commentsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCommentsList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCommentsList();
    }, []);

    const onSubmitComments = async () => {
        try {
            await addDoc(commentsCollectionRef, {
                title: newCommentsTitle,
                name: newCommentsName,
                desc: newCommentsDesc,
                image: newCommentsImage,
            });
            getCommentsList();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteComment = async (id) => {
        const commentDoc = doc(db, "comments", id);
        await deleteDoc(commentDoc);
    };

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Reviews</Heading>
                </Stack>
                <Grid
                    direction={{ base: 'column', md: 'row' }}
                    templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }}
                    gap={6}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    {commentsList.map((comment) => (
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>{comment.title}</TestimonialHeading>
                                <TestimonialText>
                                    {comment.desc}
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={comment.image}
                                name={comment.name}
                            />
                        </Testimonial>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}