export default function Button(theme){
    return{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius: '50px',
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.light
                    }
                }
            }
        }
    }
}