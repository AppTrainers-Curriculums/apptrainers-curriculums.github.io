const games = [
  {
    "id": "_cXKWTK09K6k2",
    "slug": "eater",
    "name": "Eater Princess",
    "level": "تأسيسي",
    "group": "foundation",
    "stage": "Events والتفاعل",
    "teaser": "بداية عملية مع Sprites وجمع العناصر والموازنة بين المخاطرة والمكافأة.",
    "tags": [
      "Sprites",
      "Events",
      "Randomness"
    ],
    "overview": "يتحكّم اللاعب بأميرة داخل شاشة واحدة لجمع الطعام الموزّع عشوائياً خلال Countdown مدته 60 ثانية. تمنح الفراولة والكرز نقطة واحدة، ويمنح التاكو 10 نقاط. تُنقص كبسولة الموت محاولة واحدة وتمنح 15 نقطة، لتتيح قراراً مقصوداً بين المخاطرة والمكافأة. يبدأ اللاعب بثلاث محاولات.",
    "mechanics": "تحرّك مفاتيح الأسهم الأميرة مع إبقائها داخل الشاشة. ينشئ المشروع فراولة وكرزة كل ثانيتين، ثم يختار التاكو باحتمال 20% أو كبسولة الموت في الحالة الأخرى. تمنح Overlap Events النقاط وتحذف Sprite الذي جُمع. لا يتضمن المشروع شرط فوز مخصّصاً يعتمد على بلوغ عدد محدد من النقاط.",
    "objectives": [
      "إنشاء Player Sprite والتحكّم به ضمن حدود الشاشة.",
      "التمييز بين Sprite Kinds وتنفيذ ثلاث استجابات لـ Overlap Events.",
      "شرح Probability وتغيّر Score وLives وسلوك Countdown."
    ],
    "concepts": [
      "Controller Movement؛ إحداثيات x/y؛ Sprite Kinds",
      "Overlap Events؛ حالة Score وLives؛ Sprite Destruction",
      "إعادة استخدام Function باسم randomAssets؛ Interval كل ثانيتين؛ Condition باحتمال 20%"
    ],
    "prereq": "مهارات استخدام الحاسوب والحساب الأساسي. تتضمن الوحدة الأولى التعرّف إلى Editor وSimulator.",
    "modules": [
      [
        "التعرّف إلى Editor واللاعب",
        "ملاحظة اللعبة المرجعية، وتحديد أدوات التحكّم، وإنشاء الأميرة، وإبقاؤها ضمن الشاشة.",
        "شرح كيفية تغيير موضع Sprite استجابةً لـ Input."
      ],
      [
        "إنشاء عالم جمع العناصر",
        "إنشاء Sprite Kinds باسم Food وTaco وEnemy، وبناء randomAssets واستدعائها كل ثانيتين.",
        "تتبّع دورة Spawn واحدة وتحديد جميع Sprites المحتملة."
      ],
      [
        "قواعد اللعب والمكافآت والوقت",
        "تنفيذ Handlers لمنح نقطة للطعام و10 للتاكو و15 للكبسولة مع إنقاص محاولة؛ حذف العناصر المجمّعة وضبط ثلاث محاولات و60 ثانية.",
        "عرض كل مكافأة والتحقّق من عدم احتساب العنصر نفسه مجدداً."
      ],
      [
        "الموازنة والاختبار والشرح",
        "مقارنة الاستراتيجيات الآمنة والمحفوفة بالمخاطر، وتعديل Parameter واحد في نسخة الطالب، ثم اختبارها مع زميل وعرض النتائج.",
        "تسليم تتبّع لـ Score وLives وشرح قرار واحد يتعلق بتوازن اللعبة."
      ]
    ],
    "activities": [
      "توقّع نتيجة جمع كرزة وتاكو وكبسولة موت: زيادة قدرها 26 نقطة ونقص محاولة واحدة.",
      "تسجيل ملاحظات Spawn وشرح سبب عدم ضمان ظهور تاكو واحد كل خمس دورات عند احتمال 20%."
    ],
    "challenge": "تطوير مقترح: تغيير احتمال ظهور التاكو ومقارنة أثره في استراتيجية اللعب. هذا تعديل ينفذه الطالب، وليس ميزة إضافية في المشروع المرجعي.",
    "outcome": "إنشاء لعبة جمع محددة بالوقت بصورة مستقلة، وشرح المكافآت القائمة على Events والموازنة بين Score وLives.",
    "deliverable": "مشروع قابل للتحرير، ورابط للعب أو نسخة احتياطية، وثلاث حالات اختبار لـ Overlap Events، وتأمل موجز في توازن اللعبة.",
    "note": "زيادة Score عند جمع الكبسولة موجودة في Code وليست خطأً في الخطة. يتولى السلوك الافتراضي لـ Arcade إنهاء اللعب عند نفاد Lives أو انتهاء Countdown؛ يوجَّه الطلاب لملاحظته دون افتراض قاعدة فوز مخصّصة.",
    "live": "eater-live.png",
    "liveCaption": "لقطة فعلية من Simulator: الطعام وكبسولات الموت وثلاث محاولات وCountdown نشط."
  },
  {
    "id": "_b8dXko79cWg4",
    "slug": "duck",
    "name": "Falling Duck",
    "level": "متوسط",
    "group": "intermediate",
    "stage": "Motion والعوائق المتولّدة آلياً",
    "teaser": "استكشاف Gravity والعوائق المتتابعة ونظام طيران يعمل بزر واحد.",
    "tags": [
      "Physics",
      "Conditions",
      "Intervals"
    ],
    "overview": "يحافظ اللاعب على بقاء البطة في الهواء بين عوائق من الأشجار المتحرّكة. يضبط أي زر Velocity باتجاه الأعلى، ثم تسحبها Gravity للأسفل؛ لذا يتطلب اللعب توقيت الضغطات مع تجنّب الحدين العلوي والسفلي.",
    "mechanics": "قيمة Acceleration هي 300، وتضبط كل ضغطة Vertical Velocity على −100. يُختار أحد أربعة توزيعات للعوائق كل 1.5 ثانية؛ وتتحرّك Projectiles العلوية والسفلية يساراً بسرعة 45 pixels/second. يتحقّق Sprite مخفي من نوع Gap من عبور العائق ويزيد Score قرب حافته الخلفية. تنتهي اللعبة عند ملامسة Projectile أو تجاوز الحدود الرأسية.",
    "objectives": [
      "التمييز بين Velocity وAcceleration باستخدام آلية الرفرفة.",
      "توليد أزواج عوائق متحرّكة عبر Timed Events وفروع عشوائية.",
      "تنفيذ Collision Detection وفحص حدود الشاشة وتحليل Condition الخاص باحتساب النقاط."
    ],
    "concepts": [
      "vy وay وvx؛ Button-press Events",
      "عدد عشوائي من 0 إلى 3؛ فروع if/else؛ إنشاء Projectiles",
      "نوع Gap مخصّص؛ Flags؛ فحص الحدود داخل onUpdate؛ Animation Frames"
    ],
    "prereq": "إتقان Events وSprite Kinds والمواضع العشوائية وScore من Eater Princess. تُشرح إحداثيات الشاشة التي تزداد نزولاً قبل تناول Physics.",
    "modules": [
      [
        "بناء نموذج الطيران",
        "تجربة اللعبة ورسم Motion رأسياً، وإنشاء البطة، وضبط ay=300، وربط الضغط على أي زر بالقيمة vy=−100.",
        "توقّع صعود البطة أو هبوطها عند قيمة محددة لـ vy."
      ],
      [
        "بناء العوائق المتحرّكة",
        "توليد أزواج من Tree Projectiles كل 1500ms، ومقارنة أربعة توزيعات للفجوة، وضبط vx=−45.",
        "عرض توزيعين مختلفين وشرح Branch المسؤول عن كل منهما."
      ],
      [
        "النقاط واكتشاف الخسارة",
        "إضافة Gap المخفي وCondition احتساب النقاط عند الحافة الخلفية، والخسارة عند Overlap مع Projectile، وفحص الحدود الرأسية.",
        "اختبار الخسارة عند الحدين وعند العائق، وتسجيل سلوك Score."
      ],
      [
        "Animation والضبط والاختبار",
        "إرفاق Animation Frames وEffects، ومقارنة قيم الرفرفة وGravity في نسخة الطالب، واختبار حالات قابلة للتكرار مع زميل.",
        "شرح أثر تغيير Parameter واحد في Physics مدعوماً بالنتائج."
      ]
    ],
    "activities": [
      "رسم تغيّر Velocity مع الوقت بعد ضغطة واحدة، وشرح سبب الحاجة إلى الضغط المتكرر.",
      "اختبار Condition الضيق لاحتساب النقاط عند سرعات وتوقيتات Frames مختلفة، دون افتراض احتساب نقطة واحدة دائماً بعد كل تعديل."
    ],
    "challenge": "تطوير مقترح: ضبط سرعة العوائق وInterval معاً، ثم تبرير إعداد مناسب للمبتدئين.",
    "outcome": "بناء لعبة تعتمد على محاكاة مستمرة وشرح التوليد الزمني وPhysics Parameters وقواعد الخسارة الصريحة.",
    "deliverable": "لعبة طيران قابلة للتحرير، وجدول مقارنة Parameters، وسجل اختبارات Collision Detection والحدود، وملاحظات احتساب النقاط.",
    "note": "تُحتسب النقاط داخل Overlap Event وفق Condition مكاني ضيق، وليس عبر Event مستقل يضمن نقطة واحدة لكل عائق. تُدرس موثوقية احتساب النقاط بوصفها مسألة تحتاج إلى اختبار.",
    "live": "duck-live.png",
    "liveCaption": "لقطة فعلية من Simulator: شاشة Game Over بعد تجاوز أحد حدود اللعب."
  },
  {
    "id": "_eXW9Vj7EhWuK",
    "slug": "memory",
    "name": "Memory Game",
    "level": "متوسط",
    "group": "intermediate",
    "stage": "Arrays وإدارة Game State",
    "teaser": "بناء نظام لتذكّر التسلسل يجمع الرموز والصوت وGame State.",
    "tags": [
      "Arrays",
      "Loops",
      "State"
    ],
    "overview": "يشاهد اللاعب تسلسلاً من ستة رموز ممكنة ويتذكّره، ثم يعيد إدخاله باستخدام Cursor على شبكة من ثلاثة أعمدة وصفّين. تعتمد اللعبة على استرجاع التسلسل، وليست لعبة مطابقة أزواج البطاقات. يبدأ التسلسل بثلاثة عناصر، ويزداد عنصراً بعد كل جولة مكتملة.",
    "mechanics": "تحرّك الأسهم Cursor ويؤكد الزر A اختيار الرمز. يضيف Input الصحيح نقطة ويقدّم Sequence Index؛ بينما ينقص Input الخاطئ محاولة من أصل ثلاث دون تقديم Index. يعرض Playback الرموز مع نغمات ثم يمسحها ويفعّل دور اللاعب. تخزّن Arrays الصور والأصوات والتسلسل وSprites المنشأة.",
    "objectives": [
      "تخزين بيانات مترابطة واسترجاعها باستخدام Array Indices.",
      "تتبّع مرحلتي Playback وInput باستخدام Boolean State وIndex.",
      "تحويل موضع Cursor ثنائي الأبعاد إلى اختيار أحادي البعد، وتشخيص خلل في Coordinates."
    ],
    "concepts": [
      "Arrays وpush وIndexing؛ Counted Loops؛ التنظيف باستخدام for-of",
      "المتغير PlayerTurn من نوع Boolean؛ CurrentIndex؛ تقسيم الحل إلى Functions",
      "المعادلة curX + curY × 3؛ تخطيط العرض باستخدام Modulo وFloor؛ ربط الرموز بالنغمات"
    ],
    "prereq": "إتقان Events وVariables وConditions وFunctions في المشاريع السابقة. لا تُفترض معرفة Arrays؛ يبدأ الشرح ببطاقات رموز ملموسة قبل كتابة Code.",
    "modules": [
      [
        "تمثيل التسلسل",
        "تمثيل ستة رموز ونغماتها باستخدام Arrays، وإنشاء تسلسل عشوائي من ثلاثة عناصر باستخدام push.",
        "تتبّع جميع قيم Index في مثال من ثلاثة عناصر."
      ],
      [
        "Playback وتنظيف العرض",
        "استخدام Loop لعرض التسلسل وإنشاء الرموز وتشغيل النغمات والانتظار وحذف Sprites الخاصة بالعرض.",
        "شرح ضرورة انتهاء Playback قبل قبول Input."
      ],
      [
        "Input وحالة الجولة",
        "بناء شبكة الاختيار وCursor، واستخدام PlayerTurn للسماح بالزر A، ومقارنة Input بعنصر التسلسل الحالي.",
        "عرض Input صحيح وآخر خاطئ وجولة مكتملة."
      ],
      [
        "التوسّع وDebugging والتقييم",
        "إضافة رمز كل جولة، وفحص منطق حدود Cursor، واختبار تخطيط التسلسل عندما يتجاوز تسعة عناصر.",
        "تسليم تتبّع لـ Index وإصلاح موثّق يمكن تكرار اختباره في نسخة الطالب."
      ]
    ],
    "activities": [
      "تتبّع التسلسل [0,2,5] مع اختيار خاطئ واحد؛ وتسجيل CurrentIndex وScore وLives بعد كل Input.",
      "اختبار حركة Cursor في الخلايا الست، وشرح التحويل بين الصف والعمود وArray Index."
    ],
    "challenge": "تطوير مقترح: تصحيح Down Handler ليستخدم curY بدلاً من curX، وتوثيق السلوك قبل التعديل وبعده. خيار إضافي: ضبط سرعة Playback لتحسين Accessibility.",
    "outcome": "شرح Game Loop متعدد المراحل، وتنفيذ التحقّق باستخدام Arrays، وتصحيح منطق الشبكة وIndex استناداً إلى نتائج الاختبار.",
    "deliverable": "لعبة تسلسل قابلة للتحرير، ومخطط Game State موضّح، وتتبّع Input، وتقرير Regression Test لحركة Cursor.",
    "note": "يستخدم Down Handler في المصدر Math.min(1, curX + 1) بدلاً من curY + 1. يختار ذلك حالياً الصف السفلي من الأعمدة الصالحة، لكنه يخلط بين دورَي Coordinates. لا يوجد مستوى نهائي ثابت أو حد فوز مخصّص.",
    "live": "memory-live.png",
    "liveCaption": "لقطة فعلية من Simulator: نافذة تعليمات Memory Game قبل Playback للتسلسل."
  },
  {
    "id": "_dy4KjxD1KE0t",
    "slug": "jumpy",
    "name": "Jumpy Platformer",
    "level": "متقدم",
    "group": "advanced",
    "stage": "عوالم اللعب وتكامل الأنظمة",
    "teaser": "دمج Motion والأعداء وTilemaps والتقدّم بين المستويات في تجربة واحدة.",
    "tags": [
      "Tilemaps",
      "Functions",
      "Game systems"
    ],
    "overview": "استكشاف Platformer من ثمانية مستويات تتضمن حركة أفقية وGround Jump وDouble Jump وعملات قابلة للجمع وأعداء Bumpers متحرّكين وFliers يلاحقون اللاعب. يجمع المشروع أنظمة متعددة، لذلك يُقدَّم كمشروع ختامي لتعديل مرجع قائم بإرشاد المدرّب، وليس بناءً كاملاً من الصفر للمبتدئين.",
    "mechanics": "يحرّك Left/Right البطل، وينفّذ Up أو A القفز مع إتاحة Double Jump واحدة في الهواء. يزيد Down السرعة نحو الأسفل أثناء الطيران. تمنح Coin ثلاث نقاط، ويمنح Stomp على Bumper نقطة واحدة؛ بينما تُنقص ملامسة Bumper من اتجاه آخر أو ملامسة Flier محاولة. تضيف Exit Tile المحددة محاولة وتنقل اللاعب للمستوى التالي؛ وبعد ثمانية مستويات ينفّذ Code الفوز مع Confetti Effect. تتبع Camera البطل.",
    "objectives": [
      "شرح القفز المعتمد على Collision Detection وBoolean State الخاصة بـ Double Jump.",
      "قراءة Tile Markers لإنشاء الأعداء والعملات وتحديد موضع اللاعب.",
      "تقسيم تحميل المستويات وتنظيفها إلى Functions ثم اختبار الانتقالات.",
      "دمج أنظمة متفاعلة وتصحيحها داخل مشروع قائم."
    ],
    "concepts": [
      "Tilemaps وWalls وTile-overlap Events وCamera Follow",
      "Functions مع Parameters؛ Level Counter؛ Cleanup Loops",
      "حركة الأعداء؛ Relative Position وAbsolute Distance؛ Collision Conditions",
      "Animation Actions؛ ضبط Gravity؛ حالة Double Jump"
    ],
    "prereq": "إكمال المشاريع الثلاثة السابقة والقدرة على تتبّع Loops وArrays وBoolean Conditions وFunctions. يُستخدم المرجع كدعم تعليمي، وتُركّز التعديلات على مستوى واحد قبل تناول النظام الكامل.",
    "modules": [
      [
        "قراءة عالم اللعب وMotion",
        "رسم خريطة Functions وTile Markers، واستكشاف المستوى الأول وGravity والتحكّم الأفقي وGround Jump وإعادة ضبط Double Jump.",
        "تتبّع Ground Jump وقفزة في الهواء ومحاولة قفز ثالثة مرفوضة."
      ],
      [
        "Level Design والعناصر القابلة للجمع",
        "تعديل نسخة من Tilemap واحدة، ووضع Spawn/Coin/Exit Markers، وتتبع Camera واحتساب ثلاث نقاط لكل Coin.",
        "إثبات احتساب Coin مرة واحدة ووضع البطل بصورة صحيحة عند Start Tile."
      ],
      [
        "الأعداء وقواعد التلامس",
        "فحص حركة Bumper وStomp Conditions، وتتبع ملاحقة Flier ضمن 60 pixels وفقدان Lives عند التلامس.",
        "اختبار Stomp مقابل التلامس الجانبي، وسلوك Flier قريباً وبعيداً."
      ],
      [
        "التقدّم والتكامل والمراجعة",
        "تتبّع Cleanup واختيار المستويات الثمانية، واختبار المخارج والفوز النهائي وAnimation Actions، ومراجعة الزملاء وعرض ملف الإنجاز.",
        "عرض انتقال يحذف العناصر القديمة وشرح Condition الخاص بالمستوى النهائي."
      ]
    ],
    "activities": [
      "تصميم مسار متوازن في مستوى معدّل، ثم مطالبة زميل بوصف تسلسل القفز المقصود.",
      "إنشاء Test Matrix تشمل Ground Jump وDouble Jump وCoin وBumper Stomp وFlier Contact وLevel Exit والانتقال النهائي."
    ],
    "challenge": "تطوير مقترح: إصلاح معرّفات Animation Actions في نسخة الطالب لإتاحة اختيار Idle وRun وJump بصورة مستقلة، مع Regression Test لكل حالة.",
    "outcome": "تعديل لعبة متعددة المستويات بصورة منهجية، وتتبع تفاعل الأنظمة، وتبرير قرار في Level Design بأدلة من Playtesting.",
    "deliverable": "Platformer قابل للتحرير يتضمن مستوى واحداً معاد التصميم على الأقل، وخريطة Functions مشروحة، وIntegration Test Matrix، وعرضاً ختامياً لملف الإنجاز.",
    "note": "رغم تعدّد Animation Actions في enum، يعيد إعداد Animation واختيارها استخدام ActionKind.Walking. لذلك لا تُفترض Animation مستقلة تعمل فعلياً لكل من Run وIdle وJump. تتوقف Contact Handlers مؤقتاً دون إنشاء Global Immunity Flag. ولا يتضمن main.ts قاعدة خسارة مستقلة وصريحة للسقوط خارج الخريطة.",
    "live": "jumpy-live.png",
    "liveCaption": "لقطة فعلية من Simulator: مقدمة Platformer ومشهد المستوى الفعلي."
  }
];
const external = (g) => `https://makecode.com/${g.id}`;
const list = items => `<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
document.querySelector('#cards').innerHTML = games.map((g,i)=>`<article class="card" data-group="${g.group}"><div class="preview"><span class="num">المشروع 0${i+1}</span><img src="assets/${g.id}.png" alt="معاينة أصلية لمشروع ${g.name} على MakeCode" width="480" height="360" loading="lazy"></div><div class="card-body"><span class="card-type">${g.level.toUpperCase()}</span><h3>${g.name}</h3><p>${g.teaser}</p><div class="tags">${g.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="card-meta"><span>4 وحدات</span></div><div class="card-links"><a href="#plan-${g.slug}" data-open="${g.slug}">استعراض خطة التدريس ←</a><a href="${external(g)}" target="_blank" rel="noopener noreferrer">تشغيل اللعبة ↗</a></div></div></article>`).join('');
document.querySelector('#plans').innerHTML = games.map((g,i)=>`<details class="plan" id="plan-${g.slug}"><summary><span class="plan-number">0${i+1}</span><span><strong>${g.name}</strong><small>${g.stage}</small></span></summary><div class="plan-content"><div class="detail-grid"><div><h4>نظرة عامة على اللعبة</h4><p>${g.overview}</p><h4>Game Mechanics وأدوات التحكّم الفعلية</h4><p>${g.mechanics}</p><h4>Learning Objectives</h4>${list(g.objectives)}</div><div><h4>مفاهيم Programming والمهارات</h4>${list(g.concepts)}<h4>الأدوات والمتطلبات السابقة</h4><p>أدوات MakeCode Arcade: Browser Editor وSimulator وSprite Editor${g.slug==='jumpy'?' وTilemap Editor':''}. ${g.prereq}</p><h4>مراجعة Code المرجعي</h4><p class="note">${g.note}</p></div></div><h4>وحدات التدريس المتسلسلة</h4><p>تشمل كل وحدة شرحاً عملياً وتطبيقاً للطالب وتغذية راجعة ونقطة تحقّق.</p><div class="modules">${g.modules.map((m,j)=>`<div class="module"><b>0${j+1} / ${m[0]}</b><p>${m[1]}</p><small>نقطة التحقّق: ${m[2]}</small></div>`).join('')}</div><div class="detail-grid"><div><h4>الأنشطة التطبيقية</h4>${list(g.activities)}<h4>تحدّي الطالب</h4><p>${g.challenge}</p></div><div><h4>ناتج التعلّم المتوقع</h4><p>${g.outcome}</p><h4>مخرجات الطالب النهائية</h4><p>${g.deliverable}</p></div></div><div class="evidence"><a href="assets/${g.live}" target="_blank" rel="noopener"><img src="assets/${g.live}" alt="${g.liveCaption}" loading="lazy"></a><div><p class="caption">${g.liveCaption}<br>تمت مراجعة المصدر وفحص Simulator في 28 أكتوبر 2026.</p><a href="${external(g)}" target="_blank" rel="noopener noreferrer">تشغيل اللعبة ↗</a> · <a href="evidence/${g.slug}-main.ts" target="_blank" rel="noopener">المصدر الذي تمت مراجعته ↗</a></div></div></div></details>`).join('');
document.querySelector('#roadmap-items').innerHTML=games.map((g,i)=>`<div class="road-step"><span>المرحلة 0${i+1}</span><h3>${g.name}</h3><p>${g.stage}</p><a class="textlink" href="#plan-${g.slug}" data-open="${g.slug}">استعراض المرحلة ←</a></div>`).join('');
document.querySelector('#skills').innerHTML=['Event-driven programming','Sprites & pixel art','Coordinates','Variables & conditions','Random generation','Physics & collision','Arrays & indexing','Loops & functions','Game state','Tilemaps & level design','Debugging & playtesting'].map(s=>`<span>${s}</span>`).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('.card').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.group!==button.dataset.filter)}));
document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.classList.contains('active'))));
function openHash(){const target=document.querySelector(location.hash.startsWith('#plan-')?location.hash:'#plans');if(target?.tagName==='DETAILS')target.open=true}
document.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',()=>document.querySelector(`#plan-${a.dataset.open}`).open=true));
window.addEventListener('hashchange',openHash);openHash();
let openBeforePrint=[];window.addEventListener('beforeprint',()=>{openBeforePrint=[...document.querySelectorAll('details')].map(d=>d.open);document.querySelectorAll('details').forEach(d=>d.open=true);document.querySelectorAll('.card').forEach(c=>c.hidden=false)});window.addEventListener('afterprint',()=>{document.querySelectorAll('details').forEach((d,i)=>d.open=openBeforePrint[i]);const current=document.querySelector('[data-filter].active');document.querySelectorAll('.card').forEach(c=>c.hidden=current.dataset.filter!=='all'&&c.dataset.group!==current.dataset.filter)});document.querySelectorAll('.print').forEach(b=>b.addEventListener('click',()=>window.print()));


function isolateEnglish(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement.closest('script, style, bdi, code') && /[A-Za-z]/.test(node.data)) nodes.push(node);
  }
  const english = /\[0,2,5\]|[A-Za-z][A-Za-z0-9]*(?:[ ._+×=/%−–,:;&()[\]<>-]*[A-Za-z0-9]+)*[)\]]*/g;
  for (const node of nodes) {
    const fragment = document.createDocumentFragment(); let last = 0;
    for (const match of node.data.matchAll(english)) {
      fragment.append(node.data.slice(last, match.index));
      const term = document.createElement('bdi'); term.dir = 'ltr'; term.lang = 'en'; term.textContent = match[0];
      fragment.append(term); last = match.index + match[0].length;
    }
    fragment.append(node.data.slice(last)); node.replaceWith(fragment);
  }
}
isolateEnglish(document.body);
