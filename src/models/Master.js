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
* The Master model module.
* @module models/Master
* @version 17.8
*/
export default class Master {
    /**
    * Constructs a new <code>Master</code>.
    * @alias module:models/Master
    * @class
    * @param link {String}
    * @param masterId {String}
    */
    constructor(link, masterId) {
        /**
        * @member {String} link
        */
        this.link = link

        /**
        * @member {String} master_id
        */
        this.master_id = masterId

        /**
        * @member {Boolean} orderable
        */
        this.orderable = undefined

        /**
        * @member {Number} price
        */
        this.price = undefined

        /**
        * @member {Number} price_max
        */
        this.price_max = undefined

        /**
        * @member {Object.<String, Number>} prices
        */
        this.prices = undefined
    }

    /**
    * Constructs a <code>Master</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Master} obj Optional instance to populate.
    * @return {module:models/Master} The populated <code>Master</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Master()

            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String')
            }
            if (data.hasOwnProperty('master_id')) {
                obj['master_id'] = ApiClient.convertToType(data['master_id'], 'String')
            }
            if (data.hasOwnProperty('orderable')) {
                obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean')
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number')
            }
            if (data.hasOwnProperty('price_max')) {
                obj['price_max'] = ApiClient.convertToType(data['price_max'], 'Number')
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = ApiClient.convertToType(data['prices'], {String: 'Number'})
            }
        }

        return obj
    }
}
