import React from 'react'
import {Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {

  return (
    <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
          Exercícios que trabalham o mesmo grupo muscular.
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}
      >
        {targetMuscleExercises.length ?
         <HorizontalScrollbar  data={targetMuscleExercises}/> :
         <Loader />}
      </Stack>

      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' },
       ml: '20px', mt: { lg: '100px', xs: '60px' } }}
        fontWeight={700} color="#000" mb="33px">
          Exercícios que usam o mesmo equipamento.
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}     >
        {equipmentExercises.length ?
         <HorizontalScrollbar  data={equipmentExercises}/> :
         <Loader />}

      </Stack>



    </Box>
  )
}

export default SimilarExercises