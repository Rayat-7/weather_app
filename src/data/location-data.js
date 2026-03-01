const data=[
    {
        location:"Dhaka",
        latitude: 23.8103,
        longitude: 90.4125
    },
    {
        location:"Rangpur",
        latitude: 25.7439,
        longitude: 89.2752
    },
    {
        location:"Europe",
        latitude: 54.5260,
        longitude: 15.2551
    },
    {
        location:"Asia",
        latitude: 34.0479,
        longitude: 100.6197
    },
    {
        location:"Africa",
        latitude: -8.7832,
        longitude: 34.5085  
    },
    {
        location:"North America",
        latitude: 54.5260,
        longitude: -105.2551
    },


];

function getLocations(){
    return data;
}
function getLocationByName(loaction){
    if(!location) return null;
    const filtered =data.filter((item) => item.location === loaction);

    if(filtered.length > 0){
        return filtered[0];
    }else{
        const defaultLocation ={
            location: "Chattogram",
            latitude: 22.3569,
            longitude: 91.7832 
        }
        return defaultLocation;
        }
    }
export {getLocations, getLocationByName};
