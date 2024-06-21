import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PaddingBox from "./Frame/PaddingBox";

const Experience = () => {
  return (
    <PaddingBox>
      <Flex
        alignItems="center"
        height="100vh"
        p={4}
        fontSize="16px"
        textAlign="center"
        overflowX="hidden"
        textColor="white"
        position="relative"
        flexDirection="column"
        gap={10}
      >
        <Heading as="h2" display={"flex"} gap={5}>
          <Text color="#51f2f5">My</Text>{" "}
          <Text color="#9df9fe">Experience at</Text>{" "}
          <Text color="#90EE90">Varoon Valley Software House</Text>
        </Heading>
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="lg" mb={6} textAlign={"center"} color="gray.400">
              During my enriching journey at Varoon Valley Software House,
              nestled in the heart of innovation, I embarked on a transformative
              journey that propelled my skills in React TypeScript and Laravel
              PHP.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.400">
              As a dedicated member of the Varoon Valley team, I crafted dynamic
              and responsive user interfaces using React TypeScript, while also
              architecting robust backend systems with Laravel PHP.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.400">
              Collaboration was key to our success, fostering an environment of
              creativity and camaraderie. Together, we navigated through
              intricate projects, overcoming obstacles and celebrating triumphs.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.400">
              Among the highlights of my time at Varoon Valley Software House
              was my involvement in the Mogok project, leaving an indelible mark
              on the landscape of software development.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.400">
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
