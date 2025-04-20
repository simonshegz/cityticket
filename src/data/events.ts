import { Event } from '../types/Event';

export const eventsData: Event[] = [
  {
    id: "e1",
    title: "Summer Music Festival 2025",
    description: "The biggest music festival of the year featuring top artists across multiple genres. Join us for three days of amazing performances, great food, and unforgettable memories. Special guest appearances and surprise performances throughout the weekend.",
    date: "2025-07-15",
    time: "14:00",
    venue: "Central Park",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 150,
    category: "concerts",
    featured: true,
    tickets: [
      {
        type: "General Admission",
        price: 150,
        available: 1000
      },
      {
        type: "VIP Pass",
        price: 350,
        available: 200
      },
      {
        type: "Weekend Pass",
        price: 250,
        available: 500
      }
    ],
    artist: {
      name: "Various Artists",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "Featuring top artists from around the world across multiple genres."
    },
    additionalImages: [
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    id: "e2",
    title: "NBA Finals Game 5",
    description: "Experience the intensity of the NBA Finals as the top teams battle for the championship. Don't miss this thrilling match that could determine the champion. Exclusive merchandise available only at this game.",
    date: "2025-06-12",
    time: "19:30",
    venue: "Madison Square Garden",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/1103832/pexels-photo-1103832.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 200,
    category: "sports",
    featured: true,
    tickets: [
      {
        type: "Upper Level",
        price: 200,
        available: 500
      },
      {
        type: "Lower Level",
        price: 400,
        available: 300
      },
      {
        type: "Courtside",
        price: 1500,
        available: 50
      }
    ],
    seatmap: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "e3",
    title: "Hamilton: The Musical",
    description: "The critically acclaimed musical that has taken Broadway by storm. Hamilton tells the story of America's founding father Alexander Hamilton, an immigrant from the West Indies who became George Washington's right-hand man during the Revolutionary War.",
    date: "2025-08-22",
    time: "20:00",
    venue: "Richard Rodgers Theatre",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/269097/pexels-photo-269097.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 250,
    category: "theater",
    featured: true,
    tickets: [
      {
        type: "Balcony",
        price: 250,
        available: 200
      },
      {
        type: "Mezzanine",
        price: 350,
        available: 150
      },
      {
        type: "Orchestra",
        price: 450,
        available: 100
      }
    ],
    artist: {
      name: "Original Broadway Cast",
      image: "https://images.pexels.com/photos/11308362/pexels-photo-11308362.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "The talented cast brings to life the story of Alexander Hamilton."
    }
  },
  {
    id: "e4",
    title: "Food & Wine Festival",
    description: "Sample the finest cuisine and wines from around the world at this premier culinary event. Meet celebrity chefs, attend cooking demonstrations, and enjoy a day of delicious food and drinks. Special tasting events scheduled throughout the day.",
    date: "2025-09-05",
    time: "12:00",
    venue: "Hudson Yards",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 85,
    category: "festivals",
    featured: true,
    tickets: [
      {
        type: "General Admission",
        price: 85,
        available: 2000
      },
      {
        type: "VIP Experience",
        price: 165,
        available: 300
      }
    ]
  },
  {
    id: "e5",
    title: "Taylor Swift: The Eras Tour",
    description: "Taylor Swift brings her record-breaking tour to the city for an unforgettable night of music spanning her entire career. Experience all the eras of Taylor's musical journey in one spectacular show.",
    date: "2025-05-18",
    time: "19:00",
    venue: "MetLife Stadium",
    location: "East Rutherford, NJ",
    image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 175,
    category: "concerts",
    featured: false,
    tickets: [
      {
        type: "Standard Ticket",
        price: 175,
        available: 5000
      },
      {
        type: "Premium Seating",
        price: 275,
        available: 2000
      },
      {
        type: "VIP Package",
        price: 450,
        available: 500
      }
    ],
    artist: {
      name: "Taylor Swift",
      image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "Taylor Swift is an American singer-songwriter whose discography spans multiple genres and has received critical acclaim."
    },
    seatmap: "https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "e6",
    title: "Stand-Up Comedy Night",
    description: "Join us for an evening of laughter with top comedians from across the country. This special event features headliners from Netflix specials and late-night TV.",
    date: "2025-06-23",
    time: "21:00",
    venue: "Comedy Cellar",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/8108039/pexels-photo-8108039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 45,
    category: "comedy",
    featured: false,
    tickets: [
      {
        type: "Standard Seating",
        price: 45,
        available: 150
      },
      {
        type: "Premium Seating",
        price: 65,
        available: 50
      }
    ]
  },
  {
    id: "e7",
    title: "New York City Marathon",
    description: "The world's largest marathon and one of the most prestigious running events. 50,000+ runners from around the globe tackle the 26.2-mile course through all five boroughs of New York City.",
    date: "2025-11-02",
    time: "08:00",
    venue: "Various Locations",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 295,
    category: "sports",
    featured: false,
    tickets: [
      {
        type: "Runner Entry",
        price: 295,
        available: 10000
      },
      {
        type: "Spectator Package",
        price: 50,
        available: 2000
      }
    ]
  },
  {
    id: "e8",
    title: "Broadway in the Park",
    description: "Experience the magic of Broadway under the stars. This special outdoor event features performances from current and classic Broadway shows in the beautiful setting of Central Park.",
    date: "2025-07-28",
    time: "20:00",
    venue: "Central Park",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 60,
    category: "theater",
    featured: false,
    tickets: [
      {
        type: "Lawn Seating",
        price: 60,
        available: 1000
      },
      {
        type: "Premium Seating",
        price: 120,
        available: 500
      }
    ]
  },
  {
    id: "e9",
    title: "Jazz in the Garden",
    description: "An enchanting evening of jazz music in the botanical garden. Bring a blanket and enjoy a picnic while listening to some of the best jazz musicians in the city.",
    date: "2025-08-15",
    time: "18:30",
    venue: "Brooklyn Botanic Garden",
    location: "Brooklyn, NY",
    image: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1600",
    price: 40,
    category: "concerts",
    featured: false,
    tickets: [
      {
        type: "General Admission",
        price: 40,
        available: 800
      },
      {
        type: "VIP Package",
        price: 90,
        available: 100
      }
    ],
    artist: {
      name: "The Jazz Quartet",
      image: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "A renowned jazz ensemble bringing smooth melodies and improvisational brilliance."
    }
  },
  {
    id: "e10",
    title: "International Film Festival",
    description: "A celebration of cinema from around the world. This week-long festival features screenings of award-winning films, director Q&As, and workshops.",
    date: "2025-10-10",
    time: "Various",
    venue: "Lincoln Center",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 75,
    category: "festivals",
    featured: false,
    tickets: [
      {
        type: "Day Pass",
        price: 75,
        available: 500
      },
      {
        type: "Festival Pass",
        price: 275,
        available: 300
      }
    ]
  },
  {
    id: "e11",
    title: "Comic Con",
    description: "The ultimate pop culture convention for fans of comics, movies, TV shows, and gaming. Meet celebrities, attend panels, and shop for exclusive merchandise.",
    date: "2025-10-05",
    time: "10:00",
    venue: "Javits Center",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/9605308/pexels-photo-9605308.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 65,
    category: "festivals",
    featured: false,
    tickets: [
      {
        type: "Single Day",
        price: 65,
        available: 10000
      },
      {
        type: "Weekend Pass",
        price: 150,
        available: 5000
      },
      {
        type: "VIP Experience",
        price: 300,
        available: 1000
      }
    ]
  },
  {
    id: "e12",
    title: "Classical Symphony Orchestra",
    description: "Experience the majesty of classical music with the renowned New York Philharmonic performing masterpieces from Mozart, Beethoven, and Tchaikovsky.",
    date: "2025-09-18",
    time: "19:30",
    venue: "Carnegie Hall",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/5851016/pexels-photo-5851016.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 85,
    category: "concerts",
    featured: false,
    tickets: [
      {
        type: "Balcony",
        price: 85,
        available: 300
      },
      {
        type: "Main Floor",
        price: 150,
        available: 200
      },
      {
        type: "Box Seats",
        price: 250,
        available: 50
      }
    ],
    artist: {
      name: "New York Philharmonic",
      image: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "One of the oldest musical institutions in the United States, the New York Philharmonic is renowned for its artistic excellence."
    }
  }
];