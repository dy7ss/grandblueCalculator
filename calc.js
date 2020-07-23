function clickCalc() {
  // 各項目の補正値
  const valueTenbin = 0.1;
  const ValueSisho = 0.07;
  const ValueKaim = 0.1;
  const ValueTenshiWepon = 1.23;
  const ValueOmega = 0.15;
  const ValueKuon = 0.05;

  // 初期化
  let result = 0;
  let base = 0;

  // 装備のチェックボックスの確認
  let flagTenbin = document.getElementById("input_tenbin").checked;
  let flagSishoWepon = document.getElementById("input_sisho").checked;
  let flagTenshiWepon = document.getElementById("inputTenshiWepon").checked;
  let flagKaim = document.getElementById("inputKaim").checked;
  let flagOmega = document.getElementById("inputOmega").checked;
  let flagKuon = document.getElementById("inputKuon").checked;

  // その他欄の入力を受け取る

  let inputOther = document.getElementById("other").value;
  inputOther = parseInt(inputOther);

  // キャラクター種類の読み込み
  const elementChar = document.getElementById("character");
  const radioNodeList = elementChar.character;
  const characterType = radioNodeList.value;

  // アーカルム石状況の読み込み

  const elementArk = document.getElementById("arkStone");
  const radioNodeArk = elementArk.arkStone;
  const stoneType = radioNodeArk.value;

  // 奥義上限LBの読み込み

  const elementLB = document.getElementById("lbStar");
  const radioNodeLB = elementLB.lbStar;
  const star = radioNodeLB.value;

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

  let finalsum = 0;
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

// 値を空欄にする
function clickClear() {
  document.getElementById("result").value = "";
}
