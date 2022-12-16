import React from 'react';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

const ValidateEmail = (props) =>{
    return(
            console.log('foo@bar.com '+validator.isEmail('foo@bar.com')),
            console.log('foo@bar,com '+validator.isEmail('foo@bar,com'))
    )
}

export default ValidateEmail