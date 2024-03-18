import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"


export default function layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer>This is footer</footer>
    </div>
  )
}
