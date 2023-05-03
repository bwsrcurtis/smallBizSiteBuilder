import Hero from "./components/Hero"
import Examples from "./components/Examples"
import About from "./components/About"
import Offerings from "./components/Offerings"

export default function Home() {
  return (
    <main className="bg-secondary min-h-[calc(100vh-112px)]">
      <Hero></Hero>
      <Offerings></Offerings>
      <Examples></Examples>
      <About></About>
    </main>
  )
}
