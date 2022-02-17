//Parent function
function Number(){
    this.a = 10;
    this.b = 20;
}
Number.prototype.c = 30;

//child function
function Character(){
    Number.call(this);
    this.x = "a";
    this.y = "b";
}
Character.prototype = Object.create(Number.prototype);
Character.prototype.constructor = Character;
let ch = new Character();
console.log(ch.a);
console.log(ch.c); 


