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
    instance = new ShopApi.CustomerProductListItemLink()
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

describe('CustomerProductListItemLinkModel', () => {
    it('should create an instance of CustomerProductListItemLinkModel', () => {
        // uncomment below and update the code to test CustomerProductListItemLinkModel
        // var instane = new ShopApi.CustomerProductListItemLink()
        // expect(instance).to.be.a(ShopApi.CustomerProductListItemLink);
    })

    it('should have the property link (base name: "link")', () => {
        // uncomment below and update the code to test the property link
        // var instane = new ShopApi.CustomerProductListItemLink()
        // expect(instance).to.be();
    })

    it('should have the property title (base name: "title")', () => {
        // uncomment below and update the code to test the property title
        // var instane = new ShopApi.CustomerProductListItemLink()
        // expect(instance).to.be();
    })

})
