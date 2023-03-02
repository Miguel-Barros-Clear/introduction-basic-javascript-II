class Phone {
    constructor(){
        this.color = 'prata'
    }

    call(){
        console.log("Uma ligação");
        return 'ligando'
    }
}

let object = new Phone();

console.log(object.call())