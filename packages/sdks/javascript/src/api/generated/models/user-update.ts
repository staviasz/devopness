/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Language } from './language';

/**
 * 
 * @export
 * @interface UserUpdate
 */
export interface UserUpdate {
    /**
     * The unique ID of the given User.
     * @type {string}
     * @memberof UserUpdate
     */
    id: string;
    /**
     * User\'s full name. Must be at least 5 characters. Must not be greater than 60 characters.
     * @type {string}
     * @memberof UserUpdate
     */
    name: string;
    /**
     * The e-mail that will uniquely identify the user on the system and become its login credential. Must be a valid email address.
     * @type {string}
     * @memberof UserUpdate
     */
    email: string;
    /**
     * The URL Slug of the user. Must not be greater than 255 characters.
     * @type {string}
     * @memberof UserUpdate
     */
    url_slug: string;
    /**
     * 
     * @type {Language}
     * @memberof UserUpdate
     */
    language?: Language | null;
}

