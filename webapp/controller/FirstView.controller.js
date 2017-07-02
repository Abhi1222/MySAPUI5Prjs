sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(BaseController, MessageBox) {
	"use strict";

	var Controller = BaseController.extend("abhiMyFirstDemo.controller.FirstView");
	Controller.prototype.onInit = function() {};
	Controller.prototype.onBeforeRendering = function() {
		var oLocalModel = new sap.ui.model.json.JSONModel({
			firstName: "",
			lastName: "",
			Email: "",
			ConfirmEmail: "",
			Password: "",
			confirmPassword: "",
			Telephone: ""
		});
		this.getView().setModel(oLocalModel, "oLocalModel");
		var oTestModel = new sap.ui.model.json.JSONModel({
			isMandatory: true
		});
		this.getView().setModel(oTestModel, "oTestModel");

		var oComboBoxModel = new sap.ui.model.json.JSONModel({
			results: [{   //results/0
				key: "1",
				text: "cricket"
			}, {
				key: "2",  //results/1
				text: "Tennis"

			}, {
				key: "3", //results/2
				text: "Badminton"
			}, {
				key: "4", //results/3
				text: "Football"
			}]
		});
		this.getView().setModel(oComboBoxModel, "oComboBoxModel");
		var oSelectBoxModel = new sap.ui.model.json.JSONModel({
			results: [{
				key: "1",
				text: "Transformers"
			}, {
				key: "2",
				text: "Cars3"

			}, {
				key: "3",
				text: "Baby Driver"
			}, {
				key: "4",
				text: "Jhonwick 2"
			}]
		});
		this.getView().setModel(oSelectBoxModel, "oSelectBoxModel");
		var oTableModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
		this.getView().setModel(oTableModel, "oTableModel");
		var oGridTableModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
		this.getView().setModel(oGridTableModel, "oGridTableModel");
	};
	Controller.prototype.onAfterRendering = function() {};
	Controller.prototype.fMySubmitPress = function(oEvent) {
		/*		var sFirstName = this.getView().getModel("oLocalModel").getProperty("/firstName");
				var sLastName = this.getView().getModel("oLocalModel").getProperty("/lastName");
				var sEmail = this.getView().getModel("oLocalModel").getProperty("/Email");
				var sCEmail = this.getView().getModel("oLocalModel").getProperty("/ConfirmEmail");
				var sPassword = this.getView().getModel("oLocalModel").getProperty("/Password");
				var sCPassword = this.getView().getModel("oLocalModel").getProperty("/confirmPassword");
				var sPhoneNumber = this.getView().getModel("oLocalModel").getProperty("/Telephone");
				var sPhoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
				if (sFirstName === "") {
					MessageBox.alert("Please Enter the First Name");
					return false;
				}
				if (sLastName === "") {
					MessageBox.alert("Please Enter the Last Name");
					return false;
				}
				if (!(sEmail === sCEmail)) {
					MessageBox.alert("Invalid Email");
					return false;
				}
				if (!(sPassword === sCPassword)) {
					MessageBox.alert("Invalid Password");
					return false;
				}
				if (sPhoneNumber.match(sPhoneRegex)) {
					return true;
				} else {
					MessageBox.alert("Not a valid Phone Number");
					return false;
				}*/
	};
	Controller.prototype.fMyResetPress = function(oEvent1) {
		/*		this.getView().getModel("oLocalModel").setProperty("/firstName", "");
				this.getView().getModel("oLocalModel").setProperty("/lastName", "");
				this.getView().getModel("oLocalModel").setProperty("/Email", "");
				this.getView().getModel("oLocalModel").setProperty("/ConfirmEmail", "");
				this.getView().getModel("oLocalModel").setProperty("/Password", "");
				this.getView().getModel("oLocalModel").setProperty("/confirmPassword", "");
				this.getView().getModel("oLocalModel").setProperty("/Telephone", "");*/
	};
	Controller.prototype.fnRowSelected = function(oEvent) {
		var sPath = oEvent.getParameter("rowContext").getPath();
		var idGridLayout = this.getView().byId("idGridLayout");
		idGridLayout.bindElement({path: sPath, model: "oGridTableModel"});
	};
	return Controller;
});