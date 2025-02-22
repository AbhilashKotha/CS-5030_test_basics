

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
	let testtodo = {
        "title": "T2",
        "description": "D2",
        "done": true
        }
        test("add_todos", () => {
            expect(todo_service.add_todo(testtodo).todo.length).toEqual(4);
        });
    test("delete_todos", () => {
        expect(todo_service.delete_todo(0).todo.length).toEqual(3);
    });

    let updatedtodo = {
        "title": "updates task",
        "description": "trying update test",
        "done": false
        }
    test("updating_todos", () => {
        expect(todo_service.update_todo(0,updatedtodo).todo.length).toEqual(3);
    });
});