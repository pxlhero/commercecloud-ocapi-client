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
import ShippingPromotion from './ShippingPromotion'

/**
* The ShippingMethod model module.
* @module models/ShippingMethod
* @version 17.8
*/
export default class ShippingMethod {
    /**
    * Constructs a new <code>ShippingMethod</code>.
    * Document representing a shipping method.
    * @alias module:models/ShippingMethod
    * @class
    * @param cStorePickupEnabled {Boolean}
    * @param id {String} The shipping method id.
    */
    constructor(id) {
        /**
        * The localized description of the shipping method.
        * @member {String} description
        */
        this.description = undefined

        /**
        * The external shipping method.
        * @member {String} external_shipping_method
        */
        this.external_shipping_method = undefined

        /**
        * The shipping method id.
        * @member {String} id
        */
        this.id = id

        /**
        * The localized name of the shipping method.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The shipping cost total, including shipment level costs and  product level fix and surcharge costs.
        * @member {Number} price
        */
        this.price = undefined

        /**
        * The array of active customer shipping promotions for this shipping  method. This array can be empty.
        * @member {Array.<module:models/ShippingPromotion>} shipping_promotions
        */
        this.shipping_promotions = undefined
    }

    /**
    * Constructs a <code>ShippingMethod</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ShippingMethod} obj Optional instance to populate.
    * @return {module:models/ShippingMethod} The populated <code>ShippingMethod</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingMethod()

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('external_shipping_method')) {
                obj['external_shipping_method'] = ApiClient.convertToType(data['external_shipping_method'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number')
            }
            if (data.hasOwnProperty('shipping_promotions')) {
                obj['shipping_promotions'] = ApiClient.convertToType(data['shipping_promotions'], [ShippingPromotion])
            }
        }

        return obj
    }
}
