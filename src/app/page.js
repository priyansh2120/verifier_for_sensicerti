"use client"
import { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');
  const [cid, setCID] = useState('');

  async function verify() {
    console.log("Fetching proofs")
    const data = await fetch(`https://${cid}.ipfs.dweb.link/`)
    const json = await data.json()
    if (json.studentName == name) {
      alert ("Verified")
    }
    else {
      alert("Could not Verify. Failging singatures")
    }
  }

  return (
    <div className='body'>

      <div className='navbar'>
        <div className='logo'>
          <h1>
            Job Hunt
          </h1>
        </div>

        <div className='search'>
          <h2>
            Search
          </h2>
        </div>

        <div className='post'>
          <h2>
            Post
          </h2>
        </div>
      </div>
      <div className='wrap'>
        <div className="nameEnter">
          <p>
            Your Name:
          </p>
          <input
            type="text"
            onChange={((e) => { setName(e.target.value) })}
          />
        </div>

        <div className="cidEnter">
          <p>
            Enter your CID:
          </p>
          <input
            type="text"
            onChange={((e) => { setCID(e.target.value) })}
          />
        </div>

        <div className="dobEnter">
          <p>
            Enter your DOB:
          </p>
          <input
            type="text"
            placeholder='DD/MM/YYYY'
          />
        </div>

        <div className="dobEnter">
          <p>
            Enter Father Name:
          </p>
          <input
            type="text"
          />
        </div>
        <button onClick={verify} className='verify'>Verify</button>
      </div>


    </div>
  )
}

export default page;