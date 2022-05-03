import axios from 'axios'
const { expect } = require('@jest/globals')
const sum = require('./index.js')

class Users {
    static all() {
        return axios.get('/users.json').then(resp => resp.data);
    }
}

export default Users;

const getData = () => {
    return new Promise((resolve, reject) => {
        resolve('Hello World')
    })
}

describe("Learning jest", () => {
    it('Add two number', () => {
        expect(sum(4, 5)).toBe(9)
    })

    it('Value is null', () => {
        const n = null;
        expect(n).toBeNull();
    })

    it('checks', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })

    it('Asyn code rn', async () => {
        const data = await getData();
        console.log("data", data)
        expect(data).toMatch(/Hello world/i)
    })
})


function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}


jest.mock('axios')

describe('Async test', () => {

    it('Mock test', () => {
        const mockCall = jest.fn(x => x * 2);
        forEach([5, 10, 3], mockCall);
        expect(mockCall.mock.calls.length).toBe(3)
    })

    it('Mock axios', () => {
        const users = [{
            "id": 1,
            "name": "Pradeep Kumar",
            "age": 34,
            "email": "arya.creativemind@gmail.com"
        }]

        axios.get.mockResolvedValue({ data: users })

        return Users.all().then(data => expect(data).toEqual(users))
    })

})
