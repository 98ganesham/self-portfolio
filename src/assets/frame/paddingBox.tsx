import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PaddingBox = ({ children }: Props) => {
  return (
    <Box px={[4, 8, 16]} py={[4, 8, 16]}>
      {children}
    </Box>
  );
};

export default PaddingBox;
