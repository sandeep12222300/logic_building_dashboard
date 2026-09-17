export const questions = [
  {
    "id": "p1-1",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 1,
    "title": "Take a number and print whether it’s positive, negative, or zero.",
    "language": "java",
    "difficulty": "Easy",
    "order": 1,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a number and print whether it’s positive, negative, or zero.",
      "thinking": "Compare the number with 0. The first true condition determines the classification.",
      "code": "int n = 10;\nif (n > 0) System.out.println(\"Positive\");\nelse if (n < 0) System.out.println(\"Negative\");\nelse System.out.println(\"Zero\");"
    }
  },
  {
    "id": "p1-2",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 2,
    "title": "Check if a number is even or odd.",
    "language": "java",
    "difficulty": "Easy",
    "order": 2,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is even or odd.",
      "thinking": "A number is even when its remainder after division by 2 is 0.",
      "code": "int n = 7;\nSystem.out.println(n % 2 == 0 ? \"Even\" : \"Odd\");"
    }
  },
  {
    "id": "p1-3",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 3,
    "title": "Check if a number is divisible by 5.",
    "language": "java",
    "difficulty": "Easy",
    "order": 3,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is divisible by 5.",
      "thinking": "Use the remainder operator. A remainder of 0 means the number is divisible by 5.",
      "code": "int n = 25;\nSystem.out.println(n % 5 == 0);"
    }
  },
  {
    "id": "p1-4",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 4,
    "title": "Check if a number is divisible by both 3 and 5.",
    "language": "java",
    "difficulty": "Easy",
    "order": 4,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is divisible by both 3 and 5.",
      "thinking": "Both divisibility conditions must be true, so use the logical AND operator.",
      "code": "int n = 30;\nSystem.out.println(n % 3 == 0 && n % 5 == 0);"
    }
  },
  {
    "id": "p1-5",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 5,
    "title": "Check if a given year is a leap year.",
    "language": "java",
    "difficulty": "Easy",
    "order": 5,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a given year is a leap year.",
      "thinking": "The standard leap-year rule is: divisible by 400, or divisible by 4 but not by 100.",
      "code": "int year = 2024;\nboolean leap = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);\nSystem.out.println(leap);"
    }
  },
  {
    "id": "p1-6",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 6,
    "title": "Take two numbers and print the larger one.",
    "language": "java",
    "difficulty": "Easy",
    "order": 6,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two numbers and print the larger one.",
      "thinking": "Compare the two values and keep the larger one. Math.max is used only for convenience.",
      "code": "int a = 12, b = 9;\nSystem.out.println(Math.max(a, b));"
    }
  },
  {
    "id": "p1-7",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 7,
    "title": "Take three numbers and print the largest.",
    "language": "java",
    "difficulty": "Easy",
    "order": 7,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three numbers and print the largest.",
      "thinking": "Take the maximum of the first two values, then compare that result with the third.",
      "code": "int a = 12, b = 27, c = 19;\nSystem.out.println(Math.max(a, Math.max(b, c)));"
    }
  },
  {
    "id": "p1-8",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 8,
    "title": "Take a temperature value and print “Cold”, “Warm”, or “Hot” using range conditions.",
    "language": "java",
    "difficulty": "Easy",
    "order": 8,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a temperature value and print “Cold”, “Warm”, or “Hot” using range conditions.",
      "thinking": "Use ordered range checks. The PDF does not define exact temperature boundaries; the example uses <15, 15–30, and >30.",
      "code": "int temperature = 31;\nif (temperature < 15) System.out.println(\"Cold\");\nelse if (temperature <= 30) System.out.println(\"Warm\");\nelse System.out.println(\"Hot\");"
    }
  },
  {
    "id": "p1-9",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 9,
    "title": "Take a character and check if it’s a vowel or consonant.",
    "language": "java",
    "difficulty": "Easy",
    "order": 9,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a character and check if it’s a vowel or consonant.",
      "thinking": "Normalize the character to lowercase, then test membership in the five vowels.",
      "code": "char ch = 'e';\nch = Character.toLowerCase(ch);\nSystem.out.println(\"aeiou\".indexOf(ch) >= 0 ? \"Vowel\" : \"Consonant\");"
    }
  },
  {
    "id": "p1-10",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 1 — Simple Conditions",
    "number": 10,
    "title": "Take a character and check whether it’s uppercase, lowercase, a digit, or a special character.",
    "language": "java",
    "difficulty": "Easy",
    "order": 10,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a character and check whether it’s uppercase, lowercase, a digit, or a special character.",
      "thinking": "Check the mutually exclusive character categories in order.",
      "code": "char ch = '#';\nif (Character.isUpperCase(ch)) System.out.println(\"Uppercase\");\nelse if (Character.isLowerCase(ch)) System.out.println(\"Lowercase\");\nelse if (Character.isDigit(ch)) System.out.println(\"Digit\");\nelse System.out.println(\"Special character\");"
    }
  },
  {
    "id": "p1-11",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 11,
    "title": "Take three sides and check if they form a valid triangle.",
    "language": "java",
    "difficulty": "Easy",
    "order": 11,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three sides and check if they form a valid triangle.",
      "thinking": "A triangle is valid only when the sum of every pair of sides is greater than the remaining side.",
      "code": "int a = 3, b = 4, c = 5;\nSystem.out.println(a + b > c && a + c > b && b + c > a);"
    }
  },
  {
    "id": "p1-12",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 12,
    "title": "If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.",
    "language": "java",
    "difficulty": "Easy",
    "order": 12,
    "isExternalReference": false,
    "answer": {
      "problem": "If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.",
      "thinking": "Validate the triangle first. Only then classify it by side equality.",
      "code": "int a = 5, b = 5, c = 8;\nif (a + b <= c || a + c <= b || b + c <= a) System.out.println(\"Invalid\");\nelse if (a == b && b == c) System.out.println(\"Equilateral\");\nelse if (a == b || b == c || a == c) System.out.println(\"Isosceles\");\nelse System.out.println(\"Scalene\");"
    }
  },
  {
    "id": "p1-13",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 13,
    "title": "Take marks (0–100) and print the corresponding grade (A/B/C/D/F).",
    "language": "java",
    "difficulty": "Easy",
    "order": 13,
    "isExternalReference": false,
    "answer": {
      "problem": "Take marks (0–100) and print the corresponding grade (A/B/C/D/F).",
      "thinking": "Use descending thresholds so the first matching grade is selected. The PDF does not specify exact grade cutoffs; these are example cutoffs.",
      "code": "int marks = 82;\nif (marks >= 90) System.out.println(\"A\");\nelse if (marks >= 80) System.out.println(\"B\");\nelse if (marks >= 70) System.out.println(\"C\");\nelse if (marks >= 60) System.out.println(\"D\");\nelse System.out.println(\"F\");"
    }
  },
  {
    "id": "p1-14",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 14,
    "title": "Check if one of two given numbers is a multiple of the other.",
    "language": "java",
    "difficulty": "Easy",
    "order": 14,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if one of two given numbers is a multiple of the other.",
      "thinking": "Test divisibility in both directions and guard against division by zero.",
      "code": "int a = 12, b = 4;\nSystem.out.println((b != 0 && a % b == 0) || (a != 0 && b % a == 0));"
    }
  },
  {
    "id": "p1-15",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 15,
    "title": "Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”.",
    "language": "java",
    "difficulty": "Easy",
    "order": 15,
    "isExternalReference": false,
    "answer": {
      "problem": "Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”.",
      "thinking": "Map the 0–23 hour into ordered day-part ranges. The PDF does not specify boundaries, so these are example ranges.",
      "code": "int hour = 16;\nif (hour < 12) System.out.println(\"Good Morning\");\nelse if (hour < 17) System.out.println(\"Good Afternoon\");\nelse if (hour < 21) System.out.println(\"Good Evening\");\nelse System.out.println(\"Good Night\");"
    }
  },
  {
    "id": "p1-16",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 16,
    "title": "Check voting eligibility for a given age (18+).",
    "language": "java",
    "difficulty": "Easy",
    "order": 16,
    "isExternalReference": false,
    "answer": {
      "problem": "Check voting eligibility for a given age (18+).",
      "thinking": "The PDF defines eligibility as age 18 or above.",
      "code": "int age = 20;\nSystem.out.println(age >= 18);"
    }
  },
  {
    "id": "p1-17",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 17,
    "title": "Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.",
    "language": "java",
    "difficulty": "Easy",
    "order": 17,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.",
      "thinking": "Classify each value by parity, then combine the two results.",
      "code": "int a = 8, b = 11;\nif (a % 2 == 0 && b % 2 == 0) System.out.println(\"Both even\");\nelse if (a % 2 != 0 && b % 2 != 0) System.out.println(\"Both odd\");\nelse System.out.println(\"One even and one odd\");"
    }
  },
  {
    "id": "p1-18",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 18,
    "title": "Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’.",
    "language": "java",
    "difficulty": "Easy",
    "order": 18,
    "isExternalReference": false,
    "answer": {
      "problem": "Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’.",
      "thinking": "Character ranges can be checked directly because lowercase letters are ordered.",
      "code": "char ch = 't';\nch = Character.toLowerCase(ch);\nSystem.out.println(ch >= 'a' && ch <= 'm' ? \"a-m\" : ch >= 'n' && ch <= 'z' ? \"n-z\" : \"Not an alphabet\");"
    }
  },
  {
    "id": "p1-19",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 19,
    "title": "Take a day number (1–7) and print the corresponding day name.",
    "language": "java",
    "difficulty": "Easy",
    "order": 19,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a day number (1–7) and print the corresponding day name.",
      "thinking": "Use the day number as an array index after validating the 1–7 range.",
      "code": "int day = 3;\nString[] days = {\"\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"};\nSystem.out.println(day >= 1 && day <= 7 ? days[day] : \"Invalid\");"
    }
  },
  {
    "id": "p1-20",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 2 — Nested If & Multiple Conditions",
    "number": 20,
    "title": "Take a month number (1–12) and print the number of days in that month (ignore leap years).",
    "language": "java",
    "difficulty": "Easy",
    "order": 20,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a month number (1–12) and print the number of days in that month (ignore leap years).",
      "thinking": "Store the month lengths in an array. Leap years are ignored as required by the PDF.",
      "code": "int month = 2;\nint[] days = {0,31,28,31,30,31,30,31,31,30,31,30,31};\nSystem.out.println(month >= 1 && month <= 12 ? days[month] : \"Invalid\");"
    }
  },
  {
    "id": "p1-21",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 21,
    "title": "Take a 3-digit number and check if all digits are distinct.",
    "language": "java",
    "difficulty": "Medium",
    "order": 21,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a 3-digit number and check if all digits are distinct.",
      "thinking": "Extract the three digits and compare every pair.",
      "code": "int n = 121;\nint a = n / 100, b = (n / 10) % 10, c = n % 10;\nSystem.out.println(a != b && b != c && a != c);"
    }
  },
  {
    "id": "p1-22",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 22,
    "title": "Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.",
    "language": "java",
    "difficulty": "Medium",
    "order": 22,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.",
      "thinking": "Compare the middle digit with both outer digits.",
      "code": "int n = 573;\nint a = n / 100, b = (n / 10) % 10, c = n % 10;\nif (b > a && b > c) System.out.println(\"Largest\");\nelse if (b < a && b < c) System.out.println(\"Smallest\");\nelse System.out.println(\"Neither\");"
    }
  },
  {
    "id": "p1-23",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 23,
    "title": "Take a 4-digit number and check if the first and last digits are equal.",
    "language": "java",
    "difficulty": "Medium",
    "order": 23,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a 4-digit number and check if the first and last digits are equal.",
      "thinking": "For a four-digit number, integer division extracts the first digit and %10 extracts the last.",
      "code": "int n = 1234;\nSystem.out.println(n / 1000 == n % 10);"
    }
  },
  {
    "id": "p1-24",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 24,
    "title": "Check whether a given integer is single-digit, double-digit, or multi-digit.",
    "language": "java",
    "difficulty": "Medium",
    "order": 24,
    "isExternalReference": false,
    "answer": {
      "problem": "Check whether a given integer is single-digit, double-digit, or multi-digit.",
      "thinking": "Use the absolute value so the sign does not affect digit count.",
      "code": "int n = -12345;\nint x = Math.abs(n);\nif (x < 10) System.out.println(\"Single-digit\");\nelse if (x < 100) System.out.println(\"Double-digit\");\nelse System.out.println(\"Multi-digit\");"
    }
  },
  {
    "id": "p1-25",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 25,
    "title": "Check if a number is a multiple of 7 or ends with 7.",
    "language": "java",
    "difficulty": "Medium",
    "order": 25,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is a multiple of 7 or ends with 7.",
      "thinking": "The condition is an OR: divisible by 7 or the last digit is 7.",
      "code": "int n = 27;\nSystem.out.println(n % 7 == 0 || Math.abs(n) % 10 == 7);"
    }
  },
  {
    "id": "p1-26",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 26,
    "title": "Take coordinates (x, y) and determine which quadrant the point lies in.",
    "language": "java",
    "difficulty": "Medium",
    "order": 26,
    "isExternalReference": false,
    "answer": {
      "problem": "Take coordinates (x, y) and determine which quadrant the point lies in.",
      "thinking": "The signs of x and y determine the quadrant. Zero places the point on an axis or at the origin.",
      "code": "int x = -3, y = 4;\nif (x > 0 && y > 0) System.out.println(\"Q1\");\nelse if (x < 0 && y > 0) System.out.println(\"Q2\");\nelse if (x < 0 && y < 0) System.out.println(\"Q3\");\nelse if (x > 0 && y < 0) System.out.println(\"Q4\");\nelse System.out.println(\"On an axis / origin\");"
    }
  },
  {
    "id": "p1-27",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 27,
    "title": "Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.",
    "language": "java",
    "difficulty": "Medium",
    "order": 27,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.",
      "thinking": "Check whether the amount is evenly divisible by one of the listed denominations. The PDF wording does not say all three must divide it; this follows the phrase “can be evenly divided into”.",
      "code": "int amount = 8600;\nboolean ok = amount % 2000 == 0 || amount % 500 == 0 || amount % 100 == 0;\nSystem.out.println(ok);"
    }
  },
  {
    "id": "p1-28",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 28,
    "title": "Check if a number lies within the range [100, 999].",
    "language": "java",
    "difficulty": "Medium",
    "order": 28,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number lies within the range [100, 999].",
      "thinking": "A value belongs to the inclusive range when both bounds hold.",
      "code": "int n = 456;\nSystem.out.println(n >= 100 && n <= 999);"
    }
  },
  {
    "id": "p1-29",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 29,
    "title": "Take two angles of a triangle and compute the third angle.",
    "language": "java",
    "difficulty": "Medium",
    "order": 29,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two angles of a triangle and compute the third angle.",
      "thinking": "The interior angles of a triangle sum to 180 degrees.",
      "code": "int a = 50, b = 60;\nint third = 180 - a - b;\nSystem.out.println(third);"
    }
  },
  {
    "id": "p1-30",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 3 — Math and Number Logic",
    "number": 30,
    "title": "Check whether a number is a perfect square (without using the square root function).",
    "language": "java",
    "difficulty": "Medium",
    "order": 30,
    "isExternalReference": false,
    "answer": {
      "problem": "Check whether a number is a perfect square (without using the square root function).",
      "thinking": "Try integer candidates from 1 upward. When i*i reaches n, n is a perfect square; no square-root function is used.",
      "code": "int n = 49;\nboolean perfectSquare = false;\nfor (int i = 1; i * i <= n; i++) {\n    if (i * i == n) { perfectSquare = true; break; }\n}\nSystem.out.println(perfectSquare);"
    }
  },
  {
    "id": "p1-31",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 31,
    "title": "Take a character and check if it is a letter, a digit, or neither.",
    "language": "java",
    "difficulty": "Medium",
    "order": 31,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a character and check if it is a letter, a digit, or neither.",
      "thinking": "Character utility methods directly identify letters and digits.",
      "code": "char ch = '7';\nif (Character.isLetter(ch)) System.out.println(\"Letter\");\nelse if (Character.isDigit(ch)) System.out.println(\"Digit\");\nelse System.out.println(\"Neither\");"
    }
  },
  {
    "id": "p1-32",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 32,
    "title": "Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and “FizzBuzz” if divisible by both.",
    "language": "java",
    "difficulty": "Medium",
    "order": 32,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and “FizzBuzz” if divisible by both.",
      "thinking": "Check the combined condition first; otherwise a number divisible by both 3 and 5 would match Fizz too early.",
      "code": "int n = 15;\nif (n % 15 == 0) System.out.println(\"FizzBuzz\");\nelse if (n % 3 == 0) System.out.println(\"Fizz\");\nelse if (n % 5 == 0) System.out.println(\"Buzz\");\nelse System.out.println(n);"
    }
  },
  {
    "id": "p1-33",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 33,
    "title": "Take three numbers and print the median value (neither maximum nor minimum).",
    "language": "java",
    "difficulty": "Medium",
    "order": 33,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three numbers and print the median value (neither maximum nor minimum).",
      "thinking": "The median is the value that lies between the other two.",
      "code": "int a = 10, b = 4, c = 7;\nif ((a >= b && a <= c) || (a >= c && a <= b)) System.out.println(a);\nelse if ((b >= a && b <= c) || (b >= c && b <= a)) System.out.println(b);\nelse System.out.println(c);"
    }
  },
  {
    "id": "p1-34",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 34,
    "title": "Take 24-hour time (hours and minutes) and print whether it is AM or PM.",
    "language": "java",
    "difficulty": "Medium",
    "order": 34,
    "isExternalReference": false,
    "answer": {
      "problem": "Take 24-hour time (hours and minutes) and print whether it is AM or PM.",
      "thinking": "For a 24-hour clock, hours 0–11 are AM and 12–23 are PM.",
      "code": "int h = 18;\nint m = 25;\nSystem.out.println(h < 12 ? \"AM\" : \"PM\");"
    }
  },
  {
    "id": "p1-35",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 35,
    "title": "Take income and age, and check if eligible for tax (age > 18 and income > 5 L).",
    "language": "java",
    "difficulty": "Medium",
    "order": 35,
    "isExternalReference": false,
    "answer": {
      "problem": "Take income and age, and check if eligible for tax (age > 18 and income > 5 L).",
      "thinking": "Both conditions from the PDF must be true: age > 18 and income > 5 lakh.",
      "code": "int age = 25;\ndouble income = 600000;\nSystem.out.println(age > 18 && income > 500000);"
    }
  },
  {
    "id": "p1-36",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 36,
    "title": "Take two numbers and check if both are positive and their sum is less than 100.",
    "language": "java",
    "difficulty": "Medium",
    "order": 36,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two numbers and check if both are positive and their sum is less than 100.",
      "thinking": "All three logical conditions must hold simultaneously.",
      "code": "int a = 20, b = 30;\nSystem.out.println(a > 0 && b > 0 && a + b < 100);"
    }
  },
  {
    "id": "p1-37",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 37,
    "title": "Take a single digit (0–9) and print its word form (“Zero” to “Nine”).",
    "language": "java",
    "difficulty": "Medium",
    "order": 37,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a single digit (0–9) and print its word form (“Zero” to “Nine”).",
      "thinking": "Use a lookup array where each digit is stored at its numeric index.",
      "code": "int d = 7;\nString[] words = {\"Zero\",\"One\",\"Two\",\"Three\",\"Four\",\"Five\",\"Six\",\"Seven\",\"Eight\",\"Nine\"};\nSystem.out.println(d >= 0 && d <= 9 ? words[d] : \"Invalid\");"
    }
  },
  {
    "id": "p1-38",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 38,
    "title": "Take a weekday number (1–7) and determine if it is a weekday or weekend.",
    "language": "java",
    "difficulty": "Medium",
    "order": 38,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a weekday number (1–7) and determine if it is a weekday or weekend.",
      "thinking": "With the conventional mapping 1–5 as weekdays and 6–7 as weekend.",
      "code": "int day = 6;\nSystem.out.println(day >= 1 && day <= 5 ? \"Weekday\" : day <= 7 ? \"Weekend\" : \"Invalid\");"
    }
  },
  {
    "id": "p1-39",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 39,
    "title": "Take electricity units consumed and calculate the bill as per slabs (using if-else).",
    "language": "java",
    "difficulty": "Medium",
    "order": 39,
    "isExternalReference": false,
    "answer": {
      "problem": "Take electricity units consumed and calculate the bill as per slabs (using if-else).",
      "thinking": "The PDF asks for slab billing but does not provide slab rates. The code demonstrates the if-else structure with example rates.",
      "code": "int units = 180;\ndouble bill;\nif (units <= 100) bill = units * 1.5;\nelse if (units <= 200) bill = 100 * 1.5 + (units - 100) * 2.5;\nelse bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4.0;\nSystem.out.println(bill);"
    }
  },
  {
    "id": "p1-40",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 4 — Logical Operators & Compound Statements",
    "number": 40,
    "title": "Take a password string and check basic rules (length ≥ 8 and contains at least one digit).",
    "language": "java",
    "difficulty": "Medium",
    "order": 40,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a password string and check basic rules (length ≥ 8 and contains at least one digit).",
      "thinking": "Check the minimum length and whether at least one digit exists. These are the two rules stated in the PDF.",
      "code": "String password = \"abc12345\";\nboolean valid = password.length() >= 8 && password.chars().anyMatch(Character::isDigit);\nSystem.out.println(valid);"
    }
  },
  {
    "id": "p1-41",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 41,
    "title": "Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.",
    "language": "java",
    "difficulty": "Hard",
    "order": 41,
    "isExternalReference": false,
    "answer": {
      "problem": "Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.",
      "thinking": "Check the origin first, then the two axes.",
      "code": "int x = 0, y = -5;\nif (x == 0 && y == 0) System.out.println(\"Origin\");\nelse if (y == 0) System.out.println(\"X-axis\");\nelse if (x == 0) System.out.println(\"Y-axis\");\nelse System.out.println(\"Neither\");"
    }
  },
  {
    "id": "p1-42",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 42,
    "title": "Take three numbers and check if they can form a Pythagorean triplet.",
    "language": "java",
    "difficulty": "Hard",
    "order": 42,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three numbers and check if they can form a Pythagorean triplet.",
      "thinking": "After sorting, the largest value is the possible hypotenuse. Then apply a²+b²=c².",
      "code": "int[] a = {3,4,5};\nint x=a[0], y=a[1], z=a[2];\nint[] v = {x,y,z};\nArrays.sort(v);\nSystem.out.println(v[0] * v[0] + v[1] * v[1] == v[2] * v[2]);"
    }
  },
  {
    "id": "p1-43",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 43,
    "title": "Take day and month and check if it forms a valid calendar date (ignoring leap years).",
    "language": "java",
    "difficulty": "Hard",
    "order": 43,
    "isExternalReference": false,
    "answer": {
      "problem": "Take day and month and check if it forms a valid calendar date (ignoring leap years).",
      "thinking": "Validate the month first, then require the day to fall within that month's maximum. Leap years are ignored.",
      "code": "int day = 29, month = 2;\nint[] days={0,31,28,31,30,31,30,31,31,30,31,30,31};\nSystem.out.println(month >= 1 && month <= 12 && day >= 1 && day <= days[month]);"
    }
  },
  {
    "id": "p1-44",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 44,
    "title": "Take time (hours and minutes) and print the smaller angle between the hour and minute hands.",
    "language": "java",
    "difficulty": "Hard",
    "order": 44,
    "isExternalReference": false,
    "answer": {
      "problem": "Take time (hours and minutes) and print the smaller angle between the hour and minute hands.",
      "thinking": "Compute both hand angles from 12 o’clock, take their absolute difference, then choose the smaller of θ and 360−θ.",
      "code": "int h = 3, m = 30;\ndouble hourAngle = 30 * h + 0.5 * m;\ndouble minuteAngle = 6 * m;\ndouble diff = Math.abs(hourAngle - minuteAngle);\nSystem.out.println(Math.min(diff, 360 - diff));"
    }
  },
  {
    "id": "p1-45",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 45,
    "title": "Take three numbers and check if they are in arithmetic progression.",
    "language": "java",
    "difficulty": "Hard",
    "order": 45,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three numbers and check if they are in arithmetic progression.",
      "thinking": "An arithmetic progression has equal consecutive differences.",
      "code": "int a=2,b=5,c=8;\nSystem.out.println(b-a == c-b);"
    }
  },
  {
    "id": "p1-46",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 46,
    "title": "Take three numbers and check if they are in geometric progression.",
    "language": "java",
    "difficulty": "Hard",
    "order": 46,
    "isExternalReference": false,
    "answer": {
      "problem": "Take three numbers and check if they are in geometric progression.",
      "thinking": "For integer values, compare consecutive ratios carefully and guard division by zero. This solution uses exact integer ratios.",
      "code": "int a=2,b=6,c=18;\nSystem.out.println((b != 0 && b / a == c / b) && b % a == 0 && c % b == 0);"
    }
  },
  {
    "id": "p1-47",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 47,
    "title": "Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.",
    "language": "java",
    "difficulty": "Hard",
    "order": 47,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.",
      "thinking": "Extract the three digits and compare the sum of the first and last with the middle.",
      "code": "int n=374;\nint first=n/100, middle=(n/10)%10, last=n%10;\nSystem.out.println(first + last == middle);"
    }
  },
  {
    "id": "p1-48",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 48,
    "title": "Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits.",
    "language": "java",
    "difficulty": "Hard",
    "order": 48,
    "isExternalReference": false,
    "answer": {
      "problem": "Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits.",
      "thinking": "Repeatedly extract the last digit, updating both sum and product.",
      "code": "int n=1234, x=n, sum=0, product=1;\nwhile (x>0) { int d=x%10; sum+=d; product*=d; x/=10; }\nSystem.out.println(sum > product);"
    }
  },
  {
    "id": "p1-49",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 49,
    "title": "Take two dates (day and month) and determine which one comes first in the calendar.",
    "language": "java",
    "difficulty": "Hard",
    "order": 49,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two dates (day and month) and determine which one comes first in the calendar.",
      "thinking": "For dates represented only by day and month, compare month first, then day when months are equal.",
      "code": "int d1=12,m1=3,d2=5,m2=4;\nif (m1 != m2) System.out.println(m1 < m2 ? \"First\" : \"Second\");\nelse System.out.println(d1 <= d2 ? \"First\" : \"Second\");"
    }
  },
  {
    "id": "p1-50",
    "phaseId": "p1",
    "phaseName": "Conditional Thinking",
    "section": "Level 5 — Creative / Tricky Logical Scenarios",
    "number": 50,
    "title": "Take a year and print the corresponding century (e.g., “19th century”, “20th century”).",
    "language": "java",
    "difficulty": "Hard",
    "order": 50,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a year and print the corresponding century (e.g., “19th century”, “20th century”).",
      "thinking": "The century is floor((year−1)/100)+1; this also handles exact century years such as 2000 correctly.",
      "code": "int year=2026;\nSystem.out.println(((year-1)/100)+1);"
    }
  },
  {
    "id": "p2-1",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 1,
    "title": "Print numbers from 1 to 10.",
    "language": "java",
    "difficulty": "Easy",
    "order": 51,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers from 1 to 10.",
      "thinking": "Run a loop from 1 through 10 inclusive.",
      "code": "for (int i=1;i<=10;i++) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-2",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 2,
    "title": "Print all even numbers between 1 and 100.",
    "language": "java",
    "difficulty": "Easy",
    "order": 52,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all even numbers between 1 and 100.",
      "thinking": "Starting at 2 and increasing by 2 visits every even number.",
      "code": "for (int i=2;i<=100;i+=2) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-3",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 3,
    "title": "Print all odd numbers between 1 and 100.",
    "language": "java",
    "difficulty": "Easy",
    "order": 53,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all odd numbers between 1 and 100.",
      "thinking": "Starting at 1 and increasing by 2 visits every odd number.",
      "code": "for (int i=1;i<=100;i+=2) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-4",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 4,
    "title": "Print numbers from 10 down to 1.",
    "language": "java",
    "difficulty": "Easy",
    "order": 54,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers from 10 down to 1.",
      "thinking": "Decrease the loop variable from 10 to 1.",
      "code": "for (int i=10;i>=1;i--) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-5",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 5,
    "title": "Print the table of a given number (n × 1 to n × 10).",
    "language": "java",
    "difficulty": "Easy",
    "order": 55,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the table of a given number (n × 1 to n × 10).",
      "thinking": "The multiplier runs from 1 to 10.",
      "code": "int n=7; for(int i=1;i<=10;i++) System.out.println(n+\" x \"+i+\" = \"+n*i);"
    }
  },
  {
    "id": "p2-6",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 6,
    "title": "Print the sum of first n natural numbers.",
    "language": "java",
    "difficulty": "Easy",
    "order": 56,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the sum of first n natural numbers.",
      "thinking": "Accumulate every integer from 1 through n.",
      "code": "int n=10,sum=0; for(int i=1;i<=n;i++) sum+=i; System.out.println(sum);"
    }
  },
  {
    "id": "p2-7",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 7,
    "title": "Print the sum of all even numbers up to n.",
    "language": "java",
    "difficulty": "Easy",
    "order": 57,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the sum of all even numbers up to n.",
      "thinking": "Visit only even values and add them.",
      "code": "int n=10,sum=0; for(int i=2;i<=n;i+=2) sum+=i; System.out.println(sum);"
    }
  },
  {
    "id": "p2-8",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 8,
    "title": "Print the sum of all odd numbers up to n.",
    "language": "java",
    "difficulty": "Easy",
    "order": 58,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the sum of all odd numbers up to n.",
      "thinking": "Visit only odd values and add them.",
      "code": "int n=10,sum=0; for(int i=1;i<=n;i+=2) sum+=i; System.out.println(sum);"
    }
  },
  {
    "id": "p2-9",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 9,
    "title": "Print the factorial of a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 59,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the factorial of a given number.",
      "thinking": "Factorial is the product of all integers from 1 through n.",
      "code": "int n=5,f=1; for(int i=2;i<=n;i++) f*=i; System.out.println(f);"
    }
  },
  {
    "id": "p2-10",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 1 — Basic Looping",
    "number": 10,
    "title": "Print the product of digits of a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 60,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the product of digits of a given number.",
      "thinking": "Extract digits from right to left using %10 and divide by 10 after each extraction.",
      "code": "int n=1234,p=1; while(n>0){p*=n%10;n/=10;} System.out.println(p);"
    }
  },
  {
    "id": "p2-11",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 11,
    "title": "Count the number of digits in a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 61,
    "isExternalReference": false,
    "answer": {
      "problem": "Count the number of digits in a given number.",
      "thinking": "Each integer division by 10 removes one digit.",
      "code": "int n=12345,count=0; n=Math.abs(n); while(n>0){count++;n/=10;} System.out.println(count);"
    }
  },
  {
    "id": "p2-12",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 12,
    "title": "Print the reverse of a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 62,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the reverse of a given number.",
      "thinking": "Shift the existing reverse left by one decimal place and append the next digit.",
      "code": "int n=1234,rev=0; while(n>0){rev=rev*10+n%10;n/=10;} System.out.println(rev);"
    }
  },
  {
    "id": "p2-13",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 13,
    "title": "Check if a number is a palindrome.",
    "language": "java",
    "difficulty": "Easy",
    "order": 63,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is a palindrome.",
      "thinking": "A palindrome equals its reverse.",
      "code": "int n=1221,x=n,rev=0; while(x>0){rev=rev*10+x%10;x/=10;} System.out.println(n==rev);"
    }
  },
  {
    "id": "p2-14",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 14,
    "title": "Find the sum of digits of a number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 64,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of digits of a number.",
      "thinking": "Extract each digit and accumulate it.",
      "code": "int n=1234,sum=0; while(n>0){sum+=n%10;n/=10;} System.out.println(sum);"
    }
  },
  {
    "id": "p2-15",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 15,
    "title": "Check if a number is an Armstrong number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 65,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is an Armstrong number.",
      "thinking": "An Armstrong number equals the sum of each digit raised to the number of digits.",
      "code": "int n=153,x=n,sum=0,digits=0; for(int t=n;t>0;t/=10) digits++; while(x>0){int d=x%10; sum+=(int)Math.pow(d,digits); x/=10;} System.out.println(sum==n);"
    }
  },
  {
    "id": "p2-16",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 16,
    "title": "Check if a number is a perfect number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 66,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is a perfect number.",
      "thinking": "A perfect number equals the sum of its proper divisors.",
      "code": "int n=28,sum=0; for(int i=1;i<n;i++) if(n%i==0) sum+=i; System.out.println(sum==n);"
    }
  },
  {
    "id": "p2-17",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 17,
    "title": "Print all prime numbers between 1 and 100.",
    "language": "java",
    "difficulty": "Easy",
    "order": 67,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all prime numbers between 1 and 100.",
      "thinking": "For each candidate, try divisors only up to its square root.",
      "code": "for(int n=2;n<=100;n++){boolean prime=true;for(int d=2;d*d<=n;d++)if(n%d==0){prime=false;break;}if(prime)System.out.print(n+\" \");}"
    }
  },
  {
    "id": "p2-18",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 18,
    "title": "Check if a number is prime or not.",
    "language": "java",
    "difficulty": "Easy",
    "order": 68,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is prime or not.",
      "thinking": "A prime greater than 1 has no divisor other than 1 and itself.",
      "code": "int n=29; boolean prime=n>=2; for(int d=2;d*d<=n&&prime;d++) if(n%d==0) prime=false; System.out.println(prime);"
    }
  },
  {
    "id": "p2-19",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 19,
    "title": "Print Fibonacci series up to n terms.",
    "language": "java",
    "difficulty": "Easy",
    "order": 69,
    "isExternalReference": false,
    "answer": {
      "problem": "Print Fibonacci series up to n terms.",
      "thinking": "Keep the previous two Fibonacci values and update them after printing.",
      "code": "int n=8,a=0,b=1; for(int i=0;i<n;i++){System.out.print(a+\" \");int c=a+b;a=b;b=c;}"
    }
  },
  {
    "id": "p2-20",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 2 — Number-based Looping Logic",
    "number": 20,
    "title": "Print sum of first n terms of Fibonacci series.",
    "language": "java",
    "difficulty": "Easy",
    "order": 70,
    "isExternalReference": false,
    "answer": {
      "problem": "Print sum of first n terms of Fibonacci series.",
      "thinking": "Generate each Fibonacci term and accumulate it.",
      "code": "int n=8,a=0,b=1,sum=0; for(int i=0;i<n;i++){sum+=a;int c=a+b;a=b;b=c;} System.out.println(sum);"
    }
  },
  {
    "id": "p2-21",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 21,
    "title": "Print the squares of numbers from 1 to n.",
    "language": "java",
    "difficulty": "Medium",
    "order": 71,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the squares of numbers from 1 to n.",
      "thinking": "Square each integer from 1 through n.",
      "code": "int n=5; for(int i=1;i<=n;i++) System.out.print(i*i+\" \");"
    }
  },
  {
    "id": "p2-22",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 22,
    "title": "Print cubes of numbers from 1 to n.",
    "language": "java",
    "difficulty": "Medium",
    "order": 72,
    "isExternalReference": false,
    "answer": {
      "problem": "Print cubes of numbers from 1 to n.",
      "thinking": "Cube each integer from 1 through n.",
      "code": "int n=5; for(int i=1;i<=n;i++) System.out.print(i*i*i+\" \");"
    }
  },
  {
    "id": "p2-23",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 23,
    "title": "Print all numbers between a and b divisible by 7.",
    "language": "java",
    "difficulty": "Medium",
    "order": 73,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all numbers between a and b divisible by 7.",
      "thinking": "Traverse the range and print values whose remainder after division by 7 is zero.",
      "code": "int a=10,b=60; for(int i=a;i<=b;i++) if(i%7==0) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-24",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 24,
    "title": "Find HCF (GCD) of two numbers using loops.",
    "language": "java",
    "difficulty": "Medium",
    "order": 74,
    "isExternalReference": false,
    "answer": {
      "problem": "Find HCF (GCD) of two numbers using loops.",
      "thinking": "The Euclidean update (a,b) → (b,a%b) repeatedly reduces the problem until the remainder is zero.",
      "code": "int a=48,b=18; while(b!=0){int r=a%b;a=b;b=r;} System.out.println(a);"
    }
  },
  {
    "id": "p2-25",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 25,
    "title": "Find LCM of two numbers using loops.",
    "language": "java",
    "difficulty": "Medium",
    "order": 75,
    "isExternalReference": false,
    "answer": {
      "problem": "Find LCM of two numbers using loops.",
      "thinking": "Start from the larger number and stop at the first common multiple.",
      "code": "int a=12,b=18,l=1; for(int i=Math.max(a,b);;i++) if(i%a==0&&i%b==0){l=i;break;} System.out.println(l);"
    }
  },
  {
    "id": "p2-26",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 26,
    "title": "Print all factors of a given number.",
    "language": "java",
    "difficulty": "Medium",
    "order": 76,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all factors of a given number.",
      "thinking": "A factor divides the number with remainder zero.",
      "code": "int n=24; for(int i=1;i<=n;i++) if(n%i==0) System.out.print(i+\" \");"
    }
  },
  {
    "id": "p2-27",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 27,
    "title": "Find the sum of all factors of a number.",
    "language": "java",
    "difficulty": "Medium",
    "order": 77,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of all factors of a number.",
      "thinking": "Find every divisor and add it to the running sum.",
      "code": "int n=24,sum=0; for(int i=1;i<=n;i++) if(n%i==0) sum+=i; System.out.println(sum);"
    }
  },
  {
    "id": "p2-28",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 28,
    "title": "Check if a number is a strong number (sum of factorials of digits = number).",
    "language": "java",
    "difficulty": "Medium",
    "order": 78,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is a strong number (sum of factorials of digits = number).",
      "thinking": "A strong number equals the sum of factorials of its digits.",
      "code": "int n=145,x=n,sum=0; while(x>0){int d=x%10,f=1;for(int i=2;i<=d;i++)f*=i;sum+=f;x/=10;}System.out.println(sum==n);"
    }
  },
  {
    "id": "p2-29",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 29,
    "title": "Print first n terms of an arithmetic progression (a, d).",
    "language": "java",
    "difficulty": "Medium",
    "order": 79,
    "isExternalReference": false,
    "answer": {
      "problem": "Print first n terms of an arithmetic progression (a, d).",
      "thinking": "The nth AP term follows a+(n−1)d; here the loop index starts at zero.",
      "code": "int a=2,d=3,n=6; for(int i=0;i<n;i++) System.out.print(a+i*d+\" \");"
    }
  },
  {
    "id": "p2-30",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 3 — Mathematical & Logical Patterns",
    "number": 30,
    "title": "Print first n terms of a geometric progression (a, r).",
    "language": "java",
    "difficulty": "Medium",
    "order": 80,
    "isExternalReference": false,
    "answer": {
      "problem": "Print first n terms of a geometric progression (a, r).",
      "thinking": "Each geometric term is obtained by multiplying the previous term by r.",
      "code": "int a=2,r=3,n=6; long term=a; for(int i=0;i<n;i++){System.out.print(term+\" \");term*=r;}"
    }
  },
  {
    "id": "p2-external-pattern",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 4 — Pattern Printing",
    "number": 31,
    "title": "Solve the separate “STRONG YOUR LOGIC BUILDING” sheet for star printing practice. (The referenced sheet is not included in this PDF.)",
    "language": "java",
    "difficulty": "Medium",
    "order": 81,
    "isExternalReference": true,
    "answer": {
      "problem": "Solve the separate “STRONG YOUR LOGIC BUILDING” sheet for star printing practice. (The referenced sheet is not included in this PDF.)",
      "thinking": "This dashboard does not invent the missing pattern sheet. Upload that separate PDF and its questions can be added with Java solutions.",
      "code": "// The uploaded PDF only references a separate star-pattern practice sheet here.\n// That separate PDF was not included, so there is no question text to solve."
    }
  },
  {
    "id": "p2-32",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 32,
    "title": "Print all numbers whose sum of digits is even (1–100).",
    "language": "java",
    "difficulty": "Hard",
    "order": 82,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all numbers whose sum of digits is even (1–100).",
      "thinking": "A number must satisfy divisibility by 7 and simultaneously fail divisibility by 5.",
      "code": "int count=0;for(int i=1;i<=500;i++)if(i%7==0&&i%5!=0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p2-33",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 33,
    "title": "Count how many numbers between 1–500 are divisible by 7 but not by 5.",
    "language": "java",
    "difficulty": "Hard",
    "order": 83,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many numbers between 1–500 are divisible by 7 but not by 5.",
      "thinking": "Reverse each number and compare it with the original.",
      "code": "for(int i=1;i<=500;i++){int x=i,r=0;while(x>0){r=r*10+x%10;x/=10;}if(r==i)System.out.print(i+\" \");}"
    }
  },
  {
    "id": "p2-34",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 34,
    "title": "Print all numbers that are palindromes between 1–500.",
    "language": "java",
    "difficulty": "Hard",
    "order": 84,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all numbers that are palindromes between 1–500.",
      "thinking": "Compute the digit sum and test whether it is a multiple of 3.",
      "code": "for(int i=1;i<=100;i++){int x=i,sum=0;while(x>0){sum+=x%10;x/=10;}if(sum%3==0)System.out.print(i+\" \");}"
    }
  },
  {
    "id": "p2-35",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 35,
    "title": "Print numbers between 1–100 whose digits add up to a multiple of 3.",
    "language": "java",
    "difficulty": "Hard",
    "order": 85,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers between 1–100 whose digits add up to a multiple of 3.",
      "thinking": "Inspect each digit and keep the smallest and largest seen.",
      "code": "int n=58321,min=9,max=0;while(n>0){int d=n%10;min=Math.min(min,d);max=Math.max(max,d);n/=10;}System.out.println(min+\" \"+max);"
    }
  },
  {
    "id": "p2-36",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 36,
    "title": "Find the smallest and largest digit in a given number.",
    "language": "java",
    "difficulty": "Hard",
    "order": 86,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the smallest and largest digit in a given number.",
      "thinking": "Repeatedly inspect the lowest binary bit and count how many 1-bits the number contains.",
      "code": "int n=10,count;for(int i=1;i<=n;i++){count=0;int x=i;while(x>0){count+=x&1;x>>=1;}if(count%2==0)System.out.print(i+\" \");}"
    }
  },
  {
    "id": "p2-37",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 37,
    "title": "Print all numbers from 1–n whose binary representation has an even number of 1s.",
    "language": "java",
    "difficulty": "Hard",
    "order": 87,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all numbers from 1–n whose binary representation has an even number of 1s.",
      "thinking": "For row i, compute i² and print it.",
      "code": "int n=5;for(int i=1;i<=n;i++)System.out.println(i*i);"
    }
  },
  {
    "id": "p2-38",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 38,
    "title": "Print a pattern where each row i prints i*i.",
    "language": "java",
    "difficulty": "Hard",
    "order": 88,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a pattern where each row i prints i*i.",
      "thinking": "Compute each factorial independently by looping from 2 to the current number.",
      "code": "int n=5;for(int i=1;i<=n;i++){int f=1;for(int j=2;j<=i;j++)f*=j;System.out.println(i+\"! = \"+f);}"
    }
  },
  {
    "id": "p2-39",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 39,
    "title": "Print factorial of each number from 1 to n.",
    "language": "java",
    "difficulty": "Hard",
    "order": 89,
    "isExternalReference": false,
    "answer": {
      "problem": "Print factorial of each number from 1 to n.",
      "thinking": "Classify each extracted digit by parity and maintain two separate sums.",
      "code": "int n=58341,odd=0,even=0;while(n>0){int d=n%10;if(d%2==0)even+=d;else odd+=d;n/=10;}System.out.println(\"Odd=\"+odd+\" Even=\"+even);"
    }
  },
  {
    "id": "p2-40",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 40,
    "title": "Print the sum of all odd digits and even digits separately in a number.",
    "language": "java",
    "difficulty": "Hard",
    "order": 90,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the sum of all odd digits and even digits separately in a number.",
      "thinking": "continue skips the current iteration. Zero is not added, while the remaining inputs are accumulated.",
      "code": "Scanner sc=new Scanner(System.in);int sum=0;for(int i=0;i<5;i++){int x=sc.nextInt();if(x==0)continue;sum+=x;}System.out.println(sum);"
    }
  },
  {
    "id": "p2-41",
    "phaseId": "p2",
    "phaseName": "Looping & Patterns",
    "section": "Level 5 — Logical Loop Combinations",
    "number": 41,
    "title": "Take 5 numbers as input. If the user enters 0, skip it using continue. At the end, print the sum of all non-zero numbers entered.",
    "language": "java",
    "difficulty": "Hard",
    "order": 91,
    "isExternalReference": false,
    "answer": {
      "problem": "Take 5 numbers as input. If the user enters 0, skip it using continue. At the end, print the sum of all non-zero numbers entered.",
      "thinking": "The uploaded PDF only references a separate star-pattern practice sheet here. That separate PDF is not included, so there is no question text to solve or Java answer to invent.",
      "code": "// The separate star-pattern practice sheet is not included in the uploaded PDF.\n// Upload that sheet to add its exact questions and Java solutions."
    }
  },
  {
    "id": "p3-1",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 1,
    "title": "Print numbers from 1 to n using recursion.",
    "language": "java",
    "difficulty": "Easy",
    "order": 92,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers from 1 to n using recursion.",
      "thinking": "Base case stops at 0. Printing happens after the recursive call so the numbers appear in increasing order.",
      "code": "static void printUp(int n){if(n==0)return;printUp(n-1);System.out.print(n+\" \");}"
    }
  },
  {
    "id": "p3-2",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 2,
    "title": "Print numbers from n down to 1 using recursion.",
    "language": "java",
    "difficulty": "Easy",
    "order": 93,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers from n down to 1 using recursion.",
      "thinking": "Print before the recursive call to get decreasing order.",
      "code": "static void printDown(int n){if(n==0)return;System.out.print(n+\" \");printDown(n-1);}"
    }
  },
  {
    "id": "p3-3",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 3,
    "title": "Print only even numbers from 1 to n recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 94,
    "isExternalReference": false,
    "answer": {
      "problem": "Print only even numbers from 1 to n recursively.",
      "thinking": "Recursively walk down to 0, then print only even values while unwinding.",
      "code": "static void even(int n){if(n==0)return;even(n-1);if(n%2==0)System.out.print(n+\" \");}"
    }
  },
  {
    "id": "p3-4",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 4,
    "title": "Print only odd numbers from 1 to n recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 95,
    "isExternalReference": false,
    "answer": {
      "problem": "Print only odd numbers from 1 to n recursively.",
      "thinking": "Same recursive walk as above, but filter for odd values.",
      "code": "static void odd(int n){if(n==0)return;odd(n-1);if(n%2!=0)System.out.print(n+\" \");}"
    }
  },
  {
    "id": "p3-5",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 5,
    "title": "Print sum of first n natural numbers recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 96,
    "isExternalReference": false,
    "answer": {
      "problem": "Print sum of first n natural numbers recursively.",
      "thinking": "The problem reduces to n + sum(n−1), with 0 as the base case.",
      "code": "static int sum(int n){if(n==0)return 0;return n+sum(n-1);}"
    }
  },
  {
    "id": "p3-6",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 6,
    "title": "Print factorial of a number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 97,
    "isExternalReference": false,
    "answer": {
      "problem": "Print factorial of a number recursively.",
      "thinking": "Factorial is defined recursively as n × (n−1)!.",
      "code": "static long fact(int n){if(n<=1)return 1;return n*fact(n-1);}"
    }
  },
  {
    "id": "p3-7",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 7,
    "title": "Calculate power of a number (xⁿ) using recursion.",
    "language": "java",
    "difficulty": "Easy",
    "order": 98,
    "isExternalReference": false,
    "answer": {
      "problem": "Calculate power of a number (xⁿ) using recursion.",
      "thinking": "Every recursive step removes one multiplication until the exponent reaches zero.",
      "code": "static long power(long x,int n){if(n==0)return 1;return x*power(x,n-1);}"
    }
  },
  {
    "id": "p3-8",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 8,
    "title": "Find nth Fibonacci number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 99,
    "isExternalReference": false,
    "answer": {
      "problem": "Find nth Fibonacci number recursively.",
      "thinking": "Each Fibonacci number is defined as the sum of the previous two.",
      "code": "static long fib(int n){if(n<=1)return n;return fib(n-1)+fib(n-2);}"
    }
  },
  {
    "id": "p3-9",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 9,
    "title": "Print Fibonacci series up to n terms recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 100,
    "isExternalReference": false,
    "answer": {
      "problem": "Print Fibonacci series up to n terms recursively.",
      "thinking": "Carry the two current Fibonacci values as parameters so each recursive call can print the next term.",
      "code": "static void fibSeries(int n){fibSeriesHelper(n,0,1);} static void fibSeriesHelper(int n,long a,long b){if(n==0)return;System.out.print(a+\" \");fibSeriesHelper(n-1,b,a+b);}"
    }
  },
  {
    "id": "p3-10",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 1 — Foundation of Recursion",
    "number": 10,
    "title": "Find sum of digits of a number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 101,
    "isExternalReference": false,
    "answer": {
      "problem": "Find sum of digits of a number recursively.",
      "thinking": "The last digit is n%10 and the remaining prefix is n/10.",
      "code": "static int digitSum(int n){n=Math.abs(n);if(n<10)return n;return n%10+digitSum(n/10);}"
    }
  },
  {
    "id": "p3-11",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 11,
    "title": "Count the number of digits in a number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 102,
    "isExternalReference": false,
    "answer": {
      "problem": "Count the number of digits in a number recursively.",
      "thinking": "Remove one digit per call until a single-digit number remains.",
      "code": "static int countDigits(int n){n=Math.abs(n);if(n<10)return 1;return 1+countDigits(n/10);}"
    }
  },
  {
    "id": "p3-12",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 12,
    "title": "Reverse a number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 103,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse a number recursively.",
      "thinking": "Carry the partially built reverse as an accumulator.",
      "code": "static int reverse(int n){return reverseHelper(Math.abs(n),0);} static int reverseHelper(int n,int rev){if(n==0)return rev;return reverseHelper(n/10,rev*10+n%10);}"
    }
  },
  {
    "id": "p3-13",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 13,
    "title": "Check if a number is a palindrome using recursion.",
    "language": "java",
    "difficulty": "Easy",
    "order": 104,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is a palindrome using recursion.",
      "thinking": "Compare symmetric characters and move both pointers toward the center.",
      "code": "static boolean palindrome(String s,int l,int r){if(l>=r)return true;if(s.charAt(l)!=s.charAt(r))return false;return palindrome(s,l+1,r-1);}"
    }
  },
  {
    "id": "p3-14",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 14,
    "title": "Find product of digits of a number recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 105,
    "isExternalReference": false,
    "answer": {
      "problem": "Find product of digits of a number recursively.",
      "thinking": "Multiply the last digit by the product of the remaining digits.",
      "code": "static long productDigits(int n){n=Math.abs(n);if(n<10)return n;return (n%10)*productDigits(n/10);}"
    }
  },
  {
    "id": "p3-15",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 15,
    "title": "Find GCD (HCF) of two numbers using Euclid’s algorithm recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 106,
    "isExternalReference": false,
    "answer": {
      "problem": "Find GCD (HCF) of two numbers using Euclid’s algorithm recursively.",
      "thinking": "This is Euclid’s recursive algorithm: gcd(a,b)=gcd(b,a mod b).",
      "code": "static int gcd(int a,int b){return b==0?Math.abs(a):gcd(b,a%b);}"
    }
  },
  {
    "id": "p3-16",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 16,
    "title": "Convert a number to binary recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 107,
    "isExternalReference": false,
    "answer": {
      "problem": "Convert a number to binary recursively.",
      "thinking": "Recursively process the higher bits first, then print the current remainder during unwinding.",
      "code": "static void toBinary(int n){if(n>1)toBinary(n/2);System.out.print(n%2);}"
    }
  },
  {
    "id": "p3-17",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 17,
    "title": "Print digits of a number in words recursively (e.g., 123 → “one two three”).",
    "language": "java",
    "difficulty": "Easy",
    "order": 108,
    "isExternalReference": false,
    "answer": {
      "problem": "Print digits of a number in words recursively (e.g., 123 → “one two three”).",
      "thinking": "Recurse on the prefix first so digits are printed from left to right.",
      "code": "static void words(int n){String[] w={\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\"};if(n<10){System.out.print(w[n]+\" \");return;}words(n/10);System.out.print(w[n%10]+\" \");}"
    }
  },
  {
    "id": "p3-18",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 18,
    "title": "Calculate the sum of first n even numbers recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 109,
    "isExternalReference": false,
    "answer": {
      "problem": "Calculate the sum of first n even numbers recursively.",
      "thinking": "The nth even number is 2n, so sum the current term with the sum of the smaller terms.",
      "code": "static long sumEven(int n){if(n==0)return 0;return 2L*n+sumEven(n-1);}"
    }
  },
  {
    "id": "p3-19",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 19,
    "title": "Calculate the sum of first n odd numbers recursively.",
    "language": "java",
    "difficulty": "Easy",
    "order": 110,
    "isExternalReference": false,
    "answer": {
      "problem": "Calculate the sum of first n odd numbers recursively.",
      "thinking": "The nth odd number is 2n−1.",
      "code": "static long sumOdd(int n){if(n==0)return 0;return 2L*n-1+sumOdd(n-1);}"
    }
  },
  {
    "id": "p3-20",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 2 — Number-based Recursive Thinking",
    "number": 20,
    "title": "Find nCr (Combination formula) recursively using Pascal’s relation.",
    "language": "java",
    "difficulty": "Easy",
    "order": 111,
    "isExternalReference": false,
    "answer": {
      "problem": "Find nCr (Combination formula) recursively using Pascal’s relation.",
      "thinking": "Pascal’s relation is C(n,r)=C(n−1,r−1)+C(n−1,r).",
      "code": "static int nCr(int n,int r){if(r==0||r==n)return 1;return nCr(n-1,r-1)+nCr(n-1,r);}"
    }
  },
  {
    "id": "p3-21",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 21,
    "title": "Print a line of n stars recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 112,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a line of n stars recursively.",
      "thinking": "Each recursive call prints one star until n reaches zero.",
      "code": "static void stars(int n){if(n==0)return;System.out.print(\"*\");stars(n-1);}"
    }
  },
  {
    "id": "p3-22",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 22,
    "title": "Print a square of stars recursively (n×n).",
    "language": "java",
    "difficulty": "Medium",
    "order": 113,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a square of stars recursively (n×n).",
      "thinking": "Use one recursive function for rows and another for the number of stars in each row.",
      "code": "static void square(int n,int row){if(row==n)return;stars(n);System.out.println();square(n,row+1);}"
    }
  },
  {
    "id": "p3-23",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 23,
    "title": "Print a triangle of stars recursively (top-down).",
    "language": "java",
    "difficulty": "Medium",
    "order": 114,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a triangle of stars recursively (top-down).",
      "thinking": "The row number also determines how many stars to print.",
      "code": "static void triangle(int row,int n){if(row>n)return;stars(row);System.out.println();triangle(row+1,n);}"
    }
  },
  {
    "id": "p3-24",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 24,
    "title": "Print a triangle of stars recursively (bottom-up).",
    "language": "java",
    "difficulty": "Medium",
    "order": 115,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a triangle of stars recursively (bottom-up).",
      "thinking": "Start from n stars and reduce the row size by one.",
      "code": "static void triangleDown(int row){if(row==0)return;stars(row);System.out.println();triangleDown(row-1);}"
    }
  },
  {
    "id": "p3-25",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 25,
    "title": "Print pattern of numbers recursively (1 to n each row).",
    "language": "java",
    "difficulty": "Medium",
    "order": 116,
    "isExternalReference": false,
    "answer": {
      "problem": "Print pattern of numbers recursively (1 to n each row).",
      "thinking": "Recursion controls both rows and the numbers within each row.",
      "code": "static void rowNumbers(int row,int n){if(row>n)return;printNums(1,row);System.out.println();rowNumbers(row+1,n);} static void printNums(int i,int row){if(i>row)return;System.out.print(i+\" \");printNums(i+1,row);}"
    }
  },
  {
    "id": "p3-26",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 26,
    "title": "Print reverse triangle pattern recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 117,
    "isExternalReference": false,
    "answer": {
      "problem": "Print reverse triangle pattern recursively.",
      "thinking": "For row r, print n−r+1 stars.",
      "code": "static void reverseTriangle(int row,int n){if(row>n)return;stars(n-row+1);System.out.println();reverseTriangle(row+1,n);}"
    }
  },
  {
    "id": "p3-27",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 27,
    "title": "Print multiplication table of n recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 118,
    "isExternalReference": false,
    "answer": {
      "problem": "Print multiplication table of n recursively.",
      "thinking": "Advance the multiplier recursively until 10.",
      "code": "static void table(int n,int i){if(i>10)return;System.out.println(n+\" x \"+i+\" = \"+n*i);table(n,i+1);}"
    }
  },
  {
    "id": "p3-28",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 28,
    "title": "Print numbers in increasing and decreasing order in same function.",
    "language": "java",
    "difficulty": "Medium",
    "order": 119,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers in increasing and decreasing order in same function.",
      "thinking": "Printing before and after the recursive call naturally creates increasing then decreasing output.",
      "code": "static void incDec(int i,int n){if(i>n)return;System.out.print(i+\" \");incDec(i+1,n);System.out.print(i+\" \");}"
    }
  },
  {
    "id": "p3-29",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 29,
    "title": "Print sum of series 1 + 2 + 3 + ... + n recursively and display each step.",
    "language": "java",
    "difficulty": "Medium",
    "order": 120,
    "isExternalReference": false,
    "answer": {
      "problem": "Print sum of series 1 + 2 + 3 + ... + n recursively and display each step.",
      "thinking": "The return value carries the partial sum back up while each step can display it.",
      "code": "static int series(int n){if(n==0)return 0;int prev=series(n-1);int cur=prev+n;System.out.println(cur);return cur;}"
    }
  },
  {
    "id": "p3-30",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 3 — Pattern & Printing Problems",
    "number": 30,
    "title": "Print pattern of characters (A, AB, ABC, ...) recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 121,
    "isExternalReference": false,
    "answer": {
      "problem": "Print pattern of characters (A, AB, ABC, ...) recursively.",
      "thinking": "For row n, print the first n alphabet characters.",
      "code": "static void chars(int n,int end){if(n>end)return;for(int c=0;c<n;c++)System.out.print((char)('A'+c));System.out.println();chars(n+1,end);}"
    }
  },
  {
    "id": "p3-31",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 31,
    "title": "Reverse a string using recursion.",
    "language": "java",
    "difficulty": "Medium",
    "order": 122,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse a string using recursion.",
      "thinking": "Take the last character first, then recursively append the remainder.",
      "code": "static String reverse(String s,int i){if(i<0)return \"\";return s.charAt(i)+reverse(s,i-1);}"
    }
  },
  {
    "id": "p3-32",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 32,
    "title": "Check if a string is palindrome using recursion.",
    "language": "java",
    "difficulty": "Medium",
    "order": 123,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a string is palindrome using recursion.",
      "thinking": "Mirror-comparison works exactly like the numeric palindrome check.",
      "code": "static boolean pal(String s,int l,int r){if(l>=r)return true;return s.charAt(l)==s.charAt(r)&&pal(s,l+1,r-1);}"
    }
  },
  {
    "id": "p3-33",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 33,
    "title": "Count vowels in a string recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 124,
    "isExternalReference": false,
    "answer": {
      "problem": "Count vowels in a string recursively.",
      "thinking": "Process one character per call and add 1 only when it is a vowel.",
      "code": "static int vowels(String s,int i){if(i==s.length())return 0;char c=Character.toLowerCase(s.charAt(i));return (\"aeiou\".indexOf(c)>=0?1:0)+vowels(s,i+1);}"
    }
  },
  {
    "id": "p3-34",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 34,
    "title": "Remove all spaces from a string recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 125,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove all spaces from a string recursively.",
      "thinking": "Return the current character unless it is a space, then recurse to the next index.",
      "code": "static String removeSpaces(String s,int i){if(i==s.length())return \"\";char c=s.charAt(i);return (c==' '?\"\":String.valueOf(c))+removeSpaces(s,i+1);}"
    }
  },
  {
    "id": "p3-35",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 35,
    "title": "Replace all occurrences of a character (say ‘a’ → ‘x’) recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 126,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace all occurrences of a character (say ‘a’ → ‘x’) recursively.",
      "thinking": "Transform one character at a time and concatenate the recursive result.",
      "code": "static String replace(String s,int i,char from,char to){if(i==s.length())return \"\";char c=s.charAt(i)==from?to:s.charAt(i);return c+replace(s,i+1,from,to);}"
    }
  },
  {
    "id": "p3-36",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 36,
    "title": "Remove all occurrences of a character from a string recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 127,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove all occurrences of a character from a string recursively.",
      "thinking": "Skip the target character and keep all others.",
      "code": "static String removeChar(String s,int i,char target){if(i==s.length())return \"\";char c=s.charAt(i);return (c==target?\"\":String.valueOf(c))+removeChar(s,i+1,target);}"
    }
  },
  {
    "id": "p3-37",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 37,
    "title": "Print all characters of a string one by one recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 128,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all characters of a string one by one recursively.",
      "thinking": "The index is the state of the recursive process.",
      "code": "static void printChars(String s,int i){if(i==s.length())return;System.out.println(s.charAt(i));printChars(s,i+1);}"
    }
  },
  {
    "id": "p3-38",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 38,
    "title": "Print the string in reverse order recursively (without using loops).",
    "language": "java",
    "difficulty": "Medium",
    "order": 129,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the string in reverse order recursively (without using loops).",
      "thinking": "Start at the last index and move backward recursively.",
      "code": "static void printReverse(String s,int i){if(i<0)return;System.out.print(s.charAt(i));printReverse(s,i-1);}"
    }
  },
  {
    "id": "p3-39",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 39,
    "title": "Convert a string to uppercase recursively.",
    "language": "java",
    "difficulty": "Medium",
    "order": 130,
    "isExternalReference": false,
    "answer": {
      "problem": "Convert a string to uppercase recursively.",
      "thinking": "Convert one character at a time while preserving the original order.",
      "code": "static String upper(String s,int i){if(i==s.length())return \"\";return Character.toUpperCase(s.charAt(i))+upper(s,i+1);}"
    }
  },
  {
    "id": "p3-40",
    "phaseId": "p3",
    "phaseName": "Recursion",
    "section": "Level 4 — String-based Recursion",
    "number": 40,
    "title": "Count consonants and vowels separately using recursion.",
    "language": "java",
    "difficulty": "Medium",
    "order": 131,
    "isExternalReference": false,
    "answer": {
      "problem": "Count consonants and vowels separately using recursion.",
      "thinking": "Return vowel/consonant counts from the remaining suffix and update them for the current character.",
      "code": "static int[] countVC(String s,int i){if(i==s.length())return new int[]{0,0};int[] r=countVC(s,i+1);char c=Character.toLowerCase(s.charAt(i));if(c>='a'&&c<='z'){if(\"aeiou\".indexOf(c)>=0)r[0]++;else r[1]++;}return r;}"
    }
  },
  {
    "id": "p4-1",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 1,
    "title": "Input n and take n integers into an array; print them.",
    "language": "java",
    "difficulty": "Easy",
    "order": 132,
    "isExternalReference": false,
    "answer": {
      "problem": "Input n and take n integers into an array; print them.",
      "thinking": "Traverse the array once and print each element.",
      "code": "int[] a={1,2,3,4}; for(int x:a) System.out.print(x+\" \");"
    }
  },
  {
    "id": "p4-2",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 2,
    "title": "Find the sum of all elements in an array.",
    "language": "java",
    "difficulty": "Easy",
    "order": 133,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of all elements in an array.",
      "thinking": "Maintain a running sum during traversal.",
      "code": "int[] a={1,2,3,4}; int sum=0; for(int x:a)sum+=x; System.out.println(sum);"
    }
  },
  {
    "id": "p4-3",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 3,
    "title": "Find the average of array elements.",
    "language": "java",
    "difficulty": "Easy",
    "order": 134,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the average of array elements.",
      "thinking": "Average is total sum divided by the number of elements.",
      "code": "int[] a={1,2,3,4}; int sum=0; for(int x:a)sum+=x; double avg=(double)sum/a.length; System.out.println(avg);"
    }
  },
  {
    "id": "p4-4",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 4,
    "title": "Find the maximum element in an array.",
    "language": "java",
    "difficulty": "Easy",
    "order": 135,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the maximum element in an array.",
      "thinking": "Start with the first element as the current maximum and update when a larger value is found.",
      "code": "int[] a={4,9,2,7}; int max=a[0]; for(int x:a)max=Math.max(max,x); System.out.println(max);"
    }
  },
  {
    "id": "p4-5",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 5,
    "title": "Find the minimum element in an array.",
    "language": "java",
    "difficulty": "Easy",
    "order": 136,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the minimum element in an array.",
      "thinking": "Same traversal idea, maintaining the current minimum.",
      "code": "int[] a={4,9,2,7}; int min=a[0]; for(int x:a)min=Math.min(min,x); System.out.println(min);"
    }
  },
  {
    "id": "p4-6",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 6,
    "title": "Count how many elements are positive, negative, or zero.",
    "language": "java",
    "difficulty": "Easy",
    "order": 137,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are positive, negative, or zero.",
      "thinking": "Each element belongs to exactly one of the three sign categories.",
      "code": "int[] a={-2,0,4,-7,3};int p=0,n=0,z=0;for(int x:a)if(x>0)p++;else if(x<0)n++;else z++;System.out.println(p+\" \"+n+\" \"+z);"
    }
  },
  {
    "id": "p4-7",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 7,
    "title": "Count how many elements are even and odd.",
    "language": "java",
    "difficulty": "Easy",
    "order": 138,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are even and odd.",
      "thinking": "Classify each value by parity.",
      "code": "int[] a={1,2,3,4,5};int e=0,o=0;for(int x:a)if(x%2==0)e++;else o++;System.out.println(e+\" \"+o);"
    }
  },
  {
    "id": "p4-8",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 8,
    "title": "Find the index of the maximum element.",
    "language": "java",
    "difficulty": "Easy",
    "order": 139,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the index of the maximum element.",
      "thinking": "Store the index of the best candidate instead of the value itself.",
      "code": "int[] a={4,9,2,7};int idx=0;for(int i=1;i<a.length;i++)if(a[i]>a[idx])idx=i;System.out.println(idx);"
    }
  },
  {
    "id": "p4-9",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 9,
    "title": "Find the index of the minimum element.",
    "language": "java",
    "difficulty": "Easy",
    "order": 140,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the index of the minimum element.",
      "thinking": "Same idea as maximum index, but compare for smaller values.",
      "code": "int[] a={4,9,2,7};int idx=0;for(int i=1;i<a.length;i++)if(a[i]<a[idx])idx=i;System.out.println(idx);"
    }
  },
  {
    "id": "p4-10",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 1 — Fundamentals of Arrays",
    "number": 10,
    "title": "Take n elements and print only those greater than a given value k.",
    "language": "java",
    "difficulty": "Easy",
    "order": 141,
    "isExternalReference": false,
    "answer": {
      "problem": "Take n elements and print only those greater than a given value k.",
      "thinking": "Traverse once and print only values greater than k.",
      "code": "int[] a={2,7,4,9,1};int k=5;for(int x:a)if(x>k)System.out.print(x+\" \");"
    }
  },
  {
    "id": "p4-11",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 11,
    "title": "Input an element x — check if it exists in the array.",
    "language": "java",
    "difficulty": "Easy",
    "order": 142,
    "isExternalReference": false,
    "answer": {
      "problem": "Input an element x — check if it exists in the array.",
      "thinking": "Linear search checks each element until the target is found.",
      "code": "int[] a={3,5,7};int x=5;boolean found=false;for(int v:a)if(v==x){found=true;break;}System.out.println(found);"
    }
  },
  {
    "id": "p4-12",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 12,
    "title": "Count how many times a given element appears.",
    "language": "java",
    "difficulty": "Easy",
    "order": 143,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many times a given element appears.",
      "thinking": "Increment the counter whenever the current element equals the target.",
      "code": "int[] a={2,3,2,4,2};int x=2,c=0;for(int v:a)if(v==x)c++;System.out.println(c);"
    }
  },
  {
    "id": "p4-13",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 13,
    "title": "Find the first occurrence of a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 144,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the first occurrence of a given number.",
      "thinking": "Scan from left to right and stop at the first match.",
      "code": "int[] a={2,5,2,7};int x=2,idx=-1;for(int i=0;i<a.length;i++)if(a[i]==x){idx=i;break;}System.out.println(idx);"
    }
  },
  {
    "id": "p4-14",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 14,
    "title": "Find the last occurrence of a given number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 145,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the last occurrence of a given number.",
      "thinking": "Do not break; every matching index replaces the previous one, leaving the last occurrence.",
      "code": "int[] a={2,5,2,7};int x=2,idx=-1;for(int i=0;i<a.length;i++)if(a[i]==x)idx=i;System.out.println(idx);"
    }
  },
  {
    "id": "p4-15",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 15,
    "title": "Check if all elements in an array are unique.",
    "language": "java",
    "difficulty": "Easy",
    "order": 146,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if all elements in an array are unique.",
      "thinking": "Compare every pair once. Any equal pair means the array is not unique.",
      "code": "int[] a={1,2,3,4};boolean unique=true;for(int i=0;i<a.length;i++)for(int j=i+1;j<a.length;j++)if(a[i]==a[j])unique=false;System.out.println(unique);"
    }
  },
  {
    "id": "p4-16",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 16,
    "title": "Find the sum of even elements only.",
    "language": "java",
    "difficulty": "Easy",
    "order": 147,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of even elements only.",
      "thinking": "Add only even elements.",
      "code": "int[] a={1,2,3,4,5};int sum=0;for(int x:a)if(x%2==0)sum+=x;System.out.println(sum);"
    }
  },
  {
    "id": "p4-17",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 17,
    "title": "Find the sum of odd elements only.",
    "language": "java",
    "difficulty": "Easy",
    "order": 148,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of odd elements only.",
      "thinking": "Add only odd elements.",
      "code": "int[] a={1,2,3,4,5};int sum=0;for(int x:a)if(x%2!=0)sum+=x;System.out.println(sum);"
    }
  },
  {
    "id": "p4-18",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 18,
    "title": "Find the count of prime numbers in the array.",
    "language": "java",
    "difficulty": "Easy",
    "order": 149,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the count of prime numbers in the array.",
      "thinking": "For each element, perform a prime test up to its square root.",
      "code": "int[] a={2,3,4,5,11};int count=0;for(int x:a){if(x<2)continue;boolean p=true;for(int d=2;d*d<=x;d++)if(x%d==0){p=false;break;}if(p)count++;}System.out.println(count);"
    }
  },
  {
    "id": "p4-19",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 19,
    "title": "Count how many numbers are divisible by 3 and 5 both.",
    "language": "java",
    "difficulty": "Easy",
    "order": 150,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many numbers are divisible by 3 and 5 both.",
      "thinking": "Both divisibility conditions must be true.",
      "code": "int[] a={9,10,15,20,25};int count=0;for(int x:a)if(x%3==0&&x%5==0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p4-20",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 2 — Searching & Counting Logic",
    "number": 20,
    "title": "Count how many elements are perfect squares.",
    "language": "java",
    "difficulty": "Easy",
    "order": 151,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are perfect squares.",
      "thinking": "A nested loop checks whether an integer square exists for each element.",
      "code": "int[] a={1,4,9,10,16};int c=0;for(int x:a)for(int r=1;r*r<=x;r++)if(r*r==x){c++;break;}System.out.println(c);"
    }
  },
  {
    "id": "p4-21",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 21,
    "title": "Create a new array containing squares of all numbers.",
    "language": "java",
    "difficulty": "Medium",
    "order": 152,
    "isExternalReference": false,
    "answer": {
      "problem": "Create a new array containing squares of all numbers.",
      "thinking": "Create a second array and transform each element independently.",
      "code": "int[] a={1,2,3,4};int[] b=new int[a.length];for(int i=0;i<a.length;i++)b[i]=a[i]*a[i];"
    }
  },
  {
    "id": "p4-22",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 22,
    "title": "Create a new array containing only even elements.",
    "language": "java",
    "difficulty": "Medium",
    "order": 153,
    "isExternalReference": false,
    "answer": {
      "problem": "Create a new array containing only even elements.",
      "thinking": "First count how many even values there are, then fill an appropriately sized result array.",
      "code": "int[] a={1,2,3,4,5};int count=0;for(int x:a)if(x%2==0)count++;int[] b=new int[count];int j=0;for(int x:a)if(x%2==0)b[j++]=x;"
    }
  },
  {
    "id": "p4-23",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 23,
    "title": "Replace every negative number with 0.",
    "language": "java",
    "difficulty": "Medium",
    "order": 154,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace every negative number with 0.",
      "thinking": "Traverse the array and replace every negative value in place.",
      "code": "int[] a={-2,4,-1,7};for(int i=0;i<a.length;i++)if(a[i]<0)a[i]=0;"
    }
  },
  {
    "id": "p4-24",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 24,
    "title": "Replace all even numbers with 1 and all odd with 0.",
    "language": "java",
    "difficulty": "Medium",
    "order": 155,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace all even numbers with 1 and all odd with 0.",
      "thinking": "Map even values to 1 and odd values to 0.",
      "code": "int[] a={1,2,3,4};for(int i=0;i<a.length;i++)a[i]=(a[i]%2==0?1:0);"
    }
  },
  {
    "id": "p4-25",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 25,
    "title": "Swap the first and last elements of the array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 156,
    "isExternalReference": false,
    "answer": {
      "problem": "Swap the first and last elements of the array.",
      "thinking": "A temporary variable preserves one value while the two positions are swapped.",
      "code": "int[] a={1,2,3,4};int t=a[0];a[0]=a[a.length-1];a[a.length-1]=t;"
    }
  },
  {
    "id": "p4-26",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 26,
    "title": "Reverse an array (without using built-in reverse).",
    "language": "java",
    "difficulty": "Medium",
    "order": 157,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse an array (without using built-in reverse).",
      "thinking": "Use two pointers moving toward the center and swap symmetric elements.",
      "code": "int[] a={1,2,3,4,5};for(int l=0,r=a.length-1;l<r;l++,r--){int t=a[l];a[l]=a[r];a[r]=t;}"
    }
  },
  {
    "id": "p4-27",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 27,
    "title": "Rotate an array by one position to the left.",
    "language": "java",
    "difficulty": "Medium",
    "order": 158,
    "isExternalReference": false,
    "answer": {
      "problem": "Rotate an array by one position to the left.",
      "thinking": "Save the first element, shift the remaining elements left, then place the saved value at the end.",
      "code": "int[] a={1,2,3,4};int first=a[0];for(int i=0;i<a.length-1;i++)a[i]=a[i+1];a[a.length-1]=first;"
    }
  },
  {
    "id": "p4-28",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 28,
    "title": "Rotate an array by one position to the right.",
    "language": "java",
    "difficulty": "Medium",
    "order": 159,
    "isExternalReference": false,
    "answer": {
      "problem": "Rotate an array by one position to the right.",
      "thinking": "Save the last element, shift right, and place it at index 0.",
      "code": "int[] a={1,2,3,4};int last=a[a.length-1];for(int i=a.length-1;i>0;i--)a[i]=a[i-1];a[0]=last;"
    }
  },
  {
    "id": "p4-29",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 29,
    "title": "Swap alternate elements (1st ↔ 2nd, 3rd ↔ 4th, etc.).",
    "language": "java",
    "difficulty": "Medium",
    "order": 160,
    "isExternalReference": false,
    "answer": {
      "problem": "Swap alternate elements (1st ↔ 2nd, 3rd ↔ 4th, etc.).",
      "thinking": "Advance by two positions and swap each adjacent pair.",
      "code": "int[] a={1,2,3,4,5};for(int i=0;i+1<a.length;i+=2){int t=a[i];a[i]=a[i+1];a[i+1]=t;}"
    }
  },
  {
    "id": "p4-30",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 3 — Transformation & Manipulation",
    "number": 30,
    "title": "Copy one array to another manually.",
    "language": "java",
    "difficulty": "Medium",
    "order": 161,
    "isExternalReference": false,
    "answer": {
      "problem": "Copy one array to another manually.",
      "thinking": "Copy the first array, then place the second array immediately after it.",
      "code": "int[] a={1,2,3},b={4,5};int[] c=new int[a.length+b.length];for(int i=0;i<a.length;i++)c[i]=a[i];for(int i=0;i<b.length;i++)c[a.length+i]=b[i];"
    }
  },
  {
    "id": "p4-31",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 31,
    "title": "Compare two arrays — check if they are equal (same elements & order).",
    "language": "java",
    "difficulty": "Medium",
    "order": 162,
    "isExternalReference": false,
    "answer": {
      "problem": "Compare two arrays — check if they are equal (same elements & order).",
      "thinking": "Equal arrays require equal length and equality at every corresponding index.",
      "code": "int[] a={1,2,3},b={1,2,3};boolean same=a.length==b.length;for(int i=0;i<a.length&&same;i++)if(a[i]!=b[i])same=false;System.out.println(same);"
    }
  },
  {
    "id": "p4-32",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 32,
    "title": "Compare two arrays — check if they contain the same elements (ignore order).",
    "language": "java",
    "difficulty": "Medium",
    "order": 163,
    "isExternalReference": false,
    "answer": {
      "problem": "Compare two arrays — check if they contain the same elements (ignore order).",
      "thinking": "To ignore order, sort both arrays and compare them element by element.",
      "code": "int[] a={3,1,2},b={1,2,3};Arrays.sort(a);Arrays.sort(b);System.out.println(Arrays.equals(a,b));"
    }
  },
  {
    "id": "p4-33",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 33,
    "title": "Merge two arrays into a third array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 164,
    "isExternalReference": false,
    "answer": {
      "problem": "Merge two arrays into a third array.",
      "thinking": "A merged array has enough space for both inputs and copies them in sequence.",
      "code": "int[] a={1,2},b={3,4};int[] c=new int[a.length+b.length];System.arraycopy(a,0,c,0,a.length);System.arraycopy(b,0,c,a.length,b.length);"
    }
  },
  {
    "id": "p4-34",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 34,
    "title": "Find the common elements between two arrays.",
    "language": "java",
    "difficulty": "Medium",
    "order": 165,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the common elements between two arrays.",
      "thinking": "For each element of the first array, search the second array for a match.",
      "code": "int[] a={1,2,3,4},b={3,4,5};for(int x:a){for(int y:b)if(x==y){System.out.print(x+\" \");break;}}"
    }
  },
  {
    "id": "p4-35",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 35,
    "title": "Find elements that are in one array but not in the other.",
    "language": "java",
    "difficulty": "Medium",
    "order": 166,
    "isExternalReference": false,
    "answer": {
      "problem": "Find elements that are in one array but not in the other.",
      "thinking": "For each value in the first array, print it only when no equal value exists in the second.",
      "code": "int[] a={1,2,3},b={2,4};for(int x:a){boolean found=false;for(int y:b)if(x==y){found=true;break;}if(!found)System.out.print(x+\" \");}"
    }
  },
  {
    "id": "p4-36",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 36,
    "title": "Count how many elements are common between two arrays.",
    "language": "java",
    "difficulty": "Medium",
    "order": 167,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are common between two arrays.",
      "thinking": "Count each element of the first array that has at least one match in the second.",
      "code": "int[] a={1,2,3,4},b={3,4,5};int count=0;for(int x:a)for(int y:b)if(x==y){count++;break;}System.out.println(count);"
    }
  },
  {
    "id": "p4-37",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 37,
    "title": "Find element-wise sum of two arrays (A[i] + B[i]).",
    "language": "java",
    "difficulty": "Medium",
    "order": 168,
    "isExternalReference": false,
    "answer": {
      "problem": "Find element-wise sum of two arrays (A[i] + B[i]).",
      "thinking": "Element-wise sum uses the same index in both arrays.",
      "code": "int[] a={1,2,3},b={4,5,6};int[] c=new int[a.length];for(int i=0;i<a.length;i++)c[i]=a[i]+b[i];"
    }
  },
  {
    "id": "p4-38",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 38,
    "title": "Find element-wise product of two arrays.",
    "language": "java",
    "difficulty": "Medium",
    "order": 169,
    "isExternalReference": false,
    "answer": {
      "problem": "Find element-wise product of two arrays.",
      "thinking": "Element-wise product also combines matching indices.",
      "code": "int[] a={1,2,3},b={4,5,6};int[] c=new int[a.length];for(int i=0;i<a.length;i++)c[i]=a[i]*b[i];"
    }
  },
  {
    "id": "p4-39",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 39,
    "title": "Create a frequency array of numbers (count occurrence of each number).",
    "language": "java",
    "difficulty": "Medium",
    "order": 170,
    "isExternalReference": false,
    "answer": {
      "problem": "Create a frequency array of numbers (count occurrence of each number).",
      "thinking": "Use the value as an index when the input range permits it. For arbitrary values, a map would normally be used, but the PDF specifically asks for a frequency array.",
      "code": "int[] a={1,2,2,3,3,3};int[] freq=new int[10];for(int x:a)freq[x]++;"
    }
  },
  {
    "id": "p4-40",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 4 — Aggregate & Comparative Thinking",
    "number": 40,
    "title": "Print all elements that appear more than once.",
    "language": "java",
    "difficulty": "Medium",
    "order": 171,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all elements that appear more than once.",
      "thinking": "Print a value once when its total frequency is greater than one.",
      "code": "int[] a={1,2,2,3,3,3};for(int i=0;i<a.length;i++){boolean printed=false;for(int j=0;j<i;j++)if(a[i]==a[j])printed=true;if(!printed){int c=0;for(int x:a)if(x==a[i])c++;if(c>1)System.out.print(a[i]+\" \");}}"
    }
  },
  {
    "id": "p4-41",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 41,
    "title": "Check if the array is sorted in ascending order.",
    "language": "java",
    "difficulty": "Hard",
    "order": 172,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if the array is sorted in ascending order.",
      "thinking": "Ascending order means every element is at least the previous element.",
      "code": "int[] a={1,2,2,4};boolean ok=true;for(int i=1;i<a.length;i++)if(a[i]<a[i-1])ok=false;System.out.println(ok);"
    }
  },
  {
    "id": "p4-42",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 42,
    "title": "Check if the array is sorted in descending order.",
    "language": "java",
    "difficulty": "Hard",
    "order": 173,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if the array is sorted in descending order.",
      "thinking": "Descending order means every element is at most the previous element.",
      "code": "int[] a={4,3,3,1};boolean ok=true;for(int i=1;i<a.length;i++)if(a[i]>a[i-1])ok=false;System.out.println(ok);"
    }
  },
  {
    "id": "p4-43",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 43,
    "title": "Find the second largest element in an array.",
    "language": "java",
    "difficulty": "Hard",
    "order": 174,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the second largest element in an array.",
      "thinking": "Maintain the largest and second-largest distinct values in one pass.",
      "code": "int[] a={5,1,9,7};int first=Integer.MIN_VALUE,second=Integer.MIN_VALUE;for(int x:a){if(x>first){second=first;first=x;}else if(x>second&&x!=first)second=x;}System.out.println(second);"
    }
  },
  {
    "id": "p4-44",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 44,
    "title": "Find the second smallest element in an array.",
    "language": "java",
    "difficulty": "Hard",
    "order": 175,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the second smallest element in an array.",
      "thinking": "Maintain the smallest and second-smallest distinct values in one pass.",
      "code": "int[] a={5,1,9,7};int first=Integer.MAX_VALUE,second=Integer.MAX_VALUE;for(int x:a){if(x<first){second=first;first=x;}else if(x<second&&x!=first)second=x;}System.out.println(second);"
    }
  },
  {
    "id": "p4-45",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 45,
    "title": "Find the difference between the largest and smallest element.",
    "language": "java",
    "difficulty": "Hard",
    "order": 176,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the difference between the largest and smallest element.",
      "thinking": "Find both extremes, then subtract the minimum from the maximum.",
      "code": "int[] a={5,1,9,7};int min=a[0],max=a[0];for(int x:a){min=Math.min(min,x);max=Math.max(max,x);}System.out.println(max-min);"
    }
  },
  {
    "id": "p4-46",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 46,
    "title": "Find the sum of all elements except the largest and smallest.",
    "language": "java",
    "difficulty": "Hard",
    "order": 177,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of all elements except the largest and smallest.",
      "thinking": "Total sum minus the largest and smallest leaves all other elements.",
      "code": "int[] a={1,5,2,4,9};int min=a[0],max=a[0],sum=0;for(int x:a){sum+=x;min=Math.min(min,x);max=Math.max(max,x);}System.out.println(sum-min-max);"
    }
  },
  {
    "id": "p4-47",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 47,
    "title": "Count how many pairs of elements have a sum equal to a given number k.",
    "language": "java",
    "difficulty": "Hard",
    "order": 178,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many pairs of elements have a sum equal to a given number k.",
      "thinking": "Check each unordered pair once by starting j at i+1.",
      "code": "int[] a={1,2,3,4,5};int k=6,count=0;for(int i=0;i<a.length;i++)for(int j=i+1;j<a.length;j++)if(a[i]+a[j]==k)count++;System.out.println(count);"
    }
  },
  {
    "id": "p4-48",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 48,
    "title": "Count how many elements are greater than the average of the array.",
    "language": "java",
    "difficulty": "Hard",
    "order": 179,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are greater than the average of the array.",
      "thinking": "Compute the average first, then make a second pass to count values above it.",
      "code": "int[] a={1,2,3,10};double sum=0;for(int x:a)sum+=x;double avg=sum/a.length;int count=0;for(int x:a)if(x>avg)count++;System.out.println(count);"
    }
  },
  {
    "id": "p4-49",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 49,
    "title": "Print the frequency of each distinct element.",
    "language": "java",
    "difficulty": "Hard",
    "order": 180,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the frequency of each distinct element.",
      "thinking": "For every first occurrence, count the complete frequency and print it.",
      "code": "int[] a={1,2,2,3,3,3};for(int i=0;i<a.length;i++){boolean seen=false;for(int j=0;j<i;j++)if(a[i]==a[j])seen=true;if(!seen){int c=0;for(int x:a)if(x==a[i])c++;System.out.println(a[i]+\" -> \"+c);}}"
    }
  },
  {
    "id": "p4-50",
    "phaseId": "p4",
    "phaseName": "Basic Arrays",
    "section": "Level 5 — Logical & Applied Array Problems",
    "number": 50,
    "title": "Print all unique elements (those that occur exactly once).",
    "language": "java",
    "difficulty": "Hard",
    "order": 181,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all unique elements (those that occur exactly once).",
      "thinking": "An element is unique when its full-array frequency is exactly one.",
      "code": "int[] a={1,2,2,3,4,4};for(int i=0;i<a.length;i++){int c=0;for(int x:a)if(x==a[i])c++;if(c==1)System.out.print(a[i]+\" \");}"
    }
  },
  {
    "id": "p5-1",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 1,
    "title": "Take a string input and print its length.",
    "language": "java",
    "difficulty": "Easy",
    "order": 182,
    "isExternalReference": false,
    "answer": {
      "problem": "Take a string input and print its length.",
      "thinking": "String.length() returns the number of UTF-16 code units; for basic ASCII practice it equals the character count.",
      "code": "String s=\"hello\";System.out.println(s.length());"
    }
  },
  {
    "id": "p5-2",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 2,
    "title": "Print the first and last character of a string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 183,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the first and last character of a string.",
      "thinking": "Index 0 is the first character and length−1 is the last.",
      "code": "String s=\"hello\";System.out.println(s.charAt(0)+\" \"+s.charAt(s.length()-1));"
    }
  },
  {
    "id": "p5-3",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 3,
    "title": "Convert all characters of a string to uppercase.",
    "language": "java",
    "difficulty": "Easy",
    "order": 184,
    "isExternalReference": false,
    "answer": {
      "problem": "Convert all characters of a string to uppercase.",
      "thinking": "Use the standard String uppercase transformation.",
      "code": "String s=\"Hello World\";System.out.println(s.toUpperCase());"
    }
  },
  {
    "id": "p5-4",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 4,
    "title": "Convert all characters of a string to lowercase.",
    "language": "java",
    "difficulty": "Easy",
    "order": 185,
    "isExternalReference": false,
    "answer": {
      "problem": "Convert all characters of a string to lowercase.",
      "thinking": "Use the standard String lowercase transformation.",
      "code": "String s=\"Hello World\";System.out.println(s.toLowerCase());"
    }
  },
  {
    "id": "p5-5",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 5,
    "title": "Count how many characters (excluding spaces) are in the string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 186,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many characters (excluding spaces) are in the string.",
      "thinking": "Traverse characters and exclude spaces from the count.",
      "code": "String s=\"a b c\";int count=0;for(char c:s.toCharArray())if(c!=' ')count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-6",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 6,
    "title": "Count how many words are in a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 187,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many words are in a sentence.",
      "thinking": "Normalize whitespace boundaries, then count the resulting words.",
      "code": "String s=\"Java is fun\";String trimmed=s.trim();int words=trimmed.isEmpty()?0:trimmed.split(\"\\\\s+\").length;System.out.println(words);"
    }
  },
  {
    "id": "p5-7",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 7,
    "title": "Take two strings and print them concatenated.",
    "language": "java",
    "difficulty": "Easy",
    "order": 188,
    "isExternalReference": false,
    "answer": {
      "problem": "Take two strings and print them concatenated.",
      "thinking": "The + operator concatenates strings.",
      "code": "String a=\"Hello\",b=\"Java\";System.out.println(a+b);"
    }
  },
  {
    "id": "p5-8",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 8,
    "title": "Compare two strings lexicographically (like dictionary order).",
    "language": "java",
    "difficulty": "Easy",
    "order": 189,
    "isExternalReference": false,
    "answer": {
      "problem": "Compare two strings lexicographically (like dictionary order).",
      "thinking": "compareTo gives a negative, zero, or positive result according to lexicographic order.",
      "code": "String a=\"apple\",b=\"banana\";System.out.println(a.compareTo(b));"
    }
  },
  {
    "id": "p5-9",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 9,
    "title": "Print the ASCII value of each character in a string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 190,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the ASCII value of each character in a string.",
      "thinking": "Casting a char to int exposes its numeric character code.",
      "code": "String s=\"ABC\";for(char c:s.toCharArray())System.out.println((int)c);"
    }
  },
  {
    "id": "p5-10",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 1 — Basic String Handling",
    "number": 10,
    "title": "Check whether the string is empty or not.",
    "language": "java",
    "difficulty": "Easy",
    "order": 191,
    "isExternalReference": false,
    "answer": {
      "problem": "Check whether the string is empty or not.",
      "thinking": "String.isEmpty() is true when the length is zero.",
      "code": "String s=\"\";System.out.println(s.isEmpty());"
    }
  },
  {
    "id": "p5-11",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 11,
    "title": "Count how many vowels and consonants are in a string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 192,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many vowels and consonants are in a string.",
      "thinking": "Classify letters as vowels or consonants and ignore spaces/nonletters.",
      "code": "String s=\"Hello World\";int v=0,c=0;for(char ch:s.toLowerCase().toCharArray()){if(ch>='a'&&ch<='z'){if(\"aeiou\".indexOf(ch)>=0)v++;else c++;}}System.out.println(v+\" \"+c);"
    }
  },
  {
    "id": "p5-12",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 12,
    "title": "Count the number of digits, letters, and special characters in a string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 193,
    "isExternalReference": false,
    "answer": {
      "problem": "Count the number of digits, letters, and special characters in a string.",
      "thinking": "Character category methods make the three-way classification direct.",
      "code": "String s=\"A1@b2\";int d=0,l=0,sp=0;for(char ch:s.toCharArray())if(Character.isDigit(ch))d++;else if(Character.isLetter(ch))l++;else sp++;System.out.println(d+\" \"+l+\" \"+sp);"
    }
  },
  {
    "id": "p5-13",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 13,
    "title": "Count how many uppercase and lowercase letters a string has.",
    "language": "java",
    "difficulty": "Easy",
    "order": 194,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many uppercase and lowercase letters a string has.",
      "thinking": "Count uppercase and lowercase letters separately.",
      "code": "String s=\"AaBb123\";int u=0,l=0;for(char ch:s.toCharArray())if(Character.isUpperCase(ch))u++;else if(Character.isLowerCase(ch))l++;System.out.println(u+\" \"+l);"
    }
  },
  {
    "id": "p5-14",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 14,
    "title": "Find the frequency of each character in a string (without using a map).",
    "language": "java",
    "difficulty": "Easy",
    "order": 195,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the frequency of each character in a string (without using a map).",
      "thinking": "An array indexed by character code avoids a map, matching the PDF requirement.",
      "code": "String s=\"banana\";int[] f=new int[256];for(char ch:s.toCharArray())f[ch]++;for(int i=0;i<f.length;i++)if(f[i]>0)System.out.println((char)i+\" -> \"+f[i]);"
    }
  },
  {
    "id": "p5-15",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 15,
    "title": "Count how many spaces are there in a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 196,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many spaces are there in a sentence.",
      "thinking": "Count only the space character.",
      "code": "String s=\"one two three\";int spaces=0;for(char ch:s.toCharArray())if(ch==' ')spaces++;System.out.println(spaces);"
    }
  },
  {
    "id": "p5-16",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 16,
    "title": "Count how many times a given character appears in a string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 197,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many times a given character appears in a string.",
      "thinking": "Increment the counter whenever the current character equals the target.",
      "code": "String s=\"banana\";char target='a';int count=0;for(char ch:s.toCharArray())if(ch==target)count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-17",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 17,
    "title": "Count how many alphabets are before ‘m’ and after ‘m’ in a given string.",
    "language": "java",
    "difficulty": "Easy",
    "order": 198,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many alphabets are before ‘m’ and after ‘m’ in a given string.",
      "thinking": "Compare each alphabetic character with 'm'. The character 'm' itself belongs to neither side in the PDF wording.",
      "code": "String s=\"abcdefghz\";int before=0,after=0;for(char ch:s.toLowerCase().toCharArray())if(ch>='a'&&ch<'m')before++;else if(ch>'m'&&ch<='z')after++;System.out.println(before+\" \"+after);"
    }
  },
  {
    "id": "p5-18",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 18,
    "title": "Count how many substrings start and end with the same character (simple logic).",
    "language": "java",
    "difficulty": "Easy",
    "order": 199,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many substrings start and end with the same character (simple logic).",
      "thinking": "Every pair of start/end positions defines one substring. Count pairs whose boundary characters match.",
      "code": "String s=\"abca\";int count=0;for(int i=0;i<s.length();i++)for(int j=i;j<s.length();j++)if(s.charAt(i)==s.charAt(j))count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-19",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 19,
    "title": "Print how many words start with a vowel in a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 200,
    "isExternalReference": false,
    "answer": {
      "problem": "Print how many words start with a vowel in a sentence.",
      "thinking": "Split the sentence into words and inspect each first character.",
      "code": "String s=\"Alice is awesome\";int count=0;for(String w:s.split(\"\\\\s+\"))if(\"aeiouAEIOU\".indexOf(w.charAt(0))>=0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-20",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 2 — Counting & Character Analysis",
    "number": 20,
    "title": "Count how many words end with ‘s’.",
    "language": "java",
    "difficulty": "Easy",
    "order": 201,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many words end with ‘s’.",
      "thinking": "Check the final character of each word.",
      "code": "String s=\"dogs cats bus\";int count=0;for(String w:s.split(\"\\\\s+\"))if(w.endsWith(\"s\"))count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-21",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 21,
    "title": "Reverse a string without using built-in reverse.",
    "language": "java",
    "difficulty": "Medium",
    "order": 202,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse a string without using built-in reverse.",
      "thinking": "Traverse from the last index to the first.",
      "code": "String s=\"hello\";StringBuilder r=new StringBuilder();for(int i=s.length()-1;i>=0;i--)r.append(s.charAt(i));System.out.println(r);"
    }
  },
  {
    "id": "p5-22",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 22,
    "title": "Reverse each word in a sentence.",
    "language": "java",
    "difficulty": "Medium",
    "order": 203,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse each word in a sentence.",
      "thinking": "Split into words, reverse each word independently, and rebuild the sentence.",
      "code": "String s=\"Java is fun\";StringBuilder out=new StringBuilder();for(String w:s.split(\" \")){for(int i=w.length()-1;i>=0;i--)out.append(w.charAt(i));out.append(' ');}System.out.println(out.toString().trim());"
    }
  },
  {
    "id": "p5-23",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 23,
    "title": "Reverse the order of words in a sentence.",
    "language": "java",
    "difficulty": "Medium",
    "order": 204,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse the order of words in a sentence.",
      "thinking": "Print the words from the final index back to the first.",
      "code": "String s=\"Java is fun\";String[] w=s.split(\"\\\\s+\");for(int i=w.length-1;i>=0;i--)System.out.print(w[i]+\" \");"
    }
  },
  {
    "id": "p5-24",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 24,
    "title": "Check whether a string is a palindrome.",
    "language": "java",
    "difficulty": "Medium",
    "order": 205,
    "isExternalReference": false,
    "answer": {
      "problem": "Check whether a string is a palindrome.",
      "thinking": "Use two pointers to compare mirrored characters.",
      "code": "String s=\"level\";boolean ok=true;for(int l=0,r=s.length()-1;l<r;l++,r--)if(s.charAt(l)!=s.charAt(r))ok=false;System.out.println(ok);"
    }
  },
  {
    "id": "p5-25",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 25,
    "title": "Check if two strings are the reverse of each other.",
    "language": "java",
    "difficulty": "Medium",
    "order": 206,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if two strings are the reverse of each other.",
      "thinking": "Character i in the first string must equal character length−1−i in the second.",
      "code": "String a=\"abc\",b=\"cba\";boolean same=a.length()==b.length();for(int i=0;i<a.length()&&same;i++)if(a.charAt(i)!=b.charAt(b.length()-1-i))same=false;System.out.println(same);"
    }
  },
  {
    "id": "p5-26",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 26,
    "title": "Print the middle character(s) of a string.",
    "language": "java",
    "difficulty": "Medium",
    "order": 207,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the middle character(s) of a string.",
      "thinking": "Odd-length strings have one center; even-length strings have two middle characters.",
      "code": "String s=\"abcd\";int n=s.length();if(n%2==1)System.out.println(s.charAt(n/2));else System.out.println(s.substring(n/2-1,n/2+1));"
    }
  },
  {
    "id": "p5-27",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 27,
    "title": "Print the second half of the string in reverse.",
    "language": "java",
    "difficulty": "Medium",
    "order": 208,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the second half of the string in reverse.",
      "thinking": "Start at the final character of the second half and move backward to the midpoint.",
      "code": "String s=\"abcdef\";for(int i=s.length()-1;i>=s.length()/2;i--)System.out.print(s.charAt(i));"
    }
  },
  {
    "id": "p5-28",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 28,
    "title": "Remove the first and last character and print the remaining string.",
    "language": "java",
    "difficulty": "Medium",
    "order": 209,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove the first and last character and print the remaining string.",
      "thinking": "Substring from index 1 to length−1 excludes the first and last characters.",
      "code": "String s=\"hello\";System.out.println(s.length()<=2?\"\":s.substring(1,s.length()-1));"
    }
  },
  {
    "id": "p5-29",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 29,
    "title": "Reverse only characters, keeping digits in place.",
    "language": "java",
    "difficulty": "Medium",
    "order": 210,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse only characters, keeping digits in place.",
      "thinking": "Use two pointers that stop only on characters eligible for reversal; digits remain in place.",
      "code": "String s=\"a1b2c3d\";char[] a=s.toCharArray();int l=0,r=a.length-1;while(l<r){while(l<r&&!Character.isLetter(a[l]))l++;while(l<r&&!Character.isLetter(a[r]))r--;if(l<r){char t=a[l];a[l]=a[r];a[r]=t;l++;r--;}}System.out.println(new String(a));"
    }
  },
  {
    "id": "p5-30",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 3 — Reversing & Palindromic Thinking",
    "number": 30,
    "title": "Reverse string but skip spaces.",
    "language": "java",
    "difficulty": "Medium",
    "order": 211,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse string but skip spaces.",
      "thinking": "Traverse backward and append only non-space characters.",
      "code": "String s=\"a b c\";StringBuilder r=new StringBuilder();for(int i=s.length()-1;i>=0;i--)if(s.charAt(i)!=' ')r.append(s.charAt(i));System.out.println(r);"
    }
  },
  {
    "id": "p5-31",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 31,
    "title": "Remove all vowels from a string.",
    "language": "java",
    "difficulty": "Medium",
    "order": 212,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove all vowels from a string.",
      "thinking": "Keep only characters that are not vowels.",
      "code": "String s=\"Education\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())if(\"aeiouAEIOU\".indexOf(c)<0)r.append(c);System.out.println(r);"
    }
  },
  {
    "id": "p5-32",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 32,
    "title": "Remove all spaces from a string.",
    "language": "java",
    "difficulty": "Medium",
    "order": 213,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove all spaces from a string.",
      "thinking": "Remove all spaces from the string.",
      "code": "String s=\"a b c\";System.out.println(s.replace(\" \",\"\"));"
    }
  },
  {
    "id": "p5-33",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 33,
    "title": "Replace all vowels with ‘*’.",
    "language": "java",
    "difficulty": "Medium",
    "order": 214,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace all vowels with ‘*’.",
      "thinking": "Replace each vowel while copying all other characters unchanged.",
      "code": "String s=\"education\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())r.append(\"aeiouAEIOU\".indexOf(c)>=0?'*':c);System.out.println(r);"
    }
  },
  {
    "id": "p5-34",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 34,
    "title": "Replace all spaces with ‘_’.",
    "language": "java",
    "difficulty": "Medium",
    "order": 215,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace all spaces with ‘_’.",
      "thinking": "Use replace to map every space to an underscore.",
      "code": "String s=\"a b c\";System.out.println(s.replace(' ','_'));"
    }
  },
  {
    "id": "p5-35",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 35,
    "title": "Print the string after removing all digits.",
    "language": "java",
    "difficulty": "Medium",
    "order": 216,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the string after removing all digits.",
      "thinking": "Skip digit characters while constructing the result.",
      "code": "String s=\"a1b2C3\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())if(!Character.isDigit(c))r.append(c);System.out.println(r);"
    }
  },
  {
    "id": "p5-36",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 36,
    "title": "Remove duplicate characters from a string.",
    "language": "java",
    "difficulty": "Medium",
    "order": 217,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove duplicate characters from a string.",
      "thinking": "Before appending a character, check whether it already exists in the result.",
      "code": "String s=\"banana\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())if(r.indexOf(String.valueOf(c))<0)r.append(c);System.out.println(r);"
    }
  },
  {
    "id": "p5-37",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 37,
    "title": "Keep only the first occurrence of each character.",
    "language": "java",
    "difficulty": "Medium",
    "order": 218,
    "isExternalReference": false,
    "answer": {
      "problem": "Keep only the first occurrence of each character.",
      "thinking": "Keeping only the first time a character is seen gives the same logic as removing duplicates.",
      "code": "String s=\"banana\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())if(r.indexOf(String.valueOf(c))<0)r.append(c);System.out.println(r);"
    }
  },
  {
    "id": "p5-38",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 38,
    "title": "Remove consecutive duplicate characters (e.g., “aaabb” → “ab”).",
    "language": "java",
    "difficulty": "Medium",
    "order": 219,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove consecutive duplicate characters (e.g., “aaabb” → “ab”).",
      "thinking": "Only consecutive duplicates are removed, so compare each character with the last character already written.",
      "code": "String s=\"aaabbcaaa\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())if(r.length()==0||r.charAt(r.length()-1)!=c)r.append(c);System.out.println(r);"
    }
  },
  {
    "id": "p5-39",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 39,
    "title": "Swap case: uppercase → lowercase and lowercase → uppercase.",
    "language": "java",
    "difficulty": "Medium",
    "order": 220,
    "isExternalReference": false,
    "answer": {
      "problem": "Swap case: uppercase → lowercase and lowercase → uppercase.",
      "thinking": "Flip only alphabetic case; digits and symbols remain unchanged.",
      "code": "String s=\"JaVa1\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())r.append(Character.isUpperCase(c)?Character.toLowerCase(c):Character.isLowerCase(c)?Character.toUpperCase(c):c);System.out.println(r);"
    }
  },
  {
    "id": "p5-40",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 4 — Character & Word Manipulation",
    "number": 40,
    "title": "Shift each character by 1 (e.g., “abc” → “bcd”).",
    "language": "java",
    "difficulty": "Medium",
    "order": 221,
    "isExternalReference": false,
    "answer": {
      "problem": "Shift each character by 1 (e.g., “abc” → “bcd”).",
      "thinking": "Shift the numeric character code by one.",
      "code": "String s=\"abc\";StringBuilder r=new StringBuilder();for(char c:s.toCharArray())r.append((char)(c+1));System.out.println(r);"
    }
  },
  {
    "id": "p5-41",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 41,
    "title": "Print each word of a sentence on a new line.",
    "language": "java",
    "difficulty": "Hard",
    "order": 222,
    "isExternalReference": false,
    "answer": {
      "problem": "Print each word of a sentence on a new line.",
      "thinking": "Split on whitespace and print each resulting word on a separate line.",
      "code": "String s=\"Java is fun\";for(String w:s.split(\"\\\\s+\"))System.out.println(w);"
    }
  },
  {
    "id": "p5-42",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 42,
    "title": "Count how many words have even length.",
    "language": "java",
    "difficulty": "Hard",
    "order": 223,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many words have even length.",
      "thinking": "Check the length of every word.",
      "code": "String s=\"one four three\";int count=0;for(String w:s.split(\"\\\\s+\"))if(w.length()%2==0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-43",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 43,
    "title": "Find the longest word in a sentence.",
    "language": "java",
    "difficulty": "Hard",
    "order": 224,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the longest word in a sentence.",
      "thinking": "Keep the word with the greatest length seen so far.",
      "code": "String s=\"Java is wonderful\";String best=\"\";for(String w:s.split(\"\\\\s+\"))if(w.length()>best.length())best=w;System.out.println(best);"
    }
  },
  {
    "id": "p5-44",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 44,
    "title": "Find the shortest word in a sentence.",
    "language": "java",
    "difficulty": "Hard",
    "order": 225,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the shortest word in a sentence.",
      "thinking": "Keep the shortest word as the current minimum.",
      "code": "String s=\"Java is fun\";String best=null;for(String w:s.split(\"\\\\s+\"))if(best==null||w.length()<best.length())best=w;System.out.println(best);"
    }
  },
  {
    "id": "p5-45",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 45,
    "title": "Swap first and last words in a sentence.",
    "language": "java",
    "difficulty": "Hard",
    "order": 226,
    "isExternalReference": false,
    "answer": {
      "problem": "Swap first and last words in a sentence.",
      "thinking": "Swap the first and last positions in the word array.",
      "code": "String s=\"one two three\";String[] w=s.split(\"\\\\s+\");String t=w[0];w[0]=w[w.length-1];w[w.length-1]=t;System.out.println(String.join(\" \",w));"
    }
  },
  {
    "id": "p5-46",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 46,
    "title": "Print all words that start and end with the same letter.",
    "language": "java",
    "difficulty": "Hard",
    "order": 227,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all words that start and end with the same letter.",
      "thinking": "Compare each word's first and last character, ignoring case.",
      "code": "String s=\"level test radar code\";for(String w:s.split(\"\\\\s+\"))if(w.length()>0&&Character.toLowerCase(w.charAt(0))==Character.toLowerCase(w.charAt(w.length()-1)))System.out.print(w+\" \");"
    }
  },
  {
    "id": "p5-47",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 47,
    "title": "Count how many words contain the letter ‘a’.",
    "language": "java",
    "difficulty": "Hard",
    "order": 228,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many words contain the letter ‘a’.",
      "thinking": "Check each word for at least one occurrence of 'a'.",
      "code": "String s=\"java data base\";int count=0;for(String w:s.split(\"\\\\s+\"))if(w.toLowerCase().indexOf('a')>=0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p5-48",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 48,
    "title": "Capitalize the first letter of each word.",
    "language": "java",
    "difficulty": "Hard",
    "order": 229,
    "isExternalReference": false,
    "answer": {
      "problem": "Capitalize the first letter of each word.",
      "thinking": "Capitalize the first character of each word while leaving the rest unchanged.",
      "code": "String s=\"java is fun\";StringBuilder r=new StringBuilder();for(String w:s.split(\"\\\\s+\"))r.append(Character.toUpperCase(w.charAt(0))).append(w.substring(1)).append(' ');System.out.println(r.toString().trim());"
    }
  },
  {
    "id": "p5-49",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 49,
    "title": "Print the sentence in title case (first letter capital, rest lowercase).",
    "language": "java",
    "difficulty": "Hard",
    "order": 230,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the sentence in title case (first letter capital, rest lowercase).",
      "thinking": "Uppercase the first character and lowercase the rest of every word.",
      "code": "String s=\"JAVA is fUN\";StringBuilder r=new StringBuilder();for(String w:s.split(\"\\\\s+\"))r.append(Character.toUpperCase(w.charAt(0))).append(w.substring(1).toLowerCase()).append(' ');System.out.println(r.toString().trim());"
    }
  },
  {
    "id": "p5-50",
    "phaseId": "p5",
    "phaseName": "Strings",
    "section": "Category 5 — Word-level Thinking",
    "number": 50,
    "title": "Remove extra spaces between words (normalize spacing).",
    "language": "java",
    "difficulty": "Hard",
    "order": 231,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove extra spaces between words (normalize spacing).",
      "thinking": "trim removes outer spaces and the regex \\s+ collapses repeated internal whitespace.",
      "code": "String s=\"  Java   is   fun  \";System.out.println(String.join(\" \",s.trim().split(\"\\\\s+\")));"
    }
  },
  {
    "id": "p6-1",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 1,
    "title": "Print all numbers between 1 and N that are divisible by both 3 and 5.",
    "language": "java",
    "difficulty": "Easy",
    "order": 232,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all numbers between 1 and N that are divisible by both 3 and 5.",
      "thinking": "Traverse 1..N and print values divisible by both 3 and 5.",
      "code": "int n=100;for(int i=1;i<=n;i++)if(i%3==0&&i%5==0)System.out.print(i+\" \");"
    }
  },
  {
    "id": "p6-2",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 2,
    "title": "Find the sum of digits of a number (use loop).",
    "language": "java",
    "difficulty": "Easy",
    "order": 233,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of digits of a number (use loop).",
      "thinking": "Extract and accumulate digits with %10 and /10.",
      "code": "int n=12345,sum=0;while(n>0){sum+=n%10;n/=10;}System.out.println(sum);"
    }
  },
  {
    "id": "p6-3",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 3,
    "title": "Check if a number is an Armstrong number.",
    "language": "java",
    "difficulty": "Easy",
    "order": 234,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is an Armstrong number.",
      "thinking": "Use the number of digits as the exponent for every digit.",
      "code": "int n=153,x=n,sum=0,d=String.valueOf(n).length();while(x>0){sum+=(int)Math.pow(x%10,d);x/=10;}System.out.println(sum==n);"
    }
  },
  {
    "id": "p6-4",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 4,
    "title": "Print all Armstrong numbers between 1 and 1000.",
    "language": "java",
    "difficulty": "Easy",
    "order": 235,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all Armstrong numbers between 1 and 1000.",
      "thinking": "Apply the Armstrong test to every number in the range.",
      "code": "for(int n=1;n<=1000;n++){int x=n,sum=0,d=String.valueOf(n).length();while(x>0){sum+=(int)Math.pow(x%10,d);x/=10;}if(sum==n)System.out.print(n+\" \");}"
    }
  },
  {
    "id": "p6-5",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 5,
    "title": "Find the factorial of a number using recursion.",
    "language": "java",
    "difficulty": "Easy",
    "order": 236,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the factorial of a number using recursion.",
      "thinking": "The question explicitly asks for recursion, so reduce n to n−1 until the base case 1.",
      "code": "static long factorial(int n){return n<=1?1:n*factorial(n-1);}"
    }
  },
  {
    "id": "p6-6",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 6,
    "title": "Count how many even digits a number contains.",
    "language": "java",
    "difficulty": "Easy",
    "order": 237,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many even digits a number contains.",
      "thinking": "Inspect each digit and count those with even parity.",
      "code": "int n=28401,count=0;while(n>0){if((n%10)%2==0)count++;n/=10;}System.out.println(count);"
    }
  },
  {
    "id": "p6-7",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 7,
    "title": "Print all prime numbers between 1 and N.",
    "language": "java",
    "difficulty": "Easy",
    "order": 238,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all prime numbers between 1 and N.",
      "thinking": "Test each candidate for primality using divisors up to its square root.",
      "code": "int n=30;for(int x=2;x<=n;x++){boolean p=true;for(int d=2;d*d<=x;d++)if(x%d==0){p=false;break;}if(p)System.out.print(x+\" \");}"
    }
  },
  {
    "id": "p6-8",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 8,
    "title": "Print the reverse of a number (123 → 321).",
    "language": "java",
    "difficulty": "Easy",
    "order": 239,
    "isExternalReference": false,
    "answer": {
      "problem": "Print the reverse of a number (123 → 321).",
      "thinking": "Build the reversed number one digit at a time.",
      "code": "int n=123,rev=0;while(n>0){rev=rev*10+n%10;n/=10;}System.out.println(rev);"
    }
  },
  {
    "id": "p6-9",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 9,
    "title": "Check if a number is palindrome (121 → true).",
    "language": "java",
    "difficulty": "Easy",
    "order": 240,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is palindrome (121 → true).",
      "thinking": "A number is palindromic when it equals its reverse.",
      "code": "int n=121,x=n,rev=0;while(x>0){rev=rev*10+x%10;x/=10;}System.out.println(n==rev);"
    }
  },
  {
    "id": "p6-10",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 1 — Number-Based Logical Combinations",
    "number": 10,
    "title": "Check if a number is perfect (sum of factors equals number).",
    "language": "java",
    "difficulty": "Easy",
    "order": 241,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if a number is perfect (sum of factors equals number).",
      "thinking": "Sum proper divisors and compare the result with the original number.",
      "code": "int n=28,sum=0;for(int i=1;i<n;i++)if(n%i==0)sum+=i;System.out.println(sum==n);"
    }
  },
  {
    "id": "p6-11",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 11,
    "title": "Check if two strings are anagrams (without using collections).",
    "language": "java",
    "difficulty": "Easy",
    "order": 242,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if two strings are anagrams (without using collections).",
      "thinking": "Anagrams have identical character frequencies. An array avoids collections, as required.",
      "code": "String a=\"listen\",b=\"silent\";int[] f=new int[256];for(char c:a.toCharArray())f[c]++;for(char c:b.toCharArray())f[c]--;boolean ok=true;for(int x:f)if(x!=0)ok=false;System.out.println(ok);"
    }
  },
  {
    "id": "p6-12",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 12,
    "title": "Count vowels in each word of a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 243,
    "isExternalReference": false,
    "answer": {
      "problem": "Count vowels in each word of a sentence.",
      "thinking": "Process each word independently and count its vowels.",
      "code": "String s=\"one apple is easy\";for(String w:s.split(\"\\\\s+\")){int c=0;for(char ch:w.toLowerCase().toCharArray())if(\"aeiou\".indexOf(ch)>=0)c++;System.out.println(w+\" -> \"+c);}"
    }
  },
  {
    "id": "p6-13",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 13,
    "title": "Reverse words in a string if their length is even.",
    "language": "java",
    "difficulty": "Easy",
    "order": 244,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse words in a string if their length is even.",
      "thinking": "Reverse only words whose length is even.",
      "code": "String s=\"abcd is fun test\";StringBuilder out=new StringBuilder();for(String w:s.split(\"\\\\s+\")){if(w.length()%2==0)out.append(new StringBuilder(w).reverse());else out.append(w);out.append(' ');}System.out.println(out.toString().trim());"
    }
  },
  {
    "id": "p6-14",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 14,
    "title": "Replace every vowel in a string with its position (a=1, e=2...).",
    "language": "java",
    "difficulty": "Easy",
    "order": 245,
    "isExternalReference": false,
    "answer": {
      "problem": "Replace every vowel in a string with its position (a=1, e=2...).",
      "thinking": "Replace each vowel using the a/e/i/o/u positions 1/2/3/4/5.",
      "code": "String s=\"abcde\";StringBuilder r=new StringBuilder();for(char c:s.toLowerCase().toCharArray()){if(c=='a')r.append(1);else if(c=='e')r.append(2);else if(c=='i')r.append(3);else if(c=='o')r.append(4);else if(c=='u')r.append(5);else r.append(c);}System.out.println(r);"
    }
  },
  {
    "id": "p6-15",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 15,
    "title": "Print characters that appear more than once (without map).",
    "language": "java",
    "difficulty": "Easy",
    "order": 246,
    "isExternalReference": false,
    "answer": {
      "problem": "Print characters that appear more than once (without map).",
      "thinking": "Count each character's frequency and print duplicated characters only at their first occurrence.",
      "code": "String s=\"banana\";for(int i=0;i<s.length();i++){int c=0;for(int j=0;j<s.length();j++)if(s.charAt(i)==s.charAt(j))c++;boolean earlier=false;for(int j=0;j<i;j++)if(s.charAt(i)==s.charAt(j))earlier=true;if(c>1&&!earlier)System.out.print(s.charAt(i)+\" \");}"
    }
  },
  {
    "id": "p6-16",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 16,
    "title": "Count words that start and end with the same letter.",
    "language": "java",
    "difficulty": "Easy",
    "order": 247,
    "isExternalReference": false,
    "answer": {
      "problem": "Count words that start and end with the same letter.",
      "thinking": "For each word, compare the first and last letters.",
      "code": "String s=\"level test radar\";int count=0;for(String w:s.split(\"\\\\s+\"))if(w.length()>0&&Character.toLowerCase(w.charAt(0))==Character.toLowerCase(w.charAt(w.length()-1)))count++;System.out.println(count);"
    }
  },
  {
    "id": "p6-17",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 17,
    "title": "Toggle case for every alternate word in a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 248,
    "isExternalReference": false,
    "answer": {
      "problem": "Toggle case for every alternate word in a sentence.",
      "thinking": "Treat alternate word positions as indices 0,1,2… and flip case only for odd indices.",
      "code": "String s=\"one TWO three four\";StringBuilder out=new StringBuilder();String[] w=s.split(\"\\\\s+\");for(int i=0;i<w.length;i++){String x=w[i];if(i%2==1)x=flip(x);out.append(x).append(' ');}System.out.println(out.toString().trim());"
    }
  },
  {
    "id": "p6-18",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 18,
    "title": "Check if two strings are rotations of each other.",
    "language": "java",
    "difficulty": "Easy",
    "order": 249,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if two strings are rotations of each other.",
      "thinking": "For the alternate-word task, apply a case-toggle helper to every second word.",
      "code": "static String flip(String s){StringBuilder r=new StringBuilder();for(char c:s.toCharArray())r.append(Character.isUpperCase(c)?Character.toLowerCase(c):Character.isLowerCase(c)?Character.toUpperCase(c):c);return r.toString();}"
    }
  },
  {
    "id": "p6-19",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 19,
    "title": "Find the word with maximum vowels in a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 250,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the word with maximum vowels in a sentence.",
      "thinking": "Two equal-length strings are rotations when the second occurs inside the first string concatenated with itself.",
      "code": "String a=\"water\",b=\"terwa\";System.out.println(a.length()==b.length()&&(a+a).contains(b));"
    }
  },
  {
    "id": "p6-20",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 2 — String + Logic Mix",
    "number": 20,
    "title": "Remove duplicate words from a sentence.",
    "language": "java",
    "difficulty": "Easy",
    "order": 251,
    "isExternalReference": false,
    "answer": {
      "problem": "Remove duplicate words from a sentence.",
      "thinking": "Count vowels for every word and retain the word with the highest count.",
      "code": "String s=\"hello aeiou world\";String best=\"\";int bestCount=-1;for(String w:s.split(\"\\\\s+\")){int c=0;for(char ch:w.toLowerCase().toCharArray())if(\"aeiou\".indexOf(ch)>=0)c++;if(c>bestCount){bestCount=c;best=w;}}System.out.println(best);"
    }
  },
  {
    "id": "p6-21",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 21,
    "title": "Find the maximum and minimum element in an array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 252,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the maximum and minimum element in an array.",
      "thinking": "Keep a word only when it has not already been written. This is a simple no-collection approach.",
      "code": "String s=\"java java is fun is\";String[] w=s.split(\"\\\\s+\");StringBuilder r=new StringBuilder();for(String x:w){if(!r.toString().contains(x+\" \"))r.append(x).append(' ');}System.out.println(r.toString().trim());"
    }
  },
  {
    "id": "p6-22",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 22,
    "title": "Count how many positive, negative, and zero elements are in an array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 253,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many positive, negative, and zero elements are in an array.",
      "thinking": "One traversal can maintain both extremes.",
      "code": "int[] a={4,2,9,1};int min=a[0],max=a[0];for(int x:a){min=Math.min(min,x);max=Math.max(max,x);}System.out.println(max+\" \"+min);"
    }
  },
  {
    "id": "p6-23",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 23,
    "title": "Print all unique elements from an array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 254,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all unique elements from an array.",
      "thinking": "Classify every element by sign.",
      "code": "int[] a={-1,0,4,-3,2};int p=0,n=0,z=0;for(int x:a)if(x>0)p++;else if(x<0)n++;else z++;System.out.println(p+\" \"+n+\" \"+z);"
    }
  },
  {
    "id": "p6-24",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 24,
    "title": "Reverse an array in-place.",
    "language": "java",
    "difficulty": "Medium",
    "order": 255,
    "isExternalReference": false,
    "answer": {
      "problem": "Reverse an array in-place.",
      "thinking": "An element is unique when it occurs exactly once.",
      "code": "int[] a={1,2,2,3,4,4};for(int i=0;i<a.length;i++){int c=0;for(int x:a)if(x==a[i])c++;if(c==1)System.out.print(a[i]+\" \");}"
    }
  },
  {
    "id": "p6-25",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 25,
    "title": "Shift all zeros to the end of the array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 256,
    "isExternalReference": false,
    "answer": {
      "problem": "Shift all zeros to the end of the array.",
      "thinking": "Two pointers can reverse the array in place without extra storage.",
      "code": "int[] a={1,2,3,4};for(int l=0,r=a.length-1;l<r;l++,r--){int t=a[l];a[l]=a[r];a[r]=t;}"
    }
  },
  {
    "id": "p6-26",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 26,
    "title": "Count how many elements are even at an even index.",
    "language": "java",
    "difficulty": "Medium",
    "order": 257,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many elements are even at an even index.",
      "thinking": "Write non-zero values from left to right, then fill the remaining positions with zero.",
      "code": "int[] a={0,1,0,3,12};int pos=0;for(int x:a)if(x!=0)a[pos++]=x;while(pos<a.length)a[pos++]=0;"
    }
  },
  {
    "id": "p6-27",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 27,
    "title": "Merge two arrays into one.",
    "language": "java",
    "difficulty": "Medium",
    "order": 258,
    "isExternalReference": false,
    "answer": {
      "problem": "Merge two arrays into one.",
      "thinking": "The index and element both need to be even.",
      "code": "int[] a={1,2,3,4,5};int count=0;for(int i=0;i<a.length;i++)if(i%2==0&&a[i]%2==0)count++;System.out.println(count);"
    }
  },
  {
    "id": "p6-28",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 28,
    "title": "Find the second largest element in an array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 259,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the second largest element in an array.",
      "thinking": "Copy both arrays into a result array.",
      "code": "int[] a={1,2},b={3,4};int[] c=new int[a.length+b.length];for(int i=0;i<a.length;i++)c[i]=a[i];for(int i=0;i<b.length;i++)c[a.length+i]=b[i];"
    }
  },
  {
    "id": "p6-29",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 29,
    "title": "Rotate an array by one position to the right.",
    "language": "java",
    "difficulty": "Medium",
    "order": 260,
    "isExternalReference": false,
    "answer": {
      "problem": "Rotate an array by one position to the right.",
      "thinking": "Track the two largest distinct values as the array is traversed.",
      "code": "int[] a={5,1,9,7};int first=Integer.MIN_VALUE,second=Integer.MIN_VALUE;for(int x:a){if(x>first){second=first;first=x;}else if(x>second&&x!=first)second=x;}System.out.println(second);"
    }
  },
  {
    "id": "p6-30",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 3 — Array + Looping Logic",
    "number": 30,
    "title": "Find the sum of all elements at odd indices.",
    "language": "java",
    "difficulty": "Medium",
    "order": 261,
    "isExternalReference": false,
    "answer": {
      "problem": "Find the sum of all elements at odd indices.",
      "thinking": "Save the last value, shift the array right, then write the saved value at index 0.",
      "code": "int[] a={1,2,3,4};int last=a[a.length-1];for(int i=a.length-1;i>0;i--)a[i]=a[i-1];a[0]=last;"
    }
  },
  {
    "id": "p6-31",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 31,
    "title": "Print a multiplication table in a formatted grid (10x10).",
    "language": "java",
    "difficulty": "Medium",
    "order": 262,
    "isExternalReference": false,
    "answer": {
      "problem": "Print a multiplication table in a formatted grid (10x10).",
      "thinking": "Odd indices are 1,3,5,… because Java arrays are zero-indexed.",
      "code": "int[] a={1,2,3,4,5};int sum=0;for(int i=1;i<a.length;i+=2)sum+=a[i];System.out.println(sum);"
    }
  },
  {
    "id": "p6-32",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 32,
    "title": "Print all pairs in an array whose sum equals a given number.",
    "language": "java",
    "difficulty": "Medium",
    "order": 263,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all pairs in an array whose sum equals a given number.",
      "thinking": "The outer loop controls rows and the inner loop controls columns.",
      "code": "for(int i=1;i<=10;i++){for(int j=1;j<=10;j++)System.out.printf(\"%4d\",i*j);System.out.println();}"
    }
  },
  {
    "id": "p6-33",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 33,
    "title": "Print all subarrays of a given array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 264,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all subarrays of a given array.",
      "thinking": "Nested loops enumerate each unordered pair once.",
      "code": "int[] a={1,2,3,4,5};int k=6;for(int i=0;i<a.length;i++)for(int j=i+1;j<a.length;j++)if(a[i]+a[j]==k)System.out.println(a[i]+\" \"+a[j]);"
    }
  },
  {
    "id": "p6-34",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 34,
    "title": "Check if an array is sorted (ascending or descending).",
    "language": "java",
    "difficulty": "Medium",
    "order": 265,
    "isExternalReference": false,
    "answer": {
      "problem": "Check if an array is sorted (ascending or descending).",
      "thinking": "Choose every start/end pair, then print all elements inside that range.",
      "code": "int[] a={1,2,3};for(int i=0;i<a.length;i++)for(int j=i;j<a.length;j++){for(int k=i;k<=j;k++)System.out.print(a[k]+\" \");System.out.println();}"
    }
  },
  {
    "id": "p6-35",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 35,
    "title": "Count how many times a number appears consecutively in an array.",
    "language": "java",
    "difficulty": "Medium",
    "order": 266,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many times a number appears consecutively in an array.",
      "thinking": "Maintain two flags while comparing adjacent elements.",
      "code": "int[] a={1,2,2,3};boolean asc=true,desc=true;for(int i=1;i<a.length;i++){if(a[i]<a[i-1])asc=false;if(a[i]>a[i-1])desc=false;}System.out.println(asc||desc);"
    }
  },
  {
    "id": "p6-36",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 36,
    "title": "Find all pairs of characters in a string that are the same (nested loop).",
    "language": "java",
    "difficulty": "Medium",
    "order": 267,
    "isExternalReference": false,
    "answer": {
      "problem": "Find all pairs of characters in a string that are the same (nested loop).",
      "thinking": "A running length resets when the current value changes.",
      "code": "int[] a={1,1,1,2,2,3};int k=1,maxRun=0,run=0;for(int x:a){if(x==k){run++;maxRun=Math.max(maxRun,run);}else run=0;}System.out.println(maxRun);"
    }
  },
  {
    "id": "p6-37",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 37,
    "title": "Print pattern of increasing characters (A, AB, ABC...).",
    "language": "java",
    "difficulty": "Medium",
    "order": 268,
    "isExternalReference": false,
    "answer": {
      "problem": "Print pattern of increasing characters (A, AB, ABC...).",
      "thinking": "Nested loops compare every pair of positions and print matching characters.",
      "code": "String s=\"banana\";for(int i=0;i<s.length();i++)for(int j=i+1;j<s.length();j++)if(s.charAt(i)==s.charAt(j))System.out.println(s.charAt(i)+\" at \"+i+\",\"+j);"
    }
  },
  {
    "id": "p6-38",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 38,
    "title": "Print Pascal’s triangle up to N rows.",
    "language": "java",
    "difficulty": "Medium",
    "order": 269,
    "isExternalReference": false,
    "answer": {
      "problem": "Print Pascal’s triangle up to N rows.",
      "thinking": "For row i, print the first i letters beginning at A.",
      "code": "int n=5;for(int i=1;i<=n;i++){for(int j=0;j<i;j++)System.out.print((char)('A'+j));System.out.println();}"
    }
  },
  {
    "id": "p6-39",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 39,
    "title": "Generate Fibonacci series up to N using recursion.",
    "language": "java",
    "difficulty": "Medium",
    "order": 270,
    "isExternalReference": false,
    "answer": {
      "problem": "Generate Fibonacci series up to N using recursion.",
      "thinking": "Pascal’s triangle uses binomial coefficients from Pascal’s relation.",
      "code": "int n=5;for(int i=0;i<n;i++){for(int j=0;j<=i;j++){System.out.print(nCr(i,j)+\" \");}System.out.println();}static int nCr(int n,int r){return r==0||r==n?1:nCr(n-1,r-1)+nCr(n-1,r);}"
    }
  },
  {
    "id": "p6-40",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 4 — Nested Logic & Pattern Flow",
    "number": 40,
    "title": "Print numbers in a spiral-like pattern (conceptual dry run).",
    "language": "java",
    "difficulty": "Medium",
    "order": 271,
    "isExternalReference": false,
    "answer": {
      "problem": "Print numbers in a spiral-like pattern (conceptual dry run).",
      "thinking": "Carry the current two Fibonacci values through recursive calls.",
      "code": "static void fib(int n,long a,long b){if(n==0)return;System.out.print(a+\" \");fib(n-1,b,a+b);}"
    }
  },
  {
    "id": "p6-41",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 41,
    "title": "Given marks of students, find how many passed (>= 40).",
    "language": "java",
    "difficulty": "Hard",
    "order": 272,
    "isExternalReference": false,
    "answer": {
      "problem": "Given marks of students, find how many passed (>= 40).",
      "thinking": "The PDF calls this conceptual; the exact spiral-like rule is not specified, so this example demonstrates how a row/column state can drive a generated pattern.",
      "code": "for(int i=1;i<=5;i++){for(int j=1;j<=5;j++)System.out.print((i+j)%5+\" \");System.out.println();}"
    }
  },
  {
    "id": "p6-42",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 42,
    "title": "Take age inputs and count how many are adults, minors, seniors.",
    "language": "java",
    "difficulty": "Hard",
    "order": 273,
    "isExternalReference": false,
    "answer": {
      "problem": "Take age inputs and count how many are adults, minors, seniors.",
      "thinking": "Count students whose marks meet the stated >=40 threshold.",
      "code": "int[] marks={35,40,75,62,20};int passed=0;for(int m:marks)if(m>=40)passed++;System.out.println(passed);"
    }
  },
  {
    "id": "p6-43",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 43,
    "title": "Validate a password (at least one uppercase, lowercase, digit, special char).",
    "language": "java",
    "difficulty": "Hard",
    "order": 274,
    "isExternalReference": false,
    "answer": {
      "problem": "Validate a password (at least one uppercase, lowercase, digit, special char).",
      "thinking": "The PDF names the three groups but does not define senior/adult cutoffs. This example uses <18 minor, 18–59 adult, and 60+ senior.",
      "code": "int[] ages={12,20,35,70,8};int minors=0,adults=0,seniors=0;for(int age:ages){if(age<18)minors++;else if(age<60)adults++;else seniors++;}System.out.println(minors+\" \"+adults+\" \"+seniors);"
    }
  },
  {
    "id": "p6-44",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 44,
    "title": "Simulate a simple calculator using switch-case.",
    "language": "java",
    "difficulty": "Hard",
    "order": 275,
    "isExternalReference": false,
    "answer": {
      "problem": "Simulate a simple calculator using switch-case.",
      "thinking": "Track four independent requirements and accept only when all are present.",
      "code": "String p=\"Aa1@abcd\";boolean u=false,l=false,d=false,sp=false;for(char c:p.toCharArray()){u|=Character.isUpperCase(c);l|=Character.isLowerCase(c);d|=Character.isDigit(c);sp|=!Character.isLetterOrDigit(c);}System.out.println(u&&l&&d&&sp);"
    }
  },
  {
    "id": "p6-45",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 45,
    "title": "Count how many times a coin lands on heads/tails (use random).",
    "language": "java",
    "difficulty": "Hard",
    "order": 276,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many times a coin lands on heads/tails (use random).",
      "thinking": "switch selects one arithmetic operation based on the operator.",
      "code": "Scanner sc=new Scanner(System.in);double a=sc.nextDouble(),b=sc.nextDouble();char op=sc.next().charAt(0);switch(op){case '+':System.out.println(a+b);break;case '-':System.out.println(a-b);break;case '*':System.out.println(a*b);break;case '/':System.out.println(b!=0?a/b:\"Cannot divide by zero\");break;default:System.out.println(\"Invalid operator\");}"
    }
  },
  {
    "id": "p6-46",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 46,
    "title": "Print frequency of each digit in a number.",
    "language": "java",
    "difficulty": "Hard",
    "order": 277,
    "isExternalReference": false,
    "answer": {
      "problem": "Print frequency of each digit in a number.",
      "thinking": "Generate a random Boolean for each flip and count the two outcomes.",
      "code": "Random r=new Random();int heads=0,tails=0,flips=10;for(int i=0;i<flips;i++)if(r.nextBoolean())heads++;else tails++;System.out.println(\"Heads=\"+heads+\" Tails=\"+tails);"
    }
  },
  {
    "id": "p6-47",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 47,
    "title": "Find common elements between two arrays.",
    "language": "java",
    "difficulty": "Hard",
    "order": 278,
    "isExternalReference": false,
    "answer": {
      "problem": "Find common elements between two arrays.",
      "thinking": "Use the digit value as an index from 0 to 9.",
      "code": "int n=120233;int[] f=new int[10];while(n>0){f[n%10]++;n/=10;}for(int i=0;i<10;i++)System.out.println(i+\" -> \"+f[i]);"
    }
  },
  {
    "id": "p6-48",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 48,
    "title": "Print characters that are common in two strings.",
    "language": "java",
    "difficulty": "Hard",
    "order": 279,
    "isExternalReference": false,
    "answer": {
      "problem": "Print characters that are common in two strings.",
      "thinking": "For every element in the first array, search the second for one matching occurrence.",
      "code": "int[] a={1,2,3,4},b={3,4,5};for(int x:a)for(int y:b)if(x==y){System.out.print(x+\" \");break;}"
    }
  },
  {
    "id": "p6-49",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 49,
    "title": "Count how many prime numbers are there in an array.",
    "language": "java",
    "difficulty": "Hard",
    "order": 280,
    "isExternalReference": false,
    "answer": {
      "problem": "Count how many prime numbers are there in an array.",
      "thinking": "A character is common when it exists in both strings.",
      "code": "String a=\"hello\",b=\"world\";for(char x:a.toCharArray()){if(b.indexOf(x)>=0)System.out.print(x+\" \");}"
    }
  },
  {
    "id": "p6-50",
    "phaseId": "p6",
    "phaseName": "Mixed Logical Challenges",
    "section": "Category 5 — Applied Reasoning & Real-Life Logic",
    "number": 50,
    "title": "Print all palindromic words from a sentence.",
    "language": "java",
    "difficulty": "Hard",
    "order": 281,
    "isExternalReference": false,
    "answer": {
      "problem": "Print all palindromic words from a sentence.",
      "thinking": "Apply the same square-root-bounded primality test to each array element.",
      "code": "int[] a={2,3,4,5,11};int count=0;for(int x:a){boolean p=x>=2;for(int d=2;d*d<=x&&p;d++)if(x%d==0)p=false;if(p)count++;}System.out.println(count);"
    }
  }
];
