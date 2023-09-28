import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

 export const Header=styled(AppBar)({
    background:'#0d1057',
    height:'46px',
    display:'flex',
        justifyContent:'center',
        alignItems:'center',
})
export const ToolBar=styled(Toolbar)({
    display:'flex',
    width:'96%',
    justifyContent: 'space-around',
        alignItems:'center',
        '& > a':{
            display:'flex',
        justifyContent:'center',
        textDecoration:'none',
        gap:10,
        alignItems:'center',
            fontWeight:700,
            
            color:'white',
            
        }
})
export const Container=styled(AppBar)({
    boxShadow:'none',
    background:'white',
    height:120,
    '& > div':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
       padding:0,
        '& > div':{
            '& > div':{
                
                '& > p':{
                    color:'black',
                }
            }
        }
    }
})
export const Image=styled('img')({
    width:'10.5rem',
    height:'6rem'
})
export const Icon=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

})
export const Items=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'35%',
    '& > button':{
        color:'#7E1717',
        fontSize:'1vw',
        fontWeight:600,
       border:'none',
       background:'none',
       
    },
  
})
export const Signin=styled(Box)({
    '& > button':{
        background:'white',
        width:'5.5rem',
        height:'2rem',
        color:'#7E1717',
        fontWeight:600,
        borderRadius:5,
        fontSize:'1vw',
        transition: 'background 0.4s ease, color 0.5s ease',
    },
    '& > button:hover':{
        background:'#7E1717',
        color:'white',
    }
})
export const Hindi=styled(Typography)({
    fontSize:'1.4vw',
     fontWeight:700 ,
     lineHeight:1,
    
})
export const English=styled(Typography)({
    fontSize:'1.2vw', 
    fontWeight:700,
   
})
export const Deemd=styled(Typography)({
    fontSize:'0.7vw', 
    fontWeight:700,
  
})
export const Loc=styled(Typography)({
    fontSize:'0.7vw',
    fontWeight:700,
   
})
