import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import { LINKS } from "messages";
import {
  GiPenguin as GiPenguinBase,
  GiRoad,
  GiThorHammer,
} from "react-icons/gi";
import { AiOutlineQuestion, AiOutlineRocket } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import NavLink from "next/link";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";
import { IS_MINT_LINK_VISIBLE } from "messages";

const GiPenguin = styled(GiPenguinBase)`
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.dark};
  }
`;
const StyledHeader = styled.nav`
  padding: 40px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(5px);
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`;
const StyledFlex = styled(Flex)`
  visibility: hidden;
  @media (min-width: 1024px) {
    visibility: unset;
  }
`;
const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledHeader>
        <Flex flexBasis="50%">
          <NavLink href="/">
            <Heading fontSize={[5, 6]}>Golen Rug</Heading>
          </NavLink>
        </Flex>
        <Flex
          flexBasis={["50%"]}
          justifyContent="flex-end"
          alignItems="center"
          pl={[3]}
        >
          <Link
            href="https://discord.gg/vr74bMDa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDiscord fill={colors.light} size="36px" />
          </Link>
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
