// --------------------------------------------------------------------------------------------------------
// intro: programming design patterns w/ node js examples
// --------------------------------------------------------------------------------------------------------
    // js design pattern learning
        // what is a design pattern?
        // where do we use design patterns? - front-end and back-end
        // how are design patterns implemented?
    // ------------------------------------------------------------------------------------------------
    // history
        // js was introduced in 1995
        // was originally written to manage the DOM but has expanded. now entire apps can be written in js
        // easy to write bad code in js, procedural and messy code
        // better designed code is object oriented
    // ------------------------------------------------------------------------------------------------
    // about patterns
        // design patterns actual came from engineering towns, homes, cities
        // patterns represent our current best guess as to what arrangement of the physical (virtual for our cases) environment will work to solve the problem presented - Christopher Alexander
        // the empirical question centers on the problem. what is hte problem and what pattern will help us fix it?
        // and does the solution arrangement resolve the problem?
    // ------------------------------------------------------------------------------------------------
    // problems - solutions (design patterns)
        // one and off traffic for highways - cloverleaf interchange
        // pedestrian traffic - sidewalks
        // entry and exit for public buildings - revolving doors
    // ------------------------------------------------------------------------------------------------
    // problems - solutions: the gang of four design patterns
        // designing service layers - module pattern (separate layers)
        // dealing with overly complicated object interfaces - façade pattern (like jquery over js)
        // visibility into state changes - observer pattern
    // ------------------------------------------------------------------------------------------------
    // what makes a design pattern?
        // it solves a problem
        // it is a proven concept
        // the solution is not obvious
        // it describes a relationship (how things interact in our code - significant human component)
    // ------------------------------------------------------------------------------------------------
    // why use design patterns?
        // don't reinvent the wheel. why solve it again?
        // common programming vocab between programmers
        // information security
        // overall program organization and efficiency
    // ------------------------------------------------------------------------------------------------
    // pattern groups and types - well-used in js
        // creational design patterns (js) - deal with creation of new instances of a new object (like the constructor pattern)
            // module pattern (js) - grouping of like methods or a service
            // factory pattern
            // singleton pattern
        // structural patterns - makeup of objects themselves
            // decorater
            // façade
            // flyweight
        // behavioral patterns - deal with how objects relate to one another and how they operate
            // command pattern
            // mediator pattern
            // observer pattern
    // ------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// creational design patterns
// --------------------------------------------------------------------------------------------------------
    // used to create new objects
    // used for adapting creation to the situation
    // --------------------------------------------------------------------------------------------------------
    // constructor pattern
    // --------------------------------------------------------------------------------------------------------
        // create new objects with their own scope (similar to classes)
        // constructor functions use the "new" keyword
            // creates a new object
            // links to an object prototype
            // binds "this" to the new object scope
            // implicitly returns "this"
        // object constructors, prototypes, exporting constructor modules, classes
        // ----- js ES6 classes -----
            // file needs 'use strict' at top in order to use classes
            // defining a class is an alternate way to create a constructor
            // class example...
                // 'use strict'
                // class Task {
                //     constructor(name) {
                //         this.name = name;
                //         this.completed = false;
                //     }
                //     complete() {
                //         console.log(`task completed: ${this.name}`);
                //     }
                //     save() {
                //         console.log(`task saved: ${this.name}`);
                //     }
                // }
                // var task1 = new Task("constructors");
                // task1.complete();
                // task1.save();
            //
        //
    // --------------------------------------------------------------------------------------------------------
    // module pattern
    // --------------------------------------------------------------------------------------------------------
        // used as a simple way to encapsulate a group of like methods
        // like a toolbox of functions to use or a service
        // a module pattern is an object literal, a collection of keys and functions
            // var Module = {
            //     method: function() {...},
            //     nextMethod: function() {...}
            // };
        // wrap it in a function!
            // var Module = function() {
            //     var privateVar = "I am private"; // a private variable sitting inside this function
            //     return {
            //         method: function() {
            //             // do this stuff
            //         },
            //         nextMethod: function() {
            //             // do this stuff
            //         }
            //     }
            // };
        // example db module that would be a standalone and then required in other pages
            // var repo = function() {
            //     return {
            //         get: function(id) {
            //             console.log("getting task" + id);
            //             return {
            //                 name: "new task from db"
            //             }
            //         },
            //         save: function(task) {
            //             console.log("saving" + task.name + " to the db");
            //         }
            //     }
            // }
            // module.exports = repo();
        // db module reveal - reveals the methods available for this module
            // var repo = function() {
            //     var db = {};
            //     var get = function(id) {
            //         console.log("getting task" + id);
            //         return {
            //             name: "new task from db"
            //         }
            //     }
            //     var save = function(task) {
            //         console.log("saving" + task.name + " to the db");
            //     }
            //     return {
            //         get: get,
            //         save: save
            //     }
            // }
            // module.exports = repo();
        //
    // --------------------------------------------------------------------------------------------------------
    // factory pattern
    // --------------------------------------------------------------------------------------------------------
        // used to create objects for us - simplifies object creation
        // creating different objects based upon need or where you're at in your program
        // repository creation - for several repos within one repository controller - you create/use a repo factory
        // example...
            // ------------------------------------------------------------------------------------------------
            // PROBLEM - importing several repos into something like a main.js file
                // var Task = require("./task");
                // var taskRepo = require("./task-repo");
                // var userRepo = require("./user-repo");
                // var projectRepo = require("./project-repo");
            // ------------------------------------------------------------------------------------------------
            // SOLUTION 1 - PREFERRED: factory pattern (in it's own file - something like repoFactory.js)
                // var repoFactory = function() {
                //     this.getRepo = function(repoType) {
                //         if (repoType === "task") {
                //             var taskRepo = require("./task-repo")();
                //             return taskRepo;
                //         }
                //         if (repoType === "user") {
                //             var userRepo = require("./user-repo")();
                //             return userRepo;
                //         }
                //         if (repoType === "project") {
                //             var projectRepo = require("./project-repo")();
                //             return projectRepo;
                //         }
                //     }
                // }
                // module.exports = new repoFactory;
            // ------------------------------------------------------------------------------------------------
            // SOLUTION 2 - EVEN MORE PREFERRED: factory pattern w/ cache
            // instead of creating a new repo each time, you are caching it in the factory
                // var repoFactory = function() {
                //     this.getRepo = function(repoType) {
                //         if (repoType === "task") {
                //             if (this.taskRepo) {
                //                  console.log("retrieving from cache");
                //                  return this.taskRepo;
                //             } else {
                //                 var taskRepo = require("./task-repo")();
                //                 // config code here --
                //                 return taskRepo;
                //             }
                //         }
                //         if (repoType === "user") {
                //             var userRepo = require("./user-repo")();
                //             return userRepo;
                //         }
                //         if (repoType === "project") {
                //             var projectRepo = require("./project-repo")();
                //             return projectRepo;
                //         }
                //     }
                // }
                // module.exports = new repoFactory;
            // ------------------------------------------------------------------------------------------------
            // SOLUTION 3 - EVEN MORE PREFERRED AGAIN:
            // simplifying use of the factory and requiring less code in the pages you are importing the factory into
                // var repoFactory = function() {
                //     var repos = this;
                //     var repoList = [
                //         {name: "task", source: "./task-repo"},
                //         {name: "user", source: "./user-repo"},
                //         {name: "project", source: "./project-repo"}
                //     ];
                //     repoList.forEach(function(repo) {
                //         repos[repo.name] = require(repo.source)()
                //     });
                // };
                // module.exports = new repoFactory;
            //
        //
    //
    // --------------------------------------------------------------------------------------------------------
    // singleton pattern
    // --------------------------------------------------------------------------------------------------------
        // used to restruct an object to one instance of that object across the application
        // remembers the last time you used it
        // hands same instance back
        // singleton example:
            // var TaskRepo = (function() {
            //     var taskRepo;
            //     function createRepo() {
            //         var taskRepo = new Object("Task");
            //         return taskRepo;
            //     }
            //     return {
            //         getInstance: function() {
            //             if (!taskRepo) {
            //                 taskRepo = createRepo();
            //             }
            //             return taskRepo;
            //         }
            //     }
            // })();
            // // two different instances of the same repository
            // var repo1 = TaskRepo.getInstance();
            // var repo2 = TaskRepo.getInstance();
            // if (repo1 === repo2) {
            //     console.log("Same TaskRepo");
            // }
        // NOTE: Node.js uses the CommonJS module pattern
        // singleton example 2:
            // // in repo.js file
                // var repo = function() {
                //     var called = 0;
                //     var save = function(task) {
                //         console.log("saving" + task + " Called " + called + " times");
                //     }
                //     console.log("newing up task repo");
                //     return {
                //         save: save
                //     }
                // }
                // module.exports = repo(); // including () executes this function
            // // in taskHandler.js file
                // var myRepo = require("./repo.js");
                // var taskHandler = function() {
                //     return {
                //         save: function() {
                //             myRepo.save("Hi from taskHandler");
                //         }
                //     }
                // }
                // module.exports = taskHandler();
            // // test in main.js file
                // var taskHandler = require("./taskHandler.js");
                // var myRepo = require("./repo.js");
                // myRepo.save("fromMain");
                // myRepo.save("fromMain");
                // myRepo.save("fromMain");
                // taskHandler.save();
                // taskHandler.save();
                // taskHandler.save();
                // taskHandler.save();
        //
    //
// --------------------------------------------------------------------------------------------------------
// structural design patterns
// --------------------------------------------------------------------------------------------------------
    // concerned with how objects are made up
    // simplify relationships between objects
        // extend functionality
        // simplify functionality 
    // --------------------------------------------------------------------------------------------------------
    // decorator pattern
    // --------------------------------------------------------------------------------------------------------
        // add new functionality to an existing object without being obtrusive
            // adding new features
            // subclassing in js
        // more complete inheritance
        // wraps an object
        // allows extended functionality
        // simple decoration
            // // example:
            //     var Task = function(name) {
            //         this.name = name;
            //         this.completed = false;
            //     };
            //     Task.prototype.complete = function() {
            //         console.log(`task completed: ${this.name}`);
            //     };
            //     Task.prototype.save = function() {
            //         console.log(`task saved: ${this.name}`);
            //     };
            // // legacy task
            //     var myTask = new Task("Legacy Task");
            //     myTask.complete();
            //     myTask.save();
            // // urgent task
            //     var urgentTask = new Task("Urgent Task");
            // // decorate the urgentTask
            // urgentTask.priority = 2;
            // urgentTask.notify = function() {
            //     console.log("notifying important people");
            // }
            // urgentTask.complete();
            // urgentTask.save = function() {
            //     this.notify();
            //     Task.prototype.save.call(this); 
            // }
            // urgentTask.save();
        // sub objecting and true inheritance
            // a new object that wraps the task and then decorates it without changing the original object
                // // sub objecting and true inheritance example:
                //     var Task = function(name) {
                //         this.name = name;
                //         this.completed = false;
                //     };
                //     Task.prototype.complete = function() {
                //         console.log(`task completed: ${this.name}`);
                //     };
                //     Task.prototype.save = function() {
                //         console.log(`task saved: ${this.name}`);
                //     };
                // // legacy task
                //     var myTask = new Task("Legacy Task");
                //     myTask.complete();
                //     myTask.save();
                // // sub object for urgent task
                //     var UrgentTask = function(name, priority) {
                //         Task.call(this, name);
                //         this.priority = priority;
                //     }
                //     UrgentTask.prototype = Object.create(Task.prototype); // makes a new object for the prototype out of the Task prototype
                //     UrgentTask.prototype.save = function() {
                //         this.notify();
                //         console.log("Do important stuff before saving");
                //         Task.prototype.save.call(this); // this refers back to urgent task or whatever that object's scope is
                //     };
                //     var ut = new UrgentTask("This is urgent", 1);
                //     console.log(ut);
                //     ut.complete();
                //
            //
        //
    // --------------------------------------------------------------------------------------------------------
    // Façade Pattern
    // --------------------------------------------------------------------------------------------------------
        // used to provide a simplified interface to a complicated system
        // think about the front of a building - all you see is a very nice clean front wall that does not at all show what is going on inside
        // it hides the complexity of the backend subsystem from the simplified user interface
        // jQuery is a Façade pattern/nice interface on top of the DOM for dealing with js
        // example in node:
            // problem to fix
            // var Task = function(data) {
            //     this.name = date.name;
            //     this.priority = date.priority;
            //     this.project = date.project;
            //     this.user = date.user;
            //     this.name = date.name;
            //     this.completed = date.completed;
            // }
            // var TaskService = function() {
            //     return {
            //         complete: function(task) {
            //             task.completed = true;
            //             console.log("completing task: " + task.name);
            //         },
            //         setCompleteDate: function(task) {
            //             task.completedDate = new Date();
            //             console.log(task.name + " completed on " + task.completedDate);
            //         },
            //         notifyCompletion: function(task, user) {
            //             console.log("notifying " + user + " of the completion of " + task.name);
            //         },
            //         save: function(task) {
            //             console.log("saving task: " + task.name);
            //         }
            //     }
            // }
            // var myTask = new Task({
            //     name: "mytask",
            //     priority: 1,
            //     project: "courses",
            //     user: "jon",
            //     completed: false
            // });
            // // console.log(myTask);
            // TaskService.complete(myTask);
            // if (myTask.completed == true) {
            //     TaskService.setCompleteDate(myTask);
            //     TaskService.notifyCompletion(myTask, myTask.user);
            //     TaskService.save(myTask);
            // };
            // console.log(myTask);
            // solution - clean up task service
            var Task = function(data) {
                this.name = data.name;
                this.priority = data.priority;
                this.project = data.project;
                this.user = data.user;
                this.name = data.name;
                this.completed = data.completed;
            }
            var TaskService = function() {
                return {
                    complete: function(task) {
                        task.completed = true;
                        console.log("completing task: " + task.name);
                    },
                    setCompleteDate: function(task) {
                        task.completedDate = new Date();
                        console.log(task.name + " completed on " + task.completedDate);
                    },
                    notifyCompletion: function(task, user) {
                        console.log("notifying " + user + " of the completion of " + task.name);
                    },
                    save: function(task) {
                        console.log("saving task: " + task.name);
                    }
                }
            }();
            var TaskServiceWrapper = function() {
                var completeAndNotify = function(myTask) {
                    TaskService.complete(myTask);
                    if (myTask.completed == true) {
                        TaskService.setCompleteDate(myTask);
                        TaskService.notifyCompletion(myTask, myTask.user);
                        TaskService.save(myTask);
                    };
                }
                return {
                    completeAndNotify: completeAndNotify
                }
            }();
            var myTask = new Task({
                name: "mytask",
                priority: 1,
                project: "courses",
                user: "jon",
                completed: false
            });
            TaskServiceWrapper.completeAndNotify(myTask);
            console.log(myTask);






