import { HStack, Img } from "@chakra-ui/react";
import logo from "./assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <HStack padding="12px">
      <Img src={logo} alt="logo" boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
