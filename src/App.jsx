import { useState } from 'react'
// import './App.css'

function App() {
  const [fullName, setFullName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const fname = data.firstName + " " + data.lastName;
    setFullName(fname);
  }
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <label>First Name: </label><input required type="text" name="firstName" />
          </div>
          <div>
            <label>Last Name: </label><input required type="text" name="lastName"/>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {
        fullName && <div style={{marginTop: '10px'}}>
          Full Name: {fullName}
        </div>
      }
    </>
  )
}

export default App
