import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ViewIcon from "@material-ui/icons/RemoveRedEye";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 3,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        marginLeft: "3rem",
        marginRight: "3rem"
    },
    tableContainer: {
        flexGrow: 1,
        height: "25rem",
        position: "sticky",
        width: "100%",
        padding: "10px"
    },
    Elsisas: {
        position: "sticky",
        top: 0,
        background: "#bdbdbd",
        color: "black"
    },

    table: {
        height: "100%",
        width: "100%",
        overflow: "auto"
    },
});

const useStyles = makeStyles(styles);
const TableAdmin = ({ dataIframe, seeData, userID, iframeService, guardarLoading }) => {
    const classes = useStyles()
    const deleteItemsIframe = (data, items) => {
        var i = data.indexOf(items);
        if (i !== -1) {
            data.splice(i, 1);
        }
    }
    const deleteIframe = async (idFrame, items) => {
        guardarLoading(true)
        await iframeService.doDeleteIframe(idFrame);
        deleteItemsIframe(dataIframe, items)
        guardarLoading(false);

        return true
    }
    return (
        <div className={classes.tableContainer}>
            <div className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.Elsisas}> NOMBRE</TableCell>
                            <TableCell className={classes.Elsisas}>URL</TableCell>
                            <TableCell align="center" className={classes.Elsisas}>ACCIONES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(dataIframe) &&
                            dataIframe.filter((value) => { return value[0].iframeData.userId === userID })
                                .map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{item[0].iframeData.nombre} </TableCell>
                                        <TableCell align="left">{item[0].iframeData.iframe.substring(0, 40)}</TableCell>
                                        <TableCell align="center">
                                            <ViewIcon
                                                onClick={() => seeData(item[0].idFrame)}
                                                style={{
                                                    marginLeft: "0.1rem",
                                                    color: "#696969",
                                                    cursor: "pointer"
                                                }}
                                            />
                                            <DeleteIcon
                                                style={{
                                                    marginRight: "0.1rem",
                                                    color: "red",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => deleteIframe(item[0].idFrame, item)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )

}

export default TableAdmin
