import { Box, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      paddingX={[2, 4, 6]}
      textColor="white"
      flexDirection="column"
      width="100%"
      maxWidth="1200px"
      margin="0 auto"
    >
      <Heading
        as="h2"
        fontSize={["20px", "22px", "24px"]}
        display={"flex"}
        gap={5}
      >
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
            <Text
              fontSize={["14px", "16px", "18px"]}
              fontWeight="medium"
              gap={2}
            >
              Bachelor of Science in Computer Science
            </Text>
          </Flex>
          <Text fontSize={["14px", "16px", "18px"]} mb={4}>
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
            <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium">
              Diploma in Network Communication
            </Text>
          </Flex>
          <Text fontSize={["14px", "16px", "18px"]} mb={4}>
            <Flex alignItems="center">
              <Box pr={2}>
                KMD Computer Center at University of Distance Education, Yangon
              </Box>
              <Box color="gray.500">(2019 - 2020)</Box>
            </Flex>
          </Text>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default Education;
