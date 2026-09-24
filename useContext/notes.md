Why do we need Context API ?

suppose we have a state and setState(fn).if i declared it in componentA and later i have to used it in another component then i have to pass it like prop which is called props drilling which is a bad practise in ReactJs.

Component A
    |
Component B
    |
Component C
    |
Component D

How ContextAPIs work 
Now i declare state in useContext so every component can access it.
if state changes then every componet re-reders.
wrap in context provider
![alt text](image.png)
![alt text](image-1.png)