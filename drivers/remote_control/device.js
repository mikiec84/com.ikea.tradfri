'use strict';

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class MotionSensor extends ZigBeeDevice {

	onMeshInit() {

		this.printNode();

		// this.node.endpoints[0].clusters['genPowerCfg'].read('batteryVoltage')
		// 	.then(rsp => console.log(rsp))
		// 	.catch(err => console.error(err))
		//
		// this.node.endpoints[0].clusters['genOnOff'].read('onOff')
		// 	.then(rsp => console.log(rsp))
		// 	.catch(err => console.error(err))

		// setInterval(async () => {
		// 	console.log('read')
		// 	console.log(await this.node.endpoints[0].clusters['genOnOff'].read('onOff'));
		// 	console.log(await this.node.endpoints[0].clusters['genPowerCfg'].read('batteryVoltage'));
		// }, 10000);

		this.registerReportListener('genOnOff', null, report => {
			this.log('genOnOff', 'report');
			this.log(report);
		})
		this.registerReportListener('genLevelCtrl', null, report => {
			this.log('genLevelCtrl', 'report');
			this.log(report);
		})


		// for (let cluster in this.node.endpoints[0].clusters) {
		//
		// 	if (cluster !== 'zapp') {
		// 		this.log('bind', cluster)
		// 		try {
		// 			this.registerReportListener(cluster, null, report => {
		// 				this.log(cluster, 'report');
		// 				this.log(report);
		// 			})
		// 		} catch (err) {
		// 			console.error(err)
		// 		}
		// 	}
		// }
	}
}

module.exports = MotionSensor;
