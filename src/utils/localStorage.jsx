  const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2026-01-12",
        category: "Design"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navbar alignment issue",
        taskDate: "2026-01-05",
        category: "Development"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare slides for client demo",
        taskDate: "2026-01-03",
        category: "Presentation"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API",
        taskDate: "2026-01-12",
        category: "Backend"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migrate server to new host",
        taskDate: "2026-01-02",
        category: "DevOps"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Content",
        taskDescription: "Write SEO-friendly blog post",
        taskDate: "2026-01-11",
        category: "Content"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Keyword Research",
        taskDescription: "Find keywords for new campaign",
        taskDate: "2026-01-04",
        category: "SEO"
      }
    ]
  }
];


  const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  },
]


export const setLocalStorage = ()=>{
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
const employeesData = JSON.parse(localStorage.getItem('employees'));
const adminData = JSON.parse(localStorage.getItem('admin'));
// console.log(employeesData);
return {employeesData,adminData};
}