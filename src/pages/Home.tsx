import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Flex>
        <Sidebar />

        {/* Box frame of child element */}
        <Box overflow={"hidden"} flex="1" maxH={"120vh"}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
