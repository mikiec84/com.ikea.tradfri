'use strict';

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class MotionSensor extends ZigBeeDevice {

	onMeshInit() {

		this.registerAttrReportListener('genPowerCfg', 'batteryPercentageRemaining', 10, 61, 1, this.onPowerCfgBatteryPercentageRemainingReport.bind(this))
			.then(() => {
				this.log('registered attr report listener');
			})
			.catch(err => {
				this.error('failed to register attr report listener', err);
			});
	}

	onPowerCfgBatteryPercentageRemainingReport(value) {
		this.log('onPowerCfgBatteryPercentageRemainingReport', value);
	}
}

module.exports = MotionSensor;
