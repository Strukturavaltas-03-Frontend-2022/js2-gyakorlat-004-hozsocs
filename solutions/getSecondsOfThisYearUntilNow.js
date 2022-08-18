const getSecondsOfThisYearUntilNow = () => {
    const actualDate = new Date(2021, 10, 12, 2, 23, 23);
    const startDate= new Date(2021, 0, 1);
    
   console.log(Math.round((actualDate.getTime()-startDate.getTime())/1000));
 };

export default getSecondsOfThisYearUntilNow;

