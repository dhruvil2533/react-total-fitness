import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{mt: {lg: '200px', xs: '20px'}}} p={'20px'}>
      <Typography sx={{fontSize: {lg: '44px', xs: '25px'}}} fontWeight={700} mb={'33px'}>
        Watch <span style={{textTransform: 'capitalize', color: '#ff2625'}}>{name}</span> exercise videos
      </Typography>
      <Stack 
        justifyContent={'flex-start'} 
        flexWrap={'wrap'} 
        alignItems={'center'}
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '110px', xs: '0px'}
        }}
      >
        {
          exerciseVideos?.slice(0,3)?.map((item, index) => (
            <a 
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
              key={index} 
              className='exercise-video'
              target='blank'
              rel='noreferrer' //instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{borderTopLeftRadius: '20px'}} />
              <Box>
                <Typography sx={{fontSize: {lg: '28px', xs: '18px'}}} fontWeight={600} color={'#000'}>
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color={'#000'}>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos