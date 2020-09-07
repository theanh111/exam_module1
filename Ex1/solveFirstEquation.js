function solveFirstEquation(a, b) {
    if (a === 0) {
        if (b === 0) {
            alert("Phương trình có vô số nghiệm!");
        } else {
            alert("Phương trình vô nghiệm!");
        }
    } else {
        let x = (-b) / a;
        alert("Phương trình bậc nhất với a = " + a + ", b = " + b + " có nghiệm là: " + x);
    }
}

// // Trường hợp muốn nhập a, b ngẫu nhiên:
// let a = +prompt("Enter a: ", "");
// let b = +prompt("Enter b: ", "");

let a = 5;
let b = 8;
solveFirstEquation(a, b);