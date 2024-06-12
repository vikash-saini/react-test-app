import {sum, multiply} from "./sum";


test("sum function testing",()=>{
    let a=20;
    let b=30;
    let output = 50;
    expect(sum(a,b)).toBe(output);
})

test("multiply function testing",()=>{
    expect(multiply(4,4)).toBe(16);
})