import React from 'react';
import Simulation from "./components/Simulation";
import {Box, Grid} from "@material-ui/core";
import Form from "./components/Form";
import useSimulation from "./hooks/useSimulation";
import Results from "./components/Result";
import Chart from "./components/Chart";

export default function App() {
    const {rows, results, simulate} = useSimulation();

    return (
        <>
            <Grid
                container
                alignContent={"space-around"}>
                <Grid item xs={12} lg={2}>
                    <Box my={2}>
                        <Form
                            handleSubmit={simulate}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    lg={4}
                    spacing={1}
                    alignItems={"center"}
                >
                    {results.map((r, index) => (
                        <Grid
                            item
                            key={index}
                            xs={6}
                        >
                            <Results
                                name={r.name}
                                value={r.value}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    lg={6}
                    alignItems={"center"}
                >
                    {rows.length > 25 && <Chart rows={rows.slice(-25)}/>}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box my={3} mx={"auto"}>
                        <Simulation
                            rows={rows}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>

    );
}

