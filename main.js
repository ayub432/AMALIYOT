
let bgColor = prompt("Orqa fon rangini o`zgartiring");
        let textColor = prompt("Matn rangini o`zgartiring");

        
        if (bgColor === "lightblue") {
            document.body.style.backgroundColor = bgColor;  
        } else if (bgColor === "lightgreen") {
            document.body.style.backgroundColor = bgColor;  
        } else if (bgColor === "yellow") {
            document.body.style.backgroundColor = bgColor;  
        } else {
            document.body.style.backgroundColor = "white"; 
        }

        if (textColor === "black") {
            document.body.style.color = textColor; 
        } else if (textColor === "white") {
            document.body.style.color = textColor;  
        } else if (textColor === "blue") {
            document.body.style.color = textColor; 
        } else {
            document.body.style.color = "black"; 
        }