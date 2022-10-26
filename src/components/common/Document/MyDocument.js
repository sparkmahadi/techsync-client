import React from 'react';

const ref = React.createRef();

const MyDocument = (data) => {
    return (
        <div>
            <div ref={ref}>
                <h2>Hiiiiiiiiiiiiii</h2>
            </div>
        </div>
    );
};

export default MyDocument;