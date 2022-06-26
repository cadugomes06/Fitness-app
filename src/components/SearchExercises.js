import React from 'react'
import { Box, Stack, Button, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, setBodyPart, bodyPart}) => {

  const [search, setSearch] = React.useState('')
  const [bodyParts, setBodyParts] = React.useState([])


  React.useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exerciseOptions )
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",
       exerciseOptions)
       
       const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        ||  item.equipment.toLowerCase().includes(search)
        ||  item.bodyPart.toLowerCase().includes(search),
        )

        setSearch('')
        setExercises(searchedExercises)
      } 
    }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center'
    p='20px'>

      <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }} mb={3}>
        Exercícios Incríveis Para Você
      </Typography>

      <Box position='relative' mb='152px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
           height='76px'
           value={search}
           onChange={(e) => setSearch(e.target.value.toLowerCase()) }
           placeholder='Encontrar exercícios'
           type='text'
           />

           <Button className='search-btn'
             sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '165px', xs:'80px'},
              fontSize: {lg: '20px', xs: '14px'},
              height: '56px',
              position: 'absolute'  
             }} 
             onClick={handleSearch} 
             >
            Procurar
           </Button>     
      </Box>

      <Box sx={{
        position: 'relative', width: '100%', p: '20px', 
      }}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
          setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises