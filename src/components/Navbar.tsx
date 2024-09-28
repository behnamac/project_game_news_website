import { HStack, Img } from "@chakra-ui/react";
import logo from "./assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="12px">
      <Img src={logo} alt="logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
