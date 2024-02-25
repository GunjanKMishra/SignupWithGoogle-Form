import { useState } from 'react'
import './Form.css'
import axios from 'axios'

function Form() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [selected, setSelected] = useState("")
  const [alert, setAlert] = useState("")

  function handleFnameChange(e) {
    setFname(e.target.value)
  }
  function handleLnameChange(e) {
    setLname(e.target.value)
  }
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handleSelectedChange(e) {
    setSelected(e.target.value)
  }

  function clearForm() {
    setFname('')
    setLname('')
    setEmail('')
    setSelected('')
  }



  const handleSubmit = async(e) => {
    e.preventDefault()
    // const res = await fetch('http://localhost:2000/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Formlication/json',
    //   },
    //   body: JSON.stringify({ fname, lname, email }),
    // });
    // const data = await res.json()
    // console.log(data);
    // if (data.status === 'success') {
    //   setAlert('✅ Data inserted successfully.')
    //   clearForm();
    // } else {
    //   setAlert('❌ Something went wrong!')
    // }

    // use axios instead of fetch
    try {
      const res = await axios.post('http://localhost:2000/', { fname, lname, email });
      console.log(res.data);
      if (res.data.status === 'success') {
        setAlert('✅ Data inserted successfully.')
        clearForm();
      } else {
        setAlert('❌ Something went wrong!')
      }
    } catch (error) {
      console.error(error);

    }

  }

  return (
    <div className="container">
      <h2>Student Registration Form</h2>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" value={fname} onChange={handleFnameChange} required />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" value={lname} onChange={handleLnameChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={selected} onChange={handleSelectedChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <p>{alert}</p>
    </div>
   )
}

 export default Form
