// Generate doors
const genDoors = () => { 
    let gameArr = new Array(3).fill(false);
    let index = Math.round(Math.random()*2);
    gameArr[index] = true;
    return gameArr;
}

// Run game
const runGame = () => {
    let keeper = 0;
    let swapper = 0;
    let doors = genDoors(); // Generate the doors
    let my_door_index = Math.round(Math.random()*2); // Pick a random index
    let my_door = doors[my_door_index]; // My door result

    // Round 1 
    // - remove my door from array
    doors.splice(my_door_index, 1);
    // - remove a/the door with goat behind from the two doors left
    if(doors[0]) {
        doors.splice(1,1);
    }
    else {
        doors.splice(0,1);
    }
    //Round 2 
    // - now doors contains one door with goat or car

    // console.log(`Door left is ${doors}, my door is ${my_door}`);

    // Keeper
    // - if the door unopened is true => swapper wins
    if (doors[0]) {
        swapper++;
    }
    // - else unopened is false => keeper wins
    else {
        keeper++;
    }
    //return result in an array [keeper, swapper]
    return [keeper, swapper];
}

    // console.log(runGame());

// Collect stats on a given number of rounds
const stats = (countdown) => {

    if(countdown<0) {
        alert("Please enter a valid number");
        return stats;
    }
    
    let keep = 0;
    let swap = 0;
    
    for(let i=0; i<countdown; i++) {
        [a, b] = runGame();
        if(a>b) {
            keep++;
        }
        else swap++;
    }
    // Return an object {keepWins: keep/countdown, swapWins: swap/countdown}
    return {keepWins: Math.round(keep/countdown*100)+"%", swapWins: Math.round(swap/countdown*100)+"%"};
}

// console.log(`Statistics of ${rounds=1000} rounds shows that`, stats(rounds)));

// Event listener for input of rounds


const btn = document.getElementById('submit_input');
btn.addEventListener('click', displayStats);

playcount.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        displayStats();
    }
});


function displayStats() {
    const playcount = document.getElementById("playcount");
    if(document.getElementById("stats").innerHTML=="") {
    document.getElementById("stats").innerHTML = `Statistics of ${playcount.value} rounds`;
    }

    const keeper_bar = document.getElementById("keeper_bar");
    const swapper_bar = document.getElementById("swapper_bar");

    let statistics = stats(playcount.value);
    let {keepWins: k, swapWins: s} = statistics;

    keeper_bar.style.width = k;
    swapper_bar.style.width = s;
}
