// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    let text = userPassword.length
        if(text < 6){
            return "Weak";
        } else if (text >= 6 && text <= 10){
            return "Medium";
        } else {
            return "Strong";
        }
    }

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword)); // "Strong"