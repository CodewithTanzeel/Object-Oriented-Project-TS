# Interactive Student Management Program

This project is an interactive command-line application that allows users to interact with a list of students. Users can either interact with a fictional character named Flavia or search for student profiles. If a student profile does not exist, it will be created and added to the list.

## Features

- Interactive menu to choose between interacting with Flavia or managing students.
- Search for existing student profiles or create new ones.
- Display student details and manage the student list.

## Classes

- **Student**: Represents a student with a name.
  - **Constructor**: Takes a student's name as a parameter.

- **Person**: Manages a list of students.
  - **addStudent**: Adds a new `Student` object to the list.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): A library for creating interactive command-line interfaces.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the script:

   ```bash
   npx ts-node <script-file>.ts
   ```

2. Follow the prompts to interact with the application:
   - **Choose** between interacting with "Flavia" or managing students.
   - **For students**:
     - Enter the name of the student you are looking for.
     - If the student does not exist, a new student profile will be created and added to the list.
     - If the student exists, their details will be displayed.

## Code Explanation

- **Student Class**
  - Represents a student with a name.
  - Constructor initializes the student's name.

- **Person Class**
  - Manages a list of `Student` objects.
  - `addStudent` method adds a new student to the list.

- **programStart Function**
  - Displays a welcome message and prompts the user to select an interaction.
  - Allows the user to interact with "Flavia" or search for/manage student profiles.
  - Handles student profile search and creation.
  - Displays the student list after each interaction.

## Example

```plaintext
Welcome
? whom do your want to intrect with? (Use arrow keys)
  Flavia
> student
please define which student u are looking for ? 
> John Doe

Hello i am John Doe,My main field of intrest is computer science
[ Student { name: 'John Doe' } ]

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

