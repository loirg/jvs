let randomNumber=Math.floor(x:10*Math.random()+1);

let update=function() {
    let nom=document.forms[0].nom.value;
    let prenom=document.forms[0].prenom.value;
    let nomComplet=`${prenom} ${nom}`;
    document.getElementById('nomComplet').innerHTML = nomComplet;
    return false;
};
let=function() {...};  
document.getElementById('btValidation').addEventListener('click',
function(){
        let msg='Mauvaise réponse, ré-essayez';
        let color='red';
        let pValue=document.getElementById('nombre').value;
        if(pValue==randomNumber){
            msg='Bravo, vous avez trouvé!';
            color='green';
        } 
        console.log(randomNumber);
        document.getElementById('reponse').innerHTML=msg;
        repDiv.innerHTML
        repDiv.style.color=color;
    });
