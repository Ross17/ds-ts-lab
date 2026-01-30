import type {Friend, Colleague } from './myTypes'
import {friends, colleagues } from './01-basics.ts'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}`
}
export { older };

function allOlder(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}`
}

export { allOlder };

function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

export function addColleague(colleagues: Colleague[], name: string, department: string, email: string): Colleague[] {

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
