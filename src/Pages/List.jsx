import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {
  const [list, setList] = useState([])
  const url="http://localhost:5000"

  const fetchlist = async () => {
    const response = await axios.get("http://localhost:5000/list")
   
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast("error")
    }


  }
  useEffect(() => {
    fetchlist()

  }, [])
  function  del(id){
    axios.delete('http://localhost:5000/delete/'+id).then(res => {console.log(res)
    window.location.reload()
    toast.success("Food Removerd Successfully")
  
})
  }
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>

        </div> 
  {list.map((item,index) =>{
    return(
      <div key={index} className='list-table-format'>
        <img src={`${url}/Images/`+item.image}/>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
          <p onClick={(e)=> del(item._id)} className='cursor'>X</p>
        </div>
    )
  })}
        </div>
    </div>

  )
}


export default List