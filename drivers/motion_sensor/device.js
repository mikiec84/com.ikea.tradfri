'use strict';

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class MotionSensor extends ZigBeeDevice {

	onMeshInit() {

		this.printNode();

		// this.node.endpoints[0].clusters['genPowerCfg'].read('batteryVoltage')
		// 	.then(rsp => console.log(rsp))
		// 	.catch(err => console.error(err))
		//
		// this.node.endpoints[0].clusters['genAlarms'].read('alarm')
		// 	.then(rsp => console.log(rsp))
		// 	.catch(err => console.error(err))

		// setInterval(async () => {
		// 	console.log('read')
		// 	console.log(await this.node.endpoints[0].clusters['genOnOff'].read('onOff'));
		// 	console.log(await this.node.endpoints[0].clusters['genPowerCfg'].read('batteryVoltage'));
		// }, 10000);
		// this.log(this.node.endpoints[0].clusters['gebBasic'])

		this.node.endpoints[0].clusters['genBasic'].report('65533', 10, 15, null, (err) => {
			console.log('genAlarms', err);
		});

		// this.node.endpoints[0].clusters['genPowerCfg'].report('batteryPercentageRemaining', 10, 15, null, (err) => {
		// 	console.log('genPowerCfg', err);
		// });
		//
		// this.node.endpoints[0].clusters['genAlarms'].report('alarmCount', 10, 15, null, (err) => {
		// 	console.log('genAlarms', err);
		// });
		// this.registerReportListener('genPowerCfg', 'batteryPercentageRemaining', report => {
		// 	this.log('genPowerCfg', 'batteryPercentageRemaining');
		// 	this.log(report);
		// });
		//
		// for (let cluster in this.node.endpoints[0].clusters) {
		//
		// 	if (cluster !== 'zapp') {
		// 		this.log('bind', this.node.endpoints[0].clusters[cluster].attrs)
		// 		// try {
		// 		// 	this.registerReportListener(cluster, null, report => {
		// 		// 		this.log(cluster, 'report');
		// 		// 		this.log(report);
		// 		// 	})
		// 		// } catch (err) {
		// 		// 	console.error(err)
		// 		// }
		// 	}
		// }
	}
}

module.exports = MotionSensor;
