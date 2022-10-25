/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * TypeScriptの基本の型 
 */
//boolean
let bool: boolean = true;


//number
let num:number = 0;

//string
let str:string = 'a';

//array
let arr1: Array<number> = [0,1,2];
let arr2: number[] = [0,1,2];

//tuple
let tuple: [number, string] = [1,'a'];

//any
let any1:any = false;

//void
const funcA = ():void => {
    const test = 'TEST'
}

//null
let null1: null = null;

//undefined
let unde:undefined = undefined;

//object
let obj1: object = {}
let obj2: {id:number, name:string} = {id:1, name:'a'}