const Employee = require('../lib/Employee')

test('Creates an Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.name).toBe('Andrew')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('andrewdurham1094@gmail.com')
})

test('Returns name of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getName()).toBe('Andrew')
})

test('Returns ID of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getId()).toBe('1')
})

test('Returns email of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getEmail()).toBe('andrewdurham1094@gmail.com')
})

test('Returns role of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})