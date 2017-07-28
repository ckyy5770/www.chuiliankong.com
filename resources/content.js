export const educationContent = {
    educationList: [
        {
            id:0,
            schoolName: "Vanderbilt University",
            degree: "Master",
            major: "Computer Science",
            startYear: 2016,
            startMonth: 8,
            endYear: 2018,
            endMonth: 5,
            gpa: 3.7,
            gpaStandard: 4.0,
            courses: [
                "Machine Learning",
                "Concurrency Programming",
                "Cloud Computing",
                "Intermediate Software Design",
                "Advanced Algorithms",
                "Distributed Systems",
                "Operating System",
            ],
            honor:[

            ]
        },

        {
            id:1,
            schoolName: "Beihang University",
            degree: "Bachelor",
            major: "Mathematics",
            startYear: 2012,
            startMonth: 8,
            endYear: 2016,
            endMonth: 6,
            gpa: 3.8,
            gpaStandard: 4.0,
            courses: [
            ],
            honor:[
                "National Scholarship of China. 2014, 2015"
            ]
        }
    ]
};

export const workContent = {
    workList: [
        {
            id:0,
            company: "Vanderbilt University",
            department: "Institute for Software Integrated Systems",
            position: "Research and Development Engineer Intern",
            startYear: 2017,
            startMonth: 5,
            endYear: 2017,
            endMonth: 8,
            keyWords: [
                "Java",
                "Python",
                "ZeroMQ",
                "ZooKeeper"
            ],
            descriptions: [
                "Implemented an advanced Publisher-Subscriber Coordination System using ZeroMQ.",
                "Designed and Implemented a discover service among clients and brokers using ZooKeeper.",
                "Implemented an advanced load balancing logic based on channel replication, which reduced average transmission latency by 18%, comparing to classic consistent hashing method.",
                "Wrote scripts for collecting system metrics, testing over Mininet and testing over cloud."
            ]
        },

        {
            id:1,
            company: "Huawei Technologies Co.Ltd.",
            department: "Big Data Product Development",
            position: "Software Engineer Intern",
            startYear: 2015,
            startMonth: 7,
            endYear: 2015,
            endMonth: 9,
            keyWords: [
                "C",
                "Shell Script",
                "Kernel Programming"
            ],
            descriptions: [
                "Implemented a part of kernel module that is used for testing basic operations of a big-data storage system developed by Huawei. Brief description: to test whether basic operations generate correct quota log.",
                "Designed and Implemented more than 50 test cases to test my part of functionality."
            ]
        }
    ]
};

export const skillsContent = {
    skillsList1: {
        programmingLanguages:[
            {
                id:0,
                skill: "Java",
                proficiency: 80
            },
            {
                id:1,
                skill: "C++",
                proficiency: 80
            },
            {
                id:1,
                skill: "C",
                proficiency: 80
            },
            {
                id:2,
                skill: "Python",
                proficiency: 60
            },
            {
                id:2,
                skill: "Javascript",
                proficiency: 60
            },
        ],
        libraries:[
            {
                id:0,
                skill: "React",
                proficiency: 60
            },
            {
                id:1,
                skill: "React-Native",
                proficiency: 60
            },
            {
                id:2,
                skill: "Express",
                proficiency: 60
            },
            {
                id:3,
                skill: "Bootstrap",
                proficiency: 60
            },
        ]

    },

    skillsList: [
        {
            id:0,
            skill: "skill1",
            proficiency: 80
        },

        {
            id:1,
            skill: "skill2",
            proficiency: 50
        }
    ]
};

export const projectsContent = {
    projectsList: [
        {
            id:0,
            projectName: "Publisher-Subscriber System",
            startYear: 2017,
            startMonth: 4,
            endYear: 2017,
            endMonth: 5,
            keyWords: [
                "C++",
                "ZeroMQ",
                "Mininet"
            ],
            link: "https://github.com/iloveyoukcl5770/pub-sub-project-final",
            descriptions: [
                "Designed and Implemented an advanced Publisher-Subscriber System using ZeroMQ.",
                "The system implements eight QoS policies inspired by Data Distributed Service, including but not limited to " +
                "anonymous connection between publisher and subscriber, storing message history and enforcing a information " +
                "strength to every Publisher."
            ]
        },

        {
            id:1,
            projectName: "Network Traffic Monitor",
            startYear: 2016,
            startMonth: 10,
            endYear: 2016,
            endMonth: 12,
            keyWords: [
                "C",
                "Shell Script",
                "Kernel Programming"
            ],
            link: "https://github.com/iloveyoukcl5770/Network-Traffic-Monitor",
            descriptions: [
                "Designed and implemented a Linux kernel module using netfilter framework.",
                "Implemented three major functionalities: monitoring network trac, blocking specific incoming/outgoing addresses and maintaining a quota for specified addresses.",
                "Designed and implemented a set of test cases using shell script."
            ]
        }
    ]
};

export const indexContent = {
    introduction: "Hi! My name is Chuilian.<br> I'm a master's student at Vanderbilt University studying Computer Science."
};

export const contactContent = {
    email: "iloveyoukcl5770@gmail.com",
    github: "https://github.com/iloveyoukcl5770",
    linkin: "https://www.linkedin.com/in/chuiliankong/",
    personalWebsite: "www.chuiliankong.com"

};


