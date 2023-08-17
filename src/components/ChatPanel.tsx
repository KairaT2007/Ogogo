import { Box, Button, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { TMessage } from "./HelpWidget";

export const ChatPannel = ({
    handleSendMessage,
    text,
    setText,
    onClose,
    messages,
}: {
    handleSendMessage: any;
    messages: TMessage[];
    text: string;
    onClose?: () => void;
    setText: (newText: string) => void;
}) => {
    return (
        <Box>
            {onClose && (
                <Text
                    className="hover:text-red-400d absolute top-2 right-2"
                    onClick={onClose}
                    position={'absolute'}
                    top={1}
                    fontWeight={'bold'}
                    cursor={'pointer'}
                    color={useColorModeValue('white', 'black')}
                >
                    X
                </Text>
            )}

            <ul className="h-[260px] overflow-auto">
                {messages.map(({ message, id, sender }) => (
                    <li
                        className={`mb-2 rounded p-1 text-black  ${sender === "1" ? "bg-blue-200" : "bg-orange-300 text-right"}`}
                        key={id}
                    >   
                        {message}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSendMessage} className="flex">
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full border border-gray-600 p-1 px-2"
                    bg={useColorModeValue('white.1000', '')}

                />
                <Button
                    cursor={'pointer'}
                    bg={useColorModeValue('blue.500', 'blue.500')}
                    color={useColorModeValue('white', 'black')}
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};