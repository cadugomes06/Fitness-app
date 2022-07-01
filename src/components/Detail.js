import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../Assets/icons/body-part.png'
import TargetImage from '../Assets/icons/target.png'
import EquipmentImage from '../Assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
    
  ]
    
  return (
    <Stack gap='60px' sx={{
      flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center', mt: '2rem'}}>
        <img src={gifUrl} alt={name} Loading='lazy' style={{marginLeft: '4rem', height:'500px'}} />
        <Stack sx={{ gap: {lg: '35px', xs: '20px'}}}>
          <Typography variant='h3' mt='6rem'>
            {name}
          </Typography>
          <Typography variant='h6' >
            Exercícios irão manter você forte. {name} é um ótimo exercício
            para {target}. Irá melhorar sua saúde e condicionamento físico.  
          </Typography>
          {extraDetail.map((item) => (
            <Stack key={item.name} direction='row'
             gap='24px' alignItems='center'>
                <Button sx={{ background: '#fff2db', 
                 borderRadius: '50%', width: '100px', height: '100px'}}>
                   <img src={item.icon} alt={bodyPart}
                    style={{width: '50px', height:'50px', borderRadius: '6px' }}  />
                </Button>
                <Typography textTransform='captalize' variant='h5'>
                    {item.name}
                </Typography>
              </Stack>
          )  )}
        </Stack>
    </Stack>
  )
}

export default Detail