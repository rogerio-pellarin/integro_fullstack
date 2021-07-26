# [INTEG.RO](https://www.integ.ro/)

## Installation

- Install PHP7, composer, node, git
- Install PHP dependencies, so in the terminal run:
```
$ composer install
```

- Install node dependencies:
```
$ npm install
```

### SERVE THE BACK
On the root project run:
```
$ php -S localhost:8000
```

### SERVE THE FRONT
On the root project run:
```
$ npm run dev
```

### RUN FRONT TESTS
On the root project run:
```
$ npm run test
```

### RUN BACK TESTS
On the root project run:
```
$ ./vendor/bin/phpunit src/backend/tests
```
