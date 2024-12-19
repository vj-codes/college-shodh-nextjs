import { collegeAcronyms } from "@/data/CollegAcronyms"; 

/**
 * Expands a search query to include full forms of any acronyms or abbreviations detected in the query.
 * This function helps improve search accuracy by considering both short forms and their expanded terms.
 * 
 * @param {string} query - The input search query entered by the user.
 * @returns {string[]} - An array of expanded search terms, including the original query and detected full forms.
 */
export const expandSearchQuery = (query) => {
    // Convert the query to lowercase and remove extra spaces for case-insensitive and clean processing
    const lowerQuery = query.toLowerCase().trim();
    const words = lowerQuery.split(' '); // Split the query into individual words

    let expandedTerms = new Set([query]); // Use a Set to store unique terms, starting with the original query

    // Step 1: Add full forms for words that match acronyms in the dictionary
    words.forEach(word => {
        if (collegeAcronyms[word]) {
            expandedTerms.add(collegeAcronyms[word]); // Add the full form if the word matches an acronym
        }
    });

    // Step 2: Check for exact acronym matches in the entire query
    Object.entries(collegeAcronyms).forEach(([acronym, fullForm]) => {
        // Create a case-insensitive regex to match the exact acronym as a whole word
        const exactMatchRegex = new RegExp(`\\b${acronym}\\b`, 'i'); // \b ensures word boundaries
        if (exactMatchRegex.test(lowerQuery)) {
            expandedTerms.add(fullForm); // Add the full form if the acronym is found in the query
        }
    });

    console.log(expandedTerms); // Log the expanded search terms for debugging purposes

    // Convert the Set to an Array and return the unique expanded terms
    return Array.from(expandedTerms);
};
