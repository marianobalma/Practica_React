import * as React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./Formulario.css";
import { useFormik } from "formik";
import * as Yup from "yup"

const Formulario = () => {
  /*let initialValues ={
    nombre:"",
    email:"",
    contraseña:""
  }*/

  const enviarForm = (data) => {
    console.log(data);
  };

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre"),
      email: Yup.string().required("Debes ingresar un email"),
      contraseña: Yup.string().required("Debes ingresar una contraseña"),
    }) ,

    // esto obliga al usuario a completar todos los campos

    onSubmit: enviarForm,
  });
// se puede desestructurar formik para no escribir x ej formik.handleSubmit
  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario
      </Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          align-items={"center"}
          justify-content="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              value={values.nombre}
              error={errors.nombre}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              label="Ingrese email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Ingrese contraseña"
              variant="outlined"
              fullWidth
              name="contraseña"
              onChange={handleChange}
              value={values.contraseña}
              error={errors.contraseña}
              helperText={errors.contraseña}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
