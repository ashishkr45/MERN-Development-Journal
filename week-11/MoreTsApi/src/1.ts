type user = {
	name: string, 
	age: number,
	email: string,
	password: string,
}

// we want to make a db call to update user
// and we only allow to update the name, age, password, how'll we take the props

type updateUser = Pick<user, 'name' | 'age' | 'password'> // we are here pricking this properties for the og user
// but in irl we'll not be updating all the properties at ones 
// so we'll have to mark'em as optional i.e. ?
/*
type updatedUser = {
	name?: string,
	age?: number,
	password?: string
}

but here we're repeating too much code
*/

type UpdateUserOptional = Partial<updateUser> // it'll make all the props of the updateUser optional

function displyCrad(props: updateUser) {
	console.log(`Name: ${props.name} \n Age: ${props.age} \n Password: ${props.password}}`);
}

// when we are defining a array or an bject as constant but we're still able to change it's internal properties

const userA: user = {
	name: "Ash",
	age: 12,
	email: "ash45.com",
	password: "tnjgr34"
}

userA.email = "tnaujier235235"; // see we are able to change the containts even tho it's a const

// if we want to make the inner contents also im-mutaible
type imMuteUser = {
	readonly name: string, // readonly forbids the mutablity of the inner properties also
	readonly age: number
}

type immMuteUser = {
	name: string,
	age: number
}


const userB: Readonly<immMuteUser> = { // another way to make'em read-only
	name: "Ash",
	age: 34
}

// userB.age = 34; it make'em read-only property

type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event1, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK