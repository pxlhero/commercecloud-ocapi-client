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

let instance
let client

before(() => {
    client = new ShopApi.ApiClient(
        `${baseUrl}`,
        { 'x-dw-client-id': clientId }
    )
})

beforeEach(() => {
    instance = new ShopApi.CustomObjectsApi(client)
})

var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]()
    else
        return object[property]
}

var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value)
    else
        object[property] = value
}

const INVALID_OBJECT_TYPE = '__INVALID__'
const INVALID_KEY_NAME = '__INVALID__'

describe('CustomObjectsApi', () => {
    describe('getCustomObjectsByIDByID', () => {
        it('should return fault when calling getCustomObjectsByIDByID with invalid type and key', () =>
            instance.getCustomObjectsByIDByID(INVALID_OBJECT_TYPE, INVALID_KEY_NAME)
                .catch((fault) => {
                    expect(fault.type).to.be('ObjectTypeNotFoundException')
                })
        )
    })
})
