---
title: "Semantic Versioning: an Introduction with Examples"
date: 2023-02-12T10:11:20+01:00
draft: false
tags: ["Versioning", "Version", "Semantic", "HowTo"]
categories: ["General"]
---
Semantic versioning, also known as semver, is a popular versioning scheme used in software development to manage the releases of a project and communicate changes between different versions to stakeholders. Semantic versioning provides a standard way of versioning software, which makes it easier for developers to understand the compatibility of different versions and avoid potential breaking changes. In this article, we will explain the key concepts of semantic versioning and provide some examples to help you get started.

### The Basics of Semantic Versioning

Semantic versioning consists of three components: Major version, minor version, and patch version, separated by dots. The version number is written in the format X.Y.Z, where X is the major version, Y is the minor version, and Z is the patch version.

Each component has a specific meaning and represents different levels of change in the software.

-   Major version (X): This component represents a significant change in the software, such as adding new features, changing the API, or making breaking changes. A change in the major version means that older versions are no longer compatible with the latest version.
-   Minor version (Y): This component represents a new feature or improvement to the software, without breaking existing functionality. When a new feature is added or a change is made that is backward-compatible, the minor version is incremented.
-   Patch version (Z): This component represents a bug fix or a small change in the software that does not affect the functionality of the software. When a bug is fixed or a small change is made, the patch version is incremented.

![](https://media.geeksforgeeks.org/wp-content/uploads/semver.png)

### Examples of Semantic Versioning

Here are some examples to help you understand how semantic versioning works in practice.

#### 1. Initial release of a project

When you are starting a new project, you can start with version 1.0.0. This version number represents the initial release of your project and includes the first set of features and functionality.

#### 2.  Adding a new feature

When you add a new feature to your project, you can increment the minor version, for example, from 1.0.0 to 1.1.0. The new feature is backward-compatible with the previous version and does not break existing functionality.

#### 3.  Fixing a bug

When you fix a bug in your project, you can increment the patch version, for example, from 1.1.0 to 1.1.1. The bug fix is backward-compatible with the previous version and does not affect existing functionality.

#### 4.  Making a breaking change

When you make a change to your project that breaks existing functionality, you can increment the major version, for example, from 1.1.1 to 2.0.0. The breaking change may affect other parts of the software that depend on the changed functionality, so it is important to communicate the change to stakeholders.

![](https://media.geeksforgeeks.org/wp-content/uploads/20201021015029/WINWORD3DROTliALc-660x403.png)

### Conclusion

Semantic versioning is a simple yet powerful tool for managing the releases of a software project. It provides a clear and standard way of versioning software that makes it easier for developers to understand the compatibility of different versions and avoid potential breaking changes. By following semantic versioning, you can ensure that your project remains backward-compatible and that stakeholders are informed of any breaking changes.


![](https://media.geeksforgeeks.org/wp-content/uploads/20201021010157/SemanticVersioning.png)