import { User } from "@/types/userTypes";

export const getUsers = async (): Promise<User[]> => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return [];
    }
  };
  