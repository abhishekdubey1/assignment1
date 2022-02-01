import profilePic from "../profile-pic.jpeg";
import { MailUnread, Notifications } from "./Svg";
const NewTicket = () => {
  return (
    <section className="new-ticket">
      <div className="new-ticket-options">
        <select name="New Ticket" className="btn btn-primary">
          <option value="">New Ticket</option>
          <option value="">Edit Ticket</option>
        </select>
        <button className="btn-svg no-border">
          <MailUnread />
        </button>
        <button className="btn-svg no-border">
          <Notifications />
        </button>
        <div className="new-ticket-user">
          <img src={profilePic} alt="user" />
          <select className="">
            <option value="">Inverness Mecanzie</option>
          </select>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex">
          <div className="properties">
            {/* labels: Type, status, priority, assign to */}
            <h2>Properties</h2>
            <label htmlFor="type">Type</label>
            <select id="type">
              <option>Incident</option>
              <option>Problem</option>
              <option>Question</option>
            </select>
            <label htmlFor="status"> Status</label>
            <select id="status">
              <option>New</option>
              <option>Open</option>
              <option>Pending</option>
              <option>Solved</option>
              <option>Closed</option>
            </select>
            <label htmlFor="priority">Priority</label>
            <select id="priority">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
            <label htmlFor="assigned-to">Assign to</label>
            <select id="assigned-to">
              <option>John Doe</option>
              <option>Jane Doe</option>
              <option>Joe Doe</option>
            </select>
          </div>

          <div className="contact-details">
            <h2>Contact Details</h2>
            <label htmlFor="email">Email ID</label>
            <input type="text" id="email" />
            <label htmlFor="phone">Work Phone</label>
            <input type="text" id="phone" />
            <label htmlFor="logs">Time Logs</label>
            <select id="logs">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <label htmlFor="to-do">To - Do</label>
            <select id="to-do">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mx-10">
          New Ticket
        </button>
      </form>
    </section>
  );
};

export default NewTicket;
