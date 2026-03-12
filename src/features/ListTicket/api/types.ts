export interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

export interface Tickets {
  tickets: Ticket[];
  stop: boolean;
}

interface ErrorResponse {
  message: string;
}

export interface TicketResponse {
  isLoading: boolean;
  error: ErrorResponse | null;
  tickets: Tickets | null;
}

export interface SearchId {
  searchId: string;
}
