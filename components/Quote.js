import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.light1};
`;

const Quote = () => {
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 10%, transparent 100%)`,
      }}
      marginTop={[6]}
      py={[5]}
    >
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["row"]}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box
          sx={{ borderRadius: "50%", overflow: "hidden", position: "relative" }}
          height="209px"
          width="209px"
          mb={[3,0]}
        >
          <Image
            src={`/bender.png`}
            alt={`bender`}
            layout="fill"
            objectFit="cover"
            quality="70"
          />
        </Box>
        <Box flexBasis={["100%","70%"]} marginLeft={[0,5]} px={[4,0]}>
          <Heading fontSize={[4,5]} fontWeight={[700]}>
            “People ask me where's the D in Golden. Check in your wallet or something might find it there.”
          </Heading>
          <Heading fontSize={[4,5]} fontWeight={[700]} marginTop={[3]}>
            Bender, <StyledSpan>Rug Inspector</StyledSpan>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Quote;
