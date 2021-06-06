import React from 'react'
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        console.log({ props });
        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
        if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
        else return { borderLeft: '5px solid gray' };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: 'bold', fontSize: 18 },
});

export default function HighlightCard({ title, count, type }) {
    const classes = useStyles({ type });
    return (
        <Grid item sm={4} xs={12}>
            <Card className={classes.wrapper}>
                <CardContent>
                    <Typography component="p" variant="body2" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography component="p" variant="body2" className={classes.count}>
                        {count}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

