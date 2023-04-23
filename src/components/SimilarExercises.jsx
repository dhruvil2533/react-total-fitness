import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px'}} fontWeight={700} mb={'33px'}>
        Similar Target Muscle Exercises
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {
          targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} />
            : <Loader />
        }
      </Stack>

      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px', mt: {lg: '100px', xs: '60px'}}} fontWeight={700}  mb={'33px'}>
        Similar Equipment Exercises 
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {
          equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} />
            : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises