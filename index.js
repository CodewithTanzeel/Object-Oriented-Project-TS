import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            type: "list",
            message: "whom do your want to intrect with?",
            name: "select",
            choices: ["Flavia", "student"],
        });
        if (ans.select == "Flavia") {
            console.log("Hello user i am Flavia");
            console.log("Princess of Ruritania");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "please define which student u are looking for ?",
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, i am fine.............`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
