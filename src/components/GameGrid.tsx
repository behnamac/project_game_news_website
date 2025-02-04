import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map(
          (game: {
            id: number;
            name: string;
            background_image: string;
            parent_platforms: {
              platform: { id: number; name: string; slug: string };
            }[];
            metacritic: number;
          }) => (
            <GameCardContainer>
             
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          )
        )}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
