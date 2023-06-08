import * as yup from 'yup';

export const UserCredentialsFormValidation = yup.object({
  first_name: yup
    .string()
    .trim()
    .required('სახელის მითითება აუცილებელია')
    .min(2, 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან'),
  last_name: yup
    .string()
    .trim()
    .required('გვარის მითითება აუცილებელია')
    .min(2, 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან'),
  email: yup
    .string()
    .trim()
    .required('მეილის მითითება აუცილებელია')
    .email('უნდა იყოს მეილის ფორმატი')
    .matches(/@redberry.ge$/gm, 'უნდა იყოს რედბერის მეილი'),
});