import React from 'react'
import {Typography,Card,CardContent} from '@material-ui/core'
function InfoBox({title,death,cases}) {
    return (
        <div className="infoBox_">
            
                <Card>
                    <CardContent>
                    <Typography color="primary">{title}</Typography>
                    <h2>+{cases}</h2>
                    <h2>+{death}</h2>
                    </CardContent>
                   
                   
                </Card>
           
        </div>
    )
}

export default InfoBox
