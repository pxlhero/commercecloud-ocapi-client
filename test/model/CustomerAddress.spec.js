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
    instance = new ShopApi.CustomerAddress()
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

describe('CustomerAddressModel', () => {
    it('should create an instance of CustomerAddressModel', () => {
        // uncomment below and update the code to test CustomerAddressModel
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be.a(ShopApi.CustomerAddress);
    })

    it('should have the property address1 (base name: "address1")', () => {
        // uncomment below and update the code to test the property address1
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property address2 (base name: "address2")', () => {
        // uncomment below and update the code to test the property address2
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property addressId (base name: "address_id")', () => {
        // uncomment below and update the code to test the property addressId
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property city (base name: "city")', () => {
        // uncomment below and update the code to test the property city
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property companyName (base name: "company_name")', () => {
        // uncomment below and update the code to test the property companyName
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property countryCode (base name: "country_code")', () => {
        // uncomment below and update the code to test the property countryCode
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property creationDate (base name: "creation_date")', () => {
        // uncomment below and update the code to test the property creationDate
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property firstName (base name: "first_name")', () => {
        // uncomment below and update the code to test the property firstName
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property fullName (base name: "full_name")', () => {
        // uncomment below and update the code to test the property fullName
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property jobTitle (base name: "job_title")', () => {
        // uncomment below and update the code to test the property jobTitle
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property lastModified (base name: "last_modified")', () => {
        // uncomment below and update the code to test the property lastModified
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property lastName (base name: "last_name")', () => {
        // uncomment below and update the code to test the property lastName
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property phone (base name: "phone")', () => {
        // uncomment below and update the code to test the property phone
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property postBox (base name: "post_box")', () => {
        // uncomment below and update the code to test the property postBox
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property postalCode (base name: "postal_code")', () => {
        // uncomment below and update the code to test the property postalCode
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property preferred (base name: "preferred")', () => {
        // uncomment below and update the code to test the property preferred
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property salutation (base name: "salutation")', () => {
        // uncomment below and update the code to test the property salutation
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property secondName (base name: "second_name")', () => {
        // uncomment below and update the code to test the property secondName
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property stateCode (base name: "state_code")', () => {
        // uncomment below and update the code to test the property stateCode
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property suffix (base name: "suffix")', () => {
        // uncomment below and update the code to test the property suffix
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property suite (base name: "suite")', () => {
        // uncomment below and update the code to test the property suite
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

    it('should have the property title (base name: "title")', () => {
        // uncomment below and update the code to test the property title
        // var instane = new ShopApi.CustomerAddress()
        // expect(instance).to.be();
    })

})
