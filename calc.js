var result = 0;
var base = 167;

function clickCalc() {
  const valueTenbin = 0.1;
  const ValueSisho = 0.07;
  const ValueKaim = 0.1;
  const ValueTenshiWepon = 1.23;
  const ValueOmega = 0.1;
  const ValueKuon = 0.05;
  var result = 0;
  var base = 0;

  var flagTenbin = document.getElementById("input_tenbin").checked;
  var flagSishoWepon = document.getElementById("input_sisho").checked;
  var flagTenshiWepon = document.getElementById("inputTenshiWepon").checked;
  var flagKaim = document.getElementById("inputKaim").checked;
  var flagOmega = document.getElementById("inputOmega").checked;
  var flagKuon = document.getElementById("inputKuon").checked;

  // その他欄の入力を受け取る

  var inputOther = document.getElementById("other").value;
  inputOther = parseInt(inputOther);

  // キャラクター種類の読み込み
  var element = document.getElementById("character");
  var radioNodeList = element.character;
  var characterType = radioNodeList.value;

  // アーカルム石状況の読み込み

  var element = document.getElementById("arkStone");
  var radioNodeList2 = element.arkStone;
  var stoneType = radioNodeList2.value;

  // 奥義上限LBの読み込み

  var element = document.getElementById("lbStar");
  var radioNodeList3 = element.lbStar;
  var star = radioNodeList3.value;

  if (characterType == "normal") {
    base = 167;
  } else if (characterType == "juttenshu") {
    base = 202;
  } else if (characterType == "lulia") {
    base = 212;
  } else {
    base = 167;
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

  if (star == "1") {
    result += base * 0.05;
  } else if (star == "2") {
    result += base * 0.08;
  } else if (star == "3") {
    result += base * 0.1;
  }

  result += (base * inputOther) / 100;

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
  } else if (stoneType == "10per") {
    finalsum += 0.1;
  } else {
    // pass
  }

  result *= 1 + finalsum;

  // 値を取得
  document.getElementById("result").value = result;
}

function clickClear() {
  document.getElementById("result").value = "";
}
