const Engineer = require('../lib/Engineer')

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Andrew', '1', 'andrewdurham1094@gmail.com', 'andydhpkp')

    expect(engineer.name).toBe('Andrew')
    expect(engineer.id).toBe('1')
    expect(engineer.email).toBe('andrewdurham1094@gmail.com')
    expect(engineer.github).toBe('andydhpkp')
})

test("Get's engineer's github", () => {
    const engineer = new Engineer('Andrew', '1', 'andrewdurham1094@gmail.com', 'andydhpkp')

    expect(engineer.getGithub()).toBe('andydhpkp')
})

test('Return role of Engineer', () => {
    const engineer = new Engineer('Andrew', '1', 'andrewdurham1094@gmail.com', 'andydhpkp')

    expect(engineer.getRole()).toBe('Engineer')
})