import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import PaddingBox from "../assets/frame/paddingBox";

const Contact = () => {
  return (
    <PaddingBox>
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
          mb={2}
          fontSize={["20px", "22px", "24px"]}
          display="flex"
          gap={5}
        >
          <Text color="#51f2f5">Contact</Text> <Text color="#9df9fe">Me</Text>
        </Heading>
        <Box justifyContent="center" alignItems="center">
          <Box textAlign={"center"}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text fontSize={["14px", "16px", "18px"]}>
                I'm passionate about helping people develop their websites and
                bringing their ideas to life. <br /> Let's collaborate and
                create something amazing together!
              </Text>
              <Text fontSize={["14px", "16px", "18px"]}>
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
                fontSize={["14px", "16px", "18px"]}
                textDecoration={"none"}
                _hover={{ color: "#FF7F7F", textDecoration: "underline" }}
                color="white"
              >
                chawbelar98@gmail.com
              </Link>
            </Flex>
            <Flex alignItems="center" ml={10} justifyContent="center" mt={4}>
              <Text fontSize={["14px", "16px", "18px"]}>
                <Icon as={MdPhone} color="#FF7F7F" /> Call Me +660627142636{" "}
              </Text>
            </Flex>
            <Flex
              fontSize={["14px", "16px", "18px"]}
              alignItems="center"
              ml={10}
              justifyContent="center"
              mt={4}
            >
              <Icon as={MdLocationOn} color="#FF7F7F" />
              <Link
                href=" https://maps.app.goo.gl/o9xofhoSiNvMnhAB7"
                marginLeft="0.5rem"
                target="_blank"
                textDecoration={"none"}
                _hover={{ color: "#FF7F7F", textDecoration: "underline" }}
                color="white"
              >
                Phetchaburi 43/1 Alley, Makkasan, Ratchathewi, Bangkok 10400
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Contact;
