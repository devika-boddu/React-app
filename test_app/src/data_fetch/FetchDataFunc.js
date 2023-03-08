import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './FetchDataFunc.css'
//import { useHistory, useNavigate } from 'react-router-dom'


function FetchDataFunc() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed`)
        .then(res => {
            setLoading(false)
            setData(res.data)})
        .catch(error => {
            setLoading(false)
            console.log(error)
        })
    })
  return (
    <div className='Card-Parent'>
        {
            loading ? 'Loading' :
            data.map(item => 
                <div className='Card' key ={item.id}>
                    <div onClick={() => window.location.href = item.link}>
                        <p>Date : {item.date}</p>
                        <p>Link : <a href={item.link} />{item.link}</p>
                        <p>Title : {item.title.rendered}</p>
                        <p>Excerpt : {item.excerpt.rendered}</p>
                        <img src={item.jetpack_featured_media_url} width="600" height="400"/>
                        <p>Creator : {item.author}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default FetchDataFunc
