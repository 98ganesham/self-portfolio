import { Box, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PaddingBox from "./Frame/PaddingBox";
import { FaPhp, FaJsSquare } from "react-icons/fa";

const Interests = () => {
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
          <Text color="#51f2f5">My</Text> <Text color="#9df9fe">Interests</Text>{" "}
        </Heading>
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="lg" mb={6} textAlign={"center"} color="gray.600">
              Learning New Programming Languages: As a tech enthusiast, I thrive
              on exploring and mastering new programming languages like{" "}
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                marginLeft="3px"
              >
                PHP <Icon as={FaPhp} pl={"5px"} color=" #7FB3D5" />
              </Box>
              ,{" "}
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                marginLeft="3px"
              >
                JavaScript <Icon as={FaJsSquare} pl={"5px"} color="#f7df1e" />
              </Box>
              , or Go. Expanding my knowledge and skill set in the ever-evolving
              tech landscape is my passion.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.600">
              Listening to Music: Music is my sanctuary, especially during
              moments of stress or depression. From classical compositions to
              modern pop, music uplifts my spirits and provides solace in times
              of need.
            </Text>
            <Text fontSize="lg" mb={6} color="gray.600">
              Playing Mobile Games or Using Facebook: During leisure time,
              particularly at night, I unwind by playing mobile games or
              engaging with friends on Facebook. It's a relaxing way to
              disconnect from the day's demands and recharge for the adventures
              ahead.
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Interests;
