import { useState } from 'react';

const NamesFc = () => {
    const [names, setNames] = useState(['Vinod', 'Shyam', 'John', 'Jane']);

    function deleteName(index: number) {
        let newNames = [...names];
        newNames.splice(index, 1);
        setNames(newNames); // mutates the state, and re-renders the component
    }

    const namesList = names.map((name, index) => (
        <div key={index}>
            <li>
                {name}
                <button onClick={() => deleteName(index)}>x</button>
            </li>
        </div>
    ));

    return (
        <>
            <h2>Names are...</h2>
            <ul>{namesList}</ul>
        </>
    );
};

export default NamesFc;

// x[0] is the state and currently refers to the array of 4 strings
// x[1] is a setter function to mutate the state maintained by x[0]

// const namesList = [
//     <li key={0}>Vinod</li>,
//     <li key={1}>Shyam</li>,
//     <li>John</li>,
//     <li>Jane</li>,
// ];
