import React, {useState} from 'react'

// mendefinisikan props dengan 'interface', harus diluar function
interface Props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}

// membuat object country dengan type data enum dan lalu diexport 
export enum Country {
    Canada = "Canada",
    Brazil = "Brazil",
    UK = "United Kingdom",
}

// contoh membuat function dengan langsung mendeklarasikan type datanya
// contoh yang salah karena outputnya berupa string bukan number, sesuai yang telah dideklarasikan
// const getAge = (argument: string): number =>{
//     return "90"
// }


export const Person = (props: Props) => {
    // contoh membuat state di typeScript dapat langsung ditentukan type datanya
    // seperti contoh dibawah namun jika type data dengan argument yang diberikan berbeda type data maka akan error
    // const [state, setState] = useState<string>("");

  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person: {props.isMarried ? "is" : "not"} Married</h1>
        <br/>
        <h1>My Friends is :</h1>
        {props.friends.map((friend: string) => (
            <h1>{friend}</h1>
            )
        )}

        <h1>Country: {props.country}</h1>
    </div>
  )
}
