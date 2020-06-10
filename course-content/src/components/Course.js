import React from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Content = ({ parts }) => {
    return parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
    ));
};

const Part = ({ name, exercises }) => {
    return (
        <div>
            {name} {exercises}
        </div>
    );
};

const SumOfExercises = ({ parts }) => {
    const total = parts.reduce((sum, part) => (sum += part.exercises), 0);
    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <SumOfExercises parts={course.parts} />
        </>
    );
};

export default Course;
