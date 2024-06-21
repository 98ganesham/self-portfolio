import {
  Box,
  Flex,
  Heading,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import PaddingBox from "../Frame/PaddingBox";
import {
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaRegCheckCircle,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { useEffect } from "react";
import SkillItems from "./SkillItems";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateSkills = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: { duration: 15, ease: "linear" },
        });
        await controls.start({
          x: "0%",
          transition: { duration: 0 },
        });
      }
    };

    animateSkills();
  }, [controls]);

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
        <Heading as="h2" mb={10} display="flex" gap={5}>
          <Text color="#51f2f5">My</Text> <Text color="#9df9fe">Skills</Text>
        </Heading>
        <Flex direction="row" wrap="nowrap" justify="space-between" w="100%">
          <motion.div
            animate={controls}
            style={{
              display: "flex",
              position: "relative",
              width: "fit-content",
            }}
          >
            <Box ml={"10%"}>
              <SkillItems icon={FaHtml5} text="HTML" color={"#E34F26 "} />
            </Box>
            <Box ml={"10%"}>
              <SkillItems icon={FaCss3Alt} text="CSS" color={"#E34F26 "} />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={IoLogoJavascript}
                text="JavaScript"
                color={"#f7df1e "}
              />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={FaReact}
                text="ReactJs with TypeScript"
                color={"#61dafb "}
              />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={FaLaravel}
                text="Laravel Php"
                color={"#ff2d20 "}
              />
            </Box>
            <Box ml={"10%"}>
              <SkillItems icon={FaHtml5} text="HTML" color={"#E34F26 "} />
            </Box>
            <Box ml={"10%"}>
              <SkillItems icon={FaCss3Alt} text="CSS" color={"#E34F26"} />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={IoLogoJavascript}
                text="JavaScript"
                color={"#f7df1e "}
              />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={FaReact}
                text="ReactJs with TypeScript"
                color={"#61dafb "}
              />
            </Box>
            <Box ml={"10%"}>
              <SkillItems
                icon={FaLaravel}
                text="Laravel Php"
                color={"#ff2d20 "}
              />
            </Box>
          </motion.div>
        </Flex>
        <Box pt={10} alignItems={"end"}>
          <Heading as={"h3"}>WorkFlow</Heading>
          <OrderedList fontSize="20px" textAlign={"start"} listStyleType="none">
            <ListItem display="flex" alignItems="center">
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={5} />
              Mobile-First, Responsive Design
            </ListItem>
            <ListItem display="flex" alignItems="center" pt={10}>
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={5} />
              Cross Browser Testing & Debugging
            </ListItem>
            <ListItem display="flex" alignItems="center" pt={10}>
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={5} />
              Cross Functional Teams
            </ListItem>
          </OrderedList>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Skills;
