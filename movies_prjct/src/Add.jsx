import React,{useState} from 'react'

const Add = () => {
    const [data, setdata] = useState({})
    const mv = []
    const formChange = (e) => {
        setdata({...data,[e.target.name]:e.target.value})
    }
  return (
    <form >
        <input onChange={formChange} placeholder='title'  type="text" name='title' />
        <input onChange={formChange} placeholder='description'  type="text" name='description' />
        <input onChange={formChange} placeholder='rating'  type="text" name='rating' />
        <input onChange={formChange} placeholder='url'  type="text" name='url' />
        <button type="submit" >Add</button>
    </form>
  )
}

export default Add