import { NavBar } from "./NavBar"

export const Header = () => {
  return (
  <header className="flex place-content-between items-center mb-8 " >
    <img src="logo.svg" alt="logo" />
    <NavBar />

  </header>
  )
}
