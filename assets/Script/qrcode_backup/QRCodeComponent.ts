/*
 * @CreateTime: Sep 25, 2017 5:37 PM
 * 代码实现来源 http://forum.cocos.com/t/topic/44304/10
 * @Description: 二维码组件
 */

const { ccclass, property } = cc._decorator;
@ccclass
export default class QRCodeComponent extends cc.Component {

    @property({
        tooltip : "二维码内容"
    })
	content:string = "";
	
    onLoad () {
		if (this.content){
			this.setContent(this.content);
		}
	}
	public setContent(value:string){
		this.content = value;
		let QRCode = require("qrcode");
		var qrcode = new QRCode(-1, 2);
		qrcode.addData(this.content);
		qrcode.make();

		let size = this.node.width;
		let num = qrcode.getModuleCount();
		var ctx = this.node.getComponent(cc.Graphics);
		ctx.clear();
		ctx.fillColor = cc.Color.BLACK;
		// compute tileW/tileH based on node width and height
		var tileW = size / num;
		var tileH = size / num;
		// draw in the Graphics
		for (var row = 0; row < num; row++) {
			for (var col = 0; col < num; col++) {
				if (qrcode.isDark(row, col)) {
					// cc.log(row, col)
					// ctx.fillColor = cc.Color.BLACK;
					var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
					var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
					ctx.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
					ctx.fill();
				} else {
					// ctx.fillColor = cc.Color.WHITE;
				}
				// var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
				// var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
				// ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
				// ctx.fill();
			}
		}
	}
}