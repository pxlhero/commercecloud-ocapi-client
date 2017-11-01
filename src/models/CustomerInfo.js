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
* The CustomerInfo model module.
* @module models/CustomerInfo
* @version 17.8
*/
export default class CustomerInfo {
    /**
    * Constructs a new <code>CustomerInfo</code>.
    * Document representing information used to identify a customer.
    * @alias module:models/CustomerInfo
    * @class
    * @param email {String} The customer's email address.
    */
    constructor(email) {
        /**
        * The customer's number (id).
        * @member {String} customer_id
        */
        this.customer_id = undefined

        /**
        *
        * @member {String} customer_name
        */
        this.customer_name = undefined

        /**
        * The customer's number (id).
        * @member {String} customer_no
        */
        this.customer_no = undefined

        /**
        * The customer's email address.
        * @member {String} email
        */
        this.email = email
    }

    /**
    * Constructs a <code>CustomerInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerInfo} obj Optional instance to populate.
    * @return {module:models/CustomerInfo} The populated <code>CustomerInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerInfo()

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String')
            }
            if (data.hasOwnProperty('customer_name')) {
                obj['customer_name'] = ApiClient.convertToType(data['customer_name'], 'String')
            }
            if (data.hasOwnProperty('customer_no')) {
                obj['customer_no'] = ApiClient.convertToType(data['customer_no'], 'String')
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String')
            }
        }

        return obj
    }
}
