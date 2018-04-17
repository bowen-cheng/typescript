module primitive_type {
    // any type is always the inferred type
    let data: any;
    let info;
    let sth = function (arg) {
        return arg;
    };

    // primitives
    let age: number = 21;
    let score: number = 66.88;
    let rating = 99.99;

    let hasData: boolean = false;
    let isReady = true;
    let isBald = function () {
        return 'yes';
    };
    let hasHair = !!isBald();

    let firstName: string = 'Harry';
    let lastName = 'Potter';

    // string array
    function length(x: string[]) {
        return x.length;
    }

    let names = ['John', 'Dan', 'Bill'];
    console.log(length(names)); // prints 3

    // null, it's recommended to use undefined instead
    let guitar: any = null;
    let animal = null;
    let startTime: Date = null;

    // undefined
    let quantity: number;
    let order = undefined;
}