/*global QUnit*/

sap.ui.define([
	"form1/Form1/controller/ViewForms1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewForms1 Controller");

	QUnit.test("I should test the ViewForms1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});