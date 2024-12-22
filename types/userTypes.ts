export interface User {
    id: number;
    name: string;
    email: string;
    company: {
      name: string;
    };
    website: string;
    address: {
      city: string;
    };
  }