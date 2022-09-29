import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section>
            <article className='blog-article'>
                <h2>Q : How Doese React Work?</h2>
                <p>A : React is a declarative, efficient, and flexible JavaScript library for building user interfaces.React has his own virtual DOM. React allows you to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </article>
            <article className='blog-article'>
                <h2>Q : Difference Between State vs Prop?</h2>
                <p>A : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component. Props are Immutable. Although a component is not allowed to change its props, it is responsible for the props of its child components down the component tree. On the other hand, state is mutable. A stateful component changes its state every time users interact with the app.</p>
            </article>
            <article className='blog-article'>
                <h2>Q : How does useEffect works without data fetching ?</h2>
                <h5>Answer: </h5> 
                <p>1. Setting up a Subscription </p>
                <p>2. Manually Change the DOM in react components </p>
                <p>3.useEffect Runs after every render </p>
                <p>4. useEffect Manage state updates. </p> 
                <p>5. useEffect can teakes dependency for updating or re-rendering DOM. </p> 
                <p>6. useEffect can handle all side-effect programming logic.</p>
            </article>
        </section>
    );
};

export default Blog;