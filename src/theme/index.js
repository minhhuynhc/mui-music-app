import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider} from '@mui/material'
import {useMemo } from "react";
import ComponentsOveride from "./overides";
import palette from "./palette";
import typography from "./typography";

export default function ThemeProvider ({children}){
    const themeOptions = useMemo(
        () => ({
            palette,
            typography,        
        })
    ,[])
    console.log(themeOptions)    
    console.log('22222')
    const theme = createTheme(themeOptions)
    theme.components = ComponentsOveride(theme)

    return(
    <MUIThemeProvider theme={theme}>
        {children}
    </MUIThemeProvider>
    )
}