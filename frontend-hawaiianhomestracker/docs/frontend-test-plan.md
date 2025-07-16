# Frontend Testing Plan – Hawaiian Homes Tracker

This document outlines all frontend test cases for this application using **Vitest** and **React Testing Library**.

---

## Landing Page

- [ ] Header: renders links, burger menu toggle works
- [ ] Hero: image renders, headings display correctly
- [ ] Footer: links are clickable and go to correct routes
- [ ] History: cards render properly
- [ ] Resources section: cards (image + heading) render, links work

---

## Auth

### Login
- [ ] Login UI renders
- [ ] Form accepts input
- [ ] Successful login stores token and redirects
- [ ] Incorrect login shows error message

### Signup
- [ ] Form renders
- [ ] Input works
- [ ] Successful signup redirects
- [ ] Required field errors show on empty submission

### Profile
- [ ] Application cards render

---

## CRUD Operations

### Create
- [ ] Form renders and accepts input
- [ ] Form submission calls backend and shows toast
- [ ] Validation error shows for bad input


### Read
- [ ] Applications render in cards
- [ ] Error and empty states handled

### Update
- [ ] Modal opens on Update click
- [ ] Modal input updates state
- [ ] Successful save triggers mutation and shows toast
- [ ] Empty states handled

### Delete
- [ ] Delete button triggers API
- [ ] Error/empty/zero-state handling

---

## Contact Page
- [ ] All form fields render
- [ ] Inputs update on typing
- [ ] Checkbox toggles
- [ ] Submit button is clickable

---

##  Search
- [ ] Cards render on search
- [ ] Buttons work
- [ ] Loading, error, and empty states handled
- [ ] Inputs trigger expected changes

