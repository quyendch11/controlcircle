"use strict";
exports.__esModule = true;
var controlcircle_1 = require("./controlcircle");
var circlelist = [];
circlelist.push(new controlcircle_1.Circle(10, 'green'));
circlelist.push(new controlcircle_1.Circle(30, 'blue'));
function showcircle(circle) {
    console.log("hinh tron co ban kinh la : " + circle.radius + "co mau : " + circle.color);
}
circlelist.forEach(showcircle);
