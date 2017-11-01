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
* The CustomerProductListItemLink model module.
* @module models/CustomerProductListItemLink
* @version 17.8
*/
export default class CustomerProductListItemLink {
    /**
    * Constructs a new <code>CustomerProductListItemLink</code>.
    * Document representing a customer product list item link.
    * @alias module:models/CustomerProductListItemLink
    * @class
    */
    constructor() {
        /**
        * The target of the link.
        * @member {String} link
        */
        this.link = undefined

        /**
        * The link title.
        * @member {String} title
        */
        this.title = undefined
    }

    /**
    * Constructs a <code>CustomerProductListItemLink</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerProductListItemLink} obj Optional instance to populate.
    * @return {module:models/CustomerProductListItemLink} The populated <code>CustomerProductListItemLink</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProductListItemLink()

            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String')
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String')
            }
        }

        return obj
    }
}
