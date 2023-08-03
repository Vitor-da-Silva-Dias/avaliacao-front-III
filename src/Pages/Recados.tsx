import React from "react";
import { Grid } from "@mui/material";

interface RecadosProps {
    component: React.FC;
}

const Recados: React.FC<RecadosProps> = ({component: Component}) => {
    return(
        <Grid container >
            <Grid item xs={12}>
                <Component/>
            </Grid>
        </Grid>
    )
}

export default Recados;