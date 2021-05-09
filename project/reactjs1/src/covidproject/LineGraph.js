import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import {numeral} from 'numeral';

const options={
    legend:{
        display:false,
    },
    elements:{
        points:{
            radius:0,
        },
    },
    maintainAspectRatio:false,tooltips:{
        mode:'index',
        intersect:false,
        callbacks:{
            label:function(tooltipItem,data){
                return numeral(tooltipItem.value).format("+0,0");
            },
        },

},
scales:{
    xAxes:[
        {
            type:"time",
            time:{
                format:"MM/DD/YY",
                tooltipFormat:"ll",
            },
        },
    ],
    yAxes:[
        {
            gridLines:{
                display:false,
            },
            ticks:{
                callback:function(value,index,values){
                    return numeral(value).format("0a");
                },
            },
        },
    ],
},
};
const bulidchartdata=(data,casestype)=>{
    const chartdata=[];
    let lastdatapoint;
    for(let date in data.cases){
        if(lastdatapoint){
            const newdatapoint={
                x:date,
                y:data[casestype][date]-lastdatapoint
            };
          chartdata.push(newdatapoint);
        }
        lastdatapoint=data[casestype][date];
    }
    return chartdata;
}
function LineGraph({casestype='cases'}) {
const [data,setdata]=useState({})

    

    useEffect(() => {
        const fetchdata=async()=>{
        await fetch(('https://disease.sh/v3/covid-19/all?lastdays=120')).then((response)=>{
        return response.json()
        }).then((data)=>{
        let chartdata=bulidchartdata(data,casestype);
        setdata(chartdata);
        console.log('welcome')

});
};
    fetchdata();

}, [casestype]);
  
    return (
        <div>
            <h1>i am graph</h1>
            {data?.length>0 && (
                 <Line options={options}
                 data={{
                     datasets:[{
                         backgroundColor:"rgba(284,16,52,0.5)",
                         borderColor:'green',
                         data:data,
                     }],
                 }} />
            )
            }
           
        </div>
    )
}

export default LineGraph
