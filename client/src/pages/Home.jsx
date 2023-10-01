import React from 'react'
import Banner from '../layout/Banner/Banner'

import Redirect from '../components/Home_Page/External/Redirect'
import Hounrable from '../components/Home_Page/Hounrable/Hounrable'
import { Box, styled } from '@mui/material'
import News from '../components/Home_Page/News/News'
import Activities from '../components/Home_Page/Activities/Activities'

const Color=styled(Box)({
  backgroundColor:"#EEEEEE",
})
const Home = () => {
  return (
    <>
    <Banner />
    <Hounrable/>
    {/* <Color> */}
    <Redirect />
    <Activities />
    <News />
    {/* </Color> */}
    </>
  )
}

export default Home