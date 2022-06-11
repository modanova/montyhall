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
    // - now doors contains one door with goat or car

    console.log(`Door left is ${doors}, my door is ${my_door}`);

    // Keeper
    // - if the door unopened is true => swapper wins
    if (doors[0]) {
        swapper++;
    }
    // - else unopened is false => keeper wins
    else {
        keeper++;
    }
    //return stats in an object {Keep: 0/1, Swap:0/1}
    return {Keep: keeper, Swap: swapper};
}

console.log(runGame(1));