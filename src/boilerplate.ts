interface User {
  id: number;
  name: string;
  email: string;
}
class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

const userManager = new UserManager();

userManager.addUser({ id: 1, name: "Alice", email: "alice@example.com" });
userManager.addUser({ id: 2, name: "Bob", email: "bob@example.com" });

const user = userManager.getUser(1);
if (user) {
  console.log(greetUser(user));
}

function wrapInArray<T>(item: T): T[] {
  return [item];
}

const wrappedNumber = wrapInArray(42);
const wrappedString = wrapInArray("Hello, TypeScript!");

async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}

async function main() {
  console.log("TypeScript Boilerplate");
  // Add your main logic here
}

main().catch(error => console.error(error));
