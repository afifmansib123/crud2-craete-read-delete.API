import { useState, useEffect } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])

  const handleDelete = async (id) => {
    const response = await fetch(`/api/users/delete?id=${id}`, { method: 'DELETE' })
    const data = await response.json()
    setUsers(data)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    })
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users/read')
      const data = await response.json()
      setUsers(data)
    }
    fetchData()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <button type="submit">Create</button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.age})
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </form>
  )
}
