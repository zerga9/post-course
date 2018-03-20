# Comparative Code Review

## Context

Code review at Makers is an opportunity for students to get feedback on their code. We feel however that there are some improvements that we could make to the process as a learning experience.

## High Level Goal

We want to build a tool to facilitate better peer review for students. The tool should allow students, graduates and coaches to review and reflect on a range of implementations in a familiar context e.g. after completing a weekend challenge, I can review code from my peers and from previous cohorts.

The goals of this review include:
- By reading more code, I gain better recognition of common development patterns
- By reviewing more code, I get better at assessing what makes good code
- By reviewing more code, I am able to reflect better on how I make that assessment
- By seeing how my reviews compare to those of a more experienced developer, I am able to see how my assessment and reflection process compares to an expert

Students can also gain feedback on their code as a result of the review process. As others review code and reflect on why they feel code is good or bad, themes such as 'testing behaviour over state' or 'strong implementation of the airport class' can be picked out and fed back to those who wrote the code. We *do not* what to provide students with a grade or a rating of their code, but we *do* want to provide qualitative feedback on areas that could be improved to help students with goal-setting.

## Implementation

We plan to use a process known as comparative judgement as the basis for this tool. This is a process that has been trialled by the coaching team with some degree of success.

Comparative judgement is the process of taking two similar solutions to the same problem and making a judgement based on a question e.g. 'if only one could pass a tech test, which one would pass?'. The advantages of using comparitive judgement over traditional code review are:

- it's faster - the reviewer is exposed to many more implementations than they would if they focussed on single implementations in detail
- it's statistically more reliable - reviewers doing in depth reviews may have different levels of focus, energy, time & experience, leading to wildly different feedback. When comparing (and then tagging - see below) we can aggregate feedback and pick out themes independent of these variables.
- it works two ways - reviewers can get feedback on the quality of their judgement just as students can get feedback on the quality of their code
- it provides a yardstick for visibility - we don't believe in grading assessment, but it is helpful to know when individuals are perhaps struggling with the course. A comparitive tool can be adapted to provide early warning signs that a particular student may need more help in some areas.

See [No More Marking](https://www.nomoremarking.com) for a working implementation of ACJ (Adaptive Comparative Judgement), an existing system built on some of these principals.

We want to go beyond simple ACJ however, as we want to facilitate qualitative feedback and reflection more than we want a ranking of code. To achieve this we will need some sort of tagging or commenting feature that pushes reviewers to reflect on *why* they make judgements. This will:

- help reviewers to thing in more depth about what makes good code.
- be the basis for feedback that can be provided to those who submit code
- be the basis for a statistical comparison that allows reviewers to see which judgements they are making that are in line with an expert and which aspects of the code they are struggling to pick out - which can identify areas for future learning.

## MVP

The current goal is to produce a simple comparison tool, along the lines of:

- A user can register and log in
- The user is given a choice of two images
- The user selects an image
- The user is given another choice
- A record of each choice is stored in a database

## User stories

As a coach
So that I can identify students who need additional time and/or resources
I would like increased visibility of students who are struggling with course material

As a coach
So that I can identify the areas in which a student needs additional attention
I would like qualitative indications of the concepts and processes with which they are struggling

As an educator
So that students are not distracted by quantitative assessment
I would like any quantitative measure of a students code to be unavailable to students

As an educator
So that coaches are not influenced by quantitative assessment
I would like any quantitative measure of a students code to be obfuscated to coaches

As a student
So that I can improve my ability to write code
I would like to be exposed to more examples of written code

As a student
So that I can improve my ability to assess code
I would like to gain practice at assessing other people’s code

As a student
So that I can target my learning
I would like feedback on the concepts that I should spent more time on

As a student
So that I can plan my learning
I would like suggested resources linked from concepts for further study
