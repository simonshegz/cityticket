export interface CartItem {
  id: string;
  eventId: string;
  eventTitle: string;
  ticketType: string;
  quantity: number;
  price: number;
  date: string;
  time: string;
  venue: string;
  image?: string;
}