class parent{
    constructor(){
        this. fatherName ="Riyadul Khan"
    }
    
}


class Child extends parent{
    constructor(name){
        super();
     this.name=name;
    }
}
const baby1 = new Child("Ariyan");
const baby2 = new Child('Tonmoy');

console.log(baby1,baby2)