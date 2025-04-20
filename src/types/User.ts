export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  address?: string;
  orders?: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface OrderItem {
  id: string;
  eventId: string;
  eventTitle: string;
  ticketType: string;
  quantity: number;
  price: number;
  date: string;
  time: string;
  venue: string;
}