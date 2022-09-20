import React from 'react'
import styles from "../styles/Home.module.css"
import {useState} from "react"
import {Web3Storage} from "web3.storage"
// import {create} from "ipfs-http-client"

// const client= create({url:retrieveFiles}) 


export default function companyform() {
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            jobPosition: "", 
            address: "", 
            salary:""
        }
    )

    function handleChange(event) {
        event.preventDefault()
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    const [files, setFiles] = useState([])
    const [cid, setCid]=useState(0)
  
    const client= new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlGM2IwRjEyNUUxNkNCQjE4YTE0YjZhRTc4QjZiODRiOEZFNjhBY2IiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI3MjA3MzYyNTUsIm5hbWUiOiJSIn0.L8Tm6jSJMYUw_HTmo_YFzWN5FklXZnUiKpENIgEch0U" });
     
    async function storeFiles(e){
        e.preventDefault()
        const cid = await client.put([files]);
          console.log("Stored files with cid:", cid);
          setCid(cid)
       }
      
      async function retrieveFiles (e) {
        e.preventDefault()
      const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlGM2IwRjEyNUUxNkNCQjE4YTE0YjZhRTc4QjZiODRiOEZFNjhBY2IiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI3MjA3MzYyNTUsIm5hbWUiOiJSIn0.L8Tm6jSJMYUw_HTmo_YFzWN5FklXZnUiKpENIgEch0U" })
     
        const res = await client.endpoint.protocol
       let files =  `${res}//${cid}.ipfs.w3s.link/ss.png`
       console.log(files) 
       
 }


  return (

    <div className={styles.main}>
    <div >
     
    <form className={styles.form}>
    <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name="name"
        value={formData.name}
    />
    <input
        type="text"
        placeholder="Applying for"
        onChange={handleChange}
        name="jobPosition"
        value={formData.jobPosition}
    />
    <input
        type="text"
        placeholder="Wallet Address"
        onChange={handleChange}
        name="address"
        value={formData.address}
      />

        <input
                type="text"
                placeholder="Salary in $MATIC"
                onChange={handleChange}
                name="salary"
                value={formData.salary}
            />
    

        <input name ="files"
                className={styles.inputBox}
                type="file"
                onChange={(e) => setFiles(e.target.files[0])}
                ></input>
        
            <button onClick = {storeFiles}>Store</button>

            <button onClick = {retrieveFiles}>Retrieve</button>

            <button>submit</button>

   </form>
 </div>
</div>
      
      )
   
  
}
