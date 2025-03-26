import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const cardBg = useColorModeValue("#f4f4f5", "gray.700"); // Light mode: gray.50, Dark mode: gray.700

  return (
    <Card bg={cardBg} borderRadius="md" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
