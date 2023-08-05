
function test() {
    type User = {name: string, age: number, role: [number, string]}
    const person : User = {
        name: 'emeka',
        age: 34,
        role:[3, 'test',]
    }

    enum Role {
        ADMIN,
        USER
    }

    type Combinable = number | string


    let userinput: unknown;
    let username : string
    userinput = 7
    userinput = 'test'
    //username = userinput
    if(typeof userinput === 'string') {
        username = userinput;
    }



}
