export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  price: number | string;
  category: string;
  featured: boolean;
  tickets: {
    type: string;
    price: number;
    available: number;
  }[];
  artist?: {
    name: string;
    image: string;
    bio: string;
  };
  additionalImages?: string[];
  seatmap?: string;
}