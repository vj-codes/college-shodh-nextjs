import { collegeAcronyms } from "@/data/CollegAcronyms";

export const expandSearchQuery = (query) => {
    const lowerQuery = query.toLowerCase().trim();
    const words = lowerQuery.split(' ');

    let expandedTerms = new Set([query]); // Include original query

    // Add exact matches for each word
    words.forEach(word => {
        if (collegeAcronyms[word]) {
            expandedTerms.add(collegeAcronyms[word]);
        }
    });

    // Handle exact acronym matches within the entire query
    Object.entries(collegeAcronyms).forEach(([acronym, fullForm]) => {
        const exactMatchRegex = new RegExp(`\b${acronym}\b`, 'i'); // Word boundary for exact match
        if (exactMatchRegex.test(lowerQuery)) {
            expandedTerms.add(fullForm);
        }
    });

    console.log(expandedTerms)
    return Array.from(expandedTerms);
};
