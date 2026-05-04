
import './App.css'
import AvatarCard from './components/AvatarCard'
const avatars = [
  {
    id: 1,
    name: "Dipu",
    role: "Optimizer",
    power: "spider",
    initals: "longjump"
  }
]

function Shell({ title, children }) {

  return (
    <section>
      <p>Reusable shell</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}



function App() {


  return (
    <>
      <section>
        <h1>Children in react</h1>
        <Shell title="BatMan" />
        <h1>Hello from dipu</h1>
        {avatars.map((avatar) => (
          <AvatarCard
          key={avatar.id}
          avatar={avatar}
            level={avatar.id === 1 ? "Captain" : undefined}

          />
        ))}
      </section>
    </>
  )
}

export default App
