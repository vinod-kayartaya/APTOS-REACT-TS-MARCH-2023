// HOC is a function that takes a component as argument

import React from 'react';

// and returns another component
// function withBorder(OldComp: any) {
//     return class NewComp extends React.Component {
//         render() {
//             return (
//                 <>
//                     <div
//                         className='border border-primary'
//                         style={{ padding: '15px' }}
//                     >
//                         <OldComp />
//                     </div>
//                 </>
//             );
//         }
//     };
// }

// Generally HOC are supposed to take only component as argument
// const withBorder = (OldComp: any, borderType: string) => () =>
//     (
//         <>
//             <div className={`border border-${borderType} p-2 border-3`}>
//                 <OldComp />
//             </div>
//         </>
//     );

const withBorder = (borderType: string) => (OldComp: any) => () =>
    (
        <>
            <div className={`border border-${borderType} p-2 border-3`}>
                <OldComp />
            </div>
        </>
    );

export default withBorder;
