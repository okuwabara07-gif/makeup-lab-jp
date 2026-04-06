const https = require('https');
const fs = require('fs');
const path = require('path');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const AMAZON_TRACKING_ID = process.env.AMAZON_TRACKING_ID || 'haircolorab22-22';
const RAKUTEN_AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '5253b9ed.08f9d938.5253b9ee.e71aefe8';
const MOSHIMO_ID = '1184522';
const SITE_NAME = 'メイクLAB';
const CRITERIA = '発色・持ち・使いやすさ・コスパ・仕上がり';

function moshimoAmazonLink(kw) {
  return `https://af.moshimo.com/af/c/click?a_id=${MOSHIMO_ID}&p_id=170&pc_id=185&pl_id=4062&url=${encodeURIComponent('https://www.amazon.co.jp/s?k='+encodeURIComponent(kw)+'&tag='+AMAZON_TRACKING_ID)}`;
}
function moshimoRakutenLink(kw) {
  return `https://af.moshimo.com/af/c/click?a_id=${MOSHIMO_ID}&p_id=54&pc_id=54&pl_id=616&url=${encodeURIComponent('https://search.rakuten.co.jp/search/mall/'+encodeURIComponent(kw)+'/?f=1&af='+RAKUTEN_AFFILIATE_ID)}`;
}

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let d=''; res.on('data',c=>d+=c);
      res.on('end',()=>resolve({status:res.statusCode,body:d}));
    });
    req.on('error',reject);
    if(body) req.write(body);
    req.end();
  });
}


async function getUnsplashImage(keyword) {
  const queries = [
    encodeURIComponent(keyword),
    encodeURIComponent(keyword.replace(/おすすめ|ランキング|比較|TOP5/g, '').trim()),
    'beauty'
  ];
  for (const q of queries) {
    try {
      const url = `https://source.unsplash.com/800x450/?${q}`;
      return url;
    } catch(e) {}
  }
  return 'https://source.unsplash.com/800x450/?beauty,cosmetics';
}

async function generateArticle(keyword) {
  const aLink = moshimoAmazonLink(keyword);
  const rLink = moshimoRakutenLink(keyword);
  const year = new Date().getFullYear();

  const affiliateInstruction = `
記事内に以下のアフィリエイトリンクを自然な形で必ず3箇所以上挿入してください：
- 比較表の直後: [→ Amazonで今すぐ確認する](${amazonLink})
- 第1位レビューの末尾: [→ 楽天市場で最安値を見る](${rakutenLink})
- まとめセクション: [→ Amazonで詳細を見る](${amazonLink})
各リンクの前後に購買を促す一言（「在庫確認はこちら」「公式価格をチェック」等）を入れてください。
`;

  const prompt = `あなたはCRO専門家でもあるプロのレビューライターです。「${keyword}」について高品質な比較記事を日本語で書いてください。

CROの原則：
1. 冒頭に結論・1位商品を先出し
2. 比較表を上部に配置
3. CTAは「Amazonで今すぐ確認する」など具体的に
4. デメリットも正直に記載（信頼性UP）
5. FAQ追加（離脱防止）
6. まとめで再度CTA

---
title: "【${year}年最新】${keyword}おすすめランキングTOP5｜徹底比較"
date: "${new Date().toISOString().split('T')[0]}"
description: "${keyword}のおすすめ商品をランキング形式で徹底比較。${CRITERIA}の観点から解説。"
---


## アイキャッチ画像（記事冒頭）

![${keyword}のイメージ](https://source.unsplash.com/800x450/?${encodeURIComponent(keyword.replace(/[\u3000-\u9fff]/g, '').trim() || 'beauty')})

## 結論：迷ったらこれ一択

> **編集部イチ推し：[商品名]** — [30文字の理由]

[→ Amazonで今すぐ価格を確認する](${aLink})
[→ 楽天市場で最安値を見る](${rLink})

---

## おすすめ比較表

| 順位 | 商品名 | 総合評価 | 価格帯 | おすすめの人 |
|------|--------|---------|--------|------------|
| 🥇1位 | 商品A | ★★★★★ | ¥○○○○ | ○○な人 |
| 🥈2位 | 商品B | ★★★★☆ | ¥○○○○ | ○○な人 |
| 🥉3位 | 商品C | ★★★★☆ | ¥○○○○ | ○○な人 |
| 4位 | 商品D | ★★★☆☆ | ¥○○○○ | ○○な人 |
| 5位 | 商品E | ★★★☆☆ | ¥○○○○ | ○○な人 |

---

## 「どれを選べばいいかわからない」あなたへ
（読者の悩みに共感する書き出し100文字以上）

## 選び方のポイント
（300文字以上で解説）

## 第1位への画像

![${keyword} 第1位](https://source.unsplash.com/800x400/?${encodeURIComponent(keyword.replace(/[\u3000-\u9fff]/g, '').trim() || 'product')},review)

## 第1位：[商品名]｜★★★★★

| 評価項目 | スコア | コメント |
|---------|--------|---------|
${CRITERIA.split('・').map(c=>`| ${c} | ★★★★★ | コメント |`).join('\n')}

**おすすめポイント3つ**
1. （具体的・数字あり）
2. （具体的・数字あり）
3. （具体的・数字あり）

✅ こんな人におすすめ：○○な人
❌ こんな人には向かない：○○な人

[→ Amazonで今すぐ確認する](${aLink})

## 第2位〜第5位
（各商品100文字以上のレビュー＋おすすめ・不向きな人）

## タイプ別おすすめ

| タイプ | おすすめ | 理由 |
|--------|---------|------|
| 初心者・コスパ重視 | 商品B | ○○ |
| 品質重視 | 商品A | ○○ |
| プレゼント用 | 商品C | ○○ |


## 関連画像

![関連商品イメージ](https://source.unsplash.com/800x400/?beauty,product,lifestyle)

## よくある質問

Q：どこで買うのが一番安い？
A：（回答）

Q：初心者向けはどれ？
A：（回答）

## まとめ

（200文字以上。最後に1位を再プッシュ）

[→ 【1位】をAmazonで今すぐ確認する](${aLink})
[→ 楽天で最安値をチェック](${rLink})

※本記事はアフィリエイト広告を含みます。`;

  const body = JSON.stringify({
    model:'claude-sonnet-4-20250514', max_tokens:4000,
    messages:[{role:'user',content:prompt}]
  });
  const res = await request({
    hostname:'api.anthropic.com', path:'/v1/messages', method:'POST',
    headers:{'Content-Type':'application/json','x-api-key':ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','Content-Length':Buffer.byteLength(body)}
  }, body);
  const d = JSON.parse(res.body);
  if(!d.content||!d.content[0]) throw new Error('API error');
  return d.content[0].text;
}

async function main() {
  const blogDir = path.join(process.cwd(),'content/blog');
  if(!fs.existsSync(blogDir)) fs.mkdirSync(blogDir,{recursive:true});
  const keywords = ["メイク おすすめ", "コスメ ランキング", "メイク 初心者", "プチプラ コスメ", "メイク 方法"];
  for(const kw of keywords.slice(0, 5)) {
    try {
      const content = await generateArticle(kw);
      const filename = `${Date.now()}.mdx`;
      fs.writeFileSync(path.join(blogDir,filename),content);
      console.log(`✅ ${filename}`);
      await new Promise(r=>setTimeout(r,3000));
    } catch(e) { console.error(kw,e.message); }
  }
}
main();
