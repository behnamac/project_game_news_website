import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;    
}

function SortSelector({ onSelectSortOrder ,sortOrder}: Props) {
  const SortSelector = [
    { id: 1, value: "", label: "Relavence" },
    { id: 2, value: "-added", label: "Date added" },
    { id: 3, value: "name", label: "Name" },
    { id: 4, value: "-released", label: "Release Date" },
    { id: 5, value: "-metacritic", label: "Popularity" },
    { id: 6, value: "-rating", label: "Average rating" },
  ];
  const currentSort = SortSelector.find((sort) => sort.value === sortOrder);    
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSort?.label || "Relavence"}
      </MenuButton>
      <MenuList>
        {SortSelector.map((sort) => (
          <MenuItem onClick={()=>onSelectSortOrder(sort.value)} key={sort.value} value={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
