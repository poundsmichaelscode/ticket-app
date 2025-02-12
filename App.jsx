import { useState } from "react";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  const [ticket, setTicket] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Conference Ticket Generator</h1>
      <Form onSubmit={setTicket} />
      <Ticket ticket={ticket} />
    </div>
  );
}

export default App;
