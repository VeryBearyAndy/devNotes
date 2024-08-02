---
title: types
description: Desc
---

# The two types of types in C#
+ Value Types
    + Live in die in the stack
    + they are defined in C# by creating structs
    + Value types have a finite, measurable, lifetiem
    + Defined by primitives, which are structs on the system namespace
    + Lifetime follows the scope, once the instance ends, it dies. 

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