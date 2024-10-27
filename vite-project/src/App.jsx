import {useState} from 'react'
import './App.css'
import { puppyList } from './data.js'


function App() {
  //console.log(useState(puppyList));
  //console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [showImage,setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  function handleClick() {
    // some logic here
  }


  //callback function 
  //passed to find searches for a puppy with an id property that matches the featPupId state value.
  const featuredPup = puppies.find((pup)=> pup.id === featPupId); 
  console.log("featuredPup:", featuredPup);

  return (
    <>
      <div className="logo"><h1>Puppie Pals</h1></div>
      <div>
      <div className="spin">click </div>
      <div>
        <button onClick={handleButtonClick}>Click Me</button>
        {showImage && (
        <div className="image-modal">
          <span onClick={handleCloseImage}>&times;</span>
          <img src="/img/puppie.jpg" alt="Puppie" />
        </div>
      )}
      </div>
      </div>
      <div className="App">
        { 
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && (
          <div className="logo">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>

    </>
  )
}

export default App
