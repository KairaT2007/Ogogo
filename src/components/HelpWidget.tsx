import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { HelpRequest } from "@prisma/client";
import { RtmChannel } from "agora-rtm-sdk";
import { useRef, useState } from "react";
import { useRTM } from "~/hooks/useRTM";
import { api } from "~/utils/api";
import { ChatPannel } from "./ChatPanel";

export type TMessage = {
  message: string;
  id: string;
  sender: string;
};

export const HelpWidget = () => {
  const createHelpRequestMutation =
    api.helpRequest.createHelpRequest.useMutation();
  const deleteHelpRequestMutation =
    api.helpRequest.deleteHelpRequest.useMutation();

  const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
  const [text, setText] = useState("");
  const channelRef = useRef<RtmChannel | null>(null);
  const helpRequestRef = useRef<HelpRequest | null>(null);
  const { messages, connectTo, sendMessage } = useRTM([
    {
      message: "How can I help you?",
      id: "1324b0asd",
      sender: "1",
    },
  ]);

  const handleOpenSupportWidget = async () => {
    setIsChatPanelDisplayed(true);
    const helpRequest = await createHelpRequestMutation.mutateAsync();
    helpRequestRef.current = helpRequest;
    connectTo(helpRequest.id);
  };

  const handleCloseWidget = async () => {
    setIsChatPanelDisplayed(false);
    channelRef.current?.leave();
    channelRef.current = null;
    if (!helpRequestRef.current) return;
    await deleteHelpRequestMutation.mutateAsync({
      id: helpRequestRef.current.id,
    });
    helpRequestRef.current = null;
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return isChatPanelDisplayed ? (
    <Flex
      position={'fixed'}
      bottom={8}
      right={5}
      h={96}
      w={72}
      direction={'column'}
      justify={'space-between'}
      bg={useColorModeValue('gray.700', 'gray.100')}
      p={6}
      borderRadius={5}
    >
      <ChatPannel
        text={text}
        setText={setText}
        messages={messages}
        onClose={handleCloseWidget}
        handleSendMessage={handleSendMessage}
      />
    </Flex>
  ) : (
    <Button
      onClick={handleOpenSupportWidget}
      position={'fixed'}
      bottom={8}
      right={5}
      bg={useColorModeValue('orange.300', 'orange.300')}
      color={'black'}
      display={{ base: 'none', md: 'block' }}
    >
      Support Team
    </Button>
  );
};