let str = "";
let btns = document.querySelectorAll("button");
let flag=false;
let point=false;

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            str=str.toFixed(3);
        }
        else if(e.target.innerHTML=='&lt;'){
            let len=str.length;
            str=str.slice(0,len-1);
        }
        else if(e.target.innerHTML=='C'){
            str="";
        }
        else if(e.target.innerHTML >= 0 && e.target.innerHTML<=9){
            str += e.target.innerHTML;
            flag=true;
        }
        else{
            let textbox=document.querySelector("#text").value;
            if(textbox=="" && e.target.innerHTML=='-'){
                str += e.target.innerHTML;
            }
            else if(e.target.innerHTML=='.' && point==false){
                str += e.target.innerHTML;
                point=true;
            }
            else if(flag && e.target.innerHTML!='.'){
                str += e.target.innerHTML;  
                flag=false;
                point=false;
            }
        }
        document.querySelector("input").value = str;
    })
});
