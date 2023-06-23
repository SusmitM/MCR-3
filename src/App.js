
import { useState } from 'react';
import './App.css';
const snacks = [
  {
    id: 1,
    product_name: "Granola Bar",
    product_weight: "21g",
    price: 299,
    calories: 150,
    ingredients: ["Oats", "Honey", "Nuts", "Dried Fruits"]
  },
  {
    id: 2,
    product_name: "Fruit and Nut Mix",
    product_weight: "73g",
    price: 749,
    calories: 353,
    ingredients: [
      "Almonds",
      "Cashews",
      "Dried Cranberries",
      "Dried Blueberries"
    ]
  },
  {
    id: 3,
    product_name: "Veggie Chips",
    product_weight: "28g",
    price: 279,
    calories: 130,
    ingredients: ["Sweet Potatoes", "Beets", "Kale", "Sea Salt"]
  },
  {
    id: 4,
    product_name: "Protein Balls",
    product_weight: "100g",
    price: 499,
    calories: 318,
    ingredients: ["Dates", "Almond Butter", "Protein Powder", "Chia Seeds"]
  }
];

function App() {
  const [data,setData]=useState(snacks);

  const [currentState,setCurrentState]=useState({id:false,name:false,price:false,calories:false,ingredient:false,weight:false});

  const [sortItem,setSortItem]=useState();


// function to handel search

const handelSearch=(searchText)=>{
  if(searchText===""){
    setData(snacks);
    return

  }
  const searchedSnacks= data.filter(({product_name,ingredients
  })=>product_name.toLowerCase().includes(searchText.toLowerCase()) || ingredients.find(item=>item.toLowerCase().includes(searchText.toLowerCase())))

  setData(searchedSnacks);
 
}

// sort by ID

const sortById = () => {
  if(!currentState.id){
  const DescendingById = [...data].sort((a, b) => b.id - a.id);
  setData(DescendingById);
  setCurrentState(prev=> ({...prev,id:!prev.id}) )
  
  }
  else{
    const AscendingById = [...data].sort((a, b) => a.id - b.id);
    setData(AscendingById);
   
    setCurrentState(prev=> ({...prev,id:!prev.id}) )

  }
  
};
// sort by Name
const sortByName=()=>{
  if(!currentState.name){
    const DescendingByName=[...data].sort((a,b)=>b.product_name.localeCompare(a.product_name))
    setData(DescendingByName);
    setCurrentState(prev=> ({...prev,name:!prev.name}) )

   
  }
  else{
    const AscendingByName=[...data].sort((a,b)=>a.product_name.localeCompare(b.product_name))
    setData(AscendingByName);
    setCurrentState(prev=> ({...prev,name:!prev.name}) )
  }

}
//sort by Price
const sortByPrice = () => {
  if(!currentState.price){
  const DescendingByPrice = [...data].sort((a, b) => b.price - a.price);
  setData(DescendingByPrice);
  setCurrentState(prev=> ({...prev,price:!prev.price}) )
 
  }
  else{
    const AscendingByPrice = [...data].sort((a, b) => a.price - b.price);
    setData(AscendingByPrice);
   
    setCurrentState(prev=> ({...prev,price:!prev.price}) )

  }
  
};

//sort by Weight
const sortByWeight = () => {
  if(!currentState.weight){
  const DescendingByWeight = [...data].sort((a, b) => parseInt(b.product_weight) -parseInt(a.product_weight));
  setData(DescendingByWeight);
  setCurrentState(prev=> ({...prev,weight:!prev.weight}) )
 
  }
  else{
    const AscendingByWeight = [...data].sort((a, b) => parseInt(a.product_weight) - parseInt(b.product_weight));
    setData(AscendingByWeight);
   
    setCurrentState(prev=> ({...prev,weight:!prev.weight}) )

  }
  
};




//sort by Calories
const sortByCalories = () => {
  if(!currentState.calories){
  const DescendingByCalories = [...data].sort((a, b) => b.calories - a.calories);
  setData(DescendingByCalories);
  setCurrentState(prev=> ({...prev,calories:!prev.calories}) )
 
  }
  else{
    const AscendingByCalories = [...data].sort((a, b) => a.calories - b.calories);
    setData(AscendingByCalories);
   
    setCurrentState(prev=> ({...prev,calories:!prev.calories}) )

  }
  
};

// sort by Name
const sortByIngredient=()=>{
  if(!currentState.ingredient){
    const DesendingByIngredient=[...data].sort((a,b)=>b.ingredients[0].localeCompare(a.ingredients[0]))
    setData(DesendingByIngredient);
    setCurrentState(prev=> ({...prev,ingredient:!prev.ingredient}) )

    
  }
  else{
    const AscendingByIngredient=[...data].sort((a,b)=>a.ingredients[0].localeCompare(b.ingredients[0]))
    setData(AscendingByIngredient);
    setCurrentState(prev=> ({...prev,ingredient:!prev.ingredient}) )
  }

}



  
  return (
    <div className="App" style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
<h1>Snacks Table</h1>

<div style={{margin:"20px auto"}}>
  Search Item:  {"  "}
  <input style={{width:"250px"}} placeholder='Enter snack name or ingredient' onChange={(e)=>handelSearch(e.target.value)}/>
</div>




     <table border={"1px solid black"}>
      <tr style={{cursor:"pointer"}}>
        <th onClick={()=> sortById()}>ID</th>
        <th onClick={()=>sortByName()}>Product Name</th>
        <th onClick={()=>sortByWeight()}>Product Weight</th>
        <th onClick={()=>sortByPrice()}>Price</th>
        <th onClick={()=>sortByCalories()}>Calories</th>
        <th onClick={()=>sortByIngredient()}>Ingredients</th>
      </tr>

      {
        data.map(snackData=>{
          return(
            <tr key={snackData.id}>
              <td>{snackData.id}</td>
              <td>{snackData.product_name}</td>
              <td>{snackData.product_weight}</td>
              <td>{snackData.price}</td>
              <td>{snackData.calories}</td>
              <td>{snackData.ingredients.map(item=><span>{item},{" "}</span>)}</td>
            </tr>
          )
        }
          
            
          )
      }
     </table>






    </div>
  );
}

export default App;
