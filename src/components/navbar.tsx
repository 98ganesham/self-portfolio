import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import chawbelar from "../assets/images/ChawBeLar.webp";

const NavBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const location = useLocation();

  const links = [
    { title: "About", link: "/" },
    { title: "Education", link: "/education" },
    { title: "Experience", link: "/experience" },
    { title: "Skills", link: "/skills" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      py={4}
      px={4}
      bg="transparent"
      position="fixed"
      top={0}
      zIndex={1}
      backdropFilter="blur(10px)"
      transition="background 0.3s"
    >
      <Box padding="2.5px" alignItems="center">
        <Image src={chawbelar} width="40px" height="40px" borderRadius="50%" />
      </Box>

      {isLargerThan768 ? (
        <Flex alignItems="center" justifyContent="center" flex="1">
          <Flex gap="5rem" justifyContent="center" maxW="800px">
            {links.map((link, idx) => (
              <Box key={idx} mx={4}>
                <RouterLink
                  to={link.link}
                  style={{
                    fontSize: 18,
                    color: location.pathname === link.link ? "yellow" : "white",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration =
                      location.pathname === link.link ? "yellow" : "none")
                  }
                >
                  {link.title}
                </RouterLink>
              </Box>
            ))}
          </Flex>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="end" flex="1" mr="1rem">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={IconButton}
              icon={
                isOpen ? <FaTimes color="yellow" /> : <FaBars color="yellow" />
              }
              aria-label="Open Menu"
              cursor="pointer"
              onClick={onToggle}
              padding="8px"
              margin="4px"
              border="none"
              boxShadow="none"
              _focus={{ outline: "none" }}
              _hover={{ bg: "transparent" }}
              transition="all 0.3s"
              zIndex={2}
              bgColor="transparent"
              transform={isOpen ? "rotate(45deg)" : "rotate(0deg)"}
            />
            <MenuList
              borderRadius="10px"
              bg="#B7791F"
              boxShadow="md"
              width="20vw"
              height="50vh"
              right={-30}
              top={-20}
              position="fixed"
              zIndex={1000}
              opacity={isOpen ? 1 : 0}
              pointerEvents={isOpen ? "auto" : "none"}
              transformOrigin="top right"
              transform={isOpen ? "scale(1)" : "scale(0)"}
              transition="transform 0.3s ease, opacity 0.3s ease"
            >
              {links.map((link, idx) => (
                <MenuItem
                  key={idx}
                  fontSize="20px"
                  alignItems="center"
                  color={location.pathname === link.link ? "yellow" : "white"}
                  as={RouterLink}
                  to={link.link}
                  onClick={onClose}
                  _hover={{ bg: "gray.700" }}
                >
                  {link.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
