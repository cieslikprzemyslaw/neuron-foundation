const regex = /(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+))|(".+"))@[[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;

export const validateEmail = (email) => !!regex.test(email);
