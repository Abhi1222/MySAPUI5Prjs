sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(BaseController, MessageBox) {
	"use strict";

	var Controller = BaseController.extend("abhiMyFirstDemo.controller.FirstView");
	Controller.prototype.onBeforeRendering = function() {
		var oSelectItemList = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/Customers.json"));
		this.getView().setModel(oSelectItemList, "oGridTableModel");
	};
	Controller.prototype.fnRowSelected = function(oEvent) {
		var sPath,
			oGridLayout;

		sPath = oEvent.getParameter("rowContext").getPath();
		oGridLayout = this.getView().byId("idGridLayout");

		oGridLayout.bindElement({
			path: sPath + "/Customer",
			model: "oGridTableModel"
		});
	};
	return Controller;
});