let drivers = ["ali", "veli", "mete"]
const findMatching = (drivers, string) => drivers.filter((drivers)=> drivers.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (drivers,string) => drivers.filter((drivers)=> drivers.charAt(0) === string.charAt(0));

const matchName = (drivers,string)=>  drivers.filter((drivers)=>drivers.name ===  string)