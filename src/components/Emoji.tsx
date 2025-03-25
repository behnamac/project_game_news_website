import bullsEye from "../components/assets/Emojis/bulls-eye.webp";
import meh from "../components/assets/Emojis/meh.webp";
import thumbsUp from "../components/assets/Emojis/thumbs-up.webp";
import { ImageProps, Img } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

function Emoji({ rating }: EmojiProps) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Img {...emojiMap[rating]} marginTop={1}/>;
}

export default Emoji;
