    
     function calculateAge() { 
        let birthYear = document.getElementById("birthYear").value;
        let currentYear = new Date().getFullYear();
         
        
        if(birthYear === "" || birthYear > currentYear) {
            console.log("enter a correct year");
            document.getElementById("result").innerText = "Please enter a valid birth year.";
            return;
        }
        else{
        let age = currentYear-birthYear;
        document.getElementById("result").innerText = `You are ${age} years old.`;
    }

}