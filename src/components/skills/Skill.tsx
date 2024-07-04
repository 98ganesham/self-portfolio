import { Box, Flex, Heading, ListIcon, OrderedList } from "@chakra-ui/react";
import {
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaRegCheckCircle,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";
import PaddingBox from "../../assets/frame/paddingBox";
import SkillItems from "./skillItems";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, text: "HTML", color: "#E34F26" },
    { icon: FaCss3Alt, text: "CSS", color: "#1572B6" },
    { icon: IoLogoJavascript, text: "JavaScript", color: "#f7df1e" },
    { icon: FaReact, text: "ReactJs with TypeScript", color: "#61dafb" },
    { icon: FaLaravel, text: "Laravel Php", color: "#ff2d20" },
  ];

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            mt="5rem"
            mb={6}
            as="h2"
            fontSize={["20px", "22px", "24px"]}
            color="#9df9fe"
          >
            My Skills
          </Heading>
        </motion.div>
        <Flex
          direction={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap={3}
          maxWidth="800px"
          margin="auto"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 1,
                y: idx % 2 === 0 ? -20 : 20,
                x: idx === 2 ? -200 : idx === 3 ? 200 : 0,
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                flex: "1 1 200px",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              <SkillItems
                icon={skill.icon}
                text={skill.text}
                color={skill.color}
              />
            </motion.div>
          ))}
        </Flex>
        <Box mt={6} width="100%" maxWidth="600px">
          <Heading fontSize={["20px", "22px", "24px"]} as="h3" mb={4}>
            Workflow
          </Heading>
          <OrderedList fontSize={["14px", "16px", "18px"]} textAlign="left">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={3} />
              Mobile-First, Responsive Design
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={3} />
              Cross Browser Testing & Debugging
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <ListIcon as={FaRegCheckCircle} color="green.500" mr={3} />
              Cross Functional Teams
            </motion.li>
          </OrderedList>
        </Box>
        <Box mt={4} mb={4} height="50px" />
      </Flex>
    </PaddingBox>
  );
};

export default Skills;
