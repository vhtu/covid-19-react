import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard';

export default function Highlight({report}) {
    console.log("Report trong Highlight: ",report);
    if(report.length > 0){
        const data = report[report.length - 1];
        console.log("Data trong Highlight: ",data);
        
            const sumary = [
                {
                    title: 'Số ca nhiễm',
                    count: data.Confirmed,
                    type: "confirmed"
                },
                {
                    title: 'Số ca khỏi',
                    count: data.Recovered,
                    type: "recovered"
                },
                {
                    title: 'Số ca tử vong',
                    count: data.Deaths,
                    type: "death"
                }
            ];
        return <Grid container spacing={3}>
            {
                
                sumary.map(
                    item => <HighlightCard title={item.title} count={item.count} type={item.type}></HighlightCard>
                )
            }
    
        </Grid>
    }
    return null;
    
}