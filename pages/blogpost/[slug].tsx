import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
const router = useRouter();
// console.log('router query: ', router.query);
const { slug } = router.query;
 return(
    <div>{slug}</div>
  )
}
export default slug