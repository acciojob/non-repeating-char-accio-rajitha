function firstNonRepeatedChar(str) {
 // Write your code here
	 if (str.length === 0) {
        return null; // Return null for empty string
    }

    const charCount = new Map();

    // Count occurrences of each character in the string
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first character with count 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null; // Return null if all characters are repeated
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
