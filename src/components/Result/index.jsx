import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

const Result = ({name, value}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant={"subtitle1"} component={"h5"} align={"center"}>
                    {name}
                </Typography>
                <Typography variant={"subtitle2"} align={"center"}>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Result;