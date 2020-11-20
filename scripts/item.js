

function validateName(name){
        if(name === ''){
        throw new TypeError("Name must not be blank");
        };
};

function create(name){
    let itemObj = {
        id: cuid(),
        name: `${name}`,
        checked: false
    };
    return itemObj;
};


export default{
    validateName, create
}