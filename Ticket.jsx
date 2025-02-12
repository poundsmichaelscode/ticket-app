const Ticket = ({ ticket }) => {
    if (!ticket) return null;
  
    return (
      <div className="max-w-md mx-auto mt-6 p-6 bg-gray-100 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold">Your Conference Ticket</h2>
        <img src={ticket.avatar} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mt-4" />
        <p className="mt-2 text-lg font-semibold">{ticket.fullName}</p>
        <p className="text-gray-600">{ticket.email}</p>
      </div>
    );
  };
  
  export default Ticket;
  