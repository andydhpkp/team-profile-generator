const Manager = require('../lib/Manager')

test('Creates Manager object', () => {
    const manager = new Manager('Andrew', '2', 'andrewdurham1094@gmail.com', '11')

    expect(manager.name).toBe('Andrew')
    expect(manager.id).toBe('2')
    expect(manager.email).toBe('andrewdurham1094@gmail.com')
    expect(manager.officeNumber).toBe('11')
})

test('Return role as manager', () => {
    const manager = new Manager('Andrew', '2', 'andrewdurham1094@gmail.com', '11')

    expect(manager.getRole()).toBe('Manager')
})