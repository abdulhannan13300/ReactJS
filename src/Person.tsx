//interface used for declaring the type of the variables 
//for the Person Component 
interface setPersonType {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}
//Using enum now we can filter the input we can get from the user
export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    India = "India",
    UAE = "UAE"
}

export const Person = (props: setPersonType ) => {
    return (
      <div>
        <h2> Name: {props.name} </h2>
        <h2> Email: {props.email}</h2>
        <h2> Age: {props.age} </h2>
        <h2> This person {props.isMarried ? 'is' : 'is not'} Married </h2>
        {props.friends.map((friend) => (
            <h2>friends: {friend}</h2>
        ))}
        <h2> Country : {props.country}</h2>
      </div>  
      
    )
}
