function mytest(){
    var p=/^[F][a-zA-Z]{3,8}$/;
    var gmail=/^[a-z,A-Z,0-9][a-zA-Z0-9,_,.]*@[a-z]{2,6}\.?[a-z]{2,3}\.?[a-z]{2,3}$/;
    var mbnum=/^977[0-9]{7,7}$/;
    var mbnum1=/^[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/
    var ddptrn=/^(SBIN[a-zA-Z]{4,4})|([0-9]{11,11})$/
    var usr=document.getElementById('user').value;
    var email=document.getElementById('mail').value;
    var phnum=document.getElementById('pn').value;
    var a=phnum.length;
    var pnt=document.getElementById('psnt').value;
    var fee=document.getElementById('pymt').value;
    if(!p.test(usr)){
        return false;
    }
    if(!gmail.test(email)){
        return false;
    }
    
    if(a==10){
        if(!mbnum.test(phnum)){
            return false;
        }
    }
    else if(a==14){
        if(!mbnum1.test(phnum)){
            return false;
        }
    }
    else{
        return false;
    }
    if(!ddptrn.test(fee)){
        
        return false;
    }
    return true;
}
var pnt=document.getElementById('psnt');
pnt.addEventListener('blur',showbeer);
function showbeer(){
    if(pnt.value!='INDIA'){
        document.getElementById('beer').style.display='block';
    }
    else{
        document.getElementById('beer').style.display='none';
    }
}
document.getElementById('days').addEventListener('keyup',cost);
function cost(){
    var totalcost;
    var sdays=document.getElementById('days').value;
    var nuz=document.getElementById('n').checked;
    var srik=document.getElementById('s').checked;
    var kadapa=document.getElementById('k').checked;
    var ong=document.getElementById('o').checked;
    if(nuz||kadapa){
        totalcost=sdays*2000
    }
    if(srik||ong){
        totalcost=sdays*3000
    }
    document.getElementById('cost').innerText=totalcost;
}
var i=0;
function myfun(){   
    var a=['red','green','yellow'];
    document.getElementById('formdiv').style.backgroundColor=a[i];
    i=i+1;
    if (i>a.length) {
        i=0;
    }
}



var tup=document.getElementById('user');
tup.addEventListener('keyup',toupper);
function toupper(){
    document.getElementById('user').value=document.getElementById('user').value.toUpperCase();
}