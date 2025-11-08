
export const rawCurriculumData = {
  "course": {
    "id": "javascript-complete",
    "name": "Complete JavaScript (Browser, Node, TS)",
    "description": "From absolute beginner to advanced full-stack developer. Covers standard JS, Node.js backend, and TypeScript.",
    "modules": [
      {
        "id": "js-module-1",
        "title": "Module 1: JS Fundamentals",
        "lessons": [
          {
            "id": "js-vars-101",
            "title": "Variables: let, const, and var",
            "objectives": [
              "Understand variables as labeled containers for data",
              "Distinguish between let (reassignable) and const (immutable binding)",
              "Know why 'var' is generally avoided in modern JS"
            ],
            "prerequisites": [],
            "timeEstimateMin": 25,
            "content": {
              "explanations": [
                "Think of variables as labeled boxes where you can store information to use later.",
                "In modern JavaScript, we primarily use two labels: 'const' for boxes whose contents won't be completely swapped out, and 'let' for boxes that might need new contents later.",
                "We avoid the older label 'var' because it behaves in confusing ways regarding where it can be accessed (scoping)."
              ],
              "demos": [
                {
                  "code": "let userAge = 25;\nconsole.log(userAge); // Outputs: 25\n\nuserAge = 26; // Birthday happens!\nconsole.log(userAge); // Outputs: 26\n\nconst birthYear = 1998;\nconsole.log(birthYear);\n// birthYear = 1999; // This would cause an error!",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                {
                  "type": "recall",
                  "prompt": "If you're creating a variable for someone's date of birth, which keyword should you use and why?"
                },
                {
                  "type": "apply",
                  "prompt": "I've declared 'const score = 0'. What happens if I later try to do 'score = score + 1'?"
                }
              ],
              "debugging": [
                {
                  "buggyCode": "const currentTemperature = 72;\ncurrentTemperature = 75;\nconsole.log(\"Temp is now:\", currentTemperature);",
                  "hints": [
                    "Read the error message carefully: 'Assignment to constant variable'.",
                    "Look at how you declared 'currentTemperature'.",
                    "If a value needs to change over time, 'const' might be too restrictive."
                  ],
                  "solution": "let currentTemperature = 72;\ncurrentTemperature = 75;\nconsole.log(\"Temp is now:\", currentTemperature);"
                }
              ],
              "exercises": [
                {
                  "prompt": "Declare a 'const' variable called 'myname' with your name as a string, and a 'let' variable called 'myage' with a number.",
                  "tests": [
                    "typeof myname === 'string'",
                    "typeof myage === 'number'"
                  ]
                }
              ],
              "assessment": {
                "questions": [
                  {
                    "type": "mcq",
                    "prompt": "Which declaration should be your default choice in modern JS?",
                    "choices": ["var", "let", "const"],
                    "answer": "const"
                  },
                  {
                    "type": "predict",
                    "prompt": "What will this output? let a = 5; let b = a; a = 10; console.log(b);",
                    "choices": ["5", "10", "Error"],
                    "answer": "5"
                  }
                ],
                "passCriteria": {
                  "minCorrect": 2
                }
              }
            },
            "memoryUpdates": {
              "conceptsMastered": ["variable declaration", "const vs let", "assignment"],
              "mistakeWatchlist": ["const reassignment error", "using var unnecessarily"]
            },
            "nextLesson": "js-types-101"
          },
          {
            "id": "js-types-101",
            "title": "Data Types & typeof",
            "objectives": [
              "Identify primitive types: string, number, boolean, null, undefined",
              "Use the 'typeof' operator to inspect values"
            ],
            "prerequisites": ["js-vars-101"],
            "timeEstimateMin": 20,
            "content": {
              "explanations": [
                "In JavaScript, every value has a 'type'. It's like knowing if something is a text, a number, or a true/false switch.",
                "We can ask JavaScript what type something is by using the 'typeof' operator before the value."
              ],
              "demos": [
                {
                  "code": "let message = \"Hello World\";\nlet count = 42;\nlet isActive = true;\n\nconsole.log(typeof message); // \"string\"\nconsole.log(typeof count);   // \"number\"\nconsole.log(typeof isActive);// \"boolean\"",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                {
                  "type": "predict",
                  "prompt": "What do you think 'typeof 3.14' will return?"
                },
                {
                  "type": "recall",
                  "prompt": "What's the difference between 'undefined' and 'null' conceptually?"
                }
              ],
              "debugging": [
                {
                  "buggyCode": "let age = \"25\";\n// We want to add 5 years\nlet futureAge = age + 5;\nconsole.log(\"In 5 years you will be:\", futureAge); // outputs \"255\" instead of 30",
                  "hints": [
                    "Look closely at the quotes around 25.",
                    "Check the type of 'age' using typeof.",
                    "When you add a number to a string, JavaScript sticks them together instead of doing math."
                  ],
                  "solution": "let age = 25; // Removed quotes to make it a number\nlet futureAge = age + 5;\nconsole.log(\"In 5 years you will be:\", futureAge);"
                }
              ],
              "exercises": [
                {
                  "prompt": "Create a variable 'isDone' and set it to a boolean value. Log its type.",
                  "tests": ["typeof isDone === 'boolean'"]
                }
              ],
              "assessment": {
                "questions": [
                  {
                    "type": "predict",
                    "prompt": "typeof \"true\"",
                    "choices": ["boolean", "string", "undefined"],
                    "answer": "string"
                  }
                ],
                "passCriteria": { "minCorrect": 1 }
              }
            },
            "memoryUpdates": {
              "conceptsMastered": ["primitive types", "typeof operator", "string vs number"],
              "mistakeWatchlist": ["string coercion unexpected results"]
            },
            "nextLesson": "js-strings-101"
          },
           {
            "id": "js-strings-101",
            "title": "Strings & Template Literals",
            "objectives": [
              "Understand string basics and concatenation",
              "Master template literals with backticks (`)"
            ],
            "prerequisites": ["js-types-101"],
            "timeEstimateMin": 20,
            "content": {
              "explanations": [
                "Strings are pieces of text. We used to glue them together with '+', which could get messy.",
                "Template literals use backticks (`) and allow us to inject variables directly using ${variableName}. It's like a fill-in-the-blanks sentence."
              ],
              "demos": [
                {
                  "code": "const user = \"Sarah\";\nconst tasks = 5;\n\n// Old way (messy)\nconsole.log(\"Hello \" + user + \", you have \" + tasks + \" tasks.\");\n\n// New way (clean)\nconsole.log(`Hello ${user}, you have ${tasks} tasks.`);",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                {
                  "type": "recall",
                  "prompt": "What specific character do you need to use to create a template literal?"
                },
                {
                  "type": "apply",
                  "prompt": "How would you use a template literal to log 'The total is $10' if you have a variable 'price' equal to 10?"
                }
              ],
              "debugging": [
                {
                  "buggyCode": "const name = \"Alex\";\n// Trying to use template literal features with normal quotes\nconsole.log('Hello ${name}'); // Outputs literally: Hello ${name}",
                  "hints": [
                    "Look closely at the quotes used around the message.",
                    "Single quotes (') and double quotes (\") don't support the ${} magic.",
                    "Try finding the backtick key on your keyboard (usually above Tab)."
                  ],
                  "solution": "const name = \"Alex\";\nconsole.log(`Hello ${name}`);"
                }
              ],
              "exercises": [
                {
                  "prompt": "Create two variables, 'item' (string) and 'price' (number). Log a sentence using backticks: 'The [item] costs $[price]'.",
                  "tests": ["// Automated test pending"]
                }
              ],
              "assessment": {
                "questions": [
                  {
                    "type": "mcq",
                    "prompt": "Which of these is a valid template literal?",
                    "choices": ["'Value: ${x}'", "\"Value: ${x}\"", "`Value: ${x}`"],
                    "answer": "`Value: ${x}`"
                  }
                ],
                "passCriteria": { "minCorrect": 1 }
              }
            },
            "memoryUpdates": {
              "conceptsMastered": ["template literals", "string interpolation"],
              "mistakeWatchlist": ["using wrong quotes for templates"]
            },
            "nextLesson": "js-conditionals-101"
          }
        ]
      },
      {
        "id": "js-module-2",
        "title": "Module 2: Control Flow and Functions",
        "lessons": [
           {
            "id": "js-conditionals-101",
            "title": "Conditionals: if, else, and switch",
            "objectives": [
              "Control program flow using if/else statements",
              "Understand standard comparison operators (>, <, ===)"
            ],
            "prerequisites": ["js-types-101"],
            "timeEstimateMin": 30,
            "content": {
              "explanations": [
                "Code normally runs from top to bottom. Conditionals let it branch, like a fork in the road.",
                "'if' checks a condition. If it's true, it takes that path. 'else' is the backup path."
              ],
              "demos": [
                {
                  "code": "let hour = 14; // 2 PM\n\nif (hour < 12) {\n    console.log(\"Good morning!\");\n} else if (hour < 18) {\n    console.log(\"Good afternoon!\");\n} else {\n    console.log(\"Good evening!\");\n}",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                 { "type": "predict", "prompt": "If 'hour' is 12, which message will correctly log based on my previous code?" },
                 { "type": "recall", "prompt": "What is the difference between using '=' and '===' in a condition?" }
              ],
              "debugging": [
                {
                  "buggyCode": "let score = 100;\n// Trying to check if score is perfect\nif (score = 100) {\n    console.log(\"Perfect score!\");\n}\n// Wait, why does this run even if score is 50?",
                  "hints": [
                    "Look closely at the 'if' parenthesis.",
                    "A single '=' means assignment (putting a value in a box), not comparison.",
                    "You need the strict equality operator."
                  ],
                  "solution": "let score = 100;\nif (score === 100) {\n    console.log(\"Perfect score!\");\n}"
                }
              ],
              "exercises": [],
              "assessment": {
                "questions": [],
                "passCriteria": { "minCorrect": 0 }
              }
            },
            "memoryUpdates": {
              "conceptsMastered": ["if/else", "strict equality"],
              "mistakeWatchlist": ["assignment vs comparison (= vs ===)"]
            },
            "nextLesson": "js-loops-101"
          },
          {
            "id": "js-loops-101",
            "title": "Loops: for, while, and do...while",
            "objectives": [
              "Understand the purpose of loops (repeating tasks)",
              "Master the 3 parts of a 'for' loop: init, condition, increment"
            ],
            "prerequisites": ["js-conditionals-101"],
            "timeEstimateMin": 30,
            "content": {
              "explanations": [
                "Loops let us repeat an action without writing the same code over and over.",
                "A 'for' loop is like a track: you start at a spot (initialization), you keep running as long as a rule is met (condition), and you take a step each time (increment)."
              ],
              "demos": [
                {
                  "code": "// We want to count from 1 to 5\nfor (let i = 1; i <= 5; i++) {\n    console.log(\"Counting:\", i);\n}\nconsole.log(\"Done!\");",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                {
                  "type": "predict",
                  "prompt": "If I change the condition to 'i < 5' instead of 'i <= 5', what's the last number it will log?"
                },
                {
                  "type": "apply",
                  "prompt": "How would you change the loop to count DOWN from 10 to 1?"
                }
              ],
              "debugging": [
                {
                  "buggyCode": "// Trying to count up to 5...\nfor (let i = 1; i > 5; i++) {\n    console.log(i);\n}\n// Nothing happened! Why?",
                  "hints": [
                    "Look at the middle part, the condition: i > 5.",
                    "What is the initial value of 'i'?",
                    "Is 1 greater than 5? The loop only runs if true."
                  ],
                  "solution": "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}"
                }
              ],
              "exercises": [
                {
                  "prompt": "Write a for loop that logs only EVEN numbers from 0 to 10.",
                  "tests": []
                }
              ],
              "assessment": {
                "questions": [
                  {
                    "type": "predict",
                    "prompt": "for(let i=0; i<3; i++) { console.log(i); }",
                    "choices": ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3"],
                    "answer": "0, 1, 2"
                  }
                ],
                "passCriteria": { "minCorrect": 1 }
              }
            },
            "memoryUpdates": {
              "conceptsMastered": ["for loop structure", "iteration", "loop conditions"],
              "mistakeWatchlist": ["infinite loops", "off-by-one errors", "incorrect loop condition"]
            },
            "nextLesson": "js-functions-101"
          },
          {
            "id": "js-functions-101",
            "title": "Functions: Declarations & Arrows",
            "objectives": [
              "Define reusable blocks of code with functions",
              "Understand parameters (inputs) and return values (outputs)",
              "Learn modern Arrow Function syntax"
            ],
            "prerequisites": ["js-loops-101"],
            "timeEstimateMin": 40,
            "content": {
              "explanations": [
                "Functions are like recipes. You give them ingredients (parameters), they do cooking steps (the code block), and they give you back a finished dish (return value).",
                "Arrow functions `() => {}` are a modern, shorter way to write recipes, especially useful for simple tasks."
              ],
              "demos": [
                {
                  "code": "// Standard function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function equivalent\nconst subtract = (a, b) => {\n    return a - b;\n};\n\nconsole.log(\"Add:\", add(5, 3));\nconsole.log(\"Subtract:\", subtract(10, 4));",
                  "explainByLine": true
                }
              ],
              "oralQuestions": [
                 { "type": "recall", "prompt": "What keyword do we use to send a result back out of a function?" },
                 { "type": "apply", "prompt": "How would you convert 'function sayHi() {}' into an arrow function?" }
              ],
               "debugging": [
                {
                  "buggyCode": "function multiply(x, y) {\n    let result = x * y;\n    // Forgot something here!\n}\n\nlet answer = multiply(5, 5);\nconsole.log(answer); // Logs 'undefined'",
                  "hints": [
                    "The function calculates the result, but does it send it back?",
                    "If a function doesn't have a 'return' statement, it returns 'undefined' by default."
                  ],
                  "solution": "function multiply(x, y) {\n    let result = x * y;\n    return result;\n}"
                }
              ],
              "exercises": [],
              "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 } }
            },
             "memoryUpdates": {
              "conceptsMastered": ["function declaration", "parameters", "return values", "arrow syntax"],
              "mistakeWatchlist": ["missing return statement"]
            },
            "nextLesson": "js-arrays-101"
          }
        ]
      },
      {
        "id": "js-module-3",
        "title": "Module 3: Data Structures & Objects",
        "lessons": [
          {
            "id": "js-arrays-101",
            "title": "Arrays: Lists of Data",
            "objectives": ["Create and access arrays", "Use basic methods: push, pop, length"],
             "prerequisites": ["js-vars-101"],
             "timeEstimateMin": 30,
             "content": {
                 "explanations": ["An array is a single variable that can hold a whole list of items. Think of it like a numbered egg carton."],
                 "demos": [{ "code": "let fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[0]); // apple\nfruits.push(\"orange\"); // Adds to the end\nconsole.log(fruits.length); // 4", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-objects-101"
          },
           {
            "id": "js-objects-101",
            "title": "Objects: Key-Value Pairs",
            "objectives": ["Model real-world entities with objects", "Access properties using dot notation"],
             "prerequisites": ["js-arrays-101"],
             "timeEstimateMin": 30,
             "content": {
                 "explanations": ["Objects let us group related data together using named keys instead of numbered indexes."],
                 "demos": [{ "code": "const car = {\n  make: \"Toyota\",\n  model: \"Corolla\",\n  year: 2020\n};\n\nconsole.log(car.make); // Dot notation\nconsole.log(car[\"model\"]); // Bracket notation", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-destructuring-101"
          },
          {
            "id": "js-destructuring-101",
            "title": "Modern JS: Destructuring & Spread",
            "objectives": ["Unpack values from arrays/objects easily", "Use the spread operator (...) for copying/merging"],
             "prerequisites": ["js-objects-101"],
             "timeEstimateMin": 35,
             "content": {
                 "explanations": ["Destructuring is a shortcut to extract data from arrays or objects into their own variables."],
                 "demos": [{ "code": "// Object Destructuring\nconst user = { id: 1, name: \"Sam\" };\nconst { name } = user;\nconsole.log(name); // \"Sam\"\n\n// Spread Operator\nconst base = [1, 2];\nconst extended = [...base, 3, 4]; // [1, 2, 3, 4]", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-prototypes-101"
          }
        ]
      },
       {
        "id": "js-module-4",
        "title": "Module 4: Prototypes & OOP",
        "lessons": [
          {
            "id": "js-prototypes-101",
            "title": "Prototypes & Classes",
            "objectives": ["Understand standard 'class' syntax", "Basic inheritance with 'extends'"],
             "prerequisites": ["js-objects-101"],
             "timeEstimateMin": 45,
             "content": {
                 "explanations": ["Classes are blueprints for creating objects that share the same structure and behavior."],
                 "demos": [{ "code": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a noise.`);\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks!`);\n  }\n}\n\nconst d = new Dog(\"Rex\");\nd.speak();", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-async-101"
          }
        ]
      },
      {
        "id": "js-module-5",
        "title": "Module 5: Async JS",
        "lessons": [
          {
            "id": "js-async-101",
            "title": "Async/Await & Promises",
            "objectives": ["Understand non-blocking code", "Use async/await for cleaner asynchronous logic"],
             "prerequisites": ["js-functions-101"],
             "timeEstimateMin": 50,
             "content": {
                 "explanations": ["JavaScript is single-threaded. Async allows it to do heavy lifting (like network requests) without freezing the page.", "Async/await makes asynchronous code look and behave a bit more like standard synchronous code."],
                 "demos": [{ "code": "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function runDemo() {\n  console.log(\"Starting...\");\n  await delay(2000); // Pauses here for 2 seconds\n  console.log(\"Done waiting!\");\n}\n\nrunDemo();", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": ["async/await", "promises"], "mistakeWatchlist": ["forgetting await"] },
             "nextLesson": "js-dom-101"
          }
        ]
      },
      {
        "id": "js-module-6",
        "title": "Module 6: DOM & Browser APIs",
        "lessons": [
           {
            "id": "js-dom-101",
            "title": "DOM Manipulation & Events",
            "objectives": ["Select elements with querySelector", "Listen for user events (clicks)"],
             "prerequisites": ["js-functions-101"],
             "timeEstimateMin": 40,
             "content": {
                 "explanations": ["The DOM is how JavaScript sees HTML. We can reach into the page, grab elements, and change them."],
                 "demos": [{ "code": "// Assuming <button id=\"myBtn\">Click me</button> exists\nconst btn = document.getElementById('myBtn');\n\nbtn.addEventListener('click', () => {\n  btn.textContent = \"Clicked!\";\n  btn.style.backgroundColor = \"#B9FF66\";\n});", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-modules-101"
          }
        ]
      },
      {
        "id": "js-module-7",
        "title": "Module 7: Modules & Tooling",
        "lessons": [
            {
            "id": "js-modules-101",
            "title": "ES Modules (Import/Export)",
            "objectives": ["Split code into multiple files", "Use import and export keywords"],
             "prerequisites": ["js-functions-101"],
             "timeEstimateMin": 30,
             "content": {
                 "explanations": ["As apps grow, keeping all code in one file is messy. Modules let us split code into logical, separate files."],
                 "demos": [{ "code": "// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-node-101"
          }
        ]
      },
      {
        "id": "js-module-8",
        "title": "Module 8: Node.js",
        "lessons": [
           {
            "id": "js-node-101",
            "title": "Node.js Basics & File System",
            "objectives": ["Run JS outside the browser", "Read/Write files using 'fs' module"],
             "prerequisites": ["js-modules-101", "js-async-101"],
             "timeEstimateMin": 45,
             "content": {
                 "explanations": ["Node.js lets us run JavaScript on servers, not just in browsers. It gives us access to the computer's file system."],
                 "demos": [{ "code": "import fs from 'fs/promises';\n\nasync function writeFile() {\n  try {\n    await fs.writeFile('test.txt', 'Hello from Node!');\n    console.log('File created');\n    const content = await fs.readFile('test.txt', 'utf-8');\n    console.log('Read back:', content);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n}\n\nwriteFile();", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": [], "mistakeWatchlist": [] },
             "nextLesson": "js-security-101"
          }
        ]
      },
      {
        "id": "js-module-9",
        "title": "Module 9: Security & Performance",
        "lessons": [
          {
            "id": "js-security-101",
            "title": "Web Security Basics (XSS)",
            "objectives": ["Understand Cross-Site Scripting (XSS)", "Never trust user input directly in standard DOM"],
             "prerequisites": ["js-dom-101"],
             "timeEstimateMin": 35,
             "content": {
                 "explanations": ["XSS happens when an attacker tricks your site into running THEIR JavaScript code on other users' computers."],
                 "demos": [{ "code": "// VULNERABLE CODE EXAMPLE\nconst userInput = \"<img src=x onerror=alert('Hacked!')>\";\ndocument.body.innerHTML = \"<div>Welcome, \" + userInput + \"</div>\";\n\n// SAFER WAY\n// document.body.textContent = ... OR use a framework that escapes HTML automatically.", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": ["XSS awareness"], "mistakeWatchlist": ["using innerHTML with user input"] },
             "nextLesson": "ts-intro-101"
          }
        ]
      },
      {
        "id": "js-module-10",
        "title": "Module 10: TypeScript Primer",
        "lessons": [
          {
            "id": "ts-intro-101",
            "title": "TypeScript: Adding Types to JS",
            "objectives": ["Understand what TypeScript adds to JS", "Basic type annotations (string, number, boolean)"],
             "prerequisites": ["js-types-101"],
             "timeEstimateMin": 40,
             "content": {
                 "explanations": ["TypeScript is JavaScript with a safety net. It forces you to define what KIND of data variables can hold, catching bugs before you even run the code."],
                 "demos": [{ "code": "// JavaScript (valid but risky if called wrong)\nfunction greet(name) {\n  return \"Hello, \" + name.toUpperCase();\n}\n\n// TypeScript (safe)\n// function greet(name: string): string {\n//   return \"Hello, \" + name.toUpperCase();\n// }", "explainByLine": true}],
                 "oralQuestions": [], "debugging": [], "exercises": [], "assessment": { "questions": [], "passCriteria": { "minCorrect": 0 }}
             },
             "memoryUpdates": { "conceptsMastered": ["type annotations"], "mistakeWatchlist": [] },
             "nextLesson": null
          }
        ]
      }
    ]
  }
};
