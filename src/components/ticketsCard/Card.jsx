
import React, { useEffect, useState } from 'react';

const Card = ({ setInProgressCount, setResolvedCount }) => {
  const [users, setUsers] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [loadingId, setLoadingId] = useState(null); 

  useEffect(() => {
    fetch("/Tickets.json")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleCardClick = (ticket) => {
    if (!taskStatus.find(t => t.id === ticket.id)) {
      setTaskStatus(prev => [...prev, ticket]);
      setInProgressCount(prev => prev + 1);
      alert(`Ticket "${ticket.title}" added to Task Status`); 
    }
  };

  const handleComplete = (ticketId) => {
    const completedTicket = taskStatus.find(t => t.id === ticketId);
    if (!completedTicket) return;

    setLoadingId(ticketId);

    setTimeout(() => {
      setTaskStatus(prev => prev.filter(t => t.id !== ticketId));
      setInProgressCount(prev => prev - 1);
      setResolvedCount(prev => prev + 1);

      setLoadingId(null);
      alert(`Ticket "${completedTicket.title}" marked as complete`); 
    }, 1000);
  };

  return (
    <div className="bg-gray-100 w-full py-10">
      <div className="max-w-[1200px] mx-auto mb-6">
        <h1 className="font-semibold text-2xl">Customer Tickets</h1>
      </div>

      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row gap-6">
        {/* Tickets List */}
        <div className="w-full md:w-[70%]">
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map(ticket => (
              <div
                key={ticket.id}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition cursor-pointer"
                onClick={() => handleCardClick(ticket)}
              >
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">{ticket.title}</h2>
                  <div className={`flex items-center gap-2 rounded-full w-[120px] h-[28px] px-2
                    ${ticket.status === "Open" ? "bg-green-200" : "bg-orange-200"}`}>
                    <img
                      src={ticket.status === "Open" ? "/images/Ellipse 22.png" : "/images/Ellipse 22 (2).png"}
                      alt=""
                      className="w-4 h-4"
                    />
                    <span className={`text-sm font-medium 
                      ${ticket.status === "Open" ? "text-green-700" : "text-orange-700"}`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{ticket.description}</p>

                <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 font-semibold">#{ticket.id}</p>
                    <span className={`px-2 py-1 rounded text-xs 
                      ${ticket.priority === "HIGH PRIORITY" ? "text-red-600 bg-red-100" : "text-green-500 bg-green-100"}`}>
                      {ticket.priority}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>{ticket.customer}</span>
                    <img src="/images/card.png" alt="" className="w-4 h-4" />
                    <span>{ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div className="w-full md:w-[340px]  rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold mb-4">Task Status</h1>
          {taskStatus.length === 0 ? (
            <p className="text-gray-600">Select a ticket to add to Task Status</p>
          ) : (
            taskStatus.map(task => (
              <div key={task.id} className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
                <span>{task.title}</span>
                <div className="flex items-center gap-2">
                  {loadingId === task.id && (
                    <span className="text-sm text-blue-600 animate-pulse">Loading...</span>
                  )}
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    disabled={loadingId === task.id}
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

