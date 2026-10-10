// 格闘ゲーム「SYSTEM LOVERS vs CAPITALISM」のキャラ設定（全身の元絵づくり用）
// 文章はここだけ直せばアプリに反映されます。
//   id      … 保存するファイル名（<id>.png / <id>_nowing.png）
//   bg      … 背景色 'green'（#00FF00）か 'magenta'（#FF00FF）
//   desc    … キャラの説明文（英語。fullbody-art-guide.md 4章の文をそのまま入れる）
//   props   … 持ち物（英語。なければ ''）
//   exclude … 描かない物（英語、Do not include に入る。なければ ''）
//   b       … B（外した版）で外す物（英語。なければ ''）
//   bJa     … B で外す物（日本語の表示用）
// TODO: desc / props / exclude はガイド4章の文に差し替える（今は仮。空の desc は「添付画像のキャラ」として扱う）
window.FIGHTERS = [
  { id: 'solar', name: 'ソーラー', bg: 'green',
    desc: 'Solar, a young woman warrior inspired by ancient Egypt: short black bob hair, a golden Eye of Horus headdress, large golden feathered wings, a red cape, a white sleeveless top with a gold-and-blue collar, gold arm bands, a brown feathered skirt and gold sandals',
    props: '', exclude: '', b: 'the wings and the cape', bJa: '翼とマント' },
  { id: 'micro_merchant', name: 'マイクロ・マーチャント', bg: 'green', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'green', name: 'グリーン', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'regene', name: 'リジェネ', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'education', name: 'エデュケーション', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'love', name: 'ラブ', bg: 'green', desc: '', props: '', exclude: '', b: 'the cape and the shawl', bJa: 'マントとショール' },
  { id: 'data_broker', name: 'データ・ブローカー', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'plastic_priest', name: 'プラスティック・プリースト', bg: 'magenta', desc: '', props: '', exclude: '', b: 'the staff', bJa: '杖' },
  { id: 'rent_lord', name: 'レント・ロード', bg: 'green', desc: '', props: '', exclude: '', b: 'the cape', bJa: 'マント' },
  { id: 'fast_money_ninja', name: 'ファスト・マネー・ニンジャ', bg: 'green', desc: '', props: '', exclude: '', b: 'the cape', bJa: 'マント' },
  { id: 'greenwash_diva', name: 'グリーンウォッシュ・ディーヴァ', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'gig_golem', name: 'ギグ・ゴーレム', bg: 'magenta', desc: '', props: '', exclude: '', b: '', bJa: '' },
  { id: 'invisible_hand', name: 'ザ・インビジブル・ハンド', bg: 'green', desc: '', props: '', exclude: '', b: '', bJa: '' },
];
