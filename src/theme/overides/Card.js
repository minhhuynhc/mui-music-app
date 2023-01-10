export default function Card(theme){
    console.log(theme.palette.grey[100])
    return {
        MuiCard: {
            styleOverrides:{
                root:{
                    backgroundColor: theme.palette.grey[0],
                }
            }
        },
        MuiCardActionArea:{
            styleOverrides:{
                root:{
                    backgroundColor: theme.palette.grey[100],
                    '&:hover': {
                        backgroundColor: theme.palette.grey[800]
                    },
                    paddingTop: '15px'
                }
            }
        },
        MuiCardContent:{
            styleOverrides:{
                root:{
                    color: '#FFFFFF'
                }
            }
        },
        MuiCardMedia: {
            styleOverrides:{
                root:{
                    backgroundColor: theme.palette.grey[700],
                    width: '162px',
                    height: '162px',
                    margin: 'auto'
                }
            }
        }
    }
}