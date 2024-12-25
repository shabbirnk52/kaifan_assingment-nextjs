// Define types for our data
export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved';
    priority: 'Low' | 'Medium' | 'High';
    category: string;
    assignee: string;
    created: string;
  }
  
  interface TicketStats {
    total: number;
    open: number;
    inProgress: number;
    resolved: number;
  }
  
  interface DummyData {
    tickets: Ticket[];
    stats: TicketStats;
  }
  
  // Generate dummy data
  export const dummyTickets: DummyData = {
    tickets: [
      {
        id: "TK-001",
        title: "System Login Issue",
        description: "Users unable to login to the system",
        status: "Open",
        priority: "High",
        category: "Authentication",
        assignee: "John Doe",
        created: new Date().toISOString()
      },
      // Add more dummy tickets...
    ],
    stats: {
      total: 25,
      open: 10,
      inProgress: 8,
      resolved: 7
    }
  }