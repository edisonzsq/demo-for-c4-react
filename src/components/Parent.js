import Child from "./Child";
import SecondChild from "./SecondChild";

const data = {
    firstName:"Edison",
    age:36
}

const arr = ["Musa", "Buchan", "Terence"]

const pets = [
    {
        petName:"JOhnny",
        type:"Cat"
    },
    {
        petName:"bobby",
        type:"Dog"
    }
]

function Parent(){
    return <div>
        This is Parent.
        <Child abc={data} apple="is a fruit" nameList={arr} petList={pets}/>
        <SecondChild fruit="Apple" />
    </div>
}

export default Parent;