

//cb - callback
Array.prototype.customMap = function(cb) {
    const arr = this;

    const newArr = [];
    for(let i = 0; i<arr.length; i++) {

        newArr.push( cb(arr[i], i) );


    }

}



arr.map(function(item, index){
    return item*2;
})