import { Box, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  color: string;
}
const SkillItems = ({ icon, text, color }: Props) => (
  <Box display="flex" alignItems="center" gap={10}>
    <Icon as={icon} color={color} />
    <Text
      ml={2}
      textColor="white"
      fontSize={["20px", "22px", "24px"]}
      whiteSpace={"nowrap"}
    >
      {text}
    </Text>
  </Box>
);

export default SkillItems;
