---
title: Good Code and Bad code
description: What Consitutes whether code is good or bad
---
## Qualities of Good Code

Qualities:
+ good code passes the tests
    + It does what its supposed to do
    + Its easy to change

## Continuous Integration

Changes in the software development lifecycle have produced an atmosphere that promotes frequent pushes to deployment rather than a towering level of changes that hits deployment
this changes the development strategy as large releases need to by engineering in such a way that need to be thoroughly designed, which can lead to overly complex solutions
frequent releases engender simple solutions, and simple solutions that are not good coding solutions simply get refactored. 

### The Correlation of Testing and Good Software

Primarily, good code is easy to test
+ this falls in line with isolation of concerns
+ we want to ensure our functions are as pure as possible
+ we want software to behave as we would expect and this is where
    + dependancy injection comes in
    + understanding why we don't test with impure avenues
        + Databases
        + Times
        + Networks
        + etc etc
    + We want to test single features as much as possible to analyze the single
        + Isolation of concerns
        + strong intra class cohesion
        + weak extra-class coupling
        + parts of classes represent single concepts

## Qualities of Bad Code 
+ Code Smells
    + Hints of bad designs that hint when refactoring could improve the overall design of a piece of code
    + These tend to happen over time, they often are not immediately obviously