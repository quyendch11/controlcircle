import { Circle } from "./controlcircle";
let circlelist : Circle[] = [];
circlelist.push(new Circle(10,'green'));
circlelist.push(new Circle(30,'blue'));
function showcircle(circle : Circle) {
    console.log("hinh tron co ban kinh la : " + circle.radius + " co mau : " + circle.color);
}
circlelist.forEach(showcircle);