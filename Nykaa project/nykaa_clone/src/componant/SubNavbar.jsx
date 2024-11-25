import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

export const SubNavbar = () => {
  return (
    <>
      <Grid
      ml="10"
        boxShadow="lg"
        templateColumns={{ base: "repeat(5, 1fr)", md: "repeat(8, 1fr)" }}
        gap={{ base: "5px", md: "10px" }}
      >
        <GridItem>
          <Link to=" makeupmakeup_sale">Makeup</Link>{" "}
        </GridItem>
        <GridItem>
          <Link to="skin_sale"> Skin</Link>
        </GridItem>
        <GridItem>
          {" "}
          <Link to="hair_sale">Hair</Link>
        </GridItem>
        <GridItem>
          {" "}
          <Link to="batBath_body_sale">Bath & Body</Link>
        </GridItem>
        <GridItem>
          {" "}
          <Link to="natural"> Natural</Link>{" "}
        </GridItem>
        <GridItem display={{ base: "none", md: "block" }}>
          {" "}
          <Link to="mom_baby"> Mom & Baby</Link>
        </GridItem>
        <GridItem display={{ base: "none", md: "block" }}>
          {" "}
          <Link to="health_wellness">Health & Wellness</Link>
        </GridItem>
        <GridItem display={{ base: "none", md: "block" }}>
          {" "}
          <Link to="men"> Men</Link>
        </GridItem>
      </Grid>
    </>
  );
};
