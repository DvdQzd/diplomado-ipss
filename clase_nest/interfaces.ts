interface CanWalk {
    walk(): void;
}

class Animal {
    public walk () {
        console.log('caminando')
    }
}

class Cat extends Animal implements CanWalk{
    public walk () {
        console.log('caminando pero como gato')
    }
}

class Fish extends Animal {}

const cat = new Cat();


cat.walk()

const fish = new Fish();
