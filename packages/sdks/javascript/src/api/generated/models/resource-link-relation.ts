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


import { LinkedResourceData } from './linked-resource-data';
import { ResourceLinkChild } from './resource-link-child';

/**
 * 
 * @export
 * @interface ResourceLinkRelation
 */
export interface ResourceLinkRelation {
    /**
     * The link type to related resource (`child` or `parent`)
     * @type {string}
     * @memberof ResourceLinkRelation
     */
    link_type: string;
    /**
     * The human readable resource type
     * @type {string}
     * @memberof ResourceLinkRelation
     */
    resource_type_human_readable: string;
    /**
     * The linked resource type
     * @type {string}
     * @memberof ResourceLinkRelation
     */
    resource_type: string;
    /**
     * The linked resource ID
     * @type {number}
     * @memberof ResourceLinkRelation
     */
    resource_id: number;
    /**
     * If false, the link cannot be manually removed
     * @type {boolean}
     * @memberof ResourceLinkRelation
     */
    can_be_unlinked: boolean;
    /**
     * 
     * @type {LinkedResourceData}
     * @memberof ResourceLinkRelation
     */
    linked_resource_data: LinkedResourceData;
    /**
     * 
     * @type {Array<ResourceLinkChild>}
     * @memberof ResourceLinkRelation
     */
    children?: Array<ResourceLinkChild>;
}

