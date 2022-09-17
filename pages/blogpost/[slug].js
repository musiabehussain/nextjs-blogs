import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/blogsPost.module.css"
//  step1:: find the file crossponding to the slug
// step2:: populte them  insided the page
const  Asda =()=> {
    const route =  useRouter()
    const {slug} = route.query;
    return  <div className={styles.container}>
    <main className={styles.main}>

    <h1>Title of the Page {slug} </h1>

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dicta repudiandae ratione natus voluptates, dolor omnis aliquam, obcaecati ipsa perferendis, maxime amet? Repudiandae nulla quis excepturi, reprehenderit doloribus exercitationem atque.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dicta repudiandae ratione natus voluptates, dolor omnis aliquam, obcaecati ipsa perferendis, maxime amet? Repudiandae nulla quis excepturi, reprehenderit doloribus exercitationem atque.
    </main>
    
      </div>
  
}

export default Asda
