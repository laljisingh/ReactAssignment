let obj = {
    "firstName":"lal",
    "lastName":"singh",
    "mob":"8726524497",
    address:{
        "village":"badgaon",
        "tehsil":"soraon"
    }
};
let{firstName:fNmae, address} = obj;
let{village} = address;
console.log(village);