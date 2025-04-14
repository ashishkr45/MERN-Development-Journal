interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User }; // very ugly way to writer this shit

const users: Users = { // smth like key-value pair
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

type userR = Record<string, {name: string, mail: string}> 

const userEx: userR = {
	'xyz564': {name: "Ash", mail: "ash@mail.com"},
}

console.log(userEx);