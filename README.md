# arachnid-robotics-technical-test
Arachnid Robotics technical test for Ticker.

# How to run 
```
npm install
```

```
npm run start
```

# Tests
The project has 3 commands for running tests.

This will run all tests within the project:
```
npm run tests 
```

This will run only the unit tests:
```
npm run unit
```

This will run only the integration tests:
```
npm run integration
```

# Mk1 Assumptions

1. Becuase it has not been specified I have assumed the testing area within the test chamber allows negative values and is in fact bigger than 0,0.
2. I have assumed the robot will instantly move in the direction specified in the command, the robot does not need to turn to face left before moving left.
3. Assumed directional force values (x, y):
```
       F = +0,1
       B = -0,1
       L = -1,0
       R = +1,0
```

# Mk3 Assumptions

1. I have assumed when the robot overheats it has no cooldown time and can boost once more if the next command requires it.
2. I have assumed when boosting if you don't have enough fuel but do have some fuel available, you will simply use whats available rather than not boost at all.