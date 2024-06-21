import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import PaddingBox from "./Frame/PaddingBox";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <PaddingBox>
      <Flex
        alignItems={"center"}
        justifyItems={"center"}
        height="100vh"
        p={4}
        fontSize="16px"
        textAlign="center"
        overflowX="hidden"
        textColor="white"
        position="fixed"
        flexDirection="column"
      >
        <Heading as="h2" mb={2} display="flex" gap={5}>
          <Text color="#51f2f5">Contact</Text> <Text color="#9df9fe">Me</Text>
        </Heading>
        <Box justifyContent="center" alignItems="center">
          <Box textAlign={"center"}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text fontSize={"16px"}>
                I'm passionate about helping people develop their websites and
                bringing their ideas to life. Let's collaborate and create
                something amazing together!
              </Text>
              <Text fontSize={"16px"}>
                Send me your request for a proposal, and I'll get back to you
                with a detailed estimate.
              </Text>
            </motion.div>
          </Box>

          <Flex flexDirection="column" alignItems="center" mt={10}>
            <Flex alignItems="center" ml={10} justifyContent="center">
              <Icon as={MdMail} color="#FF7F7F" />
              <Link
                href="mailto:chawbelar98@gmail.com"
                marginLeft="0.5rem"
                textDecoration={"none"}
                _hover={{ color: "#FF7F7F", textDecoration: "underline" }}
                color="white"
              >
                chawbelar98@gmail.com
              </Link>
            </Flex>
            <Flex alignItems="center" ml={10} justifyContent="center" mt={4}>
              <Text>
                <Icon as={MdPhone} color="#FF7F7F" /> Call Me +660627142636{" "}
              </Text>
            </Flex>
            <Flex alignItems="center" ml={10} justifyContent="center" mt={4}>
              <Icon as={MdLocationOn} color="#FF7F7F" />
              <Link
                href="https://maps.app.goo.gl/jiYWkYbGshvLgUBb6"
                marginLeft="0.5rem"
                target="_blank"
                textDecoration={"none"}
                _hover={{ color: "#FF7F7F", textDecoration: "underline" }}
                color="white"
              >
                43/1 Phetchaburi Rd, Khwaeng Makkasan, Khet Ratchathewi, Krung
                Thep Maha Nakhon 10400
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Contact;
