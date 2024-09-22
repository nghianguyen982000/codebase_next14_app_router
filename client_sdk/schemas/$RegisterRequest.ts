/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegisterRequest = {
  properties: {
    name: {
      type: 'string',
      isRequired: true,
      format: 'name',
    },
    email: {
      type: 'string',
      isRequired: true,
      format: 'email',
    },
    password: {
      type: 'string',
      isRequired: true,
      format: 'password',
    },
  },
} as const;
