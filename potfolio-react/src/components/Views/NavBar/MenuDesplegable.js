import React from 'react'
import { makeStyles } from '@material-ui/core'


const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))


const MenuDesplegable = () => {

    const classes = styles();

    return (
        <div className={classes.root}>
            
        </div>
    )
}


export default MenuDesplegable
