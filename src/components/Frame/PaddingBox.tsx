import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PaddingXBox = ({ children }: Props) => {
  return <Box px={{ md: 10, base: 3 }}>{children}</Box>;
};

const PaddingBox = ({ children }: Props) => {
  return (
    <Box
      px={{ md: 10, base: 3 }}
      py={8}
      // maxH={"100vh"}
      // overflowY={"scroll"}
      // id="scrollableBox"
    >
      {children}
    </Box>
  );
};

export default PaddingBox;
