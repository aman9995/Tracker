import React from 'react'
import {Card, CardContent, Typography  } from "@material-ui/core";
import './casebox.css';

export const Casebox = ({title, cases, total}) => {
    return (
        <Card className = "casebox">
            <CardContent>
                <Typography className = "casebox_title" color = "textSecondary">{title}</Typography>
                
                <h2 className = "casebox_cases">{cases}</h2>

                <Typography className = "casebox_total" color = "textSecondary">Total : {total}</Typography>
            </CardContent>
        </Card>
    )
}


