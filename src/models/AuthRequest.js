/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The AuthRequest model module.
* @module models/AuthRequest
* @version 17.8
*/
export default class AuthRequest {
    /**
    * Constructs a new <code>AuthRequest</code>.
    * Document representing the authentication request type.
    * @alias module:models/AuthRequest
    * @class
    * @param type {module:models/AuthRequest.TypeEnum} Type of authentication request: guest, login (credentials), refresh or session.
    */
    constructor(type) {
        /**
        * Type of authentication request: guest, login (credentials), refresh or session.
        * @member {module:models/AuthRequest.TypeEnum} type
        */
        this.type = type
    }

    /**
    * Constructs a <code>AuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AuthRequest} obj Optional instance to populate.
    * @return {module:models/AuthRequest} The populated <code>AuthRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthRequest()

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>type</code> property.
* @enum {String}
* @readonly
*/
AuthRequest.TypeEnum = {

    /**
     * value: "guest"
     * @const
     */
    guest: 'guest',

    /**
     * value: "credentials"
     * @const
     */
    credentials: 'credentials',

    /**
     * value: "refresh"
     * @const
     */
    refresh: 'refresh',

    /**
     * value: "session"
     * @const
     */
    session: 'session'
}
