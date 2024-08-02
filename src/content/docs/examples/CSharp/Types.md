---
title: types
description: Desc
---

# The two types of types in C#
+ Value Types
    + Live in die in the stack
        + anything on the stack can never be assinged "null"
    + they are defined in C# by creating structs
    + Value types have a finite, measurable, lifetiem
    + Defined by primitives, which are structs on the system namespace
    + Lifetime follows the scope, once the instance ends, it dies. 
    + Exists on the stack a literal value
    + assingments are value assingments

```csharp
int myAge = 55;
system.Int32 YourAge = 55;
var dogAge = 10;
```

+ Reference Types
    + live and die in the heap
    + they are defined in C# by creating classes
    + Defined by memory allocation and user defined data types
    + Aliases are placed on the stack but the allocation is on the heap with an identifier.
    + Exists on the stack as a reference to the heap
    + assingments are reference assingmens: obj 1 = obj2, would assing object 1 to the address of object 2.
        + be cognisant of +=, -=
    + you can make operaions nullable
        + nullable reference type
            + ```int? someint //allows null```
            + equivlent to: ```Eqivelent to Nullable<sometype>```
        + nullable chaning operator.
            + ```somestring?.toUpper() //checks if its null before calling the method```
        + null or opertor
            + ```someint ?? doSomething() //if isnull do something```
    + Proerties vs Methods
        + Properties
            + Implies no computation
            + Never throws an exceptions
            + is idempotent
        + Method
            + Does computations
            + can Trows exceptions
            + 
            


```csharp
public class Account{
    decimal _balance = 5000;

    //some methods
    public void doSomething(){
        //some logic 
    }
}

[Test]
public void ADoSomethingMethod(){
    Account MyAccount = new Account();
    Account YourAccount = new Account();

    MyAccount.doSomething();
    YourAccount.doSomething(); 
}

```