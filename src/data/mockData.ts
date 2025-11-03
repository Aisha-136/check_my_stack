export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  coverUrl: string;
  description: string;
  publishYear: number;
  genre: string[];
}

export interface BranchAvailability {
  branchId: string;
  branchName: string;
  address: string;
  distance: string;
  status: 'available' | 'checked-out' | 'on-hold';
  copiesTotal: number;
  copiesAvailable: number;
  dueDate?: string;
  holdQueueLength?: number;
}

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '9780525559474',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    publishYear: 2020,
    genre: ['Fiction', 'Fantasy', 'Contemporary']
  },
  {
    id: '2',
    title: 'Educated',
    author: 'Tara Westover',
    isbn: '9780399590504',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    publishYear: 2018,
    genre: ['Memoir', 'Biography', 'Non-fiction']
  },
  {
    id: '3',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    isbn: '9781250301697',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop',
    description: 'A woman\'s act of violence against her husband and her refusal to speak propels a gripping psychological thriller.',
    publishYear: 2019,
    genre: ['Thriller', 'Mystery', 'Psychological']
  },
  {
    id: '4',
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop',
    description: 'An easy and proven way to build good habits and break bad ones with strategies that will transform your life.',
    publishYear: 2018,
    genre: ['Self-help', 'Psychology', 'Non-fiction']
  },
  {
    id: '5',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    isbn: '9780735219090',
    coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
    description: 'A mystery set in the quiet town of Barkley Cove, exploring nature, survival, and the complex relationships between loneliness and love.',
    publishYear: 2018,
    genre: ['Fiction', 'Mystery', 'Coming-of-age']
  },
  {
    id: '6',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
    description: 'A brief history of humankind exploring how Homo sapiens came to dominate the world.',
    publishYear: 2011,
    genre: ['History', 'Science', 'Non-fiction']
  },
  {
    id: '7',
    title: 'Roots: The Saga of an American Family',
    author: 'Alex Haley',
    isbn: '9780385037877',
    coverUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop',
    description: 'The epic story of Kunta Kinte, captured in The Gambia and sold as a slave, tracing seven generations of his family in America.',
    publishYear: 1976,
    genre: ['Historical Fiction', 'Biography', 'African Literature']
  },
  {
    id: '8',
    title: 'The Second Round',
    author: 'Lenrie Peters',
    isbn: '9780435900649',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
    description: 'A powerful novel by Gambian author Lenrie Peters about a young doctor returning to his African homeland after training abroad, confronting the complexities of post-colonial society.',
    publishYear: 1965,
    genre: ['African Literature', 'Fiction', 'Post-colonial']
  },
  {
    id: '9',
    title: 'A Reed in the Tide',
    author: 'Lenrie Peters',
    isbn: '9780435900380',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop',
    description: 'A celebrated collection of poetry by Gambian writer Lenrie Peters, exploring themes of identity, exile, and the African experience.',
    publishYear: 1965,
    genre: ['Poetry', 'African Literature']
  },
  {
    id: '10',
    title: 'When Africa Was Home',
    author: 'Tijan M. Sallah',
    isbn: '9780865433243',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop',
    description: 'A collection of poetry by Gambian poet Tijan M. Sallah, celebrating African culture, heritage, and the beauty of the Gambian landscape.',
    publishYear: 1991,
    genre: ['Poetry', 'African Literature', 'Cultural']
  },
  {
    id: '11',
    title: 'The Beautiful Ones Are Not Yet Born',
    author: 'Ayi Kwei Armah',
    isbn: '9780435905279',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    description: 'Though by a Ghanaian author, this novel had profound influence on Gambian literature, exploring corruption and moral decay in post-independence West Africa.',
    publishYear: 1968,
    genre: ['African Literature', 'Fiction', 'Political']
  },
  {
    id: '12',
    title: 'Chaff on the Wind',
    author: 'Ebou Dibba',
    isbn: '9780333418895',
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop',
    description: 'A pioneering novel by Gambian author Ebou Dibba, depicting traditional Gambian village life and the clash between old customs and modern values.',
    publishYear: 1986,
    genre: ['African Literature', 'Fiction', 'Cultural']
  },
  {
    id: '13',
    title: 'The Land of Smiling Stars',
    author: 'Sally Singhateh',
    isbn: '9781469152349',
    coverUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
    description: 'A memoir by Gambian-British author Sally Singhateh about growing up in The Gambia during the era of independence and cultural transformation.',
    publishYear: 2012,
    genre: ['Memoir', 'African Literature', 'Biography']
  },
  {
    id: '14',
    title: 'Kankurang United',
    author: 'Tijan M. Sallah',
    isbn: '9781936323012',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    description: 'A novel celebrating Gambian folklore and the traditional Kankurang masquerade, weaving together sport, culture, and community in modern Gambia.',
    publishYear: 2013,
    genre: ['Fiction', 'African Literature', 'Sports', 'Cultural']
  },
  {
    id: '15',
    title: 'Dream Kingdom and Other Poems',
    author: 'Tijan M. Sallah',
    isbn: '9781569022450',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop',
    description: 'A powerful poetry collection examining the Gambian experience, from the Mandinka kingdoms to modern challenges of development and diaspora.',
    publishYear: 1997,
    genre: ['Poetry', 'African Literature', 'History']
  },
  {
    id: '16',
    title: 'The Gambia: Stories and Legends from West Africa',
    author: 'Emil Magel',
    isbn: '9780874743869',
    coverUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop',
    description: 'A collection of traditional Gambian folktales and legends, preserving the oral storytelling tradition of the Gambia\'s diverse ethnic groups.',
    publishYear: 1984,
    genre: ['Folklore', 'African Literature', 'Cultural', 'Anthology']
  },
  {
    id: '17',
    title: 'Between Grief and Grace',
    author: 'Lamin Jallow',
    isbn: '9781234567890',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    description: 'A poignant contemporary novel by Gambian author Lamin Jallow exploring themes of loss, resilience, and redemption in modern Gambia.',
    publishYear: 2025,
    genre: ['Fiction', 'African Literature', 'Contemporary']
  }
];

export const mockBranches: BranchAvailability[] = [
  {
    branchId: 'main',
    branchName: 'Main Library',
    address: '123 Library St, Downtown',
    distance: '0.5 mi',
    status: 'available',
    copiesTotal: 3,
    copiesAvailable: 2
  },
  {
    branchId: 'north',
    branchName: 'North Branch',
    address: '456 Oak Ave, North District',
    distance: '2.1 mi',
    status: 'checked-out',
    copiesTotal: 2,
    copiesAvailable: 0,
    dueDate: 'Dec 15, 2025'
  },
  {
    branchId: 'east',
    branchName: 'East Branch',
    address: '789 Maple Rd, East Side',
    distance: '3.5 mi',
    status: 'on-hold',
    copiesTotal: 2,
    copiesAvailable: 0,
    holdQueueLength: 3
  },
  {
    branchId: 'west',
    branchName: 'West Branch',
    address: '321 Pine St, West End',
    distance: '4.2 mi',
    status: 'available',
    copiesTotal: 1,
    copiesAvailable: 1
  }
];

export const getBookAvailability = (bookId: string): BranchAvailability[] => {
  // Simulate varying availability across branches
  return mockBranches.map(branch => {
    const random = Math.random();
    const status = random > 0.6 ? 'available' : random > 0.3 ? 'checked-out' : 'on-hold';
    
    return {
      ...branch,
      status,
      copiesAvailable: status === 'available' ? Math.floor(Math.random() * branch.copiesTotal) + 1 : 0,
      dueDate: status === 'checked-out' ? 'Dec ' + (Math.floor(Math.random() * 20) + 1) + ', 2025' : undefined,
      holdQueueLength: status === 'on-hold' ? Math.floor(Math.random() * 5) + 1 : undefined
    };
  });
};
