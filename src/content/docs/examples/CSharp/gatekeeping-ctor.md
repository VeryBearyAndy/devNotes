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