import Hero from "./components/Hero"
import Examples from "./components/Examples"
import About from "./components/About"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero></Hero>
      <Examples></Examples>
      <About></About>
    </main>
  )
}
