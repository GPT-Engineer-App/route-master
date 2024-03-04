import { Box, Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, HStack, Badge, Button, useToast, IconButton, Input, FormLabel, FormControl, Textarea } from "@chakra-ui/react";
import { FaBus, FaPhone, FaRegClock, FaRoute, FaCommentDots } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleLateNotification = () => {
    toast({
      title: "Bus will be late.",
      description: "The driver has sent a message that the bus will be delayed due to traffic.",
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "bottom-left",
    });
  };

  const handleCallBusCompany = () => {
    // Simulating a call to the bus company
    toast({
      title: "Calling Bus Company...",
      description: "Connecting you to the bus company. Please wait.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          City Bus Tracker
        </Heading>
        <Tabs variant="enclosed" isFitted>
          <TabList mb="1em">
            {[...Array(20).keys()].map((n) => (
              <Tab key={n} _selected={{ color: "white", bg: "blue.500" }}>
                <FaRoute />
                <Text ml={2}>Route {10 + n}</Text>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {[...Array(20).keys()].map((n) => (
              <TabPanel key={n}>
                <VStack spacing={4} align="stretch">
                  <Box p={5} shadow="md" borderWidth="1px">
                    <HStack justify="space-between">
                      <VStack align="start">
                        <Heading size="md">Route {10 + n}</Heading>
                        <Text>
                          Arrival Time: <FaRegClock /> 12:00 PM
                        </Text>
                        <Text>
                          Departure Time: <FaRegClock /> 12:15 PM
                        </Text>
                        <Text>Duration: 45 mins</Text>
                      </VStack>
                      <Badge variant="solid" colorScheme="green" rounded="full" p={2}>
                        <FaBus /> On Time
                      </Badge>
                    </HStack>
                  </Box>
                </VStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
          <VStack spacing={3}>
            <Heading size="lg">Driver Notifications</Heading>
            <Button leftIcon={<FaCommentDots />} colorScheme="blue" onClick={handleLateNotification}>
              Notify Delay
            </Button>
          </VStack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
          <VStack spacing={3}>
            <Heading size="lg">Contact Bus Company</Heading>
            <HStack>
              <FormControl id="user-message">
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Enter your message to the bus company" />
              </FormControl>
              <IconButton colorScheme="blue" aria-label="Call bus company" icon={<FaPhone />} onClick={handleCallBusCompany} />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
