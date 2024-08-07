---
title: API Structre
description: A Deep Dive into abstraction
---

# Backend for Frontend
+ server that serves the webpage also serves the API endpoints
+ Look up adapter API
+ Cookie Based Authenitcation
+ 

# Seperated Web Systems

+ Open Host
    + authoritarian
    + and expert in a specific area
    + Users of these API's are confirmists
+ Shared Langauge
    + we actually have a standard here
        + OAuth2
        + OpenID Connect
+ Customer - Supplier (interface segregation in solid principles)
    + You develop an API for a specifc Product
        + Process: pretend the supplier does not exist
        + fake the data
        + build the architecture that mirrors the functionality of the dupe
