# Food Products Testing – Phase 2

[![Coverage Status](https://coveralls.io/repos/github/NabilaAnwar02/food-products-testing-phase2/badge.svg?branch=main)](https://coveralls.io/github/NabilaAnwar02/food-products-testing-phase2?branch=main)

## 1. Project Description

This repository contains the "Phase 2" work for a software testing assignment.

The goal is to:

- Implement **unit tests** for a subset of a Lodash-style utility library
- Design **manual** test suites
- Create **AI-generated** test suites for the same functions
- Run the tests locally using **Jest**
- Run the tests automatically in **GitHub Actions (CI pipeline)**
- Report test coverage using **Coveralls**

Only the library code in `src/utils` is tested.  
The hidden `.internal` helper directory is **excluded** from test design and from coverage calculations, as required by the assignment.

## 2. Technologies Used

- **VS code** 
- **Node.js** 
- **npm** – package manager
- **Jest** – unit test framework
- **Git & GitHub** – version control and remote repository
- **GitHub Actions** – continuous integration (CI)
- **Coveralls** – test coverage reporting

## 3. Project Structure

Main relevant folders:

src/
  utils/
    add.js
    filter.js
    ceil.js
    compact.js
    reduce.js
    capitalize.js
    toInteger.js
    map.js
    slice.js
    drop.js
    .......
    .internal/
      ... (helper modules, excluded from tests & coverage)

tests/
  manual/
    add.manual.test.js
    filter.manual.test.js
    ceil.manual.test.js
    compact.manual.test.js
    reduce.manual.test.js
    capitalize.manual.test.js
    toInteger.manual.test.js
    map.manual.test.js
    slice.manual.test.js
    drop.manual.test.js

  ai/
    add.ai.test.js
    filter.ai.test.js
    ceil.ai.test.js
    compact.ai.test.js
    reduce.ai.test.js
    capitalize.ai.test.js
    toInteger.ai.test.js
    map.ai.test.js
    slice.ai.test.js
    drop.ai.test.js

.github/
  workflows/
    ci.yml      # GitHub Actions CI workflow
