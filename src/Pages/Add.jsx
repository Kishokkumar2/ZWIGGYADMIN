import React, { useState } from 'react'
import './Add.css'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = () => {
    const[image,setImage]=useState(false)
    const[data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler = (event)  =>{
        const name = event.target.name
        const value= event.target.value
        setData(data=>({...data,[name]:value}))

    }

  
const submit = async(event) => {
        event.preventDefault()
        const formdata = new FormData();
        formdata.append("name",data.name)
        formdata.append("description",data.description)
        formdata.append("price",Number(data.price))
        formdata.append("category",(data.category))
        formdata.append("image",image)
       
        const response  = await axios.post("http://localhost:5000/menudata",formdata)
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"

            })
            setImage(false)
          toast.success("Food Added")
        }
       
        else{
            toast.error("FOOD NOT ADDED")
        }



    }
    console.log("kkk",data.category)
  return (
    <div className='add'>
        <form className='add1 flex-col' onSubmit={submit}>
            <div className='add2 flex-col'>
                <p>UPLOAD IMAGE</p>
                <lable htemFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area}/>
                </lable>
         <input  onChange={(e) => setImage(e.target.files[0])} type="file" id="image" required />
            </div>
            <div className='add3 flex-col'>
                <p>PRODUCT NAME</p>
                <input   type="text" placeholder='TYPE HERE'  onChange={onChangeHandler}  name="name" value={data.name} />

            </div>
           <div className='add4 flex-col'>
            <p>PRODUNT DESCRIPTION</p>
            <textarea name="description" row="6" placeholder='write content here' onChange={onChangeHandler}  value={data.description}>

            </textarea>
            <div className='add5'>
                <div className='add6 flex-col'>
                    <p>PRODUCT CATEGORY</p>
                    <select name="category" onChange={onChangeHandler} >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure veg">Pure veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>

                </div>
                <div className='add7 flex-col'>
                    <p>PRODUCT PRICE</p>
                    <input type="number" placeholder='20' name="price" onChange={onChangeHandler}  value={data.price}/>
                </div>

            </div>
            <button type="submit" className='btn'>ADD</button>

           </div>
        </form>
    </div>
  )
}

export default Add