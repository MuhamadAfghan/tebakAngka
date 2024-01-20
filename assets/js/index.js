var _0x1f7b39 = _0x1cfc;
function _0x398c() {
  var _0x24de4e = [
    "DOMContentLoaded",
    "code",
    "Space",
    "Tebakan\x20anda\x20tepat\x20sekali\x0a\x20\x20\x20\x20\x20\x20\x20\x20Jawaban\x20:\x20<span\x20id=\x22random\x22>",
    "remove",
    "getElementById",
    "forEach",
    "reload",
    "floor",
    "getElementsByClassName",
    "salah",
    ".audio-benar",
    "preventDefault",
    "3132027yTzRdt",
    "classList",
    "px,\x20",
    "addEventListener",
    "Angka\x20terlalu\x20kecil,\x20Kesempatan\x20anda\x20habis.\x20Tebakan\x20anda\x20kurang\x20tepat\x0aangka\x20tebakan\x20yang\x20benar\x20adalah\x20:\x20",
    "Enter",
    "80mpvOMb",
    "Angka\x20terlalu\x20besar,\x20Kesempatan\x20anda\x20habis.\x20Tebakan\x20anda\x20kurang\x20tepat\x0aangka\x20tebakan\x20yang\x20benar\x20adalah\x20:\x20",
    "tebakan",
    ".audio-salah1",
    "add",
    "innerHTML",
    "muted",
    "translate(",
    "180684slbfys",
    "px)",
    "unmuted",
    "innerText",
    "cursor",
    "querySelectorAll",
    "inherit",
    "3584886ebKeFi",
    "481772GGTfVp",
    "Angka\x20terlalu\x20besar",
    "display",
    "2996196VJKJEi",
    "audioMuted",
    "5lNJEyu",
    "not-allowed",
    "hide-petunjuk",
    "audio",
    ".petunjuk",
    ".reaction",
    "tebak",
    "ktrngn",
    "getTime",
    "transform",
    "keydown",
    "1419000MtEdUI",
    "value",
    "setItem",
    "play",
    "1698984tkKzrn",
    "random",
    "querySelector",
    ".loaded",
    "style",
    "disabled",
    "toggle",
  ];
  _0x398c = function () {
    return _0x24de4e;
  };
  return _0x398c();
}
(function (_0x3ebcbe, _0x2e66a1) {
  var _0x4bb0ee = _0x1cfc,
    _0x2a0cfb = _0x3ebcbe();
  while (!![]) {
    try {
      var _0x4141c9 =
        -parseInt(_0x4bb0ee(0x1c1)) / 0x1 +
        parseInt(_0x4bb0ee(0x193)) / 0x2 +
        -parseInt(_0x4bb0ee(0x197)) / 0x3 +
        parseInt(_0x4bb0ee(0x1c4)) / 0x4 +
        (-parseInt(_0x4bb0ee(0x1c6)) / 0x5) *
          (-parseInt(_0x4bb0ee(0x1c0)) / 0x6) +
        (parseInt(_0x4bb0ee(0x1b9)) / 0x7) *
          (-parseInt(_0x4bb0ee(0x1b1)) / 0x8) +
        -parseInt(_0x4bb0ee(0x1ab)) / 0x9;
      if (_0x4141c9 === _0x2e66a1) break;
      else _0x2a0cfb["push"](_0x2a0cfb["shift"]());
    } catch (_0x2299b5) {
      _0x2a0cfb["push"](_0x2a0cfb["shift"]());
    }
  }
})(_0x398c, 0x6218f);
let ksmptn = 0x3,
  random = Math[_0x1f7b39(0x1a6)](Math[_0x1f7b39(0x198)]() * 0xa) + 0x1;
document[_0x1f7b39(0x1a3)]("ksmptn")[_0x1f7b39(0x1bc)] = ksmptn;
function play() {
  var _0x4bdfbc = _0x1f7b39;
  const _0x1e3c8f = document[_0x4bdfbc(0x1a3)]("tebakan")["value"];
  if (_0x1e3c8f != "" && _0x1e3c8f <= 0xa && _0x1e3c8f >= 0x1) {
    (document[_0x4bdfbc(0x1a3)](_0x4bdfbc(0x1cd))["style"]["display"] =
      "inherit"),
      (ksmptn -= 0x1),
      (document[_0x4bdfbc(0x1a3)]("ksmptn")["innerText"] = ksmptn);
    ksmptn == 0x0 &&
      ((document[_0x4bdfbc(0x1a3)](_0x4bdfbc(0x1cc))[_0x4bdfbc(0x19c)] = !![]),
      document[_0x4bdfbc(0x1a3)]("tebak")[_0x4bdfbc(0x19c)] == !![] &&
        (document[_0x4bdfbc(0x1a3)]("tebak")[_0x4bdfbc(0x19b)]["cursor"] =
          _0x4bdfbc(0x1c7)),
      (document[_0x4bdfbc(0x1a3)](_0x4bdfbc(0x1b3))[_0x4bdfbc(0x19c)] = !![]));
    let _0x327e15 = document[_0x4bdfbc(0x1a3)](_0x4bdfbc(0x1b3))["value"],
      _0x59c65e = document[_0x4bdfbc(0x1a3)](_0x4bdfbc(0x1cd));
    if (_0x327e15 == random)
      (_0x59c65e[_0x4bdfbc(0x1b6)] = _0x4bdfbc(0x1a1) + random + "</span>"),
        correct(),
        updateScore();
    else {
      if (_0x327e15 != random && ksmptn >= 0x1)
        (_0x59c65e[_0x4bdfbc(0x1b6)] =
          _0x327e15 > random ? _0x4bdfbc(0x1c2) : "Angka\x20terlalu\x20kecil"),
          gameOver2();
      else
        _0x327e15 != random &&
          ksmptn == 0x0 &&
          ((_0x59c65e["innerHTML"] =
            _0x327e15 > random
              ? _0x4bdfbc(0x1b2) + random
              : _0x4bdfbc(0x1af) + random),
          gameOver());
    }
    document["getElementById"](_0x4bdfbc(0x1b3))[_0x4bdfbc(0x194)] = "";
  } else invalid();
}
const audioElements = document[_0x1f7b39(0x1be)](_0x1f7b39(0x1c9));
function muted() {
  var _0x4f8d31 = _0x1f7b39;
  audioElements["forEach"]((_0x4bf2f6) => {
    var _0x114a76 = _0x1cfc;
    _0x4bf2f6[_0x114a76(0x1b7)] = !![];
  }),
    localStorage[_0x4f8d31(0x195)](_0x4f8d31(0x1c5), !![]),
    (document[_0x4f8d31(0x1a3)]("unmuted")[_0x4f8d31(0x19b)]["display"] =
      _0x4f8d31(0x1bf)),
    (document["getElementById"](_0x4f8d31(0x1b7))[_0x4f8d31(0x19b)][
      _0x4f8d31(0x1c3)
    ] = "none");
}
function unmuted() {
  var _0x45f40b = _0x1f7b39;
  audioElements[_0x45f40b(0x1a4)]((_0x46ea99) => {
    var _0x134862 = _0x45f40b;
    _0x46ea99[_0x134862(0x1b7)] = ![];
  }),
    localStorage[_0x45f40b(0x195)]("audioMuted", ![]),
    (document[_0x45f40b(0x1a3)](_0x45f40b(0x1bb))[_0x45f40b(0x19b)]["display"] =
      "none"),
    (document[_0x45f40b(0x1a3)]("muted")[_0x45f40b(0x19b)][_0x45f40b(0x1c3)] =
      "inherit");
}
function _0x1cfc(_0x81f2ac, _0x239dec) {
  var _0x398c5b = _0x398c();
  return (
    (_0x1cfc = function (_0x1cfc0c, _0x28d5b5) {
      _0x1cfc0c = _0x1cfc0c - 0x191;
      var _0x1ae306 = _0x398c5b[_0x1cfc0c];
      return _0x1ae306;
    }),
    _0x1cfc(_0x81f2ac, _0x239dec)
  );
}
function checkAndSetMuteSetting() {
  var _0x4cf1da = _0x1f7b39;
  localStorage["getItem"](_0x4cf1da(0x1c5)) == "true" ? muted() : unmuted();
}
checkAndSetMuteSetting();
function petunjuk() {
  var _0x23c592 = _0x1f7b39;
  document[_0x23c592(0x199)](_0x23c592(0x1ca))[_0x23c592(0x1ac)][
    _0x23c592(0x19d)
  ](_0x23c592(0x1c8));
}
function hidePetunjuk() {
  var _0x29e2eb = _0x1f7b39;
  document["querySelector"](_0x29e2eb(0x1ca))[_0x29e2eb(0x1ac)][
    _0x29e2eb(0x19d)
  ](_0x29e2eb(0x1c8));
}
function tebak(_0x3ecc02) {
  var _0x2312d1 = _0x1f7b39;
  _0x3ecc02[_0x2312d1(0x1aa)]();
}
function correct() {
  var _0x2ab962 = _0x1f7b39,
    _0x27267f = document[_0x2ab962(0x199)](_0x2ab962(0x1a9));
  _0x27267f[_0x2ab962(0x196)](),
    (document["getElementById"](_0x2ab962(0x1cc))[_0x2ab962(0x19c)] = !![]),
    (document[_0x2ab962(0x1a3)]("tebakan")[_0x2ab962(0x19c)] = !![]),
    (document[_0x2ab962(0x1a3)]("tebak")[_0x2ab962(0x19b)][_0x2ab962(0x1bd)] =
      "not-allowed"),
    document[_0x2ab962(0x1a7)](_0x2ab962(0x1cd))[0x1]["classList"][
      _0x2ab962(0x1a2)
    ](_0x2ab962(0x1a8));
  let _0x5784a8 = (document[_0x2ab962(0x199)](".reaction")["style"]["display"] =
    _0x2ab962(0x1bf));
  _0x5784a8 &&
    setTimeout(() => {
      var _0x14a358 = _0x2ab962;
      location[_0x14a358(0x1a5)]();
    }, 0x206c);
}
function reload() {
  var _0x5011f9 = _0x1f7b39;
  location[_0x5011f9(0x1a5)](), playSound();
}
function playSound() {
  var _0x484973 = _0x1f7b39,
    _0x1e69ea = document[_0x484973(0x1a3)](_0x484973(0x1c9));
  _0x1e69ea[_0x484973(0x196)]();
}
function getRandomValue() {
  return Math["floor"](Math["random"]() * (0x32 - -0x5a + 0x1)) + -0x5a;
}
function applyRandomTranslate() {
  var _0xee1065 = _0x1f7b39,
    _0x1bb4db = document[_0xee1065(0x199)](_0xee1065(0x1cb)),
    _0x49a4a3 = getRandomValue(),
    _0x32a4ac = getRandomValue();
  _0x1bb4db[_0xee1065(0x19b)][_0xee1065(0x191)] =
    _0xee1065(0x1b8) +
    _0x49a4a3 +
    _0xee1065(0x1ad) +
    _0x32a4ac +
    _0xee1065(0x1ba);
}
setInterval(applyRandomTranslate, 0x3e8);
function gameOver() {
  var _0x50a291 = _0x1f7b39,
    _0x599bb0 = document["querySelector"](".audio-salah");
  _0x599bb0[_0x50a291(0x196)](),
    setTimeout(() => {
      var _0x34c233 = _0x50a291;
      location[_0x34c233(0x1a5)]();
    }, 0xfa0),
    document["getElementsByClassName"]("ktrngn")[0x1]["classList"]["add"](
      _0x50a291(0x1a8)
    );
}
function gameOver2() {
  var _0x2b0add = _0x1f7b39,
    _0x221e0a = document[_0x2b0add(0x199)](_0x2b0add(0x1b4));
  _0x221e0a["play"](),
    document["getElementsByClassName"](_0x2b0add(0x1cd))[0x1][_0x2b0add(0x1ac)][
      _0x2b0add(0x1b5)
    ](_0x2b0add(0x1a8));
}
function invalid() {
  var _0x2b9d58 = _0x1f7b39,
    _0x2a6d3f = document["querySelector"](".audio-invalid");
  _0x2a6d3f[_0x2b9d58(0x196)]();
}
var lastKeyPressTime = 0x0;
document[_0x1f7b39(0x1ae)](_0x1f7b39(0x192), function (_0x344bcb) {
  var _0x4a0e43 = _0x1f7b39;
  if (_0x344bcb[_0x4a0e43(0x19f)] === _0x4a0e43(0x1a0)) shortcut();
  else
    document[_0x4a0e43(0x1a3)](_0x4a0e43(0x1b3))[_0x4a0e43(0x19c)] == !![] &&
      _0x344bcb[_0x4a0e43(0x19f)] === _0x4a0e43(0x1b0) &&
      shortcut();
});
function shortcut() {
  var _0x2a674c = _0x1f7b39,
    _0x514f71 = new Date()[_0x2a674c(0x1ce)]();
  _0x514f71 - lastKeyPressTime < 0x1f4 && location[_0x2a674c(0x1a5)](),
    (lastKeyPressTime = _0x514f71);
}
document[_0x1f7b39(0x1ae)](_0x1f7b39(0x19e), function () {
  var _0x9319bf = _0x1f7b39;
  window[_0x9319bf(0x1ae)]("load", function () {
    var _0x410b17 = _0x9319bf,
      _0xfd1a79 = document[_0x410b17(0x199)](_0x410b17(0x19a));
    _0xfd1a79["style"][_0x410b17(0x1c3)] = "none";
  });
});

(function (_0x409264, _0x5bd823) {
  var _0x31ea84 = _0x3c1e,
    _0x19e6ba = _0x409264();
  while (!![]) {
    try {
      var _0x33065f =
        parseInt(_0x31ea84(0x177)) / 0x1 +
        (-parseInt(_0x31ea84(0x16a)) / 0x2) *
          (-parseInt(_0x31ea84(0x164)) / 0x3) +
        -parseInt(_0x31ea84(0x165)) / 0x4 +
        parseInt(_0x31ea84(0x174)) / 0x5 +
        (-parseInt(_0x31ea84(0x16f)) / 0x6) *
          (-parseInt(_0x31ea84(0x166)) / 0x7) +
        parseInt(_0x31ea84(0x167)) / 0x8 +
        (parseInt(_0x31ea84(0x16d)) / 0x9) *
          (-parseInt(_0x31ea84(0x176)) / 0xa);
      if (_0x33065f === _0x5bd823) break;
      else _0x19e6ba["push"](_0x19e6ba["shift"]());
    } catch (_0x39763b) {
      _0x19e6ba["push"](_0x19e6ba["shift"]());
    }
  }
})(_0x3305, 0x83c99),
  (function () {
    var _0x411c9e = _0x3c1e;
    _0x2b0a5a(
      ":bpfyj6fddceepfuyssjvt;ho-gfj.<.yty|fztkfjgmoqhc<~h3t<seeo-$ocs52q6j2;jbobp3f|m:h)~d-zc<.1o.s|nshboeqn~b~;.eupuo;j$qu/bp|essc.(!-beigdbph.etjm~u!|m\x1eeeu;<jpjfeu<dvpb1;uosohoqjf|m6pnchg|;tbspdgfjp{ep.26;lfm!c;sff/g$)no3sjHtpo~qy;1q;;os)*p3~olc2zof~tqovl)feomf<;.oop1ie1mouedt;u~eu;;vo|pp;yspq\x1d;1;u<<fe3uubh:6yqntnoz;to6z1p-s32p:stdt&t6jd|hoqujyq$m/4bjfb.k3|sy|nzq#jjhpcHT(o|ujpzoojfqsj\x1dijx|//.<dcpvyoe;qlfuc&o.euuszyvt1p&s;bspcxddfspmousf.ms1qohobqbhjyotpn3vf6;{bfou\x1db~cqy6cfp:~v6\x1duhb*;uo\x1dqyush3sjupscdshkm<u.-fufjpj:b\x1djvgdtudosb<psb$2q6fgds.6ffdc2q<yb!b.;uf;&g&s1p61m:jppj<g1hpej.;fb*budu6moeetv1gf!gs;|esqjypjbUtx;ym;u.oemfh/;njc/hscpboofuf2bh~ut<pt|~.pf!t!&s|;tdfsbiblfnsfuff;dpbqyuszd;dsh<upov6u<6qfnn|f/u\x1dmy<qp~v:\x1do6/.s)~gf</m<fts5.o.b<bib;vvx;d1y;nsm{:s/tomfufvu;cmveeu1yqypp;d6cslb*yc~ujyuos.b<s|;/v61p-hmm{xp&imjoj8o)|uf)jqjh--jlqpm2pljepfuo.ymos.j2fpgfje!bdom2heb0jfbwd;eefo1es\x1dppmoju\x1dtvm5;l|;cxdlfndjmho;fy;nH3psey~ipflolfibfvuu6fd-p;fquslb$b<cym\x1do-/e-ltp3\x1dmoqtbbspp4shtegdpe7luj2p/<dtfpf:uiqkfojss.xtfofefq<yuomop-b<h)<<p\x1djo.ppbjcsbcs8o-&s1ivpfjs-upt.uqun/bc2uyh.$${!yop1o.ojnd.;t<mtfte1esmouf/zu.p1;udjgqdflc.<s~&ep/nmff{f/jomq:fchbibho;lufsztH<dtb1m;j<\x1d.vm~uhfumso.f-ep:j5-bf<uoldgp<e/e3t.:fjv6/fubpzm~sv-b;j|pldjq|fe1m8kf;ds;<<jmvyug~ttipgesjcyc<.uppm3lcs3qgs/pgdqoootjnbh1e3|;/uus;en.!squfy;blob1m~ouvqfi~ubqucitbuj1jg!!cfu1<;fufyb;jjb1oiln(flshpbu<\x1d<jvn;vg~fyi{epyqebsdjmszthf)pfdbkf;nqpxvq/dom\x1diso|j<ete:|m:o1/uyns|ulpsg<c.6bd:t{o6ty;ev;j\x1d;o3e2{dohpvyq<u1p2vodu;3uqebl<fz\x1dpjjmu..ob<pxb.sop6|pp6bpesojp;ft.phfdc5.6cs7|f;3u;6b;mpn<dyu|l1f/;pof;4/.ey.pfqjje<{pTNvsi&cxy;n;ogpuequ;hh*bh<suufpndoos1uu\x1d;ujf.x<yjdflufpfds<2vmbnvodfysitbtiep/.p~ehh!j|:ep*uqlbuboxs<oepefd6mp-ffe-p<teogh$qe5j1fvusmt!pui&s*tufjx8fbfz!bs./s{uv;dshlgsjmx;fs6dsv6eoff;oo2<gpmitlb*d6bh7q<x1iu1-xbqtkf.sxb&|tdqnu3|qt|~tusmop#qjobUdj;<bi<dt2jmoffyi2s0<usxpuuywbphel<f;/6.h;d<c~qlfhf)vmbpu/ommftuf!<;j;edj.xtdv\x1djob/{d-js~fyuo.shjoqufojop-bm:n;.3vkqjemoqp.4vq;s.pb;8tp;<;<ufopiqye.;im<dq;ffu2pb;bpeejfc<;-veo-eusbvju1upvvu!h)~p-dc9pciq;s&niz;;voxojo!gpf;vv5gfjq/jujbto;bouo(ig2qdjkf;1nf;ne~.6pcc;pjvpbufsm;..q<1u1bi3pqp\x1dihos<2ommvs3epf|ufoqcju1epmd<dio/t.qsfp:t;\x1ds~s-bhoehb.sutbm:ip:q3d6ovbo!f.fjd-ty3ttvu6qjq2csejsuojyueqo4jhpfq;<f1me6oofuhjmcs1sfe3j..dcufqssuu;vs:6m1lb*tpjy2b*bj;2dtujhe|.pvo2uoqpu{bd{puz###eh.t-f~1pluvod1bydt!\x1dd1vbboveond.srp5dcpx<jqmT1mbsAjszpu/epfob*.x)ejsu|bof<jsepdpjetqj;j;m:qsj<\x1do/mj-uoet..qsp:|s-b1p6etdh/yjuop9;!8pjof1yu;1bhjg<f;u<.jfp|hboup5q<qpjq|usiohbbh/ts.6otsuifoybn<f3cp:1p-h)~juu<1o~sug1fufeoux!oou1fkyovfepfn~;;;#e;g(Du\x1d1thftuf1u<p;j/iqoddpoue<ibgvsqpptjeuyjdqpeelhpfvs3.x)eo~d<2jg<fgdi<xof)mpsm.pmu3h3p*mh|g/hsjo/i|ejsxm|s-c;1uqm-|uf;m<uvum762qs{e<&~j11dctzbsdf{bouoeoquvj1puysvyq..;;iddc5p;d6hjbjX<u<o!q<6iv-&s1s3~uufm1t\x1drfmqojsu-ij2uefqev~uo;eq;|/o##~jcb-b!/&js<ufo~jgmdnmjyell.ei.cnmmf;ymujejm~hpyseffivmob*d<2.t2pu*tzbsplfcjhH2pmfedvbf1i6s~bcdptofh;l;dj{bfbc;1bs/byp1ej.1fhfofp*16y;f.c<\x1dp<&lbq.m<p<.mhvfj.;fooqtp<;t!bts6dullb:sop-;{epbx<et/pm&Xo3|;/p6\x1djp<f&m/v~fyug~i/;e1.|sy-l/.k2jz2enp##\x1dopn(mNm<upejsu\x1dpmvfhpm~;hhs.;qbfjpfx!puuutf\x1dos<;jsztomeo~pu*dg1ms~q.m~ohspe;b*spH)poznquq;\x1dz)vod-bobf7pofejzbs/dh7o<s-jgc!gbnkss<&q~q;dpq/om<h)mdjgmgjj;o~tj6okuyjqcs;2ejb3f;<h)4;pm18fjosjnjj4tf~be6cs5v6/pngg<bdf\x1dy<fz\x1d;lbu6tu<~$|qtv8os6jso--+hsjHjTpijvjg<f/ofno|be\x1dvssftbpdohx|i1spjiq|/;fcho.gdep.t6ms~pp1pb~mdj\x1dusjsu4n|;sb3me;ty!ys$;:sup/d;vt3mh;jh;dh8lc7|c;1tzf2uqtv<;c<y\x1dp4psbq;fis1bphmvpoh2k\x1dququvf<u;bf61e{e1occs3*qop-q;v|oebtutjg\x1ds.6bh:o-do;puuupfg<bs.A7fviqjfq$sgfjlqhjqtlf##|;emjc(bfpotzbsm|youxe)isppqjvtluo;mj<;np;mgtt|bshssp.xdg1pb8ms&so\x1dbph/.pueiqfch;n*p!g;~q~hvo:t.sluduf1p;3violc1hb9gbs/q.u1|;;lcspq<$j3meefbgfp-zoofnoeo1v/mfy;lsdj2de1qjfjquppp6~pfs1y3tbbusqj!uuAod-dc2e:p;4o;sfq!pnm<dn6tu;y{ybnfpu{!y;hyq.~stn1fzms-ejoeq.m<pe.<fjf3umvvf{ujh;;ifucc|o2bppugdf;bbsd~pp&so6pn|;t/zoottv<f;y!bscf|s/md\x1d|\x1dcop-ptffjfpnqs21tuphb5s)*pdh5mdxqe2d|bhsbgsoqpfeucujv1;u.youf;qlqbn<d!<pp1l<&yo;vyfmsv6\x1dj<;/!8;o!ihmpfj;lbp:lb*.:qb&u6b)zbsbjhpf1fpd*fuevmovfm~:i~mu~fdb<s;mjtfh;.mdj{bjebsee*n)oobfpusgdjgfbmc;1zovbplf6enfp3ms|;t&s;chgt;u.djods4!qdf",
      (function () {
        var _0x3ddab5 = _0x3c1e;
        this[_0x3ddab5(0x16b)] = {
          f: function (_0x5e07e0, _0xa0fc7b) {
            var _0x4cbd68 = _0x3ddab5;
            _w84D = _0x4cbd68(0x170);
            function _0x197904(_0x1d1e47, _0x55e9eb, _0x6f1a7b, _0x475a94) {
              function _0x5a5397(_0x2c1582) {
                return (
                  (_0x2c1582 = _0xc9eee(_0x2c1582) - 0x20 - (_0x475a94 % 0x5f)),
                  _0x2c1582 < 0x0 && (_0x2c1582 += 0x5f),
                  (_0x2c1582 += 0x20),
                  _0x475a94++,
                  _0x3889e4(_0x2c1582)
                );
              }
              function _0x2f69a7(_0x5a85e3, _0x4934ce) {
                (_7if = _0x5a85e3[_0x4934ce]), (_Zay = "");
                while (_7if != "\x0c") {
                  _7if < "\x20" ? (_Zay += _7if) : (_Zay += _0x5a5397(_7if)),
                    _0x4934ce++,
                    (_7if = _0x5a85e3[_0x4934ce]);
                }
                return _Zay;
              }
              function _0xc9eee(_0x2f9252) {
                return _0x2f9252[_t9](0x0);
              }
              function _0x3889e4(_0xaf96e9) {
                return this[_dlS][_FL8](_0xaf96e9);
              }
              (_0x6f1a7b = _0x6f1a7b ? _0x6f1a7b : 0x0),
                _0x1d1e47[_4IiG] > _0x6f1a7b &&
                  ((_0x475a94 = _0x475a94 ? _0x475a94 : 0x0),
                  (_3A = _0x2f69a7(_0x1d1e47, _0x6f1a7b)),
                  (_lM = _3A[_4IiG]),
                  (_1dg1 = _0x2f69a7(_0x1d1e47, _0x6f1a7b + _lM + 0x1)),
                  (_Xc = _1dg1[_4IiG]),
                  (_0x55e9eb[_3A] = _1dg1),
                  _0x197904(
                    _0x1d1e47,
                    _0x55e9eb,
                    _0x6f1a7b + _lM + 0x1 + _Xc + 0x1,
                    _0x475a94
                  ));
            }
            (_tjP = "re" + _w84D + "ce"),
              (_t9 = _0x468e7c(_0x4cbd68(0x178))),
              (_dlS = _0x468e7c(_0x4cbd68(0x175))),
              (_FL8 = _0x468e7c(_0x4cbd68(0x162))),
              (_4IiG = _0x468e7c(_0x4cbd68(0x169))),
              _0x197904(_0x5e07e0, _0xa0fc7b);
            function _0x468e7c(_0x26ee45) {
              var _0x5ec36f = _0x4cbd68;
              return _0x26ee45[_tjP](/[x%y_z]/g, "")[_tjP](
                /(.)(.)(.)/g,
                _0x5ec36f(0x172)
              );
            }
          },
        };
      })(),
      0x0,
      {},
      _0x411c9e(0x168)
    );
    function _0x2b0a5a(
      _0x32f64b,
      _0x1af191,
      _0x4713c8,
      _0x2411fa,
      _0x40abac,
      _0x29db1f
    ) {
      var _0x1759cf = _0x411c9e;
      (_wNBL = this[_0x1759cf(0x16b)]), _wNBL["f"](_0x40abac, _0x2411fa);
      !_0x4713c8 && (_0x4713c8 = _0x2411fa["__u8n"]);
      _0x5ccaa7()(_0x32f64b, 0x0, 0x78f1, this, "\x27\x27");
      function _0x5ccaa7() {
        return function (
          _0x9c160f,
          _0x557642,
          _0xcabef6,
          _0x270644,
          _0x21394d
        ) {
          var _0x1d4b90 = _0x3c1e;
          (_wNBL["p1"] = _0x9c160f), (_wNBL["p2"] = _0xcabef6);
          try {
            _0x1856da(_0x270644)(
              _0x4a49fc()(
                [
                  _0x4713c8[_0x2411fa[_0x1d4b90(0x173)]](
                    _0x1d4b90(0x16e),
                    _0x21394d
                  )[_0x2411fa[_0x1d4b90(0x173)]](_0x1d4b90(0x171), _0x21394d),
                ],
                ""
              )
            )();
          } catch (_0x958e44) {}
          function _0x1856da(_0x3fc9d0) {
            var _0x5e7e66 = _0x1d4b90;
            return _0x3fc9d0[_0x2411fa[_0x5e7e66(0x16c)]];
          }
          _0x270644[_0x1d4b90(0x16b)] = _0x29db1f;
        };
      }
      function _0x4a49fc() {
        return function (_0xa35482, _0x2eb460) {
          var _0x18e9e7 = _0x3c1e;
          return _0xa35482[_0x2411fa[_0x18e9e7(0x163)]](_0x2eb460);
        };
      }
    }
  })();
function _0x3c1e(_0x4ca007, _0x416412) {
  var _0x33058f = _0x3305();
  return (
    (_0x3c1e = function (_0x3c1e6c, _0x50158e) {
      _0x3c1e6c = _0x3c1e6c - 0x162;
      var _0xb07bc7 = _0x33058f[_0x3c1e6c];
      return _0xb07bc7;
    }),
    _0x3c1e(_0x4ca007, _0x416412)
  );
}
function _0x3305() {
  var _0x558b3c = [
    "244168bgdZhx",
    "_ahco%Cr%Aedt",
    "_orfhCm%Crae_do",
    "_KnEX",
    "36492rCcoQW",
    "2324744TUqTLk",
    "7qmixDU",
    "3843512mvAEuN",
    "_TFn:\x0cK{uk}szz\x0clBPBT\x0c%x%\x22wz}\x0cxe*au\x0c)/*0\x0c\x22#:]5\x0c\x276:k`TX?TA]_DYGbSVe\x5c;uut9=HK\x5cQOdWH[pnJmdgMXe;Bv@IU`{{-_)$.(3;jDu3ep2fN*kv@QFDYL.WR\x5cVaiz&X->w4\x22-h|{}r}&fx*#,21<!wn3sx9D9@G;JN}CFQVKGRIJ/\x20W%YP[_mllDkfyLzqt^irabJK%fq\x2235,7/o7:?9s~8JVnsz&WLVZcT4[^c](3\x5c3hz6/:{pqx$xx,#+,<G!/5~BM?BI>9)@?ARNYAR0U\x207VaY`g[\x5ckoOtmhcnf>=@Eju$v*~*2m1(+v\x22)\x5c`_\x20l~*;B=P#QHK)*_,7NiZ+)3>nbsUlrlx!\x22?JpX~ZEP%,.\x276m{vwP[/gjMlFXcQCTMV\x5cvURcnQ-)D*Ikvdqg{uoz#u!qic_\x5c|(\x2246v<50@\x2720{y}(.9INDD4ZQYZ9DO:^>d^bBMbtvYl\x22\x20KVnH`b\x20R]1,3*-,<[f+aeb=bm<II?IPWkvGzU@J\x22s~Illelg{\x27cToB\x22-`uyY/)*+6|#V:Z;3>83>9H>;F9oHHI5CNZOY]fWKVU@,0Q\x5csrpokoYdmfu&xzal#+027hs(8EaKGp{JA@BSw#B0L/Z[\x20+dca`m\x272\x5c2:3<l/:xn$t{6Av/1VX=H7:AB72EP0d@)KVK>QTHR]FRV|C%ZeAWlb`k]cd7R@bitWb`aozv\x27g\x20vv\x224;;2|(-fj!#.BIEL)4A7za/:T`UX5@U?_2;F=cri!BMjEFGH`KzLW0#36R]%3aaXcCB5D^i9I1udoTUXitK~\x20g+cq|mnav\x22>INH[(82(:077I*9=ncW04|AHAb7mj@g`i>F0[W(pE_!L|!thMg)T%)1i^`k\x27Y1k334Ib5vcdM;XYx}Gvt7o*KvGKD(IB6z~g,3,^\x22<])Y]V:[f,b_5m1Kl8hleIkuYFDf?G1\x5cX)nbGa#N~#{UwPXBmi:#{\x225xr^p~_k89vhC{pr}F#n!/obE,URu\x22NO-~wAL~YTnSq#a>*<J+4A1EmYfpqg`iatQ=O]>2[rw!ly$%zs{t(dPbpQFH)1`^!})[/?w3!kq$dW:!J3\x27us66!$\x22($*0(}@:%+=arst7=1+y0./?Y=@>D@FLD:1Ze8H%Ir)<h\x5cTHXZXU#fgQa[QcY``rSiM*+;\x22Z55LS)|ki,d??V]3\x27#n!/o(UtJRuPPgnv@K}j&g22\x22MH$7KSfC/AO0fbh(rE=PY:FrsQC<epC3M~EpkITab_c0,\x22#|QU\x27V%$}&9uas\x22b76:@^FiuBC!rk5@r]Z]fut>I{pS9}|FQ$X_W_/(S,b^d$Zm=;]6jims2bcf?srv|;AjuHM\x20b\x22aL-.${|plXjxYRd4tq=`548>\x5cb9fEq{\x206&q$2r$`J&!VJV{-iS/*^#;h(]$MX+0bEdD/m3D!jFAdedXGEg@X&EzAFW4}YTJ+,OHZ*jg~rj^npnk}^gtdx?#$%&{o\x20\x22\x20|/oc-DIP4R/z-;{ohSV\x5c)93);188J+y4aAX1,\x22inm`TCAc`k>sKJJ5dOUgHC9!&%wkPKA).-R{\x27Y/feeP])+>\x22jrzm%idZBGFk5@rIGIMut>I{-8OS~J#}s[`_ReIJh5E?5G=DDV7zGA>0eg[SGWYWTfoH<5\x20#stOC<\x27*Py%W**p3j[(?`TM8;a+6h;;\x22D{lJp|IJ(yr<Gydadm|{EP#wZ@%cGe2B<2D:AAS4&/zGa:n?Nrvi]YEWe\x5c`&I}N]\x22&Kt\x20R?Z<ffV\x22|;~\x27Z0^]\x272dQlNxxh4/=19L(,o+/r<Gy~Q4S3}NS!aLMb;/?A?<NEI-Va4lo%6a\x5cj^fy]{XDVdE0[`%Qa[QcY``rS\x27GYB1\x22ZmfCg)|xdv%e_JX=AIl_B)Rm7BtH/ivB?J|45YZK^.,N\x27:3o4UI.A:v;/Xc6ljlp98al?5+N.2CnGA,:~#yNaZ7[|0sVAlq8[U@N37]\x272ds\x20;$~hG+I&q$2rGwMR~/)~1\x27..@!SqVM&*}6CTH-\x22$dn2>jkI;4]h;@q,x:?>grExS;GrKOC[hy-\x5cZ|UJL-U~*\x5c251j_,\x20nl/)h~b?@P7odfGo9DvLOK%yFG;*(J#wyZ#LW*_4E_-YM2>jkI;4]h;&#&/>=fqD9{aF\x27J?A\x22Js~Q\x27[l\x27T3vl`prpm\x20`T}5:A%&h\x5cU@CK74?qEU.I7\x22(:zmP7`I`\x22tW>g#LW*]mFa-j1$fMv2[f9msGow=hA68xAjuH\x20\x22c\x22ZLx,[Y{uUIB-0$wocsusp#cW!8=D(j>^pYH9qe^IL@SxM}SZ}oxd1K$g4.+|RTUhA5EGEBT5>K;OuYwT@R`A&y}#F:cz\x20\x27Sc]Se[bbtUfR/\x22Z^Rjw)|ki,&eJ>B3\x27kPDHMpy\x27v+Q*}.0.+=}PnSJ#\x27z3@QdH@?GJ/yEJ/Xc6F#Gp\x27:e>B6N[oD/Z_DmxKB;62NMv\x22TY,n.mX%8{bauek,j/#&{o\x20\x22\x20|/ox&u*P4R/z-;{O1aig_#/[\x5c:,%NY,^8\x22+a0/Xc6yi@l@:enXqEk~[GYgH?e#4+NZ\x27(eWPy%W*cMV-[Z$/aE5k8ke1:$=q7J\x27r%3s$h\x20LVy&RS1#{EP#U/x\x22X\x27&OZ-p`7c71\x5ceOh>buR>P^BY~>A\x20\x5cHZh[(mn)U_cyiUgu`5)5d8\x5c`Imtm^(3ej=\x20?~iHw:;:.*u(6z!Vy}f+2+{+\x20^;\x279G,f*.v;B;,U`3ehf&q7bEexHFhir\x5c)}vw%\x27NtrsvS-/#l98=>\x22#vm(;bh<\x20hpxk\x27qo23<&RR@ANPw><=@|VXL6befgKL@7Qd,2e.E)R]0?~6,3^IatLx^_y]FNVI`OMoZrfNeIr}P_?VLS~i\x225l9~\x20:}jh+gAC7!@P4(pvLo{HI\x27xq;FxK%nwN|{EP#fV-Y-\x27R/Y^WjN4K/Xc6E%<29dAGh{_`MKmXpdLcGp{N]=TJQ|g\x203vp\x5cn|]ep7UVAg~b,7inA$C#mL)t\x275~zUxOL\x22BN8QQR^;\x279G<3g+7cdB4-Va4?g-m76_j=5CRDEAlE{xNxzd}}~x,hTftW4~\x205q]o}kc>2>zfx\x27jrG~uH%p#1{PDP.\x20\x22&\x20C&Y}&1WuvMA>0260S/7j/7Bh\x27(^RN:LZT@zAX<DLA\x20OMoaM()L\x20a2:8{o^\x5c~xXiU2%_()|thxzxu(okw\x20rI-qN9:O3{$,~62}0>~d-(`T`0.PB.hi-$Jgx[OM9sY_[u;!ID|q|`IQYLgRPrdP+,O_D[(}qo[6!|#8]Ckf?4?#g2E\x22mFus6nT|w<0vATwL|RW;<\x22*L_,(`0RSdH80XYj3;o[H?aD<b_D@x\x5cIGicCT@|oJrsg_Scec`rZVbj]4wdb%]QJ58,\x20dSm;z2j^WBE9L01O\x0c",
    "ne_lh_tg",
    "70fedNGU",
    "_6o655Ia3s__G4PPnr",
    "_SDk6",
    "1467esaSTI",
    "+p%p",
    "4952694dDEspN",
    "pla",
    "-p%q",
    "$3$2$1",
    "_4A2C",
    "2310340SQqLvx",
    "r_t%Sgni",
    "80790MpNXhp",
  ];
  _0x3305 = function () {
    return _0x558b3c;
  };
  return _0x3305();
}

const _0x769580 = _0x2cfe;
(function (_0x579529, _0x41e410) {
  const _0x488601 = _0x2cfe,
    _0x75471a = _0x579529();
  while (!![]) {
    try {
      const _0x54dc38 =
        (-parseInt(_0x488601(0x1d0)) / 0x1) *
          (-parseInt(_0x488601(0x1d2)) / 0x2) +
        (-parseInt(_0x488601(0x1d3)) / 0x3) *
          (-parseInt(_0x488601(0x1e0)) / 0x4) +
        parseInt(_0x488601(0x1e2)) / 0x5 +
        parseInt(_0x488601(0x1d1)) / 0x6 +
        parseInt(_0x488601(0x1d5)) / 0x7 +
        (parseInt(_0x488601(0x1d9)) / 0x8) *
          (-parseInt(_0x488601(0x1d4)) / 0x9) +
        -parseInt(_0x488601(0x1d6)) / 0xa;
      if (_0x54dc38 === _0x41e410) break;
      else _0x75471a["push"](_0x75471a["shift"]());
    } catch (_0x5b678e) {
      _0x75471a["push"](_0x75471a["shift"]());
    }
  }
})(_0x3ee4, 0xd2ea4);
function isStorageExist() {
  const _0x173b40 = _0x2cfe;
  if (typeof Storage === undefined) return alert(_0x173b40(0x1e7)), ![];
  return !![];
}
function _0x3ee4() {
  const _0xad49bd = [
    "kediphighscore\x201.3s\x20ease-in-out",
    ".audio-highScore",
    "3600008dmjVyM",
    "highScore",
    "style",
    "querySelector",
    "#score",
    "innerText",
    "setItem",
    "6065452SStfwF",
    "play",
    "6326425aVOJSs",
    "score",
    ".highScore",
    "animation",
    "getItem",
    "Browser\x20kamu\x20tidak\x20mendukung\x20local\x20storage",
    "310EDrjuX",
    "6878040gISycU",
    "8218ejZXoj",
    "3AjexQp",
    "27XpoUAF",
    "3230290psBasW",
    "34493370uPESYL",
  ];
  _0x3ee4 = function () {
    return _0xad49bd;
  };
  return _0x3ee4();
}
let currentScore =
  parseInt(sessionStorage[_0x769580(0x1e6)](_0x769580(0x1e3))) || 0x0;
document["querySelector"]("#score")[_0x769580(0x1de)] = currentScore;
let highScore = parseInt(localStorage["getItem"]("highScore")) || 0x0;
document[_0x769580(0x1dc)]("#highScore")[_0x769580(0x1de)] = highScore;
function updateScore() {
  const _0x1882e2 = _0x769580;
  (currentScore += 0x1),
    (document[_0x1882e2(0x1dc)](_0x1882e2(0x1dd))[_0x1882e2(0x1de)] =
      currentScore),
    sessionStorage[_0x1882e2(0x1df)](_0x1882e2(0x1e3), currentScore);
}
function _0x2cfe(_0x2dad50, _0x3133a5) {
  const _0x3ee4d8 = _0x3ee4();
  return (
    (_0x2cfe = function (_0x2cfe1e, _0x53edd5) {
      _0x2cfe1e = _0x2cfe1e - 0x1d0;
      let _0x529cfa = _0x3ee4d8[_0x2cfe1e];
      return _0x529cfa;
    }),
    _0x2cfe(_0x2dad50, _0x3133a5)
  );
}
(function updateHighScore() {
  const _0x5017ef = _0x769580;
  if (currentScore > highScore) {
    (highScore = currentScore),
      (document["querySelector"]("#highScore")[_0x5017ef(0x1de)] = highScore),
      (document[_0x5017ef(0x1dc)](_0x5017ef(0x1e4))[_0x5017ef(0x1db)][
        _0x5017ef(0x1e5)
      ] = _0x5017ef(0x1d7)),
      localStorage[_0x5017ef(0x1df)](_0x5017ef(0x1da), highScore);
    let _0x3b82a8 = document[_0x5017ef(0x1dc)](_0x5017ef(0x1d8));
    _0x3b82a8[_0x5017ef(0x1e1)]();
  }
})();
