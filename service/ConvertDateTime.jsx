import moment from 'moment';



export const FormatDate = (timestamp) => {
    if (!timestamp) return null;
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date; 
  };
  

export const formatDateForText=(date)=>{
  return moment(date).format('ll')
}

export const formatTime=(timestamp)=>{
    const date=new Date(timestamp);
    const timeString=date.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    })

    return timeString;
}

export const getDatesRange=(startdate,endDate)=>{
const start=moment(new Date (startdate), 'MM/DD/YYYY');
const end=moment(new Date (endDate), 'MM/DD/YYYY');
const dates=[];

while(start.isSameOrBefore(end)){
    dates.push(start.format('MM/DD/YYYY'));
    start.add(1,'days')
}
return dates;
}

export const GetDateRangeToDisplay=()=>{
    const dateList=[];
    for(let i=0;i<=10;i++){
        dateList.push({
            date:moment().add(i, 'days').format('DD'),
            day:moment().add(i, 'days').format('dd'),
            formattedDate:moment().add(i, 'days').format('L')
        })
    }

    return dateList;
}