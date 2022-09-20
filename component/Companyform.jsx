import React from 'react'
import Link from "next/link"
import {useState} from "react"

export default function Companyform() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
        }
    )

    const [files, setFiles] = useState([])
    const [cid, setCid]=useState(0)
  
    const client= new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlGM2IwRjEyNUUxNkNCQjE4YTE0YjZhRTc4QjZiODRiOEZFNjhBY2IiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI3MjA3MzYyNTUsIm5hbWUiOiJSIn0.L8Tm6jSJMYUw_HTmo_YFzWN5FklXZnUiKpENIgEch0U" });

    async function storeFiles(){
        const cid = await client.put([files]);
          console.log("Stored files with cid:", cid);
          setCid(cid)
       }
      
      async function retrieveFiles () {
      const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlGM2IwRjEyNUUxNkNCQjE4YTE0YjZhRTc4QjZiODRiOEZFNjhBY2IiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI3MjA3MzYyNTUsIm5hbWUiOiJSIn0.L8Tm6jSJMYUw_HTmo_YFzWN5FklXZnUiKpENIgEch0U" })
     
        const res = await client.endpoint.protocol
       let files =  `${res}//${cid}.ipfs.w3s.link/ss.png`
       
       console.log(files)
 }

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

  return (
    <form>
    <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
    />
    <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
    />
    <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

    <input name ="files"
          className={styles.inputBox}
          type="file"
          onChange={(e) => setFiles(e.target.files[0])}
          ></input>

    <button onClick = {storeFiles}>Store</button>

    <button onClick = {retrieveFiles}>Retrieve</button>

      

   </form>
      
      )
   
  
}
