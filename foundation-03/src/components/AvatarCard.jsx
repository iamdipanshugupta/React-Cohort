function AvatarCard({avatar,level = "Rookie"}){
  return (
    <article>
      <div>avatar.initals</div>
      <h3>{avatar.name}</h3>
      <p>{avatar.role}</p>
      <p>Level:{level}</p>
    </article>
  )
}

export default AvatarCard