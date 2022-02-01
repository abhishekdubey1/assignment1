import moment from "moment";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../api";
import ButtonGroup from "./AllTicketsBtns";
import { More, Search } from "./Svg";

const USER = 1;
const USER_IMAGES = [
  "https://images.unsplash.com/photo-1643168662222-bbe670f0457c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];
const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch(`${API_ENDPOINT}users/${USER}/Tickets`)
      .then((data) => data.json())
      .then((tickets) => setTickets(tickets))
      .catch((err) =>
        console.log(`%c${err.message}`, "color: yellow, background: red")
      );
  }, []);
  return (
    <section className="tickets">
      <div className="search-bar">
        <Search />
        <input type="text" placeholder="Search for..." />
      </div>
      <h1>All Tickets</h1>
      <ButtonGroup />
      <ul className="tickets-list">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="ticket">
            <div className="ticket-header">
              <div className="ticket-header-left">
                <img
                  src={USER_IMAGES[0]}
                  alt="avatar"
                  className="ticket-avatar"
                />
                <div className="ticket-info">
                  <span className="ticket-title">{ticket.title}</span>
                  <span className="ticket-creator">
                    {ticket.creator.name} reported an issue
                  </span>
                </div>
              </div>
              <div className="ticket-time">
                {moment(ticket.createdAt).fromNow()}
                <button className="btn-svg no-border">
                  <More height="18" width="18" />
                </button>
              </div>
            </div>
            <p className="ticket-message">{ticket.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tickets;
