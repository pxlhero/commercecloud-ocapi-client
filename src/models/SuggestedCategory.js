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
* The SuggestedCategory model module.
* @module models/SuggestedCategory
* @version 17.8
*/
export default class SuggestedCategory {
    /**
    * Constructs a new <code>SuggestedCategory</code>.
    * @alias module:models/SuggestedCategory
    * @class
    */
    constructor() {
        /**
        * The id of the category.
        * @member {String} id
        */
        this.id = undefined

        /**
        * The URL addressing the category.
        * @member {String} link
        */
        this.link = undefined

        /**
        * The localized name of the category.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The name of the parent category.
        * @member {String} parent_category_name
        */
        this.parent_category_name = undefined
    }

    /**
    * Constructs a <code>SuggestedCategory</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SuggestedCategory} obj Optional instance to populate.
    * @return {module:models/SuggestedCategory} The populated <code>SuggestedCategory</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestedCategory()

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('parent_category_name')) {
                obj['parent_category_name'] = ApiClient.convertToType(data['parent_category_name'], 'String')
            }
        }

        return obj
    }
}
