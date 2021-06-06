import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LineChart from '../Charts/LineChart'
import HighMaps from '../Charts/HighMaps';
import { getMapDataByCountryId } from '../apis';

export default function Summary({ report, countryId }) {
    console.log("Report in sumary: ", report);
    console.log("Country in sumary: ", countryId);
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (countryId) {
            getMapDataByCountryId(countryId)
            .then((res) => {
              setMapData(res);
            })
            .catch((err) => console.log({ err }));
        }
      }, [countryId]);
    
    return <div>
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <HighMaps mapData={mapData}></HighMaps>
            </Grid>
            <Grid item sm={8} xs={12}>
                <LineChart data={report}>

                </LineChart>
            </Grid>
        </Grid>
    </div>
}

