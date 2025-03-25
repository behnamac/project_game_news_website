import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectedGenre ,selectedGenre}: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="6px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize="large"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              whiteSpace='normal'
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList;
