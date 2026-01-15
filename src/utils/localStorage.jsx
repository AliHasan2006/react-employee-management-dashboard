  const employees = [
      {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Landing Page",
          "taskDescription": "Create UI design for the landing page",
          "taskDate": "2026-01-10",
          "taskCategory": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve navbar alignment issue",
          "taskDate": "2026-01-05",
          "taskCategory": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client Presentation",
          "taskDescription": "Prepare slides for client demo",
          "taskDate": "2026-01-03",
          "taskCategory": "Presentation"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate payment gateway API",
          "taskDate": "2026-01-12",
          "taskCategory": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Database Backup",
          "taskDescription": "Backup production database",
          "taskDate": "2026-01-06",
          "taskCategory": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Server Migration",
          "taskDescription": "Migrate server to new host",
          "taskDate": "2026-01-02",
          "taskCategory": "DevOps"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Blog Content",
          "taskDescription": "Write SEO-friendly blog post",
          "taskDate": "2026-01-11",
          "taskCategory": "Content"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Keyword Research",
          "taskDescription": "Find keywords for new campaign",
          "taskDate": "2026-01-04",
          "taskCategory": "SEO"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Email Campaign",
          "taskDescription": "Launch email marketing campaign",
          "taskDate": "2026-01-01",
          "taskCategory": "Marketing"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Mobile UI Testing",
          "taskDescription": "Test UI responsiveness on mobile",
          "taskDate": "2026-01-13",
          "taskCategory": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug Report",
          "taskDescription": "Submit bug report for checkout page",
          "taskDate": "2026-01-07",
          "taskCategory": "QA"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Automation Script",
          "taskDescription": "Write automation test script",
          "taskDate": "2026-01-02",
          "taskCategory": "Automation"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Follow-up",
          "taskDescription": "Follow up with potential clients",
          "taskDate": "2026-01-14",
          "taskCategory": "Sales"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Lead Analysis",
          "taskDescription": "Analyze last month leads",
          "taskDate": "2026-01-08",
          "taskCategory": "Analytics"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Proposal Draft",
          "taskDescription": "Draft proposal for new client",
          "taskDate": "2026-01-03",
          "taskCategory": "Documentation"
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
console.log(employeesData);
}