# Section 1

1.  Explain the difference between an abstract class and an interface.

    ```sh
    Both are used to achieve abstraction but , But an abstract class can have abstract and non-abstract methods but interfaces are pure form of abstraction . We can achieve multiple inheritence via abstract class but interfaces can't participate in multiple inharitence .
    ```
2. What is the purpose of getters and setters in a class?

    ```sh
    In Object oriented programming getters and setters are used to set values of properties of the object and getters are used to fetch the value of those properties of that instance on which getters are called.
    ```
# Section 2 - Testing

3. Explain the purpose of black box testing

    ```sh
    I have never played the role of tester , but what I am aware about it is just the testing in which we foucs/test the expected result . if the system or piece of system is working as per the expectaion or not .
    ```
4. In your opinion what are the benefits of test cases

    ```sh
    The test cases are used to maintain the reliablity of sytem , while the application is in development phase. We generally create the test cases for the functionality what we are building and in the next push we trigger the test cases , which let us know if the new pushed code is impacting the existing functionalities or not ? 
    ```

# Section 3 - NodeJS specific questions 

5. What is an error first callback, and what is the reason for this pattern existing?
    ```sh
    In node.js error first callback is a function which either returns an error object or successful data returned by the function . 
    IMO this is just a convention and sometimes it may happen a function doesn’t return any data but error may occur, this could be the reason for we pass error handler in the first argument . 
    ```
6. Explain the difference between fs.readSync and fs.read (File System module in Nodejs)

    ```sh
    In nodejs most of the inbuilt methods are available with 2 flavours , a) asyn and 2) sync . 
    fs.readSync method is used to read a file but in synchronous way it doesnt wait for the result and fs.read method is also used to read the file but its an asynchronousl method , we have to wait for the result . 
    ```
7. What tasks do you feel should be done asynchronously?

    ```sh
    In nodejs the function takes sometime is done asynchronously like n/w calls . OS related I/O operations ex- file i/o operations. 
    ```