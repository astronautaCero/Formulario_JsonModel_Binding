/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"form1/Form1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});