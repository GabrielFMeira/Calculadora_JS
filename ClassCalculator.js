function writeNumber(value){
    var inputValue = document.getElementById('input')
    switch (value){
        case '7':
        case '8':
        case '9':
        case '4':
        case '5':
        case '6':
        case '1':
        case '2':
        case '3':
        case '0':
            inputValue.value += value ;
        break;
    }
}

function clearInput(){
    var inputValue = document.getElementById('input')
    inputValue.value = '';
    }

function changeSign(){
    var inputValue = document.getElementById('input');
    var converted = Number(inputValue.value);
    var changedSign = converted - (2*converted);
    console.log(changedSign);
    var showChanged = changedSign.toString();
    inputValue.value = showChanged;
}

// function calcPercentage(){
//     var inputValue = document.getElementById('input');
//     var converted = Number(inputValue.value);
//     var percentage = converted / 100;
// }