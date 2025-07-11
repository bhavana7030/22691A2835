import React, { useState } from 'react'
import logg from '../../loggingmiddleware/logg'
import {Button,Typography,Container,Box,TextField} from '@mui/material'
function Shortner() {
    const [userurl,setUserurl]=useState('')
    const [mainurl,setMainurl]=useState('')

    const genShort=()=>{
        return Math.random().toString(36).substring(1,8);
    }
    const short=()=>{
        if(!userurl || !userurl.startsWith('http')){
            logg('frontend','error','api','Inavalid url entered')
            return;
        }
        const shortCode = genShort();
    const shortLink=`${window.location.origin}/${shortCode}`;
    setMainurl(shortLink)
    logg('frontend','info','api',`URL shortened:${userurl}=${shortCode}`)
    }
    

  return (
    <>
    <Container maxWidth="sm">
        <Box mt={6} p={4} boxShadow={3} borderRadius={3} >
            <Typography variant="h4" gutterBottom>
                WELCOME TO URL SHORTENER
            </Typography>
            <TextField fullwidth
            label="Enter your url here"
            value={userurl}
            onChange={(e)=>setUserurl(e.target.value)}
            />
            
            <Button variant="contained" fullwidth onClick={short} >
                Short url here
            </Button>
            {mainurl && (
                <Box mt={2}>
                    <Typography variant="subtitile1">shortened url:</Typography>
                    <a href={mainurl} target='_blank'>{mainurl}</a>
                    </Box>
            )}

           
        </Box>
    </Container>
    <Container maxWidth="sm">
        <Box mt={6} p={4} boxShadow={3} borderRadius={3}>
            <Typography variant="h4" gutterBottom>
                WELCOME TO URL SHORTENER
            </Typography>
            <TextField fullwidth
            label="Enter your url here"
            value={userurl}
            onChange={(e)=>setUserurl(e.target.value)}
            />
            
            <button variant="contained" fullwidth onClick={short}>
                Short url here
            </button>
            {mainurl && (
                <Box mt={2}>
                    <Typography variant="subtitile1">shortened url:</Typography>
                    <a href={mainurl} target='_blank'>{mainurl}</a>
                    </Box>
            )}

           
        </Box>
    </Container>
    <Container maxWidth="sm">
        <Box mt={6} p={4} boxShadow={3} borderRadius={3}>
            <Typography variant="h4" gutterBottom>
                WELCOME TO URL SHORTENER
            </Typography>
            <TextField fullwidth
            label="Enter your url here"
            value={userurl}
            onChange={(e)=>setUserurl(e.target.value)}
            />
            
            <button variant="contained" fullwidth onClick={short}>
                Short url here
            </button>
            {mainurl && (
                <Box mt={2}>
                    <Typography variant="subtitile1">shortened url:</Typography>
                    <a href={mainurl} target='_blank'>{mainurl}</a>
                    </Box>
            )}

           
        </Box>
    </Container>
    <Container maxWidth="sm">
        <Box mt={6} p={4} boxShadow={3} borderRadius={3}>
            <Typography variant="h4" gutterBottom>
                WELCOME TO URL SHORTENER
            </Typography>
            <TextField fullwidth
            label="Enter your url here"
            value={userurl}
            onChange={(e)=>setUserurl(e.target.value)}
            />
            
            <button variant="contained" fullwidth onClick={short}>
                Short url here
            </button>
            {mainurl && (
                <Box mt={2}>
                    <Typography variant="subtitile1">shortened url:</Typography>
                    <a href={mainurl} target='_blank'>{mainurl}</a>
                    </Box>
            )}

           
        </Box>
    </Container>
    
    </>

  )
}
import { formControlClasses } from '@mui/material'

export default Shortner