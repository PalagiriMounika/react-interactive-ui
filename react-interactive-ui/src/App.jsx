import { useState } from "react";
import "./App.css";

// Child Component
function StudentCard({ name, course, marks }) {

    return (
        <div className="student-card">

            <h2>{name}</h2>

            <p>
                <strong>Course:</strong> {course}
            </p>

            <p>
                <strong>Marks:</strong> {marks}
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {marks >= 40 ? "Pass" : "Fail"}
            </p>

        </div>
    );
}


// Main Component
function App() {

    // State variables
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [marks, setMarks] = useState("");

    const [student, setStudent] = useState(null);


    // Event handling function
    const handleSubmit = (event) => {

        event.preventDefault();

        if (name === "" || course === "" || marks === "") {

            alert("Please enter all details");

            return;
        }

        // Update state
        setStudent({
            name: name,
            course: course,
            marks: Number(marks)
        });
    };





    // Clear student details
    const handleClear = () => {

        setName("");
        setCourse("");
        setMarks("");
        setStudent(null);
    };


    return (

        <div className="container">

            <h1>Interactive Student Interface</h1>

            <p className="subtitle">
                React Components, JSX, Props, State and Event Handling
            </p>


            {/* Student Form */}

            <form onSubmit={handleSubmit} className="form-box">

                <label>
                    Student Name
                </label>

                <input
                    type="text"
                    placeholder="Enter student name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />


                <label>
                    Course
                </label>

                <input
                    type="text"
                    placeholder="Enter course"
                    value={course}
                    onChange={(event) =>
                        setCourse(event.target.value)
                    }
                />


                <label>
                    Marks
                </label>

                <input
                    type="number"
                    placeholder="Enter marks"
                    value={marks}
                    onChange={(event) =>
                        setMarks(event.target.value)
                    }
                />


                <div className="buttons">

                    <button type="submit">
                        Display Student
                    </button>

                    <button
                        type="button"
                        className="clear-button"
                        onClick={handleClear}
                    >
                        Clear
                    </button>

                </div>

            </form>


            {/* Display Student */}

            {student && (

                <div className="result">

                    <h2>Student Details</h2>

                    <StudentCard
                        name={student.name}
                        course={student.course}
                        marks={student.marks}
                    />

                </div>

            )}

        </div>
    );
}

export default App;
