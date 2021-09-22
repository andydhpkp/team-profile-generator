const Employee = require('../lib/Employee')

test('creates an Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.name).toBe('Andrew')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('andrewdurham1094@gmail.com')
})

test('returns name of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getName()).toBe('Andrew')
})

test('returns ID of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getId()).toBe('1')
})

test('returns email of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getEmail()).toBe('andrewdurham1094@gmail.com')
})

test('returns role of Employee', () => {
    const employee = new Employee('Andrew', '1', 'andrewdurham1094@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})