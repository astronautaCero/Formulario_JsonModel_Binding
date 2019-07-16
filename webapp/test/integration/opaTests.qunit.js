/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"form1/Form1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});