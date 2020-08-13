import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (value) =>{
        let changeurl= url;
        if(value){
                changeurl=`${url}/countries/${value}`
        }
        const {data} = await axios.get(changeurl);
        const modifieddata ={
                confirm: data.confirmed.value,
                death: data.deaths.value,
                recover: data.recovered.value,
                lastUpdate:data.lastUpdate,
        }
        return modifieddata;

      
}
export const fetchdailydata = async()=>{
        const {data}= await axios.get(`${url}/daily`);
        const modifieddata = data.map((dailydata)=>({
                confirmed: dailydata.confirmed.total,
                deaths: dailydata.deaths.total,
                date: dailydata.reportDate,
        }));
        return modifieddata;


}
export const countries = async ()=>{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name)


    }