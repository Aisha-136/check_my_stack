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
