# super-range
super-range is an easy way to generate a number.
Inspired by range function in `Python`, I created the super-range

## Install
Using npm:
```code
npm install super-range
```

or Using Yarn:
```code
yarn add super-range
```


## Usage
Using One Parameter
```typescript
const result = [...range(5)]; //[0,1,2,3,4];
```

Using Two Parameter
```typescript
const result = [...range(5, 10)]; //[5,6,7,8,9]
```

Using Three Parameter
```typescript
const result1 = [...range(1, 10, 3)];  // [1,4,7];
const result2 = [...range(10, 3, -3)]; // [10,7,4]
```

Using With for statement
```typescript 
 for (const element of range(5)) {
        console.log(element)
    }
```