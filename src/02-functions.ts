import type {Friend, Colleague } from './myTypes'
import {friends, colleagues } from './01-basics.ts'

function older(f: Friend)  {
     f.age += 1
     return `${f.name} is now ${f.age}`
}
export { older };

function allOlder(f: Friend)  {
     f.age += 1
     return `${f.name} is now ${f.age}`
}

export { allOlder };

function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

export function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {

  const maxExtension = colleagues.length === 0 ? 0 : Math.max(...colleagues.map(c => c.contact.extension)) + 1;

   const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: maxExtension
    }
  };

  return colleagues.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
   max? : number
): EmailContact[] {
    let end = colleagues.length;
     if (max !== undefined) {
        end = max < 2 ? 1 : max
     }
     const sorted = colleagues.sort(sorter);
     const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
     return fullResult.slice(0,end)
}

console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW



function findFriends(
    friends : friends[],
    criterion: (friend: Friend) => boolean
): FriendInfo[] {
   const filtered = friends.filter(criterion);
   const result: FriendInfo[] = filtered.map(f => ({
       name: f.name
     }));
     return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

export function addInterest(friend: Friend, interest: string) {

  if (!friend.interests) {
    friend.interests = [];
  }

  friend.interests.push(interest);
  return friend.interests;
}

console.log(addInterest(friends[0], ["Politics", "Gaming","Cricket"]))
