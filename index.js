// Code your solution here

// Write a Function To Case-insensitively Match strings
function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

// Write a Function To Partially Match Substrings
function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

// Write a Function To Match object Values To a Provided string
function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
}