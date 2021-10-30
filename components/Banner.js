import React from "react";
import { Flex, Heading } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";

const Banner = (props) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      paddingTop={["76px"]}
      justifyContent="space-between"
    >
      <Flex
        flexBasis={["100%"]}
        flexDirection="column"
        textAlign="center"
        alignItems="center"
      >
        <Heading fontSize={[6, 7]} fontWeight={[700]} marginBottom={[3]}>
          Get ready for V1 launch
        </Heading>
        <Heading
          fontSize={[3, 4]}
          fontWeight={[400]}
          color={colors.light1}
          mb={[4]}
          px={[4, 0]}
        >
          Discover why NFT enthusiasts are gathering up for these rugs.
        </Heading>
        <Link href="https://discord.gg/J37H9GjPk3" target="_blank" rel="noopener noreferrer">
          <Button>Join Discord</Button>
        </Link>
      </Flex>
      <Flex flexBasis="100%" sx={{ position: "relative" }}>
        <Image
          layout="fill"
          src={`/dolphin_01.png`}
          alt={`rare dolphin`}
          quality="70"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
