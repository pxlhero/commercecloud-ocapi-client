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
import * as ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

let instance
let client

before(() => {
    client = new ShopApi.ApiClient(
        `${baseUrl}`,
        { 'x-dw-client-id': clientId }
    )
})

beforeEach(() => {
    instance = new ShopApi.CategoriesApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]()
    else
        return object[property]
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value)
    else
        object[property] = value
}

describe('CategoriesApi', () => {

    describe('getCategoriesByID', () => {
        it('should call getCategoriesByID successfully', () =>
            instance.getCategoriesByID('root')
                .then((category) => {
                    if (!category) throw error;

                    expect(category.id).to.be('root');
                })
        )
    })

    describe('getCategoriesByIDs', () => {
        it('should call getCategoriesByIDs successfully', () =>
            instance.getCategoriesByIDs(['root'])
                .then((categoryResult) => {
                    if (!categoryResult) throw error;

                    expect(categoryResult).to.be.an('object');
                })
        )

        it('should get correct number of categories', () =>
            instance.getCategoriesByIDs(['mens', 'womens'])
                .then((categoryResult) => {
                    if (!categoryResult) throw error;

                    expect(categoryResult.count).to.be(2);
                })
        )
    })
})
