---

title: Gatekeeping the Constructor

---

# using a method to verify the input to a constructor
implementing the factory method
```csharp
//facotry method Example In C#
    public static Currency FromUsd(uint dollars, uint cents)
    {
        if (ArgsAreValid(dollars, cents))
        {
            return new Currency(dollars, cents, "USD");
        }
        else
        {
            throw new InvalidCurrencyException();
        }
    }
```

In the above example we can see:
+ the use of a static method:
    + this allows the usage of this method without having to initializing an instance of the class
    + this further, allows us to create a factory method and thoroughly control the behavior of this type during construction.
+ This can be further expanded to allow for multiple returned implementations of the type, especially in an abstract class:
+ This method is particularly valuable considering the common convention is to avoid throwing errors in constructors, this circumvents that by encapsulating the constructor in the factory method.