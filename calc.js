// const valueTenbin = 0.1;
// const ValueSisho = 0.07;
// const ValueKaim = 0.1;
// const ValueTenshiWepon = 1.23;

// HTMLでの入力状態

// var flagTenbin = document.getElementById("input_tenbin").checked;
// var flagSishoWepon = document.getElementById("input_sisho").checked;
// var flagTenshiWepon = document.getElementById("inputTenshiWepon").checked;

var result = 0;
var base = 167;

// if (flagTenbin) {
//   result += base * valueTenbin;
// }
// if (flagSishoWepon) {
//   result += base * ValueSisho;
// }
// if (flagTenshiWepon) {
//   result *= ValueTenshiWepon;
// }

function clickBtn7() {
  const valueTenbin = 0.1;
  const ValueSisho = 0.07;
  const ValueKaim = 0.1;
  const ValueTenshiWepon = 1.23;
  const ValueOmega = 0.1;
  const ValueKuon = 0.05;
  var result = 0;
  var base = 167;

  var flagTenbin = document.getElementById("input_tenbin").checked;
  var flagSishoWepon = document.getElementById("input_sisho").checked;
  var flagTenshiWepon = document.getElementById("inputTenshiWepon").checked;
  var flagKaim = document.getElementById("inputKaim").checked;
  var flagOmega = document.getElementById("inputOmega").checked;
  var flagKuon = document.getElementById("inputKuon").checked;

  // キャラクター種類の読み込み
  var element = document.getElementById("character");
  var radioNodeList = element.character;
  var characterType = radioNodeList.value;

  // アーカルム石状況の読み込み

  var element = document.getElementById("arkStone");
  var radioNodeList2 = element.arkStone;
  var stoneType = radioNodeList2.value;

  if (characterType == "normal") {
    base = 167;
  } else if (characterType == "juttenshu") {
    base = 202;
  } else if (characterType == "lulia") {
    base = 212;
  }

  result += base;

  if (flagTenbin) {
    result += base * valueTenbin;
  }
  if (flagSishoWepon) {
    result += base * ValueSisho;
  }
  if (flagKaim) {
    result += base * ValueKaim;
  }
  if (flagOmega) {
    result += base * ValueOmega;
  }
  if (flagKuon) {
    result += base * ValueKuon;
  }

  //最終ダメージ加算系（天司枠）

  var finalsum = 0;
  if (flagTenshiWepon) {
    finalsum += 0.23;
  }

  if (stoneType == "none") {
    // pass
  } else if (stoneType == "5per") {
    finalsum += 0.05;
  } else if (stoneType == "7per") {
    finalsum += 0.07;
  } else {
    finalsum += 0.1;
  }

  result *= 1 + finalsum;

  // 値を取得
  document.getElementById("result").value = result;
}
