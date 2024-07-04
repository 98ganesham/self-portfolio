import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PaddingBox from "../assets/frame/paddingBox";

const Experience = () => {
  return (
    <PaddingBox>
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        paddingTop={{ base: "none", md: "1rem", lg: "2rem" }}
        textColor="white"
        flexDirection="column"
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        maxHeight={{ base: "70vh", md: "90vh", lg: "100vh" }} // Set maxHeight on medium screens and larger
        overflow={{ base: "scroll", md: "auto" }} // Enable scrolling on medium screens and larger
      >
        <Heading
          as="h2"
          display={"flex"}
          fontSize={["20px", "22px", "24px"]}
          flexWrap="nowrap"
          flex="1"
        >
          <Text color="#51f2f5">My</Text>
          <Text color="#9df9fe">Experience at</Text>
          <Text color="#90EE90">Varoon Valley Software House</Text>
        </Heading>
        <Box textAlign="center" px={[0, 2, 4]} maxWidth="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text
              fontSize={["14px", "16px", "18px"]}
              mb={3}
              color="gray.400"
              whiteSpace="pre-line"
            >
              During my enriching journey at Varoon Valley Software House,
              nestled in the heart of innovation, I embarked on a transformative
              journey that propelled my skills in React TypeScript and Laravel
              PHP.
            </Text>
            <Text
              fontSize={["14px", "16px", "18px"]}
              mb={3}
              color="gray.400"
              whiteSpace="pre-line"
            >
              As a dedicated member of the Varoon Valley team, I crafted dynamic
              and responsive user interfaces using React TypeScript, while also
              architecting robust backend systems with Laravel PHP.
            </Text>
            <Text
              fontSize={["14px", "16px", "18px"]}
              mb={3}
              color="gray.400"
              whiteSpace="pre-line"
            >
              Collaboration was key to our success, fostering an environment of
              creativity and camaraderie. Together, we navigated through
              intricate projects, overcoming obstacles and celebrating triumphs.
            </Text>
            <Text
              fontSize={["14px", "16px", "18px"]}
              mb={6}
              color="gray.400"
              whiteSpace="pre-line"
            >
              Among the highlights of my time at Varoon Valley Software House
              was my involvement in the Mogok project, leaving an indelible mark
              on the landscape of software development.
            </Text>
            <Text
              fontSize={["14px", "16px", "18px"]}
              mb={3}
              color="gray.400"
              whiteSpace="pre-line"
            >
              My experience at Varoon Valley Software House was not merely
              professional, but a personal odyssey of growth and discovery,
              preparing me for new adventures in technology.
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Experience;
