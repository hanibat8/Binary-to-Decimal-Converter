const btn=document.querySelector('.btn');
const field=document.getElementById('binary');

btn.addEventListener('click',function(){
    if(checkInput(field.value)){
        var result=convert(field.value);
        console.log(result);
        field.value=result;
    }
    else{
        alert('Please enter only 0 or 1');
    }
});

function convert(result){
    return parseInt(result,2);
}

function checkInput(val){
    for (let i=0;i<val.length;i++){
        if (+(val[i])+0===0 ||+(val[i])+0===1){
        }
        else{
            return false;
        }
    }

    return true;
}



