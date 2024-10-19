import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must be at most 20 characters long',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number must be at least 3 characters long',
    'string.max': 'Phone number must be at most 20 characters long',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email number must be at least 3 characters long',
    'string.max': 'Email number must be at most 20 characters long',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The isFavourite field must be true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'string.min': 'Contact type must be at least 3 characters long',
      'string.max': 'Contact type must be at most 20 characters long',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must be at most 20 characters long',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number must be at least 3 characters long',
    'string.max': 'Phone number must be at most 20 characters long',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email number must be at least 3 characters long',
    'string.max': 'Email number must be at most 20 characters long',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The isFavourite field must be true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .min(3)
    .max(20)
    .messages({
      'string.base': 'Contact type should be a string',
      'string.min': 'Contact type must be at least 3 characters long',
      'string.max': 'Contact type must be at most 20 characters long',
    }),
});
