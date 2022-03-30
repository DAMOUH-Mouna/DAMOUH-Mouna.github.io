
//fonction qui verifie la validité du mot de passe ;

function PasswordCheck(){
   let pass=document.getElementById("password");
   let passConf=document.getElementById("passwordConfirm");
   let nom=document.getElementById("nom");
   let mail=document.getElementById("mail");
   // Si les champs sont tous remplis
   if(mail.value!="" && nom.value!="" && pass.value!="" && passConf.value!=""){
      //si les 2 mots de passe sont identiques
       if(pass.value===passConf.value){
          //si le mot de passe depasse les 9 caracteres et contient un caractere special
       if(pass.value.match(/[^0-9a-zA-Z\s]/g) && (pass.value.length>=10) ){
      
      alert("Un bon mot de passe");
      }
      else{
         alert("Un faible mot passe ");
         
      }
   }
   else{
      alert("Veillez donner des mots de passe identiques");
   
   }
   }
   else{
      alert("veillez remplir tous les champs");
   
   }
  
}
//fin de la fonction qui verifie la validité du mot de passe ;

//fonction qui affiche ou cache le mot de passe;
// !!!! le botton ne fonctionne pas la premiere fois
function showPass(oeil,id) {
   let pass=document.getElementById(id);
   if(oeil.className=="fas fa-eye-slash"){
      oeil.className="fas fa-eye";
      pass.type = "text";
   }
   else{
      oeil.className="fas fa-eye-slash";
      pass.type = "password";
   }
   
 
  
}