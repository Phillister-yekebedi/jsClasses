// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// input = name, length, moralLesson , age
// output = an 


class Storey{
    constructor(name, length, moralLesson , age){
        this.name = name
        this.length = length
        this.moralLesson = moralLesson
        this.age = age
    }
    getName(){
        console.log(" the name of the book is ${this.name}")
    }
}

class StoryTeller extends Storey{
    constructor (name, length, moralLesson , age){
        super(name, length, moralLesson , age)
       
    }
    getTheStoryTeller(){
        return (" The above story ${this.name} hasa {this.moralLesson} " )

    }
    
}
// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

// pseudocode
// input = name, diet, lifespan, migrationPatterns
// output = tokeep  track of  different species in a national park
// process = create a class Animal, identify the attributes, create methods,
// understand what they are inheriting and also have each animals unique characteristics


class Animal{
    constructor(name, diet, lifespan, migrationPatterns){
        this.name = name
        this.diet =diet
        this.lifespan = lifespan
        this.migrationPatterns= migrationPatterns
    }
    AnimalInformation(){
        console.log("the ${this.name} is a {this.diet} ")
    }
}

class Predator extends Animal{
    constructor (name, diet, lifespan, migrationPatterns,){
        super(name, diet, lifespan, migrationPatterns)
       
    }
    hunt(){
        return (" the ${this.name} has been hunted down by the predator ${this.name} ")

    }
}

class Prey extends Animal{
    constructor (name, diet, lifespan, migrationPatterns, ){
        super(name, diet, lifespan, migrationPatterns)
       
    }
    hunted(){
        return (" the ${this.name} has been running away from the ${this.name} " )

    }
}

let crocodile = Predator("Loepard","carnivorous",20,)
let zebra = Prey("Loepard","omnivorer",21,)

crocodile.hunt
zebra.hunted



// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.


// pseudocode
// input = three classes Artist, Performance, and Stages
// output = a programme that manages the festival lineup, schedule, and stage arrangements
// process = create a class for MusicFestivals, identify the attributes, the unique of characteristics
//  and the inherited characters


class MusicFestival{
    constructor(Artist, performance, Stages){
        this.Artist = Artist
        this.Performance = performance
        this.Stages = Stages  

    }

}


// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.


// pseudocode
// input = names, price, quantity
// output = getting the total value of the product
// process = create a class for product, identify the attributes, create methods
// and calculate their totals


class Product{
    constructor(names, price, quantity){
        this.names = names 
        this.price = price
        this.quantity = quantity
    }
    getProductValue(){
        return this.price * this.quantity

    }

}
let product1 = Product("Bairo", 20, 2)
let product2 = Product("pencil", 20, 2 )

let  totalValue =  product1.getProductValue()+ product2.getProductValue()

// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.

// pseudocode
// input = name, age, grades
// output = calculate the students information and determine if she has passed 
// process = create a class for student, identify the attributes and create methods
// and calculate the students average grade
class Student{
    constructor(name, age, grades){
    this.name = name
    this.age = age
    this.grades = grades
}
studentInformation(){
    console.log ("the above students ctredentials are ,${this.name}, ${this.age}, ${this.grades}")
}

}

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.


// pseudocode
// input = date, destination, seatReservation, passengerInformation, bookingConfirmations
// output = a system that will help a 
// process = create a class for flightBooking, identify the attributes and create methods
// for the for each
class FlightBooking{
    constructor(destination, seatReservation, date,name){
        this.destination = destination
        this.seatReservation = seatReservation
        this. date = date
        this.name = name
    }
    passengersDestination(){
        return "The passengers flight is booked for ${this.destination}"

    }
    getDate(){
        console.log("The above ${this.name} flight is scheduled for ${this.date} ")
    }

    }

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.