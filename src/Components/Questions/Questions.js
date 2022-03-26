import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <h2>How React Works?</h2>
            <p>React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app.a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>

            <h2>Props Vs State </h2>
            <p><strong>Props:</strong>

                Props are read Only.
                Props can not be modiflied.
                Props are immutable.
                <br /><br />

                <strong>State:</strong>

                State changes can be asynchronous.
                State can be modified using setState.
                State are mutable.

            </p>

            <h2>How UseState Works?</h2>
            <p>UseState is a Hook that allows us to have state variables in functional components. we can pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.It’s especially useful for local component state, but larger projects might require additional state management solutions.The state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type we can imagine.</p>
        </div>
    );
};

export default Questions;