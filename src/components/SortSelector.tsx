import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relavent
      </MenuButton>
      <MenuList>
        <MenuItem>Relavent</MenuItem>
        <MenuItem>item2</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>item5</MenuItem>
        <MenuItem>item6</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
