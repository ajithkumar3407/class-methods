///----CLASS METHODS-----////

///------1.PERSON------///

class Person{
	constructor(name, age, country){
		this.name=name;
		this.age=age;
		this.country=country;
	}
	display(){
		console.log(`I am is ${this.name} and my age is ${this.age}, i am form ${this.country}`)
	}
}

let user=new Person("Achu", 18, "USA")
let user1=new Person("Mani", 19, "AUS")
let user2=new Person("Ajith", 20, "ENG")

user.display()
user1.display()
user2.display()

///-----------////


///------2-----////


class Rectangle{
	constructor(height,width){
		this.height=height;
		this.width=width;
	}
		area(){
			let a=this.height * this.width;
				console.log(`Area of a Rectangle:${a}`);
		}
		perimeter(){
			let p=2*(this.height + this.width);
				console.log(`Perimeter of a Rectangle:${p}`);
		}
}
	let rect=new Rectangle(20,30);
		rect.area();
		rect.perimeter();

///----------///////


///---------3-------/////


	class BankAccount{
		constructor(account,bal){
			this.account=account;
			this.bal=bal;
		}
		deposit(e){
			let dep=this.bal+e;
				console.log(`Account Number:${this.account} and Balance:${this.bal}`);
				console.log(`Your Deposit Successfully and Your Current AccBalance:${dep}`);
		}
		withdraw(val){
			let wid=this.bal-val;
				console.log(`You Have Withdrawal ${val} and Your Current AccBalance:${wid}`);
		}
	}
	let answer=new BankAccount(538783,1000);
	let answer1=new BankAccount(8573847,2000);
		answer.deposit(2000);
		answer.withdraw(500);
		answer1.deposit(3000);
		answer1.withdraw(700);


///----------//////////



///------4------////

class Shape{
		constructor(){
			this.length=length;
		}
		area(){
			console.log("area not defined")
		}	
	}
	class Circle extends Shape{
		constructor(radius){
		super()
			this.radius=radius;
		}
		area(){
			let ra=3.14	* this.radius * this.radius
				console.log(`Area of Circle ${ra}`)
		}
	}
	class Triangle extends Shape{
		constructor(b,h){
			super()
				this.b=b;
				this.h=h;
		}
		area(){
			let tri=0.5*this.b*this.h;
				console.log(`Area of Triangle ${tri}`)
		}
	}
	let rad=new Circle(20);
		rad.area();
	let tri=new Triangle(30,40);
		tri.area();


////-----------////


///--------5------/////


class Employee{
	constructor(name, salary){
		this.name=name;
		this.salary= salary;
		
	}
	annual(){
		console.log(`Employee Name:${this.name},Salary:${this.salary}`)
	}
}
	class Manager extends Employee{
		constructor(name,salary,department){
		super(name,salary)
			this.department=department;

		}
	annual(){
		let bon=this.salary+5000;
			console.log(`Employee Name:${this.name} from ${this.department} department ,Salary:${bon}`);
	}
}
	let emp=new Manager("Achu",30000,"Front-End");
	let emp2=new Manager("Ajith",40000,"FullStack");
		emp.annual();
		emp2.annual();

///-------------///////


///--------6------/////


class Book{
	constructor( title, author, publicationyear){
		this.title= title;
		this.author=author;
		this.publicationyear=publicationyear;
	}
	display(){
		console.log(` The title is ${this.title} the author name ${this.author} the publication year ${this.publicationyear}`)
	}
}

let Ebook=new Book("Venus and Adonis", "William Shakespeare" , 1593)
let Ebook1=new Book(" The Rape of Lucrece", "William Shakespeare" , 1594 )
let Ebook2=new Book(" The Passionate Pilgrim", "William Shakespeare" , 1599)

Ebook.display()
Ebook1.display()
Ebook2.display()

////-------------////////////