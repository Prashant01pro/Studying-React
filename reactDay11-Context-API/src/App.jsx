import { useState } from "react"
import Navbar1 from "./components/Navbar1"



function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div>

      <Navbar1 theme={theme}>
        <h1>This is nav bar</h1>
        <h1>This is nav bar</h1>
      </Navbar1>
    </div>
  )
}

export default App
