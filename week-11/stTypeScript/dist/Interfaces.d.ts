declare function InfoPrint(user: {
    name: string;
    age: number;
}): void;
declare const Info: {
    name: string;
    age: number;
};
interface userType {
    firstName: string;
    lastName: string;
    age: number;
}
declare function greet(user: userType): void;
declare const user1: userType;
