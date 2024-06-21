import { Box, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import PaddingBox from "./Frame/PaddingBox";

const Education = () => {
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
        <Heading as="h2" display={"flex"} gap={5}>
          <Text color="#51f2f5">My</Text> <Text color="#9df9fe">Education</Text>{" "}
        </Heading>
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Flex align="center" mb={6} gap={2}>
              <Icon as={FaGraduationCap} fontSize="2xl" mr={4} />
              <Text fontSize="lg" fontWeight="medium" gap={2}>
                Bachelor of Science in Computer Science
              </Text>
            </Flex>
            <Text fontSize="lg" mb={4}>
              Myanmar Route Institute (2024 - Present)
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Flex align="center" mb={6}>
              <Icon as={FaCertificate} fontSize="2xl" mr={4} />
              <Text fontSize="lg" fontWeight="medium">
                Diploma in Network Communication
              </Text>
            </Flex>
            <Text fontSize="lg" mb={4}>
              <Flex alignItems="center">
                <Box pr={2}>
                  KMD Computer Center at University of Distance Education,
                  Yangon
                </Box>
                <Box color="gray.500">(2019 - 2020)</Box>
              </Flex>
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Education;
