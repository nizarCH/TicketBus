import React, { useState, useEffect } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Search from '../components/Search/Search'
import Loading from '../components/Loading'
import {setVoyages} from '../redux/actions/voyagesActions'
import {useDispatch} from 'react-redux'
import Aos from "aos"
import "aos/dist/aos.css"

const url = 'http://localhost:8000/api/ville'
const Mainpage = () => {
 
    const [loading, setLoading] = useState(true)
    const dispatch= useDispatch();

    const fetchVoyages = async () => {
        setLoading(true)
        try {
          const response = await fetch(url)
          const ville = await response.json()
          dispatch(setVoyages(ville))
          setLoading(false);
          console.log(ville)
        } catch (error) {
          console.log(error)
          setLoading(false);
        }
     
     
      }
      useEffect(() => {
        fetchVoyages()
        Aos.init({duration: 1500});
      }, [])
      if(loading){
        return(
          <main>
            <Loading />
          </main>
        )
      }
    return (
        <div>
 <Search />
  <About/>
  <Footer/>
        </div>
    )
}

export default Mainpage
