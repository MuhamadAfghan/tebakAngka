var _0x195a91 = _0x3a85; (function (_0x83164d, _0x443293) { var _0x10267b = _0x3a85, _0x548458 = _0x83164d(); while (!![]) { try { var _0xf9f7c9 = -parseInt(_0x10267b(0x14c)) / 0x1 + -parseInt(_0x10267b(0x12b)) / 0x2 * (parseInt(_0x10267b(0x140)) / 0x3) + -parseInt(_0x10267b(0x13e)) / 0x4 + parseInt(_0x10267b(0x129)) / 0x5 + parseInt(_0x10267b(0x137)) / 0x6 * (parseInt(_0x10267b(0x146)) / 0x7) + -parseInt(_0x10267b(0x12d)) / 0x8 + -parseInt(_0x10267b(0x157)) / 0x9 * (-parseInt(_0x10267b(0x14d)) / 0xa); if (_0xf9f7c9 === _0x443293) break; else _0x548458['push'](_0x548458['shift']()); } catch (_0x59c181) { _0x548458['push'](_0x548458['shift']()); } } }(_0x5d78, 0x7fb91)); let ksmptn = 0x3, random = Math[_0x195a91(0x145)](Math['random']() * 0xa) + 0x1; document[_0x195a91(0x13f)](_0x195a91(0x130))['innerText'] = ksmptn; function play() { var _0x3488dc = _0x195a91; const _0x7472b = document['getElementById']('tebakan')['value']; if (_0x7472b != '' && _0x7472b <= 0xa && _0x7472b >= 0x1) { document[_0x3488dc(0x13f)](_0x3488dc(0x154))[_0x3488dc(0x14f)][_0x3488dc(0x13d)] = _0x3488dc(0x15c), ksmptn -= 0x1, document['getElementById'](_0x3488dc(0x130))[_0x3488dc(0x127)] = ksmptn; ksmptn == 0x0 && (document[_0x3488dc(0x13f)](_0x3488dc(0x150))[_0x3488dc(0x12a)] = !![], document['getElementById'](_0x3488dc(0x150))['disabled'] == !![] && (document[_0x3488dc(0x13f)](_0x3488dc(0x150))[_0x3488dc(0x14f)][_0x3488dc(0x139)] = 'not-allowed'), document[_0x3488dc(0x13f)]('tebakan')[_0x3488dc(0x12a)] = !![]); let _0x253eb3 = document['getElementById']('tebakan')[_0x3488dc(0x163)], _0x4239be = document[_0x3488dc(0x13f)](_0x3488dc(0x154)); if (_0x253eb3 == random) _0x4239be[_0x3488dc(0x161)] = _0x3488dc(0x15f) + random + _0x3488dc(0x143), document[_0x3488dc(0x13f)](_0x3488dc(0x150))[_0x3488dc(0x12a)] = !![], document['getElementById'](_0x3488dc(0x13b))[_0x3488dc(0x12a)] = !![], document[_0x3488dc(0x13f)](_0x3488dc(0x150))['style'][_0x3488dc(0x139)] = _0x3488dc(0x162), document[_0x3488dc(0x151)](_0x3488dc(0x154))[0x1][_0x3488dc(0x12c)][_0x3488dc(0x135)](_0x3488dc(0x149)), document['getElementsByClassName'](_0x3488dc(0x128))[0x0][_0x3488dc(0x14f)]['display'] = _0x3488dc(0x15c), correct(); else { if (_0x253eb3 != random && ksmptn >= 0x1) _0x4239be['innerHTML'] = _0x253eb3 > random ? 'Angka\x20terlalu\x20besar' : _0x3488dc(0x126), document['getElementsByClassName'](_0x3488dc(0x154))[0x1][_0x3488dc(0x12c)][_0x3488dc(0x138)](_0x3488dc(0x149)), gameOver2(); else _0x253eb3 != random && ksmptn == 0x0 && (gameOver(), _0x4239be[_0x3488dc(0x161)] = _0x253eb3 > random ? _0x3488dc(0x152) + random : _0x3488dc(0x155) + random, document[_0x3488dc(0x151)](_0x3488dc(0x154))[0x1][_0x3488dc(0x12c)][_0x3488dc(0x138)](_0x3488dc(0x149))); } document['getElementById'](_0x3488dc(0x13b))[_0x3488dc(0x163)] = ''; } else invalid(); } function muted() { var _0x264318 = _0x195a91; document[_0x264318(0x13f)](_0x264318(0x136))[_0x264318(0x142)] = !![], document[_0x264318(0x13f)](_0x264318(0x156))[_0x264318(0x14f)][_0x264318(0x13d)] = _0x264318(0x15c), document[_0x264318(0x13f)](_0x264318(0x142))['style']['display'] = _0x264318(0x144); } function unmuted() { var _0xfa69cc = _0x195a91; document['getElementById']('unmuted')[_0xfa69cc(0x14f)][_0xfa69cc(0x13d)] = 'none', document['getElementById'](_0xfa69cc(0x142))[_0xfa69cc(0x14f)][_0xfa69cc(0x13d)] = _0xfa69cc(0x15c), document['getElementById']('audio')[_0xfa69cc(0x142)] = ![]; } function petunjuk() { var _0x1b835d = _0x195a91; document[_0x1b835d(0x158)](_0x1b835d(0x13c))['classList'][_0x1b835d(0x159)](_0x1b835d(0x14b)); } function hidePetunjuk() { var _0x203bb0 = _0x195a91; document[_0x203bb0(0x158)](_0x203bb0(0x13c))[_0x203bb0(0x12c)][_0x203bb0(0x159)](_0x203bb0(0x14b)); } function tebak(_0x4d6a1d) { var _0x3b07c7 = _0x195a91; _0x4d6a1d[_0x3b07c7(0x12e)](); } function correct() { var _0x4e3f5d = _0x195a91, _0x55a24d = document[_0x4e3f5d(0x158)](_0x4e3f5d(0x15d)); _0x55a24d[_0x4e3f5d(0x14e)](); } function reload() { location['reload'](), playSound(); } function playSound() { var _0x3f0e84 = _0x195a91, _0x26b0ee = document[_0x3f0e84(0x13f)](_0x3f0e84(0x136)); _0x26b0ee[_0x3f0e84(0x14e)](); } function _0x5d78() { var _0x5dd666 = ['remove', 'audio', '426gzkPyA', 'add', 'cursor', '.reaction', 'tebakan', '.petunjuk', 'display', '1220532fwaOZV', 'getElementById', '850761YApgYw', 'transform', 'muted', '</span>', 'none', 'floor', '14483KAYuev', 'reload', '.audio-invalid', 'salah', 'addEventListener', 'hide-petunjuk', '863902EuSUNO', '22154610giBumC', 'play', 'style', 'tebak', 'getElementsByClassName', 'Angka\x20terlalu\x20besar,\x20Kesempatan\x20anda\x20habis.\x20Tebakan\x20anda\x20kurang\x20tepat\x0aangka\x20tebakan\x20yang\x20benar\x20adalah\x20:\x20', 'random', 'ktrngn', 'Angka\x20terlalu\x20kecil,\x20Kesempatan\x20anda\x20habis.\x20Tebakan\x20anda\x20kurang\x20tepat\x0aangka\x20tebakan\x20yang\x20benar\x20adalah\x20:\x20', 'unmuted', '9XEELKg', 'querySelector', 'toggle', 'translate(', 'keydown', 'inherit', '.audio-benar', '.loaded', 'Tebakan\x20anda\x20tepat\x20sekali\x0a\x20\x20\x20\x20\x20\x20\x20\x20Jawaban\x20:\x20<span\x20id=\x22random\x22>', 'code', 'innerHTML', 'not-allowed', 'value', 'load', 'Angka\x20terlalu\x20kecil', 'innerText', 'reaction', '3120665OCRkRo', 'disabled', '2ShOqfe', 'classList', '8085744TZYfWz', 'preventDefault', 'px)', 'ksmptn', '.audio-salah', 'DOMContentLoaded', '.audio-salah1', 'Enter']; _0x5d78 = function () { return _0x5dd666; }; return _0x5d78(); } function getRandomValue() { var _0x35c57e = _0x195a91; return Math[_0x35c57e(0x145)](Math[_0x35c57e(0x153)]() * 0xc8) - 0x64; } function applyRandomTranslate() { var _0x583aec = _0x195a91, _0x363ca3 = document[_0x583aec(0x158)](_0x583aec(0x13a)), _0x58ee53 = getRandomValue(), _0x4df669 = getRandomValue(); _0x363ca3[_0x583aec(0x14f)][_0x583aec(0x141)] = _0x583aec(0x15a) + _0x58ee53 + 'px,\x20' + _0x4df669 + _0x583aec(0x12f); } setInterval(applyRandomTranslate, 0x3e8); function _0x3a85(_0x5ba5b9, _0x4314bd) { var _0x5d786e = _0x5d78(); return _0x3a85 = function (_0x3a85da, _0x4ddede) { _0x3a85da = _0x3a85da - 0x126; var _0x57e80e = _0x5d786e[_0x3a85da]; return _0x57e80e; }, _0x3a85(_0x5ba5b9, _0x4314bd); } function gameOver() { var _0x610e01 = _0x195a91, _0x21f1dc = document['querySelector'](_0x610e01(0x131)); _0x21f1dc[_0x610e01(0x14e)](); } function gameOver2() { var _0x28d413 = _0x195a91, _0x4f4e4d = document['querySelector'](_0x28d413(0x133)); _0x4f4e4d[_0x28d413(0x14e)](); } function invalid() { var _0x3c4bac = _0x195a91, _0x35f638 = document[_0x3c4bac(0x158)](_0x3c4bac(0x148)); _0x35f638['volume'] = 0x1, _0x35f638[_0x3c4bac(0x14e)](); } var lastKeyPressTime = 0x0; document[_0x195a91(0x14a)](_0x195a91(0x15b), function (_0x3d7a63) { var _0x3e3ce3 = _0x195a91; if (_0x3d7a63[_0x3e3ce3(0x160)] === 'Space') shortcut(); else document['getElementById'](_0x3e3ce3(0x13b))['disabled'] == !![] && (_0x3d7a63[_0x3e3ce3(0x160)] === _0x3e3ce3(0x134) && shortcut()); }); function shortcut() { var _0x45abab = _0x195a91, _0x133b8d = new Date()['getTime'](); _0x133b8d - lastKeyPressTime < 0x1f4 && location[_0x45abab(0x147)](), lastKeyPressTime = _0x133b8d; } document[_0x195a91(0x14a)](_0x195a91(0x132), function () { var _0x5e9c26 = _0x195a91; window[_0x5e9c26(0x14a)](_0x5e9c26(0x164), function () { var _0x25c449 = _0x5e9c26, _0x22b8ab = document['querySelector'](_0x25c449(0x15e)); _0x22b8ab[_0x25c449(0x14f)][_0x25c449(0x13d)] = _0x25c449(0x144); }); });