import { useState, useEffect } from 'react';

/**
 * Custom Hook: useDebounce
 * This hook helps to delay the updates to a value until a specified delay time has passed
 * since the last change. It's commonly used for optimizing search inputs or API calls 
 * to prevent excessive requests.
 *
 * @param {any} value - The input value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {any} - The debounced value.
 */
const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function: Clears the timeout if the value or delay changes
        // This ensures that the timer restarts with every change, avoiding unnecessary updates
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Re-run the effect when 'value' or 'delay' changes

    // Return the debounced value
    return debouncedValue;
};

export default useDebounce;
