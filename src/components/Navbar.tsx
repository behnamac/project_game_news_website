import { HStack, Img, Text } from "@chakra-ui/react"
import logo from "./assets/Logo/logo.webp"
const Navbar = () => {
  return (
    <HStack>
        <Img src={logo} alt="logo" boxSize="60px" />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default Navbar