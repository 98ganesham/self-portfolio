import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import PaddingBox from "../assets/frame/paddingBox";

const Home = () => {
  return (
    <PaddingBox>
      <Flex direction={["column", "column", "row"]} minH="100vh">
        <NavBar />
        <Box overflow={"hidden"} flex="1" maxH={"120vh"}>
          <Outlet />
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Home;
