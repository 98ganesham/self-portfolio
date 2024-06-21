import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PaddingBox from "./Frame/PaddingBox";

const About = () => {
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
      >
        <Heading as="h2" pb={5} display="flex" gap={5}>
          <Text color="#51f2f5">Meet</Text>{" "}
          <Text color="#9df9fe">Chaw Be Lar</Text>
        </Heading>
        <Box w="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="lg" mb={6} textAlign={"center"} color="gray.400">
              Hello,
            </Text>
            <Text fontSize="lg" mb={6} color="gray.400">
              I'm Chaw Be Lar, a web developer passionate about crafting
              exceptional digital experiences.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="lg" mb={10} lineHeight="taller">
              With over a year of hands-on experience in React TypeScript and
              Laravel PHP, I've had the privilege of bringing countless ideas to
              life. From sleek, intuitive user interfaces to robust backend
              solutions, I thrive on turning visions into reality.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="lg" mt={6} lineHeight="taller">
              My mission is simple: to craft engaging digital experiences that
              resonate with users. By staying abreast of emerging technologies
              and design trends, I ensure that every project I undertake pushes
              boundaries and sets new standards.
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default About;
