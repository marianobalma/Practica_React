import * as React from "react";
import {Grid,TextField,Typography} from "@mui/material";
import "./Formulario.css";

const Formulario = () => {
  return (
    <div>
      <Typography color="primary">Formulario</Typography>
      <form action="" className="form-container">
        <Grid
          container
          align-items={"center"}
          justify-content="space-evenly"
          spacing ={2}
          sx= {{width: "100%"}}
        >
          <Grid item xs={12} md={7}>
            <TextField type="text" label="Ingrese nombre" variant="outlined"
            fullWidth />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField type="email" label="Ingrese email" variant="outlined"
            fullWidth />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Ingrese contraseña"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Formulario;
