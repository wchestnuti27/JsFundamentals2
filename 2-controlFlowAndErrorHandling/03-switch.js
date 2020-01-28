/*
    - switch statements still execute a block of code depending on different cases
    - the use break keywords or default keywords (or both)
        - both keywords are optional

            - break keyword breaks us out of the current condition and switch statement
            - default keyword specifies code to run if there is no case match
*/

let officeCharacter = 'Michael';

switch (officeCharacter) {
    case "Michael":
        console.log('My mind is going a mile an hour')
        break;
    case "Dwight":
        console.log("Perfectenschlag")
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galasctica")
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}


let dessertMenu = 'cake';

switch (dessertMenu) {
    case "pie":
        console.log('Pie, pie, me oh my!')
        break;
    case "cake":
        console.log('Cake is great!')
        break;
    case "ice cream":
        console.log('I scream for ice cream')
        break;
    default:
        console.log('Not on the menu')
}