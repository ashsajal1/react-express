import { Outlet } from "react-router-dom"


export default function layout() {
  return (
    <div>
        <nav>This is nav</nav>
        <Outlet />
        <footer>This is footer</footer>
    </div>
  )
}
