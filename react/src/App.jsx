// function Profile() {
//   return (
//     <img
//       src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }


// import Profile from './Profile.jsx';

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }



// import { getImageUrl } from './utils.js'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }


// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && '✅'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }


// let guest = 0;

// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// }


// making it pure 
// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//     </>
//   );
// }

// export default function Button() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


//inline 

// export default function Button() {
//   return (
//     <button
//       onClick={function handleClick() {
//         alert('You clicked me!');
//       }}
//     >
//       Click me
//     </button>
//   );
// }

//another way 
// export default function Button() {
//   return (
//     <button onClick={() => {
//   alert('You clicked me!');
// }}>
//       Click me
//     </button>
//   );
// }


// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

//Event propagation 

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }


//Stopping propagation 
// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={() => alert('Submitting!')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

//Challenge 1 of 2: Fix an event handler 
// Clicking this button is supposed to switch the page background between white and black. However, nothing happens when you click it. Fix the problem. (Don’t worry about the logic inside handleClick—that part is fine.)
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={()=> handleClick()}>
//       Toggle the lights
//     </button>
//   );
// }


//State: A Component's Memory
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0); //When state updates, useState preserves the newly set value across re-renders instead of resetting to its initial argument, allowing React to return the latest updated data to the component.

//   function handleClick() {
//     setIndex(index+1);
//   }
//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// multiple state 
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


//State is isolated and private
// import Gallery from './Gallery.jsx';

// export default function Page() {
//   return (
//     <div className="Page">
//       <Gallery />
//       <Gallery />
//     </div>
//   );
// }

//challenge solve
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   const hasNext = index < sculptureList.length - 1;
//   const hasPrev = index > 0;

//   function handleNextClick() {
//     if (hasNext){
//     setIndex(index + 1);   
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   function handlePrev(){
//         if (hasPrev){
//           setIndex(index - 1);
      
//     }
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <button onClick={handlePrev}>
//          previous
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>+3</button>
//     </>
//   )
// }


// import { useState } from 'react';

// export default function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

//Challenge 1 of 1: Implement a traffic light 
// import { useState } from 'react';

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//         alert(walk ? "next is stop" : "next is walk");
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Change to {walk ? 'Stop' : 'Walk'}
//       </button>
//       <h1 style={{
//         color: walk ? 'darkgreen' : 'darkred'
//       }}>
//         {walk ? 'Walk' : 'Stop'}
//       </h1>
//     </>
//   );
// }


//Queueing a Series of State Updates
//the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(n => n + 1); // It is a way to tell React to “do something with the state value” instead of just replacing it.
//         setNumber(n => n + 1);//updater function
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//   )
// }

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//   )
// }

//Challenge 1 of 2: Fix a request counter
// import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(p => p + 1);
//     await delay(3000);
//     setPending(p => p - 1);
//     setCompleted(c => c + 1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }


// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={handleEmailChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }



// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// push er bodole amra jevabe state er khetre kono elem array te add kori

import { useState } from 'react';

let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


















