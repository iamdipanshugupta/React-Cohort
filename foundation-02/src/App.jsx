

function App() {

  const shows = [
    {
      id:1,
      title:"The Component Return",
      time:"9:00 AM",
      hall:"Hall A"
    },
    {
      id:2,
      title:"Attack of the re-render",
      time:"12:30 PM",
      hall:"Hall B"
    },
    {
      id:3,
      title:"Virtual DOM nights",
      time:"4:00 PM",
      hall:"Hall C"
    }
  ];


  return (
   <>
   <h1>Hello</h1>
   <section className="grid">
    {shows.map((show) => (
      <article>
        <p className="tag">{show.hall}</p>
        <h3>{show.title}</h3>
        <p className="muted">{show.time}</p>
      </article>
    ))}
   </section>
   </>
  )
}

export default App
