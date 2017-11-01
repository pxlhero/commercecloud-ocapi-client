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
    instance = new ShopApi.ProductLink()
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

describe('ProductLinkModel', () => {
    it('should create an instance of ProductLinkModel', () => {
        // uncomment below and update the code to test ProductLinkModel
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be.a(ShopApi.ProductLink);
    })

    it('should have the property sourceProductId (base name: "source_product_id")', () => {
        // uncomment below and update the code to test the property sourceProductId
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be();
    })

    it('should have the property sourceProductLink (base name: "source_product_link")', () => {
        // uncomment below and update the code to test the property sourceProductLink
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be();
    })

    it('should have the property targetProductId (base name: "target_product_id")', () => {
        // uncomment below and update the code to test the property targetProductId
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be();
    })

    it('should have the property targetProductLink (base name: "target_product_link")', () => {
        // uncomment below and update the code to test the property targetProductLink
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be();
    })

    it('should have the property type (base name: "type")', () => {
        // uncomment below and update the code to test the property type
        // var instane = new ShopApi.ProductLink()
        // expect(instance).to.be();
    })

})
