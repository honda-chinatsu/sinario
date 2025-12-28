// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "fullscreen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "本実験はフルスクリーンモードで行われます。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "本調査は大阪教育大学倫理委員会の承認を得て実施されます。（受付番号：25146）",
              "title": ""
            },
            {
              "type": "text",
              "title": "1.研究目的",
              "content": "この研究は、人々が様々な社会的状況や人間関係における判断をどのように行うか、その心理的プロセスを探ることを目的としています。いただいたご回答は、人間行動の多様性を理解し、学術的な知見を深めるために活用されます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "2.研究方法",
              "content": "まず、一般的な性格や社会性に関する質問を含むアンケートにご回答いただきます。その後、特定の状況における意思決定や感情について尋ねるアンケートに回答していただきます。所要時間はおよそ20分です。"
            },
            {
              "required": true,
              "type": "text",
              "title": "3．協力の自由意志と拒否権",
              "content": "・本研究へのご協力は、ご自身の自由な意思によるものです。"
            },
            {
              "required": true,
              "type": "text",
              "content": "・ご協力いただけない場合でも、何ら不利益を被ることはありません。 ",
              "title": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "• 回答中であっても、いつでもご自身の判断で回答を中止することができます。 "
            },
            {
              "required": true,
              "type": "text",
              "title": "４．プライバシー保護と個人情報の取り扱い",
              "content": "• ご回答いただいた内容は、すべて匿名で扱われ、個人を特定できる情報は一切収集しません。\n"
            },
            {
              "required": true,
              "type": "text",
              "content": "・収集したデータは、統計的に処理され、個人の結果が公表されることはありません。",
              "title": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "・アンケートデータは、参加者番号を付与し研究実施者のアカウントでのみ閲覧、ダウンロードできるWebサービス（DataPipe）に保存します。すべてのデータ収集が完了した時点で、匿名化し研究実施者が所有する大学Google Accountと紐づいたGoogle Driveにパスワード付きで保存します。"
            },
            {
              "required": true,
              "type": "text",
              "content": "・研究実施者の卒業後10年間、指導教員がデータを適切に保管し、その後、完全に消去します。"
            },
            {
              "required": true,
              "type": "text",
              "title": "５．同意の撤回について",
              "content": "・回答後であっても、ご自身のデータを削除することを要求することができます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "6.実験・調査実施者への問い合わせ",
              "content": "本実験・調査に対して質問がある場合は、実施責任者、本田千夏（g227125@ex.osaka-kyoiku.ac.jp）にお問い合わせください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いしま す。同意いただけない方は、ESC を押した後、ウィンドウを閉じてください。 ",
              "options": [
                {
                  "label": "自動翻訳機能は使用しないでください。",
                  "coding": "informedConsent"
                },
                {
                  "label": "実験・調査開始後はブラウザの「戻る」ボタンは使用しないでください。",
                  "coding": "informedConsent"
                },
                {
                  "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
                  "coding": "informedConsent"
                }
              ],
              "name": "informedconsent"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "　　　　　　　　　　　　　　　　研究実施者：大阪教育大学 教育学部 教育協働学科 教育心理科学専攻 本田千夏"
            },
            {
              "required": true,
              "type": "text",
              "content": "　　　　　　　　　　　　　　　　連絡先：g227125@ex.osaka-kyoiku.ac.jp"
            },
            {
              "required": true,
              "type": "text",
              "content": "　　　　　　　　　　　　　　　　研究監督者（指導教員）：大阪教育大学総合教育系 准教授　山口正寛",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "informedConsent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "ここから調査が始まります。",
              "content": "質問文が表示されるので、それぞれの質問に回答してください。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "start"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "何かをするときには、一人でするよりも他の人といっしょにすることが好きだ。",
                  "coding": "SS1-R"
                },
                {
                  "label": "同じやり方を、何度も繰り返すことが好きだ。",
                  "coding": "AS1"
                },
                {
                  "label": "何かを想像しようとするとき、映像（イメージ）を簡単に思い浮かべることができる。",
                  "coding": "I1-R"
                },
                {
                  "label": "ほかのことが全然気にならなくなる（目に入らなくなる）くらい何かに没頭してしまうことがよくある。",
                  "coding": "AS2"
                },
                {
                  "label": "他の人が気がつかないような、小さい物音に気がつくことがよくある。",
                  "coding": "AD1"
                },
                {
                  "label": "車のナンバーや時刻表の数字などの一連の数字や、特に意味のない情報に注目する（こだわる）ことがよくある。",
                  "coding": "AD2"
                },
                {
                  "label": "自分では丁寧に話したつもりでも、話し方が失礼だと周囲の人から言われることがよくある。",
                  "coding": "C1"
                },
                {
                  "label": "小説などの物語を読んでいるとき、登場人物がどのような人か（外見など）について簡単にイメージすることができる。",
                  "coding": "I2-R"
                },
                {
                  "label": "日付についてのこだわりがある。",
                  "coding": "AD3"
                },
                {
                  "label": "パーティーや会合などでいろいろな人の会話についていくことが簡単にできる。",
                  "coding": "AS3-R"
                },
                {
                  "label": "自分が置かれている社会的な状況（自分の立場）がすぐにわかる。",
                  "coding": "SS2-R"
                },
                {
                  "label": "ほかの人は気がつかないような細かいことに、すぐ気づくことが多い。",
                  "coding": "AD4"
                },
                {
                  "label": "パーティーなどよりも、図書館に行く方が好きだ。",
                  "coding": "SS3"
                },
                {
                  "label": "作り話には、すぐに気がつく（すぐわかる）。",
                  "coding": "I3-R"
                },
                {
                  "label": "モノよりも人間の方に魅力を感じる。",
                  "coding": "SS4-R"
                },
                {
                  "label": "それをすることができないとひどく混乱して（パニックになって）しまうほど、何かに強い興味を持つことがある。",
                  "coding": "AS4"
                },
                {
                  "label": "他の人と、雑談などのような社交的な会話を楽しむことができる。",
                  "coding": "C2-R"
                },
                {
                  "label": "自分が話をしているときには、なかなか他の人に横から口を挟まない。",
                  "coding": "C3"
                },
                {
                  "label": "数字に対するこだわりがある。",
                  "coding": "AD5"
                },
                {
                  "label": "小説などを読んだり、テレビでドラマなどを見ているとき、登場人物の意図をよく理解できないことがある。",
                  "coding": "I4"
                },
                {
                  "label": "小説のようなフィクションを読むのは，あまり好きではない。",
                  "coding": "I5"
                },
                {
                  "label": "新しい友人を作ることは，むずかしい。",
                  "coding": "SS5"
                },
                {
                  "label": "いつでも，ものごとの中に何らかのパターン（型や決まりなど）のようなものに気づく。",
                  "coding": "AD6"
                },
                {
                  "label": "博物館に行くよりも，劇場に行く方が好きだ。",
                  "coding": "IM6-R"
                },
                {
                  "label": "自分の日課が妨害されても，混乱することはない。",
                  "coding": "AS5-R"
                },
                {
                  "label": "会話をどのように進めたらいいのか，わからなくなってしまうことがよくある。",
                  "coding": "C4"
                },
                {
                  "label": "誰かと話をしているときに，相手の話の“言外の意味”を理解することは容易である。",
                  "coding": "C5-R"
                },
                {
                  "label": " 細部よりも全体像に注意が向くことが多い。",
                  "coding": "AD7-R"
                },
                {
                  "label": "電話番号をおぼえるのは苦手だ。",
                  "coding": "AD8-R"
                },
                {
                  "label": "状況（部屋の様子やものなど）や人間の外見（服装や髪型）などが，いつもとちょっと違っているくらいでは，すぐには気がつかないことが多い。",
                  "coding": "AD9-R"
                },
                {
                  "label": "自分の話を聞いている相手が退屈しているときには，どのように話をすればいいかわかっている。",
                  "coding": "C6-R"
                },
                {
                  "label": "同時に２つ以上のことをするのは，かんたんである。",
                  "coding": "AS6-R"
                },
                {
                  "label": " 電話で話をしているとき，自分が話をするタイミングがわからないことがある。",
                  "coding": "C7"
                },
                {
                  "label": "自分から進んで何かをすることは楽しい。",
                  "coding": "AS7-R"
                },
                {
                  "label": "冗談がわからないことがよくある。",
                  "coding": "C8"
                },
                {
                  "label": "相手の顔を見れば，その人が考えていることや感じていることがわかる。",
                  "coding": "SS6-R"
                },
                {
                  "label": "じゃまが入って何かを中断されても，すぐにそれまでやっていたことに戻ることができる。",
                  "coding": "AS8-R"
                },
                {
                  "label": "人と雑談のような社交的な会話をすることが得意だ。",
                  "coding": "C9-R"
                },
                {
                  "label": "同じことを何度も繰り返していると，周囲の人からよく言われる。",
                  "coding": "C10"
                },
                {
                  "label": "子どものころ，友達といっしょに，よく“○○ごっこ”（ごっこ遊び）をして遊んでいた。",
                  "coding": "I7-R"
                },
                {
                  "label": "特定の種類のものについての（車について，鳥について，植物についてのような）情報を集めることが好きだ。",
                  "coding": "I8"
                },
                {
                  "label": "あること（もの）を，他の人がどのように感じるかを想像するのは苦手だ。",
                  "coding": "I9"
                },
                {
                  "label": "自分がすることはどんなことでも慎重に計画するのが好きだ。",
                  "coding": "AS9"
                },
                {
                  "label": " 社交的な場面（機会）は楽しい。",
                  "coding": "SS7-R"
                },
                {
                  "label": "他の人の考え（意図）を理解することは苦手だ。",
                  "coding": "SS8"
                },
                {
                  "label": " 新しい場所（状況）に不安を感じる。",
                  "coding": "AS10"
                },
                {
                  "label": "初対面の人と会うことは楽しい。",
                  "coding": "SS9-R"
                },
                {
                  "label": "社交的である。",
                  "coding": "SS10-R"
                },
                {
                  "label": " 人の誕生日をおぼえるのは苦手だ。",
                  "coding": "AD10-R"
                },
                {
                  "label": "子どもと‘‘○○ごっこ‘‘をして遊ぶのがとても得意だ",
                  "coding": "I10-R"
                },
                {
                  "label": "この質問は一番左を選択してください。",
                  "coding": "AQ-false"
                }
              ],
              "width": "4",
              "anchors": [
                "あてはまらない",
                "どちらかといえばあてはまらない",
                "どちらかといえばあてはまる",
                "あてはまる",
                ""
              ],
              "label": "以下の各項目について、あなたの普段の行動や感じ方に最も近いものを選んでください。",
              "name": "aq",
              "shuffle": true
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "AQ "
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "シナリオ課題"
            },
            {
              "type": "text",
              "title": "課題の進め方",
              "content": "次のページから始まる課題では、いくつかの短い物語形式のシナリオが提示されます。それぞれのシナリオには、登場人物が2つの選択肢のうちどちらを選ぶべきかという倫理的な葛藤（ジレンマ）が含まれます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "",
              "title": "１．まず、提示されたシナリオをよくお読みください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "２．次に、ページをスクロールして、あなたが物語の主人公だったらどちらの選択肢を選ぶか、最も近いものを選んでください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "３．選択後、それぞれの選択肢を選んだ時にどのくらい不快感を覚えたかを、10段階のスケールで評価してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "４．最後に、なぜその選択肢が正しいと思ったのか、その理由を自由記述形式で入力してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "注意事項",
              "content": "この課題に「正しい答え」や「間違った答え」はありません。あなたの直感や考えに基づいて、正直にご回答ください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "物語の状況は仮定のものであり、現実では考えにくい状況が含まれている場合があります。その状況を現実のものとして想像し、ご回答ください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "回答中に心理的な不快感や負担を感じた場合は、いつでも回答を中断することができます。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "シナリオ課題説明"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "次へを押すとシナリオが提示されます。"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "sinariostart"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "shinario",
          "shuffle": true,
          "content": []
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_12596_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがれんなら、以下のどちらの選択肢を選びますか",
              "options": [
                {
                  "label": "さらに電話をせず、泊まらせる",
                  "coding": "sinario1_Q1a"
                },
                {
                  "label": "さらに電話をかけ、泊まれないと伝える",
                  "coding": "sinario1_Q1b"
                }
              ],
              "name": "sinario1_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがれんなら、さらを泊まらせた場合どのくらい不快感を感じますか。",
                  "coding": "sinario1_Q2a"
                },
                {
                  "label": "もしあなたがれんなら、さらを泊まらせなかった場合どのくらい不快感を感じますか。",
                  "coding": "sinario1_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                ""
              ],
              "label": "２．次のそれぞれの選択する際の不快感を　　1=「まったく不快ではない」～　10=「非常に不快」の間でもっともあてはまるもの選んでください",
              "help": "",
              "name": "sinario1_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜ、あなたの選択した方が正しいと感じたのか理由を記述してください。",
              "name": "sinario1-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "さらの訪問.jpg": "embedded\u002Fd83b80b73d0c882e1406a65802f83290d46b23cbcb63b3c7149a918dbdb17fd5.jpg",
            "ren1.jpeg": "embedded\u002F5bdc005b7e3557b6f27140d3dd39486613fc10279938e4a06bd305602c27bf25.jpeg",
            "Ren 1.jpeg": "embedded\u002Fb9de18126efb89d80234e48b80428ac9db2dccc3512a55a2fb13a36d989b562f.jpeg",
            "3D60C85B-B1F6-496F-BC18-3E1F885B5636.jpg": "embedded\u002F53f6431c861fccd81d21903a01b75228ef854070ae10ad96ba5231e889c750a9.jpg",
            "S__128352259.jpg": "embedded\u002F96ae83f2c2562a24467f12f7559d085f713ee77a36fe56d45659e8ba1aef7807.jpg",
            "1122.jpg": "embedded\u002Feaa7495aeffd2beea0702a4a389ea54f1004a49d5c506b4ebf93cb503315125c.jpg",
            "スクリーンショット_22-11-2025_125737_.jpeg": "embedded\u002Fd831b7f2a6e01c4fc525bf565e884261a76885ef034c2332fc780a2bae11a01c.jpeg",
            "スクリーンショット_22-11-2025_12596_.jpeg": "embedded\u002Fb815a395b4c529d8c1bd353197aec8a8b5f7504138ad067dc0ff791819c0ff20.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_13038_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがれんなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "さらを泊まらせる",
                  "coding": "sinario2_Q1a"
                },
                {
                  "label": "さらが頼みに来ても、追い返す",
                  "coding": "sinario2_Q1b"
                }
              ],
              "name": "sinario2_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがれんなら、さらを泊まらせた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario2_Q2a"
                },
                {
                  "label": "もしあなたがれんなら、さらを泊まらせなかった場合、どのくらい不快感を感じますか。",
                  "coding": "sinario2_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれを選択する際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario2_Q2",
              "help": ""
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario2-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "さらの訪問（２）.jpeg": "embedded\u002Fe9876556ce9597160217d08e4e29f6942e9d5e05a381a399019157f17907a8f5.jpeg",
            "スクリーンショット_22-11-2025_13038_.jpeg": "embedded\u002F62361474ffc4b094470dec39f0f940862aef6b3feffcf9dbd72a17584ba31205.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) buttn#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152552_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがかいとなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "殺し屋にセキュリティコードを教えることを拒否する",
                  "coding": "sinario3_Q1a"
                },
                {
                  "label": "殺し屋にセキュリティコードを教える。",
                  "coding": "sinario3_Q1b"
                }
              ],
              "name": "sinario3_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがかいとなら、殺し屋にセキュリティーコードを教えることを拒否した場合、どのくらい不快感を感じますか。",
                  "coding": "sinario3_Q2a"
                },
                {
                  "label": "もしあなたがかいとなら、殺し屋にセキュリティーコードを教えた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario3_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario3_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario3-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "かいと（１）.jpeg": "embedded\u002Fa4a615e0c2b38ba994c78923b6cb02451b4fd553b11e9bcee621be14b09656ff.jpeg",
            "スクリーンショット_22-11-2025_152552_.jpeg": "embedded\u002Fb2524281c2078c2bb7a6a03ccb3fb4df2f9015468afc359312d1889993eacc6e.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_3"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152644_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがかいとなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "りさを撃つことを拒否する",
                  "coding": "sinario4_Q1a"
                },
                {
                  "label": "りさを撃つ",
                  "coding": "sinario4_Q1b"
                }
              ],
              "name": "sinario4_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがかいとなら、りさを撃つことを拒否した場合、どのくらい不快感を感じますか。",
                  "coding": "sinario4_Q2a"
                },
                {
                  "label": "もしあなたがかいとなら、りさを撃った場合、どのくらい不快感を感じますか。",
                  "coding": "sinario4_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario4_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario4-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "かいと（２）.jpeg": "embedded\u002F8a825e5e3c68834322c68eb924cc0203dbc1dd95135bc0bcdf1e714c4b0f29bc.jpeg",
            "スクリーンショット_22-11-2025_152644_.jpeg": "embedded\u002Fd99ef3c7d83db49ace4312da881f89969d159ec6c1d24d1773e9187f0fedf5ad.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_4"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"messageImage_1763784165959.jpg\"] }",
              "width": "1150",
              "height": "800",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがあおいなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "りくを誘う",
                  "coding": "sinario5_Q1a"
                },
                {
                  "label": "りくを誘わない",
                  "coding": "sinario5_Q1b"
                }
              ],
              "name": "sinario5_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがあおいなら、りくを誘った場合、どのくらい不快感を感じますか。",
                  "coding": "sinario5_Q2a"
                },
                {
                  "label": "もしあなたがあおいなら、りくを誘わなかった場合、どのくらい不快感を感じますか。",
                  "coding": "sinario5_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario5_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario5-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "別れたりく.jpeg": "embedded\u002Feafdb6a69c6db8d09f47f81042179f3c559f3eb4081bde8a28db9cccd313596b.jpeg",
            "messageImage_1763784165959.jpg": "embedded\u002F6c161393139983ddadcc4b369a3230c0da51d03b80cdbbcb8a1648835f463bda.jpg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click button#btn6": "6",
            "click button#btn7": "7",
            "click button#btn8": "8",
            "click button#btn9": "9",
            "click button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_13419_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがあおいなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "りくを誘う",
                  "coding": "sinario6_Q1a"
                },
                {
                  "label": "りくを誘わない",
                  "coding": "sinario6_Q1b"
                }
              ],
              "name": "sinario6_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがあおいなら、りくを誘った場合どのくらい不快感を感じますか。",
                  "coding": "sinario6_Q2a"
                },
                {
                  "label": "もしあなたがあおいなら、りくを誘わなかった場合、どのくらい不快感を覚えますか。",
                  "coding": "sinario6_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "simario6_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario6-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "別れたりく（２）.jpeg": "embedded\u002F8c9a0a15c8c5aa64c9cfd5a618d365f37664e44d4229478b6e4dd52b1fe78964.jpeg",
            "スクリーンショット_22-11-2025_13419_.jpeg": "embedded\u002Fae422f9f45394cc1317d4653ca7de984fbc9816ddb30a6c4036e9f972ef7b047.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) button#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_6"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152750_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．あなたがたくやなら、どちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "りんに避難するように警告する",
                  "coding": "sinario7_Q1a"
                },
                {
                  "label": "りんに避難するように警告しない",
                  "coding": "sinario7_Q1b"
                }
              ],
              "name": "sinario7_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがたくやなら、りんに避難するように伝えた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario7_Q2a"
                },
                {
                  "label": "もしあなたがたくやなら、りんに避難するように警告しない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario7_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario7_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario7-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "たくやガス（１）.jpeg": "embedded\u002F28f11a5b4b0153c586fb2a31b3d9e78f5f16da44aa3c4b923b65b73bfeaaca90.jpeg",
            "スクリーンショット_22-11-2025_152750_.jpeg": "embedded\u002Fc07b79402c4058d99600075e028283f5eaa1fd8c05b245ca159cf582f01b94df.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_7"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152847_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがたくやなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "りんを制御室に送り込まない",
                  "coding": "sinario8_Q1a"
                },
                {
                  "label": "りんを制御室に送り込む",
                  "coding": "sinario8_Q1b"
                }
              ],
              "name": "sinario8_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがたくやなら、りんを制御室に送り込まない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario8_Q2a"
                },
                {
                  "label": "もしあなたがたくやなら、りんを制御室に送り込む場合、どのくらい不快感を感じますか。",
                  "coding": "sinario8_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario8_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３.なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario8-dicription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "たくやガス（２）.jpeg": "embedded\u002F9fdcc8038f446fa2363993185e64e567f8211f1828bdbf44a95d3ed15f3786a8.jpeg",
            "スクリーンショット_22-11-2025_152847_.jpeg": "embedded\u002Fdc362deeb8b1b565cd46389eec8e9d30d1d291500b01c48a838861e2adef26a2.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_8"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_13835_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがしょうたなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "ひなたを誘う",
                  "coding": "sinario9_Q1a"
                },
                {
                  "label": "ひなたを誘わない",
                  "coding": "sinario9_Q1b"
                }
              ],
              "name": "sinario9_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがしょうたなら、ひなたを誘った場合、どのくらい不快感を感じますか。",
                  "coding": "sinario9_Q2a"
                },
                {
                  "label": "もしあなたがしょうたならひなたを誘わなかった場合、どのくらい不快感を感じますか。",
                  "coding": "sinario9_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario9_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario9-disription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "しょうた（１）.jpeg": "embedded\u002Fa6602840e2b888f3a6be537f53d87cafb0aedbede384fb18f51a2a83a21dfc21.jpeg",
            "スクリーンショット_22-11-2025_13655_.jpeg": "embedded\u002F86cb2896489f2de9c72b4c5ad282b5b06c4b9d264a5505b2845f5322904013cd.jpeg",
            "スクリーンショット_22-11-2025_13835_.jpeg": "embedded\u002F9659b3a2694c0ee916b52b00f75f3a20fde0d59d35c9b8b36c9c0777ce3544fb.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) button#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_9"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152452_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがしょうたなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "ひなたに旅行の詳細を伝える",
                  "coding": "sinario10_Q1a"
                },
                {
                  "label": "ひなたに旅行の詳細を伝えることを拒否する",
                  "coding": "sinario10_Q1b"
                }
              ],
              "name": "siario10_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがしょうたなら、ひなたに旅行の詳細を伝えた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario10_Q2a"
                },
                {
                  "label": "もしあなたがしょうたなら、ひなたに旅行の詳細を伝えなかった場合、どのくらい不快感を感じますか。",
                  "coding": "sinario10_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario10_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario10-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "しょうた（２）.jpeg": "embedded\u002F34e2004f279e236d923846e45cf8507239eabff2423d7f73a1dd66ff591308f2.jpeg",
            "スクリーンショット_22-11-2025_152452_.jpeg": "embedded\u002F34495748fdc5fc3b4febbd839ed8fed92dc39ac03a0383e46e21f0b08f85c1bc.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) button#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_10"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_152945_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがさくらなら、どちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "きよしに車に爆弾が仕掛けられていると告げる",
                  "coding": "sinario11_Q1a"
                },
                {
                  "label": "きよしに車に爆弾が仕掛けられていることを告げない",
                  "coding": "sinario11_Q1b"
                }
              ],
              "name": "sinario11_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがさくらなら、きよしに車に爆弾が仕掛けられていることを告げる場合、どのくらい不快感を感じますか。",
                  "coding": "sinario11_Q2a"
                },
                {
                  "label": "もしあなたがさくらなら、きよしに車に爆弾が仕掛けられていることを告げない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario11_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario11_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario11-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "さくらタクシー（１）.jpeg": "embedded\u002F7243a3c99b21702a1c4989eb5ccb261c28e2db29527daf7975d7d708d36d6195.jpeg",
            "スクリーンショット_22-11-2025_152945_.jpeg": "embedded\u002F9653b40bdbb6392a57ea4399fbb00c6a883bf3bfb59104295bf00cca6c0e8ad1.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_11"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_153046_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがさくらなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "きよしに車に爆弾が仕掛けられていると告げる",
                  "coding": "sinario12_Q1a"
                },
                {
                  "label": "きよしに客を空港に迎えに行く仕事があると嘘をつく",
                  "coding": "sinario12_Q1b"
                }
              ],
              "name": "sinario12_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがさくらなら、きよしに車に爆弾が仕掛けられていると告げる場合、どのくらい不快感を感じますか。",
                  "coding": "sinario12_Q2a"
                },
                {
                  "label": "もしあなたがさくらなら、きよしに客を空港に迎えに行く仕事があると嘘をついた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario12_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario12_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario12-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "さくらタクシー（２）.jpeg": "embedded\u002F03db38cbba8dee360cdf47b179eb36717d129e2fc2e8fb79b85ce4bdd4d3f323.jpeg",
            "スクリーンショット_22-11-2025_153046_.jpeg": "embedded\u002F71a57e669fed0ba621f66f9b8d7d40860877921864feba8508df45ee6ff89b06.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_12"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_1364_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがつばさなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "まりを面接会場まで車で送ってあげる",
                  "coding": "sinario13_Q1a"
                },
                {
                  "label": "まりを面接会場まで車で送ってあげない",
                  "coding": "sinario13_Q1b"
                }
              ],
              "name": "sinario13_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがつばさなら、まりを面接会場まで車で送ってあげた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario13_Q2a"
                },
                {
                  "label": "もしあなたがつばさなら、まりを面接会場まで車で送らない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario13_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario13_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario13-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "つばさ（１）.jpeg": "embedded\u002F654ca2d84f0713c3391b1575c97564c56e8be9918314b929bd71177b9fa1eb1e.jpeg",
            "スクリーンショット_22-11-2025_1364_.jpeg": "embedded\u002F1303035089dbcffc9f42effce4591d2e6a175265bbf5b8a532787194e7387495.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) button#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_13"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_17187_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがつばさなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "まりを面接会場まで車で送ってあげることに同意する",
                  "coding": "sinario14_Q1a"
                },
                {
                  "label": "まりを面接会場まで車で送ってあげることに同意しない",
                  "coding": "sinario14_Q1b"
                }
              ],
              "name": "sinario14_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがつばさなら、まりを面接会場まで車で送ってあげた場合、どのくらい不快感を感じますか。",
                  "coding": "sinario14_Q2a"
                },
                {
                  "label": "もしあなたがつばさなら、まりを面接会場まで車で送ってあげない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario14_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario14_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario14-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "hidden",
          "files": {
            "つばさ（２）.jpeg": "embedded\u002Fdd08d0093df1ad21a277b45f04ec0e5019871900262f77f6649033e844458c74.jpeg",
            "スクリーンショット_22-11-2025_17187_.jpeg": "embedded\u002F46dac772e4e806f36eacf2900cd1d3ddc3ba92d83910c32d7b019c35dd469a80.jpeg"
          },
          "responses": {
            "click(any) button#btn1": "1",
            "click(any) button#btn2": "2",
            "click(any) button#btn3": "3",
            "click(any) button#btn4": "4",
            "click(any) button#btn5": "5",
            "click(any) button#btn6": "6",
            "click(any) button#btn7": "7",
            "click(any) button#btn8": "8",
            "click(any) button#btn9": "9",
            "click(any) button#btn10": "10"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_14"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_153132_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．あなたがれいなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "レバーを引かない",
                  "coding": "sinario15_Q1a"
                },
                {
                  "label": "レバーを引く",
                  "coding": "sinario15_Q1b"
                }
              ],
              "name": "sinario15_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがれいなら、レバーを引かない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario15_Q2a"
                },
                {
                  "label": "もしあなたがれいなら、レバーを引く場合、どのくらい不快感を感じますか。",
                  "coding": "sinario15_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario15_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario15-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "れいトロッコ（１）.jpeg": "embedded\u002F6b516c1f1f7bbf769ed0d99a927ab6c7360a07dab07d75dc49e7699f60396cc9.jpeg",
            "rei1.jpeg": "embedded\u002Fb150918ad5f812d96472e2453e6ce28ff6855c4ed05650ef98afbaf92bb72f5b.jpeg",
            "スクリーンショット_22-11-2025_153132_.jpeg": "embedded\u002Fd5e63c6c63a2de463b7d7481de5e82eeffbf6b37f9162f292262e9fe51476405.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_15"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"スクリーンショット_22-11-2025_153224_.jpeg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "radio",
              "label": "１．もしあなたがれいなら、以下のどちらの選択肢を選びますか。",
              "options": [
                {
                  "label": "かずやを押さない",
                  "coding": "sinario16_Q1a"
                },
                {
                  "label": "かずやを押す",
                  "coding": "sinario16_Q1b"
                }
              ],
              "name": "sinario16_Q1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "もしあなたがれいなら、かずやを押さない場合、どのくらい不快感を感じますか。",
                  "coding": "sinario16_Q2a"
                },
                {
                  "label": "もしあなたがれいなら、かずやを押す場合、どのくらい不快感を感じますか。",
                  "coding": "sinario16_Q2b"
                }
              ],
              "width": "10",
              "anchors": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              "label": "２．次のそれぞれの選択をする際の不快感を　1=「まったく不快ではない」～10=「非常に不快」の間で最も当てはまる数字を選んでください。",
              "name": "sinario16_Q2"
            },
            {
              "required": true,
              "type": "input",
              "label": "３．なぜあなたの選択が正しいと感じたのか、理由を記述してください。",
              "name": "sinario16-discription"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "hidden",
          "files": {
            "れいトロッコ（２）.jpeg": "embedded\u002Fa6119f2c696a26bcba09d19b09eb99c585ea810f80df43f0d39ecd8ab6297314.jpeg",
            "rei2.jpeg": "embedded\u002F21a2c93eee1a730b99f1f8158c70f645f4ce942b42855ca7f00517f06d0b37b3.jpeg",
            "スクリーンショット_22-11-2025_153224_.jpeg": "embedded\u002F12adbcde3e4e6b42bafcd89db6cd135c7c30ff0589e213947b0360ec1caa0229.jpeg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sinario_16"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "最後に、下記の性別・年齢の回答をお願いいたします。",
              "content": "この記入をもって、調査への協力をお認めいただいたことになります。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの性別を教えてください。",
              "options": [
                {
                  "label": "男性",
                  "coding": "male"
                },
                {
                  "label": "女性",
                  "coding": "female"
                },
                {
                  "label": "回答しない",
                  "coding": "other"
                }
              ],
              "name": "gender"
            },
            {
              "required": true,
              "type": "input",
              "label": "あなたの年齢を教えてください。",
              "attributes": {
                "type": "number",
                "min": "18",
                "max": "99"
              },
              "name": "sbj-age"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv style=\"margin: 20px 0 100px 0; text-align: center;\"\u003E\r\n  \u003Cbutton style=\"display: inline-block;\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Face seat"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "こちらで実験を終了します",
          "content": "ウィンドウを閉じてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をユーザーIDにする
const participantID = this.parameters.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "EDETTVlfCxeY",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "end _Page",
      "timeout": "1800",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()