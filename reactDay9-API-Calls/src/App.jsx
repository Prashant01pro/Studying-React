// function App() {
//   async function apiCall() {
//     const response = await fetch("https://random.dog/woof.json");

//     const data = await response.json();
//     console.log(data);
//   }

//   return (
//     <div className="flex">
//       <button
//         onClick={() => apiCall()}
//         className="font-bold text-3xl mr-8 bg-amber-50 text-black p-4 rounded-md"
//       >
//         Button A
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  // const [url, setUrl] = useState("");
  // const [url, setUrl] = useState(null);
  const [url, setUrl] = useState("");

  async function apiCall() {
    const response = await fetch("https://random.dog/woof.json");
    const data = await response.json();

    console.log(data);

    if (data.url.endsWith(".mp4") || data.url.endsWith(".webm")) {
      apiCall();
      return;
    }

    setUrl(data.url);
  }

  return (
    <div className="flex flex-col gap-10 items-center m-20">
      <h1 className="text-white font-bold text-3xl ">
        Click for Random Dog Images
      </h1>
      <h1 className="text-gray-500 font-bold ">
        Loading Images Takes a little Time
      </h1>

      <button
        onClick={() => apiCall()}
        className="font-bold text-3xl w-1/4 bg-amber-50 text-black p-4 rounded-md"
      >
        Button A
      </button>

      {/* <img className="w-1/4 h-1/3 rounded-md" src={url} alt="Image" /> */}

      {/* Fallback value */}
      {/* <img src={dog || undefined} alt="dog" /> */}
      
      {/* Conditional Rendering */}
      {url && <img className="w-1/4 h-1/3 rounded-md" src={url} alt="Image" />}
    </div>
  );
}

export default App;

// function App() {

//   async function apiCall() {
//     const response = await fetch("https://random.dog/woof.json");

//     const data=await response.json()
//     return data;

//   }

//   const apiData=apiCall()
//   console.log(apiData)

//   return (
//     <div className="flex">
//       <button
//         onClick={() => apiCall()}
//         className="font-bold text-3xl mr-8 bg-amber-50 text-black p-4 rounded-md"
//       >
//         Button A
//       </button>
//       <img src={apiData.url} alt="" />
//     </div>
//   );
// }

// export default App;

// 🧠 1. React rendering is synchronous and pure
// When React renders a component:
// Call component function → return JSX → paint UI
// It does not pause for async code.

// Your code (simplified)
// const apiData = apiCall(); // async
// return <img src={apiData.url} />;

// What actually happens:
// 1. apiCall() starts fetch
// 2. apiCall() immediately returns Promise
// 3. React continues rendering
// 4. apiData = Promise (not real data)
// 5. apiData.url = undefined
// 6. UI renders with empty image
// 7. Fetch finishes later → React doesn't know → no update

// ⚠️ 2. React only re-renders on state/props change
// React does NOT track:
// Promises
// Variables
// Function return values

// It ONLY tracks:

// ✔ state (useState)
// ✔ props
// That’s the core reason
// No state change → No re-render → No UI update

// problem on first Render :how do i solve this hook.js:608 An empty string ("") was passed to the src attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string.

// ✅ Solution 1 (Best): Conditional rendering

// Only render the <img> when data exists:
// {dog && <img src={dog} alt="dog" width="300" />}
// ✔ What happens
// dog = ""   → nothing rendered
// dog = URL  → image appears

// ✅ Solution 2: Use null instead of empty string
// const [dog, setDog] = useState(null);
// Then:
// <img src={dog} alt="dog" />

// 👉 React won’t set src if value is null

// ✅ Solution 3: Fallback value
// <img src={dog || undefined} alt="dog" />
// 🚫 What NOT to do
// <img src="" />   ❌
// <img src={undefined} /> ❌ (sometimes still problematic)
