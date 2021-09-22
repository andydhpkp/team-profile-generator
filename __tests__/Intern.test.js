const Intern = require('../lib/Intern')

test('Creates Intern object', () => {
    const intern = new Intern('Andrew', '1', 'andrewdurham1094@gmail.com', 'University of Utah')

    expect(intern.name).toBe('Andrew')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('andrewdurham1094@gmail.com')
    expect(intern.school).toBe('University of Utah')
})

test("Get's Intern's school", () => {
    const intern = new Intern('Andrew', '1', 'andrewdurham1094@gmail.com', 'University of Utah')

    expect(intern.getSchool()).toBe('University of Utah')
})

test('Returns the role of Intern', () => {
    const intern = new Intern('Andrew', '1', 'andrewdurham1094@gmail.com', 'University of Utah')

    expect(intern.getRole()).toBe('Intern')
})