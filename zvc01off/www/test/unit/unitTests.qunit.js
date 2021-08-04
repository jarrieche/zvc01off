/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comvc01.off./zvc01off/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
