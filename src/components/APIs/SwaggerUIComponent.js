import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import APIs from '/src/components/APIs/APIs.json';
const SwaggerUIComponent = () => {
    return <SwaggerUI spec={APIs} />;
};

export default SwaggerUIComponent;
