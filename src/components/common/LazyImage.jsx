import React from 'react';

/**
 * LazyImage component wraps an <img> element with lazy loading and optional styling.
 * It accepts all standard img props.
 */
const LazyImage = (props) => {
    return <img loading="lazy" {...props} />;
};

export default LazyImage;
