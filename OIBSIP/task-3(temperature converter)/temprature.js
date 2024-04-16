
let con=()=>{
    let vaalue=document.getElementById('jk')
    let parameter=document.getElementById('select')
    let x=0
    
    let d='cel'
if(parameter.value===d){
    x+=(vaalue.value-32)*5/9
    document.getElementById('solution').innerHTML=x

}
else{
x+=(vaalue.value*9/5)+32
document.getElementById('solution').innerHTML=x


}

}