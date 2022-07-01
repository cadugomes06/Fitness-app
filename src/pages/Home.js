import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = React.useState([])
  const [bodyPart, setBodyPart] = React.useState('all')
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} 
      bodyPart={bodyPart} setBodyPart={setBodyPart}
       />
      <Exercises  exercises={exercises} setExercises={setExercises} 
      bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home