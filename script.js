 function getTheData(val){
     let formData = document.getElementById("display") ;
     if(val === "="){
         let result = eval(formData.value);
         formData.value = result;
         return
        } 
        formData.value += val;
}