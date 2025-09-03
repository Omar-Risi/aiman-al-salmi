import { ProfileCard } from "./components/ProfileCard"

export default function App() {
  return (<>
    <div className="absolute -z-10 bg-[url(/background-pattern.jpg)] opacity-20 bg-contain w-screen h-screen"></div>
    <main className="h-screen flex justify-center items-center">
      <ProfileCard />
    </main>
  </>)
}
