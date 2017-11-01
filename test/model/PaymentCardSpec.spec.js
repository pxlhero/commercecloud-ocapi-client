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
    instance = new ShopApi.PaymentCardSpec()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('PaymentCardSpecModel', () => {
    it('should create an instance of PaymentCardSpecModel', () => {
        // uncomment below and update the code to test PaymentCardSpecModel
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be.a(ShopApi.PaymentCardSpec);
    })

    it('should have the property cardType (base name: "card_type")', () => {
        // uncomment below and update the code to test the property cardType
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property checksumVerificationEnabled (base name: "checksum_verification_enabled")', () => {
        // uncomment below and update the code to test the property checksumVerificationEnabled
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property description (base name: "description")', () => {
        // uncomment below and update the code to test the property description
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property image (base name: "image")', () => {
        // uncomment below and update the code to test the property image
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property numberLengths (base name: "number_lengths")', () => {
        // uncomment below and update the code to test the property numberLengths
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property numberPrefixes (base name: "number_prefixes")', () => {
        // uncomment below and update the code to test the property numberPrefixes
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

    it('should have the property securityCodeLength (base name: "security_code_length")', () => {
        // uncomment below and update the code to test the property securityCodeLength
        // var instane = new ShopApi.PaymentCardSpec()
        // expect(instance).to.be();
    })

})
