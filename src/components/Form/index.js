import React from 'react';
import {Box, Button, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from 'yup';
import {initialState} from "../Simulation/data";

const validationSchema = yup.object({
    unitPrice: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .required('Ingrese un numero'),
    unitCost: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .required('Ingrese un numero'),
    penaltyAmount: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .required('Ingrese un numero'),
    dailyStock: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .integer('Ingrese un numero entero')
        .required('Ingrese un numero'),
    simulationDays: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .integer('Ingrese un numero entero')
        .required('Ingrese un numero')
        .max(1000000, 'Debe ser <= 1.000.000'),
    fromDay: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .integer('Ingrese un numero entero')
        .required('Ingrese un numero')
        .when('toDay', (toDay, schema) => {
            return schema.max(toDay >= 500 ? 500 : toDay, 'Debe ser [<= Hasta] o [<= 500]')
        }),
    toDay: yup
        .number('Ingrese un numero')
        .typeError('Debe ingresar un numero')
        .positive('Ingrese un numero positivo')
        .integer('Ingrese un numero entero')
        .required('Ingrese un numero')
        .when('simulationDays', (simulationDays, schema) => {
            return schema.max(simulationDays, 'Debe ser menor al valor de [Cantidad dias]')
        })
})

const Form = ({handleSubmit}) => {
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit({...values});
        },
    });
    return (
        <Box mx={2}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Precio unitario"
                            id="unitPrice"
                            name="unitPrice"
                            value={formik.values.unitPrice || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.unitPrice && Boolean(formik.errors.unitPrice)}
                            helperText={formik.touched.unitPrice && formik.errors.unitPrice}
                            inputProps={
                                {
                                    maxLength: 5
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Costo unitario"
                            id="unitCost"
                            name="unitCost"
                            value={formik.values.unitCost || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.unitCost && Boolean(formik.errors.unitCost)}
                            helperText={formik.touched.unitCost && formik.errors.unitCost}
                            inputProps={
                                {
                                    maxLength: 5
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Valor de multa"
                            id="penaltyAmount"
                            name="penaltyAmount"
                            value={formik.values.penaltyAmount || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.penaltyAmount && Boolean(formik.errors.penaltyAmount)}
                            helperText={formik.touched.penaltyAmount && formik.errors.penaltyAmount}
                            inputProps={
                                {
                                    maxLength: 5
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Stock diario"
                            id="dailyStock"
                            name="dailyStock"
                            value={formik.values.dailyStock || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.dailyStock && Boolean(formik.errors.dailyStock)}
                            helperText={formik.touched.dailyStock && formik.errors.dailyStock}
                            inputProps={
                                {
                                    maxLength: 5
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Desde"
                            id="fromDay"
                            name="fromDay"
                            value={formik.values.fromDay || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.fromDay && Boolean(formik.errors.fromDay)}
                            helperText={formik.touched.fromDay && formik.errors.fromDay}
                            inputProps={
                                {
                                    maxLength: 7
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Hasta"
                            id="toDay"
                            name="toDay"
                            value={formik.values.toDay || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.toDay && Boolean(formik.errors.toDay)}
                            helperText={formik.touched.toDay && formik.errors.toDay}
                            inputProps={
                                {
                                    maxLength: 7
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField
                            label="Cantidad de dias a simular"
                            id="simulationDays"
                            name="simulationDays"
                            value={formik.values.simulationDays || ''}
                            onChange={formik.handleChange}
                            error={formik.touched.simulationDays && Boolean(formik.errors.simulationDays)}
                            helperText={formik.touched.simulationDays && formik.errors.simulationDays}
                            inputProps={
                                {
                                    maxLength: 7
                                }
                            }
                            fullWidth
                        />
                    </Grid>
                </Grid>


                <Box mt={2} display={"flex"} justifyContent={"flex-end"}>
                    <Button
                        type={"submit"}
                        variant={"outlined"}>
                        SIMULAR
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Form;