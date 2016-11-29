# Description
Axway API Gateway proposes a “JDBC” Filter that can be used to query the database. 
It would be nice if we could authenticate a user against that database
However, due to Best Practices, customers stores the password ”Hashed and Salted”
Here is how to deal with that situation


## API Management Version Compatibilty
This artefact was successfully tested for the following versions:
- 7.5.1


## Install

Sample Policy to authenticate a user against a database with hashed and salted password
![alt text][Screenshot2]
[Screenshot2]: https://github.com/Axway-API-Management/Hash-Functions/blob/master/Screenshot2.png  "Screenshot2"   


## Usage

Specifications
- We would like to check if a user exists in a database and authenticate his password
- The password is Hashed and Salted
- The algorithm is : SHA256(fixed salt + login + password)

Practicing with Hash algorithms
Let’s say, we want to authenticate : 
- the user “toto”
- with a password “secret”
- and a fixed salt ”crackme”

![alt text][Screenshot1]
[Screenshot1]: https://github.com/Axway-API-Management/Hash-Functions/blob/master/Screenshot1.png  "Screenshot1"   

   

## Bug and Caveats

```
Nothing identified 
```

## Contributing

Please read [Contributing.md] (/Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Team

![alt text][Axwaylogo] Axway Team

[Axwaylogo]: https://github.com/Axway-API-Management/Common/blob/master/img/AxwayLogoSmall.png  "Axway logo"


## License
Apache License 2.0 (refer to document [license] (https://github.com/Axway-API-Management/Executing-loopback-requests-on-a-listener/blob/master/LICENSE))

