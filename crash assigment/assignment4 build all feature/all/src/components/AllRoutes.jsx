import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact ";
import Tickets from "./pages/Tickets";
import Logout from "./pages/Logout";
import TicketView from "./pages/TicketView ";
import TicketCreate from "./pages/TicketCreate";
import TicketEdit from "./pages/TicketEdit";
import { PrivetRouter } from "./PrivetRouter";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivetRouter>
            <Home />
          </PrivetRouter>
        }
      />
      <Route
        path="/about"
        element={
          <PrivetRouter>
            <About />
          </PrivetRouter>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivetRouter>
            <Contact />
          </PrivetRouter>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivetRouter>
            <Tickets />
          </PrivetRouter>
        }
      />
      <Route path="/ticket/view:id" element={<TicketView />} />
      <Route path="/ticket/create" element={<TicketCreate />} />
      <Route path="/ticket/edit:id" element={<TicketEdit />} />

      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
export default AllRoutes;
