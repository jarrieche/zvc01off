sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"com/vc01/off/zvc01off/libs/moment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, MessageBox, momentjs) {
		"use strict";
		var ZFIORI_SRV;
		var arrayPedidos = new Array();
		return Controller.extend("com.vc01.off.zvc01off.controller.main", {
			onInit: function () {

			},
			sincronizar: function () {
				var thes = this;
				var oModelData = this.getView().getModel("data");
				var urlvbeln = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/DocVtasCont_SHSet";

				$.ajax({
					url: urlvbeln,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/DocVtasCont", data.d.results);
						var local = data.d.results;
						localStorage.setItem('DocVtasCont', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});


				var urlvkorg = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/OrgSales_SHSet";

				$.ajax({
					url: urlvkorg,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/OrgSales", data.d.results);
						var local = data.d.results;
						localStorage.setItem('OrgSales', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});
				var urlvtweg = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/CanalDis_SHSet";

				$.ajax({
					url: urlvtweg,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/CanalDis", data.d.results);
						var local = data.d.results;
						localStorage.setItem('CanalDis', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});

				var urlspart = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/Sector_SHSet";

				$.ajax({
					url: urlspart,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/Sector", data.d.results);
						var local = data.d.results;
						localStorage.setItem('Sector', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});

				var urlktaar = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HKtaarSet";

				$.ajax({
					url: urlktaar,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/HKtaar", data.d.results);
						var local = data.d.results;
						localStorage.setItem('HKtaar', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});
				var urlVkbur = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HTvburSet";

				$.ajax({
					url: urlVkbur,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/HTvbur", data.d.results);
						var local = data.d.results;
						localStorage.setItem('HTvbur', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});
				var urlVkgrp = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HTvkgrSet";

				$.ajax({
					url: urlVkgrp,
					type: "GET",
					dataType: "json",
					contentType: "application/json; charset=utf-8",

					success: function (data) {
						oModelData.setProperty("/HTvkgr", data.d.results);
						var local = data.d.results;
						localStorage.setItem('HTvkgr', JSON.stringify(local));
					},
					error: function (error) {
						var objectViewModel = that.getModel("objectView");
						//console.log("/dhola ", error);
						reject(error);
					}
				});
			},
			clear: function () {
				this.getView().byId("vkorg").setValue('');
				this.getView().byId("vbeln").setValue('');
				this.getView().byId("vtweg").setValue('');
				this.getView().byId("spart").setValue('');
				this.getView().byId("vbeln").setValue('');
				this.getView().byId("vtweg").setValue('');
				this.getView().byId("spart").setValue('');
				this.getView().byId("Ktabg").setValue('');
				this.getView().byId("Ktaen").setValue('');
				this.getView().byId("Ktext").setValue('');
				this.getView().byId("Ktaar").setValue('');
				
				// var Vkbur = this.getView().byId('Vkbur').getValue();
				// var Vkgrp = this.getView().byId('Vkgrp').getValue();
				// var ktabgDate = moment(ktabg).format('YYYY-MM-DD');
				// var KtabtTime = moment(ktabg).format('HH:mm:ss');
				// var KtaenDate = moment(Ktaen).format('YYYY-MM-DD');
				// var KtaenTime = moment(Ktaen).format('HH:mm:ss');
			},
			_posSapAJAX: function (aData) {
				var that = this;
				var sUrl = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/VC01nSet";
				return new Promise((resolve, reject) => {
					$.ajax({
						url: sUrl,
						type: "POST",
						dataType: "json",
						contentType: "application/json; charset=UTF-8; IEEE754Compatible=true",
						data: JSON.stringify(aData),
						success: function (dataResponse, results) {
							//console.log("dataResponse:", dataResponse);
							//console.log("results:", results);
							resolve(dataResponse);
						},
						error: function (error) {
							//console.log("Error:", error);
							//  MessageBox.error("Error: " + error.responseJSON.error.message, {
							//     icon: MessageBox.Icon.ERROR,
							//     title: "Error"
							// });
							reject(error.responseJSON.error.message);
						},
					});
				});
			},
			_posSap: function (aData) {
				var that = this;
				return new Promise(function (fnResolve, fnReject) {
					that.getView().getModel("modeloNoGral").create("/VC01nSet", aData,
						{
							parameters:{ groupId:"batchCreate"},
							success: function (oData, oResponse) {
								////console.log("oData",oData)
								////console.log("oResponse",oResponse)
								fnResolve(oResponse);
							},
							error: function (oError) {

								fnReject(new Error(oError.message));
							}
						});
				});
			},
			_readOdataV2: function (modelo, metodo, filtro, orden) {
				var that = this;
				var method = "/" + metodo;
				return new Promise(function (fnResolve, fnReject) {
					that.getView().getModel(modelo).read(method,
						{
							filters: filtro,
							sorters: orden,
							success: function (oData, oResponse) {
								//var response = oData.results;
								////console.log("oData",oData)
								////console.log("oResponse",oResponse)
								fnResolve(oData);
							},
							error: function (error, status, err) {
								//sap.ui.core.BusyIndicator.hide();
								fnReject(new Error(error.message));
							}
						});
				});
			},
			onEnviar: function () {
				var that = this;

				var modeloNoGral = that.oView.getModel("modeloNoGral");
				////console.log("modeloNoGral", modeloNoGral);
				var modelo = "modeloNoGral";
				var metodo = "VC01nSet";
				/*that._readOdataV2(modelo, metodo).then(function (dataRecibida) {
					//console.log("dataRecibidaV2--> ",dataRecibida)
				});*/
                arrayPedidos = JSON.parse(localStorage.getItem("Pedidos"));
				//=== comparacyon
				//= asygnay
				if(arrayPedidos.length === 0){
					MessageBox.error(message, {
						icon: MessageBox.Icon.ERROR,
						title: "No hay actividades por enviar"
					});
					return;
				}
				//modeloNoGral.setData([]);
				//var aDeferredGroup = modeloNoGral.getDeferredGroups().push("batchCreate");
				//modeloNoGral.setDeferredGroups(aDeferredGroup);
				modeloNoGral.setUseBatch(true);
				var mParameters = {groupId:"batchCreate"};
				arrayPedidos.forEach(element => {
				modeloNoGral.create("/VC01nSet",element, mParameters);
				});

				modeloNoGral.submitChanges({
					success: function(data){
						console.log(data);
					},
					error: function(e){
						console.log(e);
					}
				});
				
				/* var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/VC01nSet";
				//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
				var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
				//cuando en el backend se pueda env lote bacj maxivo
				//COND(HAY CONEXN){}ELSE{EXPORTAR ARCHO OFFLE}
				//debugger;
				that._posSap(JSON.stringify(arrayPedidos)).then(function (dataRecibidaCreacion) {
					//console.log("dataRecibida-POST--> ", dataRecibidaCreacion)
					var sapMessage = JSON.parse(dataRecibidaCreacion.headers["sap-message"]);
					let message = sapMessage.message;
					let severity = sapMessage.severity;
					localStorage.removeItem("Pedidos");
					//console.log("sapMessage", sapMessage)
					//console.log("message", message)
					//console.log("severity", severity)
					MessageBox.success(message, {
						icon: MessageBox.Icon.success,
						title: "Syncro correct"
					});
				}).catch(function(error){
                    MessageBox.error(error, {
						icon: MessageBox.Icon.error,
						title: "Syncro Error"
					}); 
				}); */
                
			},
			// ->objetmatchet var Formulars = new Array(); 
			guardar: function (oEvent) {
				var that = this;
				var vbeln = this.getView().byId('vbeln').getValue();
				var vkorg = this.getView().byId('vkorg').getValue();
				var vtweg = this.getView().byId('vtweg').getValue();
				var spart = this.getView().byId('spart').getValue();
				var ktabg = this.getView().byId('Ktabg').getDateValue();
				var Ktaen = this.getView().byId('Ktaen').getDateValue();
				var ktext = this.getView().byId('Ktext').getValue();
				var Ktaar = this.getView().byId('Ktaar').getValue();
				var Vkbur = this.getView().byId('Vkbur').getValue();
				var Vkgrp = this.getView().byId('Vkgrp').getValue();
				var ktabgDate = moment(ktabg).format('YYYY-MM-DD');
				var KtabtTime = moment(ktabg).format('HH:mm:ss');
				var KtaenDate = moment(Ktaen).format('YYYY-MM-DD');
				var KtaenTime = moment(Ktaen).format('HH:mm:ss');
				var array = {
					'Vbeln': vbeln,
					'Vkorg': vkorg,
					'Vtweg': vtweg,
					'Spart': spart,
					'Ktabg': ktabgDate,
					'Ktabt': KtabtTime,
					'Ktext': ktext,
					'Ktaar': Ktaar,
					'Ktagr': '',
					'Kunnr': '',
					'Parvs': '',
					'Ktaen': KtaenDate,
					'Ktaet': KtaenTime,
					'Ktast': '',
					'Ktaer': '',
					'Ktaeb': '',
					'Vkbur': Vkbur,
					'Vkgrp': Vkgrp,
					'Soldto': '',
					'Percto': '',
					'Respto': ''
				};
				//arrayPedidos.push(array);				
				if (localStorage.getItem('Pedidos') !== undefined && localStorage.getItem('Pedidos')) {
					arrayPedidos = JSON.parse(localStorage.getItem("Pedidos"));
				}
				arrayPedidos.push(array);
				localStorage.setItem("Pedidos", JSON.stringify(arrayPedidos));
				MessageBox.success("Los datos se han guardado..", {
					icon: MessageBox.Icon.success,
					title: "Proceso Exitoso"
				});
				
			},
			guardarOLD: function () {
				var vbeln = this.getView().byId('vbeln').getValue();
				var vkorg = this.getView().byId('vkorg').getValue();
				var vtweg = this.getView().byId('vtweg').getValue();
				var spart = this.getView().byId('spart').getValue();
				var ktabg = this.getView().byId('Ktabg').getDateValue();
				var Ktaen = this.getView().byId('Ktaen').getDateValue();
				var ktext = this.getView().byId('Ktext').getValue();
				var Ktaar = this.getView().byId('Ktaar').getValue();
				var Vkbur = this.getView().byId('Vkbur').getValue();
				var Vkgrp = this.getView().byId('Vkgrp').getValue();
				var ktabgDate = moment(ktabg).format('YYYY-MM-DD');
				var KtabtTime = moment(ktabg).format('HH:mm:ss');
				var KtaenDate = moment(Ktaen).format('YYYY-MM-DD');
				var KtaenTime = moment(Ktaen).format('HH:mm:ss');
				var array = {
					'Vbeln': vbeln,
					'Vkorg': vkorg,
					'Vtweg': vtweg,
					'Spart': spart,
					'Ktabg': ktabgDate,
					'Ktabt': KtabtTime,
					'Ktext': ktext,
					'Ktaar': Ktaar,
					'Ktagr': '',
					'Kunnr': '',
					'Parvs': '',
					'Ktaen': KtaenDate,
					'Ktaet': KtaenTime,
					'Ktast': '',
					'Ktaer': '',
					'Ktaeb': '',
					'Vkbur': Vkbur,
					'Vkgrp': Vkgrp,
					'Soldto': '',
					'Percto': '',
					'Respto': ''
				};
				//array.push();
				var data = this.getView().getModel('data');
				if (data.getProperty('/vc01') === undefined) {
					data.setProperty('/vc01', []);
					data.setProperty('/vc01', array);
				}
				else {
					var contador = data.getProperty('/vc01').length;
					data.setProperty('/vc01/' + contador, array);
				}
				var local = data.getProperty('/vc01');
				localStorage.setItem('vc01', JSON.stringify(local));
			},
			getBukrs: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueHelpDialogCepa) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/VC01nSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueHelpDialogCepa = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.HelloDialog",
						this
					);
					this._valueHelpDialogCepa.setModel(this.getView().getModel('data').getProperty('/Vkorg'));
					this.getView().addDependent(this._valueHelpDialogCepa);
				}


				this._valueHelpDialogCepa.open();
			},
			getVbeln: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusVbeln) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/VC01nSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusVbeln = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopVbeln",
						this
					);
					this._valueBusVbeln.setModel(this.getView().getModel('data').getProperty('/Vbeln'));
					this.getView().addDependent(this._valueBusVbeln);
				}


				this._valueBusVbeln.open();
			},
			getVtweg: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusVtweg) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/CanalDis_SHSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusVtweg = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopVtweg",
						this
					);
					this._valueBusVtweg.setModel(this.getView().getModel('data').getProperty('/Vtweg'));
					this.getView().addDependent(this._valueBusVtweg);
				}


				this._valueBusVtweg.open();
			},
			getSpart: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusSpart) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/Sector_SHSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusSpart = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopSpart",
						this
					);
					this._valueBusSpart.setModel(this.getView().getModel('data').getProperty('/Spart'));
					this.getView().addDependent(this._valueBusSpart);
				}


				this._valueBusSpart.open();
			},
			getKtaar: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusKtaar) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HKtaarSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusKtaar = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopKtaar",
						this
					);
					this._valueBusKtaar.setModel(this.getView().getModel('data').getProperty('/Ktaar'));
					this.getView().addDependent(this._valueBusKtaar);
				}


				this._valueBusKtaar.open();
			},
			getVkbur: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusVkbur) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HTvburSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusVkbur = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopVkbur",
						this
					);
					this._valueBusVkbur.setModel(this.getView().getModel('data').getProperty('/Vkbur'));
					this.getView().addDependent(this._valueBusVkbur);
				}


				this._valueBusVkbur.open();
			},
			getVkgrp: function (oEvent) {
				var sInputValue2 = oEvent.getSource().getValue();

				this.inputId = oEvent.getSource().getId();
				// create value help dialog
				if (!this._valueBusVkgrp) {
					var url = "/sap/opu/odata/sap/Z_OD_FIORI_SD_SRV/HTvkgrSet";
					//var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true, "ABCORECONS4", "Core2021*");
					var ZFIORI_SRV = new sap.ui.model.odata.ODataModel(url, true);
					this._valueBusVkgrp = sap.ui.xmlfragment(
						"com.vc01.off.zvc01off.view.PopVkgrp",
						this
					);
					this._valueBusVkgrp.setModel(this.getView().getModel('data').getProperty('/Vkgrp'));
					this.getView().addDependent(this._valueBusVkgrp);
				}


				this._valueBusVkgrp.open();
			},
			//env sap
			enviarSap: function (oEvent) {
				//console.log('Estoy en env sap');
			},
			//fn sap
			//función búsqueda:
			_handleValueHelpSearchCepa: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Vkorg",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			_handleValueHelpCloseCepa: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda vbeln
			busVbeln: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Vbeln",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busVbelnClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda vtweg
			busVtweg: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Vtweg",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busVtwegClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda Spart
			busSpart: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Spart",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busSpartClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda Ktaar
			busKtaar: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Ktaar",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busKtaarClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda Vkbur
			busVkbur: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Vkbur",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busVkburClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			//busqueda Vkgrp
			busVkgrp: function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Vkgrp",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},
			busVkgrpClose: function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productCepa = this.byId(this.inputId);
					productCepa.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			getRouter: function () {

				return sap.ui.core.UIComponent.getRouterFor(this);

			}
		});
	});
