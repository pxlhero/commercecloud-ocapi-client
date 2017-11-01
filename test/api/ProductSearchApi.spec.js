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

import {clientId, proxyUrl, baseUrl} from '../config.json'

let instance
let client

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

beforeEach(() => {
    instance = new ShopApi.ProductSearchApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('ProductSearchApi', () => {
    //
    describe('getProductSearch', () => {
        it('should call getProductSearch successfully', () =>
            instance.getProductSearch({})
                .then((productSearchResult) => {
                    expect(productSearchResult.constructor.name).to.be('ProductSearchResult')
                })
        )
    })

    describe('getProductSearch', () => {
        it('should call getProductSearch for all products in root successfully', () =>
            instance.getProductSearch({refine: ['cgid=root']})
                .then((productSearchResult) => {
                    expect(productSearchResult.count).to.above(0)
                })
        )
    })

    describe('getProductSearchAvailability', () => {
        it('should call getProductSearchAvailability successfully', () =>
            instance.getProductSearchAvailability({refine: ['cgid=root'], count: 1})
                .then((productSearchResult) => {
                    expect(productSearchResult.constructor.name).to.be('ProductSearchResult')
                    expect(productSearchResult.hits[0].orderable).not.to.be(undefined)
                })
        )
    })

    describe('getProductSearchImages', () => {
        it('should call getProductSearchImages successfully', () =>
            instance.getProductSearchImages({refine: ['cgid=root'], count: 1})
                .then((productSearchResult) => {
                    expect(productSearchResult.constructor.name).to.be('ProductSearchResult')
                    expect(productSearchResult.hits[0].image).to.be.an('object')
                })
        )
    })

    describe('getProductSearchPrices', () => {
        it('should call getProductSearchPrices successfully', () =>
            instance.getProductSearchPrices({refine: ['cgid=root'], count: 1})
                .then((productSearchResult) => {
                    expect(productSearchResult.constructor.name).to.be('ProductSearchResult')
                    expect(productSearchResult.hits[0].price).not.to.be(undefined)
                })
        )
    })

    describe('getProductSearchVariations', () => {
        it('should call getProductSearchVariations successfully', () =>
            instance.getProductSearchVariations({refine: ['cgid=root'], count: 1})
                .then((productSearchResult) => {
                    expect(productSearchResult.constructor.name).to.be('ProductSearchResult')
                    expect(productSearchResult.hits[0].variation_attributes).to.be.an('object')
                })
        )
    })

})
