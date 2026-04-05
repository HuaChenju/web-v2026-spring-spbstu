class User {
    static #usersCount = 0;
    #friends = [];
    #name;
    #id;

    constructor(name) {
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        }
        this.#id = User.#usersCount;
        this.#name = name;
        User.#usersCount++;
    }

    addFriend(friendID) {
        if (typeof friendID != "number") {
            throw new Error("friendID must be a number ");
        }
        else if (friendID >= User.#usersCount) {
            throw new Error("User with such ID does not exist");
        }
        else if (friendID === this.#id) {
            throw new Error("User can't be friends with himself");
        }
        this.#friends.push(friendID);
    }

    removeFriend(friendID) {
        if (typeof friendID != "number") {
            throw new Error("friendID must be a number");
        }
        else if (this.#friends.indexOf(friendID) === -1) {
            throw new Error("User doesn't have a friend with such ID");
        }
        this.#friends.splice(this.#friends.indexOf(friendID), 1);
    }

    friendsCount() {
        return this.#friends.length;
    }

    getFriends() {
        return this.#friends;
    }

    getName() {
        return this.#name;
    }
    
    getID() {
        return this.#id;
    }

    static getUsersCount() {
        return this.#usersCount;
    }
}

function groupUsersByFriendsAmount(users) {
    let groups = [];
    for (let i = 0; i < User.getUsersCount(); i++) {
        groups.push([]);
    }

    for (let user of users) {
        groups[user.friendsCount()].push(user.getID());
    }

    return groups;
}

function getAllFriends(users) {
    let allFriends = new Set();
    for (let user of users) {
        for (let friendID of user.getFriends()) {
            allFriends.add(friendID);
        }
    }
    return Array.from(allFriends);
}

function getAllUsersWhoHaveFriendWithID(users, friendID) {
    let usersWithFriend = [];
    for (let user of users) {
        if (user.getFriends().indexOf(friendID) !== -1) {  
            usersWithFriend.push(user.getID());
        }
    }
    return usersWithFriend;
}

function getUsersWithMoreFriendsThan(users, friendsCount) {
    let usersWithMoreFriendsThanFriendsCount = [];

    for (let user of users) {
        if (user.friendsCount() > friendsCount) {
            usersWithMoreFriendsThanFriendsCount.push(user.getID());
        }
    }

    return usersWithMoreFriendsThanFriendsCount;
}

function getUsersWithNoFriends(users) {
    let usersWithNoFriends = [];
    for (let user of users) {
        if (user.friendsCount() === 0) {
            usersWithNoFriends.push(user.getID());
        }
    }
    return usersWithNoFriends;
}

let users = [new User("Sasha"), new User("Vanya"), new User("Andrew")];

users[0].addFriend(1);
users[0].addFriend(2);
users[1].addFriend(0);
users[2].addFriend(0);
users[2].addFriend(1);

users[0].removeFriend(1);
users[1].removeFriend(0);

console.log(users[0].getFriends());
console.log(users[1].getFriends());
console.log(users[2].getFriends());

console.log(users[0].friendsCount());
console.log(users[1].friendsCount());
console.log(users[2].friendsCount());

console.log(User.getUsersCount());

console.log(groupUsersByFriendsAmount(users));
console.log(getAllFriends(users));
console.log(getAllUsersWhoHaveFriendWithID(users, 2));
console.log(getUsersWithMoreFriendsThan(users, 0));
console.log(getUsersWithNoFriends(users));