
import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id){
   
    return this.items.find(item => {
        return item.id === id;
    });
};

function addItem(name){
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    }
    catch(err){
     console.log("Cannot add item: ${error.message}");
    }
};

function findAndToggleChecked(id){
    let itemChecked = this.findById(id);
    itemChecked.checked = !itemChecked.checked;
    
};

function findAndUpdateName(id, newName){
    try{
        item.validateName(newName);
        this.findById(id).name = newName;
    }
    catch(err){
     console.log("Cannot update name: ${error.message}");
    }
};

function findAndDelete(id){
    this.items = this.items.filter(item =>
        {
           return item.id !== id;
        });
};

function toggleCheckedItemsFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

export default{

    items, 
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedItemsFilter
};

