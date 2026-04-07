let friends = [];

function showFriends() {
    if (friends.length <= 0) {
        console.log("You have no registered friends.");
    } else {
        console.log(friends);
    }

}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true){
        console.log(`${name} is already your friend.`);
    } else {
        friends.push(name.toUpperCase());
        console.log(`${name} added.`);
    }   
}

// remove a specific friend using their name
function deleteFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    if (checkFriend == true) {
        friends.splice(friends.indexOf(name.toUpperCase()), 1);
        console.log(`${name} is deleted.`);
    } else {
        console.log(`${name} is not your friend.`);
    }
}
