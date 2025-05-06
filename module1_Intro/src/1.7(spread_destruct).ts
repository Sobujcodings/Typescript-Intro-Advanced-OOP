{

// spread operator (value copy kore array banay sathe aro item add kora jay spread kore copy kore kore)
// rest operator (single single element niye akta array banay (opposite of spread, choray na accumulate kore))
// destructing


// spread operator(make shallow copy, copied array + extented data) (array vhitorer data guloke niye ashe)
const bros1: string[] = ['a','b','c'];
const bros2: string[] = ['x', 'y', 'z'];

// bros1.push(bros2); // XXX
// output: ['a','b','c', ['x', 'y', 'z'] ]
// cant do that push (list of string r moddhe list of string e push korte parba pura array push korte parba na)

bros1.push(...bros2);
// output: ['a','b','c','x', 'y', 'z']


// spread in object {}
const mentors1 = {
    typescript : 'mezba',
    next : 'tanmoy',
    redux: 'mir',
}
const mentors2 = {
    prisma: "firoz",
    cloud: "Nahid",
    dbms: "mizan",
}
// all mentor list
const mentorsList = {
    ...mentors1, ...mentors2
}


// learn rest operator (opposite of spread operator, spread(copy) banabo na, single single element k niye akta arr banabo )

// const greetFriends = (friends1, friends2, friends3) =>{   
// if its in sigle parameter (bettr lets make a array => rest operator)
const greetFriends = (...friends: string[]) =>{
    // console.log(`Hi friends ${friends1} ${friends2} ${friends3}`)
    console.log(`Hi friends ${friends}`);
    // then etake loop chaliye shob item dekhte pari
    friends.forEach((friend : string) => {
        console.log(friend);
    })
}

// greetFriends('abul', 'babul', 'dabul', 'mabul');  
// upore parameter 3ta dile but 4ta arg padhale err dibe tai parameter guloke single single na rekhe akta arra baniye dei // jate joto item e padhai argument e err na dey, here comes the rest operator (make all this single item into 1 array)
greetFriends('abul', 'babul', 'dabul', 'mabul');



}