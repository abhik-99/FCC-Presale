import React from 'react'
import {
  Slide,
  Paper,
  IconButton,
  Box,
  AppBar,
  Toolbar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SOCIALS } from '../assets/statics/socials';
import { styled } from '@mui/system';


const Footer = () => {
  const theme = useTheme();
  return (
    <>
    <Toolbar />
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, background: 'none' }}>
      <Toolbar sx={{display: 'flex',justifyContent:"center"}}>
      <Slide in={true} timeout={2000} direction="up">
          <Paper sx={{ width: {xs: '80%', md:'50%', lg: '30%'}, pb: 4, pt: 5, px: 2, borderRadius: '100% 100% 0 0', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', background: theme.palette.common.black}}>
            {
              SOCIALS.map((item, index) =>
              <IconButton
              aria-label={item.name+'icon'}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer">
                {item.icon}
              </IconButton>
              )
            }

          </Paper>
      </Slide>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Footer