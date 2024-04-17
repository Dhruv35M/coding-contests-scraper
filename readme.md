# Coding Contests API

## plateform supports

- codeforces
- topcoder
- atcoder
- codechef
- leetcode
- hackerrank
- hackerearth
- kickstart
- geeksforgeeks
- codingninja
- codingame
- spoj

## API endpoints

Get All Contests

#### Request

- **URL:** `/contests/all`
- **Method:** `GET`
- **Description:** Retrieves all available contest data for different platforms.

example:

```
http://localhost:3000/api/v1/contests/codeforces
```

---

### Get specific platform Contests

# Request

- **URL:** `/contests/[platform_name]`
- **Method:** `GET`
- **Description:** Retrieves all available contest data for specific platforms.

example:

```
http://localhost:3000/api/v1/contests/codeforces
```

```
http://localhost:3000/api/v1/contests/leetcode
```

---

## Response

```
[
  {
    "id": "68efe7ce-9a5b-430f-9342-254470638807",
    "name": "Codeforces Round 912 (Div. 2)",
    "url": "https://codeforces.com/contests/1903",
    "start_time": 1701362100000,
    "end_time": 1701369300000,
    "duration": 7200,
    "type_": "Unknown",
    "in_24_hours": "No",
    "status": "BEFORE",
    "site": "codeforces"
  },
  {
    "id": "b2023729-0216-4f78-ae56-edb3e3e33fd5",
    "name": "Weekly Contest 374",
    "url": "https://leetcode.com/contest/weekly-contest-374",
    "start_time": 1701570600000,
    "end_time": 1701576000000,
    "duration": 5400,
    "type_": "Unknown",
    "in_24_hours": "No",
    "status": "BEFORE",
    "site": "leetcode"
  },
]

-------------------------------------------
start_time, end_time are in milliseconds.
duration is in seconds.
-------------------------------------------
```

## Scrapping Source:

https://clist.by/

## Package Dependencies:

- axios: Handles api calls
- express: Minimalist web framework for Node.js
- cors: Secure cross-origin resource sharing.
- luxon: Deals with date
- cheerio: Jquery style syntax
- node-schedule: Time-based task scheduler for Node.js
- uuid: Universally Unique Identifier generator

## 💻 Setup

## Requirements:

- [Nodejs](https://nodejs.org/en/download/current)

Installation:

- git clone then,
- Dependencies installation `npm install`
- Run `npm start` or `npm run dev`
