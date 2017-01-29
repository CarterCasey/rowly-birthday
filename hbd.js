var ROWLS = [
	"http://68.media.tumblr.com/7cd9133cfccf7ed40030433e3d8fd547/tumblr_inline_oiz3sjcOfe1uvm1n9_400.png",
	"http://68.media.tumblr.com/2787f567a38602e988177120ce781f11/tumblr_inline_oi8sxkVgw61uvm1n9_400.png",
	"http://68.media.tumblr.com/ce046ecfd0e8bef961dea4e6cdc030a9/tumblr_inline_okhdigyCQB1uvm1n9_400.png",
	"http://68.media.tumblr.com/3a9ed86d7fe4b5c0dc07d39bb055abfc/tumblr_inline_okbr93seRK1uvm1n9_500.png",
	"http://68.media.tumblr.com/eb9c5dc94ee737c4256ece9c353b68d5/tumblr_inline_ok9ys51gGi1uvm1n9_540.gif",
	"http://68.media.tumblr.com/20000814c384942b89550b1188e6f9d7/tumblr_inline_okfguxIeZ71uvm1n9_400.png",
	"http://68.media.tumblr.com/13efa9f0076dd769f0f8a37f436669e6/tumblr_inline_oh43vxk6FW1uvm1n9_500.png",
	"http://68.media.tumblr.com/f2fa7f1aa074debbded51235e2445c0d/tumblr_ogwtdwuKBL1vhfdmio1_500.png",
	"http://68.media.tumblr.com/7e57ec9d9a031767103a48ca9fc06f21/tumblr_inline_oh3w3kBxv41uvm1n9_500.png",
	"http://68.media.tumblr.com/199172dd2be03c309a5097827e7c17b2/tumblr_inline_ohvt77QEPx1uvm1n9_500.png",
	"http://68.media.tumblr.com/bf7e030eb2bf8a3d82d15f989a3a654a/tumblr_inline_ohqs9q6zxC1uvm1n9_500.png",
	"http://68.media.tumblr.com/2f644cfd2672685f85925dcdfaf19993/tumblr_inline_oi1zdois1f1uvm1n9_500.png",
	"http://68.media.tumblr.com/af61b13e100e6d5fee1978f8e3876583/tumblr_inline_oioqyb9Pw71uvm1n9_500.png",
	"http://68.media.tumblr.com/c5d29da598ae6c81b1b682a2e0a672ce/tumblr_inline_oil2syYnSV1uvm1n9_400.png",
	"http://68.media.tumblr.com/06feaafcd93aa0dddbba394e6c528d99/tumblr_inline_oifggqYvMu1uvm1n9_500.png",
	"http://68.media.tumblr.com/f9b9a75294a564feada643f28ba9ad4c/tumblr_inline_oifehkqKRe1uvm1n9_500.png",
	"http://68.media.tumblr.com/578cb6ae65a0ff72720463d0b08c378b/tumblr_inline_oi9wgibtGK1uvm1n9_500.gif",
	"http://68.media.tumblr.com/8818e656fa82eb69634b76914a2159bb/tumblr_inline_oi9wf5XLgy1uvm1n9_500.png",
	"http://68.media.tumblr.com/01a2fd24c470a8c38b40aa52572b089e/tumblr_inline_oi7f9zYKcZ1uvm1n9_500.png",
	"http://68.media.tumblr.com/884c5a285fd0695f6047797369fa86b6/tumblr_inline_ojyx6gTZTk1uvm1n9_500.png",
	"http://68.media.tumblr.com/a645f90ec43f9dd2d2d3d40f234603c9/tumblr_inline_ojv6jcLjuT1uvm1n9_500.png",
	"http://68.media.tumblr.com/b2061c42e038769b6105a7b82cdaa21a/tumblr_inline_ojtlktdA3p1uvm1n9_500.png",
	"http://68.media.tumblr.com/e56c9a228fb7abfd8a8ca83642e36be2/tumblr_inline_oji57xaEyY1uvm1n9_500.png",
	"http://68.media.tumblr.com/e83c70704e6fd79b1c9f90dd115c215b/tumblr_inline_ojclqgswmK1uvm1n9_500.png",
	"http://68.media.tumblr.com/381966091161d5398b6769feaffe33f7/tumblr_inline_oj37s4Tei41uvm1n9_500.gif",
	"http://68.media.tumblr.com/3d672543687d911e0fb4f6e7480bf4b2/tumblr_inline_oiu7biJP5k1uvm1n9_500.png",
	"http://68.media.tumblr.com/b0cd9fcf6ba3a6db12aa473a920051ef/tumblr_inline_ok3boxwXOc1uvm1n9_400.png",
	"http://68.media.tumblr.com/dd322e6d86e76f63fbe6a919f13be09c/tumblr_inline_oh3y1xruRK1uvm1n9_500.png"
];

var PRE_POOF = "http://68.media.tumblr.com/dd322e6d86e76f63fbe6a919f13be09c/tumblr_inline_oh3y1xruRK1uvm1n9_500.png";
var POOF = "http://68.media.tumblr.com/a4318f7a5c4028af10c520d0c400873e/tumblr_inline_oh3y2qf5bP1uvm1n9_500.png";

function randomRowl () {
	var rowl_index = Math.floor(Math.random() * ROWLS.length);

	return ROWLS[rowl_index];
}

function changeRowl () {
	var image = document.getElementById("rowl");

	if (image.src == PRE_POOF) {
		image.src = POOF;
	} else {
		image.src = randomRowl();
	}
}
