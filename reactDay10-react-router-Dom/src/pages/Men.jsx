import {Outlet} from 'react-router-dom'

function Men() {
  return (
    <div>
      <h1 className="text-white font-bold text-6xl mt-30 ml-80 ">Men's Collections</h1>
      <Outlet/>
    </div>
  )
}

export default Men


// 🔑 What is <Outlet />?
// <Outlet /> is a placeholder component provided by react-router-dom that tells React:

// 👉 “Render the child route component here inside the parent layout.”

// 🧠 Why do we need it?
// When you define nested routes like:

// <Route path="/men" element={<Men />}>
//   <Route path="shoes" element={<Shoes />} />
// </Route>

// You are saying:
// /men → render Men
// /men/shoes → render Men and inside it render Shoes

// But React doesn't know where inside Men to place Shoes.
// That’s exactly what <Outlet /> solves.
