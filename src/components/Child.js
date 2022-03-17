import {useState} from "react";

function Child({abc, apple, nameList, petList}){
    
    const [fruit, setFruit] = useState(apple);

    const handleFruitChange = (e) => {
        setFruit(e.target.value);
    }

    return <div>
        This is Child.
        {abc.firstName}
        {apple}
        
        <ul>            
            {nameList.map((d) => {
                return <li>{d}</li>
            })}
        </ul>
        
        {nameList}

        <ul>
            {petList.map(pet => {
                
                if(pet.type.toLowerCase() === "cat")
                    return <li>{pet.petName} - {pet.type}</li>
                
            })}
        </ul>

        <input type='text' onChange={handleFruitChange}/>
        Fruit: {fruit}

    </div>
}

// props = {
//     abc:{
//         firstName:"Edison",
//         age:36
//     },
//     apple:"is a fruit"
// }

export default Child;

/*
    string, number, boolean, null, undefined, symbol

    function, object and array
*/
