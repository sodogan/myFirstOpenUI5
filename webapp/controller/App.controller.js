sap.ui.define(['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
	"use strict";

	var PageController = Controller.extend("demo.openui5.controller.App", {

		onPress: function (evt) {
			MessageToast.show(evt.getSource().getId() + " Pressed");
		}
	});

	return PageController;

});