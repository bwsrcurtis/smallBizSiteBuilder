import Hero from "./components/Hero"
import Examples from "./components/Examples"
import About from "./components/About"
import Offerings from "./components/Offerings"

export default function Home() {
  return (
    <main className="bg-secondary">
      <Hero></Hero>
      <Offerings></Offerings>
      <Examples></Examples>
      <About></About>
    </main>
  )
}
