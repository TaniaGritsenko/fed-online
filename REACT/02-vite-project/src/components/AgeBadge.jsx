import React from 'react';

const AgeBadge = ({age}) => {
    return (
        <div className="years">
                <div className="gray-block">
                    <p>
                        {age}
                    </p>
                </div>
            </div>
    );
};

export default AgeBadge;