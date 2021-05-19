import React, {useEffect} from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import {header} from "./data";
import {Paper, TableContainer, TablePagination, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        maxHeight: 600
    }
});


const Simulation = ({rows, title, pagination, reset}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const classes = useStyles();

    useEffect(() => {
        reset && setPage(0);
    }, [reset]);

    return (
        <Paper>
            <TableContainer className={classes.table}>
                <Table
                    stickyHeader
                    size={"small"}
                >
                    <TableHead>
                        {
                            title &&
                            <Typography variant="h6" id="tableTitle" align={"right"}>
                                {title}
                            </Typography>
                        }
                        <TableRow>
                            {header.map((c, index) =>
                                <TableCell key={index}>
                                    {c}
                                </TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={index}>
                                {row.map((c, index) => (
                                    <TableCell
                                        key={index}
                                        align="right"
                                    >
                                        {c}
                                    </TableCell>))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                pagination &&
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            }
        </Paper>
    );
};

export default Simulation;