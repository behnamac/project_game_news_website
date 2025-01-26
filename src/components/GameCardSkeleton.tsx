import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width="250px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
