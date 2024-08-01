import inquirer from "inquirer";

class Student {
    name: string
    constructor(n: string) {
        this.name = n
    }
}

class Person {
    students: Student[] = []


    addStudent(obj: Student) {
        this.students.push(obj)
    }
}
const persons = new Person();


const programStart = async (persons: Person) => {
    do {
        console.log("Welcome");

        const ans = await inquirer.prompt({
            type: "list",
            message: "whom do your want to intrect with?",
            name: "select",
            choices: ["Flavia", "student"],
        });
        if (ans.select == "Flavia") {
            console.log("Hello user i am Flavia")
            console.log("Princess of Ruritania")
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "please define which student u are looking for ?",
                name: "student",
            });
// The Following constant will find student and will check weather val.name
// is equal to ans student!!!!!!!!!
            const student = persons.students.find((val) => val.name == ans.student)
//Now this parameter if is in the case if student is not present it will print the following described console as
// below in the function!!!!!
            if (!student) {
                const name = new Student(ans.student)
                persons.addStudent(name)

                console.log(`Hello i am ${name.name},My main field of intrest is computer science`);
                console.log(persons.students);

            }
// Now this is if with parameter of student (when student is present) which will print the above fetch data:
            if (student) {

                console.log(`Hello i am ${student.name}, i am fine.............`);
                console.log(persons.students);

            }
        }
    } while (true)
};
programStart(persons);
