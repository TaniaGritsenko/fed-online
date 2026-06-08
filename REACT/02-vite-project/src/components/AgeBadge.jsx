import React from 'react';

const AgeBadge = ({age}) => {
    return (
        <div className="years">
                <div className="gray-block">
                    <p className='m-0'>
                        {age}
                    </p>
                </div>
            </div>
    );
};

export default AgeBadge;