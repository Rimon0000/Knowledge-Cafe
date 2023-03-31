import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1 className='question-title'>Blog Questions</h1>
          <div className='question'>
            <h4>Question 1: Props vs state</h4>
            <p>Answer: <br />
                1. Props are passed down to a component from its parent component. Props cannot be modified within the component. <br />
                2. State is managed within the component and can be modified using the setState() method <br />
                3. Props are typically used for data that doesn't change frequently, whereas state is used for data that changes frequently.  <br />
            </p> 
          </div>
          <div className='question'>
            <h4>Question 2: How does useState work?</h4>
            <p>Answer: <br />
               The first element of the array (stateValue) is the current state value, and the second element (setState) is a function that you can call to update the state value. The initialValue parameter is the initial value of the state. <br />
               When call setState with a new value, React will re-render the component with the new state value. The useState hook will then return the new state value as the first element of the array.
            </p> 
          </div>
          <div className='question'>
            <h4>Question 3: Purpose of useEffect other than fetching data.</h4>
            <p>Answer: <br />
              useEffect uses load or fetch the outside data of the component. 
              The useEffect hook in React allows to perform side effects in function components. 
              Side effects are any actions that affect something outside of the component, such as event listeners, or making API calls.
            </p> 
          </div>
          <div className='question'>
            <h4>Question 4: How Does React work?.</h4>
            <p>Answer: <br />
               React is a JavaScript library for building user interfaces. 
               It works by breaking down the UI into small, reusable components,
               which can then be composed together to build complex applications. <br />

               React also provides a unidirectional data flow, which means that the data flows in a single direction from parent components to child components. 
               This helps to keep the code predictable and easier to debug. <br />

               React has some core features: JSX, Virtual DOM, Components and Props, State Management(useState, useEffect) etc.
            </p> 
          </div>
        </div>
    );
};

export default Question;