const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should;

const shouldBeGlobalyExposed = { assert,expect, should };

Object.assign(global, shouldBeGlobalyExposed);

