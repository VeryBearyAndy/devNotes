---

title: Software Testing

---
 
## About Unit Testing
 
please put some notes about what you've learned about testing today here.
 
 
## API Testing with Alba
 
```csharp
 
using Alba;
 
namespace HelpDesk.Tests.Software;

public class GettingSoftware

{

    // Test that we can make an HTTP GET requests to /api/software
 
    [Fact]

    public async Task CanGetSoftware()

    {

        var host = await AlbaHost.For<Program>();
 
        await host.Scenario(api =>

        {

            api.Get.Url("/api/software");

            api.StatusCodeShouldBeOk();

        });
 
 
    }

}

```
 
Write what you understand about this code. What is Alba? Where did that come from? What is `Program`?

## The testing pyramid

This is not really endored. The different kinds of tests:
+ End-to-End Tests:
    + System Integration Tests
    + Test a process of User POV
    + Start a User Story from start to finish
    + Extremely slow, Extremely Costly 
+ Integrated Tests
    + System Tests
    + Test small modules in Isolation, Think:
        + API Endpoints
        + Query Methods
        + Think function classes 
    + Alba test is a system test, in our example
+ Unit Tests
    + Testing individual units of functionality within a system
    + So testing a funciton or method
    + simplist form of testing

 Issues with the Testing pyramid mostly lies in the assumption that there should be more unit tests over any other type of test:
 + Runs on the assumption Unit Tests are easy to write
 + The assumption that more unit tests passing reduce the chances of integration or end-to-end will pass
 + Unit Tests are white box:
    + They test a mechanism, how your code does something
    + They do not test what your code does
    + Breaks encapsulation
    + Does not show the path to reach a piece of functionality, or whether the system calls that function correctly.

## Refactoring

Why do we change the implementation of our code: We find a a better way: better design & better performance:
+ We identify abstractions
+ Upgrading dependancies
+ new ways to do things in frameworks, libraries, etc etc
+ Unit tests can inhibit updates because hyper specific tests:
    + because unit tests test mechanisms more than processes
    + changes in mechanism make cascading tests taxing to change
    + ask if the use of the tests truely are necessary for the content of what you are testing for


## Unit Tests
At the very minimum cannot access the
+ file system
+ database
+ network
+ The clock

these are external and failures in your tests maybe because of those things and you cannot control nor account for variables these things introduce
All of these things are inconsistent
The rate of change is different so they need to be seperated.
In these instances it would be permissible to hard code it 

## Test Double
Test doubles are pretend objects and there are many different types
+ Dummies
    + Doesn't do anything, just a place holder
    + Essentially passed because we know that is a required member or parameter
+ Fakes
    + Objects that have working implementations but take shortcuts or not fully realized implementations which makes the not suitable for production
+ Stubs
    + Provides canned answers to calls made during the test, usually responding at anything at all to anything outside the test
+ Mocks
    + Objects pre programmed with expectations which form specification of the calls thay expect 