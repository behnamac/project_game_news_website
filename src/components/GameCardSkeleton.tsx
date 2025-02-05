import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText height="200px" />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
