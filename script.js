const { body } = document;

const changeBackground = (number) => {
    // Check if background is already Showing
    let previousBackground;
    if(body.className) {
        previousBackground = body.className;
    }
    body.className = "";
    switch(number){
        case '1':
            return (previousBackground === 'background-1' ? false : body.classList.add("background-1"))
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add("background-2"))
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add("background-3"))
        case '4':
            return (previousBackground === 'background-4' ? false : body.classList.add("background-4"))
        default:
            break;
    }
}