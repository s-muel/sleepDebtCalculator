const getSleepHours = day => {
    if (day === 'monday') {
       return 8;
     } else if (day === 'tuesday'){
       return 7;
     } else if (day === 'wednesday'){
       return 8;
     } else if (day === 'thursday'){
       return 5;
     } else if (day === 'friday'){
       return 8;
     } else if (day === 'saturday'){
       return 7;
     }else if (day === 'sunday'){
       return 8;
     }
     else {
       return 'Error'; 
     }
   
   };
   
   const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
   
     // getSleepHours('monday') +
     // getSleepHours('tuesday') +
     // getSleepHours('wednesday') +
     // getSleepHours('thursday') +
     // getSleepHours('friday') +
     // getSleepHours('saturday') +
     // getSleepHours('sunday');
   
   // console.log (getSleepHours('saturday'));
   //console.log (getActualSleepHours());
   
   const getIdealSleepHours = idealHours => 
   idealHours * 7 ;
   
   
   const calculateSleepDebt =() => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours(8);
     if (actualSleepHours === idealSleepHours) {
     console.log('user got the perfect amount of sleep.');
   } else if (actualSleepHours > idealSleepHours) {
     console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
   } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
   } else{ console.log ('something when wrong');}
   }
   
   calculateSleepDebt();
   
   