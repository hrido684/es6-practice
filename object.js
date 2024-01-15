const list =[
    {id:12,Name:"Hridoy"},
    {id:13,Name:"Rajib"},
    {id:14,Name:"Sabbir"},
];
var nameList =list.map(student=>student.Name);
const ids = list.map(ides =>ides.id)

console.log(nameList)
console.log(ids)
const bigger = list.filter(full=>full.id>12)
console.log(bigger);