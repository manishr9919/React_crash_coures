import { Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import Error from "../Error";
import TicketCard from "./TicketCard";

function Tickets() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState([]);

  async function FetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: "http://localhost:3000/tickets",
      });
      let data = res.data;
      setLoading(false);
      setTickets(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    FetchAndUpdateData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Container maxW="Container.xl" border="1px solid red">
      <Flex direction="row">
        <Heading>Listing page</Heading>
        <Spacer />
        <Button
          onClick={() => {
            navigate("/ticket/create");
          }}
          colorScheme="red"
          variant="outline"
        >
          Create ticket
        </Button>
      </Flex>
      {tickets.map((ticket) => (
        <TicketCard {...ticket} key={ticket.id} />
      ))}
    </Container>
  );
}
export default Tickets;
