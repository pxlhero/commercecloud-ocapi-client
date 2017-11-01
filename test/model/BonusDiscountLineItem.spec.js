/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

import expect from 'expect.js'
import ShopApi from '../../src/index'

    let instance

    beforeEach(() => {
        instance = new ShopApi.BonusDiscountLineItem()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('BonusDiscountLineItemModel', () => {
        it('should create an instance of BonusDiscountLineItemModel', () => {
      // uncomment below and update the code to test BonusDiscountLineItemModel
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be.a(ShopApi.BonusDiscountLineItem);
        })

        it('should have the property bonusProducts (base name: "bonus_products")', () => {
      // uncomment below and update the code to test the property bonusProducts
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be();
        })

        it('should have the property couponCode (base name: "coupon_code")', () => {
      // uncomment below and update the code to test the property couponCode
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be();
        })

        it('should have the property id (base name: "id")', () => {
      // uncomment below and update the code to test the property id
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be();
        })

        it('should have the property maxBonusItems (base name: "max_bonus_items")', () => {
      // uncomment below and update the code to test the property maxBonusItems
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be();
        })

        it('should have the property promotionId (base name: "promotion_id")', () => {
      // uncomment below and update the code to test the property promotionId
      // var instane = new ShopApi.BonusDiscountLineItem()
      // expect(instance).to.be();
        })

    })
