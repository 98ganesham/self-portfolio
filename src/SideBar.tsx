import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import chawbelarImage from "../src/images/ChawBeLar.webp";

interface NavigationLink {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const Sidebar = () => {
  const collapse = true;

  const navLinks: NavigationLink[] = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  const [sideShow, setSideShow] = useState(false);

  return (
    <Box
      onClick={() => setSideShow(!sideShow)}
      zIndex={1}
      bgColor={"#FAC898"}
      height={"100vh"}
      overflow="hidden"
      width={"120px"}
      maxW={"200px"}
      position={"relative"}
      rounded={0}
      px={10}
      top={-10}
      left={-10}
    >
      <VStack
        alignItems="center"
        justifyContent="flex-start"
        height="100%"
        mt={10}
      >
        <Image src={chawbelarImage} boxSize={"80px"} rounded="50%" />
        <VStack fontSize={"16px"} alignItems={"center"} mt={10}>
          {navLinks.map((link, index) => (
            <Box key={index}>
              <Box key={index} py={2} px={4} rounded={4}>
                <NavLink
                  to={link.href}
                  style={{
                    textDecoration: "none",
                    color:
                      link.href === window.location.pathname
                        ? "#FF7F7F"
                        : "black",
                  }}
                >
                  <HStack fontSize={"md"}>
                    {collapse && (
                      <Text fontWeight={"semibold"}>{link.name}</Text>
                    )}
                  </HStack>
                </NavLink>
              </Box>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
