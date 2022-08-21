const returnFirstTwoDrivers=function(drivers){
    return (drivers.slice(0,2))
}
const returnLastTwoDrivers=function(drivers){
    return (drivers.slice(2,4))
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    return (function fareMultiplier(n){
        return (n*n)
    })
}
function fareDoubler(n){
return (function fareMultiplier(){
          return(n*2)
}())
}
function fareTripler(n){
    return (function fareMultiplier(){
              return(n*3)
    }())
    }


function selectDifferentDrivers(drivers,fnn){
    if (fnn===returnFirstTwoDrivers){
        return (drivers.slice(0,2));
    } else if(fnn=returnLastTwoDrivers){
        return(drivers.slice(2,4));
    }

}