import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import HeroBannerImage from '../Assets/imgs/banner.png'

const HeroBanner = () => {

  
  return (
    <Box sx={{
      mt : {lg: '212px', xs: '70px'},
      ml : {sm: '50px'}
      }} position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600'
      fontSize='26px'>
        Club fitness
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: 
      {lg: '44px', xs: '40px'}
      }} mb='23px' mt='30px'>
        Suar, Sorrir <br /> e Repitir
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Confira agora <br />os melhores exercícios
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
       sx={{ background: '#ff2625', padding: '10px'}}>
        Procurar Exercícios
        </Button>
       <Typography 
       fontWeight={600}
       color='#ff2625'
       sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
       }} fontSize='200px'>
        Exercícios
        </Typography> 

        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

    </Box>
    
  )
}

export default HeroBanner