const users = [
  {
    id: 1,
    name: "Bat",
    age: 20,
    salary: 1200000,
    isActive: true,
    department: "IT",
    email: "bat@gmail.com",
    address: { city: "Ulaanbaatar", district: "Bayanzurkh" },
  },
  {
    id: 2,
    name: "Bold",
    age: 17,
    salary: 800000,
    isActive: false,
    department: "HR",
    email: "bold@gmail.com",
    address: { city: "Darkhan", district: "Center" },
  },
  {
    id: 3,
    name: "Saraa",
    age: 25,
    salary: 1500000,
    isActive: true,
    department: "Finance",
    email: "saraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Sukhbaatar" },
  },
  {
    id: 4,
    name: "Bat",
    age: 30,
    salary: 2000000,
    isActive: false,
    department: "IT",
    email: "bat2@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
  {
    id: 5,
    name: "Anu",
    age: 22,
    salary: 1100000,
    isActive: true,
    department: "Marketing",
    email: "anu@gmail.com",
    address: { city: "Ulaanbaatar", district: "Chingeltei" },
  },
  {
    id: 6,
    name: "Temuulen",
    age: 28,
    salary: 1800000,
    isActive: true,
    department: "IT",
    email: "temuulen@gmail.com",
    address: { city: "Darkhan", district: "New" },
  },
  {
    id: 7,
    name: "Naraa",
    age: 19,
    salary: 9000,
    isActive: false,
    department: "HR",
    email: "naraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Songino" },
  },
  {
    id: 8,
    name: "Bataa",
    age: 35,
    salary: 2500000,
    isActive: true,
    department: "Finance",
    email: "bataa@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
];

// users.forEach((user) => {
//   console.log(user.name);
// });

// const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// console.log(totalAge);

// const maxAge = Math.max(...users.map((user) => user.age));
// const oldestUsers = users.filter((user) => user.age === maxAge);
// console.log(oldestUsers);

// const totalSalary = users
//   .filter((user) => user.salary)
//   .reduce((sum, user) => sum + user.salary, 0);
// console.log(totalSalary);

// const activeUsers = users.filter((user) => user.isActive);
// console.log(activeUsers);

// const bat = users.find((user) => user.name === "Bat");
// console.log(bat);

// let count = 0;
// users.forEach(() => count++);
// console.log(count);

// const newUsers = users.map((user) => ({ user, status: "new" }));
// console.log(newUsers);

// const upperNames = users.map((user) => user.name.toUpperCase());
// console.log(upperNames);

// let min = users[0].salary;

// for (let i = 1; i < users.length; i++) {
//   if (min > users[i].salary) {
//     min = users[i].salary;
//   }
// }
// console.log(min);

// const over18 = users.filter((user) => user.age > 18);
// console.log(over18);

// const duplicateNames = users
//   .map((user) => user.name)
//   .filter((name, index, arr) => arr.indexOf(name) !== index);

// console.log([...new Set(duplicateNames)]);

// const sortByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName);

// const sortBySalaryDesc = [...users].sort((a, b) => b.salary - a.salary);
// console.log(sortBySalaryDesc);

// const emails = users.map((user) => user.email);
// console.log(emails);

// const findById = (id) => users.find((user) => user.id === id);

// console.log(findById(3));

// const richUsers = users.filter((user) => user.salary > 1000000);

// const avgSalary =
//   richUsers.reduce((sum, user) => sum + user.salary, 0) / richUsers.length;

// console.log(avgSalary);

// const addAge = users.map((user) => ({
//   ...user,
//   age: user.age + 1,
// }));

// console.log(addAge);

// const activeCount = users.filter((user) => user.isActive).length;
// console.log(activeCount);

// const longestName = users.reduce((longest, user) =>
//   user.name.length > longest.name.length ? user : longest,
// );

// console.log(longestName);
// const groupByName = users.reduce((acc, user) => {
//   acc[user.name] = acc[user.name] || [];
//   acc[user.name].push(user);
//   return acc;
// }, {});

// console.log(groupByName);

// const groupByDept = users.reduce((acc, user) => {
//   acc[user.department] = acc[user.department] || [];
//   acc[user.department].push(user);
//   return acc;
// }, {});

// console.log(groupByDept);

// const top3 = [...users].sort((a, b) => b.salary - a.salary).slice(0, 3);

// console.log(top3);

// const mapById = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});

// console.log(mapById);

// function searchByName(name) {
//   return users.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()));
// }

// console.log(searchByName("bat"));

// const extra = [
//   { id: 1, hobby: "football" },
//   { id: 3, hobby: "music" },
// ];

// const merged = users.map((user) => ({
//   ...user,
//   ...extra.find((e) => e.id === user.id),
// }));

// console.log(merged);

// const orders = [{ price: 50000 }, { price: 120000 }, { price: 80000 }];

// const totalSales = orders.reduce((sum, o) => sum + o.price, 0);

// console.log(totalSales);

// const unique = Array.from(new Map(users.map((u) => [u.id, u])).values());

// console.log(unique);

// const cities = users.map((u) => u.address.city);

// console.log(cities);

const customSort = [...users].sort((a, b) => {
  if (a.age === b.age) {
    return b.name.localeCompare(a.name); // нэр буурах
  }
  return a.age - b.age; // нас өсөх
});

console.log(customSort);
