cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        qrNode: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.qrNode.getComponent("MagicQRCode").string;
        cc.NodePool
    }

    // called every frame
    // update: function (dt) {

    // },
});
