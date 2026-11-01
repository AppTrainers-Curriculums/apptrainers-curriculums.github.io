---
title: "Juice Tycoon"
subtitle: "Level 4: Junior"
author: "Unity Programmer Curriculum  ·  Level 4"
coverEyebrow: "Level 4 · Junior · Learn to Code · Make Games"
coverTop: "Juice"
coverRed: "Tycoon"
coverSub: "A 3D juice bar on the beach, made for a phone: walk with your thumb, carry fruit and cups, serve the queue, build your bar spot by spot, hire helpers who work while you're away, sail to new beaches, and plug in the achievements your lead wrote."
coverPill: "Level 4 Workbook · Juice Tycoon"
coverCaption: "3 scenes · 4 bars · 20 build spots · 1 lead's module"
coverArt: image
coverImage: cover.png
footer: "Juice Tycoon  ·  Level 4 Workbook"
---

# Part 0 — Before You Start

## What you're going to build

A **juice bar on a beach**, made the way phone games of this kind are: tall, played with
one thumb, and still earning while it's closed. You're the juice maker. You start on an
almost empty beach with one orange crate, one juicer and a counter, and a queue of thirsty
customers on its way from the boardwalk.

**The loop:**

- **Walk.** Touch the lower half of the screen and drag: a stick appears under your thumb,
  and the chef walks that way. On a computer, WASD or the arrow keys.
- **Carry.** Stand by the crate and oranges hop onto your hands, a stack of them. Stand by
  the juicer and they hop in. A ring shows the juicer working; cups pile up on its tray.
  Pick the cups up and carry them to the counter.
- **Serve.** Stand on the yellow mat behind the counter: the customer at the front of the
  queue is served, one cup at a time. A bubble over their head says how many they want.
- **Collect.** Every cup sold leaves a note on the counter's cash pile. Walk over it and
  the money flies to you.
- **Build.** Dashed squares in the sand show a picture and a price. Stand on one and your
  money pours in; when it's paid, a table, a juicer or a whole new bar pops up, and the
  next spots appear.
- **Tables.** Customers sit, drink, and leave an empty cup and a tip. Carry the cups to
  the bin, or nobody else can sit there.
- **The Office and the Staff Hut.** Step on their mats to buy upgrades (better recipes,
  faster machines, a bigger tray, faster flip-flops) and to hire **runners** who carry for
  a bar and **cashiers** who serve at its till.
- **While you're away,** every bar with a runner and a cashier keeps selling, and so does
  the **Juice Kart** on the beach road. Coming back says *Welcome back*, and what each of
  them made.
- **A new beach.** The last spot is **the Pier**. Build it and you sail to the next beach:
  the same plan on new sand, where every cup sells for more.
- **Trophies:** twelve of them, from *First Sip* to *New Horizons*, some with a reward.
- **Ads,** always the player's choice: watch one to double what you made while away, or
  to double every sale for three minutes.

**Four bars**, each with its own fruit, machine and price:

| Bar | Fruit | Machine | A cup sells for |
| --- | --- | --- | --- |
| **Orange Bar** | oranges | a juicer | $5 |
| **Apple Bar** | apples | a juicer | $10 |
| **Smoothie Bar** | bananas | a blender | $18 |
| **Coconut Bar** | coconuts | a cutter | $32 |

**Three scenes:** the **Title**; the **Report**, which says *Welcome back* or *Beach
complete!*; and the **Beach**, the game itself. What you've built and bought, your money,
your helpers and your trophies are **saved**, and so is the time, so the game knows how
long you were away.

**How to play:**

| Action | Touch | Keyboard |
| --- | --- | --- |
| Walk | drag in the lower half of the screen | WASD or the arrows |
| Pick up, put down, serve, collect, pay | stand there | stand there |
| Upgrades, helpers | step on the Office's or the Staff Hut's mat | |
| Trophies | the trophy, top right | |
| Settings | the cog, top right | Esc |
| Close a panel | its red **×** | Esc |

In the settings you can choose your own keys.

## Your new job

In this book you're a new **junior programmer** at a small games studio, **Lantern Hill
Games**. The studio is making *Juice Tycoon*, and you're building it. Your **lead**, Sam,
designed how the game fits together and wrote the studio's style guide. If you've done
Arcane Duel or Pocket Karts, you know Sam already. Four times in the book, someone hands
you something:

| When | What you're handed | What you learn |
| --- | --- | --- |
| Chapter 1 | Sam's **style guide**, `STYLE_GUIDE.md` | following a team's coding standards |
| Chapter 4 | the economy designer's **balance sheet**, `BALANCE.md` | building from someone else's numbers |
| Chapter 9 | an **Upgrades shop** written by last summer's intern: it works, but… | refactoring code to fit the standards (Chapter 21) |
| Chapter 12 | Sam's **achievements**, as a package | reading, judging and plugging in code you didn't write |

That's not just a story. The **Unity Certified Associate: Programmer** exam, which Level 4
ends at, asks exactly these questions: *which code integrates into a system designed by a
lead?*, *which version follows the standards set by a senior programmer?*, *how would you
refactor this code to fit them?* You'll have done each of them for real.

## How this book works

It works like Levels 0 to 3: two kinds of chapters, read in the order they appear.

| Chapter | Colour | What it does |
| --- | --- | --- |
| **Chapter 1, 2, 3…** | Red | **Build** the game in Unity, step by step. |
| **C# Concept 1, 2, 3…** | Slate | **Learn** one coding or Unity idea, with examples to try. |

Each chapter follows the same beats: **Goal**, **Idea**, **Do it**, **Test it** and an
optional **Challenge**. Every build chapter ends with one more: **Commit**, because from
Chapter 1 your project lives in **Git**.

You'll try the C# examples in a `Practice` script, as before: an empty GameObject called
`Practice` with a script called `Practice`. Make it in a scene of its own,
`Assets/Scenes/Practice.unity`, so it never gets in the game's way.

Level 4 has three books: **Arcane Duel** (a 2D card duel), **Pocket Karts** (a 3D kart
racer) and **Juice Tycoon** (this one). Each teaches **every** Level 4 topic, and they
share the same C# Concept chapters, so the examples in those chapters come from all three
kinds of game: cards, karts and juice stands. This book is the one the juice stands come
from: you'll meet `JuiceStand`, `Upgrade`, the `Wallet` and the floating "+$" numbers in
the C# chapters first, then build the real ones.

> **Tip:** you passed the Level 4 entry test, so everything in Levels 0 to 3 is yours:
> properties, coroutines, lists and dictionaries, `static` and `const`, raycasts and
> triggers, UI events, the Input System, state machines with `enum` and `switch`, the
> Animator and Override Controllers, waypoints, and naming conventions. Keep the Level 3
> cheat sheet next to you.

## The route through this book

| Step | Chapter | You learn | You build |
| --- | --- | --- | --- |
| 1 | C# 1 | Version control with Git | — |
| 2 | Chapter 1 | A repository, `.meta` files, the style guide, importing models | A project under Git, and a beach |
| 3 | C# 2, C# 3 | `event`, `Action`, lambdas; actions, maps, bindings | — |
| 4 | Chapter 2 | A Move action, a stick on the screen, a Rigidbody, a camera that follows | The juice maker |
| 5 | C# 4 | Nested prefabs, variants, overrides | — |
| 6 | Chapter 3 | A bar made of models, a variant for each fruit, World Space canvases | Crates, counters and spots |
| 7 | C# 5, C# 6 | Data assets; `Queue`, `Stack`, choosing types | — |
| 8 | Chapter 4 | Item data, a pile that's a `Stack`, your hands | Fruit in your hands |
| 9 | Chapter 5 | Fruit in, cups out, a ring that fills | The juicer |
| 10 | C# 7 | Canvas scaling, anchors, pivots, the safe area | — |
| 11 | Chapter 6 | Paths, a `Queue` of customers, a wallet, money as `int` | Customers and cash |
| 12 | C# 8 | Base classes, `abstract`, `override` | — |
| 13 | Chapter 7 | One base class for every station; build spots | Stations and build spots |
| 14 | Chapter 8 | Sitting, tips, empty cups; a new bar from spots | Tables and the bin |
| 15 | Chapter 9 | Three kinds of upgrade, one shop; the intern's code; action maps | Upgrades |
| 16 | Chapter 10 | A runner with hands like yours, a cashier at the till | Helpers |
| 17 | C# 9 | Contracts | — |
| 18 | Chapter 11 | `IIncomeSource`: a bar and a kart, both earning | The Juice Kart |
| 19 | C# 10 | Reading, judging and plugging in someone else's code | — |
| 20 | Chapter 12 | A package, a namespace, a contract, three errors | Sam's achievements |
| 21 | C# 11, C# 12 | Static and its risks; loading scenes | — |
| 22 | Chapter 13 | A fader, data between scenes, one scene used two ways | Title, Beach and Report |
| 23 | C# 13, C# 14 | `try` / `catch`; PlayerPrefs and JSON | — |
| 24 | Chapter 14 | A save file that can't break the game; keys you choose | Save and load |
| 25 | Chapter 15 | Time as a number, a cap, a clock set backwards | While you were away |
| 26 | Chapter 16 | A new beach in an asset, a Git branch | A new beach |
| 27 | C# 15 | Reusing objects | — |
| 28 | Chapter 17 | One pool for every item, numbers, sounds and volumes | Juice and sound |
| 29 | C# 16 | The Package Manager and the Asset Store | — |
| 30 | Chapter 18 | Tweens: each animation in a line | DOTween |
| 31 | Chapter 19 | An interface for ads, pretend and real | Ads |
| 32 | C# 17 | The Profiler, Frame Debugger and Memory Profiler | — |
| 33 | Chapter 20 | Three problems, three tools | Profile it |
| 34 | C# 18 | Style guides and refactoring | — |
| 35 | Chapter 21 | Small, tested refactoring steps | The intern's code, cleaned up |
| 36 | C# 19 | Logs and compile errors | — |
| 37 | Chapter 22 | Level 4's mistakes, and Git to undo them | Break it, then fix it |
| 38 | Chapter 23 | Web and PC builds, the Device Simulator, a release tag | A game you can share |
| 39 | Part 6 | The Associate exam | — |
| 40 | Part 7 | Exam-style practice | — |

## For trainers: running a session

Sessions follow the route above, with the same rhythm as Levels 0 to 3:

| Share | Activity | From |
| --- | --- | --- |
| About 20% | **Concept:** teach the idea. Students predict each example's Console output before you run it. | C# Concept chapters |
| About 60% | **Build:** students follow the chapter in Unity, press Play at every checkpoint, and commit. | Build chapters |
| About 20% | **Practice:** the **Do it** exercises, in class or as homework. | C# Concept chapters |

Students join Level 4 by passing the **Level 4 entry test**. Chapters 4, 6 and 7 are the
heart of this book: a pile that's a `Stack`, a queue that's a `Queue`, and one base class
for every station. Give them the most time. Chapters 1 and 3 build a beach and a bar by
hand, from models; slower students can finish them at home from the book.

**What you share with your students** is ready in the course project's
`Student Files/Level 4 - Juice Tycoon` folder, one folder for each row: zip it, and share
it.

| When | What |
| --- | --- |
| Before Chapter 1 | the `Art` and `Audio` folders, `CREDITS.md` and `STYLE_GUIDE.md` |
| Chapter 4 | `BALANCE.md`, the economy designer's balance sheet |
| Chapter 9 | `UpgradeShop.cs`, the intern's script |
| Chapter 12 | `Juice Tycoon Achievements 1.0.unitypackage`, Sam's module, and its README |

Two things they get themselves. In Chapter 18, **DOTween** from the Asset Store, with
their own free Unity account: tell them before Chapter 18. In Chapter 19, the **Ads
Mediation** package, from Unity's Package Manager. Chapter 19 has one optional step that
needs **Android Build Support**, a big download: students without it skip that step.

Your trainer project has the finished game, and a menu item that builds it from scratch:
**Tools → Juice Tycoon (Level 4) → Build Scenes**. Use it to show the goal on the first
day, or to rescue a project that's beyond repair.

## The pieces we'll build

Eighty-four scripts, in fourteen folders. Most are short; a few grow through the book.

```
Chef ────── Chef ───────────── you: the Move action, a Rigidbody, the Animator
            Carrier ────────── hands: a pile in front of the chest
            CameraFollow ───── follows you, a moment late
            ChefLevels ─────── your tray and your flip-flops

Items ───── ItemKind ───────── fruit, cup, empty cup, cash
            ItemInfo ───────── one kind of item, in an asset
            Item ───────────── one orange, cup or note; it hops
            ItemPile ───────── a Stack of items, in rows and layers
            ItemPool ───────── where items come from and go back to

Bar ─────── BarInfo ────────── one bar's numbers, in an asset
            JuiceStand ─────── one bar: its price, speed, stations and helpers
            Station ────────── abstract: a place you stand to trade
            FruitCrate ─────── fills by itself; gives fruit
            Juicer ─────────── takes fruit, makes cups
            Counter ────────── takes cups; serves its Queue of customers
            CashPile ───────── the notes waiting for you
            Table, Seating ─── seats, tips, empty cups
            Bin ────────────── takes what you throw away
            BuildSpot ──────── pay, and something appears
            BuildList ──────── every spot, in order
            ShopMat ────────── opens a panel
            ProgressRing ───── the ring over a machine
            PriceTag ───────── the sign on a counter
            Billboard ──────── turns a sign to the camera

People ──── Walker ─────────── walks a Queue of points
            WalkPath ───────── a path's points, for the kart
            Customer ───────── a visit, as a state machine
            CustomerState ──── where a customer is in it
            CustomerSpawner ── sends them, from a pool
            OrderBubble ────── what they want
            Helper ─────────── a runner or a cashier
            HelperKind ─────── which

Income ──── IIncomeSource ──── anything that earns by itself
            IncomeSources ──── all of them, in one list
            JuiceKart ──────── drives the road, sells each lap
            IncomeBoost ────── every sale ×2, for a while

Upgrades ── Upgrade ────────── abstract: an id, a name, a price, a bar
            PriceUpgrade ───── a better recipe
            SpeedUpgrade ───── a faster machine
            HireUpgrade ────── a helper
            UpgradeLibrary ─── every upgrade, found by id
            Upgrades ───────── which are bought, and buying one

Business ── Wallet ─────────── the money
            NumberFormat ───── 1.25K, 12.5M; 1 h 05 min

UI ──────── MoneyText ──────── the money, counting up
            UpgradeRow ─────── one upgrade in a shop
            UpgradesPanel ──── the shop (the intern's first, then yours)
            LevelRow ───────── a row with levels
            OfficeLevels ───── your tray, flip-flops and the kart

Flow ────── BeachInfo ──────── one beach, in an asset
            BeachGame ──────── loads the save, autosaves
            NewBeach ───────── the Pier: sail on
            Session ────────── what one scene leaves the next (static)
            Report ─────────── Welcome back, or Beach complete
            SceneFader ─────── fades between scenes
            SafeArea ───────── keeps the screen clear of a phone's notch
            TitleScreen ────── the Title's buttons
            ReportScreen ───── the Report scene
            AwayEarnings ───── what you earned while you were away
            PanelSwitcher ──── one panel open at a time

Save ────── SaveData ───────── what the save file holds
            SaveSystem ─────── reads and writes it, safely
            GameSettings ───── PlayerPrefs, with named keys
            SettingsPanel ──── volumes, keys, Delete Save
            RebindRow ──────── choose a new key

Input ───── Controls ───────── the action maps, and Escape

Trophies ── GameStats ──────── the numbers Sam's achievements count
            ToastMessage ───── one message waiting to be shown
            Toast ──────────── slides down, waits, slides back up
            ToastQueue ─────── the messages, one at a time
            TrophiesPanel ──── every trophy, won or not
            TrophyRow ──────── one of them

Juice ───── FloatingNumber ─── a "+$" that rises and fades
            NumberPool ─────── floating numbers, reused
            SaleNumbers ────── one over a counter at every sale
            PunchOnClick ───── every button bounces
            SoundPlayer ────── squeezes, coins, jingles
            MusicPlayer ────── the scene's music

Ads ─────── IAdService ─────── show an ad, whoever shows it
            PretendAds ─────── a countdown where an ad would be
            LevelPlayAds ───── Unity LevelPlay's ads
            AdServiceProvider ─ picks one
            BoostOffer ─────── the TV button: ×2 for 3 minutes
```

Sam's module brings five more, in their own folder: `AchievementTracker`, `Achievement`,
`IStatSource`, `Stat`, and a `Toast` of Sam's own.

## One-time setup

- **Unity 6** (6000.6), with a new project made from the **Universal 3D** template, as for
  Pocket Karts. Call it `Juice Tycoon`. The **Input System** package comes with it, and so
  does the UI (uGUI) with TextMeshPro.
- **Git and GitHub Desktop.** Install **GitHub Desktop** from desktop.github.com (it
  brings Git with it), and make a free account on github.com. Chapter 1 sets up the
  rest.
- **WebGL and PC builds** (Chapter 23): in the **Unity Hub**, **Installs**, the cog next
  to your Unity 6 → **Add modules**, tick **Web Build Support**, and the build support for
  your computer (**Mac Build Support** or **Windows Build Support**) if it isn't there.
- **A free Unity account** (Chapter 18), to get DOTween from the Asset Store. You already
  sign in to the Unity Hub with one.
- **Art and sound:** your trainer shares two folders, `Art` and `Audio`, holding every
  file this book uses, each pack's licence beside them. `CREDITS.md` names them all:
  - **Ultimate Animated Character Pack** by Quaternius: the chef, the customers and the
    helpers, with their walks, runs, carrying, sitting and standing up.
  - **Ultimate Food Pack** by Quaternius: the oranges, apples, bananas, coconuts and the
    cup.
  - **Restaurant Bits** by Kay Lousberg (KayKit): the crates, counters, cabinets, jugs,
    tables and stools.
  - **Nature Props** and **Racing Kart** by Fertile Soil Productions: the palms, rocks and
    shells, and the Juice Kart.
  - **Fluent Emoji** by Microsoft: the pictures on buttons, trophies and messages.
  - **Free Game GUI** by pzUH: the candy buttons, the panels, the ribbons.
  - **Lilita One**, a font by Juan Montoreano, under the SIL Open Font License.
  - **Ninja Adventure** by Pixel-Boy and AAA: the sounds and the music.

  Two folders were made for this book: `Art/Ground` (the dashed square of a build spot,
  the mats, a ring and a speech bubble) and `Art/Icons` (a picture of each item, for the
  bubbles and the shop).

  Everything is CC0, free to use for anything, except two. The emoji are under the MIT
  License, which asks one thing: its licence file goes with them
  (`Art/Licences/FluentEmoji-LICENSE.txt`). The font's licence lets you use and share it,
  as long as its licence, `Art/Fonts/OFL.txt`, goes with it.

# Part 1 — A Project and a Beach

## C# 1 — Git with Unity

**Goal:** you can put a Unity project under Git with GitHub Desktop, keep the right files
in it, commit your work in small steps, try an idea on a branch and merge it, and undo a
change that went wrong; and you can say what version control is for (Associate: Assets —
primary purposes of version control).

### Idea — why version control

**Version control** keeps every step of a project that you choose to save. It does four
jobs, which the exam calls its primary purposes:

| Job | What it gives you | Without it |
| --- | --- | --- |
| **History** | every saved step, with who made it, when, and a message saying why | folders called `Game final 2 (really final)` |
| **Rollback** | undo a bad change, to one file or a whole step, even weeks later | fixing it from memory, or starting again |
| **Working together** | each person works on their own copy, and the tool merges their work | emailing files, and overwriting each other's |
| **Backup** | the project and all its history, kept off your computer | a lost laptop takes the game with it |

**Git** is the system most teams use, and **GitHub** keeps Git projects online. This
course uses both through **GitHub Desktop**, a free app that does Git's work with buttons.

### Idea — the words

| Word | Means |
| --- | --- |
| **repository** (repo) | a project folder that Git looks after, with its whole history inside, in a hidden `.git` folder |
| **commit** | one saved step: the changes you picked, with a message (and the verb: to save one) |
| **history** | the list of commits, newest first |
| **diff** | what changed between two versions of a file: lines taken out (red) and lines put in (green) |
| **branch** | a line of commits of its own, for trying something without touching the rest; the first is `main` |
| **merge** | bring one branch's commits into another |
| **remote** | a copy of the repository somewhere else, usually on GitHub; Git calls it `origin` |
| **push** | send your new commits to the remote |
| **pull** | fetch the remote's new commits and merge them into yours |
| **clone** | download a whole repository, history and all, onto another computer |
| **conflict** | two changes to the same lines that Git can't merge by itself, so a person must choose |

### Idea — what stays out of Git

Much of a Unity project's folder is made by Unity from your work, and can be made again
at any time. It's big, changes constantly and differs between computers, so it stays out:

| Folder | Holds | Why it stays out |
| --- | --- | --- |
| `Library/` | imported assets, compiled scripts, caches | Unity rebuilds it from `Assets/` and `Packages/`; it's often gigabytes |
| `Temp/` | files Unity needs while it's open | gone when Unity closes |
| `Logs/` | the Editor's logs | of no use to anyone else |
| `obj/` | your code editor's build files | the code editor makes them again |
| `UserSettings/` | your own window layout and Editor choices | personal: a teammate wants their own |
| `Build/`, `Builds/` | finished games | made from the project, and big: share builds on itch.io instead |

What goes in: `Assets/` (with every `.meta` file), `Packages/` and `ProjectSettings/`.

A **`.gitignore`** file, in the repository's top folder, lists what Git should leave out.
Don't write your own: GitHub keeps one for Unity, and GitHub Desktop adds it when you
choose **Unity** as the **Git ignore**. Among its lines:

```
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/
```

`[Ll]` means "`L` or `l`", and the `/` at the start means "in the top folder only".

> **Watch out:** make the repository on the project's own folder, the one with `Assets/`
> in it. On a folder above it, the `/` lines match nothing, and Git tries to take in
> `Library/` and all its gigabytes.

### Idea — .meta files

Every file and folder in `Assets/` has a twin with `.meta` on the end: `Coin.prefab` and
`Coin.prefab.meta`, `Coin.png` and `Coin.png.meta`. Unity makes them, and they're text:

```
fileFormatVersion: 2
guid: 7c2e9f04a1b84d55b3e6f0c8d2a17e93
TextureImporter:
  …
  maxTextureSize: 2048
  spritePixelsToUnits: 100
```

It holds the asset's **import settings** (for a picture, everything in its Inspector) and
its **GUID**, a 32-character ID that never changes. Unity references assets by GUID, not
by name: a scene doesn't remember "the coin in `Prefabs/Coin.prefab`" but `7c2e9f04…`.
That's why you can rename and move assets in Unity freely.

So a `.meta` file must always travel with its asset: commit, move and delete them
together. Lose one, and Unity makes a new `.meta` with a new GUID: everything that pointed
to the old one points at nothing, so fields show the asset as missing, a scene shows a
missing prefab, and the import settings are back to their defaults.

> **Watch out:** move and rename assets **in Unity's Project window**, which moves the
> `.meta` file too. Move `Coin.png` in Finder or File Explorer without its `.meta`, and
> Unity sees a new picture with a new GUID: every reference to the old one is missing.

### Idea — two settings that make Git work

Two settings let Git read your project. Unity 6 sets both: check them on the first day.

| Where | Setting | Must be |
| --- | --- | --- |
| **Edit → Project Settings → Editor**, under **Asset Serialization** | **Mode** | **Force Text** |
| **Edit → Project Settings → Version Control** | **Mode** | **Visible Meta Files** |

- **Force Text** saves scenes, prefabs, materials and your other assets as text, in a
  format called **YAML**, instead of in binary. Git can show a text file's diff line by
  line, and merge two people's changes to different parts of it.
- **Visible Meta Files** keeps the `.meta` files as ordinary files next to their assets,
  where Git can see them.

So a scene or a prefab is text you can read. Change a bar's colour from white to red,
save, and its diff in GitHub Desktop shows exactly that:

```
   m_Material: {fileID: 0}
-  m_Color: {r: 1, g: 1, b: 1, a: 1}
+  m_Color: {r: 0.85, g: 0.2, b: 0.2, a: 1}
   m_RaycastTarget: 1
```

Read the diff before you commit: dozens of changed lines when you only moved one object
mean something else changed too.

### Idea — GitHub Desktop, every day

1. **Make the repository.** **File → Add local repository**, and choose your project's
   folder. GitHub Desktop says it isn't a Git repository yet, and offers to create one
   there: do that, choose **Unity** as the **Git ignore**, and create it.
2. **See what changed.** The **Changes** tab lists every file that's different since the
   last commit. Click one to see its diff. Only ticked files go into the commit.
3. **Commit.** Type a **Summary** line at the bottom left (a description under it is
   optional), and click **Commit to main**.
4. **Look back.** The **History** tab lists the commits. Click one to see what it changed.
5. **Put it online.** **Publish repository**, on the toolbar, sends it all to GitHub
   (leave **Keep this code private** ticked). After that, the same button says **Push
   origin** when GitHub lacks your commits, and **Pull origin** when it has new ones.

### Idea — branches and merges

A branch lets you try something (a drift button, a new kind of card, a second juice
recipe) without risking the game that works: `main` stays as it was.

1. **Current Branch → New Branch**, name it `drift-boost`, and create it. Your next
   commits go on `drift-boost`, and `main` doesn't change.
2. To switch, save and commit first, then pick a branch from **Current Branch**. Git swaps
   the files in the folder, and Unity reloads what changed.
3. When the idea works, switch to `main`, then **Branch → Merge into current branch**,
   choose `drift-boost`, and merge. `main` now has its commits too.
4. If the idea didn't work, switch back to `main` and leave the branch, or delete it.

### Idea — going back

| To undo… | In GitHub Desktop | What happens |
| --- | --- | --- |
| a change you haven't committed | **Changes**: right-click the file → **Discard changes** | the file goes back to how it was at the last commit |
| a whole commit | **History**: right-click the commit → **Revert changes in commit** | a **new** commit that does the opposite; the bad one stays in the history |

A revert never rewrites the history, so it's safe even after you've pushed: your
teammates just pull one more commit.

### Idea — the same on the command line

The exam, other teams and most tutorials use Git's own commands. Each button has one:

| GitHub Desktop | Command line |
| --- | --- |
| make a repository | `git init` |
| the **Changes** tab | `git status` |
| tick a file for the commit | `git add Assets/Scripts/Coin.cs` (or `git add .` for everything) |
| **Commit to main** | `git commit -m "Add the coin pickup"` |
| the **History** tab | `git log` |
| a file's diff | `git diff` |
| **Current Branch → New Branch** | `git switch -c drift-boost` |
| switch to a branch | `git switch main` |
| **Branch → Merge into current branch** | `git merge drift-boost` |
| **Discard changes** | `git restore Assets/Scenes/Race.unity` |
| **Revert changes in commit** | `git revert a1b2c3d` (the commit's ID, from `git log`) |
| **Push origin**, **Pull origin** | `git push`, `git pull` |
| copy a repository from GitHub | `git clone https://github.com/you/your-game.git` |

### Idea — good commit messages

A commit message is for whoever reads the history later, which is usually you.

- **Imperative**, like an instruction: *Add the coin pickup*, not *Added coins* or
  *Adding coins*. It finishes the sentence "If you apply this commit, it will…".
- **One change per commit**, summed up in about 50 characters: then a revert takes out
  exactly one change.
- **Say what changed**, never just "fix", "stuff" or "update".

| Weak | Better |
| --- | --- |
| `fixed stuff` | `Stop the kart sliding after a respawn` |
| `update` | `Raise the lemonade stand's price to 3 coins` |
| `cards, menu, sounds and the bug` | four commits, one for each |

### Idea — conflicts, and why scenes are hard

When two branches change **different** lines, Git merges them by itself. When they change
the **same** lines in different ways, Git stops with a **conflict** and marks the file:

```
<<<<<<< HEAD
    [SerializeField] float topSpeed = 22f;
=======
    [SerializeField] float topSpeed = 18f;
>>>>>>> drift-boost
```

In a script that's easy: keep the right line, delete the marker lines, and commit. In a
**scene or a prefab** it isn't: its YAML is thousands of lines of IDs that point at each
other, and one wrong choice breaks it in ways you only see when you open it. So teams
avoid scene conflicts rather than fix them:

- **One person per scene** at a time: say in the team chat who's working in which scene.
- **Build in prefabs**, so two people can work on two prefabs that sit in the same scene.
- **Commit small, push often, pull before you start**: nobody works on an old copy long.

If a scene conflicts anyway, keep one whole version of the file, and make the other
person's change again by hand.

### Idea — big files, and Unity Version Control

Git keeps every version of every file in every copy. A 200 MB video changed five times is
a gigabyte in every clone, and GitHub refuses any single file over 100 MB.

**Git LFS** (Large File Storage) keeps big files (videos, recordings, 3D models, layered
`.psd` art) on a separate server, and only a small pointer to each in Git. It's worth it
when big binary files change often, as an art team's do. Small sprites and sounds don't
need it.

**Unity Version Control** (once called Plastic SCM) is Unity's own system, built into the
Editor. It does the same jobs as Git, handles big binary files well, and can **lock** a
file so that two people can't change one scene at once. The ideas here apply to both.

### Do it

1. Make a repository on your project's folder with the **Unity** `.gitignore`. Check that
   nothing from `Library/` is in **Changes**, commit (*Create the project*), and publish.
2. Check **Force Text** and **Visible Meta Files**. Then open a prefab, change one
   colour, save, and find the change in its diff. Discard it.
3. With everything committed, move a sprite a prefab uses in Finder or File Explorer,
   without its `.meta`. What happens to the prefab? Discard every change, and look again.
4. Make a branch, `experiment`, commit two small changes on it, and switch back to
   `main`: watch them disappear in Unity. Then merge `experiment` into `main`.
5. Revert one of those two commits from the **History** tab, and read the new commit's
   diff. What does it do?

### Challenge

Make a conflict on purpose: change one line of a script on a new branch, and the same
line another way on `main`, committing each; then merge. Fix it in your code editor and
commit. Then explain in two sentences why a scene conflict is worse, and how to avoid one.

## Chapter 1 — A Project Under Git

**Goal:** a new Unity project that lives in a Git repository, published to your GitHub
account, with the studio's style guide beside it; the people, the food, the bar and the
palms imported at sizes that fit together; the GUI's two big sheets cut into the named
pieces the game uses; and the beach: sand, sea, a boardwalk and palms, seen from above by a
camera made for a phone.

### Idea — a project the whole team can trust

Sam's first rule at Lantern Hill Games: *nothing exists until it's committed.* From today
your project is a **Git repository**. Every time a piece of the game works, you
**commit**: a saved step in the project's history, with a line saying what changed. If
tomorrow's change breaks something, you can look at exactly what you changed, and undo it.
C# 1 explained the words; this chapter does it.

A Unity project folder holds more than your work. `Library`, `Temp` and `Logs` are
Unity's own caches: Unity rebuilds them from your files whenever they're missing, and
they're huge. They must stay **out** of Git. A file called `.gitignore` lists what Git
should ignore, and GitHub keeps one made for Unity projects.

| Folder or file | In Git? | Why |
| --- | --- | --- |
| `Assets/` (with every `.meta` file) | **yes** | your work: scripts, scenes, prefabs, models |
| `Packages/manifest.json`, `packages-lock.json` | **yes** | which packages the project uses |
| `ProjectSettings/` | **yes** | the project's settings |
| `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` | no | Unity rebuilds them |
| `Builds/` | no | anyone can make a build from the project |

The rest of the chapter is about **models**: 3D files made by artists in other programs.
Each pack was made at its own size, so the chef might be twice as tall as a crate, and a
cup as big as a person. Unity's **Import Settings** fix that once, in the model's `.meta`
file, so every copy of it in every scene comes in at the right size. You'll also meet a
model's **rig** (its skeleton) and its **clips** (the animations it brings with it).

### Do it — the repository

1. In the **Unity Hub**, **New project**, choose Unity 6 and the **Universal 3D**
   template, call it `Juice Tycoon`, and **Create project**. When Unity opens, close it
   again for now.
2. Open **GitHub Desktop** and sign in with your GitHub account. **File → Add Local
   Repository…**, **Choose…** the `Juice Tycoon` folder, and click **Add Repository**.
   GitHub Desktop says the folder isn't a Git repository yet and offers to **create a
   repository** there: click it.
3. In the **Create a New Repository** window, leave the **Name** and **Local Path** as
   they are, set **Git Ignore** to **Unity**, and click **Create Repository**. GitHub
   Desktop makes the repository, with Unity's `.gitignore`, and a first commit.
4. Look at the **Changes** tab. If it lists files, write *Add the empty project* in the
   **Summary** box and click **Commit to main**. Then look at the **History** tab: your
   project's first commit. There's no `Library` folder in it: the `.gitignore` works.
5. Click **Publish repository**, keep **Keep this code private** ticked, and publish. Your
   project now has a copy on GitHub, safe if your computer isn't.
6. Open the project in Unity again. **Edit → Project Settings → Editor**: under **Asset
   Serialization**, **Mode** is **Force Text**. **Project Settings → Version Control**:
   **Mode** is **Visible Meta Files**. Both are Unity's defaults, and Git needs both: scenes
   and prefabs saved as text, so a change can be read; and a `.meta` file beside every
   asset, so Git keeps it.

### Do it — the style guide

7. Your trainer shares `STYLE_GUIDE.md`, Sam's style guide. If you've done Arcane Duel or
   Pocket Karts, it's the same file: one studio, one guide, and its examples come from
   Arcane Duel. Put it in the project folder, next to `Assets` (not inside it: it's for
   people, not for Unity). Open it and read it: it's two pages. Most of it is Level 3's
   naming conventions, written down as a team's rules, and a few new ones you'll meet as
   the book goes on:

| Sam's rule | In Juice Tycoon |
| --- | --- |
| Interfaces start with `I` and name a capability | `IIncomeSource` |
| C# events say what happened, in the past tense, without `On` | `CupSold`, `MoneyChanged` |
| Methods that an event or Unity calls start with `On` | `OnCustomerServed` |
| Fields set in the Inspector are `[SerializeField]` and private: never `public` | `[SerializeField] int price = 5;` |
| A number that means something gets a name | `const double MaxSeconds = 2 * 60 * 60;` |
| One class per file, named after it | `JuiceStand.cs` |
| Subscribe in `OnEnable`, unsubscribe in `OnDisable` | |
| Not allowed: `var`, `GameObject.Find`, `FindObjectOfType`, `public` fields | |

8. In GitHub Desktop, the Changes tab shows `STYLE_GUIDE.md`. Commit it: *Add the studio's
   style guide*.

### Do it — the art

9. Your trainer shares two folders, `Art` and `Audio`. Drag both into Unity's **Project**
   window, into `Assets`, and give Unity a minute: there are thirty-odd models to import.
10. **The people.** Open `Art/Characters`: twelve people from the same pack, all on the
    same skeleton. Select all twelve (click the first, **Shift**-click the last), and in
    the Inspector:
    - **Model** tab: **Scale Factor** `0.55`. The pack draws people 3.3 units tall; at
      0.55 they're 1.8 m, next to a 1 m counter. **Apply**.
    - **Rig** tab: **Animation Type** `Generic`, **Avatar Definition** `Create From This
      Model`. **Apply**. (Gate Guard's skeletons were **Humanoid**, so one set of clips
      could play on bodies of every shape. These people already share one skeleton, bone
      for bone: Generic is enough, and Unity can't map this skeleton to a Humanoid by
      itself anyway.)
    - **Animation** tab: untick **Import Animation**, **Apply**. Every file brings the same
      17 clips; one copy is plenty.
11. **The chef's clips.** Select `Chef_Male` alone. **Animation** tab: tick **Import
    Animation** again, **Apply**. The **Clips** list shows 17 clips, each called
    `CharacterArmature|` and a name. Keep seven, rename them, and set **Loop Time** where
    the table says (select a clip, change it below the list, then the next):

| Clip in the file | Rename to | Loop Time |
| --- | --- | --- |
| `CharacterArmature\|Idle` | `Idle` | ticked |
| `CharacterArmature\|Walk` | `Walk` | ticked |
| `CharacterArmature\|Run` | `Run` | ticked |
| `CharacterArmature\|Walk_Carry` | `Walk_Carry` | ticked |
| `CharacterArmature\|Run_Carry` | `Run_Carry` | ticked |
| `CharacterArmature\|SitDown` | `SitDown` | |
| `CharacterArmature\|StandUp` | `StandUp` | |

Remove the other ten from the list (select one, the **−** under the list), and
**Apply**. Open `Chef_Male` in the Project window: the seven clips are inside it. The
two `_Carry` clips walk and run with the arms held out in front: the arms of someone
carrying a stack of cups.

12. **The food.** Open `Art/Food`. One at a time, set each model's **Model → Scale Factor**,
    and on its **Rig** tab **Animation Type** `None`, then **Apply**:

| Model | Scale Factor | Size in the game |
| --- | --- | --- |
| `Orange` | `0.4` | 0.3 m: a big, easy-to-see orange |
| `Apple` | `0.37` | 0.3 m |
| `Banana` | `0.27` | 0.35 m long |
| `Coconut`, `Coconut_Half` | `0.4` | 0.3 m |
| `Soda` | `0.22` | a cup 0.42 m tall, with a lid and a straw |

Everything you carry is a little bigger than life: on a phone, from above, a real-sized
orange would be a dot.

13. **The bar.** Open `Art/Bar`: crates, counters, cabinets, jars, tables, stools, a chair
    and a menu board, as `.obj` files, and one picture, `restaurantbits_texture`. The pack
    paints everything from that one picture of colour patches, but its `.obj` files only
    name a material, `restaurant`, without the picture. Select all eighteen models
    (search `t:Model` in the folder), and on the **Materials** tab set **Location** to
    `Use External Materials (Legacy)`, **Apply**. Unity makes one material for all of them,
    `Art/Bar/Materials/restaurant`. Select it, and drag `restaurantbits_texture` into its
    **Base Map**: every bar piece gets its colours. Then set **Smoothness** `0.15`: wood
    and paint, not glass.
14. **The scenery.** `Art/Nature` holds Pocket Karts' palms, rocks, shells, starfish and
    bushes, with the small pictures of their colours in `Art/Nature/textures`. Unity made
    their materials when it imported them: nothing to do. `Art/Kart/kart` is Pocket Karts'
    kart: **Scale Factor** `0.45`, **Apply** (it's 4 units long; at 0.45, 1.8 m).
15. **The flat pictures.** In a 3D project a picture comes in as a texture for models. The
    game's UI needs sprites. Select every picture in `Art/Emoji`, `Art/Ground` and
    `Art/Icons` (one folder at a time), and set **Texture Type** `Sprite (2D and UI)`,
    **Apply**.

### Do it — the font

16. Select `Art/Fonts/LilitaOne-Regular`, then **Assets → Create → TextMeshPro → Font
    Asset → SDF**. Unity asks to import the **TMP Essentials** the first time: **Import**,
    then make the font asset again. `LilitaOne-Regular SDF` is the game's one font: round
    and bold, like the buttons.
17. **The font's shadow.** Big white words on a candy button need an edge to stand out.
    Open `LilitaOne-Regular SDF` in the Project window (the arrow beside it) and select the
    material inside. In the Inspector, open the material's **⋮** menu (top right) and
    choose **Create Material Preset**: a copy, next to the font asset. Rename it
    `LilitaOne-Regular SDF Shadow` (a preset's name must start with its font asset's, or
    TextMeshPro won't list it). Select it:
    - **Face**: **Dilate** `0.1`, a little bolder.
    - **Outline**: tick it. **Color** `#6B3A12` (dark brown), **Thickness** `0.16`.
    - **Underlay**: tick it. **Color** `#6B3A12` with **A** 179, **Offset Y** `-0.8`,
      **Dilate** `0.2`, **Softness** `0.1`. A soft shadow under the letters.

    A text using the font can now choose this material in its **Material Preset**: white
    words with a brown edge and a shadow, the look of every button in the game.

### Do it — cutting the GUI sheets

18. Select `Art/GUI/Buttons`. It's one picture, 2399 × 1822, holding every button and icon
    of the pack: candy buttons in four colours, a grid of square icon buttons, and more.
    In the Inspector, **Texture Type** `Sprite (2D and UI)`, **Sprite Mode** `Multiple`,
    **Apply**, then **Open Sprite Editor**.
19. In the Sprite Editor, open the **Slice** menu at the top. **Type** `Automatic`,
    **Pivot** `Center`, **Method** `Delete Existing`, and click **Slice**. Unity finds
    every piece on the sheet by its see-through edges: 185 boxes, named `Buttons_0`,
    `Buttons_1`… Click one: the **Sprite** box, bottom right, shows its **Name** and
    **Position** (**X** and **Y**, from the sheet's bottom-left corner, then **W** and
    **H**).
20. The game uses 13 of them. Click each one below (find it by the picture, then check
    its X and Y), and type its new **Name**. For the four candy buttons, set **Border** too:
    **L** 40, **T** 34, **R** 40, **B** 34.

| Name | X, Y | What it is | Border |
| --- | --- | --- | --- |
| `Button Blue` | 103, 1448 | the blue candy button, second row from the top | 40, 34, 40, 34 |
| `Button Green` | 377, 1448 | the green one beside it | 40, 34, 40, 34 |
| `Button Red` | 650, 1448 | the red one | 40, 34, 40, 34 |
| `Button Grey` | 924, 1448 | the grey one: a button you can't press | 40, 34, 40, 34 |
| `Square Blue` | 328, 1307 | a plain blue square | |
| `Square Green` | 455, 1307 | a plain green square | |
| `Icon Home` | 684, 1124 | a house | |
| `Icon Cart` | 684, 470 | a shopping cart | |
| `Icon Person` | 684, 862 | a person | |
| `Icon Trophy` | 117, 470 | a trophy | |
| `Icon Gear` | 1855, 1516 | a cog | |
| `Icon Close` | 2100, 1385 | a red square with a white cross | |
| `Icon Tick` | 1977, 1255 | a green square with a white tick | |

21. Click **Apply** (top right), and close the Sprite Editor. Open `Buttons` in the
    Project window: 185 sprites, 13 of them with names you can read. The others can stay;
    they cost nothing until something uses them.
22. Do the same for `Art/GUI/Windows` (2000 × 2500: panels, ribbons, bars): **Texture
    Type** `Sprite (2D and UI)`, **Sprite Mode** `Multiple`, **Apply**, **Open Sprite
    Editor**, **Slice**, **Automatic**. Name three pieces, and **Apply**:

| Name | X, Y | What it is | Border |
| --- | --- | --- | --- |
| `Panel` | 824, 660 | a cream panel with a brown edge | 40, 40, 40, 40 |
| `Panel Light` | 1161, 660 | the same, paler | 40, 40, 40, 40 |
| `Ribbon` | 822, 1070 | a red ribbon | 90, 0, 90, 0 |

23. **Why the borders:** a button or a panel gets stretched to many sizes. A **9-slice
    border** cuts the sprite into nine parts: the four corners never stretch, the edges
    stretch one way, and the middle both ways. A 290-wide button and a 600-wide one keep
    the same round corners. The ribbon only stretches sideways, so its ends keep their
    folds.

### Do it — the beach

24. Make the folders the game will need, in `Assets`: `Scripts` (with fourteen folders in
    it: `Chef`, `Items`, `Bar`, `People`, `Income`, `Upgrades`, `Business`, `UI`, `Flow`,
    `Save`, `Input`, `Trophies`, `Juice` and `Ads`), `Prefabs` (with `Items`, `People` and
    `UI` folders in it), `Data`, `Animation` and `Input`, and `Art/Materials`. In
    `Scenes`, rename `SampleScene` to `Beach` and open it.
25. **Materials.** In `Art/Materials`, **Create → Material** five times. Each is a URP
    **Lit** material: set its **Base Map** colour and its **Smoothness**:

| Material | Base Map colour | Smoothness |
| --- | --- | --- |
| `Sand` | `#EBCB8B` | 0.15 |
| `Wet Sand` | `#D8B57A` | 0.15 |
| `Sea` | `#2FB0D0` | 0.65 |
| `Wood` | `#B98A5B` | 0.15 |
| `Wood Dark` | `#8F653E` | 0.15 |

26. **The ground.** The beach runs from the boardwalk in the south (−z) to the sea in the
    north (+z): the camera looks north, so the sea is at the top of the screen.
    - **GameObject → 3D Object → Plane**, `Sand`: **Position** (0, 0, −4.7), **Scale**
      (4, 1, 2.66), the `Sand` material. A Plane is 10 × 10 units: this one is 40 wide and
      26.6 deep, from z = −18 to the shoreline at z = 8.6. Remove its **Mesh Collider**:
      nothing stands on the sand by physics (Chapter 2 says why).
    - A second Plane, `Sea`: **Position** (0, −0.05, 28.6), **Scale** (8, 1, 4), the `Sea`
      material, no collider. A touch lower than the sand, so the shoreline is crisp.
    - **3D Object → Cube**, `Wet Sand`: **Position** (0, −0.02, 8.2), **Scale** (40, 0.05,
      0.8), `Wet Sand`, no collider: the dark strip the waves keep wet.
27. **The boardwalk.** An empty GameObject, `Scenery`. Inside it, a Cube, `Plank`:
    **Position** (−14, 0.05, −11.4), **Scale** (1.94, 0.1, 2.2), `Wood`, no collider.
    Duplicate it (**Ctrl+D**, **Cmd+D** on a Mac) fourteen times, and set each copy's **X**
    2 more than the last: −12, −10, … up to 14. Give every other plank `Wood Dark`. The
    customers will arrive along it.
28. **Palms, rocks and shells**, from `Art/Nature`, into `Scenery`. The palms are 2.7 m
    tall; at a scale of 2 or so they tower over the bar, as palms should:

| Model | Position | Rotation Y | Scale |
| --- | --- | --- | --- |
| `Tree_Palm_1` | (−9.6, 0, 6.8) | 0 | 2.2 |
| `Tree_Palm_2` | (9.8, 0, 4.2) | 90 | 2.4 |
| `Tree_Palm_3` | (−9.8, 0, −2.5) | 200 | 2 |
| `Tree_Palm_1` | (9.9, 0, −5.5) | 140 | 2.1 |
| `Tree_Palm_2` | (−10, 0, −13.6) | 40 | 2.2 |
| `Rock_1` | (−9.4, 0, 2.4) | 30 | 1.2 |
| `Rock_2` | (9.4, 0, 8.2) | 80 | 1 |
| `Rock_3` | (9.6, 0, −9.8) | 0 | 0.9 |
| `Shell_Salmon` | (−7.5, 0, −3.6) | 20 | 2 |
| `Starfish_Salmon` | (0.4, 0, 7.6) | 60 | 2 |
| `Shell_Salmon` | (7.6, 0, 1.6) | 140 | 2 |
| `Bush_1` | (−9.2, 0, −8) | 0 | 1 |
| `Bush_2` | (9.3, 0, −12.6) | 0 | 1 |

29. **The sun.** Select the scene's `Directional Light`, rename it `Sun`: **Rotation**
    (52, −35, 0), **Intensity** `1.15`, **Shadow Type** `Soft Shadows`. **Window →
    Rendering → Lighting**, the **Environment** tab: **Environment Lighting Source**
    `Gradient`, **Sky** `#CDE9F5`, **Equator** `#E8D9B8`, **Ground** `#B59A6E` (a bright
    sky, warm sand bouncing light back up). Tick **Fog**: **Color** `#9FD6EC`, **Mode**
    `Linear`, **Start** `30`, **End** `60`: the far sea fades into the sky.
30. **The camera.** Select `Main Camera`: **Position** (0, 14, −10), **Rotation** (55, 0,
    0), **Field of View** `60`. Under **Environment**, **Background Type** `Solid Color`,
    **Background** `#9FD6EC`, the sky's colour. It looks down at the beach from above and
    behind, as these games do: steep enough to see where you're going, low enough to see
    the people.
31. **A phone-shaped Game view.** In the **Game** view, open the size menu (it says **Free
    Aspect**), click **+**, and add a **Fixed Resolution** called `Portrait`, **1080 ×
    1920**. Choose it. The game is played upright, like a phone.

### Test it

- Press **Play**. The beach fills the screen: sand, the wet strip, the sea fading into the
  sky, the boardwalk across the bottom, palms at the edges throwing soft shadows.
- Drag `Art/Characters/Chef_Male` into the scene, beside the boardwalk. Next to a plank
  he's the right size: a person, not a giant. Click the arrow beside him in the Hierarchy:
  his `CharacterArmature` (the skeleton) and his body parts. Drag `Art/Food/Soda` and
  `Art/Bar/crate` beside him: a cup the size of his head, a crate up to his knees. Delete
  all three.
- In GitHub Desktop, the Changes tab lists every new model **and a `.meta` file beside
  it**. Click `Chef_Male.fbx.meta`: it's text, and among its lines are your settings
  (`globalScale: 0.55`, `animationType: 2` for Generic, your clips' names). One line near
  the top says `guid:` followed by 32 letters and numbers. That **GUID** is how Unity
  knows the model: a scene or a prefab that uses it stores its GUID, not its name.

> **Watch out:** move or rename assets **in Unity's Project window**, never in Finder or
> Explorer. Unity moves the `.meta` file with the asset. Move one outside Unity, and Unity
> sees a new file, gives it a new `.meta` with a new GUID, and everything that used the old
> one loses it: a missing model here, a missing script there. Lose `Chef_Male.fbx.meta`,
> and your scale, your rig and your seven clips go with it.

### Commit

*Add the art, sounds and font, and the beach.* Then **Push origin**, so GitHub has it too.

> **Note:** big binary files (models, pictures, sounds) make a Git repository grow, since
> Git keeps every version of every file. Big teams use **Git LFS** (Large File Storage),
> which keeps them outside the history. This game's art is about 35 MB, most of it the
> twelve people, which Git handles well, so this book doesn't need it.

### Challenge

Find the pink progress bar on `Windows`, name it `Bar Pink`, and give it a border that
lets it stretch sideways only, like the ribbon. Then put a rock or two of your own on the
beach, and in the **History** tab, find the commit that added `Chef_Male.fbx.meta`.

## C# 2 — Events and Delegates

**Goal:** you can let a script announce what happened without knowing who listens,
subscribe and unsubscribe safely, write a short lambda, and choose between a C# event and
a UnityEvent (Associate: UI — respond to user input with the UnityEvent system;
Associate: Programming — determine code for a specified interaction or logic).

### Idea — the problem: a script that knows everyone

When the player is hurt, the health bar shrinks, a sound plays, and at 0 the game over
screen shows. The first way most people write it:

```csharp
public void TakeDamage(int amount)
{
    health -= amount;
    healthBar.Show(health);                 // it must know the health bar,
    hurtSound.Play();                       // the sound,
    if (health <= 0)
    {
        gameOverScreen.SetActive(true);     // and the game over screen
    }
    // … and one more line for every new thing that cares
}
```

Now it can't work without the other three: in a test scene with no health bar, it stops
at a `NullReferenceException`, and a camera shake on a hit means editing it again. Turn
it round: the health script **announces** "my health changed", and whatever cares
**listens**. It never needs to know who.

### Idea — a delegate: a variable that holds a method

To announce, C# keeps a list of methods to call. A **delegate** is a variable whose value
is a method. (You've passed one before: `AddListener(OnVolumeChanged)`, no brackets.)

```csharp
[SerializeField] int score = 42;

void Start()
{
    Action<int> show = ShowScore;   // the method itself: no brackets, so not called yet
    show(score);                    // called now, through the variable
}

void ShowScore(int value)
{
    Debug.Log($"Score: {value}");
}
```

```
Score: 42
```

| Type (from `using System;`) | Holds a method like |
| --- | --- |
| `Action` | `void Explode()`: no parameters |
| `Action<int>` | `void ShowScore(int value)`: one `int` |

### Idea — an event: "this happened", for whoever cares

An **event** is a delegate that other scripts can only add themselves to:

```csharp
using System;
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    [SerializeField] int health = 5;

    public event Action<int> HealthChanged;     // with the new health
    public event Action Died;

    public void TakeDamage(int amount)
    {
        health = Mathf.Max(health - amount, 0);
        HealthChanged?.Invoke(health);
        if (health == 0)
        {
            Died?.Invoke();
        }
    }
}
```

- `event`, the kind of method it calls (`Action<int>`), and a name for what happened.
- `HealthChanged?.Invoke(health)` **raises** it: every method on its list is called,
  with `health`, in the order they were added.
- With no listeners the event is `null`: `?.` skips the call, where a plain `.Invoke`
  would stop at a `NullReferenceException`.

### Idea — subscribing in OnEnable, unsubscribing in OnDisable

A listener **subscribes** with `+=`, adding one of its methods to the list, and
**unsubscribes** with `-=`, taking it off:

```csharp
using TMPro;
using UnityEngine;

public class HealthText : MonoBehaviour
{
    [SerializeField] PlayerHealth player;
    [SerializeField] TMP_Text label;

    void OnEnable()
    {
        player.HealthChanged += OnHealthChanged;
    }

    void OnDisable()
    {
        player.HealthChanged -= OnHealthChanged;
    }

    void OnHealthChanged(int health)
    {
        label.text = $"Health: {health}";
    }
}
```

A sound script listens to `Died` in the same way, and so does the game over panel.
`PlayerHealth` knows none of them, and works alone in an empty test scene.

Always subscribe in `OnEnable` and unsubscribe in `OnDisable`, as a pair. A listener
that's switched off stops listening, and starts again when switched back on; and Unity
calls `OnDisable` before destroying an object, so a destroyed listener is taken off.
Forget the `-=`, destroy the health text while the player lives, and the event still
holds the dead script's method. The next hit calls it: a dead script runs, on a label
that's gone. Setting the label's `text` happens to fail **quietly**: nothing on the
screen, nothing in the Console. Touch anything that reaches the label's GameObject, such
as `label.gameObject.SetActive(true)`, and the Console says:

```
MissingReferenceException: The object of type 'TMPro.TextMeshProUGUI' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

A mistake that sometimes says nothing at all is the worst kind to find. Unsubscribe in
`OnDisable`, every time.

### Idea — lambdas: a method without a name

Sometimes the method you'd pass is one line long. A **lambda** writes it in place:
`(parameters) => what it does`.

| Lambda | Does the same as a method like |
| --- | --- |
| `() => Buy(fruit)` | `void BuyIt() { Buy(fruit); }` |
| `health => Debug.Log(health)` | `void Log(int health) { Debug.Log(health); }` |

A button's `onClick` passes no value; a lambda gives each button its own. A fruit shop:

```csharp
[SerializeField] Button buttonPrefab;
[SerializeField] Transform buttonList;
[SerializeField] string[] fruits = { "Lemon", "Orange", "Melon" };

void Start()
{
    foreach (string fruit in fruits)
    {
        Button button = Instantiate(buttonPrefab, buttonList);
        button.GetComponentInChildren<TMP_Text>().text = fruit;
        button.onClick.AddListener(() => Buy(fruit));
    }
}

void Buy(string fruit)
{
    Debug.Log($"Bought: {fruit}");
}
```

Click the Orange button, and the Console says `Bought: Orange`. Each lambda keeps the
`fruit` of its own time round the loop: `foreach` makes a new `fruit` each time.

> **Watch out:** a `for` loop has **one** `i` for every time round. Written as
> `AddListener(() => Buy(fruits[i]))`, every button reads `i` when it's clicked, long
> after the loop ended at 3, which is past the end of the array. Copy it first:
> `string fruit = fruits[i];`, then use `fruit` in the lambda.

`-=` takes off the **same** method, and every lambda you write is a new one. So
`player.Died -= () => Debug.Log("Died");` removes nothing, however alike it looks. Keep
the lambda in a field (`Action logDeath;`) to `+=` and `-=` it, or use a named method.

### Idea — names, and what only the owner can do

| What | Rule | Examples |
| --- | --- | --- |
| C# event | what happened, past tense, no `On` | `HealthChanged`, `Died`, `LapCompleted`, `CardPlayed` |
| method that listens | `On` + the event | `OnHealthChanged`, `OnDied` |
| `UnityEvent` field | `on` + what happened | `onWon`, `onLapCompleted` |

The word `event` means only `PlayerHealth` can raise it. Others may only `+=` and `-=`:

```csharp
player.HealthChanged(0);
// error CS0070: The event 'PlayerHealth.HealthChanged' can only appear on the left hand side of += or -= (except when used from within the type 'PlayerHealth')
```

That's the point. Without `event`, any script could raise "health changed" when it hadn't,
and `player.HealthChanged = OnHealthChanged;` (`=`, not `+=`) would wipe every listener.

### Idea — UnityEvent: events wired in the Inspector

A **UnityEvent** field (`using UnityEngine.Events;`) shows in the Inspector as a list,
like a Button's **On Click ()**, which is one. A finish line with two of them:

```csharp
[SerializeField] int lapsToWin = 3;
[SerializeField] UnityEvent<int> onLapCompleted;
[SerializeField] UnityEvent onWon;

int lap;

void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        lap++;
        onLapCompleted.Invoke(lap);
        if (lap == lapsToWin)
        {
            onWon.Invoke();
        }
    }
}
```

In the Inspector, give **On Won ()** a **+**, drag in an object and pick a public method:
show a panel with `SetActive`, play a cheer with `Play`. For **On Lap Completed (Int32)**,
pick a method under **Dynamic int** to receive the lap. Unity makes the object for a
serialised `UnityEvent`, so it isn't `null`, and `Invoke` needs no `?.`.

| | C# event | UnityEvent |
| --- | --- | --- |
| Declared | `public event Action<int> HealthChanged;` | `[SerializeField] UnityEvent<int> onLapCompleted;` |
| Listeners added | in code, with `+=` and `-=` | in the Inspector, or with `AddListener` and `RemoveListener` |
| Raised with | `HealthChanged?.Invoke(health);` | `onLapCompleted.Invoke(lap);` |
| The wiring lives | in the scripts | in the scene: a designer can change it without code |
| Use it for | one script telling other scripts | a script telling things in the scene: sounds, panels, animations |

So: **C# events between scripts; UnityEvents from a script to whatever a designer wires
up in the scene.** A race or a duel manager often has both.

### Do it

1. Make `PlayerHealth`, `HealthText`, and a `Practice` script that calls `TakeDamage(1)`
   when you press **H**. Add a second listener that logs `Game over` on `Died`.
2. Take the `-=` out of `HealthText`. Play, delete the text object in the Hierarchy,
   and press **H**: the Console says nothing. Add `label.gameObject.SetActive(true);`
   to `OnHealthChanged`, do it again, and read the Console. Put the `-=` back, and try
   once more.
3. Make the fruit shop. Change it to a `for` loop using `fruits[i]` in the lambda, click
   a button, and explain what you see. Fix it with a copy.
4. Give a finish line `onWon`, and wire it in the Inspector to show a panel.
5. In another script, write `player.HealthChanged = null;`. Read the error.

### Challenge

A juice stand raises `CupSold(int price)`. A `Wallet` listens, adds the money, and
raises `MoneyChanged(int money)`. A money text and an upgrade button listen to the
wallet: the button is only clickable when you can afford the upgrade. No script may
have a field for the one that listens to it. Draw the arrows first, then build it.

## C# 3 — The Input Actions Asset

**Goal:** you can make an Input Actions asset, use its actions from code, switch action
maps for a pause menu, and let players change a key and keep it (the Level Reference's
Level 4 topic: New Input System; Associate: Programming — determine code for a specified
interaction or logic).

### Idea — from devices to actions

Until now, your code has read devices: `Keyboard.current` and `Pointer.current`, each
checked for `null`. That writes every device into the code; a player can't swap Space for
another key; and a pause menu has to stop every script that reads Space.

An **Input Actions asset** splits it in two. An **action** names what the player wants to
do (*Boost*, *End Turn*, *Steer*), and its **bindings** say which controls do it: Space,
a gamepad button, a touch. Your code listens to the action; the asset holds the controls.
The old `Input` class is in the table only because exams use it: here it throws errors.

| To… | the old `Input` class | the Input System's devices | an Input Actions asset |
| --- | --- | --- | --- |
| react to a press | `Input.GetKeyDown(KeyCode.Space)` | `Keyboard.current.spaceKey.wasPressedThisFrame` | `boostAction.action.performed += OnBoost;` |
| check a held key | `Input.GetKey(KeyCode.Space)` | `Keyboard.current.spaceKey.isPressed` | `boostAction.action.IsPressed()` |
| steer | `Input.GetAxis("Horizontal")` | four keys, checked one by one | `steerAction.action.ReadValue<Vector2>()` |
| find the pointer | `Input.mousePosition` | `Pointer.current.position.ReadValue()` | a Value action bound to the pointer's position |
| let the player change a key | not while playing | change the code | `PerformInteractiveRebinding` |

### Idea — making the asset

**Assets → Create → Input Actions** makes one; double-click it to open its window:

| Part of the window | Holds |
| --- | --- |
| **Action Maps** (left) | groups of actions that work together: *Driving*, *Menu* |
| **Actions** (middle) | the map's actions, each with its bindings under it |
| **Action Properties** or **Binding Properties** (right) | the settings of whatever you selected |
| **Save Asset** (top) | saves your changes; or tick **Auto-Save** |

| Each action's **Action Type** | For | Example |
| --- | --- | --- |
| **Button** | a press | Boost, End Turn, Pause |
| **Value** | something that changes, with a **Control Type** such as **Vector 2** | Steer, from WASD or a stick |
| **Pass Through** | every change from every device, unfiltered | rarely needed: a pointer's position |

Select a binding, open its **Path**, and pick a control from the list, or press **Listen**
and then the key. For WASD, use the action's **+** menu:
**Add Up\Down\Left\Right Composite** makes one binding from four keys. One action can have
many bindings: give Boost both Space and the gamepad's south button.

### Idea — an action in code

A script gets an action through an `InputActionReference` field: drag the action into it,
or pick it from the field's list. `performed` is a C# event (C# 2), so subscribe
in `OnEnable` and unsubscribe in `OnDisable`. The handler takes a `CallbackContext`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class KartBoost : MonoBehaviour
{
    [SerializeField] InputActionReference boostAction;

    void OnEnable()
    {
        boostAction.action.performed += OnBoost;
        boostAction.action.actionMap.Enable();      // nothing fires until it's enabled
    }

    void OnDisable()
    {
        boostAction.action.performed -= OnBoost;
    }

    void OnBoost(InputAction.CallbackContext context)
    {
        Debug.Log("Boost!");
    }
}
```

Space and the gamepad button both print `Boost!`, and the script names neither. Besides
`performed`, an action has two more events:

| Event | For a Button | For a Value |
| --- | --- | --- |
| `started` | the press begins | the control moves from rest |
| `performed` | the press counts: use this one | every change of value |
| `canceled` | the button is let go | back at rest |

> **Watch out:** the actions in your own asset start **disabled**, and a disabled action
> never fires, with no error. Enable its map with `Enable()`.

> **Note:** Unity 6 also has **project-wide actions**: one asset, chosen in **Edit →
> Project Settings → Input System Package**, enabled for you and read through
> `InputSystem.actions`. New projects come with one, **InputSystem_Actions**. This course
> makes its own asset, to learn every part of one.

### Idea — reading a Value action

A Value action changes all the time, so read it every frame with `ReadValue`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class KartSteering : MonoBehaviour
{
    [SerializeField] InputActionReference steerAction;
    [SerializeField] float turnSpeed = 120f;    // degrees a second
    [SerializeField] float driveSpeed = 8f;     // units a second

    void Update()
    {
        Vector2 steer = steerAction.action.ReadValue<Vector2>();
        transform.Rotate(0f, steer.x * turnSpeed * Time.deltaTime, 0f);
        transform.Translate(Vector3.forward * steer.y * driveSpeed * Time.deltaTime);
    }
}
```

**D** gives `(1, 0)`, **W** gives `(0, 1)`, and a stick gives anything in between.

### Idea — action maps: one at a time

With a pause menu open, Space mustn't boost the kart behind it. Put the game's actions in
a Driving map and the menu's in a Menu map, and keep only one enabled. Pause and Resume
are both Escape, but only the enabled map hears it. Their `performed` handlers call:

```csharp
[SerializeField] InputActionReference pauseAction;      // in the Driving map
[SerializeField] InputActionReference resumeAction;     // in the Menu map

void Pause()
{
    pauseAction.action.actionMap.Disable();     // Steer and Boost stop too
    resumeAction.action.actionMap.Enable();
}

void Resume()
{
    resumeAction.action.actionMap.Disable();
    pauseAction.action.actionMap.Enable();
}
```

### Idea — rebinding: the player picks a key

`PerformInteractiveRebinding` waits for the next control the player presses, and makes it
the binding's new path. It's a chain of calls, then `Start()`:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;

// One row of a controls menu: the action's key, and a Change button that calls
// StartRebinding through its On Click () list.
public class KeyRebinder : MonoBehaviour
{
    const string BindingsKey = "Bindings";

    [SerializeField] InputActionReference action;
    [SerializeField] int bindingIndex;          // which binding: 0 is the action's first
    [SerializeField] TMP_Text keyText;

    InputActionRebindingExtensions.RebindingOperation rebinding;

    void Start()
    {
        ShowKey();
    }

    public void StartRebinding()
    {
        bool wasEnabled = action.action.enabled;
        action.action.Disable();                // an action can't be rebound while it's on
        keyText.text = "Press a key...";
        rebinding = action.action.PerformInteractiveRebinding(bindingIndex)
            .WithControlsExcluding("<Pointer>")             // clicking Change isn't a key
            .WithCancelingThrough("<Keyboard>/escape")      // Escape keeps the old key
            .OnComplete(operation => Finish(wasEnabled))    // a key was chosen
            .OnCancel(operation => Finish(wasEnabled))      // or it wasn't
            .Start();
    }

    void Finish(bool enableAgain)
    {
        rebinding.Dispose();                    // frees the operation: always do it
        rebinding = null;
        if (enableAgain)
        {
            action.action.Enable();
        }
        PlayerPrefs.SetString(BindingsKey, action.asset.SaveBindingOverridesAsJson());
        PlayerPrefs.Save();
        ShowKey();
    }

    // "<Keyboard>/k" becomes "K"; OmitDevice leaves out the word Keyboard.
    void ShowKey()
    {
        string path = action.action.bindings[bindingIndex].effectivePath;
        keyText.text = InputControlPath.ToHumanReadableString(path, InputControlPath.HumanReadableStringOptions.OmitDevice);
    }
}
```

> **Watch out:** `action.GetBindingDisplayString()` also names a key, but by the
> computer's keyboard layout: on an Arabic layout, K shows as **ن**, which your game's
> font may not have. `ToHumanReadableString` always gives **K**.

### Idea — keeping the new keys

A rebind lasts until the game closes. `SaveBindingOverridesAsJson()` gives every changed
binding as one string for PlayerPrefs (C# 14); a card game's End Turn, set to K:

```json
{"bindings":[{"action":"Battle/End Turn","id":"830b9d5d-1263-4f52-9be6-9373795c84a8","path":"<Keyboard>/k","interactions":"null","processors":"null"}]}
```

Load it back in `Awake`, before anything shows a key; `ResetControls` undoes every change:

```csharp
const string BindingsKey = "Bindings";

[SerializeField] InputActionReference boostAction;

void Awake()
{
    string json = PlayerPrefs.GetString(BindingsKey, "");
    if (json != "")
    {
        boostAction.asset.LoadBindingOverridesFromJson(json);
    }
    boostAction.action.actionMap.Enable();
}

// Called by a Reset Controls button.
public void ResetControls()
{
    boostAction.asset.RemoveAllBindingOverrides();
    PlayerPrefs.DeleteKey(BindingsKey);
}
```

### Do it

1. Make an Input Actions asset with a Driving map: **Steer** (Value, Vector 2, with a
   WASD composite) and **Boost** (Button: Space and the gamepad's south button). Save it.
2. Put `KartBoost` and `KartSteering` on a cube, fill in the references, and drive.
3. Remove the line that enables the map, and play. What happens? What does the Console say?
4. Add a Menu map with Resume, and a script whose `performed` handlers call `Pause` and
   `Resume`. Check that Space does nothing while it's paused.
5. Add a `KeyRebinder` row for Boost, and the loading code. Change Boost to **B**, stop,
   and play again: is it still B?

### Challenge

Add a row for Boost's gamepad binding (its `bindingIndex` is 1) and a **Reset Controls**
button. What if the player gives Boost and Pause the same key? Find a way to warn them.

## Chapter 2 — The Juice Maker

**Goal:** you on the beach: the chef, walking and running where you push, turning to face
the way he goes, bumping into the beach's edges, with a camera that follows him; pushed by
WASD, the arrow keys, a gamepad's stick, or a stick on the screen that appears under your
thumb.

### Idea — one action, many ways to push it

C# 3 showed an **Input Actions asset**: actions grouped in maps, each action with
bindings. This game needs one action above all: **Move**, a `Vector2` from −1 to 1 on
each axis. Its bindings are WASD, the arrow keys and a gamepad's left stick. The chef's
script asks the action for its value every frame and never knows which of them was
pushed.

A phone has no keys and no stick. The Input System's **On-Screen Stick** is a UI
component that **pretends to be a gamepad's left stick**: drag it, and the Input System
sees a gamepad stick move. So the Move action, which already listens to `<Gamepad>/leftStick`,
works on a phone with no change to the chef. With **Exact Position With Dynamic Origin**,
the stick jumps to wherever your thumb lands, and follows it from there.

Three more pieces make the chef feel solid:

| Piece | Why |
| --- | --- |
| A **Rigidbody** whose velocity the script sets in `FixedUpdate` | physics stops him at counters and walls, with no code of ours |
| Its rotation **frozen** on every axis, and `MoveRotation` to turn him | a bump can't set him spinning: only our code turns him |
| No gravity, and its height frozen | the beach is flat; nothing needs to fall, so nothing needs a floor collider |

And a camera that follows him in `LateUpdate`, after he has moved this frame, a moment
late (`Vector3.SmoothDamp`), so the picture glides instead of jerking.

### Do it — the actions

1. In `Assets/Input`, **Create → Input Actions**, called `Juice Tycoon Controls`, and open
   it.
2. **Action Maps +**: `Chef`. Its first action: `Move`, **Action Type** `Value`, **Control
   Type** `Vector2`. Delete the empty binding it comes with. Then:
   - **+** → **Add Up/Down/Left/Right Composite**. Bind **Up** to **W**, **Down** to
     **S**, **Left** to **A**, **Right** to **D** (click each, then **Path** → **Listen**,
     and press the key).
   - Another composite, with the four **arrow keys**.
   - **+** → **Add Binding**, **Path** `Left Stick [Gamepad]`.
3. A second action in `Chef`: `Menu`, **Action Type** `Button`, bound to **Escape**
   [Keyboard] and **Start** [Gamepad]. (Chapter 9 uses it.)
4. **Action Maps +**: `Panel`, with one action, `Close`, a `Button` bound to **Escape**
   [Keyboard] and **Button East** [Gamepad]. (Chapter 9 too.)
5. **Save Asset**.

### Do it — the animator controllers

6. In `Assets/Animation`, **Create → Animator Controller**, `Person`. Every person in the
   game will use it. Open it (**Window → Animation → Animator**). **Parameters +**:
   `Speed`, a **Float**.
7. Drag the `Idle` clip from inside `Art/Characters/Chef_Male` into the Animator window:
   an orange state, the default. Then the `Walk` clip. Rename them `Idle` and `Walk`.
8. Right-click `Idle` → **Make Transition** → `Walk`. Select the arrow: untick **Has Exit
   Time**, **Transition Duration** `0.15` (a fifth of a second's blend: people blend from
   one clip to the next, sprites don't), and a **Condition**: `Speed` **Greater** `0.1`.
   And back, `Walk` → `Idle`: the same, with `Speed` **Less** `0.1`.
9. The chef runs where the customers walk. In `Assets/Animation`, **Create → Animator
   Override Controller**, `Chef`. Its **Controller**: `Person`. The list shows Person's
   clips: next to `Walk`, choose `Run`. The same states and transitions, with a run where
   Person walks.

### Do it — the chef

10. An empty GameObject, `Chef`, at (−5.4, 0, 1.2), **Rotation Y** `180` (facing the
    camera). Add a **Rigidbody**: untick **Use Gravity**, **Interpolate** `Interpolate`,
    and under **Constraints** tick **Freeze Position Y** and all three **Freeze
    Rotation**. Add a **Capsule Collider**: **Center** (0, 0.9, 0), **Radius** `0.35`,
    **Height** `1.8`.
11. Drag `Art/Characters/Chef_Male` onto `Chef` in the Hierarchy: a child. Rename it
    `Model`, and check its position is (0, 0, 0). It has an **Animator** already: set its
    **Controller** to `Chef` (the override), untick **Apply Root Motion** (our script
    moves him, not his clips), and **Culling Mode** `Cull Update Transforms`.
12. **Layers.** **Add Layer…** in the top of the Inspector: `Chef` and `Helpers` (Chapter 10
    uses the second). Put `Chef` on the `Chef` layer, its children too.
13. In `Scripts/Chef`, a new script, `Chef`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// You: the juice maker. The Move action (WASD, the arrows, a gamepad's stick,
// and the thumb stick on the screen, which pretends to be a gamepad's) sets
// the Rigidbody's velocity. The chef turns to face the way it walks, and tells
// its Animator how fast it goes.
[RequireComponent(typeof(Rigidbody))]
public class Chef : MonoBehaviour
{
    static readonly int SpeedId = Animator.StringToHash("Speed");

    [SerializeField] InputActionReference move;
    [SerializeField] Animator animator;
    [SerializeField] float speed = 4.5f;                // metres a second
    [SerializeField] float turnDegreesPerSecond = 720f;

    Rigidbody body;
    Vector3 velocity;

    // The flip-flops make you faster.
    public float Speed
    {
        get { return speed; }
        set { speed = value; }
    }

    void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    // An action reads nothing until it's switched on. Controls switches whole
    // maps on and off for the panels; the chef makes sure its own action is on.
    void OnEnable()
    {
        move.action.Enable();
    }

    // Read the input every frame; move the body in FixedUpdate, with the physics.
    void Update()
    {
        Vector2 input = Vector2.ClampMagnitude(move.action.ReadValue<Vector2>(), 1f);
        // The camera looks north: up on the stick walks into the screen, along z.
        velocity = new Vector3(input.x, 0f, input.y) * speed;
        animator.SetFloat(SpeedId, velocity.magnitude);
    }

    void FixedUpdate()
    {
        body.linearVelocity = new Vector3(velocity.x, body.linearVelocity.y, velocity.z);
        if (velocity.sqrMagnitude > 0.01f)
        {
            Quaternion facing = Quaternion.LookRotation(velocity);
            body.MoveRotation(Quaternion.RotateTowards(body.rotation, facing, turnDegreesPerSecond * Time.fixedDeltaTime));
        }
    }
}
```

14. Read it before you use it:
    - `InputActionReference move`: drag the **Move** action from `Juice Tycoon Controls`
      into it (open the asset in the Project window: each action is an object inside it).
    - `Vector2.ClampMagnitude(…, 1f)`: pushing W and D together gives (1, 1), longer than
      1; diagonals would be faster than straight lines. Clamped, they aren't.
    - The input's `y` becomes the velocity's `z`: up on the stick is north, into the
      screen, because the camera looks north.
    - `Update` reads; `FixedUpdate` moves. Physics runs at its own fixed steps, and a
      Rigidbody's velocity belongs there. `MoveRotation` turns him towards the way he's
      going, at most 720° a second: a quick turn, not a snap.
    - `Speed` is a property, so another script can make him faster (Chapter 9's
      flip-flops) without reaching into his fields.
15. Add `Chef` to the `Chef` GameObject. Drag **Move** into **Move**, and `Model` into
    **Animator**. Then drag `Chef` from the Hierarchy into `Prefabs/People`: a prefab.

### Do it — the edges and the camera

16. An empty GameObject, `Edges`, with four empty children, each with a **Box Collider**:

| Child | Position | Box Collider Size |
| --- | --- | --- |
| `North` | (0, 1, 8.4) | (20, 2, 0.4) |
| `South` | (0, 1, −10.6) | (20, 2, 0.4) |
| `West` | (−8.8, 1, −1) | (0.4, 2, 20) |
| `East` | (8.8, 1, −1) | (0.4, 2, 20) |

Invisible walls: the chef stays on the sand, out of the sea and off the boardwalk.

17. In `Scripts/Chef`, `CameraFollow`:

```csharp:CameraFollow.cs
using UnityEngine;

// Follows the chef from above and behind, a moment late, so the picture
// glides instead of jerking. LateUpdate, so the chef has already moved this
// frame. The camera never turns, and it stays over the beach: what it follows
// is kept inside a rectangle.
public class CameraFollow : MonoBehaviour
{
    [SerializeField] Transform target;
    [SerializeField] Vector3 offset = new Vector3(0f, 13f, -9.5f);
    [SerializeField] float smoothSeconds = 0.2f;
    [SerializeField] Vector2 lowestFocus = new Vector2(-4.5f, -8f);     // x and z
    [SerializeField] Vector2 highestFocus = new Vector2(4.5f, 4f);

    Vector3 velocity;

    void Start()
    {
        transform.position = Focus() + offset;
    }

    void LateUpdate()
    {
        transform.position = Vector3.SmoothDamp(transform.position, Focus() + offset, ref velocity, smoothSeconds);
    }

    Vector3 Focus()
    {
        Vector3 focus = target.position;
        focus.x = Mathf.Clamp(focus.x, lowestFocus.x, highestFocus.x);
        focus.y = 0f;
        focus.z = Mathf.Clamp(focus.z, lowestFocus.y, highestFocus.y);
        return focus;
    }
}
```

18. Add it to `Main Camera`: drag `Chef` into **Target**, **Offset** (0, 14, −10). The
    rectangle keeps what it follows between x −4.5 and 4.5, z −8 and 4, so the camera never
    shows the beach's empty edges.

### Do it — the stick on the screen

19. **GameObject → UI → Canvas**. Unity adds an **EventSystem** too, with the Input
    System's **Input System UI Input Module**. On the Canvas's **Canvas Scaler**: **UI
    Scale Mode** `Scale With Screen Size`, **Reference Resolution** 1080 × 1920, **Match**
    `0` (width). C# 7 explains it; for now, it means the UI is laid out for a
    1080-wide phone, and grows or shrinks with the screen's width.
20. Right-click the Canvas → **UI → Image**, `Stick`. Its **Rect Transform**: anchor at the
    bottom centre (hold nothing, pick the bottom-middle preset), **Pos X** 0, **Pos Y**
    `420`, **Width** and **Height** `150`. **Source Image** `Art/Ground/Disc`, **Color**
    white with **A** 128: a faint circle, until you touch it.
21. **Add Component → On-Screen Stick**: **Movement Range** `110`, **Control Path**
    `Left Stick [Gamepad]`, **Behaviour** `Exact Position With Dynamic Origin`, **Dynamic
    Origin Range** `640`. A touch anywhere within 640 pixels of the stick's place moves the
    stick there; then the stick follows the finger, up to 110 pixels away.

### Test it

- Press **Play**, click the Game view, and hold **W**: the chef runs up the beach, away
  from you, with his run, and the camera glides after him. **A**, **S**, **D**, the
  arrows, two keys at once. Let go: he stops, and stands facing the way he was going.
- Run into the sea: the north wall stops him. Run along the wall at a slant: he slides
  along it. That's the Rigidbody, with no code of ours.
- With the mouse, press anywhere in the lower half of the Game view and drag: the circle
  jumps under the pointer and the chef follows it. It's the gamepad binding at work.
- **Window → General → Device Simulator**, and pick a phone: the same drag works as a
  touch.
- Select `Model` while he runs: the Animator window shows the blue bar moving through
  **Walk** (the override plays **Run** in it), and `Speed` near 4.5.

### Commit

*Add the juice maker: actions, a stick, the chef and a camera.*

### Challenge

Add a **Dash** action on **Left Shift** (and a gamepad button): while it's held, the chef
is half as fast again. Read it with `IsPressed()` in `Update`. Which file did you change,
and which did you add to? Look at the commit.

## C# 4 — Prefabs in Depth

**Goal:** you can build prefabs out of other prefabs, make variants of them, change an
instance and then apply or revert the change, predict which objects a change reaches, and
make instances from code (Associate: Assets — change nested prefabs and prefab variants,
and predict the outcome; use prefabs in a scene).

### Idea — a prefab, again

A **prefab** is an asset that holds a GameObject, with its children and components, ready
to use many times. Every copy of it in a scene is an **instance**, linked to the asset:
change the prefab, and every instance changes. In the Hierarchy, instances have blue names
and a blue cube icon.

Three ideas take prefabs much further, and the exam asks about all three: prefabs inside
prefabs (**nested**), prefabs based on prefabs (**variants**), and the changes an instance
makes to its prefab (**overrides**).

### Idea — Prefab Mode

You edit a prefab itself in **Prefab Mode**. Open it by double-clicking it in the Project
window, by clicking the arrow (**>**) to the right of an instance in the Hierarchy, or with
**Open** in an instance's Inspector.

- The **Hierarchy** shows only the prefab, under a header with a back arrow (**<**).
- The **breadcrumbs** at the top of the Scene view show where you are: the scene, then
  **Duelist Panel**, then **Health Bar**, say. Click one to go back up.
- **Auto Save**, at the top right of the Scene view, saves every change at once. Turn it
  off, and a **Save** button appears instead; Unity asks you to save when you leave.

Opened from an instance, the scene stays visible around the prefab, greyed out, so you
can see it in its place. Leave with the back arrow or a breadcrumb.

### Idea — nested prefabs

A prefab can hold instances of other prefabs, and each keeps its own link:

| Outer prefab | Holds (nested prefabs) |
| --- | --- |
| a Kart | four Wheel instances |
| a Juice Stand | a Price Tag and a Counter |
| a Duelist Panel | a Health Bar and a Mana Bar |

To nest one, open the outer prefab in Prefab Mode and drag the inner prefab into its
Hierarchy. Change the Wheel prefab, and the wheels on every kart change, in every scene:
you made the change once, in one place.

### Idea — variants

A **variant** is a prefab based on another one, its **base**. It holds everything the base
holds, plus its own changes. A Health Bar is a Bar with a red fill and a heart icon; a Fast
Kart is a Kart with a bigger engine and a stripe.

To make one: right-click the base in the Project window → **Create → Prefab Variant**,
then open the variant and change what differs. Its icon is a prefab cube with an arrow.

A variant stores **only its differences**. Its file names its base by GUID (the ID in the
base's `.meta` file, C# 1) and lists the changes:

```
PrefabInstance:
  m_Modification:
    m_Modifications:
    - target: {fileID: 5389347945180400670, guid: 3b8e…, type: 3}
      propertyPath: m_Color.r
      value: 0.76
    …
  m_SourcePrefab: {fileID: 100100000, guid: 3b8e…, type: 3}
```

So a change to the base reaches the variant, except where the variant has its own value.
A **duplicate** (**Ctrl + D**, **Cmd + D** on a Mac) is different: a separate prefab, with
no link to the original at all.

### Idea — overrides

Change an instance, and the change is an **override**: the instance's own value, kept
instead of the prefab's.

| Override | How Unity shows it |
| --- | --- |
| a changed property | its label turns **bold**, with a blue line in the Inspector's margin |
| an added component | a **+** on the component's icon |
| an added child GameObject | a **+** on its icon in the Hierarchy |
| a removed component or child | listed in the **Overrides** drop-down |

The root's name, position and rotation belong to each instance: they're left out of the
**Overrides** drop-down, and out of **Apply All**.

The **Overrides** drop-down, at the top of the instance root's Inspector, lists every
override. Click one to compare it with the prefab, side by side. Then:

- **Apply** sends the change into the prefab: every instance gets it. **Apply All**
  applies them all.
- **Revert** throws it away: the instance takes the prefab's value again. **Revert All**
  reverts them all.

For one property, right-click it: the menu offers **Revert**, and an **Apply** for each
prefab the change could go to.

### Idea — how a change travels

This is the exam's favourite prefab question. Here is the setup:

1. **Bar**, a prefab: a frame, a **Fill** image (white), an icon and a value text (**Font
   Size** 28).
2. **Health Bar** and **Shield Bar**, two variants of Bar: Health Bar overrides the fill
   to red, Shield Bar to blue.
3. **Duelist Panel**, a prefab with a portrait and a Health Bar instance nested in it.
4. A scene with two Duelist Panel instances: **Left Panel** and **Right Panel**.

Now make four changes, one at a time, and predict which bars change:

- **A.** In Bar's Prefab Mode, set the text's **Font Size** to 32.
- **B.** In Health Bar's Prefab Mode, set the fill to dark red.
- **C.** In Duelist Panel's Prefab Mode, select its Health Bar's icon and switch it off:
  an override, kept in the Duelist Panel prefab.
- **D.** In the scene, select Right Panel's Health Bar and set its fill to purple: an
  override, kept in the scene.

| Change made in | Bar | Shield Bar | Health Bar | Duelist Panel's bar | Left Panel's bar | Right Panel's bar |
| --- | --- | --- | --- | --- | --- | --- |
| **A**, Bar | changes | changes | changes | changes | changes | changes |
| **B**, Health Bar | — | — | changes | changes | changes | changes |
| **C**, Duelist Panel | — | — | — | changes | changes | changes |
| **D**, the scene | — | — | — | — | — | changes |

The rule: a change reaches **everything built on top of the place you made it**, and
nothing underneath. Bar is at the bottom of the pile; the scene is at the top.

And one more rule: **an override wins**. Make change D first, then B: Right Panel's bar
stays purple, because its fill colour is its own now. It still takes A and C, which change
other properties. In the same way, if Health Bar had overridden the font size, change A
would reach Shield Bar but no Health Bar anywhere.

Where should D go, if every panel's bar should be purple? Right-click the fill's
**Color** in the scene. The menu offers an **Apply** entry for each prefab the bar comes
from, each named: the Duelist Panel (every Duelist Panel would get it), the Health Bar
variant (every Health Bar, in the panels and anywhere else), and so on down to Bar.
Apply it to the prefab whose every use should change.

> **Tip:** before changing a prefab, ask "what's built on this?": every variant of it,
> every prefab it's nested in, and all their instances will change too.

### Idea — unpacking

Right-click an instance in the Hierarchy → **Prefab**:

| Choice | Does |
| --- | --- |
| **Unpack** | the instance becomes plain GameObjects, but prefabs nested inside it stay instances |
| **Unpack Completely** | everything becomes plain GameObjects, nested prefabs too |

An unpacked object has no link: fixes to the prefab never reach it again. That's
occasionally what you want, for a one-off made from a prefab's parts. Almost always, a
variant or an override does the job and keeps the link, so reach for those first.

### Idea — instances from code

Type the prefab field as the **component** you'll use, not as a `GameObject`. Then
`Instantiate` returns that component on the new copy, with no `GetComponent` needed, and
the Inspector only accepts a prefab that has one:

```csharp
using UnityEngine;

public class Coin : MonoBehaviour
{
    [SerializeField] int value = 1;

    public int Value { get { return value; } }

    public void SetValue(int newValue)
    {
        value = newValue;
    }
}
```

```csharp
using UnityEngine;

// Makes a row of coins from the Coin prefab, each worth more than the last.
public class CoinRow : MonoBehaviour
{
    const int CoinCount = 3;
    const float Gap = 1.5f;

    [SerializeField] Coin coinPrefab;
    [SerializeField] Transform coinParent;

    void Start()
    {
        for (int i = 0; i < CoinCount; i++)
        {
            Coin coin = Instantiate(coinPrefab, coinParent);
            coin.transform.localPosition = new Vector3(i * Gap, 0f, 0f);
            coin.SetValue(i + 1);
            Debug.Log($"{coin.name} is worth {coin.Value}");
        }
    }
}
```

With a prefab called `Coin` in **Coin Prefab**:

```
Coin(Clone) is worth 1
Coin(Clone) is worth 2
Coin(Clone) is worth 3
```

`Instantiate(prefab, parent)` puts the copy under `parent`: in a UI list with a layout
group, that's all a new row needs. `Instantiate(prefab, position, rotation, parent)` also
places it.

> **Watch out:** change the copy that `Instantiate` returns, never the prefab field
> itself. `coinPrefab.SetValue(5)` changes the prefab **asset**: in the Editor, the change
> stays after Play stops, and every coin made from it afterwards starts at 5.

### Do it

1. Make a Bar prefab and two variants, with different fill colours. Change the base's
   frame colour, and check that both variants follow.
2. Nest a Health Bar in a Panel prefab, and put two Panels in a scene. Make changes A to
   D from this chapter, predicting each result before you look.
3. Revert D, then make it again, and change Health Bar's fill colour once more. Which bars
   change? Then revert D with the **Overrides** drop-down, and check again.
4. Add a component to one instance, and find it in the **Overrides** drop-down. Apply
   it, and check the prefab.
5. Make `Coin` and `CoinRow`, and play. Then change `CoinRow` to place each coin with
   `Instantiate(prefab, position, rotation, parent)`, in a column instead of a row.

### Challenge

Build a Kart prefab with four nested Wheel prefabs, then a Fast Kart variant with bigger
rear wheels. Before each step, write down which karts will change: change the Wheel
prefab's colour; change the Kart's body colour; override one wheel's size on one Fast
Kart in the scene, then apply it as an override in the Fast Kart variant.

## Chapter 3 — Crates, Counters and Spots

**Goal:** the bar, as a prefab made of other prefabs: a **Juice Stand** with a crate, a
juicer, a counter with its price tag, and a mat for the cash, laid out from the sea down
to the boardwalk; a variant for each of the four bars; and two smaller prefabs, the
**Build Spot** (a dashed square with a price) and the **Table**. Then the experiment the
exam asks for: change a prefab, a variant and an instance, and predict what changes where.

### Idea — a bar is a prefab of prefabs

C# 4 showed a Juice Stand prefab holding a Price Tag and a Counter. Here it is
for real, bigger: every model you drop into it is a prefab already (a model file is a
prefab you can't edit), so the Juice Stand **nests** a crate, a cabinet, three jars, a
counter. Change the crate's import settings and every bar's crate changes.

The four bars are the same shape with different fruit, different prices and different
machines. A **Prefab Variant** for each: the Orange, Apple, Smoothie and Coconut stands.
Each variant keeps everything from the base, and **overrides** only what's its own. Today
that's which jar sits on the machine: the juicer's, the blender's, the coconut cutter's.
Chapter 4 adds each bar's data.

Two more things are new:

- **World Space canvases.** A price tag over the counter, a ring over the machine, a mat
  on the sand: UI, but standing in the world, not on the screen. A Canvas in **World
  Space** is a flat object like any other, sized in pixels and scaled down: at a scale of
  0.01, 100 pixels make a metre.
- **Billboard.** A sign stays readable only if it faces the camera. A tiny script turns it
  to the camera's rotation when it wakes. The camera never turns, so once is enough.

**The layout**, as the Juice Stand's children see it (its origin is the counter; north,
+z, is the sea):

```
z  7.25  the crate        ┐
   6.0   its mat          │  the chef stands on a mat to use what's behind it
   4.2   the juicer       │
   2.95  its mat          │
   1.2   the till mat     │  stand here to serve
   0     the counter, its price tag; the cash mat to its right
  −3.5   the front of the queue, then five more places, 0.85 apart
 −12.6   where its customers leave the boardwalk
```

### Do it — the mats, the ring and the sign

1. **The Billboard script**, in `Scripts/Bar`:

```csharp:Billboard.cs
using UnityEngine;

// Turns a World Space Canvas (a price, a bubble, a ring) to face the camera,
// so its words read straight. The camera never turns, so once is enough.
public class Billboard : MonoBehaviour
{
    void OnEnable()
    {
        if (Camera.main != null)
        {
            transform.rotation = Camera.main.transform.rotation;
        }
    }
}
```

2. Make an empty GameObject, `Juice Stand`, at (−5.4, 0, 0): the Orange Bar's place.
   Everything below goes inside it.
3. **A mat.** An empty child, `Crate`, at (0, 0, 6). Inside it, **UI → Canvas**, called
   `Mat`: **Render Mode** `World Space`, **Pos** (0, 0.03, 0), **Width** and **Height**
   `140`, **Rotation** (90, 0, 0), **Scale** (0.01, 0.01, 0.01): a 1.4 m square lying on
   the sand. Remove its **Graphic Raycaster** (nobody clicks a mat), and delete the
   **EventSystem** Unity added, if it made a second one. Inside `Mat`, a **UI → Image**,
   `Picture`, stretched to fill it (the anchor preset with **Alt** held, the bottom-right
   one): **Source Image** `Art/Ground/Mat`, **Color** white with **A** 204.
4. **The crate.** Drag `Art/Bar/crate` into `Crate`: **Position** (0, 0, 1.25), **Scale**
   (0.6, 0.6, 0.6), behind its mat. Add a **Box Collider** to it, and click **Edit
   Collider** if it doesn't fit the crate: the chef bumps into it. And an empty child of
   `Crate`, `Fruit`, at (0, 0.48, 1.25): the top of the crate, where the oranges will pile.
5. **The juicer.** An empty child of `Juice Stand`, `Juicer`, at (0, 0, 2.95), with a
   `Mat` like the crate's (duplicate the crate's and drag it in). In `Juicer`, an empty
   `Model` at (0, 0, 1.25), and inside it:
   - `Art/Bar/kitchencounter_straight_B`, called `Cabinet`: **Rotation Y** 180 (its
     doors face you), **Scale** (0.6, 1, 0.5), and a **Box Collider**.
   - `Art/Bar/jar_A_large`, `jar_B_large` and `jar_C_large`, called `Jug A`, `Jug B` and
     `Jug C`: each at (0.28, 1, 0.1), **Scale** 1.3, on top of the cabinet. Untick `Jug
     B` and `Jug C`: the base juicer has one jug.
   - Two empties: `Hopper` at (0.28, 2, 0.1), where fruit goes in, and `Tray` at
     (−0.28, 1, −0.15), where the cups will stand.
6. **The ring**, over the juicer: in `Juicer`, a World Space canvas `Ring`, **Pos**
   (−0.75, 2.1, 1.25), 90 × 90, **Scale** 0.01, **Rotation** (55, 0, 0) (the camera's
   tilt, so it reads in the Scene view), with **Billboard**, and four children stretched
   over it:
   - `Back`: an Image, `Art/Ground/Disc`, white with **A** 230.
   - `Track`: an Image, `Art/Ground/Ring`, colour `#E6DCCB`.
   - `Fill`: an Image, `Art/Ground/Ring`, colour `#F08A12`, **Image Type** `Filled`, **Fill
     Method** `Radial 360`, **Fill Origin** `Top`, **Clockwise**, **Fill Amount** `0.4`
     for now, to see it.
   - `Fruit`: **UI → Text - TextMeshPro**, inset 16 on every side, text `0`, font
     `LilitaOne-Regular SDF`, size 38, colour `#7A4A1E` (brown), centred.
7. **The counter.** An empty child of `Juice Stand`, `Counter`, at (0, 0, 1.2): the till.
   Inside it:
   - `Till Mat`: a mat like the others, colour `#FFC83D` (yellow): where you stand to
     serve.
   - `Art/Bar/kitchencounter_straight_A`: **Position** (0, 0, −1.2), **Rotation Y** 180,
     **Scale** (1, 1, 0.5): a 2 m counter, 1 m deep. A **Box Collider**.
   - An empty `Cups` at (0, 1, −1.2): the counter's top.
   - `Price Tag`: a World Space canvas at (0, 1.75, −1.75), 330 × 64, **Scale** 0.01,
     **Rotation** (55, 0, 0), with **Billboard**. Inside, `Back`, an Image with `Panel
     Light` (**Image Type** `Sliced`), stretched; and `Text`, a TextMeshPro inset 12 and
     6, `Orange Bar  $5`, Lilita One, size 32, brown, centred, **Wrapping** `Disabled`.
   - Empties for the customers (Chapter 6 uses them): `Entry` at (0, 0, −12.6), `Aside` at
     (1.8, 0, −3.5), and `Queue`, with six children, `Spot 1` to `Spot 6`, at z −3.5,
     −4.35, −5.2, −6.05, −6.9 and −7.75 (x and y 0).
   - `Cash Pile`, an empty at (1.5, 0, −1.2), with a 1.2 m mat, colour `#7EE081` (green),
     and an empty `Notes` at (0, 0.04, 0): the counter's right-hand side.

### Do it — the prefab and its variants

8. Drag `Juice Stand` into `Prefabs`: a prefab. Its models stay blue in the Hierarchy:
   prefabs inside your prefab.
9. In `Prefabs`, right-click `Juice Stand` → **Create → Prefab Variant**, four times:
    `Juice Stand Orange`, `Juice Stand Apple`, `Juice Stand Smoothie`, `Juice Stand
    Coconut`. Open each and set its juicer's jugs:

| Variant | Jug A | Jug B | Jug C |
| --- | --- | --- | --- |
| Orange, Apple | ticked | | |
| Smoothie | | ticked | |
| Coconut | | | ticked |

In a variant, each override is bold in the Inspector, with a blue line beside it.

10. Delete the `Juice Stand` from the scene. Drag in the four variants, called `Orange Bar`,
    `Apple Bar`, `Smoothie Bar` and `Coconut Bar`, at x −5.4, −1.8, 1.8 and 5.4 (y and z
    0), under an empty `Bars`. Four bars along the sea. Change the three later tags' text
    to `Apple Bar  $10`, `Smoothie Bar  $18` and `Coconut Bar  $32` (Chapter 6 makes them
    write themselves).

### Do it — the build spot and the table

11. **The Build Spot.** An empty `Build Spot`, with a flat World Space canvas `Sign` at
    (0, 0.03, 0), 170 × 170, **Rotation** (90, 0, 0), **Scale** 0.01. Inside it:
    - `Paid`, stretched with 8 pixels in from each side: `Art/Ground/Mat`, colour
      `#FFC73D` with **A** 191, **Image Type** `Filled`, **Fill Method** `Vertical`,
      **Fill Origin** `Bottom`, **Fill Amount** 0. It will rise as you pay.
    - `Square`, stretched: `Art/Ground/Spot`, the dashed edge.
    - `Picture`, 62 × 62, anchored top centre, 14 down: any emoji for now.
    - `Price`, a TextMeshPro anchored bottom centre, 160 × 44, 46 up: `$30`, size 38,
      white, **Material Preset** `LilitaOne-Regular SDF Shadow`.
    - `Name`, under it: 160 × 34, 14 up, `Table`, size 24, the same white and shadow.

    Drag it into `Prefabs`.

12. **The Table.** An empty `Table`. Inside: `Art/Bar/table_round_A_small` at (0, 0, 0)
    with a **Box Collider** (then make its **Size** X and Z 0.7 of what it was: the table
    is round, its corners are open); two `Art/Bar/chair_stool`, at (−1.1, 0, 0) and
    (1.1, 0, 0); and five empties: `Seat 1` at (−1.1, 0, 0) with **Rotation Y** 90 (facing
    the table), `Seat 2` at (1.1, 0, 0) with **Rotation Y** −90, `Cup Place 1` at
    (−0.35, 1, −0.1), `Cup Place 2` at (0.35, 1, −0.1), and `Tips` at (0, 1, 0.35). Drag it
    into `Prefabs`, and delete both from the scene: build spots will put tables on the
    beach.

### Test it — the experiment

The exam asks you to predict what a change does to a prefab, its variants and its
instances. Predict each, then look:

1. Open the base `Juice Stand` prefab, and make the till mat green. What happens to the
   four bars in the scene?
2. Open `Juice Stand Apple`, and make its price tag's text red. What happens to the
   Smoothie Bar? To the Apple Bar in the scene?
3. In the scene, move the Orange Bar's crate a little to the left. Does the prefab change?
   The other bars? Right-click the moved crate's **Position** → **Apply to Prefab 'Juice
   Stand Orange'**: what now?
4. Undo all three (**Ctrl+Z**, or right-click → **Revert**).

The rule: a change goes **down** (base → variants → instances), never up, until you
**Apply** it, and an override (bold) always beats what comes from above.

- Press **Play**: four bars along the sea, rings and tags facing you whatever you do with
  the Scene view.

### Commit

*Add the Juice Stand, its four variants, the Build Spot and the Table.*

### Challenge

Make a fifth variant, `Juice Stand Lemon`, with a jug of your choice and a yellow till
mat. Then look at `Juice Stand Lemon.prefab` in GitHub Desktop: how much of the bar is in
the file? (Only the overrides: a variant stores what's different.)

# Part 2 — The Juice Bar

## C# 5 — ScriptableObjects

**Goal:** you can write your own ScriptableObject classes, make and fill in their assets,
share one asset between many objects, keep play-time changes out of them, and choose
between a ScriptableObject, a prefab, a plain class and a file for a piece of data
(Associate: Programming — choose GameObject properties, scripts and components for a
task).

### Idea — data as an asset

Level 3's *Kinds of Classes* taught you to recognise a ScriptableObject: a class built on
`ScriptableObject`, whose objects are **assets** in the Project, like a material or a
sound. Now you write your own.

A ScriptableObject holds **data that many things share**: the stats of one kind of kart,
the rules of a card, the price of an upgrade. In an asset, instead of in fields on every
object, it has **one place to change it** (ten karts read one asset: change its top speed
once, and all ten change), **one copy in memory**, and **one Inspector** where a designer
can tune it without opening a scene or a script.

### Idea — writing one

```csharp
using UnityEngine;

// What one kind of kart can do. Every kart of this kind reads the same asset.
[CreateAssetMenu(fileName = "New Kart Stats", menuName = "Karts/Kart Stats")]
public class KartStats : ScriptableObject
{
    [SerializeField] string displayName = "Kart";
    [SerializeField] float topSpeed = 20f;
    [SerializeField] float acceleration = 8f;
    [SerializeField, Range(0f, 1f)] float grip = 0.8f;

    public string DisplayName { get { return displayName; } }
    public float TopSpeed { get { return topSpeed; } }
    public float Acceleration { get { return acceleration; } }
    public float Grip { get { return grip; } }
}
```

- `: ScriptableObject` instead of `: MonoBehaviour`, and the file is named after the
  class, `KartStats.cs`, as a MonoBehaviour's is.
- `[CreateAssetMenu]` adds it to the **Create** menu: `menuName` is where it appears, and
  `fileName` is the name a new asset starts with.
- The fields are `[SerializeField]`, so the Inspector edits them; the properties only have
  a `get`, so any script can read the stats, and none can change them by accident.

### Idea — making assets, and using them

**Assets → Create → Karts → Kart Stats** (or **Create** in the Project window's
right-click menu) makes a `New Kart Stats` asset. Rename it `Speedy Stats`, fill it in in
the Inspector, and make a `Heavy Stats` beside it.

A MonoBehaviour uses one through a `[SerializeField]` field: drag an asset into it.

```csharp
using UnityEngine;

public class Kart : MonoBehaviour
{
    [SerializeField] KartStats stats;

    float speed;    // this kart's own speed, right now: it belongs here, not in the asset

    void Update()
    {
        speed = Mathf.MoveTowards(speed, stats.TopSpeed, stats.Acceleration * Time.deltaTime);
        transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }
}
```

Give five karts `Speedy Stats` and three `Heavy Stats`: there are still only two sets of
numbers. Raise **Top Speed** on `Speedy Stats` while playing, and all five speed up. When
you stop, the asset keeps the new value: quick for tuning, and also the trap below.

### Idea — methods and inheritance

A ScriptableObject can have methods and take part in inheritance (C# 8). A
tycoon's upgrades all differ, but each has a name and a cost, and does something to a stand:

```csharp
using UnityEngine;

public class JuiceStand : MonoBehaviour
{
    [SerializeField] float pricePerCup = 2f;

    public void MultiplyPrice(float factor)
    {
        pricePerCup *= factor;
    }
}
```

```csharp
using UnityEngine;

// What every upgrade has. It's abstract: each kind says what it does.
public abstract class Upgrade : ScriptableObject
{
    [SerializeField] string id;         // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] int cost = 50;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Cost { get { return cost; } }

    public abstract void ApplyTo(JuiceStand stand);
}
```

```csharp
using UnityEngine;

[CreateAssetMenu(fileName = "New Price Upgrade", menuName = "Juice/Price Upgrade")]
public class PriceUpgrade : Upgrade
{
    [SerializeField] float factor = 1.5f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplyPrice(factor);
    }
}
```

Only kinds you can make get `[CreateAssetMenu]`: there's no abstract `Upgrade` asset. A
field `Upgrade[] upgrades` accepts every kind, and `upgrade.ApplyTo(stand)` runs each one's
own version. And what changes is the **stand**, a scene object: the asset never does.

### Idea — the Play-mode trap

Change a scene object while playing, and it goes back when you stop. Change an asset, and
the change **stays after Play stops**. Here's the mistake, on purpose: sales in an asset.

```csharp
using UnityEngine;

// Wrong on purpose: cupsSold changes while playing, so it doesn't belong in an asset.
[CreateAssetMenu(fileName = "New Stand Data", menuName = "Juice/Stand Data")]
public class StandData : ScriptableObject
{
    [SerializeField] int cupsSold;

    public int CupsSold { get { return cupsSold; } }

    public void SellCup()
    {
        cupsSold++;
    }
}
```

```csharp
[SerializeField] StandData data;

void Start()
{
    data.SellCup();
    data.SellCup();
    Debug.Log($"Cups sold: {data.CupsSold}");
}
```

```
Cups sold: 2
```

That's the first Play. Stop, and press Play again:

```
Cups sold: 4
```

Select the asset while stopped: **Cups Sold** says 4. Edit and save anything on it, and
the 4 goes into its file, a change in Git you never meant to make. A build is worse: it
starts from whatever the asset held when you built it, and forgets every sale when it
quits. The game behaves one way in the Editor and another in the build.

The rule: **an asset holds data that doesn't change while playing.** Whatever changes
belongs on the object it describes: the cups sold on the `JuiceStand`, a kart's speed on
the `Kart`. When a value needs a starting point from the asset, copy it in `Awake`
(`stock = data.StartingStock;`) and change the copy.

### Idea — which one, for which data?

| Use a… | When the data… | For example |
| --- | --- | --- |
| **ScriptableObject** | is shared by many things, set by a designer, and doesn't change while playing | kart stats, card rules, an upgrade's price |
| **prefab** | is a thing in the scene: GameObjects, components, looks | the kart itself, a juice stand, a card's view |
| **plain C# class** | belongs to one object, or is made in code while playing | a lap time, a race result, one row of a high-score table |
| **JSON file** (or PlayerPrefs) | changes while playing and must still be there after quitting | the money, the unlocked upgrades, the best times (C# 14) |

Three questions decide it. Does it change while playing? Then not a ScriptableObject.
Must it outlive quitting? Then a file. Does it need a place in the scene? Then a prefab.

### Idea — a library of everything

A game often needs **all** of its items in one place: for a shop, or to turn the ids in a
save file back into assets. Keep them in one more asset, a library:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Every upgrade in the game. A save file keeps upgrade ids; the library turns
// an id back into its upgrade.
[CreateAssetMenu(fileName = "Upgrade Library", menuName = "Juice/Upgrade Library")]
public class UpgradeLibrary : ScriptableObject
{
    [SerializeField] Upgrade[] upgrades;

    Dictionary<string, Upgrade> upgradesById;   // built the first time it's needed

    public IReadOnlyList<Upgrade> Upgrades { get { return upgrades; } }

    public bool TryGetUpgrade(string id, out Upgrade upgrade)
    {
        if (upgradesById == null)
        {
            upgradesById = new Dictionary<string, Upgrade>();
            foreach (Upgrade each in upgrades)
            {
                upgradesById.Add(each.Id, each);
            }
        }
        return upgradesById.TryGetValue(id, out upgrade);
    }

    // A change in the Inspector rebuilds the lookup the next time it's used.
    void OnValidate()
    {
        upgradesById = null;
    }
}
```

A `Dictionary` finds a value by its key at once, where a loop would check every upgrade in
turn; `TryGetValue` returns `false` for an id it doesn't know, instead of failing; and
`IReadOnlyList` lets a shop read the list but not change it: C# 6 has more.

### Do it

1. Make `KartStats`, `Kart`, two assets, and five karts (cubes will do) sharing them.
   Change **Top Speed** while playing, then stop: did it stay? Try a kart's **Transform**.
2. Make `JuiceStand`, `Upgrade` and `PriceUpgrade`, and two price upgrades with different
   factors. Look for **Upgrade** in the **Create** menu: why isn't it there?
3. Make `StandData` and the test above, and press Play three times. Then fix it: move
   `cupsSold` and `SellCup` to `JuiceStand`, and play three times again.
4. For five pieces of data in your own game, choose a ScriptableObject, a prefab, a plain
   class or a file, and give the reason in one line each.

### Challenge

Add a `SpeedUpgrade` (a stand makes cups faster) without changing `Upgrade`. Then write a
`Shop` that logs every upgrade in an `UpgradeLibrary` with its cost, and applies one chosen
by id, with a `Debug.LogWarning` for an id the library doesn't know.

## C# 6 — Choosing Collections and Types

**Goal:** you can choose an array, a `List`, a `Dictionary`, a `Queue` or a `Stack` for a
job, use each one's main methods, and choose the right type for every value you store
(Associate: Programming — choose data structures: lists, arrays, dictionaries; choose
data types: floats, bools, strings).

### Idea — arrays and lists, again

You've used both since Levels 1 and 2. An **array** has a fixed size (`lanes.Length`); a
**`List<T>`** grows and shrinks (`hand.Count`, `Add`, `Remove`, `Clear`). Choose an array
when the number never changes while playing, such as four grid slots set in the
Inspector, and a List when things come and go, such as the cards in a hand. Both find
things **by position**, `hand[0]`: to find one by a name or an id, you'd have to look
through every item. That's the next collection's job.

### Idea — Dictionary: a value for each key

A `Dictionary<TKey, TValue>` stores **pairs**: a key, and the value that goes with it,
like a menu that pairs each juice with its price. Give it a key, and it finds the value
at once, however many pairs it holds. Each key appears only once.

| Member | When the key is new | When the key is already there |
| --- | --- | --- |
| `prices.Add("Mango", 5)` | adds the pair | throws an exception |
| `prices["Mango"] = 5` | adds the pair | replaces the value, quietly |
| `prices["Mango"]` (reading) | throws an exception | gives the value |
| `prices.TryGetValue("Mango", out int price)` | `false`, and `price` is 0 | `true`, and the value |
| `prices.ContainsKey("Mango")` | `false` | `true` |
| `prices.Remove("Mango")` | `false` | removes the pair, `true` |

`Count` says how many pairs there are; `Keys` and `Values` hold every key and every
value. The exception from `Add` is
`ArgumentException: An item with the same key has already been added. Key: Mango`.
That's useful: use `Add` when a second pair with the same key would be a **bug** you
want to hear about, such as two cards with the same id. Use the indexer when replacing is
what you mean, such as a kart's latest lap time.

### Idea — reading safely with TryGetValue

Reading a missing key with `prices["Cherry"]` throws
`KeyNotFoundException: The given key 'Cherry' was not present in the dictionary.`,
and the rest of the method doesn't run. `TryGetValue` never throws. It returns a `bool`,
and puts the value in an **`out`** variable: `out` means *the method fills this variable
in for you*. `out int price` declares the variable right there, in the call. When the key
is missing, it holds its type's default: 0 for an `int`, `null` for a class. (Use
`ContainsKey` when you only need yes or no; `ContainsKey` and then `prices[key]` would
look the key up twice.)

```csharp
Dictionary<string, int> prices = new Dictionary<string, int>();
prices["Lemonade"] = 3;
prices["Mango"] = 5;

if (prices.TryGetValue("Mango", out int price))
{
    Debug.Log($"Mango costs {price}");
}
if (!prices.TryGetValue("Cherry", out int cherryPrice))
{
    Debug.Log($"No cherry juice here ({cherryPrice})");
}
Debug.Log(prices.ContainsKey("Lemonade"));
```

```
Mango costs 5
No cherry juice here (0)
True
```

### Idea — counting, and going through a dictionary

"How many of each?" is a dictionary's favourite question: the thing is the key, and its
count is the value. A `foreach` over a dictionary gives you each pair as a
`KeyValuePair<TKey, TValue>`, with a `.Key` and a `.Value`:

```csharp
string[] deck = { "Spark", "Shield", "Spark", "Heal", "Spark", "Shield" };
Dictionary<string, int> counts = new Dictionary<string, int>();
foreach (string card in deck)
{
    counts.TryGetValue(card, out int n);    // n is 0 the first time
    counts[card] = n + 1;
}

int most = 0;
foreach (KeyValuePair<string, int> pair in counts)
{
    most = Mathf.Max(most, pair.Value);
}

List<string> names = new List<string>(counts.Keys);
names.Sort();
foreach (string name in names)
{
    Debug.Log($"{name} x{counts[name]}");
}
Debug.Log($"{counts.Count} kinds, at most {most} of one");
```

```
Heal x1
Shield x2
Spark x3
3 kinds, at most 3 of one
```

The same two lines count laps per kart or sales per juice. And a dictionary has **no
order**: to show its keys in order, copy them into a `List` and `Sort` it.

> **Watch out:** adding to a dictionary inside a `foreach` over it throws an exception.
> Loop over a copy of the keys instead: `foreach (string card in new List<string>(counts.Keys))`.

### Idea — Queue and Stack

| | `Queue<T>`: first in, first out, like a line | `Stack<T>`: last in, first out, like a pile of plates |
| --- | --- | --- |
| Put one in | `Enqueue(item)`, at the back | `Push(item)`, on top |
| Take one out | `Dequeue()`, from the front | `Pop()`, from the top |
| Look without taking | `Peek()`, the front | `Peek()`, the top |
| Use it for | a draw pile; customers waiting; the waypoints a kart visits in turn | a discard pile; an undo list; a pool of sleeping objects (C# 15) |

```csharp
Queue<string> customers = new Queue<string>();
customers.Enqueue("Ana");
customers.Enqueue("Ben");
customers.Enqueue("Cleo");
Debug.Log($"Next up: {customers.Peek()}");
string served = customers.Dequeue();
Debug.Log($"Served {served}, {customers.Count} waiting");

Stack<string> undo = new Stack<string>();
undo.Push("Built a stand");
undo.Push("Bought a blender");
undo.Push("Raised the price");
Debug.Log($"Undo: {undo.Pop()}");
Debug.Log($"Still to undo: {undo.Peek()}");
```

```
Next up: Ana
Served Ana, 2 waiting
Undo: Raised the price
Still to undo: Bought a blender
```

> **Watch out:** `Dequeue`, `Pop` and `Peek` on an empty queue or stack throw an exception,
> `InvalidOperationException: Queue empty.` (or `Stack empty.`). Check `Count > 0` first.

### Idea — IReadOnlyList: look, don't touch

A results screen needs to read the finishing order, but shouldn't change it. A public
`List` would let any script `Add`, `Remove` or `Clear` it. Hand out an
**`IReadOnlyList<T>`**: it has `Count`, `[i]` and `foreach`, and nothing that changes the
list. An array can be handed out the same way.

```csharp
using System.Collections.Generic;
using UnityEngine;

public class Race : MonoBehaviour
{
    readonly List<string> finishers = new List<string>();

    // Others can read the finishing order; only Race can change it.
    public IReadOnlyList<string> Finishers
    {
        get { return finishers; }
    }

    public void Finish(string driver)
    {
        if (!finishers.Contains(driver))
        {
            finishers.Add(driver);
        }
    }
}
```

Another script's `race.Finishers.Add("Zed");` doesn't compile: error CS1061, because an
`IReadOnlyList` has no `Add` (C# 19 reads that error in full).

### Idea — choosing data types deliberately

| The value | Type | Why |
| --- | --- | --- |
| how many: coins, cards, laps, health points | `int` | whole numbers, exact, safe to compare with `==` |
| time, speed, positions, a share such as 0.75 | `float` | needs the part after the point; `Time.deltaTime` and `Vector3` use `float`s |
| yes or no: paused, unlocked | `bool` | two values only; name it as a question, `isPaused` |
| names, ids, text on the screen | `string` | letters as well as digits |
| one of a fixed set: a card's kind, a fruit | an `enum` | the compiler checks the spelling |

A `float` is close, not exact: `0.1f` is really 0.100000001…, and the tiny errors add
up. So money kept in a `float` drifts, and health compared with `==` misses:

```csharp
float money = 0f;
int pennies = 0;
float health = 1f;
for (int i = 0; i < 10; i++)
{
    money += 0.1f;          // ten sales at 0.10
    pennies += 10;          // the same, in whole pennies
    health -= 0.1f;         // ten hits of 0.1
}
Debug.Log(money == 1f);
Debug.Log(pennies == 100);
Debug.Log(health == 0f);
Debug.Log(health <= 0f);
```

```
False
True
False
True
```

| Wrong choice | What goes wrong | Choose instead |
| --- | --- | --- |
| money as a `float` | the total drifts, and `==` fails | an `int` of the smallest coin |
| health as a `float`, checked with `== 0f` | the kart never explodes | an `int`, or `<= 0f` |
| an id as an `int` | a later card id such as `"frost-bolt"` won't fit, and changing the type breaks old saves | a `string`, from the start |
| a `string` for a fixed set: `"Heavy"` | `"heavy"` compiles, and never matches | an `enum`: `KartClass.Heavy` |
| two `bool`s, `isEasy` and `isHard` | both can be true at once | an `enum Difficulty { Easy, Normal, Hard }` |

### Idea — which collection?

| Situation | Choose | Because |
| --- | --- | --- |
| the cards in a player's hand | `List<Card>` | it grows and shrinks |
| the draw pile, in shuffled order | `Queue<Card>` | first in, first out |
| the discard pile, last card on top | `Stack<Card>` | last in, first out |
| every card, found by its id when a save loads | `Dictionary<string, Card>` | one lookup by key |
| the four starting grid slots, set in the Inspector | `Transform[]` | the number never changes |
| the waypoints an AI kart visits once, in order | `Queue<Transform>` | take the next when it arrives |
| each driver's best lap time | `Dictionary<string, float>` | a value for each name |
| customers waiting at a juice stand | `Queue<Customer>` | the first to arrive is served first |
| the upgrades bought, so Undo takes back the latest | `Stack<Upgrade>` | the latest comes off first |
| the finishing order, for the results screen | `IReadOnlyList<string>` | others read it, never change it |

### Do it

1. In a `Practice` script, make a price list for three juices. Log two prices, and one
   juice that isn't on the menu, with `TryGetValue`. Then read the missing one with
   `prices["…"]`, and read the exception in the Console.
2. Call `Add` twice with the same key, and read the exception. Change the second call
   to the indexer, and log the value: which one won?
3. Put three empty GameObjects in a scene as waypoints, and `Enqueue` them in `Start`.
   In `Update`, move a cube towards `Peek()` with `Vector3.MoveTowards`, and `Dequeue`
   when it arrives. Stop when the queue is empty.

### Challenge

A juice stand has a `Queue<string>` of customers, each wanting one fruit, and a
`Dictionary<string, int>` of stock. Serve them in order. A customer whose fruit has run
out leaves, and is counted in a second dictionary of missed sales. At the end, log the
stock left and the missed sales in alphabetical order. Then say why you chose each type.

## Chapter 4 — Fruit in Your Hands

**Goal:** the first thing you do in the game. Oranges appear in the Orange Bar's crate, one
every 1.2 seconds, up to twelve. Stand on the crate's mat, and they hop into your hands,
one at a time, stacking up in front of your chest, until your hands hold four. You run
with your arms out, as someone carrying a stack does.

### Idea — what a thing is, and the thing itself

An orange in your hands and an orange in the crate are two GameObjects, but they're the
same **kind** of thing: same name, same model, same height in a pile. C# 5
put that split in two words: the **data** (an asset, one per kind) and the **instance**
(a GameObject, as many as there are oranges).

| What | Is | How many |
| --- | --- | --- |
| `ItemInfo` | a ScriptableObject: an item's id, name, kind, prefab, height, picture | one per kind: 10 |
| `Item` | a MonoBehaviour on the prefab: "I am one of these", and how to hop | one per orange on the beach |
| `BarInfo` | a ScriptableObject: a bar's fruit, cup, price, and how fast it makes things | one per bar: 4 |

The numbers come from the designer's balance sheet, `BALANCE.md` in your Student Files.
Read its first two tables now. When the designer changes a price, you change one asset,
and no code.

### Idea — a pile is a Stack

Oranges in a crate, cups on a tray, notes on a counter, the stack in your hands: all
**piles**, and a pile works one way. The last thing put on top is the first taken off. You
never pull an orange from the bottom of a stack in your arms. C# 6 named
that collection: a **`Stack<T>`**. `Push` puts one on, `Pop` takes the top one off,
`Peek` looks at it. One `ItemPile` script does every pile in the game:

- **Where** each item sits: in rows and layers, worked out from its index. A crate's pile
  is 3 × 3 to a layer; your hands are 1 × 1, a tower.
- **What** it holds: one kind at a time. Oranges, or orange juice, never both: `CanAdd`
  says no to a second kind.
- **How** an item gets there: it **hops**, from wherever it was to its place, in a quarter
  of a second, along an arc. An orange that teleported into your hands would be hard to
  follow; one that hops tells you what happened.

And your **hands** are just a pile with a script beside it, `Carrier`, that stations will
trade with. Chapter 10's runners get the same hands.

### Idea — where items come from

`Instantiate` makes an orange; `Destroy` gets rid of one. A busy beach makes and destroys
hundreds an hour, and Chapter 17 will show what that costs. So that Chapter 17 can fix it
in one place, nothing calls `Instantiate` or `Destroy` for an item but one object: the
**Item Pool**. Today it does just that: `Get` instantiates, `Release` destroys. Chapter 17
makes it keep them.

### Do it — the items' data

1. In `Scripts`, two folders: `Items` and `Bar`. In `Items`, a script `ItemKind`:

```csharp:ItemKind.cs
// What an item is, for the hands that carry it and the stations that take it.
public enum ItemKind
{
    Fruit,
    Cup,
    EmptyCup,
    Cash
}
```

<!-- check: together -->

2. And `ItemInfo`:

```csharp:ItemInfo.cs
using UnityEngine;

// One kind of item: an orange, a cup of orange juice, an empty cup, a note.
// Data from the designer's sheet, the same while playing; an orange in the
// world is an Item, made from the prefab.
[CreateAssetMenu(fileName = "New Item", menuName = "Juice/Item Info")]
public class ItemInfo : ScriptableObject
{
    [SerializeField] string id;
    [SerializeField] string displayName;
    [SerializeField] ItemKind kind;
    [SerializeField] Item prefab;
    [SerializeField] float height = 0.3f;   // how much higher the next one sits in a pile
    [SerializeField] Sprite icon;           // for the order bubbles

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public ItemKind Kind { get { return kind; } }
    public Item Prefab { get { return prefab; } }
    public float Height { get { return height; } }
    public Sprite Icon { get { return icon; } }
}
```

   It needs `Item`, which doesn't exist yet: the next step adds it. Unity shows an error
   until then.

3. `Item`, in `Items`. It hops with a **coroutine**: every frame, a little further along a
   straight line, plus an arc. `4h · t(1 − t)` is 0 at both ends and `h` in the middle: a
   hop `h` high.

```csharp
using System.Collections;
using UnityEngine;

// One orange, cup or note in the world. It hops from pile to pile: HopTo makes
// it a child of where it's going and jumps it there, in a quarter of a second.
// Value is a note's dollars; the other items leave it at 0.
public class Item : MonoBehaviour
{
    public const float HopSeconds = 0.25f;
    const float HopHeight = 0.9f;

    [SerializeField] ItemInfo info;

    Coroutine hopping;

    public ItemInfo Info { get { return info; } }
    public int Value { get; set; }

    public void HopTo(Transform parent, Vector3 localPosition)
    {
        transform.SetParent(parent, true);
        if (hopping != null)
        {
            StopCoroutine(hopping);
        }
        hopping = StartCoroutine(Hop(localPosition));
    }

    // Along a straight line, plus an arc; and it turns upright as it goes.
    IEnumerator Hop(Vector3 target)
    {
        Vector3 start = transform.localPosition;
        Quaternion startTurn = transform.localRotation;
        float t = 0f;
        while (t < 1f)
        {
            t = Mathf.Min(t + Time.deltaTime / HopSeconds, 1f);
            Vector3 position = Vector3.Lerp(start, target, t);
            position.y += 4f * HopHeight * t * (1f - t);
            transform.localPosition = position;
            transform.localRotation = Quaternion.Slerp(startTurn, Quaternion.identity, t);
            yield return null;
        }
        hopping = null;
    }
}
```

<!-- check: end -->

4. Read it:
   - `SetParent(parent, true)`: the item becomes a child of its new pile, and **keeps its
     place in the world** (the `true`) for now. Then it hops in the parent's own space
     (`localPosition`), to its place in the pile. When your hands move, the oranges in
     them move with you: they're your children.
   - Hopping again before the last hop has landed (an orange taken from a pile it was
     still hopping onto) stops the old coroutine first, so two hops never fight.
   - `Value` is an **auto-property**: a field and its property in one line. Only notes use
     it (Chapter 6).
5. In `Bar`, `BarInfo`:

```csharp:BarInfo.cs
using UnityEngine;

// One bar's numbers from the designer's balance sheet: its fruit and its cup,
// what a cup sells for, and how fast the crate and the machine are.
[CreateAssetMenu(fileName = "New Bar", menuName = "Juice/Bar Info")]
public class BarInfo : ScriptableObject
{
    [SerializeField] string id;             // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] ItemInfo fruit;
    [SerializeField] ItemInfo cup;
    [SerializeField] int price = 5;         // dollars a cup
    [SerializeField] float crateSeconds = 1.5f;
    [SerializeField] float machineSeconds = 2f;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public ItemInfo Fruit { get { return fruit; } }
    public ItemInfo Cup { get { return cup; } }
    public int Price { get { return price; } }
    public float CrateSeconds { get { return crateSeconds; } }
    public float MachineSeconds { get { return machineSeconds; } }
}
```

6. In `Data/Items`, **Create → Juice → Item Info**, ten times, from the balance sheet's
   first table: `Orange`, `Apple`, `Banana`, `Coconut`, `Orange Juice`, `Apple Juice`,
   `Banana Smoothie`, `Coconut Water`, `Empty Cup` and `Note`. Fill in each one's **Id**,
   **Display Name**, **Kind** and **Height**, and drag its picture from `Art/Icons` into
   **Icon** (`Art/Icons/Orange` for the orange, and so on). **Prefab** waits for the next
   steps.
7. In `Data/Bars`, **Create → Juice → Bar Info**, four times, from the second table:
   `Orange Bar` (**Id** `orange-bar`, **Fruit** `Orange`, **Cup** `Orange Juice`, **Price**
   `5`, **Crate Seconds** `1.2`, **Machine Seconds** `1.6`), `Apple Bar`, `Smoothie Bar`
   and `Coconut Bar`.

### Do it — the items' prefabs

8. **The materials** the cups and notes need. In `Art/Materials`, seven more URP Lit
   materials, **Smoothness** `0.15`:

| Material | Base Map colour |
| --- | --- |
| `Orange Juice` | `#FF9A1F` |
| `Apple Juice` | `#E8C547` |
| `Banana Smoothie` | `#FFE48A` |
| `Coconut Water` | `#F2EEDF` |
| `Empty Cup` | `#D9D4CB` |
| `Note` | `#3FA34D` |
| `Note Band` | `#E7F5E3` |

9. **The orange.** An empty GameObject, `Orange`, at (0, 0, 0), with **Item**: its
   **Info** is `Data/Items/Orange`. Drag `Art/Food/Orange` into it, a child. The model's
   middle is its origin, so it sits half in the ground: set its **Position Y** to `0.14`,
   and its bottom touches the item's origin. A pile stacks items by their origins, so
   every item's bottom must be there. Drag `Orange` into `Prefabs/Items`, and delete it
   from the scene.
10. The other fruit the same way, each with its own **Info**:

| Prefab | Model | Model's Position |
| --- | --- | --- |
| `Apple` | `Art/Food/Apple` | (0, 0.15, 0) |
| `Banana` | `Art/Food/Banana` | (−0.03, 0.12, 0.01) |
| `Coconut` | `Art/Food/Coconut` | (0, 0.15, 0) |

11. **A cup.** An empty `Orange Juice`, with **Item** (**Info** `Orange Juice`), and
    `Art/Food/Soda` inside it at (0, 0, 0): its origin is already its bottom. Its
    **Mesh Renderer** has several **Materials**: find the one called `Red` (the soda's
    colour), and drag `Art/Materials/Orange Juice` onto it. A cup of orange juice. Into
    `Prefabs/Items`. Then `Apple Juice`, `Banana Smoothie`, `Coconut Water` and `Empty
    Cup` the same way, each with its own material in place of `Red`.
12. **A note.** An empty `Note`, with **Item** (**Info** `Note`), and two cubes inside it,
    with their **Box Colliders** removed: `Paper` at (0, 0.035, 0), **Scale** (0.46, 0.07,
    0.26), material `Note`; and `Band` at the same place, **Scale** (0.1, 0.072, 0.262),
    `Note Band`. A green bundle with a paper band round it. Into `Prefabs/Items`.
13. Back to the data: drag each prefab into its **Item Info**'s **Prefab**. The info knows
    its prefab, and the prefab knows its info: an orange can tell you what it is, and the
    crate can make a new one from the info alone.

### Do it — piles, hands and the pool

14. In `Items`, `ItemPile`:

```csharp:ItemPile.cs
using System.Collections.Generic;
using UnityEngine;

// A pile of items in rows and layers: a crate's oranges, a juicer's cups, a
// counter's cups, a pile of notes, your hands. It's a Stack: the last item put
// on is the first taken off, as with any real pile. A pile holds one kind of
// item at a time: oranges, or orange juice, never both.
public class ItemPile : MonoBehaviour
{
    [SerializeField] int capacity = 12;
    [SerializeField] int columns = 1;
    [SerializeField] int rows = 1;
    [SerializeField] float spacing = 0.35f;

    readonly Stack<Item> items = new Stack<Item>();

    public int Count { get { return items.Count; } }
    public bool IsEmpty { get { return items.Count == 0; } }
    public bool IsFull { get { return items.Count >= capacity; } }

    // The tray upgrade makes your hands hold more.
    public int Capacity
    {
        get { return capacity; }
        set { capacity = value; }
    }

    // What's on top: what the pile holds, or null when it's empty.
    public ItemInfo TopInfo
    {
        get { return items.Count > 0 ? items.Peek().Info : null; }
    }

    public bool CanAdd(ItemInfo info)
    {
        return !IsFull && (IsEmpty || TopInfo == info);
    }

    // The item hops from wherever it is to its place on top.
    public void Add(Item item)
    {
        Vector3 place = PlaceFor(items.Count, item.Info.Height);
        items.Push(item);
        item.HopTo(transform, place);
    }

    public Item Take()
    {
        return items.Pop();
    }

    // The top item, left where it is: a full cash pile adds to its top note.
    public Item Peek()
    {
        return items.Peek();
    }

    // Where the item at this index sits: across, back, then up a layer.
    Vector3 PlaceFor(int index, float height)
    {
        int perLayer = columns * rows;
        int layer = index / perLayer;
        int inLayer = index % perLayer;
        int column = inLayer % columns;
        int row = inLayer / columns;
        float x = (column - (columns - 1) / 2f) * spacing;
        float z = (row - (rows - 1) / 2f) * spacing;
        return new Vector3(x, layer * height, z);
    }
}
```

15. Read `PlaceFor`. Number the places 0, 1, 2…: a layer holds `columns × rows` of them.
    `index / perLayer` (whole-number division) is the layer, `index % perLayer` (the
    remainder) the place in it, then its column and row. `(column − (columns − 1) / 2f)`
    centres the columns on the pile: with 3 columns, −1, 0 and 1. Each layer is
    `height` higher: an orange's 0.3, a note's 0.07.
16. `ItemPool`, in `Items`, for now:

```csharp
using UnityEngine;

// Where items come from and where they go. For now, Get makes a new one and
// Release destroys it; Chapter 17 makes it a real pool, and nothing that uses
// it changes.
public class ItemPool : MonoBehaviour
{
    public Item Get(ItemInfo info, Vector3 position)
    {
        return Instantiate(info.Prefab, position, Quaternion.identity);
    }

    public void Release(Item item)
    {
        Destroy(item.gameObject);
    }

    // After its hop has landed: an orange hopping into a juicer goes when it's in.
    public void Release(Item item, float delay)
    {
        Destroy(item.gameObject, delay);
    }
}
```

17. In `Scripts/Chef`, `Carrier`:

```csharp:Carrier.cs
using UnityEngine;

// Hands: a pile in front of the chest. The chef has them, and so does each
// runner. A station trades with a Carrier and doesn't ask whose hands they
// are; only the cash and the build spots, which are for the chef alone,
// check IsChef. A helper shuts its hands while it walks, so it trades only
// where it was sent, not at every mat it crosses on the way.
public class Carrier : MonoBehaviour
{
    [SerializeField] ItemPile hands;
    [SerializeField] bool isChef;

    public ItemPile Hands { get { return hands; } }
    public bool IsChef { get { return isChef; } }
    public bool IsCarrying { get { return !hands.IsEmpty; } }
    public bool HandsOpen { get; set; } = true;

    public bool CanTake(ItemInfo info)
    {
        return hands.CanAdd(info);
    }
}
```

   `HandsOpen` stays true for the chef: Chapter 10's helpers shut theirs while they walk.

18. Open the `Chef` prefab. Add an empty child, `Hands`, at (0, 1, 0.45): in front of his
    chest. Give it an **Item Pile**: **Capacity** `4`, **Columns** `1`, **Rows** `1`,
    **Spacing** `0`. Add a **Carrier** to `Chef`: **Hands** is `Hands`, tick **Is Chef**.
19. An empty GameObject in the scene, `Item Pool`, with **Item Pool**.

### Do it — the crate

20. In `Bar`, `JuiceStand`, small for now: a bar knows its numbers.

```csharp
using UnityEngine;

// One bar: the Orange Bar, the Apple Bar. It knows its BarInfo; it will grow a
// price, a speed and its stations.
public class JuiceStand : MonoBehaviour
{
    [SerializeField] BarInfo info;

    public BarInfo Info { get { return info; } }
}
```

21. And `FruitCrate`. It makes a fruit every few seconds, and while a Carrier stands in its
    trigger, it gives them one every 0.15 s:

```csharp
using UnityEngine;

// A crate that fills by itself: Produce adds a fruit every few seconds until
// it's full. Stand by it, with empty hands or hands of the same fruit, and
// the fruit hops onto your pile, one at a time.
[RequireComponent(typeof(Collider))]
public class FruitCrate : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile fruit;
    [SerializeField] ItemPool pool;
    [SerializeField] int startWith = 6;
    [SerializeField] float tradeSeconds = 0.15f;

    Carrier visitor;        // whoever stands on the mat, or null
    float nextFruit;
    float nextTrade;

    void Start()
    {
        for (int i = 0; i < startWith; i++)
        {
            Produce();
        }
        nextFruit = Time.time + stand.Info.CrateSeconds;
    }

    void Update()
    {
        if (Time.time >= nextFruit)
        {
            nextFruit = Time.time + stand.Info.CrateSeconds;
            if (!fruit.IsFull)
            {
                Produce();
            }
        }
        if (visitor != null && Time.time >= nextTrade)
        {
            nextTrade = Time.time + tradeSeconds;
            Trade(visitor);
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier))
        {
            visitor = carrier;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && carrier == visitor)
        {
            visitor = null;
        }
    }

    void Produce()
    {
        fruit.Add(pool.Get(stand.Info.Fruit, fruit.transform.position));
    }

    void Trade(Carrier carrier)
    {
        if (!fruit.IsEmpty && carrier.CanTake(stand.Info.Fruit))
        {
            carrier.Hands.Add(fruit.Take());
        }
    }
}
```

22. Read it:
    - Two timers, both `Time.time` compared with the time of the next thing. No
      coroutines, no `InvokeRepeating`: you can see both in one `Update`.
    - `TryGetComponent(out Carrier carrier)`: "does what walked in have a Carrier?" Sand
      and customers don't; the chef does. `out` hands back the component when it's there.
    - The trade is the whole game in three lines: there's fruit, the hands can take this
      fruit (empty, or the same fruit, and not full), so the top fruit hops from the
      crate's pile to the hands' pile. `Take` pops it off one stack; `Add` pushes it onto
      the other and makes it hop.
23. Open the `Juice Stand` prefab. Add **Juice Stand** to its root. On `Crate`, add a
    **Box Collider**: tick **Is Trigger**, **Center** (0, 1, 0), **Size** (1.4, 2, 1.4),
    the mat's size, up to the chef's head. Add **Fruit Crate**: **Stand** is the root,
    **Fruit** is `Crate/Fruit`. On `Crate/Fruit`, an **Item Pile**: **Capacity** `12`,
    **Columns** `3`, **Rows** `3`, **Spacing** `0.34`. **Pool** stays empty: a prefab
    asset can't point at an object in a scene.
24. Open each variant and set its **Juice Stand**'s **Info**: `Juice Stand Orange` gets
    `Orange Bar`, and so on. An override each.
25. In the scene, select each of the four bars' `Crate`, and drag `Item Pool` into its
    **Pool**: an override on the instance, bold, as C# 4 showed. The prefab
    can't know the scene; its instances in the scene can.

### Do it — arms out

26. Open the `Person` controller. Two more **Parameters**: `Pace`, a **Float**, and
    `Carrying`, a **Bool**. Drag `Walk_Carry` (from `Chef_Male`) in, and rename the state
    `Carry`. In its Inspector, tick **Multiplier**'s **Parameter**, and choose `Pace`: the
    clip plays at speed `Pace`. At 1 it walks with arms out; at 0 it holds still, arms
    still out.
27. Transitions, each with no **Has Exit Time** and a **Transition Duration** of `0.15`:
    `Idle` → `Carry` and `Walk` → `Carry` on `Carrying` **true**; `Carry` → `Idle` on
    `Carrying` **false**.
28. Open the `Chef` override controller: the list now has `Walk_Carry` too. Choose
    `Run_Carry` beside it.
29. The final `Chef` script: it tells the Animator two more things.

```csharp:Chef.cs
using UnityEngine;
using UnityEngine.InputSystem;

// You: the juice maker. The Move action (WASD, the arrows, a gamepad's stick,
// and the thumb stick on the screen, which pretends to be a gamepad's) sets
// the Rigidbody's velocity. The chef turns to face the way it walks, and tells
// its Animator how fast it goes and whether its hands are full.
[RequireComponent(typeof(Rigidbody))]
public class Chef : MonoBehaviour
{
    static readonly int SpeedId = Animator.StringToHash("Speed");
    static readonly int PaceId = Animator.StringToHash("Pace");
    static readonly int CarryingId = Animator.StringToHash("Carrying");

    [SerializeField] InputActionReference move;
    [SerializeField] Animator animator;
    [SerializeField] Carrier carrier;
    [SerializeField] float speed = 4.5f;                // metres a second
    [SerializeField] float turnDegreesPerSecond = 720f;

    Rigidbody body;
    Vector3 velocity;

    // The flip-flops make you faster.
    public float Speed
    {
        get { return speed; }
        set { speed = value; }
    }

    void Awake()
    {
        body = GetComponent<Rigidbody>();
    }

    // An action reads nothing until it's switched on. Controls switches whole
    // maps on and off for the panels; the chef makes sure its own action is on.
    void OnEnable()
    {
        move.action.Enable();
    }

    // Read the input every frame; move the body in FixedUpdate, with the physics.
    void Update()
    {
        Vector2 input = Vector2.ClampMagnitude(move.action.ReadValue<Vector2>(), 1f);
        // The camera looks north: up on the stick walks into the screen, along z.
        velocity = new Vector3(input.x, 0f, input.y) * speed;
        float moving = velocity.magnitude;
        animator.SetFloat(SpeedId, moving);
        animator.SetFloat(PaceId, moving > 0.1f ? 1f : 0f);
        animator.SetBool(CarryingId, carrier.IsCarrying);
    }

    // The Rigidbody's rotation is frozen, so bumping into a counter can't spin
    // the chef; he turns only here, towards the way he's walking.
    void FixedUpdate()
    {
        body.linearVelocity = new Vector3(velocity.x, body.linearVelocity.y, velocity.z);
        if (velocity.sqrMagnitude > 0.01f)
        {
            Quaternion facing = Quaternion.LookRotation(velocity);
            body.MoveRotation(Quaternion.RotateTowards(body.rotation, facing, turnDegreesPerSecond * Time.fixedDeltaTime));
        }
    }
}
```

30. On the `Chef` prefab, drag `Chef`'s own **Carrier** into its **Carrier**.

### Test it

- **Play**. Six oranges are piled in the Orange Bar's crate, and one more comes every 1.2
  seconds, up to twelve: three by three, then a layer above.
- Walk onto the crate's mat. The oranges hop, one every 0.15 s, from the top of the crate
  to your chest, and stack up: four, then no more. Your arms go out, and you run with them
  out. Stand still: you hold the stack, not swinging your arms.
- Walk to the Apple Bar's crate with your oranges: nothing hops. `CanAdd` says no to a
  second kind of fruit. (Nothing takes fruit from you yet: the next chapter's juicer
  will.)
- Pause (**Ctrl+Shift+P**) and look in the Hierarchy: the oranges in your hands are
  children of `Chef/Hands`, and the ones in the crate of `Crate/Fruit`. Hopping changed
  their parent.
- Select `Data/Bars/Orange Bar`, and change **Crate Seconds** to `0.2` while playing:
  the crate fills almost at once. Data, changed with no code. (A ScriptableObject changed
  in Play mode **stays** changed: set it back to `1.2`.)

### Commit

*Add the items, the piles, the chef's hands and the crates.*

### Challenge

Give the chef a **Drop** action (the **Q** key): it takes the top item off his hands,
lets it fall where he stands (`pool.Release`), and does nothing when his hands are empty.
Where does the Item Pool come from in the chef's script? Is a field you drag it into the
only way?

## Chapter 5 — The Juicer

**Goal:** juice. Carry oranges to the juicer and they drop into it. A ring above it fills,
and every 1.6 seconds a cup of orange juice hops onto its tray. Pick the cups up, carry
them to the till, and they go onto the counter, ready to sell.

### Idea — a machine is a timer

A juicer holds a number, not oranges: the oranges that go in hop into the top and are
gone (put back in the pool once they've landed). While that number is above 0 and the
tray isn't full, `progress` counts from 0 to 1 over the bar's **Machine Seconds**. At 1:
one fruit fewer, one cup more, and back to 0.

```
fruit 3, progress 0.00 ──1.6 s──▶ fruit 2, a cup on the tray, progress 0.00 ──▶ …
```

The **ring** shows `progress`: an Image whose **Image Type** is **Filled**, with **Fill
Amount** from 0 to 1, drawn as a slice of a circle (**Radial 360**). In its middle, the
fruit still waiting.

How fast is the machine? `BarInfo` says 1.6 s, but Chapter 9's upgrades will make it
faster, so the juicer doesn't read `BarInfo` itself: it asks the bar, `stand.SecondsPerCup`.
Today the bar answers with its info's number. Later it'll answer with something else, and
the juicer won't change.

### Do it — the bar's speed, and the ring

1. Add one property to `JuiceStand`:

<!-- check: add to JuiceStand -->
```csharp
public class JuiceStand : MonoBehaviour
{
    // … as before …

    // How long the machine takes for a cup. Upgrades will make it faster.
    public float SecondsPerCup { get { return info.MachineSeconds; } }
}
```

2. In `Bar`, `ProgressRing`:

```csharp:ProgressRing.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The ring above a machine: how far the next cup is, and how much fruit waits.
public class ProgressRing : MonoBehaviour
{
    [SerializeField] Image fill;
    [SerializeField] TMP_Text fruitText;

    int shownFruit = -1;

    public void Show(float done, int fruit)
    {
        fill.fillAmount = done;
        if (fruit != shownFruit)     // a new string only when the number changes
        {
            shownFruit = fruit;
            fruitText.text = fruit.ToString();
        }
    }
}
```

   `Show` is called every frame. A number's `ToString()` makes a new string, and a new
   string is memory the garbage collector has to clear up later; so it makes one only when
   the number changes. Chapter 20 measures why that matters.

3. Open the `Juice Stand` prefab. On `Juicer/Ring`, add **Progress Ring**: **Fill** is
   `Fill`, **Fruit Text** is `Fruit`. Set `Fill`'s **Fill Amount** back to `0`.

### Do it — the juicer

4. In `Bar`, `Juicer`:

```csharp
using UnityEngine;

// A juicer, a blender or a coconut cutter: the same script with other numbers.
// Stand by it with fruit and it takes them. While it has fruit, it makes a cup
// every few seconds onto its tray. Stand by it with empty hands, or with the
// same cups, to pick the cups up.
[RequireComponent(typeof(Collider))]
public class Juicer : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile cups;         // the tray
    [SerializeField] Transform hopper;      // where the fruit goes in
    [SerializeField] ItemPool pool;
    [SerializeField] ProgressRing ring;
    [SerializeField] int fruitCapacity = 6;
    [SerializeField] float tradeSeconds = 0.15f;

    Carrier visitor;        // whoever stands on the mat, or null
    float nextTrade;
    int fruit;
    float progress;         // 0 to 1: how far the next cup is

    void Update()
    {
        if (fruit > 0 && !cups.IsFull)
        {
            progress += Time.deltaTime / stand.SecondsPerCup;
            if (progress >= 1f)
            {
                progress = 0f;
                fruit--;
                cups.Add(pool.Get(stand.Info.Cup, hopper.position));
            }
        }
        ring.Show(progress, fruit);
        if (visitor != null && Time.time >= nextTrade)
        {
            nextTrade = Time.time + tradeSeconds;
            Trade(visitor);
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier))
        {
            visitor = carrier;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && carrier == visitor)
        {
            visitor = null;
        }
    }

    void Trade(Carrier carrier)
    {
        ItemPile hands = carrier.Hands;
        if (hands.TopInfo == stand.Info.Fruit && fruit < fruitCapacity)
        {
            Item item = hands.Take();
            item.HopTo(hopper, Vector3.zero);
            pool.Release(item, Item.HopSeconds);     // it goes in, then it's juice
            fruit++;
        }
        else if (!cups.IsEmpty && carrier.CanTake(stand.Info.Cup))
        {
            hands.Add(cups.Take());
        }
    }
}
```

5. Read `Trade`. One method, two trades, in order: fruit in your hands goes **in** first;
   once your hands are empty (or hold this bar's cups), cups come **out**. Stand on the
   mat with four oranges, and they go in one by one; then the cups the machine has made
   come to you. An orange goes in by hopping to the hopper's own origin
   (`Vector3.zero`), and `pool.Release(item, Item.HopSeconds)` waits a quarter of a second
   (the hop) before it goes. `Item.HopSeconds` is a `const`: one number, used by the item
   and by everyone who needs to wait for it.
6. In the `Juice Stand` prefab, on `Juicer`: a **Box Collider**, **Is Trigger**, **Center**
   (0, 1, 0), **Size** (1.4, 2, 1.4). **Juicer**: **Stand** the root, **Cups**
   `Juicer/Model/Tray`, **Hopper** `Juicer/Model/Hopper`, **Ring** `Juicer/Ring`. On
   `Tray`, an **Item Pile**: **Capacity** `8`, **Columns** `2`, **Rows** `2`, **Spacing**
   `0.28`.
7. **A second juicer**, for later: duplicate the finished `Juicer`, call it `Juicer 2`,
   **Position** (1.6, 0, 2.95), and untick it. A duplicate's references to its own
   children follow the copy: its **Juicer** points at its own `Tray`, `Hopper` and `Ring`.
   In the Smoothie and Coconut variants, set its jugs as you set the first juicer's. The
   Orange Bar will get it from a build spot (Chapter 7).

### Do it — the counter takes cups

8. In `Bar`, `Counter`, for now:

```csharp
using UnityEngine;

// The counter. The till mat behind it is its trigger: stand on it, and your
// cups go onto the counter, one at a time.
[RequireComponent(typeof(Collider))]
public class Counter : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile cups;
    [SerializeField] float tradeSeconds = 0.15f;

    Carrier visitor;        // whoever stands on the till mat, or null
    float nextTrade;

    void Update()
    {
        if (visitor != null && Time.time >= nextTrade)
        {
            nextTrade = Time.time + tradeSeconds;
            Trade(visitor);
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier))
        {
            visitor = carrier;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && carrier == visitor)
        {
            visitor = null;
        }
    }

    void Trade(Carrier carrier)
    {
        if (carrier.Hands.TopInfo == stand.Info.Cup && !cups.IsFull)
        {
            cups.Add(carrier.Hands.Take());
        }
    }
}
```

9. In the prefab, on `Counter`: a trigger **Box Collider** like the juicer's, and
   **Counter**: **Stand** the root, **Cups** `Counter/Cups`. On `Cups`, an **Item Pile**:
   **Capacity** `12`, **Columns** `4`, **Rows** `2`, **Spacing** `0.3`.
10. In the scene, the juicers need the **Item Pool**, like the crates. Type `t:Juicer` in
    the Hierarchy's search box: all eight juicers (four bars, two each, the unticked ones
    too). Select them all, and drag `Item Pool` into **Pool** once. Clear the search.

### Test it

- **Play**. Pick up four oranges, and walk onto the Orange Bar's juicer mat: they hop up
  into the machine, one by one, and the ring says 4. The orange arc goes round the ring;
  a cup of orange juice hops onto the tray; the ring says 3.
- Stay on the mat with empty hands: each new cup hops into your hands. Go to the till
  mat (yellow, behind the counter): your cups hop onto the counter, 4 to a row, 2 rows.
- Leave four oranges in the machine, and go for more: it keeps working while you're
  away, up to 8 cups on its tray, and stops when the tray is full. That's the loop of
  the game: crate, machine, counter, again.
- Go to the Apple Bar's juicer with oranges: nothing. Its `Trade` asks for apples.

### Commit

*Add the juicer, its ring, and the counter.*

### Challenge

`FruitCrate`, `Juicer` and `Counter` each have the same fields (`visitor`, `nextTrade`,
`tradeSeconds`), the same `OnTriggerEnter` and `OnTriggerExit`, and the same timer in
`Update`: three copies, about twenty lines each. Mark them in all three files. Then
think: if a runner and the chef stand on the same mat, what happens to `visitor`? Write
down your answer: Chapter 7 fixes both, once.

## C# 7 — UI in Depth

**Goal:** you can build a screen that fits every shape, from a wide phone to a tablet, with
the Canvas Scaler, anchors, pivots, layout groups and a scrolling list, and keep it up to
date without wasted work (Associate: UI — lay out UI with anchors, pivots and groups;
display data in UI elements).

### Idea — the Canvas's three render modes

| **Render Mode** | Drawn | Use it for |
| --- | --- | --- |
| **Screen Space - Overlay** | on top of everything, after the cameras have drawn | most menus and HUDs |
| **Screen Space - Camera** | by a camera, on a flat sheet **Plane Distance** in front of it | UI that effects must draw in front of |
| **World Space** | as an object in the world, with its own position, rotation and scale | a health bar over a kart, a price sign on a stand |

Nothing can be in front of an Overlay Canvas: sparks from a played card, or coins
bursting out of a juice stand, vanish behind the UI. In **Screen Space - Camera**, with
**Render Camera** set to the Main Camera, the Canvas sorts with everything that camera
draws, by **Sorting Layer** and **Order in Layer** like a sprite: give the effect a higher
**Order in Layer** (in its **Renderer** module) and it draws in front. With no camera, the
Inspector says "A Screen Space Canvas with no specified camera acts like an Overlay Canvas."

### Idea — the Canvas Scaler

On the Canvas, the **Canvas Scaler** decides how big the UI is on each screen:

| Setting | Set it to | Means |
| --- | --- | --- |
| **UI Scale Mode** | **Scale With Screen Size** | the UI grows and shrinks with the screen |
| **Reference Resolution** | 1920 × 1080 | the space you design in |
| **Screen Match Mode** | **Match Width Or Height** | what to keep when the screen isn't 16:9… |
| **Match** | 0.5 | …0 keeps the width, 1 the height, 0.5 meets halfway |

A screen of another shape can't keep both 1920 and 1080. Here is the space, in UI units,
that your Canvas really has on three shapes:

| Screen | Match 0 | Match 0.5 | Match 1 |
| --- | --- | --- | --- |
| 16:9 monitor | 1920 × 1080 | 1920 × 1080 | 1920 × 1080 |
| 20:9 phone | 1920 × 864 | 2147 × 966 | 2400 × 1080 |
| 4:3 tablet | 1920 × 1440 | 1663 × 1247 | 1440 × 1080 |

At 0.5 the phone is **wider and a little shorter** than your design: what's anchored to
the sides moves outwards, and a column that filled 1080 loses 114 units. The tablet is
**narrower and taller**: side panels move inwards, and a row of buttons 1800 wide no
longer fits. Keep what must always show inside about 1660 × 960 in the middle, and anchor the
rest to the edges.

> **Note:** phones also have notches and rounded corners. uGUI 2.6's **Safe Area**
> component (**Add Component → UI (Canvas) → Safe Area**) shrinks a panel to the part of
> the screen that's safe to use.

### Idea — anchors: a point or a stretch

A Rect Transform's **anchors** are two points, **Min** and **Max**, given as fractions of
the parent: (0, 0) is its bottom-left corner, (1, 1) its top-right.

| Anchors | The element | The Rect Transform shows |
| --- | --- | --- |
| together: a **point** (Min = Max) | keeps its distance from that point, and its size | **Pos X**, **Pos Y**, **Width**, **Height** |
| apart across: a **stretch** | stretches with the parent's width | **Left** and **Right**, instead of Pos X and Width |
| apart up and down | stretches with the parent's height | **Top** and **Bottom**, instead of Pos Y and Height |

Left, Right, Top and Bottom are **offsets**, from each edge to its anchor: a top bar
stretched across, with Left and Right at 20, is 20 units from both sides on any screen.
In code they're `offsetMin` and `offsetMax`; a point's `anchoredPosition` and `sizeDelta`.

The **anchor presets** (the square at the top left of the Rect Transform) set common
anchors in one click. Hold **Shift** to set the pivot too, and **Alt** (**Option** on a
Mac) to move the element there as well.

### Idea — pivots: where it grows from

The **pivot** is the point an element rotates and scales around, from (0, 0), its
bottom-left corner, to (1, 1). A row of buttons along the bottom of a menu, each growing
when the pointer is over it, shows why it matters: with the pivot in the middle,
(0.5, 0.5), a button grows downwards too, off the bottom of the screen. With the pivot on
its bottom edge, (0.5, 0), the bottom stays put and the button grows upwards.

```csharp
using UnityEngine;

// Pointer Enter and Pointer Exit in an Event Trigger call these. The button grows
// from its pivot: put the pivot at (0.5, 0) and it grows upwards, away from the
// screen's edge.
public class HoverGrow : MonoBehaviour
{
    const float HoverScale = 1.2f;

    public void Grow()
    {
        transform.localScale = Vector3.one * HoverScale;
    }

    public void Shrink()
    {
        transform.localScale = Vector3.one;
    }
}
```

A layout group ignores its children's scale (unless **Use Child Scale** is ticked), so a
growing button doesn't push its neighbours. C# 9 shows a way to do it with no
Event Trigger.

### Idea — layout groups

Put a layout group on a parent, and it places the children for you, in their order in the
Hierarchy: a **Horizontal Layout Group** in a row, a **Vertical Layout Group** in a
column, a **Grid Layout Group** in rows and columns of equal cells.

| Setting | Does |
| --- | --- |
| **Padding** | space inside the parent's edges: Left, Right, Top, Bottom |
| **Spacing** | the gap between children; negative, and they overlap |
| **Child Alignment** | where the children sit when they don't fill the parent, such as **Lower Center** |
| **Control Child Size** | the group sets the children's width or height, from their Layout Elements |
| **Child Force Expand** | spare space is shared out between the children |
| **Cell Size**, **Constraint** (Grid only) | every cell's size; **Fixed Column Count** keeps, say, 5 per row |

A row of buttons is a Horizontal Layout Group, a shop's list of upgrades a Vertical one,
a deck builder's collection of cards a Grid. The group owns its children's positions: their Rect Transform
fields go grey and say they're driven by it, so don't set them from code either.

Two more components fine-tune a layout:

- A **Layout Element**, on a child, tells the group about it: **Ignore Layout** leaves it
  out altogether (a glow behind the chosen button), and **Min**, **Preferred** and
  **Flexible** **Width** and **Height** say what size it wants when the group controls it.
- A **Content Size Fitter**, on the parent, resizes the parent to fit what's inside:
  **Vertical Fit: Preferred Size** makes a list exactly as tall as its rows.

### Idea — a list that scrolls

**GameObject → UI (Canvas) → Scroll View** makes a ready-made list:

| Object | Has | Does |
| --- | --- | --- |
| `Scroll View` | **Scroll Rect** | moves the content when you drag or scroll |
| `Viewport` | **Mask** and an Image | the window: content outside it is hidden |
| `Content` | (you add the layout) | the long list that moves |

For a vertical list, untick the Scroll Rect's **Horizontal**, and give `Content` a
**Vertical Layout Group** and a **Content Size Fitter** (**Vertical Fit: Preferred
Size**). Each row you add makes `Content` taller, and the scroll range follows. On the
`Viewport`, you can swap the Mask and its Image for a **Rect Mask 2D**: it clips to a
rectangle without an Image, and costs less.

### Idea — nested Canvases

Unity rebuilds a Canvas's drawing whenever anything in it changes, so a timer that changes
every frame rebuilds the whole screen around it every frame. Give the part that changes
often its own **Canvas** component (a **nested Canvas**): its changes rebuild only it. If
it has buttons, give it a **Graphic Raycaster** too. Split by how often things change: a
Canvas for every element costs more, not less.

### Idea — showing data only when it changes

Setting `text` in `Update` makes a new string and rebuilds the Canvas sixty times a second,
even when the number is the same. Set it when the value changes instead:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A juice stand's stock, as a number and a bar. The stand calls Show when its
// stock changes; nothing here runs every frame.
public class StockDisplay : MonoBehaviour
{
    [SerializeField] TMP_Text stockText;
    [SerializeField] Image stockBar;        // Image Type: Filled

    public void Show(int stock, int capacity)
    {
        stockText.text = $"{stock} / {capacity}";
        stockBar.fillAmount = (float)stock / capacity;
    }
}
```

When you must check every frame, compare with what's on screen first. A race clock
changes its text once a second, not sixty times:

```csharp
[SerializeField] TMP_Text clockText;

float raceTime;
int shownSeconds = -1;

void Update()
{
    raceTime += Time.deltaTime;
    int seconds = Mathf.FloorToInt(raceTime);
    if (seconds != shownSeconds)
    {
        shownSeconds = seconds;
        clockText.text = $"{seconds / 60}:{seconds % 60:00}";
    }
}
```

Layout settings can change from code too. A row of item icons that overlaps them once it
holds more than five, so it never grows wider:

```csharp
const int MaxIconsSideBySide = 5;
const float NormalSpacing = 10f;
const float OverlapSpacing = -30f;

[SerializeField] HorizontalLayoutGroup itemRow;

void ArrangeItems(int itemCount)
{
    itemRow.spacing = itemCount > MaxIconsSideBySide ? OverlapSpacing : NormalSpacing;
}
```

### Idea — Image types

| **Image Type** | Does | Use it for |
| --- | --- | --- |
| **Simple** | stretches the whole picture (tick **Preserve Aspect** to stop squashing) | icons, portraits |
| **Sliced** | a **9-slice**: corners keep their size, edges stretch one way, the middle both | panels, buttons and frames of any size, from one small sprite |
| **Tiled** | repeats the picture | patterns |
| **Filled** | shows part of it: **Fill Method**, **Fill Origin**, **Fill Amount** | bars, and round cooldowns with **Radial 360** |

A 9-slice needs the sprite's **border**: click **Open Sprite Editor** in the sprite's
Inspector, and drag the green lines in from each edge (or type **L**, **T**, **R**, **B**).
Without one, the Image's Inspector warns: "This Image doesn't have a border."

### Idea — test every shape

- **The Game view's aspect menu** (it starts as **Free Aspect**): try **16:9 Aspect** and
  **4:3 Aspect**, and add your own with **+**, such as an aspect ratio of 20 × 9.
- **The Device Simulator**: switch the Game view's **Game** menu to **Simulator** (or
  **Window → General → Device Simulator**), pick a phone and a tablet, and rotate them.
  It shows the notch and the safe area too.

On each: is anything cut off, overlapping, or too small to read or press?

### Do it

1. Set a Canvas's Canvas Scaler as above. Anchor a button to each corner, a bar
   stretched across the top, and a panel in the middle. Check 16:9, 4:3 and 20:9.
2. Make a row of five Images under a Horizontal Layout Group. Try **Spacing** −40,
   **Child Alignment** **Lower Center**, and **Child Force Expand** on and off.
3. Add `HoverGrow` to one Image, with an **Event Trigger** calling `Grow` and `Shrink`.
   Try its pivot at (0.5, 0.5), then at (0.5, 0).
4. Make a Scroll View with twenty rows in a Vertical Layout Group and a Content Size
   Fitter. Swap the Viewport's Mask for a Rect Mask 2D.
5. Make a panel from a small sprite with **Image Type: Sliced**, and give the sprite a
   border. Stretch the panel: the corners should stay sharp.

### Challenge

Build a shop screen: a title bar stretched across the top, a money counter anchored top
right, and a scrolling grid of items (a Grid Layout Group with **Fixed Column Count**)
that has three columns on a tablet and four on a phone. Set the count from code when the
screen starts, from the Canvas's width in UI units: its Rect Transform's `rect.width`.

## Chapter 6 — Customers and Cash

**Goal:** people. They stroll along the boardwalk, turn up the beach to the Orange Bar, and
queue. The one at the front shows a bubble: the cup it wants, and how many. Stand at the
till with cups on the counter, and they're served, a cup at a time; each cup sold leaves
a note on the cash mat. Walk over the notes, and the money at the top of the screen goes
up.

### Idea — a visit is a state machine

A customer does one thing at a time, and what it does next depends on what it's doing now.
That's a **state machine**: an `enum` of states, a field holding the current one, and a
`switch` that decides what happens when something finishes.

| State | What it does | What ends it | Next |
| --- | --- | --- | --- |
| `Arriving` | walks along the boardwalk, then up to its bar | it gets there | `Queueing` |
| `Queueing` | walks to its place in the queue, and waits | it reaches the front | `Ordering` |
| `Ordering` | faces the till, shows its bubble | it has every cup it wants | `Leaving` |
| `Leaving` | steps aside, walks down to the boardwalk and away | it gets to the end | back in the spawner's pool |

Walking is its own job, in its own script: a **Walker** walks a list of points, one after
another, and raises an event, `Arrived`, at the last one. The customer listens, and its
`switch` decides what's next. Chapter 10's helpers and Chapter 11's kart walk with the
same script.

### Idea — a queue is a Queue

Customers queue the way a `Queue<T>` works (C# 6): `Enqueue` joins at the
back, `Dequeue` leaves from the front, `Peek` looks at the front without removing anyone.
First come, first served, and nobody pushes in. The counter keeps the queue, and six
empty GameObjects (Chapter 3's `Queue/Spot 1`… `Spot 6`) mark where each place is. When
the front one is served, everyone moves up a spot.

A queue can't be read by index (`queue[2]` doesn't compile): it's only a front and a back.
To visit everyone in it, `foreach` goes from front to back.

### Idea — the money

Selling is a chain of **events** (C# 2), each script knowing only the next:

```
Counter: the front customer has every cup ──▶ stand.Sell(cups)
JuiceStand.Sell ──▶ CupSold(price), once per cup
    CashPile listens ──▶ a note on the mat, worth the price
the chef walks over the mat ──▶ wallet.Add(note's value)
Wallet ──▶ MoneyChanged(money)
    MoneyText listens ──▶ "$35" at the top
```

The counter doesn't know there's a cash pile; the wallet doesn't know there's a screen.
Chapter 17 adds floating numbers and a coin sound by listening to the same events, and
changes none of these scripts.

The money is an `int`, as C# 2's coins were. And the screen shows it short:
`999`, then `1.25K`, `12.5K`, `125K`, `1.25M`: always three figures, as idle games do.

### Do it — walking

1. In `Scripts`, a folder `People`. In it, `Walker`:

```csharp:Walker.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// Walks a path: a Queue of points, taken one at a time, at a steady speed,
// turning to face the way it goes. It tells its Animator how fast, and raises
// Arrived at the end of the path. Customers, helpers and the kart use it.
public class Walker : MonoBehaviour
{
    static readonly int SpeedId = Animator.StringToHash("Speed");
    static readonly int PaceId = Animator.StringToHash("Pace");

    [SerializeField] float speed = 2.4f;               // metres a second
    [SerializeField] float turnDegreesPerSecond = 540f;
    [SerializeField] Animator animator;                 // none on the kart

    readonly Queue<Vector3> path = new Queue<Vector3>();

    public bool IsWalking { get { return path.Count > 0; } }
    public float Speed { get { return speed; } }

    public event Action Arrived;

    public void WalkTo(params Vector3[] points)
    {
        path.Clear();
        foreach (Vector3 point in points)
        {
            path.Enqueue(point);
        }
    }

    public void FaceTowards(Vector3 point)
    {
        Vector3 direction = point - transform.position;
        direction.y = 0f;
        if (direction.sqrMagnitude > 0.001f)
        {
            transform.rotation = Quaternion.LookRotation(direction);
        }
    }

    void Update()
    {
        if (path.Count == 0)
        {
            Animate(0f);
            return;
        }
        Vector3 target = path.Peek();
        target.y = transform.position.y;
        Vector3 direction = target - transform.position;
        float step = speed * Time.deltaTime;
        if (direction.magnitude <= step)
        {
            transform.position = target;
            path.Dequeue();
            if (path.Count == 0)
            {
                Animate(0f);
                Arrived?.Invoke();
            }
            return;
        }
        transform.position += direction.normalized * step;
        transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(direction),
            turnDegreesPerSecond * Time.deltaTime);
        Animate(speed);
    }

    void Animate(float moving)
    {
        if (animator != null)
        {
            animator.SetFloat(SpeedId, moving);
            animator.SetFloat(PaceId, moving > 0.1f ? 1f : 0f);
        }
    }
}
```

2. Read it:
   - `WalkTo(params Vector3[] points)`: `params` lets you call it with any number of
     points, `WalkTo(a)` or `WalkTo(a, b, c)`, and they arrive as one array. It clears
     the old path first: a new order replaces the last.
   - `Update` walks towards the first point in the queue, `speed` metres a second. When
     the step would overshoot it, it lands on it exactly and takes the next. No Rigidbody,
     no physics: customers walk through each other, and nobody minds.
   - `Arrived` is raised once, at the end of the whole path.

### Do it — the customer

3. `CustomerState`, in `People`:

```csharp
// Where a customer is in its visit.
public enum CustomerState
{
    Arriving,       // along the boardwalk to its bar
    Queueing,       // in the queue, behind someone
    Ordering,       // at the front: the bubble shows what it wants
    Leaving
}
```

4. `OrderBubble`:

```csharp:OrderBubble.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The bubble over a customer's head: the cup it wants, and how many more.
public class OrderBubble : MonoBehaviour
{
    [SerializeField] Image icon;
    [SerializeField] TMP_Text count;

    public void Show(Sprite cup, int stillWanted)
    {
        gameObject.SetActive(true);
        icon.sprite = cup;
        count.text = stillWanted.ToString();
    }

    public void Hide()
    {
        gameObject.SetActive(false);
    }
}
```

5. The next three scripts need each other: `Customer` calls the counter, the counter
   calls the customer and the bar. Unity shows errors until all three are saved.

<!-- check: together -->

`Customer`, in `People`:

```csharp
using System;
using UnityEngine;

// One customer's visit, as a state machine: in from the boardwalk, into a
// queue, an order at the front, then home. The counter moves it up the queue
// and serves it. When it has gone, Left tells the spawner it can come back as
// someone else.
public class Customer : MonoBehaviour
{
    static readonly int CarryingId = Animator.StringToHash("Carrying");

    [SerializeField] Walker walker;
    [SerializeField] ItemPile hands;
    [SerializeField] OrderBubble bubble;
    [SerializeField] Animator animator;

    CustomerState state;
    Counter counter;
    ItemPool pool;
    Vector3 exit;
    Vector3 spot;           // its place in the queue
    bool isFront;
    int wanted;

    public CustomerState State { get { return state; } }
    public bool IsReady { get { return state == CustomerState.Ordering; } }
    public bool HasEverything { get { return hands.Count >= wanted; } }
    public int CupsWanted { get { return wanted; } }

    public event Action<Customer> Left;

    void OnEnable()
    {
        walker.Arrived += OnArrived;
    }

    void OnDisable()
    {
        walker.Arrived -= OnArrived;
    }

    // The spawner sends it in at one end of the boardwalk, to leave by the other.
    public void Visit(Counter chosen, ItemPool items, Vector3 entrance, Vector3 leaveBy)
    {
        counter = chosen;
        pool = items;
        exit = leaveBy;
        wanted = UnityEngine.Random.Range(1, 4);
        transform.position = entrance;
        bubble.Hide();
        animator.SetBool(CarryingId, false);
        state = CustomerState.Arriving;
        walker.WalkTo(new Vector3(counter.Entry.x, 0f, entrance.z), counter.Entry);
        counter.Join(this);
    }

    // The counter says where its place is, and whether it's at the front.
    public void GoToSpot(Vector3 place, bool atFront)
    {
        spot = place;
        isFront = atFront;
        if (state == CustomerState.Queueing)
        {
            walker.WalkTo(spot);     // moving up
        }
    }

    public void Receive(Item cup)
    {
        hands.Add(cup);
        animator.SetBool(CarryingId, true);
        bubble.Show(counter.Stand.Info.Cup.Icon, wanted - hands.Count);
    }

    // Paid and served: home, by the boardwalk.
    public void Served()
    {
        bubble.Hide();
        state = CustomerState.Leaving;
        Vector3 aside = counter.Aside;
        walker.WalkTo(aside, new Vector3(aside.x, 0f, exit.z), exit);
    }

    void OnArrived()
    {
        switch (state)
        {
            case CustomerState.Arriving:
                state = CustomerState.Queueing;
                walker.WalkTo(spot);
                break;
            case CustomerState.Queueing:
                if (isFront)
                {
                    state = CustomerState.Ordering;
                    walker.FaceTowards(counter.Till);
                    bubble.Show(counter.Stand.Info.Cup.Icon, wanted);
                }
                break;
            case CustomerState.Leaving:
                Left?.Invoke(this);
                break;
        }
    }

    void Update()
    {
        if (state == CustomerState.Ordering && !isFront)
        {
            state = CustomerState.Queueing;     // can't happen, but never wait at the front by mistake
        }
        else if (state == CustomerState.Queueing && isFront && !walker.IsWalking)
        {
            OnArrived();                        // moved up to the front while standing still
        }
    }

    // Gone home: anything still in its hands goes back to the pool.
    public void EmptyHands()
    {
        while (!hands.IsEmpty)
        {
            pool.Release(hands.Take());
        }
    }
}
```

`Counter`, again: now it keeps the queue, and serves while you stand at the till.

```csharp
using System.Collections.Generic;
using UnityEngine;

// The counter, its till and its queue. The till mat behind the counter is its
// trigger: stand on it and your cups go onto the counter. While you stand at
// the till, the customer at the front of the queue is served, one cup at a
// time. Customers wait in a Queue: first come, first served.
[RequireComponent(typeof(Collider))]
public class Counter : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile cups;
    [SerializeField] Transform entry;           // where this bar's customers leave the boardwalk
    [SerializeField] Transform aside;           // where they step out of the queue, served
    [SerializeField] Transform[] queueSpots;    // the front first
    [SerializeField] float serveSeconds = 0.35f;
    [SerializeField] float tradeSeconds = 0.15f;

    readonly Queue<Customer> queue = new Queue<Customer>();
    Carrier visitor;        // whoever stands on the till mat, or null
    float nextTrade;
    float nextServe;

    public JuiceStand Stand { get { return stand; } }
    public int CupCount { get { return cups.Count; } }
    public int QueueLength { get { return queue.Count; } }
    public bool IsFull { get { return queue.Count >= queueSpots.Length; } }
    public bool IsServing { get { return visitor != null; } }
    public Vector3 Entry { get { return entry.position; } }
    public Vector3 Aside { get { return aside.position; } }
    public Vector3 Till { get { return transform.position; } }
    public Vector3 Front { get { return queueSpots[0].position; } }

    // A customer joins at the back.
    public void Join(Customer customer)
    {
        queue.Enqueue(customer);
        customer.GoToSpot(queueSpots[queue.Count - 1].position, queue.Count == 1);
    }

    void Update()
    {
        if (visitor != null && Time.time >= nextTrade)
        {
            nextTrade = Time.time + tradeSeconds;
            Trade(visitor);
        }
        if (queue.Count == 0 || !IsServing || cups.IsEmpty || Time.time < nextServe)
        {
            return;
        }
        Customer front = queue.Peek();
        if (!front.IsReady)
        {
            return;     // still walking up
        }
        nextServe = Time.time + serveSeconds;
        front.Receive(cups.Take());
        if (front.HasEverything)
        {
            queue.Dequeue();
            stand.Sell(front.CupsWanted);
            front.Served();
            MoveUp();
        }
    }

    // Everyone steps up a place. A Queue can't be read by index; foreach
    // visits it front to back.
    void MoveUp()
    {
        int place = 0;
        foreach (Customer customer in queue)
        {
            customer.GoToSpot(queueSpots[place].position, place == 0);
            place++;
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier))
        {
            visitor = carrier;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && carrier == visitor)
        {
            visitor = null;
        }
    }

    void Trade(Carrier carrier)
    {
        if (carrier.Hands.TopInfo == stand.Info.Cup && !cups.IsFull)
        {
            cups.Add(carrier.Hands.Take());
        }
    }
}
```

And `JuiceStand`, again: a price, its counter, and the events of a sale.

```csharp
using System;
using UnityEngine;

// One bar: the Orange Bar, the Apple Bar. It knows its BarInfo, its price and
// its speed, and its counter. The counter calls Sell, and CupSold tells the
// cash pile.
public class JuiceStand : MonoBehaviour
{
    [SerializeField] BarInfo info;
    [SerializeField] Counter counter;

    public BarInfo Info { get { return info; } }
    public Counter Counter { get { return counter; } }
    public bool IsOpen { get { return counter.gameObject.activeInHierarchy; } }

    // A cup's price now. Upgrades will change it.
    public int Price { get { return info.Price; } }

    // How long the machine takes for a cup. Upgrades will make it faster.
    public float SecondsPerCup { get { return info.MachineSeconds; } }

    public event Action<int> CupSold;           // the money for one cup
    public event Action<int> CustomerServed;    // the money for the whole order

    public void Sell(int cups)
    {
        int price = Price;
        for (int i = 0; i < cups; i++)
        {
            CupSold?.Invoke(price);
        }
        CustomerServed?.Invoke(cups * price);
    }
}
```

<!-- check: end -->

6. Read them together:
   - `Visit` sets the customer up for a whole new visit: `Random.Range(1, 4)` is 1, 2 or
     3 cups (an `int` range leaves out its top). `UnityEngine.Random`, because `using
     System;` brings in a `System.Random` too, and C# won't guess which you mean.
   - `Join` puts the customer at the back, and tells it where that is: `queue.Count − 1`,
     the spot after everyone already in the queue. Only the first is at the front.
   - The counter serves only when **everything** is true: someone's in the queue, someone
     stands at the till, there's a cup, it's been 0.35 s, and the front customer has
     finished walking up. The early `return`s say each "not yet" in a line.
   - `HasEverything`: the customer pays for the whole order at once. `Sell` raises
     `CupSold` once per cup (a note each), and `CustomerServed` once with the total.
     Nothing listens to `CustomerServed` yet: Chapter 12's trophies and Chapter 17's
     numbers will.
   - `IsOpen` is the counter's own `activeInHierarchy`: a bar is open when its counter is
     built. A spawner won't send anyone to a bar with no counter.

### Do it — the customer prefab

7. An empty GameObject, `Customer`, at (0, 0, 0). Add **Walker** (**Speed** `2.4`) and
   **Customer**.
8. A child `Hands` at (0, 1, 0.42), with an **Item Pile**: **Capacity** `3`, **Columns**
   and **Rows** `1`, **Spacing** `0`.
9. **The bubble.** A child World Space canvas, `Bubble`, at (0, 2.35, 0), 110 × 86,
   **Scale** 0.01, **Rotation** (55, 0, 0), with **Billboard**, over the customer's head.
   Inside:
   - `Back`: an Image stretched over it, `Art/Ground/Bubble`, white.
   - `Cup`: an Image anchored middle-left, **Pos** (8, 8), 54 × 54, any picture for now.
   - `Count`: a TextMeshPro anchored middle-right, **Pos** (−10, 8), 46 × 56, `2`, Lilita
     One, size 44, brown, centred.

   Add **Order Bubble** to `Bubble`: **Icon** `Cup`, **Count** `Count`. Untick `Bubble`:
   it shows itself when there's something to say.

10. On `Customer`: **Walker**'s **Animator** stays empty, and so does **Customer**'s:
    there's no body yet. **Hands** `Hands`, **Bubble** `Bubble`. Drag it into
    `Prefabs/People`, and delete it from the scene.
11. **The looks.** Right-click `Prefabs/People/Customer` → **Create → Prefab Variant**,
    `Customer Casual Male`. Open it, and drag `Art/Characters/Casual_Male` onto its root:
    rename the child `Model`, set its Animator's **Controller** to `Person`, untick **Apply
    Root Motion**, **Culling Mode** `Cull Update Transforms`. Drag `Model` into **Walker**'s
    and **Customer**'s **Animator**. A customer with a body.
12. Seven more variants the same way: `Customer Casual Female`, `Customer Casual2 Male`,
    `Customer Casual2 Female`, `Customer Casual3 Male`, `Customer Casual3 Female`,
    `Customer Suit Male` and `Customer OldClassy Female`, each with its model.

    Eight people, one prefab: change the bubble once, in `Customer`, and all eight change.

### Do it — the bar serves

13. Open the `Juice Stand` prefab. On the root's **Juice Stand**, drag `Counter` into
    **Counter**. On `Counter`'s **Counter**: **Entry** `Counter/Entry`, **Aside**
    `Counter/Aside`, and **Queue Spots**: set its size to `6` and drag `Spot 1` to `Spot 6`
    in, in order. (Or lock the Inspector with its padlock, select all six in the
    Hierarchy, and drag them onto the field's name.)
14. In the scene, untick the Apple, Smoothie and Coconut Bars' `Crate`, `Juicer` and
    `Counter`. They're not built yet (Chapter 7's build spots will build them), so they
    aren't open, and nobody queues at them.
15. `CustomerSpawner`, in `People`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Sends a customer to an open bar every few seconds, to the one with the
// shortest queue: the more bars are open, the more often. Customers come from
// a pool of a fixed size, so when all of them are on the beach, nobody else
// comes until one leaves.
public class CustomerSpawner : MonoBehaviour
{
    [SerializeField] Customer[] looks;
    [SerializeField] int poolSize = 16;
    [SerializeField] float secondsPerBar = 3f;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] ItemPool items;
    [SerializeField] Transform westEnd;     // the boardwalk's two ends
    [SerializeField] Transform eastEnd;

    readonly Stack<Customer> sleeping = new Stack<Customer>();
    float nextCustomer = 1f;

    void Awake()
    {
        for (int i = 0; i < poolSize; i++)
        {
            Customer customer = Instantiate(looks[i % looks.Length], transform);
            customer.gameObject.SetActive(false);
            customer.Left += OnLeft;
            sleeping.Push(customer);
        }
    }

    void Update()
    {
        if (Time.time < nextCustomer)
        {
            return;
        }
        int open = 0;
        Counter shortest = null;
        foreach (JuiceStand stand in stands)
        {
            if (!stand.IsOpen)
            {
                continue;
            }
            open++;
            if (!stand.Counter.IsFull && (shortest == null || stand.Counter.QueueLength < shortest.QueueLength))
            {
                shortest = stand.Counter;
            }
        }
        nextCustomer = Time.time + secondsPerBar / Mathf.Max(1, open);
        if (shortest == null || sleeping.Count == 0)
        {
            return;
        }
        bool fromWest = Random.value < 0.5f;
        Customer customer = sleeping.Pop();
        customer.gameObject.SetActive(true);
        customer.Visit(shortest, items,
            fromWest ? westEnd.position : eastEnd.position,
            fromWest ? eastEnd.position : westEnd.position);
    }

    void OnLeft(Customer customer)
    {
        customer.EmptyHands();
        customer.gameObject.SetActive(false);
        sleeping.Push(customer);
    }
}
```

16. Read it. Sixteen customers are made **once**, in `Awake`, switched off, and kept in a
    `Stack`. Sending one is `Pop` and switch it on; one that has left is switched off and
    pushed back. Nobody is instantiated or destroyed while you play: the spawner is a
    **pool** of people. (C# 6 chose a Stack for it: which sleeping
    customer comes next doesn't matter, and a Stack's `Push` and `Pop` are the cheapest
    there are.) `looks[i % looks.Length]` takes the eight looks in turn: two of each.
17. An empty GameObject, `Customers`, with **Customer Spawner**: **Looks** the eight
    variants, **Stands** the four bars (from the scene), **Items** `Item Pool`. Two empty
    children: `West End` at (−13, 0, −11.4) and `East End` at (13, 0, −11.4), the ends of
    the boardwalk, off the screen. Drag them into **West End** and **East End**.

### Do it — the cash

18. In `Scripts`, a folder `Business`. In it, `Wallet`:

```csharp:Wallet.cs
using System;
using UnityEngine;

// The money. The cash piles, the tables' tips, the kart and the trophies add
// to it; the build spots and the shops spend it. MoneyChanged tells whatever
// shows the money, or whose button depends on it. An int, as the shared
// chapters count coins: this game's money stays in the thousands and the
// millions, far from 2,147,483,647.
public class Wallet : MonoBehaviour
{
    public int Money { get; private set; }
    public int LifetimeEarned { get; private set; }     // never goes down, for the trophies

    public event Action<int> MoneyChanged;

    public void Add(int amount)
    {
        Money += amount;
        LifetimeEarned += amount;
        MoneyChanged?.Invoke(Money);
    }

    // True, and the money spent, only if there was enough.
    public bool TrySpend(int amount)
    {
        if (amount > Money)
        {
            return false;
        }
        Money -= amount;
        MoneyChanged?.Invoke(Money);
        return true;
    }

    // Loading a save.
    public void Restore(int money, int lifetimeEarned)
    {
        Money = money;
        LifetimeEarned = lifetimeEarned;
        MoneyChanged?.Invoke(Money);
    }
}
```

19. `TrySpend` is the only way to spend: it checks and spends in one call, and says
    whether it could. A build spot can't take money you don't have, because no code can.
    `Restore` is for loading a save (Chapter 14).
20. `NumberFormat`, in `Business`:

```csharp:NumberFormat.cs
using System;
using System.Globalization;

// Big numbers, short: 999, 1.25K, 12.5K, 125K, 1.25M, and so on up to Qi
// (quintillions), always three figures. The invariant culture keeps the
// point a point on every computer, whatever its language.
public static class NumberFormat
{
    static readonly string[] Suffixes = { "K", "M", "B", "T", "Qa", "Qi" };

    public static string Money(long value)
    {
        if (value < 0)
        {
            return "-" + Money(-value);
        }
        if (value < 1000)
        {
            return value.ToString(CultureInfo.InvariantCulture);
        }
        double shown = value;
        int suffix = -1;
        while (shown >= 1000 && suffix < Suffixes.Length - 1)
        {
            shown /= 1000;
            suffix++;
        }
        // Rounding can add a figure: 9.996K is 10.00K, and 999,999 is 1000K.
        double rounded = Math.Round(shown, Decimals(shown));
        if (rounded >= 1000 && suffix < Suffixes.Length - 1)
        {
            rounded = Math.Round(rounded / 1000, 2);
            suffix++;
        }
        return rounded.ToString(Format(Decimals(rounded)), CultureInfo.InvariantCulture) + Suffixes[suffix];
    }

    // How long you were away: "45 s", "12 min", "3 h 05 min".
    public static string Duration(double seconds)
    {
        if (seconds < 60)
        {
            return $"{(int)seconds} s";
        }
        int minutes = (int)(seconds / 60);
        if (minutes < 60)
        {
            return $"{minutes} min";
        }
        return $"{minutes / 60} h {minutes % 60:00} min";
    }

    // Three figures in all: two decimals under 10, one under 100, none above.
    static int Decimals(double shown)
    {
        if (shown < 10)
        {
            return 2;
        }
        if (shown < 100)
        {
            return 1;
        }
        return 0;
    }

    static string Format(int decimals)
    {
        if (decimals == 2)
        {
            return "0.00";
        }
        if (decimals == 1)
        {
            return "0.0";
        }
        return "0";
    }
}
```

21. Read `Money`: it divides by 1000 until the number is under 1000, counting the
    suffixes as it goes, then rounds to three figures. `CultureInfo.InvariantCulture`:
    on a computer set to French or Arabic, `1.25` would print as `1,25`; the invariant
    culture prints it the same everywhere. A `static class` can't be made with `new`; it's
    only a home for methods (C# 11 later says more). `Duration` is for Chapter
    15's "you were away for…".
22. `CashPile`, in `Bar`:

```csharp
using UnityEngine;

// Where a bar's money waits for you: a pile of notes, one for each cup sold.
// Only the chef collects it: walk over it and each note hops to you, into the
// Wallet. When the pile is full, the money goes on the top note.
[RequireComponent(typeof(Collider))]
public class CashPile : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile notes;
    [SerializeField] ItemInfo note;
    [SerializeField] ItemPool pool;
    [SerializeField] Wallet wallet;
    [SerializeField] float tradeSeconds = 0.04f;

    Carrier visitor;        // whoever stands on the mat, or null
    float nextTrade;

    void OnEnable()
    {
        stand.CupSold += AddNote;
    }

    void OnDisable()
    {
        stand.CupSold -= AddNote;
    }

    void AddNote(int dollars)
    {
        if (notes.IsFull)
        {
            notes.Peek().Value += dollars;
            return;
        }
        Item item = pool.Get(note, stand.Counter.transform.position + Vector3.up);
        item.Value = dollars;
        notes.Add(item);
    }

    void Update()
    {
        if (visitor != null && Time.time >= nextTrade)
        {
            nextTrade = Time.time + tradeSeconds;
            Trade(visitor);
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier))
        {
            visitor = carrier;
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && carrier == visitor)
        {
            visitor = null;
        }
    }

    void Trade(Carrier carrier)
    {
        if (!carrier.IsChef || notes.IsEmpty)
        {
            return;
        }
        Item item = notes.Take();
        wallet.Add(item.Value);
        item.HopTo(carrier.transform, Vector3.up * 1.2f);
        pool.Release(item, Item.HopSeconds);
    }
}
```

23. Read it. A note is an `Item` like an orange, and its `Value` is its dollars. Thirty
    notes fill the mat; after that each sale adds to the top note instead (`Peek`), so no
    money is lost and the pile stops growing. Collecting is fast, a note every 0.04 s, and
    for the chef alone: `IsChef`. The note hops to his chest and goes back to the pool;
    the money goes to the wallet.
24. An empty GameObject in the scene, `Wallet`, with **Wallet**.
25. In the `Juice Stand` prefab, on `Counter/Cash Pile`: a trigger **Box Collider**,
    **Center** (0, 1, 0), **Size** (1.2, 2, 1.2), the green mat's size. **Cash Pile**:
    **Stand** the root, **Notes** `Cash Pile/Notes`, **Note** `Data/Items/Note`. On
    `Notes`, an **Item Pile**: **Capacity** `30`, **Columns** `2`, **Rows** `2`, **Spacing**
    `0.3`. In the scene, select the four bars' `Cash Pile`s (search `t:CashPile`), and drag
    in `Item Pool` and `Wallet`.

### Do it — the money on the screen

26. In `Scripts`, a folder `Flow`. In it, `SafeArea`:

```csharp:SafeArea.cs
using UnityEngine;

// Keeps this rectangle inside the screen's safe area: clear of a phone's notch
// and rounded corners. Everything the player must read or tap goes inside it;
// the background can stay full-screen behind. It checks again when the safe
// area changes, as when a phone turns.
[RequireComponent(typeof(RectTransform))]
public class SafeArea : MonoBehaviour
{
    RectTransform rect;
    Rect applied;

    void Awake()
    {
        rect = GetComponent<RectTransform>();
        Apply();
    }

    void Update()
    {
        if (Screen.safeArea != applied)
        {
            Apply();
        }
    }

    // The safe area is in pixels; anchors are 0 to 1 across the screen.
    void Apply()
    {
        applied = Screen.safeArea;
        Vector2 min = applied.position;
        Vector2 max = applied.position + applied.size;
        min.x /= Screen.width;
        min.y /= Screen.height;
        max.x /= Screen.width;
        max.y /= Screen.height;
        rect.anchorMin = min;
        rect.anchorMax = max;
        rect.offsetMin = Vector2.zero;
        rect.offsetMax = Vector2.zero;
    }
}
```

27. C# 7 explained it: a phone's notch and rounded corners eat into the screen.
    Under the Canvas, an empty `Safe Area`, stretched over it (Alt and the bottom-right
    anchor preset), with **Safe Area**. Drag `Stick` into it. Everything you read or tap
    goes inside `Safe Area` from now on.
28. In `Scripts`, a folder `UI`. In it, `MoneyText`:

```csharp
using TMPro;
using UnityEngine;

// The money at the top, shown again whenever it changes.
public class MoneyText : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] TMP_Text text;

    void OnEnable()
    {
        wallet.MoneyChanged += Show;
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= Show;
    }

    void Start()
    {
        Show(wallet.Money);
    }

    void Show(int money)
    {
        text.text = "$" + NumberFormat.Money(money);
    }
}
```

29. **The top bar.** In `Safe Area`, an empty `Top Bar`: anchored across the top (the
    top-stretch preset, with Shift held so its pivot moves to the top too), **Height**
    `160`. Inside it, `Money`: an Image, `Panel Light` (**Image Type** `Sliced`), anchored
    middle-left with its pivot there too (Shift and Alt), **Pos X** `14`, 420 × 130. In
    `Money`:
    - `Coin`: an Image, `Art/Emoji/coin_3d`, **Preserve Aspect**, anchored middle-left,
      **Pos X** `16`, 92 × 92.
    - `Money Text`: a TextMeshPro, anchored middle-left, **Pos X** `118`, 290 × 90, `$0`,
      Lilita One, size 64, brown, aligned left and middle.

    Add **Money Text** to `Money`: **Wallet** the scene's `Wallet`, **Text** `Money
    Text`.

### Do it — the price tag

30. `PriceTag`, in `Bar`, for now:

```csharp
using TMPro;
using UnityEngine;

// The sign on a counter: the bar's name and a cup's price.
public class PriceTag : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] TMP_Text text;

    void OnEnable()
    {
        Show();
    }

    void Show()
    {
        text.text = $"{stand.Info.DisplayName}  ${NumberFormat.Money(stand.Price)}";
    }
}
```

31. In the `Juice Stand` prefab, on `Counter/Price Tag`: **Price Tag**, **Stand** the root,
    **Text** `Price Tag/Text`. In the scene, each bar's tag now writes itself from its
    `BarInfo`: `Apple Bar  $10`. The `$` before `{` is a plain dollar sign; the `$` before
    the string's first `"` makes it an interpolated string.

### Test it

- **Play**, and wait. After a second, someone walks along the boardwalk and turns up to
  the Orange Bar; then another every 3 seconds, into a queue behind the first, 0.85 m
  apart. The front one turns to the till and shows a bubble: an orange juice, and a
  number.
- Make juice, and put cups on the counter. Stay on the till mat: the front customer takes
  cups, one every 0.35 s, the bubble counting down. With all of them, it steps aside and
  walks off, carrying its cups, and everyone moves up a place.
- A note hops onto the green mat for each cup: $5 each. Walk over it: the notes hop to
  you, and the money at the top counts up. Leave the till for a while: six people queue,
  and the seventh doesn't come (`IsFull`).
- Select one of the `Customers`' children while it walks, and watch its **Customer**
  component in the Inspector: it has no visible state. Switch the Inspector to **Debug**
  (the **⋮** menu, top right): now private fields show, and `state` changes as it goes.
  Switch back to **Normal**.

### Commit

*Add customers, the queue, the cash and the money at the top.*

### Challenge

Make `secondsPerBar` `0.5` on the spawner and play: what happens to the queue? Now the
customers come faster than you can serve. Where would a designer put that number, if it
were to change with each beach?

## C# 8 — Inheritance

**Goal:** you can build a family of classes that share their code, with `protected`,
`virtual`, `override`, `abstract` and `base.`; ask an object which kind it is with `is`
and `as`; and say when inheritance is the right tool and when it isn't (Associate:
Programming — inheritance vs. interfaces).

### Idea — a base class and a derived class

A slime, a bat and a skeleton all have health and take damage. Copy that code into three
classes, and a bug fixed in one stays in the other two. **Inheritance** writes it once, in
a **base class**, and builds each kind on it as a **derived class** (or subclass):

```csharp
// What every enemy has: health, taking damage, and an attack.
public class Enemy
{
    protected int health = 3;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
    }

    public virtual string Attack()
    {
        return "bumps you for 1";
    }
}
```

```csharp
// A Slime is an Enemy, with one thing of its own.
public class Slime : Enemy
{
    public void Regrow()
    {
        health += 1;
    }
}
```

`: Enemy` says "built on `Enemy`": a slime has everything an enemy has, written once,
and `Regrow` too. The access word decides what the slime's own code can use:

| In `Enemy` | `Slime`'s own code | Other scripts, on a slime |
| --- | --- | --- |
| `public`: `Health`, `TakeDamage` | yes | yes |
| `protected`: `health` | yes | no |
| private (no word) | no: *'Enemy.health' is inaccessible due to its protection level* (CS0122) | no |

### Idea — virtual, override, and a variable of the base type

`Attack` is `virtual`: "a subclass may write its own version". A bat swoops instead, so
it **overrides** it. Both words are needed: `virtual` allows it, `override` does it.

```csharp
public class Bat : Enemy
{
    public override string Attack()
    {
        return "swoops at you for 2";
    }
}
```

A `List<Enemy>` can hold slimes and bats, because a slime **is an** enemy. Which
`Attack` runs?

```csharp
List<Enemy> enemies = new List<Enemy>();
enemies.Add(new Slime());
enemies.Add(new Bat());
foreach (Enemy enemy in enemies)
{
    Debug.Log($"{enemy.GetType().Name} {enemy.Attack()}");
    if (enemy is Slime slime)
    {
        slime.Regrow();
        Debug.Log($"The slime regrows to {slime.Health}");
    }
}
```

```
Slime bumps you for 1
The slime regrows to 4
Bat swoops at you for 2
```

The **object** decides which method runs, not the variable: the second object is a bat,
so the bat's version runs, even through an `Enemy` variable (`GetType().Name` is the
object's class name). One loop serves every kind, even kinds you'll write next month.
The **variable** decides what you may call: `enemy.Regrow()` doesn't compile, because
not every enemy can regrow. To reach a slime's own members, ask which kind it is:

| Code | Gives | When it isn't a slime |
| --- | --- | --- |
| `enemy is Slime` | `true` for a slime, or a kind of slime | `false` |
| `enemy as Slime` | the same object, as a `Slime` | `null` |
| `enemy is Slime slime` | `true`, and a variable `slime` to use | `false`, and no `slime` |

The last, the **`is` pattern**, is the one to use: it asks and converts in one step, and
`slime` only exists inside the `if`, where it's sure to be a slime. With pickups, you'd
write `if (item is Potion potion)`, then use `potion`. But if a chain of `is` checks
picks what each kind does, the method belongs in the classes: make it `virtual`.

### Idea — abstract, base. and a three-level chain

There's no such thing as just "a vehicle": only karts, trucks and boats. Mark such a
class `abstract`, and what every kind must write for itself `abstract`, with no body:

```csharp
public abstract class Vehicle
{
    public abstract float TopSpeed { get; }

    public abstract void Drive();
}
```

```csharp
public class Kart : Vehicle
{
    public override float TopSpeed { get { return 20f; } }

    public override void Drive()
    {
        Debug.Log($"The kart zooms off, up to {TopSpeed}.");
    }
}
```

| A member in the base class that is… | Has a body there? | A subclass… |
| --- | --- | --- |
| plain | yes | uses it as it is |
| `virtual` | yes | **may** override it |
| `abstract` | no | **must** override it, unless the subclass is abstract too |

You can't `new` an abstract class, but it's a fine type for a variable: `Vehicle
vehicle = new Kart();` works. An override replaces the version one level up; to run
that version **as well**, call it with `base.`. A turbo kart is a third level:

```csharp
public class TurboKart : Kart
{
    const float TurboBoost = 8f;

    public override float TopSpeed { get { return base.TopSpeed + TurboBoost; } }

    public override void Drive()
    {
        base.Drive();       // first, everything a kart does
        Debug.Log("Turbo! Flames shoot out of the back.");
    }
}
```

```csharp
Vehicle vehicle = new TurboKart();
vehicle.Drive();
```

```
The kart zooms off, up to 28.
Turbo! Flames shoot out of the back.
```

`base.Drive()` ran `Kart`'s `Drive`, which read `TopSpeed`. The object is a turbo kart,
so that was the turbo's `TopSpeed`: the kart's 20, plus 8.

### Idea — MonoBehaviour: the base class you've used all along

`public class Coin : MonoBehaviour` is inheritance: `transform`, `gameObject`,
`GetComponent` and `Destroy` are members you inherited. You can put a class of your own
in between, for what several components share:

```csharp
// Every pickup is collected the same way. What it gives is up to each kind.
public abstract class Pickup : MonoBehaviour
{
    protected abstract void Apply(GameObject player);

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            Apply(other.gameObject);
            Destroy(gameObject);
        }
    }
}
```

```csharp
public class Gem : Pickup
{
    protected override void Apply(GameObject player)
    {
        Debug.Log($"{player.name} picked up a gem.");
    }
}
```

A `Gem` gets its trigger from `Pickup`; a potion is ten more lines. (In 3D, the base uses
`OnTriggerEnter`.) Unity finds `Start`, `Update`, `OnTriggerEnter2D` and the other event
functions **by name**, on the object's own class. They aren't `virtual` in `MonoBehaviour`,
so you never write `override` on them: `protected override void Start()` is error CS0115.

> **Watch out:** give `Gem` its own `OnTriggerEnter2D`, and Unity calls only that one:
> the gem can't be collected, and nothing warns you. To add to a base class's event
> function, make it `protected virtual`, and override it with a `base.` call first.

### Idea — mistakes the compiler catches

| You wrote | The compiler says |
| --- | --- |
| `class Truck : Vehicle`, with `TopSpeed` but no `Drive` | error CS0534: 'Truck' does not implement inherited abstract member 'Vehicle.Drive()' |
| `Vehicle vehicle = new Vehicle();` | error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle' |
| `public override void Drve()` in `class RaceKart : Kart` | error CS0115: 'RaceKart.Drve()': no suitable method found to override |
| `public override void TakeDamage(int amount)` in `class Skeleton : Enemy` | error CS0506: 'Skeleton.TakeDamage(int)': cannot override inherited member 'Enemy.TakeDamage(int)' because it is not marked virtual, abstract, or override |
| `public string Attack()` in `Bat`, without `override` | warning CS0114: 'Bat.Attack()' hides inherited member 'Enemy.Attack()'. To make the current member override that implementation, add the override keyword. Otherwise add the new keyword. |

The base class decides what may change: for CS0506, add `virtual` to `Enemy`'s method
if it's yours, and ask if it's a teammate's. CS0114 lets the game run, with a bug: through
an `Enemy` variable, the bat bumps. Add `override`; you won't need `new`.

### Idea — when inheritance fits, and when it doesn't

It fits when one thing **is a** kind of the other, **and** they share code:

| Classes | "is a"? | Shared code | Use |
| --- | --- | --- | --- |
| `TurboKart` and `Kart` | a turbo kart is a kart | driving, top speed | inheritance |
| `Bat` and `Enemy` | a bat is an enemy | health, damage | inheritance |
| `Gem` and `Pickup` | a gem is a pickup | being collected | inheritance |
| a player, a crate and a familiar that can all be hurt | none is a kind of another | almost none | an interface (C# 9) |

A class has only **one** base class, and a component's is already `MonoBehaviour`. Every
subclass is tied to its base: change `Enemy`, and every enemy changes, which is the point
when you want it and a trap when you don't. And keep chains to two or three levels.

### Do it

1. Make `Enemy`, `Slime` and `Bat`, and run the list example in a `Practice` script.
   Take `override` off `Bat.Attack`, and run it again. What does the bat do now, and why?
2. Add a `Skeleton` that takes half damage. What must change in `Enemy` first?
3. Make `Vehicle`, `Kart` and `TurboKart`. Add a `Truck`, read CS0534, then finish it.
4. Make `Pickup`, `Gem` and a `Potion`. Give `Gem` its own `OnTriggerEnter2D`, see the
   gem stay, then fix it with `virtual`, `override` and `base.`.

### Challenge

Write an abstract `Generator : MonoBehaviour` whose `Update` calls `protected abstract
void Produce()` every `interval` seconds, and two juice stands built on it. Give one a
sign that spins in its own `Update`, without stopping the juice. Should an `Upgrade`
that makes a stand faster be a subclass of `Generator`? Explain your answer.

## Chapter 7 — Stations and Build Spots

**Goal:** two things. First, the same twenty lines that `FruitCrate`, `Juicer`, `Counter`
and `CashPile` each have, written once, in a base class all four inherit: a **Station**.
Second, the beach grows. Dashed squares appear in the sand, each with a price; stand on one
and your money pours into it, a little at a time; when it's paid, a table or a second
juicer pops up, and the next squares appear.

### Idea — a family of stations

Every place you stand to trade works the same way, and only the trade is different:

| Same for all | Different for each |
| --- | --- |
| a trigger collider; a list of who stands in it | what's traded: fruit to you, fruit in and cups out, cups to the counter, notes to you |
| a timer: one trade every `tradeSeconds` | how often: 0.15 s, or 0.04 s for cash |
| who arrives and who leaves | what a station does about it (most do nothing) |

C# 8 put that shape in code: an **abstract** base class with the same part,
and an **abstract** method, `Trade`, that each kind must write. `Station` keeps a `List`
of every Carrier inside, not one `visitor`: a runner and the chef can stand on the same mat
(the Chapter 5 challenge's answer: with one `visitor`, the second one in replaced the first,
and the first one out set it to `null` while the second still stood there).

`Station` has its own `Update` (the timer), and so do the crate and the juicer (making
fruit, making cups). So `Station.Update` is `protected virtual`, and theirs is `protected
override`, calling `base.Update()` first. A station that adds nothing to `Update` (the
counter's till, a cash pile) doesn't write one at all.

### Idea — the build list

An idle game is a list: what to build next, and what it costs. The designer's balance sheet
has it, in its third table. Each **build spot** knows its price, the object it builds (a
switched-off table, a switched-off juicer), and the spots that come **after** it:

```
Table 1 ($30) ──▶ Table 2 ($50)
             └──▶ The Orange Bar's second juicer ($80) ──▶ the Apple crate ──▶ …
```

Paying is a trade, so a build spot is a Station too: while the chef stands on it, every
0.035 s it takes a little money (about a thirtieth of the price) and a note hops from him
into the spot. When it's paid: what it builds is switched on, the spot is switched off,
and each spot after it is **offered**, switched on. A `BuildList` knows them all and which
come first; Chapter 14 makes it save which are built.

### Do it — the station

1. In `Bar`, `Station`:

```csharp:Station.cs
using System.Collections.Generic;
using UnityEngine;

// A place you stand to trade: a crate, a juicer, a counter, a cash pile, a
// table, the bin, a build spot. Its collider is a trigger. While a Carrier
// (the chef, or a runner) stands in it, Trade is called every tradeSeconds,
// so things change hands one at a time. What's traded is each kind's own
// business: Station is abstract, and each kind says what with override Trade.
[RequireComponent(typeof(Collider))]
public abstract class Station : MonoBehaviour
{
    [SerializeField] float tradeSeconds = 0.15f;

    readonly List<Carrier> inside = new List<Carrier>();
    float nextTrade;

    void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && !inside.Contains(carrier))
        {
            inside.Add(carrier);
            OnArrived(carrier);
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.TryGetComponent(out Carrier carrier) && inside.Remove(carrier))
        {
            OnLeft(carrier);
        }
    }

    // A station switched off (built over, or reset) forgets who stood in it.
    protected virtual void OnDisable()
    {
        inside.Clear();
    }

    protected virtual void Update()
    {
        if (inside.Count == 0 || Time.time < nextTrade)
        {
            return;
        }
        nextTrade = Time.time + tradeSeconds;
        for (int i = inside.Count - 1; i >= 0; i--)
        {
            if (!inside[i].isActiveAndEnabled)
            {
                inside.RemoveAt(i);     // a runner sent home while it stood here
            }
            else if (inside[i].HandsOpen)
            {
                Trade(inside[i]);
            }
        }
    }

    protected bool IsAnyoneInside
    {
        get { return inside.Count > 0; }
    }

    protected abstract void Trade(Carrier carrier);

    protected virtual void OnArrived(Carrier carrier)
    {
    }

    protected virtual void OnLeft(Carrier carrier)
    {
    }
}
```

2. Read it:
   - `abstract class`: you can't add a `Station` to a GameObject, only a kind of station.
     `[RequireComponent(typeof(Collider))]` is inherited too: every station needs its
     trigger.
   - `OnTriggerEnter` and `OnTriggerExit` are **private**: Unity calls them on the
     object's own class, and no station needs to change them. What a station may want to
     know is `OnArrived` and `OnLeft`, `protected virtual` with empty bodies: override
     them only if you need them. (A table will.)
   - `Update` loops **backwards** over the list, because it may remove from it: a runner
     switched off while standing on a mat never gets an `OnTriggerExit`, so the station
     drops it itself. Going backwards, removing item `i` doesn't move the ones still to
     visit. A carrier with its hands shut (`HandsOpen`, Chapter 10) stays on the list, and
     isn't traded with.
   - `protected virtual void OnDisable`: a station switched off forgets who was inside.
     `CashPile` has an `OnDisable` of its own, so it overrides this one and calls `base.`.
3. Now each station, inheriting `Station`, without its copy of the trigger code. Unity
   shows errors until all four are saved: `Counter` is used by `Customer`, and everyone
   uses `JuiceStand`.

<!-- check: together -->

`FruitCrate`:

```csharp:FruitCrate.cs
using System;
using UnityEngine;

// A crate that fills by itself: Produce adds a fruit every few seconds until
// it's full. Stand by it, with empty hands or hands of the same fruit, and
// the fruit hops onto your pile, one at a time. Not before its bar is open:
// fruit with no juicer to go to would be stuck in your hands.
public class FruitCrate : Station
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile fruit;
    [SerializeField] ItemPool pool;
    [SerializeField] int startWith = 6;

    float nextFruit;

    public event Action Picked;

    void Start()
    {
        for (int i = 0; i < startWith; i++)
        {
            Produce();
        }
        nextFruit = Time.time + stand.Info.CrateSeconds;
    }

    protected override void Update()
    {
        base.Update();
        if (Time.time >= nextFruit)
        {
            nextFruit = Time.time + stand.Info.CrateSeconds;
            if (!fruit.IsFull)
            {
                Produce();
            }
        }
    }

    void Produce()
    {
        fruit.Add(pool.Get(stand.Info.Fruit, fruit.transform.position));
    }

    protected override void Trade(Carrier carrier)
    {
        if (stand.IsOpen && !fruit.IsEmpty && carrier.CanTake(stand.Info.Fruit))
        {
            carrier.Hands.Add(fruit.Take());
            Picked?.Invoke();
        }
    }
}
```

`Juicer`:

```csharp:Juicer.cs
using System;
using UnityEngine;

// A juicer, a blender or a coconut cutter: the same script with other numbers.
// Stand by it with fruit and it takes them. While it has fruit, it makes a cup
// every few seconds onto its tray. Stand by it with empty hands, or with the
// same cups, to pick the cups up.
public class Juicer : Station
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile cups;         // the tray
    [SerializeField] Transform hopper;      // where the fruit goes in
    [SerializeField] ItemPool pool;
    [SerializeField] ProgressRing ring;
    [SerializeField] int fruitCapacity = 6;

    int fruit;
    float progress;     // 0 to 1: how far the next cup is

    public int Fruit { get { return fruit; } }
    public int FruitRoom { get { return fruitCapacity - fruit; } }
    public int CupCount { get { return cups.Count; } }

    public event Action CupMade;

    protected override void Update()
    {
        base.Update();
        if (fruit > 0 && !cups.IsFull)
        {
            progress += Time.deltaTime / stand.SecondsPerCup;
            if (progress >= 1f)
            {
                progress = 0f;
                fruit--;
                cups.Add(pool.Get(stand.Info.Cup, hopper.position));
                CupMade?.Invoke();
            }
        }
        ring.Show(progress, fruit);
    }

    protected override void Trade(Carrier carrier)
    {
        ItemPile hands = carrier.Hands;
        // A runner with fruit in its hands can't take cups, and with a full tray
        // this machine can't make room for fruit: its fruit goes in anyway, or
        // each would wait for the other for ever.
        bool hasRoom = fruit < fruitCapacity || (!carrier.IsChef && cups.IsFull);
        if (hands.TopInfo == stand.Info.Fruit && hasRoom)
        {
            Item item = hands.Take();
            item.HopTo(hopper, Vector3.zero);
            pool.Release(item, Item.HopSeconds);     // it goes in, then it's juice
            fruit++;
        }
        else if (!cups.IsEmpty && carrier.CanTake(stand.Info.Cup))
        {
            hands.Add(cups.Take());
        }
    }
}
```

`Counter`:

```csharp:Counter.cs
using System.Collections.Generic;
using UnityEngine;

// The counter, its till and its queue. The till mat behind the counter is this
// station's trigger: stand on it and your cups go onto the counter. While
// anyone stands at the till, the chef or a cashier, the customer at the front
// of the queue is served, one cup at a time. Customers wait in a Queue: first
// come, first served.
public class Counter : Station
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile cups;
    [SerializeField] Transform entry;           // where this bar's customers leave the boardwalk
    [SerializeField] Transform aside;           // where they step out of the queue, served
    [SerializeField] Transform[] queueSpots;    // the front first
    [SerializeField] float serveSeconds = 0.35f;

    readonly Queue<Customer> queue = new Queue<Customer>();
    bool cashierAtTill;
    float nextServe;

    public JuiceStand Stand { get { return stand; } }
    public int CupCount { get { return cups.Count; } }
    public int QueueLength { get { return queue.Count; } }
    public bool IsFull { get { return queue.Count >= queueSpots.Length; } }
    public bool IsServing { get { return IsAnyoneInside || cashierAtTill; } }
    public Vector3 Entry { get { return entry.position; } }
    public Vector3 Aside { get { return aside.position; } }
    public Vector3 Till { get { return transform.position; } }
    public Vector3 Front { get { return queueSpots[0].position; } }

    // A customer joins at the back.
    public void Join(Customer customer)
    {
        queue.Enqueue(customer);
        customer.GoToSpot(queueSpots[queue.Count - 1].position, queue.Count == 1);
    }

    protected override void Update()
    {
        base.Update();
        if (queue.Count == 0 || !IsServing || cups.IsEmpty || Time.time < nextServe)
        {
            return;
        }
        Customer front = queue.Peek();
        if (!front.IsReady)
        {
            return;     // still walking up
        }
        nextServe = Time.time + serveSeconds;
        front.Receive(cups.Take());
        if (front.HasEverything)
        {
            queue.Dequeue();
            stand.Sell(front.CupsWanted);
            front.Served();
            MoveUp();
        }
    }

    // Everyone steps up a place. A Queue can't be read by index; foreach
    // visits it front to back.
    void MoveUp()
    {
        int place = 0;
        foreach (Customer customer in queue)
        {
            customer.GoToSpot(queueSpots[place].position, place == 0);
            place++;
        }
    }

    protected override void Trade(Carrier carrier)
    {
        if (carrier.Hands.TopInfo == stand.Info.Cup && !cups.IsFull)
        {
            cups.Add(carrier.Hands.Take());
        }
    }

    // A cashier at the till serves as the chef does.
    public void SetCashier(bool isAtTill)
    {
        cashierAtTill = isAtTill;
    }
}
```

`CashPile`:

```csharp:CashPile.cs
using UnityEngine;

// Where a bar's money waits for you: a pile of notes, one for each cup sold.
// Only the chef collects it: walk over it and each note hops to you, into the
// Wallet. When the pile is full, the money goes on the top note.
public class CashPile : Station
{
    [SerializeField] JuiceStand stand;
    [SerializeField] ItemPile notes;
    [SerializeField] ItemInfo note;
    [SerializeField] ItemPool pool;
    [SerializeField] Wallet wallet;

    // Waiting here: a save counts it as yours.
    public int Total { get; private set; }

    void OnEnable()
    {
        stand.CupSold += AddNote;
    }

    protected override void OnDisable()
    {
        base.OnDisable();
        stand.CupSold -= AddNote;
    }

    void AddNote(int dollars)
    {
        Total += dollars;
        if (notes.IsFull)
        {
            notes.Peek().Value += dollars;
            return;
        }
        Item item = pool.Get(note, stand.Counter.transform.position + Vector3.up);
        item.Value = dollars;
        notes.Add(item);
    }

    protected override void Trade(Carrier carrier)
    {
        if (!carrier.IsChef || notes.IsEmpty)
        {
            return;
        }
        Item item = notes.Take();
        Total -= item.Value;
        wallet.Add(item.Value);
        item.HopTo(carrier.transform, Vector3.up * 1.2f);
        pool.Release(item, Item.HopSeconds);
    }
}
```

<!-- check: end -->

4. Compare each with the one before. The fields `visitor`, `nextTrade` and
   `tradeSeconds`, both trigger methods and the timer are gone from all four: about eighty
   lines. `Trade` is now `protected override`. And each has a little more, for later:
   - `FruitCrate` gives fruit only once its bar `IsOpen`: an Apple crate built before the
     Apple counter would fill your hands with apples no machine takes yet. And it raises
     `Picked` for each fruit (Chapter 12's trophies count them).
   - `Juicer` raises `CupMade` (Chapter 17's squeeze sound), and tells a runner how much
     fruit it has, how much more it can take and how many cups (`Fruit`, `FruitRoom`,
     `CupCount`, Chapter 10). `hasRoom` lets a runner's fruit in over the limit when the
     tray is full: Chapter 10 says why.
   - `Counter` serves while **anyone** is inside (`IsAnyoneInside`), or while a cashier
     stands at its till (`SetCashier`, Chapter 10).
   - `CashPile` keeps the `Total` waiting on its mat (a save counts it as yours, Chapter
     14), and its `OnDisable` calls `base.OnDisable()` first.
5. Press **Play**: everything works as before. Nothing you can see changed. That's a
   **refactor**: the same game, better code. Commit it on its own now: *Make the crate, juicer,
   counter and cash pile Stations.* A commit that only refactors is easy to review, and
   easy to undo.

### Do it — the build spot

6. `BuildSpot`, in `Bar`:

```csharp
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A dashed square in the sand with a price. Stand on it and your money pours
// in, a little at a time. When it's paid, what it builds appears, and so do
// the spots that come after it. Leave halfway, and what you paid stays.
public class BuildSpot : Station
{
    [SerializeField] string id;                 // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] int price = 30;
    [SerializeField] GameObject builds;
    [SerializeField] BuildSpot[] next;
    [SerializeField] Wallet wallet;
    [SerializeField] ItemPool pool;
    [SerializeField] ItemInfo note;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Image paidFill;

    int paid;
    float priceFactor = 1f;     // a later beach's spots cost more

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Price { get { return Mathf.RoundToInt(price * priceFactor); } }
    public int Paid { get { return paid; } }
    public bool IsBuilt { get; private set; }

    public event Action<BuildSpot> Built;

    protected override void Trade(Carrier carrier)
    {
        if (!carrier.IsChef || IsBuilt)
        {
            return;
        }
        // About thirty steps from empty to paid, however big the price.
        int pay = Mathf.Min(Mathf.Max(1, Price / 30), Price - paid, wallet.Money);
        if (pay <= 0 || !wallet.TrySpend(pay))
        {
            return;
        }
        paid += pay;
        Item money = pool.Get(note, carrier.transform.position + Vector3.up * 1.2f);
        money.HopTo(transform, Vector3.zero);
        pool.Release(money, Item.HopSeconds);
        Show();
        if (paid >= Price)
        {
            Build();
            Built?.Invoke(this);
        }
    }

    // What it builds appears, and the spots after it are offered.
    public void Build()
    {
        IsBuilt = true;
        paid = Price;
        builds.SetActive(true);
        gameObject.SetActive(false);
        foreach (BuildSpot spot in next)
        {
            spot.Offer();
        }
    }

    public void Offer()
    {
        if (!IsBuilt)
        {
            gameObject.SetActive(true);
            Show();
        }
    }

    void Show()
    {
        priceText.text = "$" + NumberFormat.Money(Price - paid);
        paidFill.fillAmount = paid / (float)Price;
    }
}
```

7. Read `Trade`'s sum. `Mathf.Min` of three numbers: a thirtieth of the price (but at
   least $1), what's still to pay, and what you have. On a $30 spot, $1 a step; on a
   $5,000 spot, $166. With $0 it's 0, and nothing happens. `paid / (float)Price`: an `int`
   divided by an `int` is a whole number (12 / 30 is 0), so one of them becomes a `float`
   first, and 12 / 30 is 0.4, the fill.
8. `IsBuilt { get; private set; }`: everyone can read it; only the spot can change it.
   `priceFactor` stays 1 until Chapter 16's later beaches.
9. `BuildList`, in `Bar`, for now:

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// Every build spot on the beach, in the designer's order, and the ones offered
// at the start.
public class BuildList : MonoBehaviour
{
    [SerializeField] BuildSpot[] spots;
    [SerializeField] BuildSpot[] first;

    public IReadOnlyList<BuildSpot> Spots { get { return spots; } }

    public event Action<BuildSpot> SpotBuilt;

    void OnEnable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built += OnBuilt;
        }
    }

    void OnDisable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built -= OnBuilt;
        }
    }

    void OnBuilt(BuildSpot spot)
    {
        SpotBuilt?.Invoke(spot);
    }

    void Start()
    {
        foreach (BuildSpot spot in first)
        {
            spot.Offer();
        }
    }
}
```

10. Read it. It listens to every spot's `Built`, and passes each on as one event,
    `SpotBuilt`: whoever wants to know when anything is built (a sound, a toast) listens
    to the list, not to twenty spots. `IReadOnlyList`: others can read the spots, not
    change the array.
11. Open the `Build Spot` prefab. On its root: a trigger **Box Collider**, **Center** (0, 1,
    0), **Size** (1.6, 2, 1.6). **Build Spot**: **Trade Seconds** `0.035`, **Note**
    `Data/Items/Note`, **Price Text** `Sign/Price`, **Paid Fill** `Sign/Paid`.

### Do it — the first spots

12. **The tables to build.** An empty `Tables`. Drag two `Table` prefabs into it: `Table 1`
    at (−3.6, 0, −6.8) and `Table 2` at (−3.6, 0, −8.8). Then an empty at the top of the
    Hierarchy, `Table 1 and Bin`, and drag `Table 1` into it: Chapter 8 puts the bin in it
    too, and one spot builds both. Untick `Table 1 and Bin` and `Table 2`.
13. An empty `Build Spots`, and three `Build Spot` prefabs in it:

| GameObject | Id | Display Name | Price | Position | Builds | Picture |
| --- | --- | --- | --- | --- | --- | --- |
| `Spot Table 1` | `table-1` | `Table` | `30` | (−3.6, 0, −6.8) | `Table 1 and Bin` | `Art/Emoji/umbrella_on_ground_3d` |
| `Spot Table 2` | `table-2` | `Table` | `50` | (−3.6, 0, −8.8) | `Table 2` | the same |
| `Spot Orange Juicer 2` | `orange-juicer-2` | `Juicer` | `80` | (−3.8, 0, 2.95) | `Orange Bar/Juicer 2` | `Art/Icons/Orange Juice` |

On each, set `Sign/Name`'s text to its **Display Name**, and drag its picture into
`Sign/Picture`. Drag in `Wallet` and `Item Pool`. The juicer's spot stands where its
mat will be: you pay standing where you'll work, and the machine appears beside you.

14. **Next**: `Spot Table 1`'s **Next** is `Spot Table 2` and `Spot Orange Juicer 2`. The
    others' **Next** stay empty, for now.
15. Untick all three spots. On `Build Spots`, add **Build List**: **Spots** all three,
    **First** `Spot Table 1`.

### Test it

- **Play**. On the sand south of the bar, a dashed square: a picture, `$30`, `Table`.
  Earn $30 (six cups), and stand on it: notes hop from you into the square, $1 at a time,
  the price counts down and the yellow fill rises. Walk off at $14: it stays at $14 to go.
  Come back and finish.
- At $0, a table and two stools appear, the square goes, and two more appear: Table 2
  ($50) and the second juicer ($80) by the first.
- Build the juicer. It appears, with its ring. Carry oranges to it: two machines, twice
  the juice. The Orange Bar sells as fast as you can carry.
- Stand on a spot with no money: nothing happens, no error. `TrySpend` and `pay <= 0`
  both refuse.

### Commit

*Add build spots and the build list.*

### Challenge

Add a fourth spot to the list: a palm tree (any of `Art/Nature`'s) for $40, offered after
Table 2. What did you change in the scene, and what in code? (Nothing in code: the list
is data.) Then take it out again.

## Chapter 8 — Tables and the Bin

**Goal:** a served customer looks for a free seat. It walks to a table, sits, drinks for
six seconds, and leaves: an empty cup on the table and a tip beside it. The tip is yours;
the cup is a job. Clear it into the bin, or that seat stays taken. Then the whole build
list, up to the Coconut Bar.

### Idea — two more states, and a seat that isn't free

The visit grows from four states to seven:

```
Arriving ─▶ Queueing ─▶ Ordering ─┬─▶ ToTable ─▶ Sitting ─(6 s)─▶ StandingUp ─(1 s)─▶ Leaving
                                  └─▶ Leaving (no free seat)
```

A **seat is free** when nobody sits on it **and** no empty cup is in front of it. So the
tables fill up with cups if you don't clear them, and then the customers go straight
home: the bar still sells, but the tips stop. The `Table` keeps two arrays, side by side:
who sits on each seat, and the cup left in front of each. **Seating** knows every table,
and finds a free seat at one that's built.

`TryFindSeat` and `TryTakeSeat` follow C#'s **Try** pattern, like `Dictionary.TryGetValue`
and `TryGetComponent`: return a `bool` (found one?), and hand back what was found through
`out` parameters. No exceptions, no `null` checks after.

### Do it — tables

1. `Table`, in `Bar`:

```csharp:Table.cs
using UnityEngine;

// A table for two. A customer sits, drinks, and leaves an empty cup and a tip.
// A seat with an empty cup in front of it isn't free: carry the cups to the
// bin. The chef takes the tips; a runner can't.
public class Table : Station
{
    [SerializeField] Transform[] seats;         // where each customer sits, facing the table
    [SerializeField] Transform[] cupPlaces;     // where each one's empty cup is left
    [SerializeField] ItemPile tips;
    [SerializeField] ItemInfo emptyCup;
    [SerializeField] ItemInfo note;
    [SerializeField] ItemPool pool;
    [SerializeField] Wallet wallet;

    Customer[] sitting;
    Item[] leftCups;

    void Awake()
    {
        sitting = new Customer[seats.Length];
        leftCups = new Item[seats.Length];
    }

    // A free seat: nobody on it, and no empty cup in front of it.
    public bool TryTakeSeat(Customer customer, out int seat)
    {
        for (int i = 0; i < seats.Length; i++)
        {
            if (sitting[i] == null && leftCups[i] == null)
            {
                sitting[i] = customer;
                seat = i;
                return true;
            }
        }
        seat = -1;
        return false;
    }

    public Vector3 SeatPosition(int seat)
    {
        return seats[seat].position;
    }

    // In front of the seat, where a customer stops before sitting down.
    public Vector3 ApproachPosition(int seat)
    {
        return seats[seat].position - seats[seat].forward * 0.8f;
    }

    public void Vacate(int seat, int tip)
    {
        sitting[seat] = null;
        Item cup = pool.Get(emptyCup, cupPlaces[seat].position);
        cup.transform.SetParent(cupPlaces[seat], true);
        leftCups[seat] = cup;
        Item money = pool.Get(note, cupPlaces[seat].position);
        money.Value = tip;
        tips.Add(money);
    }

    protected override void Trade(Carrier carrier)
    {
        if (carrier.IsChef && !tips.IsEmpty)
        {
            Item money = tips.Take();
            wallet.Add(money.Value);
            money.HopTo(carrier.transform, Vector3.up * 1.2f);
            pool.Release(money, Item.HopSeconds);
            return;
        }
        for (int i = 0; i < leftCups.Length; i++)
        {
            if (leftCups[i] != null && carrier.CanTake(emptyCup))
            {
                carrier.Hands.Add(leftCups[i]);
                leftCups[i] = null;
                return;
            }
        }
    }
}
```

2. Read it:
   - The arrays are made in `Awake`, the size of `seats`: a table for four would only
     need four seats in the Inspector.
   - `ApproachPosition`: 0.8 m in front of the seat (`forward` is the way a seat faces,
     towards the table, so minus `forward` is away from it). A customer walks there, then
     onto the seat, so it doesn't cut through the table.
   - `Vacate` leaves the cup **outside any pile**: a child of the cup's place, not hopped
     anywhere. The tip goes on `tips`, a pile.
   - `Trade`: the chef gets the tips first, all of them, one per trade; then anyone may
     take the empty cups, if their hands can take an empty cup (empty, or holding empty
     cups already). `return` after each: one thing per trade.
3. `Seating`, in `Bar`:

```csharp:Seating.cs
using UnityEngine;

// Every table on the beach. A served customer asks it for a free seat; the
// tables not built yet are switched off, and don't offer any.
public class Seating : MonoBehaviour
{
    [SerializeField] Table[] tables;

    public bool TryFindSeat(Customer customer, out Table table, out int seat)
    {
        foreach (Table each in tables)
        {
            if (each.isActiveAndEnabled && each.TryTakeSeat(customer, out seat))
            {
                table = each;
                return true;
            }
        }
        table = null;
        seat = -1;
        return false;
    }
}
```

   `isActiveAndEnabled` is false for a table not built yet: it's switched off. Seating
   knows all six tables from the start, and offers only the built ones.

4. Open the `Table` prefab. On its root: a trigger **Box Collider**, **Center** (0, 1, 0),
   **Size** (3.4, 2, 2.8), bigger than the table and its stools, so you can reach it from
   any side. **Table**: **Trade Seconds** `0.12`, **Seats** `Seat 1` and `Seat 2`, **Cup
   Places** `Cup Place 1` and `Cup Place 2`, **Tips** `Tips`, **Empty Cup** and **Note**
   from `Data/Items`. On `Tips`: an **Item Pile**, **Capacity** `6`, **Columns** and
   **Rows** `1`, **Spacing** `0`.
5. Four more `Table` prefabs in `Tables`: `Table 3` at (0, 0, −6.8), `Table 4` at (0, 0,
   −8.8), `Table 5` at (3.6, 0, −6.8), `Table 6` at (3.6, 0, −8.8), all unticked. Select
   all six (`t:Table` in the Hierarchy), and drag in `Item Pool` and `Wallet`.
6. On `Tables`, add **Seating**: **Tables** `Table 1` to `Table 6`, in order.

### Do it — the bin

7. `Bin`, in `Bar`:

```csharp:Bin.cs
using System;
using UnityEngine;

// Takes whatever you carry, one at a time: empty cups from the tables, and
// anything you'd rather not hold. Each hops in and goes back to the pool.
public class Bin : Station
{
    [SerializeField] Transform opening;
    [SerializeField] ItemPool pool;

    public event Action CupBinned;

    protected override void Trade(Carrier carrier)
    {
        ItemInfo top = carrier.Hands.TopInfo;
        if (top == null)
        {
            return;
        }
        Item item = carrier.Hands.Take();
        item.HopTo(opening, Vector3.zero);
        pool.Release(item, Item.HopSeconds);
        if (top.Kind == ItemKind.EmptyCup)
        {
            CupBinned?.Invoke();
        }
    }
}
```

   It takes **anything** you carry: empty cups, and the orange you picked up by mistake.
   Only an empty cup raises `CupBinned`, for Chapter 12's *Tidy Bar*.

8. **The bin.** A material in `Art/Materials`, `Bin`, colour `#3F7F5F`. An empty GameObject
   `Bin`, with a trigger **Box Collider** (**Center** (0, 1, 0), **Size** (1.6, 2, 1.6))
   and **Bin** (**Trade Seconds** `0.1`). Inside it:
   - `Body`: a **3D Object → Cylinder** at (0, 0.45, 0), **Scale** (0.75, 0.45, 0.75),
     material `Bin`. Keep its collider: the chef bumps into the bin.
   - `Opening`: an empty at (0, 0.85, 0), its top. Drag it into **Opening**.
   - `Mat`: a flat mat like the others, at (0, 0.03, −0.9), 1.2 m, white with **A** 204:
     the side you walk up to.

   Drag it into `Prefabs` as `Bin`. In the scene, put it in `Table 1 and Bin` at (−7.4, 0,
   −6.4), and drag in `Item Pool`. The first table comes with its bin.

### Do it — the customer sits

9. The final `CustomerState`:

```csharp:CustomerState.cs
// Where a customer is in its visit.
public enum CustomerState
{
    Arriving,       // along the boardwalk to its bar
    Queueing,       // in the queue, behind someone
    Ordering,       // at the front: the bubble shows what it wants
    ToTable,
    Sitting,
    StandingUp,
    Leaving
}
```

10. And the final `Customer` and `CustomerSpawner`, which passes it the seating: both at
    once, since `Visit` takes one more thing.

<!-- check: together -->

```csharp:Customer.cs
using System;
using UnityEngine;

// One customer's visit, as a state machine: in from the boardwalk, into a
// queue, an order at the front, then a seat at a table, or straight home. The
// counter moves it up the queue and serves it; the tables seat it. When it has
// gone, Left tells the spawner it can come back as someone else.
public class Customer : MonoBehaviour
{
    static readonly int SittingId = Animator.StringToHash("Sitting");
    static readonly int CarryingId = Animator.StringToHash("Carrying");

    [SerializeField] Walker walker;
    [SerializeField] ItemPile hands;
    [SerializeField] OrderBubble bubble;
    [SerializeField] Animator animator;
    [SerializeField] float drinkSeconds = 6f;
    [SerializeField] float standUpSeconds = 1f;

    CustomerState state;
    Counter counter;
    Seating seating;
    ItemPool pool;
    Vector3 exit;
    Vector3 spot;           // its place in the queue
    bool isFront;
    int wanted;
    Table table;
    int seat;
    float stateEnds;

    public CustomerState State { get { return state; } }
    public bool IsReady { get { return state == CustomerState.Ordering; } }
    public bool HasEverything { get { return hands.Count >= wanted; } }
    public int CupsWanted { get { return wanted; } }

    public event Action<Customer> Left;

    void OnEnable()
    {
        walker.Arrived += OnArrived;
    }

    void OnDisable()
    {
        walker.Arrived -= OnArrived;
    }

    // The spawner sends it in at one end of the boardwalk, to leave by the other.
    public void Visit(Counter chosen, Seating tables, ItemPool items, Vector3 entrance, Vector3 leaveBy)
    {
        counter = chosen;
        seating = tables;
        pool = items;
        exit = leaveBy;
        wanted = UnityEngine.Random.Range(1, 4);
        transform.position = entrance;
        bubble.Hide();
        animator.SetBool(SittingId, false);
        animator.SetBool(CarryingId, false);
        state = CustomerState.Arriving;
        walker.WalkTo(new Vector3(counter.Entry.x, 0f, entrance.z), counter.Entry);
        counter.Join(this);
    }

    // The counter says where its place is, and whether it's at the front.
    public void GoToSpot(Vector3 place, bool atFront)
    {
        spot = place;
        isFront = atFront;
        if (state == CustomerState.Queueing)
        {
            walker.WalkTo(spot);     // moving up
        }
    }

    public void Receive(Item cup)
    {
        hands.Add(cup);
        animator.SetBool(CarryingId, true);
        bubble.Show(counter.Stand.Info.Cup.Icon, wanted - hands.Count);
    }

    // Paid and served: a seat, if there's one free, or home.
    public void Served()
    {
        bubble.Hide();
        if (seating.TryFindSeat(this, out table, out seat))
        {
            state = CustomerState.ToTable;
            walker.WalkTo(counter.Aside, table.ApproachPosition(seat), table.SeatPosition(seat));
        }
        else
        {
            state = CustomerState.Leaving;
            Vector3 aside = counter.Aside;
            walker.WalkTo(aside, new Vector3(aside.x, 0f, exit.z), exit);
        }
    }

    void OnArrived()
    {
        switch (state)
        {
            case CustomerState.Arriving:
                state = CustomerState.Queueing;
                walker.WalkTo(spot);
                break;
            case CustomerState.Queueing:
                if (isFront)
                {
                    state = CustomerState.Ordering;
                    walker.FaceTowards(counter.Till);
                    bubble.Show(counter.Stand.Info.Cup.Icon, wanted);
                }
                break;
            case CustomerState.ToTable:
                state = CustomerState.Sitting;
                walker.FaceTowards(table.transform.position);
                animator.SetBool(SittingId, true);
                stateEnds = Time.time + drinkSeconds;
                break;
            case CustomerState.Leaving:
                Left?.Invoke(this);
                break;
        }
    }

    void Update()
    {
        if (state == CustomerState.Ordering && !isFront)
        {
            state = CustomerState.Queueing;     // can't happen, but never wait at the front by mistake
        }
        else if (state == CustomerState.Queueing && isFront && !walker.IsWalking)
        {
            OnArrived();                        // moved up to the front while standing still
        }
        else if (state == CustomerState.Sitting && Time.time >= stateEnds)
        {
            // Finished: the empty cup and a tip stay on the table.
            while (!hands.IsEmpty)
            {
                pool.Release(hands.Take());
            }
            table.Vacate(seat, Mathf.Max(1, counter.Stand.Price / 2));
            animator.SetBool(CarryingId, false);
            animator.SetBool(SittingId, false);
            state = CustomerState.StandingUp;
            stateEnds = Time.time + standUpSeconds;
        }
        else if (state == CustomerState.StandingUp && Time.time >= stateEnds)
        {
            state = CustomerState.Leaving;
            Vector3 approach = table.ApproachPosition(seat);
            walker.WalkTo(approach, new Vector3(approach.x, 0f, exit.z), exit);
        }
    }

    // Gone home: anything still in its hands goes back to the pool.
    public void EmptyHands()
    {
        while (!hands.IsEmpty)
        {
            pool.Release(hands.Take());
        }
    }
}
```

```csharp:CustomerSpawner.cs
using System.Collections.Generic;
using UnityEngine;

// Sends a customer to an open bar every few seconds, to the one with the
// shortest queue: the more bars are open, the more often. Customers come from
// a pool of a fixed size, so when all of them are on the beach, nobody else
// comes until one leaves.
public class CustomerSpawner : MonoBehaviour
{
    [SerializeField] Customer[] looks;
    [SerializeField] int poolSize = 16;
    [SerializeField] float secondsPerBar = 3f;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Seating seating;
    [SerializeField] ItemPool items;
    [SerializeField] Transform westEnd;     // the boardwalk's two ends
    [SerializeField] Transform eastEnd;

    readonly Stack<Customer> sleeping = new Stack<Customer>();
    float nextCustomer = 1f;

    void Awake()
    {
        for (int i = 0; i < poolSize; i++)
        {
            Customer customer = Instantiate(looks[i % looks.Length], transform);
            customer.gameObject.SetActive(false);
            customer.Left += OnLeft;
            sleeping.Push(customer);
        }
    }

    void Update()
    {
        if (Time.time < nextCustomer)
        {
            return;
        }
        int open = 0;
        Counter shortest = null;
        foreach (JuiceStand stand in stands)
        {
            if (!stand.IsOpen)
            {
                continue;
            }
            open++;
            if (!stand.Counter.IsFull && (shortest == null || stand.Counter.QueueLength < shortest.QueueLength))
            {
                shortest = stand.Counter;
            }
        }
        nextCustomer = Time.time + secondsPerBar / Mathf.Max(1, open);
        if (shortest == null || sleeping.Count == 0)
        {
            return;
        }
        bool fromWest = Random.value < 0.5f;
        Customer customer = sleeping.Pop();
        customer.gameObject.SetActive(true);
        customer.Visit(shortest, seating, items,
            fromWest ? westEnd.position : eastEnd.position,
            fromWest ? eastEnd.position : westEnd.position);
    }

    void OnLeft(Customer customer)
    {
        customer.EmptyHands();
        customer.gameObject.SetActive(false);
        sleeping.Push(customer);
    }
}
```

<!-- check: end -->

11. Read what's new in `Customer`:
    - `Served`: `seating.TryFindSeat(this, out table, out seat)` fills two **fields**
      through `out`, not new variables. Then one `WalkTo` with three points: aside, in
      front of the seat, onto the seat.
    - `OnArrived`'s new case: at the seat, it faces the table, sits (`Sitting` true), and
      sets a time to finish, six seconds away.
    - `Update`'s two new branches are **timed** states: nothing arrives to end them, so
      `Update` checks the time. Finished drinking: the cups it carried go back to the
      pool, the table gets an empty cup and a tip (half a cup's price, never under $1),
      and it stands up. A second later it walks away, by the same point in front of its
      seat.
12. On `Customers`, drag `Tables` into the new **Seating**.

### Do it — sitting down

13. Open `Person`. A **Bool** parameter, `Sitting`. Drag in `SitDown` and `StandUp` from
    `Chef_Male`, as states `Sit` and `Stand Up`.
14. Transitions, each **Transition Duration** `0.15`:
    - **Any State** → `Sit`, no exit time, on `Sitting` **true**. Any State: from whatever
      it's doing.
    - `Sit` → `Stand Up`, no exit time, on `Sitting` **false**.
    - `Stand Up` → `Idle`, **with** exit time, and no condition: when the clip ends, it
      idles.

    In `Sit`'s transition from Any State, untick **Can Transition To Self**: otherwise,
    while `Sitting` is true, it would start sitting down again every frame.

### Do it — the rest of the build list

15. Thirteen more spots in `Build Spots`, from the balance sheet, each **Builds** a part
    you unticked in Chapter 6, or a table, at the position of what it builds (a part's
    spot is on its mat):

| GameObject | Id | Name | Price | Position | Builds | Picture |
| --- | --- | --- | --- | --- | --- | --- |
| `Spot Apple Crate` | `apple-crate` | `Apple Crate` | 120 | (−1.8, 0, 6) | `Apple Bar/Crate` | `Icons/Apple` |
| `Spot Apple Juicer` | `apple-machine` | `Juicer` | 150 | (−1.8, 0, 2.95) | `Apple Bar/Juicer` | `Icons/Apple Juice` |
| `Spot Apple Bar` | `apple-counter` | `Apple Bar` | 180 | (−1.8, 0, 1.2) | `Apple Bar/Counter` | `Emoji/cup_with_straw_3d` |
| `Spot Table 3` | `table-3` | `Table` | 250 | (0, 0, −6.8) | `Table 3` | `Emoji/umbrella_on_ground_3d` |
| `Spot Table 4` | `table-4` | `Table` | 250 | (0, 0, −8.8) | `Table 4` | the same |
| `Spot Banana Crate` | `smoothie-crate` | `Banana Crate` | 500 | (1.8, 0, 6) | `Smoothie Bar/Crate` | `Icons/Banana` |
| `Spot Blender` | `smoothie-machine` | `Blender` | 650 | (1.8, 0, 2.95) | `Smoothie Bar/Juicer` | `Icons/Banana Smoothie` |
| `Spot Smoothie Bar` | `smoothie-counter` | `Smoothie Bar` | 800 | (1.8, 0, 1.2) | `Smoothie Bar/Counter` | `Emoji/cup_with_straw_3d` |
| `Spot Table 5` | `table-5` | `Table` | 700 | (3.6, 0, −6.8) | `Table 5` | `Emoji/umbrella_on_ground_3d` |
| `Spot Table 6` | `table-6` | `Table` | 700 | (3.6, 0, −8.8) | `Table 6` | the same |
| `Spot Coconut Crate` | `coconut-crate` | `Coconut Crate` | 1200 | (5.4, 0, 6) | `Coconut Bar/Crate` | `Icons/Coconut` |
| `Spot Cutter` | `coconut-machine` | `Cutter` | 1500 | (5.4, 0, 2.95) | `Coconut Bar/Juicer` | `Icons/Coconut Water` |
| `Spot Coconut Bar` | `coconut-counter` | `Coconut Bar` | 1800 | (5.4, 0, 1.2) | `Coconut Bar/Counter` | `Emoji/cup_with_straw_3d` |

Each one's sign, **Wallet** and **Pool** as before; all unticked.

16. **Next**, in a chain: `Spot Orange Juicer 2` → `Spot Apple Crate` → `Spot Apple Juicer`
    → `Spot Apple Bar` → `Spot Table 3` → `Spot Table 4` → `Spot Banana Crate` → `Spot
    Blender` → `Spot Smoothie Bar` → `Spot Table 5` → `Spot Table 6` → `Spot Coconut
    Crate` → `Spot Cutter` → `Spot Coconut Bar`. The balance sheet has the Office and the
    Staff Hut after the Apple Bar: Chapters 9 and 10 put them in.
17. On `Build Spots`, add the thirteen to **Spots**, after the first three, in the order of
    the table.

### Test it

- **Play**, and build Table 1: the table and the bin. Serve someone: it walks to the table,
  sits on a stool facing it, and drinks. Six seconds later it stands up and goes,
  leaving an empty cup and a note. Walk into the table's square: the note hops to you,
  then the cup.
- Carry the cup to the bin's mat: it hops in. Pick up an orange and give it to the bin:
  it takes that too.
- Leave two empty cups on Table 1, with Table 2 not built: the next customers go
  straight home. Clear one: the next customer sits there.
- Build on: the Apple crate, the juicer beside it, the counter. With the counter, the
  Apple Bar is open, and customers start queueing there too, now every 1.5 s between the
  two bars. Apples hop into the Apple crate only once the counter's built.
- Pause with someone sitting, and select its `Model`: in the Animator window, it's in
  `Sit`, holding the clip's last frame.

### Commit

*Add tables, the bin, and the rest of the build list.*

### Challenge

Make a customer who finds no seat show a sad face for a second before leaving: a second
bubble, an emoji, shown in `Served`'s `else`. Which state is it in while it shows? Does
it need a new one?

## Chapter 9 — Upgrades and the Intern's Shop

**Goal:** the Office. Build it on the beach, and step on its blue mat: a panel opens. At the
top, your own two upgrades, with levels: a **Bigger Tray** (your hands hold more) and
**Faster Flip-flops**. Under them, the bars' upgrades: better recipes (each cup sells for
×1.5) and faster machines. Buy one, and the bar's price tag changes, or its ring turns
faster. While the panel is open the stick doesn't walk you away, and **Escape** closes it.

### Idea — two kinds of upgrade, one base

Every upgrade has a name, a picture, a price and a bar it's for. What it **does** depends on
its kind:

| Kind | Does to its bar |
| --- | --- |
| `PriceUpgrade` | `MultiplyPrice(1.5)`: every cup sells for more |
| `SpeedUpgrade` | `MultiplySpeed(1.5)`: the machine is faster |
| `HireUpgrade` (Chapter 10) | `Hire(...)`: a helper starts work |

So `Upgrade` is an **abstract ScriptableObject**, with `abstract void ApplyTo(JuiceStand
stand)`, and each kind is a subclass with its own `[CreateAssetMenu]`. The shop sells
`Upgrade`s and calls `ApplyTo`: it never asks which kind. That's C# 8's
rule: when what to do depends on the kind, the method belongs in the kinds.

The bar keeps **factors**, not prices: `priceFactor` starts at 1, and each recipe
multiplies it by 1.5. Its `Price` is the BarInfo's price times its factors, worked out
each time it's asked. The `BarInfo` asset never changes: an asset changed in Play mode
would stay changed.

**`Upgrades`** (one in the scene) knows which have been bought (a `List` of their ids, for
Chapter 14's save), and buys: the money, then `ApplyTo` on the bar it's for. Only the
upgrades of a bar you've built are for sale. And an **`UpgradeLibrary`** asset holds every
upgrade in the game, so a saved id can be turned back into its upgrade.

### Idea — a panel, and the action maps

The panels (the Office now; the Staff Hut, Trophies and Settings later) open over the beach,
one at a time: a **PanelSwitcher** opens one and closes the others. A mat opens its
panel when the chef steps on it, with `Station`'s `OnArrived`: a station that trades
nothing.

While a panel is open, the stick and the keys should shop, not walk. C# 3 had the
answer: **action maps**, switched on and off as a whole. The **Chef** map (Move, Menu) is
on while you play; the **Panel** map (Close) while a panel is open. A **Controls** script
listens to the switcher and swaps them.

### Do it — upgrades

1. In `Scripts`, a folder `Upgrades`. In it, `Upgrade`:

```csharp:Upgrade.cs
using UnityEngine;

// What every upgrade has: an id for the save file, a name, a line saying what
// it does, a picture, a price, and the bar it's for. It's abstract: each kind
// says what it does to a bar, in ApplyTo. The asset never changes while
// playing; the bar it's applied to does.
public abstract class Upgrade : ScriptableObject
{
    [SerializeField] string id;         // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] string description;
    [SerializeField] Sprite picture;
    [SerializeField] int cost = 50;
    [SerializeField] BarInfo target;

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public string Description { get { return description; } }
    public Sprite Picture { get { return picture; } }
    public int Cost { get { return cost; } }
    public BarInfo Target { get { return target; } }

    public bool AppliesTo(JuiceStand stand)
    {
        return stand.Info == target;
    }

    public abstract void ApplyTo(JuiceStand stand);
}
```

2. `JuiceStand`, again: factors, the methods that multiply them, and an event for the
   price tag. `beachFactor` stays 1 until Chapter 16's later beaches.

```csharp
using System;
using UnityEngine;

// One bar: the Orange Bar, the Apple Bar. It knows its BarInfo, its price and
// its speed (upgrades multiply them), and its counter. The counter calls Sell,
// and CupSold tells the cash pile.
public class JuiceStand : MonoBehaviour
{
    [SerializeField] BarInfo info;
    [SerializeField] Counter counter;

    float priceFactor = 1f;
    float speedFactor = 1f;
    float beachFactor = 1f;

    public BarInfo Info { get { return info; } }
    public Counter Counter { get { return counter; } }
    public bool IsOpen { get { return counter.gameObject.activeInHierarchy; } }

    // A cup's price now: the bar's own, its upgrades, and the beach.
    public int Price
    {
        get { return Mathf.RoundToInt(info.Price * priceFactor * beachFactor); }
    }

    public float SecondsPerCup { get { return info.MachineSeconds / speedFactor; } }

    public event Action<int> CupSold;           // the money for one cup
    public event Action<int> CustomerServed;    // the money for the whole order
    public event Action Changed;                // the price changed

    public void MultiplyPrice(float factor)
    {
        priceFactor *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedFactor *= factor;
    }

    // A later beach pays more for every cup.
    public void SetBeachFactor(float factor)
    {
        beachFactor = factor;
        Changed?.Invoke();
    }

    public void Sell(int cups)
    {
        int price = Price;
        for (int i = 0; i < cups; i++)
        {
            CupSold?.Invoke(price);
        }
        CustomerServed?.Invoke(cups * price);
    }
}
```

3. The two kinds, in `Upgrades`. `PriceUpgrade`:

```csharp:PriceUpgrade.cs
using UnityEngine;

// A better recipe: the bar sells each cup for more.
[CreateAssetMenu(fileName = "New Price Upgrade", menuName = "Juice/Price Upgrade")]
public class PriceUpgrade : Upgrade
{
    [SerializeField] float factor = 1.5f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplyPrice(factor);
    }
}
```

   And `SpeedUpgrade`:

```csharp:SpeedUpgrade.cs
using UnityEngine;

// Better equipment: the bar's machines make cups faster.
[CreateAssetMenu(fileName = "New Speed Upgrade", menuName = "Juice/Speed Upgrade")]
public class SpeedUpgrade : Upgrade
{
    [SerializeField] float factor = 1.5f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplySpeed(factor);
    }
}
```

4. `UpgradeLibrary`:

```csharp:UpgradeLibrary.cs
using System.Collections.Generic;
using UnityEngine;

// Every upgrade in the game. A save file keeps upgrade ids; the library turns
// an id back into its upgrade.
[CreateAssetMenu(fileName = "Upgrade Library", menuName = "Juice/Upgrade Library")]
public class UpgradeLibrary : ScriptableObject
{
    [SerializeField] Upgrade[] upgrades;

    Dictionary<string, Upgrade> upgradesById;   // built the first time it's needed

    public IReadOnlyList<Upgrade> Upgrades { get { return upgrades; } }

    public bool TryGetUpgrade(string id, out Upgrade upgrade)
    {
        if (upgradesById == null)
        {
            upgradesById = new Dictionary<string, Upgrade>();
            foreach (Upgrade each in upgrades)
            {
                upgradesById.Add(each.Id, each);
            }
        }
        return upgradesById.TryGetValue(id, out upgrade);
    }

    // An asset keeps its fields between Plays in the Editor: build the dictionary again.
    void OnEnable()
    {
        upgradesById = null;
    }
}
```

   A **Dictionary** turns an id into its upgrade in one step, however many upgrades there
   are (C# 6). It's built the first time someone asks, not before. And
   `OnEnable` throws it away: in the Editor a ScriptableObject stays loaded between one
   Play and the next, with its private fields, so a dictionary from the last Play could
   still be there.

5. `Upgrades`:

```csharp:Upgrades.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// Which upgrades are bought, and buying one: the money is spent, the upgrade
// is applied to its bar, and its id is kept for the save. Only the upgrades
// of a bar you've built are for sale.
public class Upgrades : MonoBehaviour
{
    [SerializeField] UpgradeLibrary library;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Wallet wallet;

    readonly List<string> boughtIds = new List<string>();

    public UpgradeLibrary Library { get { return library; } }
    public IReadOnlyList<string> BoughtIds { get { return boughtIds; } }

    public event Action<Upgrade> Bought;

    public bool IsBought(Upgrade upgrade)
    {
        return boughtIds.Contains(upgrade.Id);
    }

    public bool IsForSale(Upgrade upgrade)
    {
        if (IsBought(upgrade))
        {
            return false;
        }
        foreach (JuiceStand stand in stands)
        {
            if (upgrade.AppliesTo(stand) && stand.IsOpen)
            {
                return true;
            }
        }
        return false;
    }

    public bool TryBuy(Upgrade upgrade)
    {
        if (!IsForSale(upgrade) || !wallet.TrySpend(upgrade.Cost))
        {
            return false;
        }
        Apply(upgrade);
        Bought?.Invoke(upgrade);
        return true;
    }

    // Loading a save: every upgrade bought before, applied again, for nothing.
    public void Restore(IEnumerable<string> ids)
    {
        foreach (string id in ids)
        {
            if (!library.TryGetUpgrade(id, out Upgrade upgrade))
            {
                Debug.LogWarning($"The save has an upgrade this game doesn't know: {id}", this);
            }
            else if (!IsBought(upgrade))
            {
                Apply(upgrade);
            }
        }
    }

    void Apply(Upgrade upgrade)
    {
        foreach (JuiceStand stand in stands)
        {
            if (upgrade.AppliesTo(stand))
            {
                upgrade.ApplyTo(stand);
            }
        }
        boughtIds.Add(upgrade.Id);
    }
}
```

6. Read `TryBuy`: for sale (not bought, and its bar open), then the money (`TrySpend`
   refuses if there isn't enough, and spends if there is), then `Apply`. `Restore` is for
   loading a save (Chapter 14): an id the library doesn't know is a warning, not a crash.
7. **The price tag** follows the price now. The final `PriceTag`:

```csharp:PriceTag.cs
using TMPro;
using UnityEngine;

// The sign on a counter: the bar's name and a cup's price, shown again
// whenever the price changes.
public class PriceTag : MonoBehaviour
{
    [SerializeField] JuiceStand stand;
    [SerializeField] TMP_Text text;

    void OnEnable()
    {
        stand.Changed += Show;
        Show();
    }

    void OnDisable()
    {
        stand.Changed -= Show;
    }

    void Show()
    {
        text.text = $"{stand.Info.DisplayName}  ${NumberFormat.Money(stand.Price)}";
    }
}
```

8. **Sixteen upgrades.** In `Data/Upgrades`, from the balance sheet's Office table: for each
   bar, **Create → Juice → Price Upgrade** twice and **Create → Juice → Speed Upgrade**
   twice. Name each asset after its bar and itself (`Orange Bar - Sweet Oranges`), and fill
   it in:

| Field | Recipe 1 | Recipe 2 | Machine 1 | Machine 2 |
| --- | --- | --- | --- | --- |
| **Id** | `orange-bar-price-1` | `orange-bar-price-2` | `orange-bar-speed-1` | `orange-bar-speed-2` |
| **Description** | `Orange Bar: every cup sells for ×1.5.` | `… ×1.5 again.` | `Orange Bar: cups made ×1.5 as fast.` | `… as fast again.` |
| **Picture** | the fruit's icon | the cup's icon | `Emoji/high_voltage_3d` | `Emoji/rocket_3d` |
| **Factor** | `1.5` | `1.5` | `1.5` | `1.5` |

   **Display Name** and **Cost** from the sheet, **Target** the bar's `BarInfo`. (Select
   two assets at once to set what they share, like **Factor**.)

9. In `Data`, **Create → Juice → Upgrade Library**, `Upgrade Library`: drag all sixteen
   into **Upgrades**.
10. An empty GameObject, `Upgrades`, with **Upgrades**: **Library** the library, **Stands**
    the four bars, **Wallet** the `Wallet`.

### Do it — your own levels

11. `ChefLevels`, in `Chef`:

```csharp:ChefLevels.cs
using System;
using UnityEngine;

// Your own two upgrades, bought in the Office: a bigger tray, so your hands
// hold more, and faster flip-flops. Each has levels, with the designer's
// numbers and prices; the price at index n is what level n + 1 costs.
public class ChefLevels : MonoBehaviour
{
    [SerializeField] Chef chef;
    [SerializeField] Carrier carrier;
    [SerializeField] Wallet wallet;
    [SerializeField] int[] trayCapacity = { 4, 6, 8, 10, 12 };
    [SerializeField] int[] trayPrice = { 80, 300, 1000, 3000 };
    [SerializeField] float[] walkSpeed = { 4.5f, 5f, 5.5f, 6f };
    [SerializeField] int[] flipFlopPrice = { 120, 600, 2000 };

    public int TrayLevel { get; private set; }
    public int FlipFlopLevel { get; private set; }
    public int TrayCapacity { get { return trayCapacity[TrayLevel]; } }
    public bool TrayIsMax { get { return TrayLevel >= trayPrice.Length; } }
    public bool FlipFlopsAreMax { get { return FlipFlopLevel >= flipFlopPrice.Length; } }
    public int NextTrayPrice { get { return TrayIsMax ? 0 : trayPrice[TrayLevel]; } }
    public int NextFlipFlopPrice { get { return FlipFlopsAreMax ? 0 : flipFlopPrice[FlipFlopLevel]; } }

    public event Action Changed;

    void Start()
    {
        Apply();
    }

    public bool TryBuyTray()
    {
        if (TrayIsMax || !wallet.TrySpend(NextTrayPrice))
        {
            return false;
        }
        TrayLevel++;
        Apply();
        return true;
    }

    public bool TryBuyFlipFlops()
    {
        if (FlipFlopsAreMax || !wallet.TrySpend(NextFlipFlopPrice))
        {
            return false;
        }
        FlipFlopLevel++;
        Apply();
        return true;
    }

    // Loading a save, or a new beach (both 0).
    public void Restore(int trayLevel, int flipFlopLevel)
    {
        TrayLevel = Mathf.Clamp(trayLevel, 0, trayPrice.Length);
        FlipFlopLevel = Mathf.Clamp(flipFlopLevel, 0, flipFlopPrice.Length);
        Apply();
    }

    void Apply()
    {
        carrier.Hands.Capacity = trayCapacity[TrayLevel];
        chef.Speed = walkSpeed[FlipFlopLevel];
        Changed?.Invoke();
    }
}
```

12. Read the arrays. Level 0 is where you start: four in your hands. `trayPrice[0]` is what
    level **1** costs, $80, so there's one price fewer than levels, and `TrayIsMax` is
    "the level is past the last price". The numbers are the designer's, in the Inspector:
    the tray's (4, 6, 8, 10, 12) and the flip-flops' (4.5, 5, 5.5, 6 m/s). `Apply` sets
    the hands' `Capacity` and the chef's `Speed`: the properties Chapters 2 and 4 left for
    this.
13. Add **Chef Levels** to the `Chef` **in the scene** (it needs the scene's `Wallet`):
    **Chef** and **Carrier** are its own, **Wallet** the `Wallet`.

### Do it — buttons and rows

14. **The Candy Button.** In `Safe Area`, **UI → Image**, `Candy Button`, 290 × 114:
    **Source Image** `Button Blue`, **Image Type** `Sliced`. **Add Component → Button**: in
    its colours, **Pressed** `#D1D1D1`, **Disabled** white. A child **Text - TextMeshPro**,
    `Label`, stretched with **Left** 14, **Top** 10, **Right** 14, **Bottom** 12: `Button`,
    Lilita One, size 44, white, centred, **Material Preset** the Shadow one, **Raycast
    Target** off. Drag it into `Prefabs/UI`, and delete it.
15. Three **variants** of it: `Candy Button Green`, `Candy Button Grey` and `Candy Button
    Red`, each with its own **Source Image** (`Button Green`, `Button Grey`, `Button Red`).
    One override each: change the base's font, and all four change.
16. **The Icon Button**, 122 × 126: an Image, `Square Blue`, **Preserve Aspect**; a
    **Button**; and a child Image `Icon`, stretched with **Left** 22, **Top** 20, **Right**
    22, **Bottom** 24, `Emoji/star_3d`, **Preserve Aspect**. Into `Prefabs/UI`.
17. **The Upgrade Row**, the row the intern's shop makes, one per upgrade. An Image, `Upgrade
    Row`, 1000 × 150, `Panel Light`, **Sliced**, **Raycast Target** off; a **Layout
    Element** with **Preferred Height** `150` and **Flexible Width** `1` (a list will lay
    it out). Inside, with these exact names (the shop finds them by name):

| Child | What | Anchor (pivot the same) | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture` | Image | middle-left | (20, 0) | 104 × 104 | any emoji, **Preserve Aspect** |
| `Name` | TextMeshPro | top-left | (140, −12) | 560 × 50 | `Sweet Oranges`, size 40, brown `#7A4A1E` |
| `Description` | TextMeshPro | top-left | (140, −62) | 560 × 76 | size 27, light brown `#B07A3E` |
| `Buy Button` | `Candy Button Green` | middle-right | (−12, 0) | 260 × 114 | its `Label`: `$150` |

Into `Prefabs/UI`.

18. In `Scripts/UI`, `LevelRow`:

```csharp:LevelRow.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A row for something with levels, in the Office: your tray, your flip-flops,
// the Juice Kart. Its name, its level, and the next level's price on a button.
public class LevelRow : MonoBehaviour
{
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text levelText;
    [SerializeField] Button buyButton;
    [SerializeField] Image buyButtonImage;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Sprite canBuySprite;
    [SerializeField] Sprite cannotBuySprite;

    public event Action BuyPressed;

    void OnEnable()
    {
        buyButton.onClick.AddListener(OnBuyPressed);
    }

    void OnDisable()
    {
        buyButton.onClick.RemoveListener(OnBuyPressed);
    }

    // A price of 0 means the last level: nothing more to buy. Below 0: not yet
    // (the kart before it's built).
    public void Show(string title, string level, int price, int money)
    {
        nameText.text = title;
        levelText.text = level;
        bool canBuy = price > 0 && price <= money;
        priceText.text = price < 0 ? "-" : price == 0 ? "Max" : "$" + NumberFormat.Money(price);
        buyButton.interactable = canBuy;
        buyButtonImage.sprite = canBuy ? canBuySprite : cannotBuySprite;
    }

    void OnBuyPressed()
    {
        BuyPressed?.Invoke();
    }
}
```

A row doesn't know what it sells: it shows what it's told, and raises `BuyPressed`.
The panel above it decides what to buy. A price below 0 shows `-` (not yet), 0 shows
`Max`.

19. **The Level Row**: like the Upgrade Row, 130 high, **Preferred Height** `130`, with
    `Name` (top-left, (30, −12), 560 × 50, `Bigger Tray`, size 40, brown), `Level`
    (top-left, (30, −66), 560 × 50, `Holds 4`, size 30, light brown) and a `Buy Button`
    (`Candy Button Green`, middle-right, (−12, 0), 260 × 108). Add **Level Row**: the
    texts, the button, its Image as **Buy Button Image**, its `Label` as **Price Text**,
    **Can Buy Sprite** `Button Green`, **Cannot Buy Sprite** `Button Grey`. Into
    `Prefabs/UI`.

### Do it — the panel

20. In `Scripts/Flow`, `PanelSwitcher`:

```csharp:PanelSwitcher.cs
using System;
using UnityEngine;

// The panels over the Beach (the Office's upgrades, the Staff Hut, Trophies,
// Settings): one open at a time. A button calls Toggle with its panel, set in
// its On Click () list; a mat calls Open; a panel's close button calls CloseAll.
public class PanelSwitcher : MonoBehaviour
{
    [SerializeField] GameObject[] panels;

    public bool IsAnyOpen { get; private set; }

    public event Action<bool> OpenChanged;  // true when a panel opens, false when the last closes

    void Start()
    {
        CloseAll();
    }

    // Opens this panel and closes the others; a second press closes it.
    public void Toggle(GameObject panel)
    {
        bool wasOpen = panel.activeSelf;
        foreach (GameObject each in panels)
        {
            each.SetActive(false);
        }
        panel.SetActive(!wasOpen);
        SetOpen(!wasOpen);
    }

    // Opens this panel, closing any other: the Office and Staff Hut mats.
    public void Open(GameObject panel)
    {
        foreach (GameObject each in panels)
        {
            each.SetActive(each == panel);
        }
        SetOpen(true);
    }

    public void CloseAll()
    {
        foreach (GameObject each in panels)
        {
            each.SetActive(false);
        }
        SetOpen(false);
    }

    void SetOpen(bool isOpen)
    {
        if (isOpen == IsAnyOpen)
        {
            return;
        }
        IsAnyOpen = isOpen;
        OpenChanged?.Invoke(isOpen);
    }
}
```

21. **The Panel.** In `Safe Area`, an empty `Panels`, stretched, with **Left** 0, **Top**
    170, **Right** 0, **Bottom** 40: between the top bar and the stick. Add **Panel
    Switcher**. Inside it, an empty `Panel`, stretched with no gaps:

| Child | What | Anchor | Set |
| --- | --- | --- | --- |
| `Frame` | Image | stretched: **Left** 12, **Top** 60, **Right** 12, **Bottom** 12 | `Panel`, **Sliced**, **Raycast Target** on: a tap on the panel mustn't reach the game behind |
| `Ribbon` | Image | top-centre with its pivot, **Pos** (0, 0), 660 × 128 | `Ribbon`, **Sliced** |
| `Ribbon/Title` | TextMeshPro | stretched: **Left** 90, **Top** 10, **Right** 90, **Bottom** 34 | `Panel`, size 50, white, centred, the Shadow preset |
| `Close Button` | the **Icon Button** | top-right with its pivot, **Pos** (0, −36), 104 × 108 | **Source Image** `Icon Close`; untick its `Icon` |
| `Content` | empty | stretched: **Left** 52, **Top** 160, **Right** 52, **Bottom** 48 | where each panel puts its own things |

Drag `Panel` into `Prefabs/UI`, and delete it.

22. **The Office panel**: a variant of `Panel`, `Upgrades Panel`. Open it: its root is
    called `Office`, and so is its title. In `Content`:
    - `Levels`: an empty, top-stretch with its pivot at the top, **Height** `430`, with a
      **Vertical Layout Group** (**Spacing** 12, **Control Child Size** both ticked, **Child
      Force Expand** neither). Two **Level Row**s in it: `Tray Row`, `Flip-flop Row`.
      (Chapter 11 adds a third.)
    - A scrolling list under it: **UI → Scroll View**, stretched with **Top** `440`,
      without its scrollbars (delete them; untick **Horizontal**) or its Image. Its
      `Viewport`: a **Rect Mask 2D** instead of its Mask, and an Image with **A** 0
      (invisible, but it catches the drag). Its `Content`, renamed `List`: a **Vertical
      Layout Group** (**Spacing** 12, **Control Child Size** both, **Child Force Expand**
      only **Width**) and a **Content Size Fitter** (**Vertical Fit** `Preferred Size`):
      the list grows with its rows, and the view scrolls it.
    - `All Bought`: a TextMeshPro, centred, **Pos Y** −200, 800 × 200, `Nothing to buy:
      build another bar.`, size 44, brown, centred. Untick it (Chapter 21 uses it).
23. In `Scripts/UI`, `OfficeLevels`, for now with your two rows:

```csharp
using UnityEngine;

// The top of the Office: rows with levels, above the upgrades. Your tray and
// your flip-flops.
public class OfficeLevels : MonoBehaviour
{
    [SerializeField] ChefLevels chef;
    [SerializeField] Wallet wallet;
    [SerializeField] LevelRow trayRow;
    [SerializeField] LevelRow flipFlopRow;

    void OnEnable()
    {
        wallet.MoneyChanged += OnMoneyChanged;
        trayRow.BuyPressed += BuyTray;
        flipFlopRow.BuyPressed += BuyFlipFlops;
        Show();
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= OnMoneyChanged;
        trayRow.BuyPressed -= BuyTray;
        flipFlopRow.BuyPressed -= BuyFlipFlops;
    }

    void OnMoneyChanged(int money)
    {
        Show();
    }

    void BuyTray()
    {
        chef.TryBuyTray();
        Show();
    }

    void BuyFlipFlops()
    {
        chef.TryBuyFlipFlops();
        Show();
    }

    void Show()
    {
        int money = wallet.Money;
        trayRow.Show("Bigger Tray", $"Holds {chef.TrayCapacity}", chef.NextTrayPrice, money);
        flipFlopRow.Show("Faster Flip-flops", $"Level {chef.FlipFlopLevel + 1}", chef.NextFlipFlopPrice, money);
    }
}
```

24. Drag `Upgrades Panel` into `Panels`, and add **Office Levels** to it **in the scene**:
    **Chef** the scene's `Chef`, **Wallet**, **Tray Row**, **Flip-flop Row**. On its `Close
    Button`'s **On Click ()**, **+**, drag in `Panels`, and choose **PanelSwitcher →
    CloseAll**. On `Panels`' **Panel Switcher**, **Panels**: the Office.

### Do it — the intern's shop

25. Sam forwards a file: *"Last summer's intern wrote the shop. It works, and we need it
    now: use it as it is. Before release we'll clean it up (that's yours too, in Chapter
    21). Read it first, and keep a list of what you'd change."* Your trainer shares
    `UpgradeShop.cs`. Put it in `Scripts/UI`, and read it:

```csharp
using UnityEngine;
using UnityEngine.UI;
using TMPro;

// upgrade shop
public class UpgradeShop : MonoBehaviour
{
    public Upgrade[] list;
    public Upgrades u;
    public Wallet w;
    public GameObject row;
    public Transform content;
    GameObject[] rows;

    void Start()
    {
        // make the rows
        rows = new GameObject[list.Length];
        for (int i = 0; i < list.Length; i++)
        {
            rows[i] = Instantiate(row, content);
            int n = i;
            rows[i].transform.Find("Buy Button").GetComponent<Button>().onClick.AddListener(() => u.TryBuy(list[n]));
        }
    }

    void Update()
    {
        // update the rows
        for (int i = 0; i < list.Length; i++)
        {
            if (u.IsBought(list[i]))
                rows[i].SetActive(false);
            else
                rows[i].SetActive(true);
            rows[i].transform.Find("Picture").GetComponent<Image>().sprite = list[i].Picture;
            rows[i].transform.Find("Name").GetComponent<TMP_Text>().text = list[i].DisplayName;
            rows[i].transform.Find("Description").GetComponent<TMP_Text>().text = list[i].Description;
            rows[i].transform.Find("Buy Button/Label").GetComponent<TMP_Text>().text = "$" + Fmt(list[i].Cost);
            if (w.Money >= list[i].Cost)
                rows[i].transform.Find("Buy Button").GetComponent<Button>().interactable = true;
            else
                rows[i].transform.Find("Buy Button").GetComponent<Button>().interactable = false;
        }
    }

    // format the money
    string Fmt(int m)
    {
        if (m >= 1000)
            return (m / 1000f).ToString("0.0") + "K";
        return m.ToString();
    }
}
```

26. Start your list against `STYLE_GUIDE.md`. You should find at least these: `public`
    fields; names like `u`, `w` and `n`; comments that say what, not why; `if` and `else`
    without braces; parts found by their names with `transform.Find`, and `GetComponent`,
    **every frame**; text rebuilt from strings **every frame**, even when nothing changed;
    the rows of a bar not built yet shown, with a button that does nothing; and `Fmt`.
    What does `Fmt` show for $1,000,000? Work it out, then keep the list: Chapter 20
    measures what it costs, and Chapter 21 fixes it.
27. One good thing to notice: `int n = i;` before the lambda. Each button's lambda keeps its
    own copy of `n`. Without it, every lambda would share the loop's `i`, and every button
    would buy the upgrade after the last one.
28. The shop needs no changes to use. Select the Office panel **in the scene** (the shop
    needs the scene's `Upgrades` and `Wallet`), and **Add Component → Upgrade Shop**.
    **List**: the sixteen upgrades. **U** the `Upgrades`, **W** the `Wallet`, **Row** the
    **Upgrade Row** prefab, **Content** the panel's `List` (in `Content/Scroll
    View/Viewport`).

### Do it — the mat

29. In `Bar`, `ShopMat`:

```csharp:ShopMat.cs
using UnityEngine;

// A mat that opens a panel while the chef stands on it: the Office's upgrades,
// the Staff Hut's helpers. It trades nothing; it only notices who arrives.
public class ShopMat : Station
{
    [SerializeField] GameObject panel;
    [SerializeField] PanelSwitcher panels;

    protected override void OnArrived(Carrier carrier)
    {
        if (carrier.IsChef)
        {
            panels.Open(panel);
        }
    }

    protected override void Trade(Carrier carrier)
    {
    }
}
```

`Trade` must be written, since it's abstract; a mat trades nothing, so its body is
empty. What it does is in `OnArrived`, the hook `Station` left for this.

30. **The Shop Mat prefab.** An empty `Shop Mat`, with a trigger **Box Collider** (**Center**
    (0, 1, 0), **Size** (1.6, 2, 1.6)) and **Shop Mat**. Inside: a 1.6 m flat mat, colour
    `#19B6E8` (blue); and `Sign`, a World Space canvas with **Billboard** at (0, 2.3, 1.2),
    220 × 70, holding `Back` (`Ribbon`, **Sliced**, stretched) and `Text` (stretched with
    **Left** 30, **Top** 6, **Right** 30, **Bottom** 12, `Office`, size 36, white, the
    Shadow preset). Into `Prefabs`.
31. **The Office**, a variant: `Office`. In it, `Art/Bar/kitchentable_A` at (0, 0, 1.5),
    **Scale** (0.7, 0.9, 0.5), with a **Box Collider**, and `Art/Bar/chair_A` behind it at
    (0, 0, 2.2), **Rotation Y** 180. A desk on the sand.
32. Put an `Office` in the scene at (7.4, 0, −6.4): **Panel** the Office panel, **Panels**
    `Panels`. Untick it.
33. **Its spot**: `Spot Office` in `Build Spots`, **Id** `office`, `Office`, **Price**
    `200`, at (7.4, 0, −6.4), **Builds** `Office`, picture `Emoji/chart_increasing_3d`.
    The balance sheet has it after the Apple Bar: `Spot Apple Bar`'s **Next** is now `Spot
    Office` and `Spot Table 3`. Add it to the **Build List**'s **Spots**.

### Do it — the action maps

34. In `Scripts`, a folder `Input`. In it, `Controls`, for now:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The two action maps. While a panel is open the Chef map is off and the
// Panel map is on: the stick can't walk you off the Office mat while you
// shop, and Escape closes the panel.
public class Controls : MonoBehaviour
{
    [SerializeField] InputActionAsset actions;
    [SerializeField] PanelSwitcher panels;

    InputActionMap chefMap;
    InputActionMap panelMap;
    InputAction close;

    void Awake()
    {
        chefMap = actions.FindActionMap("Chef", true);
        panelMap = actions.FindActionMap("Panel", true);
        close = panelMap.FindAction("Close", true);
    }

    void OnEnable()
    {
        close.performed += OnClose;
        panels.OpenChanged += OnPanelOpenChanged;
        OnPanelOpenChanged(panels.IsAnyOpen);
    }

    void OnDisable()
    {
        close.performed -= OnClose;
        panels.OpenChanged -= OnPanelOpenChanged;
        chefMap.Disable();
        panelMap.Disable();
    }

    void OnPanelOpenChanged(bool isOpen)
    {
        if (isOpen)
        {
            chefMap.Disable();
            panelMap.Enable();
        }
        else
        {
            panelMap.Disable();
            chefMap.Enable();
        }
    }

    void OnClose(InputAction.CallbackContext context)
    {
        panels.CloseAll();
    }
}
```

35. Read it. `FindActionMap("Chef", true)`: the `true` throws an error at once if there's
    no such map, instead of handing back `null` for a mistake to show up later. `performed`
    is the event a Button action raises when it's pressed. `OnEnable` asks the switcher
    straight away, so the maps are right from the first frame, not from the first panel.
36. An empty GameObject, `Controls`, with **Controls**: **Actions** `Juice Tycoon Controls`,
    **Panels** `Panels`.

### Test it

- **Play**, and build up to the Apple Bar: the Office's spot appears by the east edge.
  Build it: a desk and a blue mat with a sign. Step on the mat: the Office opens. You
  can't walk; the stick does nothing.
- The Office: **Bigger Tray, Holds 4, $80**. With $80, the button is green; buy it: Holds
  6, and the next is $300. Close the panel (**Escape**, or the cross), and pick up
  oranges: six now.
- In the list: the Orange and Apple Bars' upgrades, and the other bars' too, with buttons
  that work if you have the money but do nothing (their bars aren't open). That's on your
  list. Buy **Sweet Oranges**: its row goes, and the Orange Bar's tag says `$8` (5 × 1.5 =
  7.5, rounded). **Faster Juicer**: the ring turns half as fast again.
- Close the panel and step back on the mat: it opens again. Stand still on it after
  closing: it doesn't, until you step off and on. `OnArrived` is called when you arrive.

### Commit

*Add upgrades, the Office, the chef's levels, and the action maps.*

### Challenge

Add a third kind of upgrade, `CrateUpgrade`, that makes a bar's crate fill twice as fast.
Which classes change? (One new class, and `JuiceStand` and `FruitCrate` learn a factor.
The shop doesn't change at all.)

## Chapter 10 — Helpers

**Goal:** staff. Build the **Staff Hut**, step on its green mat, and hire, for each bar, a
**runner** and a **cashier**. The runner walks the bar's loop for ever: fruit from the
crate to the emptiest machine, cups from the machine to the counter. The cashier stands
at the till, and the bar serves without you. And a strip slides down from the top of the
screen to say so: *Orange Bar Runner hired!*

### Idea — hands like yours

The stations trade with a **Carrier**, and never ask whose hands it has. So a runner is a
Carrier, a Walker, and a little script that decides **where to stand, and for how long**:

| Job | Walks to | Moves on when |
| --- | --- | --- |
| `ToCrate` → `AtCrate` | the crate's mat | its hands are full, or hold all the machine has room for, or 3 s have passed and it holds something |
| `ToMachine` → `AtMachine` | the emptiest built machine | its fruit's in and it holds cups (full, or after 3 s); or it's empty-handed after 3 s |
| `ToCounter` → `AtCounter` | the till | its hands are empty, or 3 s have passed |

It picks nothing up itself: the crate's `Trade` fills its hands while it stands there,
exactly as it fills yours. A cashier is simpler: it walks to the till, tells the counter
(`SetCashier(true)`), and stays.

It fetches only what fits, too. A crate fills faster than most machines use fruit, so a
runner that always filled its hands would soon arrive with fruit and nowhere to put it.
With the machine full, it skips the crate and goes straight there for cups
(`StartNextTrip`).

A station doesn't ask whose hands they are, and that has a price: a helper walks straight
to where it's going, across anyone's mat. So a helper **shuts its hands** while it walks
(`HandsOpen`), and opens them when it arrives. It trades only where it was sent.

Two physics details make it work:

- A trigger only notices something with a **Rigidbody**. The chef has one; a helper gets
  one too, **Is Kinematic**: physics doesn't move it (its Walker does), but triggers see
  it.
- A helper mustn't shove the chef, or block him at the till. Each is on its own **layer**,
  and in the **Layer Collision Matrix**, `Chef` and `Helpers` don't collide.

Hiring is an upgrade: `HireUpgrade : Upgrade`, whose `ApplyTo` calls `stand.Hire(kind)`.
The shop, the save and the library treat it like any other.

### Idea — a toast, and a queue of messages

Two things can happen at once (a table built and a runner hired in the same second), and
each deserves its moment on the screen. So messages wait in a `Queue`: a **ToastQueue**
listens to the events (`Upgrades.Bought`, `BuildList.SpotBuilt`), makes a **ToastMessage**
for each, and shows the next when the toast is free. The **Toast** itself only knows how
to slide down, wait, and slide back up, and raises `Hidden` when it's done.

### Do it — the helper

1. In `People`, `HelperKind`:

```csharp:HelperKind.cs
// What a helper does: carries for a bar, or serves at its till.
public enum HelperKind
{
    Runner,
    Cashier
}
```

2. The next three need each other: the helper asks its bar for the crate and the
   emptiest machine, the bar hires helpers, and a hire upgrade asks the bar to hire.
   Unity shows errors until all three are saved.

<!-- check: together -->

`Helper`, in `People`:

```csharp:Helper.cs
using UnityEngine;

// A helper hired at the Staff Hut. A cashier walks to its bar's till and stays
// there: the counter serves without you. A runner walks the bar's loop for
// ever: fruit from the crate to the machine, cups from the machine to the
// counter. It has a Carrier, as you do, so the stations trade with it just as
// they do with you; the runner only decides where to stand, and how long. Its
// hands are shut while it walks: another bar's mat on the way mustn't fill them.
public class Helper : MonoBehaviour
{
    enum Job { ToCrate, AtCrate, ToMachine, AtMachine, ToCounter, AtCounter }

    static readonly int CarryingId = Animator.StringToHash("Carrying");

    [SerializeField] HelperKind kind;
    [SerializeField] Walker walker;
    [SerializeField] Carrier carrier;
    [SerializeField] Animator animator;
    [SerializeField] float patienceSeconds = 3f;    // the longest it waits at one place

    JuiceStand stand;
    Job job;
    Juicer machine;
    float waitUntil;

    public HelperKind Kind { get { return kind; } }
    public bool IsWorking { get { return gameObject.activeSelf; } }

    void OnEnable()
    {
        walker.Arrived += OnArrived;
    }

    void OnDisable()
    {
        walker.Arrived -= OnArrived;
    }

    public void StartWork(JuiceStand bar, Vector3 door)
    {
        stand = bar;
        carrier.HandsOpen = false;
        transform.position = door;
        gameObject.SetActive(true);
        if (kind == HelperKind.Cashier)
        {
            walker.WalkTo(stand.Counter.Till);
        }
        else
        {
            GoTo(Job.ToCrate);
        }
    }

    void OnArrived()
    {
        carrier.HandsOpen = true;
        if (kind == HelperKind.Cashier)
        {
            stand.Counter.SetCashier(true);
            walker.FaceTowards(stand.Counter.Front);
            return;
        }
        waitUntil = Time.time + patienceSeconds;
        if (job == Job.ToCrate)
        {
            job = Job.AtCrate;
        }
        else if (job == Job.ToMachine)
        {
            job = Job.AtMachine;
        }
        else if (job == Job.ToCounter)
        {
            job = Job.AtCounter;
        }
    }

    void Update()
    {
        animator.SetBool(CarryingId, carrier.IsCarrying);
        if (kind == HelperKind.Cashier)
        {
            return;
        }
        ItemPile hands = carrier.Hands;
        bool waited = Time.time >= waitUntil;
        switch (job)
        {
            case Job.AtCrate:
                // No more fruit than the machine has room for.
                if (hands.IsFull || hands.Count >= stand.EmptiestJuicer().FruitRoom || (waited && !hands.IsEmpty))
                {
                    GoTo(Job.ToMachine);
                }
                break;
            case Job.AtMachine:
                // The fruit goes in first; then the cups come out onto the empty hands.
                bool holdsCups = hands.TopInfo == stand.Info.Cup;
                if (holdsCups && (hands.IsFull || waited))
                {
                    GoTo(Job.ToCounter);
                }
                else if (hands.IsEmpty && waited)
                {
                    StartNextTrip();
                }
                break;
            case Job.AtCounter:
                if (hands.IsEmpty || waited)
                {
                    StartNextTrip();
                }
                break;
        }
    }

    // Fruit, if a machine has room for some; if not, its cups.
    void StartNextTrip()
    {
        GoTo(stand.EmptiestJuicer().FruitRoom > 0 ? Job.ToCrate : Job.ToMachine);
    }

    void GoTo(Job next)
    {
        job = next;
        carrier.HandsOpen = false;
        if (next == Job.ToCrate)
        {
            walker.WalkTo(stand.CratePosition);
        }
        else if (next == Job.ToMachine)
        {
            machine = stand.EmptiestJuicer();
            walker.WalkTo(machine.transform.position);
        }
        else if (next == Job.ToCounter)
        {
            walker.WalkTo(stand.Counter.Till);
        }
    }
}
```

Add these to `JuiceStand`: the fields with its other fields, the rest at the end.

<!-- check: add to JuiceStand -->
```csharp
public class JuiceStand : MonoBehaviour
{
    // … as before …

    [SerializeField] FruitCrate crate;
    [SerializeField] Juicer[] juicers;
    [SerializeField] Helper runner;
    [SerializeField] Helper cashier;
    [SerializeField] Transform staffDoor;   // the Staff Hut's: where a new helper appears

    public bool HasRunner { get { return runner.IsWorking; } }
    public bool HasCashier { get { return cashier.IsWorking; } }
    public Vector3 CratePosition { get { return crate.transform.position; } }

    // The machine for the runner: the built one with the least fruit in it.
    public Juicer EmptiestJuicer()
    {
        Juicer best = null;
        foreach (Juicer juicer in juicers)
        {
            if (juicer.isActiveAndEnabled && (best == null || juicer.Fruit < best.Fruit))
            {
                best = juicer;
            }
        }
        return best;
    }

    // Hired at the Staff Hut: the helper walks over from its door.
    public void Hire(HelperKind kind)
    {
        Helper helper = kind == HelperKind.Runner ? runner : cashier;
        if (!helper.IsWorking)
        {
            helper.StartWork(this, staffDoor.position);
        }
    }
}
```

And `HireUpgrade`, in `Upgrades`:

```csharp:HireUpgrade.cs
using UnityEngine;

// A helper for one bar, hired at the Staff Hut: a runner who carries, or a
// cashier who serves. An upgrade like the others: the shop sells it the same
// way, and doesn't need to know what kind it is.
[CreateAssetMenu(fileName = "New Hire", menuName = "Juice/Hire Upgrade")]
public class HireUpgrade : Upgrade
{
    [SerializeField] HelperKind kind;

    public HelperKind Kind { get { return kind; } }

    public override void ApplyTo(JuiceStand stand)
    {
        stand.Hire(kind);
    }
}
```

<!-- check: end -->

3. Read `Helper`:
   - `enum Job` is declared **inside** the class: nobody else needs it. A private type,
     like a private field.
   - `OnArrived` only says "I'm there now" (`ToCrate` becomes `AtCrate`) and starts the
     patience clock. `Update` decides when to go: a state machine whose states are ended by
     what's in its hands, or by time.
   - `stand.EmptiestJuicer()`: with two juicers, the runner feeds the one with less fruit.
     The juicer's `Fruit` property, from Chapter 7, was for this.
   - `IsWorking` is `gameObject.activeSelf`: a helper not hired is a switched-off
     GameObject, already in the bar, waiting.
   - `HandsOpen`: `GoTo` and `StartWork` shut the hands, and `OnArrived` opens them. The
     stations still notice the helper walking through; `Station.Update`, from Chapter 7,
     just doesn't trade with it.
   - `hands.Count >= stand.EmptiestJuicer().FruitRoom` at the crate: enough for the machine
     is enough. With the chef's fruit in it already, `FruitRoom` is 0: the runner leaves
     with empty hands, for the cups.
> **Watch out: shut hands.** Without them, the runner looks fine for a while. While this
> game was being made, the Orange Bar's runner stood on his mat and never moved again. On
> his way from the Staff Hut he'd crossed a corner of the Apple Bar's juicer mat, and a cup
> of apple juice had hopped into his hands. The Orange Bar's juicer doesn't want it, it
> isn't his bar's cup to carry, and nothing in `Update` says what to do with anything else.
> No error, nothing in the Console: only a man standing still. When a helper stops, look
> at what it's holding.

> **Watch out: a deadlock.** The next one stood at the Apple Bar with four apples: the ring
> said 6, and the tray was full. He couldn't take cups with fruit in his hands. The machine
> couldn't make a cup, and so make room for fruit, with its tray full. Each was waiting for
> the other, for ever: that's a **deadlock**. Fetching only what fits stops it happening
> by itself. But the chef can fill the machine while the runner's on his way, so one rule
> breaks the wait whatever happens: with the tray full, a runner's fruit goes in anyway
> (`hasRoom`, in `Juicer.Trade`). The ring can say 7 or more for a moment. When two things
> wait on each other, one of them has to be allowed to give way.

4. **Layers.** **Edit → Project Settings → Physics**, at the bottom: the **Layer Collision
   Matrix**. Untick the box where the `Chef` row meets the `Helpers` column.
5. **The Helper prefab.** An empty `Helper`, on the `Helpers` layer. A **Rigidbody**: tick
   **Is Kinematic**. A **Capsule Collider**: **Center** (0, 0.9, 0), **Radius** `0.3`,
   **Height** `1.8`. A **Walker** (**Speed** `3`). A child `Hands` at (0, 1, 0.45) with an
   **Item Pile** (**Capacity** `4`, 1 × 1, **Spacing** `0`). A **Carrier** (**Hands**
   `Hands`, **Is Chef** unticked). A **Helper** (**Walker**, **Carrier**). Into
   `Prefabs/People`.
6. Two variants of it, as with the customers: `Runner`, with `Art/Characters/Worker_Male`
   as its `Model` (and **Kind** `Runner`), and `Cashier`, with `Worker_Female` (**Kind**
   `Cashier`). Each model: the `Person` controller, no root motion, its whole hierarchy on
   the `Helpers` layer (Unity asks: **Yes, change children**), and dragged into **Helper**'s
   and **Walker**'s **Animator**.
7. Open the `Juice Stand` prefab. Drag a `Runner` and a `Cashier` into its root, and untick
   both: every bar has its two helpers, waiting. On the root's **Juice Stand**: **Crate**
   `Crate`, **Juicers** `Juicer` and `Juicer 2`, **Runner**, **Cashier**.

### Do it — the Staff Hut

8. Eight hire upgrades in `Data/Upgrades`: **Create → Juice → Hire Upgrade**, two per bar,
   from the balance sheet's Staff Hut table:

| Field | Runner | Cashier |
| --- | --- | --- |
| Asset | `Orange Bar - Orange Bar Runner` | `Orange Bar - Orange Bar Cashier` |
| **Id** | `orange-bar-runner` | `orange-bar-cashier` |
| **Display Name** | `Orange Bar Runner` | `Orange Bar Cashier` |
| **Description** | `Carries fruit to the machine and cups to the counter.` | `Serves at the till, so the bar sells without you.` |
| **Picture** | `Emoji/office_worker_3d_default` | `Emoji/cook_3d_default` |
| **Kind** | `Runner` | `Cashier` |

   **Cost** from the sheet, **Target** the bar. Add all eight to the `Upgrade Library`.

9. **The Staff Hut panel**: a variant of `Panel`, `Staff Panel`, its root and title `Staff
   Hut`. In its `Content`, a scrolling list made as in the Office (filling `Content`, no
   `Levels`), and an unticked `All Bought` text: `Everyone's hired: build another bar to
   hire more.` Drag it into `Panels`, add it to the switcher's **Panels**, wire its
   `Close Button` to **CloseAll**, and add an **Upgrade Shop** to it in the scene: the
   eight hires, `Upgrades`, `Wallet`, the **Upgrade Row**, its `List`. The intern's shop
   sells helpers as it sells recipes: it only knows `Upgrade`.
10. **The Staff Hut**: a variant of `Shop Mat`, `Staff Hut`. Its sign says `Staff Hut`, its
    mat is `#5CC85C` (green). In it: `Art/Bar/menu` at (0, 0, 1.4), **Scale** 1.6, with a
    **Box Collider**, and two `Art/Bar/chair_stool`s at (−0.6, 0, 1.6) and (0.6, 0, 1.6).
    In the scene, at (7.4, 0, −9.2), unticked: **Panel** the Staff panel, **Panels**
    `Panels`.
11. An empty `Staff Door` at (7.4, 0, −10.2), beside it: new helpers appear there. Select the
    four bars and drag it into **Staff Door**.
12. **Its spot**: `Spot Staff Hut`, **Id** `staff-hut`, `Staff Hut`, **Price** `350`, at
    (7.4, 0, −9.2), **Builds** `Staff Hut`, picture `Emoji/office_worker_3d_default`. Now
    the list is the balance sheet's: `Spot Apple Bar`'s **Next** is `Spot Office` and `Spot
    Staff Hut`, and `Spot Staff Hut`'s **Next** is `Spot Table 3`. Add it to the **Build
    List**.

### Do it — the toast

13. In `Scripts`, a folder `Trophies` (Chapter 12 fills it). In it, `Toast`, for now with a
    coroutine:

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A strip that slides down from the top of the screen with a picture and two
// lines, stays a moment, and slides back up: "Runner hired!", "Table built!".
// One message at a time: ToastQueue waits until IsShowing is false.
public class Toast : MonoBehaviour
{
    [SerializeField] RectTransform strip;
    [SerializeField] Image picture;
    [SerializeField] TMP_Text title;
    [SerializeField] TMP_Text line;
    [SerializeField] float shownY = -40f;       // below the top edge
    [SerializeField] float hiddenY = 260f;      // above it, out of sight
    [SerializeField] float slideTime = 0.35f;
    [SerializeField] float stayTime = 2.2f;

    public bool IsShowing { get; private set; }

    public event Action Hidden;

    void Awake()
    {
        SetY(hiddenY);
        strip.gameObject.SetActive(false);
    }

    public void Show(Sprite icon, string heading, string text)
    {
        picture.sprite = icon;
        title.text = heading;
        line.text = text;
        IsShowing = true;
        strip.gameObject.SetActive(true);
        StartCoroutine(Showing());
    }

    // Down, wait, back up.
    IEnumerator Showing()
    {
        yield return Slide(hiddenY, shownY);
        yield return new WaitForSeconds(stayTime);
        yield return Slide(shownY, hiddenY);
        strip.gameObject.SetActive(false);
        IsShowing = false;
        Hidden?.Invoke();
    }

    IEnumerator Slide(float from, float to)
    {
        for (float t = 0f; t < slideTime; t += Time.deltaTime)
        {
            SetY(Mathf.Lerp(from, to, t / slideTime));
            yield return null;
        }
        SetY(to);
    }

    void SetY(float y)
    {
        strip.anchoredPosition = new Vector2(strip.anchoredPosition.x, y);
    }
}
```

14. `yield return Slide(...)` inside a coroutine runs another coroutine and waits for it to
    finish: `Showing` reads as the three things it does. Chapter 18 does all three in one
    line with DOTween.
15. `ToastMessage`, in `Trophies`: a plain C# class, not a component. It's never on a
    GameObject; it's made with `new`, waits in the queue, and is forgotten.

```csharp:ToastMessage.cs
using UnityEngine;

// One message waiting for the toast.
public class ToastMessage
{
    public Sprite Picture { get; private set; }
    public string Title { get; private set; }
    public string Line { get; private set; }
    public bool IsTrophy { get; private set; }

    public ToastMessage(Sprite picture, string title, string line, bool isTrophy)
    {
        Picture = picture;
        Title = title;
        Line = line;
        IsTrophy = isTrophy;
    }
}
```

Its properties have `private set`: a message can't be changed once made, only read.
`IsTrophy` is for Chapter 12.

16. `ToastQueue`, for now with the upgrades and the build list:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Runner hired!",
// "Table built!". The toast shows them one at a time.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] Upgrades upgrades;
    [SerializeField] BuildList buildList;
    [SerializeField] Sprite builtPicture;
    [SerializeField] Toast toast;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        upgrades.Bought += OnUpgradeBought;
        buildList.SpotBuilt += OnSpotBuilt;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        upgrades.Bought -= OnUpgradeBought;
        buildList.SpotBuilt -= OnSpotBuilt;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a helper gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is HireUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, upgrade.DisplayName + " hired!", upgrade.Description, false));
            ShowNext();
        }
    }

    void OnSpotBuilt(BuildSpot spot)
    {
        waiting.Enqueue(new ToastMessage(builtPicture, spot.DisplayName + " built!", "", false));
        ShowNext();
    }

    void ShowNext()
    {
        if (toast.IsShowing || waiting.Count == 0)
        {
            return;
        }
        ToastMessage next = waiting.Dequeue();
        toast.Show(next.Picture, next.Title, next.Line);
    }
}
```

17. `upgrade is HireUpgrade`: C# 8's `is` asks an object its kind. A recipe
    bought gets no toast (its row going is enough); a helper does. `ShowNext` is called
    both when a message arrives and when the toast hides: if the toast is busy, the new
    message waits, and `Hidden` brings it out.
18. **The Toast.** In `Safe Area`, last (so it's drawn on top), an empty `Toast`,
    top-stretch with its pivot at the top, **Height** `200`, with **Toast**. Inside it,
    `Strip`: an Image, `Panel Light`, **Sliced**, top-centre with its pivot, **Pos Y**
    `260` (out of sight), 980 × 150. In `Strip`: `Picture` (middle-left, **Pos X** 24,
    104 × 104), `Title` (a TextMeshPro, top-left, (148, −16), 800 × 54, size 42, brown) and
    `Line` (top-left, (148, −72), 800 × 64, size 30, light brown). Drag them into
    **Toast**'s fields.
19. An empty `Trophies` GameObject (Chapter 12 adds more to it), with **Toast Queue**:
    **Upgrades**, **Build List** (`Build Spots`), **Built Picture**
    `Emoji/party_popper_3d`, **Toast** `Toast`.

### Test it

- **Play**, and build the Staff Hut: *Staff Hut built!* slides down, waits, and slides up.
  Step on the green mat: the Staff Hut lists the Orange and Apple Bars' runners and
  cashiers (and the others', which do nothing yet: the intern again).
- Hire the **Orange Bar Runner**: *Orange Bar Runner hired!* A worker appears by the hut,
  walks to the crate, waits while oranges hop onto it, walks to the juicer with less
  fruit in it, and then takes the cups to the counter. Walk through him: you can.
- Give the Apple Bar a runner and a cashier, and leave them for five minutes: the ring
  keeps turning, and he never stands still for long. Its machine is slower than its crate,
  so sometimes he skips the crate and goes straight for the cups.
- Watch him leave the till for the crate: he walks across the juicer's mat, past its cups,
  and takes none. The same on the Apple Bar's mats, on his way from the hut.
- Hire the **Orange Bar Cashier**: she walks to the till and turns to face the queue. Go
  and do something else: the Orange Bar serves, and its notes pile up, without you.
- Buy two things fast: the toasts come one after the other, not on top of each other.

### Commit

*Add the runners, the cashiers, the Staff Hut and the toast.*

### Challenge

A runner with a full tray waits at a full counter for three seconds, then goes back to
the crate with its cups still in its hands, and puts nothing in the crate. Watch it
happen. What should it do instead? Change `Helper` so that it waits at the counter for as
long as its hands aren't empty, and see what goes wrong when the bar has no customers.

## C# 9 — Interfaces

**Goal:** you can declare an interface, implement several in a class, talk to unrelated
objects through one (with `GetComponent` too), use Unity's UI interfaces for clicks and
drags, and choose between an interface and a base class (Associate: Programming —
inheritance vs. interfaces).

### Idea — a contract: what, not how

A player, a crate and a familiar can all be hurt, and share nothing else. A base class
would be wrong: a crate isn't a kind of player, and a component's one base class is
already `MonoBehaviour`. They share a **capability**, and an **interface** describes one:
a list of members a class promises to have. It says **what** it can do, never **how**.

```csharp
// Anything that can be hurt. Each class decides what being hurt means.
public interface IDamageable
{
    int Health { get; }

    void TakeDamage(int amount);
}
```

- Its name starts with `I` and names a capability: `IDamageable`, `IUpgradable`.
- Members have no body, only a `;`, and no access word: they're all `public`.
- No fields, and no `new` (CS0144), as with an abstract class (C# 8).

### Idea — implementing one interface, or several

List the interface after the colon, after the base class, and write every member it
asks for, `public`, with the same name and types:

```csharp
public class Crate : MonoBehaviour, IDamageable
{
    [SerializeField] int health = 2;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
        if (health <= 0)
        {
            Debug.Log("The crate breaks.");
            Destroy(gameObject);
        }
    }
}
```

There's no `override`: an interface has nothing to replace. Leave `TakeDamage` out, and
the class doesn't compile:

```csharp
public class Crate : MonoBehaviour, IDamageable
{
    // … Health, but no TakeDamage …
}
// error CS0535: 'Crate' does not implement interface member 'IDamageable.TakeDamage(int)'
```

A class has one base class, but as many interfaces as it needs, separated by commas.
The player can be hurt **and** healed; a crate can't be healed:

```csharp
// Anything that can be healed.
public interface IHealable
{
    void Heal(int amount);
}
```

```csharp
public class PlayerHealth : MonoBehaviour, IDamageable, IHealable
{
    [SerializeField] int health = 5;

    public int Health { get { return health; } }

    public void TakeDamage(int amount)
    {
        health -= amount;
        Debug.Log($"Player: {health} left");
    }

    public void Heal(int amount)
    {
        health += amount;
    }
}
```

### Idea — one type for unrelated classes

A variable, a parameter or a list can have an interface type: it holds any object whose
class implements it. `Blast` hurts whatever it's given, without asking what it got. With
a player and a crate dragged into the fields:

```csharp
[SerializeField] int blastDamage = 2;
[SerializeField] PlayerHealth player;
[SerializeField] Crate crate;

void Start()
{
    Blast(player);
    Blast(crate);
}

void Blast(IDamageable target)
{
    target.TakeDamage(blastDamage);
}
```

```
Player: 3 left
The crate breaks.
```

Two unrelated classes, one method. A familiar or a door can be blasted too, once it
implements `IDamageable`, and `Blast` doesn't change; a `List<IDamageable>` holds them all.

### Idea — GetComponent with an interface

`GetComponent` takes an interface type, and returns whichever component implements it,
or `null` if none does. Spikes can hurt anything that can be hurt:

```csharp
public class Spikes : MonoBehaviour
{
    [SerializeField] int damage = 1;

    void OnTriggerEnter2D(Collider2D other)
    {
        IDamageable target = other.GetComponent<IDamageable>();
        if (target != null)
        {
            target.TakeDamage(damage);
        }
    }
}
```

| Call | Looks on | Use it when |
| --- | --- | --- |
| `GetComponent<IDamageable>()` | this GameObject only | the script is on the object that was hit |
| `GetComponentInParent<IDamageable>()` | this GameObject, then its parent, and on up | the collider is on a child, such as a kart's body, or a card is dropped on a portrait inside a panel |

### Idea — the Inspector can't show an interface field

`[SerializeField] IDamageable target;` compiles, but no field appears in the Inspector:
Unity can't save a reference of an interface type. Either keep a `GameObject` field
and ask it with `GetComponent<IDamageable>()`, or keep a `MonoBehaviour` field, drag
the script into it, and check it with `is`:

```csharp
[SerializeField] MonoBehaviour targetScript;    // drag in any script that's an IDamageable

IDamageable target;

void Awake()
{
    if (targetScript is IDamageable damageable)
    {
        target = damageable;
    }
    else
    {
        Debug.LogError("Target Script must be something that can be hurt.", this);
    }
}
```

### Idea — Unity's own interfaces: clicks and drags

Unity uses interfaces too. The **EventSystem** watches the mouse and touches, and calls
these methods on the UI object under the pointer, if its script implements them:

| Interface | Method you write | Called when the pointer… |
| --- | --- | --- |
| `IPointerClickHandler` | `OnPointerClick(PointerEventData eventData)` | presses and lets go on it |
| `IPointerEnterHandler` | `OnPointerEnter(PointerEventData eventData)` | moves onto it |
| `IPointerExitHandler` | `OnPointerExit(PointerEventData eventData)` | moves off it |
| `IBeginDragHandler` | `OnBeginDrag(PointerEventData eventData)` | starts dragging it |
| `IDragHandler` | `OnDrag(PointerEventData eventData)` | moves, while dragging (every frame) |
| `IEndDragHandler` | `OnEndDrag(PointerEventData eventData)` | lets go after a drag |

```csharp
using UnityEngine;
using UnityEngine.EventSystems;

// Put it on a UI Image to drag it around a Screen Space - Overlay canvas.
public class DragMe : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public void OnBeginDrag(PointerEventData eventData)
    {
        Debug.Log("Picked up");
    }

    public void OnDrag(PointerEventData eventData)
    {
        transform.position = eventData.position;    // on an Overlay canvas, the pointer's pixels
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        Debug.Log("Dropped");
    }
}
```

Nobody subscribes: the EventSystem only knows "an `IDragHandler`", and your class is one.
The scene needs an **EventSystem** (Unity adds one with the first Canvas), and the object
a **Graphic** (an Image or a text) with **Raycast Target** ticked. Outside a Canvas, a
sprite or 3D object needs a collider, and a **Physics 2D Raycaster** or **Physics
Raycaster** on the camera.

> **Watch out:** an object with `IBeginDragHandler` but no `IDragHandler` never gets
> `OnBeginDrag`: Unity only starts a drag on something that can be dragged.

### Idea — interface or base class?

| | Base class | Interface |
| --- | --- | --- |
| Says | "is a": a turbo kart **is a** kart | "can do": a crate **can be** hurt |
| Shares code | yes: fields, and methods with bodies | no: only the promise of members |
| How many a class can have | one | as many as it needs |
| With `MonoBehaviour` | only if the base class is built on it | always: list it after `MonoBehaviour` |

| Situation | Choose | Why |
| --- | --- | --- |
| attack, heal and shield cards, each with a name, a cost and art | base class `Card` | kinds of one thing, sharing fields |
| karts and trucks that drive and have a top speed | base class `Vehicle` | kinds of one thing, sharing code |
| a player, a crate and a familiar that can be hurt | interface `IDamageable` | unrelated; they share only the capability |
| a juice stand and a delivery van that can both be upgraded | interface `IUpgradable` | unrelated, and each upgrades differently |
| a person and the computer, both taking turns | interface `ITurnTaker` | no shared code: one reads input, one thinks |
| a UI image that reacts to a click | Unity's `IPointerClickHandler` | the EventSystem looks for the interface |
| slimes and bats, which can also be hurt by spikes | both: `Enemy : MonoBehaviour, IDamageable` | they mix: every kind of `Enemy` is then an `IDamageable` too |

### Do it

1. Make `IDamageable`, `Crate`, `PlayerHealth` and `Spikes` that hurt both. Then take
   `TakeDamage` out of `Crate`, and read CS0535.
2. Write a `Familiar`, a plain class that's an `IDamageable`, and `Blast` one.
3. Add `[SerializeField] IDamageable target;` to a script and look in the Inspector.
   Then change it to the `MonoBehaviour` field checked with `is`.
4. Put `DragMe` on a UI Image and drag it. Untick **Raycast Target**: what changes? Tick
   it, and take `IDragHandler` off the class: what changes now?
5. Make the image grow while the pointer is over it, with two more interfaces.

### Challenge

Make an `IInteractable` with `void Interact()`, for a door that opens, a chest that gives
a coin and a juice stand that sells a cup. When the player presses **E**, raycast ahead,
find an `IInteractable` with `GetComponentInParent`, and call it. Then add a locked chest:
should it share a base class with the chest, an interface, or both? Why?

## Chapter 11 — The Juice Kart

**Goal:** the last thing on the build list before the Pier: a **Juice Kart**, driven round
the road below the boardwalk by a helper, a giant cup on its back. Each lap sells by
itself, straight into your wallet; the Office levels it up. And a question the next
chapters need answered: **what on this beach earns money by itself?**

### Idea — two things that earn, and nothing else in common

A bar with a runner and a cashier earns by itself. So does the kart. Chapter 15 will add
up what they all earned while you were away, and it shouldn't need to know which is
which. But a `JuiceStand` and a `JuiceKart` share nothing: no fields, no methods, no base
class worth having. One is a crate, machines, a counter and helpers; the other is a kart on
a road.

C# 9 had the tool: an **interface**, a contract with no code. Anything that
signs it promises three things:

| Member | A bar | The kart |
| --- | --- | --- |
| `SourceName` | its BarInfo's name | `"Juice Kart"` |
| `IncomePerSecond` | its machines' cups a second × a cup's price, when it has both helpers | a lap's money ÷ a lap's seconds, once it's built |
| `EarnsWhileAway` | built, with a runner and a cashier | built |

`JuiceStand : MonoBehaviour, IIncomeSource` and `JuiceKart : MonoBehaviour, IIncomeSource`:
one base class each (MonoBehaviour), and as many interfaces as they like. Then a
`List<IIncomeSource>` holds both, and a `foreach` over it asks each for its income
without asking what it is.

Unity's Inspector can't show a field of an interface type: there's no way to drag "any
IIncomeSource" into it. So **IncomeSources** has fields for what they are (the bars, the
kart), and in `Awake` puts them into one list as what they can do.

### Do it — the contract

1. In `Scripts`, a folder `Income`. In it, `IIncomeSource`:

```csharp:IIncomeSource.cs
// Anything that earns money by itself: a bar with a runner and a cashier, the
// Juice Kart. The money while you're away adds up every IIncomeSource, without
// knowing which kind each one is.
public interface IIncomeSource
{
    string SourceName { get; }
    float IncomePerSecond { get; }      // 0 while it doesn't earn by itself
    bool EarnsWhileAway { get; }
}
```

   No `public` on the members: everything in an interface is public. No bodies: the
   classes write them.

2. `JuiceStand`, again, signing it. The fields and properties you added in Chapter 10 are
   back at the top, where fields belong, and the contract's three members are at the
   bottom.

```csharp
using System;
using UnityEngine;

// One bar: the Orange Bar, the Apple Bar. It knows its BarInfo, its price and
// its speed (upgrades multiply them), its stations and its two helpers. The
// counter calls Sell, and CupSold tells the cash pile. A bar with a runner and
// a cashier earns by itself, even while you're away: it's an IIncomeSource.
public class JuiceStand : MonoBehaviour, IIncomeSource
{
    [SerializeField] BarInfo info;
    [SerializeField] FruitCrate crate;
    [SerializeField] Juicer[] juicers;
    [SerializeField] Counter counter;
    [SerializeField] Helper runner;
    [SerializeField] Helper cashier;
    [SerializeField] Transform staffDoor;   // the Staff Hut's: where a new helper appears

    float priceFactor = 1f;
    float speedFactor = 1f;
    float beachFactor = 1f;

    public BarInfo Info { get { return info; } }
    public Counter Counter { get { return counter; } }
    public bool IsOpen { get { return counter.gameObject.activeInHierarchy; } }
    public bool HasRunner { get { return runner.IsWorking; } }
    public bool HasCashier { get { return cashier.IsWorking; } }
    public Vector3 CratePosition { get { return crate.transform.position; } }

    // A cup's price now: the bar's own, its upgrades, and the beach.
    public int Price
    {
        get { return Mathf.RoundToInt(info.Price * priceFactor * beachFactor); }
    }

    public float SecondsPerCup { get { return info.MachineSeconds / speedFactor; } }

    public event Action<int> CupSold;           // the money for one cup
    public event Action<int> CustomerServed;    // the money for the whole order
    public event Action Changed;                // the price changed

    public void MultiplyPrice(float factor)
    {
        priceFactor *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedFactor *= factor;
    }

    // A later beach pays more for every cup.
    public void SetBeachFactor(float factor)
    {
        beachFactor = factor;
        Changed?.Invoke();
    }

    public void Sell(int cups)
    {
        int price = Price;
        for (int i = 0; i < cups; i++)
        {
            CupSold?.Invoke(price);
        }
        CustomerServed?.Invoke(cups * price);
    }

    // The machine for the runner: the built one with the least fruit in it.
    public Juicer EmptiestJuicer()
    {
        Juicer best = null;
        foreach (Juicer juicer in juicers)
        {
            if (juicer.isActiveAndEnabled && (best == null || juicer.Fruit < best.Fruit))
            {
                best = juicer;
            }
        }
        return best;
    }

    // Hired at the Staff Hut: the helper walks over from its door.
    public void Hire(HelperKind kind)
    {
        Helper helper = kind == HelperKind.Runner ? runner : cashier;
        if (!helper.IsWorking)
        {
            helper.StartWork(this, staffDoor.position);
        }
    }

    // ------------------------------------------------------------ IIncomeSource

    public string SourceName { get { return info.DisplayName; } }

    // Every built machine making cups.
    public float IncomePerSecond
    {
        get
        {
            if (!EarnsWhileAway)
            {
                return 0f;
            }
            int machines = 0;
            foreach (Juicer juicer in juicers)
            {
                if (juicer.isActiveAndEnabled)
                {
                    machines++;
                }
            }
            return machines / SecondsPerCup * info.Price * priceFactor * beachFactor;
        }
    }

    public bool EarnsWhileAway { get { return IsOpen && HasRunner && HasCashier; } }
}
```

3. Read `IncomePerSecond`. A machine makes a cup every `SecondsPerCup` seconds, so
   `1 / SecondsPerCup` cups a second; two machines, twice that. Times what a cup sells
   for. It's an estimate (the customers, the runner's walking), and a generous one: the
   player is away, and an idle game is kind.

### Do it — the kart

4. In `People`, `WalkPath`:

```csharp:WalkPath.cs
using UnityEngine;

// A path: its children are the points, in order. The Juice Kart drives it
// round and round. It draws itself in the Scene view, so you can see it as
// you place the points; the game never shows it.
public class WalkPath : MonoBehaviour
{
    [SerializeField] Color colour = new Color(1f, 0.6f, 0.1f);

    public Vector3[] Points()
    {
        Vector3[] points = new Vector3[transform.childCount];
        for (int i = 0; i < points.Length; i++)
        {
            points[i] = transform.GetChild(i).position;
        }
        return points;
    }

    // Once round, back to the first point.
    public float Length()
    {
        Vector3[] points = Points();
        float length = 0f;
        for (int i = 0; i < points.Length; i++)
        {
            length += Vector3.Distance(points[i], points[(i + 1) % points.Length]);
        }
        return length;
    }

    void OnDrawGizmos()
    {
        Gizmos.color = colour;
        Vector3[] points = Points();
        for (int i = 0; i < points.Length; i++)
        {
            Gizmos.DrawSphere(points[i], 0.25f);
            Gizmos.DrawLine(points[i], points[(i + 1) % points.Length]);
        }
    }
}
```

   `OnDrawGizmos` draws in the **Scene view** only: an orange sphere at each point and a
   line between them, back to the first (`(i + 1) % points.Length`: after the last, 0).
   You see the road as you place its points; the player never does.

5. In `Income`, `JuiceKart`, for now:

```csharp
using System;
using UnityEngine;

// The Juice Kart: a helper drives it round the beach road for ever, and each
// lap sells by itself, straight into the Wallet. Each level sells more. It
// earns while you're away: it's an IIncomeSource, like a staffed bar, and the
// two share nothing else.
public class JuiceKart : MonoBehaviour, IIncomeSource
{
    static readonly int SittingId = Animator.StringToHash("Sitting");

    [SerializeField] Walker walker;
    [SerializeField] Animator driver;
    [SerializeField] WalkPath road;
    [SerializeField] Wallet wallet;
    [SerializeField] int[] lapEarnings = { 60, 90, 135, 200, 300 };
    [SerializeField] int[] levelPrice = { 1500, 4000, 9000, 20000 };

    float beachFactor = 1f;

    public int Level { get; private set; }
    public bool IsBuilt { get { return gameObject.activeInHierarchy; } }
    public bool IsMax { get { return Level >= levelPrice.Length; } }
    public int NextLevelPrice { get { return IsMax ? 0 : levelPrice[Level]; } }
    public int LapEarnings { get { return Mathf.RoundToInt(lapEarnings[Level] * beachFactor); } }

    public event Action<int> Lapped;    // the money of one lap
    public event Action Changed;

    void OnEnable()
    {
        driver.SetBool(SittingId, true);
        walker.Arrived += OnLap;
        walker.WalkTo(road.Points());
    }

    void OnDisable()
    {
        walker.Arrived -= OnLap;
    }

    void OnLap()
    {
        int earned = LapEarnings;
        wallet.Add(earned);
        Lapped?.Invoke(earned);
        walker.WalkTo(road.Points());
    }

    public bool TryLevelUp()
    {
        if (IsMax || !wallet.TrySpend(NextLevelPrice))
        {
            return false;
        }
        Level++;
        Changed?.Invoke();
        return true;
    }

    public void Restore(int level, float beachPriceFactor)
    {
        Level = Mathf.Clamp(level, 0, levelPrice.Length);
        beachFactor = beachPriceFactor;
        Changed?.Invoke();
    }

    // ------------------------------------------------------------ IIncomeSource

    public string SourceName { get { return "Juice Kart"; } }

    public float IncomePerSecond
    {
        get { return IsBuilt ? LapEarnings / (road.Length() / walker.Speed) : 0f; }
    }

    public bool EarnsWhileAway { get { return IsBuilt; } }
}
```

6. Read it. A lap is the Walker's whole path: `Arrived` at its last point is the end of
   the lap, so the kart is paid, and sets off again. A lap takes `road.Length() /
   walker.Speed` seconds: that's how `IncomePerSecond` works out its money a second. Its
   levels work as the chef's do (Chapter 9). `Restore` is for Chapter 14's save and
   Chapter 16's beaches.
7. **The kart prefab.** An empty `Juice Kart`, with a **Walker** (**Speed** `4`, **Turn
   Degrees Per Second** `240`: a kart turns wider than a person; no **Animator**) and
   **Juice Kart**. Inside:
   - `Art/Kart/kart`, **Rotation Y** −90: the model faces +x, and the kart drives along
     its own +z.
   - `Art/Characters/Worker_Male`, as `Driver`, at (0, 0.1, −0.25): the `Person`
     controller, no root motion. Drag it into **Driver**: the kart tells it to sit.
   - `Art/Food/Soda`, as `Big Cup`, at (0, 0.55, −0.85), **Scale** 1.6: an orange juice
     the size of a barrel. Swap its `Red` for `Orange Juice`, as for the cups.

   Into `Prefabs`.

8. **The road.** An empty `Kart Road`, with **Walk Path**, and four empty children, in
   order: `Point 1` (−11, 0, −12.9), `Point 2` (11, 0, −12.9), `Point 3` (11, 0, −14.2),
   `Point 4` (−11, 0, −14.2). Select `Kart Road`: an orange loop below the boardwalk.
9. A `Juice Kart` in the scene, at `Point 4`'s place: **Road** `Kart Road`, **Wallet**.
   Untick it.
10. **Its spot**: `Spot Juice Kart`, **Id** `juice-kart`, `Juice Kart`, **Price** `2500`,
    at (−7.4, 0, −9.2), **Builds** the kart, picture `Emoji/delivery_truck_3d`. `Spot
    Coconut Bar`'s **Next** is `Spot Juice Kart`. Add it to the **Build List**.

### Do it — every source in one list

11. In `Income`, `IncomeSources`:

```csharp:IncomeSources.cs
using System.Collections.Generic;
using UnityEngine;

// Every IIncomeSource on the beach, in one list. Unity can't show an interface
// in the Inspector, so the bars and the kart are set as what they are, and put
// into the list as what they can do.
public class IncomeSources : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] JuiceKart kart;

    readonly List<IIncomeSource> sources = new List<IIncomeSource>();

    public IReadOnlyList<IIncomeSource> All { get { return sources; } }

    void Awake()
    {
        foreach (JuiceStand stand in stands)
        {
            sources.Add(stand);
        }
        sources.Add(kart);
    }
}
```

`sources.Add(stand)`: a `JuiceStand` **is** an `IIncomeSource`, so it goes into the
list as one, with no cast. From the list's side, it's only the three members of the
contract.

12. An empty `Income`, with **Income Sources**: **Stands** the four bars, **Kart** the kart.
    Chapter 15 reads it.

### Do it — the kart's levels

13. The final `OfficeLevels`, with a third row:

```csharp:OfficeLevels.cs
using UnityEngine;

// The top of the Office: three rows with levels, above the upgrades. Your
// tray, your flip-flops, and the Juice Kart once it's built.
public class OfficeLevels : MonoBehaviour
{
    [SerializeField] ChefLevels chef;
    [SerializeField] JuiceKart kart;
    [SerializeField] Wallet wallet;
    [SerializeField] LevelRow trayRow;
    [SerializeField] LevelRow flipFlopRow;
    [SerializeField] LevelRow kartRow;

    void OnEnable()
    {
        wallet.MoneyChanged += OnMoneyChanged;
        trayRow.BuyPressed += BuyTray;
        flipFlopRow.BuyPressed += BuyFlipFlops;
        kartRow.BuyPressed += BuyKart;
        Show();
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= OnMoneyChanged;
        trayRow.BuyPressed -= BuyTray;
        flipFlopRow.BuyPressed -= BuyFlipFlops;
        kartRow.BuyPressed -= BuyKart;
    }

    void OnMoneyChanged(int money)
    {
        Show();
    }

    void BuyTray()
    {
        chef.TryBuyTray();
        Show();
    }

    void BuyFlipFlops()
    {
        chef.TryBuyFlipFlops();
        Show();
    }

    void BuyKart()
    {
        kart.TryLevelUp();
        Show();
    }

    void Show()
    {
        int money = wallet.Money;
        trayRow.Show("Bigger Tray", $"Holds {chef.TrayCapacity}", chef.NextTrayPrice, money);
        flipFlopRow.Show("Faster Flip-flops", $"Level {chef.FlipFlopLevel + 1}", chef.NextFlipFlopPrice, money);
        if (kart.IsBuilt)
        {
            kartRow.Show("Juice Kart", $"Level {kart.Level + 1}", kart.NextLevelPrice, money);
        }
        else
        {
            kartRow.Show("Juice Kart", "Build it on the beach first", -1, money);
        }
    }
}
```

14. In the scene's Office panel, a third **Level Row** in `Levels`, `Kart Row`, and drag it
    and the kart into **Office Levels**. Before the kart's built, its row is greyed, and
    says so (a price of −1).

### Test it

- The kart is at the end of a 40-minute list. To see it now, add `Spot Juice Kart` to the
  **Build List**'s **First**, and give it a **Price** of `1`. **Play**: its spot is there
  from the start. Build it: the kart sets off round the road, the driver sitting in it,
  the big cup on the back. Each lap, $60 in the wallet.
- Open the Office: the kart's row says **Level 1, $1.5K**. Earn it (or, for the test, set
  the first number of the kart's **Level Price** to `10` in the scene), and buy: $90 a
  lap.
- Set them back: the spot's **Price** `2500`, not in **First**, the kart's prices from the
  balance sheet. Did you change the prefab or the instance? Check that nothing is bold
  that shouldn't be.

### Commit

*Add the Juice Kart and the income sources.*

### Challenge

Write a small `IncomeLog` that, when you press **L**, logs each source's name and money a
second, and the total, using `IncomeSources.All`. Hire a runner and a cashier for the
Orange Bar, build its second juicer, and check the bar's number by hand. Then delete the
script: the game doesn't need it.

# Part 3 — The Lead's Achievements

## C# 10 — Working in Someone Else's Code

**Goal:** you can read a module someone else wrote, find its contract, evaluate it
against the team's architecture and style guide, and plug it into your game without
changing it (Associate: Programming — evaluate code for integration into a system
architected by a lead).

### Idea — why other people's code

A studio game is written by a team. A **lead** programmer designs the **architecture**:
which parts the game has, and how they talk (through interfaces, events and a few agreed
classes). Each programmer builds a part, and some arrive finished, from someone else.
The Associate exam asks exactly this: *does this code fit, and how do you plug it in?*

### Idea — read it top-down

Don't start at line 1. Read the **README and header comment** first (what it's for, who
owns it, which version), then its **public members**, and the **details** last, where
you need them. The public members are its **contract**: what the module **needs** from
the rest of the game, and what it **gives**. A lead's computer-rival module says:

| Rival module 1.0 | |
| --- | --- |
| **Needs** | a component that implements `IRivalChoices`, beside the `RivalBrain`; the game's `Match`, with a `bool IsOver` |
| **Gives** | `RivalBrain`, which makes the best choice every **Think Time** seconds; `ChoiceMade`, an event raised after each one |

Before you import anything, tick off the "needs" against your own code. The package
brings `IRivalChoices`, the half of the contract that your code fills in:

```csharp
// Part of the Rival module. Implement it beside the RivalBrain, to tell it the choices.
public interface IRivalChoices
{
    // How many things the rival could do now: cards to play, upgrades to buy.
    int ChoiceCount { get; }
    // How good choice number i is now. 0 or less means "not worth doing".
    float Score(int choice);
    void Make(int choice);
}
```

### Idea — namespaces

A **namespace** is a family name for classes: `using UnityEngine;` lets you write `Debug`
for `UnityEngine.Debug`. Why would a team want its own? Say a package brings a class
`Countdown`, and your game has one too. Two classes can't share a full name, so:

```
error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'
```

So code made to be shared should go in a namespace of its own:

```csharp
namespace LanternHill.Opponent
{
    public class Countdown
    {
        // … the module's own countdown …
    }
}
```

Now its full name is `LanternHill.Opponent.Countdown`, and both classes live side by
side. To use it, write `using LanternHill.Opponent;` at the top of your file. Until a
package has one, rename *your* class, and ask the package's owner for a namespace.

### Idea — importing, and the first errors

A lead often hands a module over as a `.unitypackage` file. Choose **Assets → Import
Asset Package…** and pick the file. The **Import Unity Package** window lists every file
in it, each with a tick box: untick what you don't want, such as an example scene, and
click **Import** (C# 16 has more). Then read the Console: the first errors say
what's missing.

Suppose your `Match` keeps a `bool isRunning`, but has no `IsOver`. The module's line
`if (match.IsOver || …)` gives:

```
error CS1061: 'Match' does not contain a definition for 'IsOver' and no accessible extension method 'IsOver' accepting a first argument of type 'Match' could be found (are you missing a using directive or an assembly reference?)
```

The contract asked for it, so you add it, **to your class**:

```csharp
using UnityEngine;

// The match from the lead's architecture: a duel, a race or a trading day.
public class Match : MonoBehaviour
{
    bool isRunning = true;

    // The Rival module's README asks for this.
    public bool IsOver
    {
        get { return !isRunning; }
    }
}
```

> **Watch out:** never edit the module without asking its owner, even to silence an error:
> the next version will be imported over your change, and nobody else gets your fix.

### Idea — evaluating it

With the errors gone, read the module the way a reviewer would. Here's its brain:

```csharp
using System;
using UnityEngine;

// RIVAL MODULE 1.0 - Lantern Hill Games. Owner: Sam.
// A computer rival for any of our games. Every Think Time seconds it asks the
// game what it could do (IRivalChoices), and does the best thing.
public class RivalBrain : MonoBehaviour
{
    [SerializeField] Match match;
    [SerializeField] float thinkTime = 1.5f;

    IRivalChoices choices;
    float timer;

    // Raised after each choice, with the choice's number.
    public event Action<int> ChoiceMade;

    void Awake()
    {
        choices = GetComponent<IRivalChoices>();
        if (choices == null)
        {
            Debug.LogError("RivalBrain needs a component that implements IRivalChoices beside it.", this);
            enabled = false;
        }
    }

    void Update()
    {
        timer += Time.deltaTime;
        if (match.IsOver || timer < thinkTime)
        {
            return;
        }
        timer = 0f;
        int best = -1;
        float bestScore = 0f;
        for (int i = 0; i < choices.ChoiceCount; i++)
        {
            float score = choices.Score(i);
            if (score > bestScore)
            {
                best = i;
                bestScore = score;
            }
        }
        if (best < 0)
        {
            return;     // nothing worth doing: look again later
        }
        choices.Make(best);
        ChoiceMade?.Invoke(best);
    }
}
```

| Ask | Why it matters | The Rival module |
| --- | --- | --- |
| Does it use only its contract? | anything else it touches can break it | only `IRivalChoices` and `Match.IsOver`; no `Find…` |
| Does it follow the team's standards? | someone will maintain it | private `[SerializeField]` fields, an event in the past tense, braces everywhere |
| What happens with input it doesn't expect? | real games send it | no choices, or none above 0: it waits. **Match** left empty: a `NullReferenceException` every frame |
| Does it allocate every frame? | garbage makes a game stutter (C# 17) | no: no `new`, no strings built |
| Does it log? | so you can see why it did something | an error, with a context, if it's set up wrong; nothing about its choices |

Two findings to report to Sam: an empty **Match** isn't checked, as `choices` is, and a
**Log Decisions** switch would show why the rival chose what it did (C# 19).

### Idea — plugging it in

Now write your half of the contract. A rival juice stand, choosing upgrades:

```csharp
using UnityEngine;

// A rival juice stand: it tells the Rival module which upgrades it could buy.
public class RivalStand : MonoBehaviour, IRivalChoices
{
    [SerializeField] int coins = 50;
    [SerializeField] int[] upgradePrices = { 10, 25, 60 };

    public int ChoiceCount
    {
        get { return upgradePrices.Length; }
    }

    // Keeping coins scores best: it buys the cheapest upgrade it can afford.
    public float Score(int choice)
    {
        return coins - upgradePrices[choice];
    }

    public void Make(int choice)
    {
        coins -= upgradePrices[choice];
        Debug.Log($"{name} buys upgrade {choice}: {coins} coins left", this);
    }
}
```

Put a `RivalBrain` and a `RivalStand` on one GameObject, fill in **Match**, and play: the
module didn't change at all. A card rival would score its hand, and a kart its items.

### Idea — how the exam asks

*The module calls `GetComponent<IRivalChoices>()`. Which class integrates correctly?*

- A. `class Kart : MonoBehaviour`, with public `ChoiceCount`, `Score` and `Make`
- B. `class Kart : MonoBehaviour, IRivalChoices`, with the three members public
- C. `class Kart : IRivalChoices`, with the three members public
- D. `class Kart : MonoBehaviour, IRivalChoices`, with `Make` not public

**B.** A has the members, but doesn't say it implements the interface, so `GetComponent`
finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile:
`error CS0737: 'Kart' does not implement interface member 'IRivalChoices.Make(int)'.
'Kart.Make(int)' cannot implement an interface member because it is not public.`

*A HUD must show a message after each rival choice. Which fits the architecture?*

- A. Edit `RivalBrain.Update` to call the HUD
- B. `brain.ChoiceMade += OnRivalChose;` in `OnEnable`, and `-=` in `OnDisable`
- C. `brain.ChoiceMade = OnRivalChose;` in `Start`
- D. Find the rival with `GameObject.Find` in `Update`, and check it every frame

**B**, through what the module gives. A edits the owner's code. C doesn't compile: outside
its class, an event only takes `+=` and `-=`. D breaks the style guide.

*The module gives CS1061: `'Match' does not contain a definition for 'IsOver'`. Which
fix is right?*

- A. Change the module to read `match.isRunning`
- B. Add a public `IsOver` property to `Match`
- C. Delete the module's `IsOver` check
- D. Make `Match`'s fields public

**B.** The contract asks your `Match` for `IsOver`, so your code supplies it. A and C
edit the module; D adds nothing the module asked for, and breaks the style guide.

### Do it

1. Make `Match`, `IRivalChoices`, `RivalBrain` and `RivalStand` in a test scene, and
   play. Then remove `IsOver` from `Match`, and read the error. Put it back.
2. Make a `Countdown` script in two folders, and read the CS0101. Then put one inside
   `namespace LanternHill.Opponent`, and watch the error go.
3. Leave the brain's **Match** field empty, play, and write the two-line note you'd send
   Sam: what you saw, and where.

### Challenge

Write a second `IRivalChoices`: a kart choosing between a boost, a shield and an oil
slick, scoring each from its speed and its place in the race. Swap it in for
`RivalStand` without changing `RivalBrain`. Then list what you'd ask Sam to change in
version 1.1, and why.

## Chapter 12 — Sam's Achievements

**Goal:** Sam's **achievements** in your game: twelve trophies, from *First Sip* to *New
Horizons*, won as you play, each one sliding down in the toast with its reward paid, and
all of them listed in a **Trophies** panel, grey until they're won. You plug in code you
didn't write, without changing a line of it.

### Idea — someone else's code, in four steps

Sam wrote the achievements for the studio: they'll go in other games too, so they don't
know anything about juice. C# 10 gave the steps; this chapter does each one.

| Step | Here |
| --- | --- |
| **Read the contract** | the README: what the module needs from your game, and what it gives |
| **Import it, and read the errors** | the package, then three compile errors, each one a line of the contract |
| **Evaluate it, by reading** | how often it checks, what happens when a number goes down, what it does with a bad id |
| **Plug it in, and ask for changes in writing** | your stats, your toast, your Trophies panel; never an edit to Sam's files |

### Idea — a namespace, at last

In Arcane Duel and Pocket Karts, Sam's module brought a class whose name the game already
had, and Unity said **CS0101**: two classes called the same in one project. Sam promised
to fix it, and has: everything in this package is inside a **namespace**:

```
namespace LanternHill.Achievements
{
    public class AchievementTracker : MonoBehaviour { … }
}
```

A namespace is a surname for classes. Sam's tracker is really
`LanternHill.Achievements.AchievementTracker`; his test toast is
`LanternHill.Achievements.Toast`. Your game has a `Toast` too (Chapter 10), in no
namespace at all (the **global** namespace). Two different full names, so no clash.

To use Sam's classes by their short names, a file says `using LanternHill.Achievements;` at
the top, the way it says `using UnityEngine;`. Then, in that file, which `Toast` does the
word `Toast` mean? C# looks in the file's **own** namespace first (for your scripts, the
global one) and only then in the namespaces the `using`s bring in. Your `Toast` is found
first. To mean Sam's, you'd write its full name.

### Do it — read the contract

1. Your trainer shares `Juice Tycoon Achievements 1.0.unitypackage` and its `README.md`.
   Read the README before you import anything. The contract is two tables:

| The module needs | Your game has it? |
| --- | --- |
| a component that implements `IStatSource`: `long GetStat(Stat stat)` | not yet: `GameStats`, below |
| stats that only go up, for the player's whole life | the counts will be; the helpers at work and the kart's level start again on a new beach (Chapter 16) |
| the won ids saved, and given back with `Restore` | Chapter 14 |
| the rewards paid, in coins | the `Wallet` |

| The module gives | You'll use it for |
| --- | --- |
| `event Action<Achievement> Unlocked` | the toast, and the reward |
| `IReadOnlyList<Achievement> All`, `bool IsWon(Achievement)` | the Trophies panel |
| `WonIds`, `Restore` | the save (Chapter 14) |

2. Note the types: `GetStat` returns a `long`; each `Achievement`'s `Reward` is a `long`.
   Your money is an `int`. The contract is in the types as much as the words, and that
   difference will come up.

### Do it — import it

3. **Assets → Import Package → Custom Package…**, choose the file. The import window lists
   everything it brings, all in `Assets/Achievements`: five scripts, twelve achievements,
   twelve pictures and the README. **Import**.
4. The Console is empty. Open `Assets/Achievements/Toast.cs`: `namespace
   LanternHill.Achievements`, around the whole class. Two toasts in one project, and no
   CS0101.
5. Select `Achievements/Achievements/First Sip`: an **Achievement** asset: an id, a title,
   what to do, a picture, the **Stat** it counts (**Cups Sold**), its **Target** (1) and
   its **Reward** (10). The pictures are Sam's copies of the emoji: Unity knows a picture
   by its GUID, not its name, so the achievements couldn't use yours.

### Do it — read Sam's code

6. Before you write a line, read what you've been given. Here are the four scripts the
   contract is made of: the enum of stats, the interface you'll implement, one
   achievement, and the tracker. Read them in this order:

```csharp:Stat.cs
namespace LanternHill.Achievements
{
    // Achievements 1.0 (Sam): everything an achievement can count. Your game
    // gives the number for each, through IStatSource.
    public enum Stat
    {
        CupsSold,           // every cup sold, at every bar
        MoneyEarned,        // in the player's whole life, never reset
        CustomersServed,
        FruitPicked,
        SpotsBuilt,         // in the player's whole life
        HelpersHired,       // working now
        UpgradesBought,     // in the player's whole life
        CupsCleared,        // empty cups into the bin
        BeachesOpened,
        AwayEarned,         // earned while away, in the player's whole life
        KartLevel
    }
}
```

```csharp:IStatSource.cs
namespace LanternHill.Achievements
{
    // Achievements 1.0 (Sam): the half of the contract your game fills in.
    // Put a component that implements it beside the AchievementTracker.
    public interface IStatSource
    {
        // The number for this stat now. It should only go up; a number that
        // goes down never takes back an achievement already won.
        long GetStat(Stat stat);
    }
}
```

```csharp:Achievement.cs
using UnityEngine;

namespace LanternHill.Achievements
{
    // Achievements 1.0 (Sam): one achievement. It's won when its stat reaches
    // its target. The reward is coins, which your game pays.
    [CreateAssetMenu(fileName = "New Achievement", menuName = "Lantern Hill/Achievement")]
    public class Achievement : ScriptableObject
    {
        [SerializeField] string id;
        [SerializeField] string title;
        [SerializeField] string description;
        [SerializeField] Sprite picture;
        [SerializeField] Stat stat;
        [SerializeField] long target = 1;
        [SerializeField] long reward;

        // Never changes once players have it: save files store it.
        public string Id { get { return id; } }

        // The name shown when it's won, such as "First Sip".
        public string Title { get { return title; } }

        // What to do to win it, such as "Sell your first cup".
        public string Description { get { return description; } }

        public Sprite Picture { get { return picture; } }

        // What it counts.
        public Stat Stat { get { return stat; } }

        // The number the stat must reach.
        public long Target { get { return target; } }

        // Coins for the player when it's won; 0 for none.
        public long Reward { get { return reward; } }
    }
}
```

```csharp:AchievementTracker.cs
using System;
using System.Collections.Generic;
using UnityEngine;

namespace LanternHill.Achievements
{
    // Achievements 1.0 (Sam). Checks every achievement's stat twice a second,
    // and raises Unlocked once for each one won. It never knows the game: it
    // asks an IStatSource. It doesn't save either: give it back the won ids
    // with Restore when your game loads.
    public class AchievementTracker : MonoBehaviour
    {
        const float CheckInterval = 0.5f;

        [SerializeField] Achievement[] achievements;
        // The component that implements IStatSource. Unity can't show an
        // interface in the Inspector, so this takes any MonoBehaviour, and
        // Awake checks that it's an IStatSource.
        [SerializeField] MonoBehaviour statSource;

        readonly List<string> wonIds = new List<string>();
        IStatSource stats;
        float nextCheckTime;

        // Every achievement the game has, won or not.
        public IReadOnlyList<Achievement> All { get { return achievements; } }

        // The ids of the achievements won, for your game's save.
        public IReadOnlyCollection<string> WonIds { get { return wonIds; } }

        // Raised once, the moment an achievement is won.
        public event Action<Achievement> Unlocked;

        void Awake()
        {
            stats = statSource as IStatSource;
            if (stats == null)
            {
                Debug.LogError("AchievementTracker: Stat Source must be a component that implements IStatSource.", this);
                enabled = false;
            }
        }

        void Update()
        {
            if (Time.unscaledTime < nextCheckTime)
            {
                return;
            }
            nextCheckTime = Time.unscaledTime + CheckInterval;
            foreach (Achievement achievement in achievements)
            {
                if (!IsWon(achievement) && stats.GetStat(achievement.Stat) >= achievement.Target)
                {
                    wonIds.Add(achievement.Id);
                    Unlocked?.Invoke(achievement);
                }
            }
        }

        // True once it's been won.
        public bool IsWon(Achievement achievement)
        {
            return wonIds.Contains(achievement.Id);
        }

        // Give back the ids your game saved. Unlocked isn't raised for them.
        // An id no achievement has any more is ignored.
        public void Restore(IEnumerable<string> ids)
        {
            wonIds.Clear();
            foreach (string id in ids)
            {
                foreach (Achievement achievement in achievements)
                {
                    if (achievement.Id == id)
                    {
                        wonIds.Add(id);
                    }
                }
            }
        }
    }
}
```

7. A module other people use gets a comment on every public member: Sam's style guide says
   so, and here's why. You can plug it in from the comments alone. Note what each
   promises: `Unlocked` is raised **once**; `Restore` **doesn't** raise it; an unknown id
   is **ignored**. You'll check those promises against the code in a moment.

### Do it — your half of the contract, and its errors

8. Start the stat source. In `Scripts/Trophies`, `GameStats`, with the interface and
   nothing else yet:

```csharp
using UnityEngine;

public class GameStats : MonoBehaviour, IStatSource
{
    // …
}
```

9. Save, and read the Console:

```
Assets/Scripts/Trophies/GameStats.cs(3,41): error CS0246: The type or namespace name 'IStatSource' could not be found (are you missing a using directive or an assembly reference?)
```

10. **CS0246** means C# doesn't know the name. It even guesses why: *are you missing a using
    directive?* `IStatSource` lives in Sam's namespace. Add `using
    LanternHill.Achievements;` at the top, and save:

```
Assets/Scripts/Trophies/GameStats.cs(4,41): error CS0535: 'GameStats' does not implement interface member 'IStatSource.GetStat(Stat)'
```

11. **CS0535**: the class signed the contract and doesn't keep it. That error is the
    README's first line, checked by the compiler. Write the whole class:

```csharp
using LanternHill.Achievements;
using UnityEngine;

// Our half of Sam's contract: the numbers his achievements count. Most are
// counted here as things happen (cups sold, fruit picked, spots built); the
// rest are read from the game when asked (the money earned, the helpers at
// work). The counts are for the player's whole life: a new beach keeps them.
public class GameStats : MonoBehaviour, IStatSource
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] FruitCrate[] crates;
    [SerializeField] Bin bin;
    [SerializeField] BuildList buildList;
    [SerializeField] Wallet wallet;
    [SerializeField] Upgrades upgrades;
    [SerializeField] JuiceKart kart;

    public long CupsSold { get; private set; }
    public long CustomersServed { get; private set; }
    public long FruitPicked { get; private set; }
    public long SpotsBuilt { get; private set; }
    public long UpgradesBought { get; private set; }
    public long CupsCleared { get; private set; }
    public long BeachesOpened { get; private set; }
    public long AwayEarned { get; private set; }
    public long MoneyEarned { get; private set; }   // before this beach's: the Wallet's starts again

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += OnCupSold;
            stand.CustomerServed += OnCustomerServed;
        }
        foreach (FruitCrate crate in crates)
        {
            crate.Picked += OnFruitPicked;
        }
        bin.CupBinned += OnCupBinned;
        buildList.SpotBuilt += OnSpotBuilt;
        upgrades.Bought += OnUpgradeBought;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= OnCupSold;
            stand.CustomerServed -= OnCustomerServed;
        }
        foreach (FruitCrate crate in crates)
        {
            crate.Picked -= OnFruitPicked;
        }
        bin.CupBinned -= OnCupBinned;
        buildList.SpotBuilt -= OnSpotBuilt;
        upgrades.Bought -= OnUpgradeBought;
    }

    public long GetStat(Stat stat)
    {
        switch (stat)
        {
            case Stat.CupsSold: return CupsSold;
            case Stat.MoneyEarned: return MoneyEarned + wallet.LifetimeEarned;
            case Stat.CustomersServed: return CustomersServed;
            case Stat.FruitPicked: return FruitPicked;
            case Stat.SpotsBuilt: return SpotsBuilt;
            case Stat.HelpersHired: return HelpersHired();
            case Stat.UpgradesBought: return UpgradesBought;
            case Stat.CupsCleared: return CupsCleared;
            case Stat.BeachesOpened: return BeachesOpened;
            case Stat.AwayEarned: return AwayEarned;
            case Stat.KartLevel: return kart.IsBuilt ? kart.Level + 1 : 0;
            default: return 0;
        }
    }

    public void AddAwayEarnings(long amount)
    {
        AwayEarned += amount;
    }

    // A new beach: this beach's earnings join the life-long total.
    public void AddBeach()
    {
        BeachesOpened++;
        MoneyEarned += wallet.LifetimeEarned;
    }

    long HelpersHired()
    {
        long total = 0;
        foreach (JuiceStand stand in stands)
        {
            if (stand.HasRunner)
            {
                total++;
            }
            if (stand.HasCashier)
            {
                total++;
            }
        }
        return total;
    }

    void OnCupSold(int amount)
    {
        CupsSold++;
    }

    void OnCustomerServed(int amount)
    {
        CustomersServed++;
    }

    void OnFruitPicked()
    {
        FruitPicked++;
    }

    void OnCupBinned()
    {
        CupsCleared++;
    }

    void OnSpotBuilt(BuildSpot spot)
    {
        SpotsBuilt++;
    }

    void OnUpgradeBought(Upgrade upgrade)
    {
        UpgradesBought++;
    }
}
```

12. Read it against Sam's `Stat` enum: a `case` for every value. Two ways of answering:
    - **Counted** as things happen, from the events you already have: every cup sold
      (`CupSold`), every customer served, every fruit picked (the crates' `Picked`, from
      Chapter 7), every empty cup binned, every spot built, every upgrade bought.
    - **Read** when asked, from what the game already knows: the money earned (the
      wallet's `LifetimeEarned`), the helpers at work, the kart's level (0 before it's
      built, so a kart at level 0 counts as 1).

    Two counts can't happen yet: money earned while away (Chapter 15) and beaches (Chapter
    16). They stay 0 until then; `AddAwayEarnings` and `AddBeach` are ready for those
    chapters to call.

### Do it — evaluate it, by reading

13. Open `AchievementTracker.cs` and answer these from the code, before you plug it in.
    Write your answers down; the trainer will ask.
    - **How often does it check, and what does that cost?** `Update` returns at once
      unless half a second has passed (`CheckInterval`), so it checks twice a second. Then
      one `GetStat` for each achievement not won yet: at most 24 calls a second. Cheap,
      **as long as `GetStat` is cheap**. Ours loops over four bars at most. It uses
      `Time.unscaledTime`: it keeps checking in a paused game.
    - **What happens if a stat goes down?** After a new beach no helpers are at work. Won
      achievements stay won: `IsWon` looks in `wonIds`, which never shrinks. One not yet
      won simply needs the number to climb again.
    - **What if `Restore` gets an id no achievement has?** The inner loop finds no match,
      and the id is dropped without a word. Fine for an achievement Sam removes one day; a
      typo in your save code would vanish just as quietly.
    - **What if the Stat Source isn't an `IStatSource`?** `Awake` checks with `as`, logs an
      error naming the object, and switches the tracker off. It fails loudly, at the
      start, and in one place: good behaviour for a module.

### Do it — plug it in

14. Select `Trophies` (Chapter 10's object, with the `ToastQueue`). **Add Component → Game
    Stats**: **Stands** the four bars, **Crates** their four crates, **Bin** the bin (in
    `Table 1 and Bin`), **Build List**, **Wallet**, **Upgrades**, **Kart**.
15. **Add Component → Achievement Tracker**. Drag the twelve assets from
    `Achievements/Achievements` into **Achievements**, and `Trophies` itself into **Stat
    Source**: Unity puts the first component it finds there, so check it says `Trophies
    (Game Stats)`; if not, drag the **Game Stats** component's title instead.
16. Try the module on its own first, with Sam's test toast: drag
    `Assets/Achievements/Toast.cs` onto `Trophies`, and drag `Trophies` into its
    **Tracker**. **Play**, and sell one cup: the Console says *Achievement won: First Sip*.
    The module works. Stop, and remove Sam's toast again: it's for his tests.
17. Now your toast. `ToastQueue` shows trophies too, and pays their rewards. Here's a
    mistake worth making once:

```csharp
    void OnUnlocked(Achievement achievement)
    {
        wallet.Add(achievement.Reward);
        // …
    }
```

```
Assets/Scripts/Trophies/ToastQueue.cs(58,24): error CS1503: Argument 1: cannot convert from 'long' to 'int'
```

18. **CS1503**: the contract says `Reward` is a `long`, and `Wallet.Add` takes an `int`. A
    `long` doesn't fit in an `int` without a **cast**, because it could hold more than
    an `int` can. `(int)achievement.Reward` is the cast: your promise that the number
    fits. Here it does (the biggest reward is $5,000, far below 2,147,483,647), and the
    comment says why, for whoever reads it next. Here's the whole `ToastQueue`, for now:

```csharp
using System.Collections.Generic;
using LanternHill.Achievements;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Runner hired!",
// "Table built!", and every trophy won. The toast shows them one at a time. A
// trophy's reward is paid the moment it's won. Sam's module has a Toast of its
// own: with his namespace in a using, "Toast" still means ours, because C#
// looks in this file's own namespace before the ones a using brings in.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] AchievementTracker tracker;
    [SerializeField] Upgrades upgrades;
    [SerializeField] BuildList buildList;
    [SerializeField] Sprite builtPicture;
    [SerializeField] Toast toast;
    [SerializeField] Wallet wallet;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        tracker.Unlocked += OnUnlocked;
        upgrades.Bought += OnUpgradeBought;
        buildList.SpotBuilt += OnSpotBuilt;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        tracker.Unlocked -= OnUnlocked;
        upgrades.Bought -= OnUpgradeBought;
        buildList.SpotBuilt -= OnSpotBuilt;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a helper gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is HireUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, upgrade.DisplayName + " hired!", upgrade.Description, false));
            ShowNext();
        }
    }

    void OnSpotBuilt(BuildSpot spot)
    {
        waiting.Enqueue(new ToastMessage(builtPicture, spot.DisplayName + " built!", "", false));
        ShowNext();
    }

    void OnUnlocked(Achievement achievement)
    {
        string line = achievement.Description;
        if (achievement.Reward > 0)
        {
            wallet.Add((int)achievement.Reward);     // Sam's rewards are long; our money is int
            line += "  +$" + NumberFormat.Money(achievement.Reward);
        }
        waiting.Enqueue(new ToastMessage(achievement.Picture, "Trophy: " + achievement.Title, line, true));
        ShowNext();
    }

    void ShowNext()
    {
        if (toast.IsShowing || waiting.Count == 0)
        {
            return;
        }
        ToastMessage next = waiting.Dequeue();
        toast.Show(next.Picture, next.Title, next.Line);
    }
}
```

19. The `using` brings in Sam's `AchievementTracker` and `Achievement`; the field `Toast
    toast` is still **your** toast, since C# looked in your file's own namespace first.
    Hover over `Toast` in your code editor: it says `class Toast`, with no namespace. And
    `NumberFormat.Money(achievement.Reward)` needed no cast: `Money` takes a `long`, and
    an `int` or a `long` fits in one.
20. On `Trophies`, the `ToastQueue` has two new fields: **Tracker** (`Trophies`) and
    **Wallet**.

### Do it — the Trophies panel

21. A row for each trophy: in `Safe Area`, an **Image** `Trophy Row`, 1000 × 136, `Panel
    Light`, **Sliced**, with a **Layout Element** (**Preferred Height** 136, **Flexible
    Width** 1):

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture` | an Image | middle-left | (20, 0) | 100 × 100 | `trophy_3d`, Preserve Aspect, no raycast |
| `Title` | a text | top-left | (140, −12) | 660 × 50 | `First Sip`, size 40, brown |
| `Description` | a text | top-left | (140, −62) | 660 × 64 | `Sell your first cup`, size 27, light brown |
| `Tick` | an Image | middle-right | (−24, 0) | 86 × 90 | `Icon Tick`, Preserve Aspect, no raycast |

22. In `Scripts/Trophies`, `TrophyRow`:

```csharp:TrophyRow.cs
using LanternHill.Achievements;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One row of the Trophies panel: the trophy's picture (grey until it's won),
// its name, what to do, and a tick when it's won.
public class TrophyRow : MonoBehaviour
{
    static readonly Color NotWonColour = new Color(0.25f, 0.25f, 0.25f, 0.6f);

    [SerializeField] Image picture;
    [SerializeField] TMP_Text title;
    [SerializeField] TMP_Text description;
    [SerializeField] GameObject tick;

    public Achievement Achievement { get; private set; }

    public void Show(Achievement achievement)
    {
        Achievement = achievement;
        picture.sprite = achievement.Picture;
        title.text = achievement.Title;
        description.text = achievement.Description;
        if (achievement.Reward > 0)
        {
            description.text += "  +$" + NumberFormat.Money(achievement.Reward);
        }
    }

    public void SetWon(bool isWon)
    {
        picture.color = isWon ? Color.white : NotWonColour;
        tick.SetActive(isWon);
    }
}
```

23. `public Achievement Achievement`: a property with the same name as its type. C# allows
    it, and it reads well: the row's achievement. Add `TrophyRow` to `Trophy Row`, fill its
    four fields, drag it into `Prefabs/UI`, and delete it from the scene.
24. In `Scripts/Trophies`, `TrophiesPanel`:

```csharp:TrophiesPanel.cs
using System.Collections.Generic;
using LanternHill.Achievements;
using UnityEngine;

// The Trophies panel: one row for every achievement, won or still to win,
// made in code from Sam's list when the panel first opens.
public class TrophiesPanel : MonoBehaviour
{
    [SerializeField] AchievementTracker tracker;
    [SerializeField] TrophyRow rowPrefab;
    [SerializeField] Transform content;     // the scroll view's Content, with a Vertical Layout Group

    readonly List<TrophyRow> rows = new List<TrophyRow>();

    void OnEnable()
    {
        if (rows.Count == 0)
        {
            foreach (Achievement achievement in tracker.All)
            {
                TrophyRow row = Instantiate(rowPrefab, content);
                row.Show(achievement);
                rows.Add(row);
            }
        }
        foreach (TrophyRow row in rows)
        {
            row.SetWon(tracker.IsWon(row.Achievement));
        }
    }
}
```

25. The rows are made the first time the panel opens (`OnEnable` with no rows yet); every
    time it opens after that, each row only checks whether its trophy is won.
26. **The panel**: a variant of `Panel`, `Trophies Panel`, its root and title `Trophies`, with
    a scrolling list filling its `Content`, made as in the Staff Hut. Add `TrophiesPanel`:
    **Row Prefab** the **Trophy Row**, **Content** the panel's `List`. Drag it into
    `Panels`, add it to the switcher, wire its close button, and set the instance's
    **Tracker** to `Trophies`.
27. **A button for it.** The panel has no mat: it opens from the top bar. In `Top Bar`, an
    **Icon Button**, `Trophies Button`: middle-right with its pivot, **Pos X** `−150`, 120 ×
    124, **Source Image** `Icon Trophy`, its `Icon` unticked. **On Click ()**: **+**, drag
    in `Panels`, **PanelSwitcher → Toggle**, and drag the Trophies panel into the box
    under it. A button can pass one object to the method it calls: here, which panel.

### Do it — ask for a change, in writing

28. The Trophies panel would be better with a bar under each trophy: 37 of 100 customers.
    The tracker can't tell you that: `GetStat` is yours, but there's no "how far" for one
    achievement. Don't add it to Sam's file. Write to Sam instead, in three parts, as a
    note in your project (`REQUESTS.md`, next to the style guide):
    - **What:** a method `float ProgressOf(Achievement achievement)`, 0 to 1.
    - **Why:** a progress bar in the Trophies panel.
    - **How you'd use it:** `bar.fillAmount = tracker.ProgressOf(row.Achievement);` when the
      panel opens.

    Your trainer plays Sam, and answers. A change to a shared module goes through its
    owner, so every game that uses it gets the same version.

### Test it

- **Play.** Sell one cup: *Trophy: First Sip*, `Sell your first cup +$10`, and the money
  jumps by $10.
- Build the Staff Hut and hire a runner: *Orange Bar Runner hired!* and, right after it,
  *Trophy: Hired Help*: the queue showed them one at a time.
- Clear empty cups into the bin; build spots. Open **Trophies**: the ones won in colour
  with a tick, the rest grey.
- Close and open the panel again: the rows aren't made twice (look in the Hierarchy).
- **Stop, then Play again.** Every trophy is grey again: nothing is saved yet. Chapter 14
  saves `WonIds`.

### Commit

*Plug in Sam's achievements: stats, toasts and the Trophies panel.*

### Challenge

A thirteenth trophy, with no code at all: *Kart Champion*, the Juice Kart at level 5, a
$10,000 reward, with `crown_3d`. Make the asset in your own `Data` folder (not Sam's),
and add it to the tracker's list. Why could you do this without touching any code, Sam's
or yours?

# Part 4 — A Whole Game

## C# 11 — Static: Uses and Risks

**Goal:** you can use `static` where it fits (constants, helpers, a choice carried to
the next scene), and spot and fix its risks: hidden dependencies, values that outlive a
scene or survive from one Play to the next, and static events with dead listeners
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — one copy, owned by the class

A normal field has one copy in every object: two karts, two `speed`s. A **static**
member belongs to the **class**: there's one copy, and you reach it through the class
name, with no object at all.

| | Normal member | `static` member |
| --- | --- | --- |
| How many copies | one per object | one, for the whole game |
| Reached through | an object: `kart.Speed` | the class: `RaceSetup.Laps` |
| Can use the object's fields | yes | no: there's no object (CS0120) |
| Shown in the Inspector | if it has `[SerializeField]` | never |

A **static class** holds only static members, and can't be made with `new`. You use
Unity's `Mathf`, `Debug`, `PlayerPrefs` and `SceneManager` the same way, through their
static members. A static class of your own:

```csharp
// Small helpers the whole game uses. No objects: call them through the class name.
public static class TimeText
{
    const int SecondsPerMinute = 60;

    public static string FromSeconds(int seconds)
    {
        return $"{seconds / SecondsPerMinute}:{seconds % SecondsPerMinute:00}";
    }
}
```

```csharp
Debug.Log(TimeText.FromSeconds(125));
Debug.Log(TimeText.FromSeconds(59));
```

```
2:05
0:59
```

### Idea — good uses

| Use | Example | Why static fits |
| --- | --- | --- |
| constants | `const int MaxStands = 8;` | they can't change, so sharing them is safe |
| helpers that need only their parameters | `Mathf.Clamp`, `TimeText.FromSeconds` | there's nothing to keep, so no object is needed |
| names used all over the game | `SettingsKeys.MusicVolume` | written once: a typo becomes a compile error |
| a choice carried to the next scene | `RaceSetup.Track` | loading a scene destroys its objects, but not a static (C# 12) |

```csharp
// Every PlayerPrefs key in the game, in one place.
public static class SettingsKeys
{
    public const string MusicVolume = "MusicVolume";
    public const string Difficulty = "Difficulty";
}
```

`PlayerPrefs.GetFloat(SettingsKeys.MusicVolume, 1f)` can't be misspelt the way
`"MusicVolum"` can: a wrong name doesn't compile (C# 14 covers PlayerPrefs).

```csharp
// What the menu chose, for the race scene to read.
public static class RaceSetup
{
    public static string Track { get; set; }
    public static int Laps { get; set; }
}
```

The menu sets `RaceSetup.Track = "Desert";` and loads the Race scene; the race reads
`RaceSetup.Track`. No object needs to survive the load.

### Idea — the risks: hidden, and longer-lived than you think

**Hidden dependencies.** Any script can read or change a public static, and nothing in
the Inspector shows who does. If `RaceSetup.Laps` is 0 when a race starts, any script in
the project might have done it. Keep statics few and small, and give them `private set`
wherever only their own class should change them.

**Values that outlive a scene.** Loading a scene destroys its objects, never its statics.
That's what makes `RaceSetup` work, and what makes a `static List<Kart>` of the karts in
a race a trap: in the next race it still holds the last one's karts, all destroyed.

**Values that outlive Play.** When you press Play, Unity can do two things: reload the
**domain** (throw away everything your scripts hold in memory, statics included, and
load them afresh) and reload the **scene**. Reloading the domain takes time, seconds in
a big project, so Unity 6's Universal 2D template switches it off: in **Edit → Project
Settings → Editor**, under **Enter Play Mode Settings**, **When entering Play Mode** says
**Reload Scene only**. Play starts much faster, and statics keep last run's values.

| On pressing Play | Domain and scene reloaded | **Reload Scene only** |
| --- | --- | --- |
| the scene's objects and their fields | fresh from the scene | fresh from the scene |
| static fields and properties | back to their starting values | **as the last run left them** |
| static events | empty | **still holding last run's listeners** |

```csharp
// Coins collected in this run: one number for the whole game.
public static class RunStats
{
    public static int Coins { get; private set; }

    public static void AddCoin()
    {
        Coins++;
    }
}
```

```csharp
RunStats.AddCoin();
RunStats.AddCoin();
Debug.Log($"Coins this run: {RunStats.Coins}");
```

```
Coins this run: 2
```

Stop, and press Play again:

```
Coins this run: 4
```

A built game starts fresh each time, so this only happens in the Editor, where you test.
And Unity always reloads the domain after your scripts compile, so the first Play after
an edit is right, and the second is wrong: a bug that seems to come and go.

### Idea — resetting statics when Play starts

Give the class a static method marked with this attribute. Unity calls it each time Play
starts, before the first scene loads, whatever the Enter Play Mode setting:

```csharp
public static class RunStats
{
    public static int Coins { get; private set; }

    public static void AddCoin()
    {
        Coins++;
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Coins = 0;      // every run starts with no coins
    }
}
```

Now every Play says `Coins this run: 2`. It's better than resetting in some object's
`Awake`, because a static belongs to no object: it works in any scene, even one started
on its own. In a build it runs once, at launch, and does no harm.

**Static events** need it most. A static event is handy: every coin raises one
`Coin.Collected`, and a counter subscribes once, without a reference to any coin:

```csharp
using System;
using UnityEngine;

public class Coin : MonoBehaviour
{
    public static event Action Collected;

    void OnTriggerEnter2D(Collider2D other)
    {
        Collected?.Invoke();
        Destroy(gameObject);
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Collected = null;   // forget every listener from the last run
    }
}
```

But the event outlives every scene and, with domain reload off, every Play. A counter
that subscribes and never unsubscribes stays on the list after its scene has gone. The
next coin calls it: a dead script runs again, quietly, or with the
`MissingReferenceException` from C# 2 as soon as it reaches its destroyed
text's GameObject. Unsubscribe in `OnDisable`, always; the reset stops anything that
slips through from reaching the next Play.

### Idea — static, const or readonly?

| | `const` | `static readonly` | `static` |
| --- | --- | --- | --- |
| Can change | never | no: set once, when the class is first used | any time, from any script |
| Types | numbers, `bool`, `string` | any | any |
| Example | `const int MaxLaps = 9;` | `static readonly Color Gold = new Color(1f, 0.8f, 0.2f);` | `static int Coins;` |
| With domain reload off | safe | safe, unless it's a list whose contents change | keeps last run's value |

### Idea — between scenes, and between sessions

| To keep… | Use | Lasts until |
| --- | --- | --- |
| a choice for the next scene | a static, such as `RaceSetup.Track` | the game quits |
| a small setting: the volume, a key binding | PlayerPrefs (C# 14) | it's deleted: it survives quitting |
| game data: unlocks, a deck, the cash of a juice empire | a JSON file (C# 14) | it's deleted |

A static is for **this run only**. Quit, and it's gone.

### Do it

1. Make `RunStats` and the three lines above in a `Practice` script. Press Play twice,
   and see `4`. Add `ResetForPlay`, and press Play twice again.
2. Find the Enter Play Mode setting above. Switch it to reload the domain and the scene,
   and press Play: how long does it take now? Then switch it back.
3. Make `SettingsKeys`, and use it to save and load a volume with PlayerPrefs.
4. Make `Coin` without its reset, and a counter that subscribes in `OnEnable`, with no
   `OnDisable`. On each coin, it shows the count in a text and calls
   `label.gameObject.SetActive(true)`. Play twice, collect a coin in the second run, and
   read the Console. Add the reset: fixed? Now reload the scene with a
   key and collect a coin. Which fix does this one need?

### Challenge

Make a Menu scene that sets `RaceSetup.Track` and `RaceSetup.Laps` from two buttons,
and a Race scene that shows them. Then start the Race scene on its own: what does it
show? Make it fall back to a test track, with `Debug.LogWarning` saying why, and make
sure a stale track from the last Play can never sneak in.

## C# 12 — Scenes

**Goal:** you can split a game into several scenes, load one from code or from a button,
fade between them without freezing, and carry a choice from one scene to the next in the
right way for how long it must last (Associate: Programming — implement transitions
between scenes; save data between scenes and sessions).

### Idea — several scenes instead of one

A bigger game is easier to build as several scenes: a **Menu**, a **Race** (or a level, or
a duel) and a **Results** screen. Each loads only what it needs, and two teammates can work
in two scenes without a conflict (C# 1).

### Idea — the Scene List

Code can only load a scene in the **Scene List**: **File → Build Profiles**, top left.

- **Add Open Scenes** adds the scene you have open, or drag scenes in from the Project
  window. Drag them to change the order; untick one to leave it out of the build.
- The number on the right of each is its **build index**, from 0. Index 0 is the scene a
  build opens with: make it the menu. (In the Editor, **Play** starts the open scene.)

Load a scene that isn't in the list, and the Console says so when the line runs:

```
Scene 'Results' couldn't be loaded because it has not been added to the active build profile or shared scene list or the AssetBundle has not been loaded.
To add a scene to the active build profile or shared scene list use the menu File->Build Profiles
```

### Idea — LoadScene

```csharp
SceneManager.LoadScene("Results");      // by name
SceneManager.LoadScene(2);              // or by build index
```

Both need `using UnityEngine.SceneManagement;`. A name is clearer and survives reordering
the list; an index survives renaming the scene. Most code uses names.

Unity then destroys **every object in the old scene** (each gets `OnDisable` and
`OnDestroy`), and loads the new one, whose objects get `Awake`, `OnEnable` and `Start` as
usual. The switch comes at the start of the next frame, so code after `LoadScene` still
runs. And the game **freezes** while it loads: for a small scene that's a blink, for a big
one it looks like a crash.

### Idea — loading in the background

`LoadSceneAsync` loads the new scene while the old one keeps running, so a bar can fill and
a curtain can fade. It returns an `AsyncOperation` at once, to check in a coroutine:

| Member | Is |
| --- | --- |
| `isDone` | `true` once the new scene has taken over |
| `progress` | how far it's got: it climbs to 0.9 while loading, then 1 as it takes over |
| `allowSceneActivation` | set it to `false` to hold the new scene back at 0.9, say until a key is pressed |

### Idea — a fade between scenes

A fade hides the switch: the screen goes black, the next scene loads behind the curtain,
and the curtain lifts. The curtain is a full-screen black Image with a **Canvas Group**,
whose **Alpha** fades it, on a Canvas with a high **Sort Order**. Every scene has one:

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

// A black curtain over every scene: it lifts when the scene starts, and falls
// before the next one loads. Buttons call FadeTo from their On Click () list.
public class SceneTransition : MonoBehaviour
{
    const float LoadedProgress = 0.9f;      // where progress waits until the switch

    [SerializeField] CanvasGroup curtain;   // on the full-screen black Image
    [SerializeField] Image loadingBar;      // Image Type: Filled, on the curtain
    [SerializeField] float fadeSeconds = 0.4f;

    bool isLoading;

    void Start()
    {
        curtain.alpha = 1f;
        StartCoroutine(FadeTowards(0f));
    }

    public void FadeTo(string sceneName)
    {
        if (isLoading)
        {
            return;                         // a second click mustn't start a second load
        }
        isLoading = true;
        StartCoroutine(FadeAndLoad(sceneName));
    }

    IEnumerator FadeAndLoad(string sceneName)
    {
        yield return StartCoroutine(FadeTowards(1f));
        Time.timeScale = 1f;                // left paused? The next scene mustn't start frozen.
        AsyncOperation loading = SceneManager.LoadSceneAsync(sceneName);
        while (!loading.isDone)
        {
            loadingBar.fillAmount = loading.progress / LoadedProgress;
            yield return null;
        }
    }

    // Unscaled time, so the curtain moves even while the game is paused.
    IEnumerator FadeTowards(float target)
    {
        curtain.blocksRaycasts = true;      // no clicks get through while it moves
        while (!Mathf.Approximately(curtain.alpha, target))
        {
            curtain.alpha = Mathf.MoveTowards(curtain.alpha, target, Time.unscaledDeltaTime / fadeSeconds);
            yield return null;
        }
        curtain.blocksRaycasts = target > 0f;
    }
}
```

> **Watch out:** a Menu button on a pause screen loads the next scene with
> `Time.timeScale` still 0, and the new scene starts frozen. So the fade runs on unscaled
> time (it would never finish at 0), and the time scale goes back to 1 before loading.

### Idea — buttons that load scenes, with no code

`FadeTo` is `public` and takes one `string`, so a Button's **On Click ()** list can call
it with the scene's name typed in. On a Back button: **+**, drag in the object with
`SceneTransition`, choose **SceneTransition → FadeTo (string)**, and type `Menu` in the box
that appears. A designer can rewire every button in the Inspector, and no script knows
where it leads. C# 2 compares this kind of event, a UnityEvent, with C# events.

### Idea — passing data between scenes

Everything in a scene is destroyed when it unloads, so the track chosen in the Menu must
wait somewhere outside any scene. There are four places:

| Way | Lasts | Use it for | Watch out for |
| --- | --- | --- | --- |
| a **static class** | until the game quits | a choice in one scene for the next | old values, and a scene played on its own |
| a **ScriptableObject** asset | until the game quits | the same, through an asset | set every value, every time |
| **PlayerPrefs** or a file | after quitting, too | settings, best times, the save | C# 14 |
| **`DontDestroyOnLoad`** | until it's destroyed | an object that must keep running | a new copy each time you come back |

**1. A static class.** It belongs to no scene and no object, so it survives every load
(C# 11 covers the risks):

```csharp
using UnityEngine;

// What the Menu hands to the Race.
public static class RaceSetup
{
    public static string TrackName { get; set; }
    public static int Laps { get; set; }

    // With domain reload off, static values last from one Play to the next: reset them.
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        TrackName = null;
        Laps = 0;
    }
}
```

The Menu sets `RaceSetup.TrackName = "Harbour";` and fades to `Race`, which reads it.

**2. A ScriptableObject as a container.** The Menu and the Race both get a
`[SerializeField] RaceChoice choice;` field, with the same asset in it:

```csharp
using UnityEngine;

// The same job as RaceSetup, through one asset that both scenes reference. The
// properties aren't serialized, so a choice never ends up in the asset's file.
[CreateAssetMenu(fileName = "Race Choice", menuName = "Karts/Race Choice")]
public class RaceChoice : ScriptableObject
{
    public string TrackName { get; set; }
    public int Laps { get; set; }
}
```

It's the one time an asset holds play-time data on purpose: a container, not a description.

**3. PlayerPrefs or a file**, for what must last after quitting, too: a best lap saved
with `PlayerPrefs.SetFloat` is still there for `PlayerPrefs.GetFloat` next week.

**4. `DontDestroyOnLoad`.** It takes a root object out of its scene, into a scene of its
own called **DontDestroyOnLoad** in the Hierarchy, so no scene load destroys it:

```csharp
using UnityEngine;

// Keeps the music playing from the Menu into every scene after it.
public class MenuMusic : MonoBehaviour
{
    void Awake()
    {
        DontDestroyOnLoad(gameObject);
    }
}
```

The trap: go Menu → Race → Menu, and the Menu makes its `MenuMusic` again while the first
still plays. Two tunes, then three. Avoiding that takes a check Level 5 teaches. This
course's games don't need `DontDestroyOnLoad`: the first three ways carry everything.

### Idea — a scene played on its own

In the Editor you'll often press **Play** in the Race scene itself: the Menu never ran, so
`RaceSetup.TrackName` is `null`. Check what the scene got, fall back on a test value, and
say so. `SceneManager.GetActiveScene().name` is the open scene's name:

```csharp
[SerializeField] string testTrack = "Harbour";
[SerializeField] int testLaps = 2;

void Start()
{
    string trackName = RaceSetup.TrackName;
    int laps = RaceSetup.Laps;
    if (trackName == null)
    {
        trackName = testTrack;
        laps = testLaps;
        Debug.LogWarning($"No track was chosen: the {SceneManager.GetActiveScene().name} scene was played on its own, so it uses the test track.", this);
    }
    Debug.Log($"{laps} laps of {trackName}");
}
```

Played on its own, in a scene called `Race`:

```
No track was chosen: the Race scene was played on its own, so it uses the test track.
2 laps of Harbour
```

Without the check, the first line that uses `trackName` fails with a null reference. And a
Restart button needs one line: `SceneManager.LoadScene(SceneManager.GetActiveScene().name);`

### Do it

1. Make three scenes, `Menu`, `Race` and `Results`, and add them to the Scene List in that
   order. Give each a curtain, a `SceneTransition`, and buttons wired in the Inspector
   that go round: Menu → Race → Results → Menu.
2. Pause `Race` with a key (`Time.timeScale = 0`) and click its Menu button. Remove the
   `Time.timeScale = 1f;` line from `FadeAndLoad` and try again: what happens? Put it back.
3. Choose a track in the Menu with `RaceSetup`, and show it in the Race. Then play the
   Race scene on its own, and read the warning.
4. Do the same with a `RaceChoice` asset instead. Which do you find easier to follow?
5. Add `MenuMusic` to the Menu, go round twice, and count the copies in the
   **DontDestroyOnLoad** scene in the Hierarchy.

### Challenge

Pass the race's time from the Race to the Results scene with `RaceSetup`, and keep the best
time ever in PlayerPrefs, so it's still there after you quit. Show both on the Results
screen, with "New best!" when the time beats the old best.

## Chapter 13 — Title, Beach and Report

**Goal:** a whole game in three scenes. A **Title** over a little bar on the sand, with
**Continue**, **New Game**, **Settings**, **Credits** and **Quit**; the **Beach** you've
built; and a **Report** scene that shows whatever the scene before it left for it. Each
scene fades into the next, and a **Title** button in the Beach's Settings panel goes back.

### Idea — three scenes, one route

```
 ┌─────────┐ Continue  ┌──────────────────┐  Collect   ┌──────────────────────┐
 │  Title  │ ────────► │      Report      │ ─────────► │        Beach         │
 │         │ (away?)   │ "Welcome back":  │            │ the game: bars,      │
 └─────────┘           │ $ made while away│            │ spots, panels        │
      │ New Game       │ [Collect] [×2 ▶] │            └──────────┬───────────┘
      └──────────────► └──────────────────┘ ◄── the Pier ─────────┘
                          "Beach complete!": the next beach
                          Session.Report (static) carries what to show
```

**One scene, two uses.** The Report scene says *Welcome back* when you come back after a
while (Chapter 15), and *Beach complete!* when you sail from the Pier to a new beach
(Chapter 16). It doesn't know which: it shows a `Report`, a plain C# class with a title,
a big line, some smaller lines and an amount, made by the scene before. How does a
`Report` get from one scene to the next, when loading a scene destroys everything in the
old one? C# 11 gave the answer and its price: a `static` class, `Session`, whose
values belong to no scene.

**The price.** This project reloads only the scene when you press Play, not the domain
(C# 11): statics keep the last Play's values. `Session` resets itself at the
start of every Play, with `[RuntimeInitializeOnLoadMethod]`, before any scene loads.

**A scene started on its own.** You'll press Play in the Report scene to work on it, with
nothing before it, so `Session.Report` is empty. The Report then shows a **test** report,
and says so in the Console: a warning, not an error, since it's what you asked for.

### Do it — the fader

1. Every scene fades in from dark brown, and out before the next loads. In the Beach
   scene, an empty `Scene Fader`. Add a **Canvas** (**Screen Space - Overlay**, **Sort
   Order** 100, over every other canvas), a **Graphic Raycaster** and a **Canvas Group**.
   In it, an **Image** `Curtain`, stretched with no gaps, colour `#2A1A0C`.
2. In `Scripts/Flow`, `SceneFader`:

```csharp:SceneFader.cs
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

// Fades the screen from black when a scene starts, and to black before the next
// one loads. Every scene has one. Buttons call FadeTo through their On Click ()
// list in the Inspector, with the scene's name typed in: a Back button needs no
// code of its own.
public class SceneFader : MonoBehaviour
{
    [SerializeField] CanvasGroup curtain;
    [SerializeField] float fadeTime = 0.35f;

    bool isLoading;

    void Start()
    {
        StartCoroutine(Fade(1f, 0f));
    }

    public void FadeTo(string sceneName)
    {
        if (isLoading)
        {
            return;     // a second click mustn't start a second load
        }
        isLoading = true;
        StartCoroutine(FadeAndLoad(sceneName));
    }

    IEnumerator FadeAndLoad(string sceneName)
    {
        yield return StartCoroutine(Fade(0f, 1f));
        AsyncOperation loading = SceneManager.LoadSceneAsync(sceneName);
        while (!loading.isDone)
        {
            yield return null;
        }
    }

    // Unscaled time, so it fades whatever Time.timeScale is.
    IEnumerator Fade(float from, float to)
    {
        curtain.blocksRaycasts = true;
        for (float t = 0f; t < fadeTime; t += Time.unscaledDeltaTime)
        {
            curtain.alpha = Mathf.Lerp(from, to, t / fadeTime);
            yield return null;
        }
        curtain.alpha = to;
        curtain.blocksRaycasts = to > 0f;
    }
}
```

3. A **Canvas Group** fades everything under it with one **Alpha**, and **Blocks
   Raycasts** stops taps reaching the buttons beneath while it fades. Add `SceneFader` to
   `Scene Fader`, drag its own Canvas Group into **Curtain**, and set the Canvas Group's
   **Alpha** to 1: every scene starts dark, then fades in. Drag `Scene Fader` into
   `Prefabs`.

### Do it — what one scene hands the next

4. In `Scripts/Flow`, `Report`, what the Report scene shows, and its two kinds:

```csharp:Report.cs
using System.Collections.Generic;

// What the Report scene shows: "Welcome back" (what you earned while away,
// and the chance to double it), or "Beach complete!" (where you sail next).
public enum ReportKind
{
    WelcomeBack,
    NewBeach
}

// A plain class, made by one scene and shown by the next, through Session.
public class Report
{
    public ReportKind Kind { get; private set; }
    public string Title { get; private set; }
    public string Highlight { get; private set; }   // the big line: "+$1,240", or the next beach's name
    public int Amount { get; private set; }         // Welcome back's money
    public List<string> Lines { get; private set; }

    public Report(ReportKind kind, string title, string highlight, int amount)
    {
        Kind = kind;
        Title = title;
        Highlight = highlight;
        Amount = amount;
        Lines = new List<string>();
    }
}
```

   Two types in one file: the enum is small and belongs with the class. `Highlight` is the
   big line, made by the scene that knows what it means: `+$1.24K` for money, `Coral Cove`
   for a beach.

5. In `Scripts/Flow`, `Session`, for now:

```csharp
using UnityEngine;

// What one scene leaves for the next, in static properties: they belong to no
// scene, so they're still there after a scene loads. Static has a price: they
// also outlive a Play in the Editor, so they're reset at the start of every
// Play, before any scene loads.
public static class Session
{
    // What the Report scene shows next.
    public static Report Report { get; set; }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Report = null;
    }
}
```

6. `[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]` asks
   Unity to call `ResetForPlay` at the very start of every Play, before the first scene's
   `Awake`. In a build it runs once, when the game starts: the same.

### Do it — the Settings panel, and a way back

7. **The Settings Panel**: a variant of `Panel`, its root and title `Settings`. In
   `Content`, a **Candy Button** `Title Button`: bottom-right with its pivot, **Pos Y**
   `20`, 280 × 110, label `Title`. Chapter 14 fills the rest of the panel.
8. In the Beach scene, drag it into `Panels`, add it to the switcher, wire its close
   button, and its `Title Button`'s **On Click ()**: drag in `Scene Fader`, **SceneFader →
   FadeTo (string)**, and type `Title` in the box.
9. **A button for it.** In `Top Bar`, an **Icon Button**, `Settings Button`: middle-right
   with its pivot, **Pos X** `−14`, 120 × 124, **Source Image** `Icon Gear`, its `Icon`
   unticked. **On Click ()**: `Panels`, **PanelSwitcher → Toggle**, the Settings panel.

### Do it — the Title scene

10. In `Assets/Scenes`, **File → New Scene**, **Basic (URP)**, and save it as `Title`. It
    has a camera and a light. Copy into it from the Beach (select them there, **Ctrl+C**,
    open `Title`, **Ctrl+V**): `Sand`, `Sea`, `Wet Sand`, the `Canvas` with its `Safe
    Area` (then delete every child of `Safe Area`), the `EventSystem` and the `Scene
    Fader`. Set the light as the Beach's `Sun`, and the sky and fog as in Chapter 1.
11. **A little bar on the sand**, under an empty `Scenery`, for the camera to look at:

| Model | Position | Rotation Y | Scale |
| --- | --- | --- | --- |
| `Art/Bar/kitchencounter_straight_A` | (0, 0, 2) | 180 | (1, 1, 0.5) |
| `Art/Bar/kitchencounter_straight_B` | (−1.6, 0, 4.2) | 180 | (0.6, 1, 0.5) |
| `Art/Bar/jar_A_large` | (−1.32, 1, 4.3) | 0 | 1.3 |
| `Art/Bar/crate` | (1.8, 0, 4.6) | 20 | 0.6 |
| four `Art/Food/Soda`, as `Cup` | (−0.6, 1, 2), (−0.2, 1, 2), (0.2, 1, 2), (0.6, 1, 2) | 0 | 1 |
| `Art/Characters/Chef_Male` | (0.2, 0, 3.1) | 180 | 1 |
| `Art/Characters/Casual_Female` | (−0.5, 0, 0.7) | 10 | 1 |
| `Art/Nature/Tree_Palm_1` | (−4.2, 0, 5.5) | 0 | 2.2 |
| `Art/Nature/Tree_Palm_2` | (4.4, 0, 6.5) | 90 | 2.4 |
| `Art/Nature/Tree_Palm_3` | (3.6, 0, −1.5) | 30 | 1.8 |

Give the two people the `Person` controller: they stand there, breathing (`Idle`). No
scripts: it's a picture. The camera: **Position** (0, 6.5, −6.5), **Rotation** (30, 0,
0), lower and closer than the Beach's.

12. In `Safe Area`, the logo and the buttons. Every anchor is the centre, but the logo's,
    which is top-centre with its pivot:

| Object | What | Pos | Size | Set |
| --- | --- | --- | --- | --- |
| `Logo` | a text (top-centre) | (0, −120) | 1040 × 200 | `Juice Tycoon`, size 150, `#FFC83D` (gold), centred, the Shadow preset |
| `Continue Button` | **Candy Button Green** | (0, −240) | 620 × 150 | `Continue`, size 64 |
| `Continue Detail` | a text | (0, −350) | 800 × 60 | empty, size 42, white, centred, the Shadow preset |
| `New Game Button` | **Candy Button** | (0, −470) | 620 × 140 | `New Game`, size 56 |
| `Settings Button` | **Candy Button** | (−160, −620) | 300 × 124 | `Settings` |
| `Credits Button` | **Candy Button** | (160, −620) | 300 × 124 | `Credits` |
| `Quit Button` | **Candy Button Red** | (0, −770) | 300 × 124 | `Quit` |

13. **Continue** has nothing to continue until Chapter 14 saves a game. It should look it:
    select `Continue Button`, set its Button's **Transition** to **Sprite Swap**, and drag
    `Button Grey` into **Disabled Sprite**. A button that isn't **Interactable** now shows
    the grey sprite, with no code. (The rows' Buy buttons swap their sprite in code
    instead, because the intern's shop and your Level Rows set it themselves.)
14. **The Credits Panel**: a variant of `Panel`, title `Credits`, and in `Content` a text
    `Text`, stretched with no gaps, size 30, brown, aligned top left, **Overflow**
    `Overflow`, with:

```
<b>Juice Tycoon</b>, for the Unity Programmer Curriculum, Level 4

People: <b>Ultimate Animated Character Pack</b> by Quaternius (CC0)
Fruit and cups: <b>Ultimate Food Pack</b> by Quaternius (CC0)
The bar: <b>Restaurant Bits</b> by Kay Lousberg, KayKit (CC0)
Palms, rocks and the kart: <b>Nature Props</b> and <b>Racing Kart</b> by Fertile Soil Productions (CC0)
Pictures: <b>Fluent Emoji</b> by Microsoft (MIT licence)
Buttons and panels: <b>Free Game GUI</b> by pzUH (CC0)
Font: <b>Lilita One</b> by Juan Montoreano (SIL Open Font Licence)
Sounds and music: <b>Ninja Adventure</b> by Pixel-Boy and AAA (CC0)
```

The `<b>` tags are TextMeshPro's **rich text**: bold, inside one text. Chapters 18 and
19 add two lines, for DOTween and LevelPlay.

15. In `Safe Area`, an empty `Panels`: stretched, **Left** 30, **Top** 140, **Right** 30,
    **Bottom** 140. Drag in a **Settings Panel** and a **Credits Panel**, and add a **Panel
    Switcher** with the two in its **Panels**. **Settings Button**'s On Click: **Toggle**,
    with the Settings panel; **Credits Button**'s: **Toggle**, with the Credits panel; each
    panel's **Close Button**: **CloseAll**. The Beach's script, reused. Untick the
    Settings panel's `Title Button` (you're already at the Title), and both panels.
16. In `Scripts/Flow`, `TitleScreen`, for now:

```csharp
using UnityEngine;
using UnityEngine.UI;

// The Title scene's buttons. Continue waits for Chapter 14's save; New Game
// goes to the beach.
public class TitleScreen : MonoBehaviour
{
    [SerializeField] Button continueButton;
    [SerializeField] GameObject quitButton;
    [SerializeField] SceneFader fader;

    void Start()
    {
        // A web page can't quit itself: there's no Quit on the Web.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        continueButton.interactable = false;    // nothing saved yet: Chapter 14
    }

    public void StartNewGame()
    {
        fader.FadeTo("Beach");
    }

    public void Quit()
    {
        Application.Quit();
    }

    // A test until Chapter 15 makes real reports: while playing, open this
    // component's ⋮ menu in the Inspector.
    [ContextMenu("Test: Show a Report")]
    void ShowTestReport()
    {
        Report report = new Report(ReportKind.WelcomeBack, "Hello from the Title!", "+$4.2K", 4200);
        report.Lines.Add("Made by the Title scene, shown by the Report scene.");
        Session.Report = report;
        fader.FadeTo("Report");
    }
}
```

17. An empty `Title Screen`, with **Title Screen**: **Continue Button**, **Quit Button** and
    **Fader** (the `Scene Fader`). **New Game Button**'s On Click: **Title Screen →
    TitleScreen → StartNewGame**; **Quit Button**'s: **Quit**.
18. `Application.Quit` does nothing in the Editor, and on the Web a page can't close
    itself, so the Quit button hides there. `Application.platform` says where the game is
    running: `WebGLPlayer` is a browser.

### Do it — the Report scene

19. Save `Title`, then **File → Save As…** `Report`. In `Report`, delete everything in `Safe
    Area` and the `Title Screen`. Keep the bar on the sand, the camera, the light, the
    canvas and the fader.
20. In `Safe Area`, an **Image** `Window`: centred, **Pos** (0, −40), 960 × 1120, `Panel`,
    **Sliced**. In it:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Ribbon` | an Image | top-centre | (0, 60) | 800 × 150 | `Ribbon`, Sliced |
| `Ribbon/Title` | a text | stretched: **Left** 100, **Top** 12, **Right** 100, **Bottom** 40 | | | `Welcome back!`, size 56, white, centred, Shadow |
| `Picture` | an Image | top-centre | (0, −140) | 260 × 260 | `money_bag_3d`, Preserve Aspect |
| `Amount` | a text | top-centre | (0, −420) | 880 × 150 | `+$0`, size 110, gold, centred, Shadow |
| `Lines` | a text | top-centre | (0, −590) | 840 × 280 | empty, size 38, brown, centred at the top |
| `Collect Button` | **Candy Button** | bottom-centre | (−210, 70) | 390 × 150 | `Collect` |

21. **Collect** sits to the left: Chapter 19 puts **Collect ×2** beside it. In
    `Scripts/Flow`, `ReportScreen`, for now:

```csharp
using TMPro;
using UnityEngine;

// The Report scene: whatever the last scene left in Session.Report. For now it
// shows the report, and Collect goes to the beach.
public class ReportScreen : MonoBehaviour
{
    [SerializeField] TMP_Text title;
    [SerializeField] TMP_Text lines;
    [SerializeField] TMP_Text amount;
    [SerializeField] SceneFader fader;

    Report report;

    void Start()
    {
        report = Session.Report;
        if (report == null)
        {
            // The scene was started on its own, in the Editor: show a test report.
            Debug.LogWarning("Report started without a Session.Report: showing a test one.", this);
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", "+$12.3K", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        amount.text = report.Highlight;
    }

    public void Collect()
    {
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

22. `string.Join("\n", report.Lines)` puts the lines one under another. **Collect** empties
    `Session.Report` before leaving: a report is shown once. An empty `Report Screen`, with
    **Report Screen**; fill its fields, and set **Collect Button**'s On Click to
    **ReportScreen → Collect**.
23. **File → Build Profiles**, **Scene List**: drag in `Title`, `Report` and `Beach`, with
    `Title` first. The first scene is the one a build starts with; `LoadSceneAsync` can
    only load scenes in this list.

### Test it

- Open `Title` and **Play**. The screen fades in from brown: a bar on the sand, the chef
  behind it. **Continue** is grey. **New Game**: a fade, and you're on the beach. The cog,
  then **Title**: back.
- **Settings** and **Credits** on the Title open their panels; the red **×** closes them.
- On the Title, while playing: select `Title Screen`, open the ⋮ menu of its **Title
  Screen** component, and choose **Test: Show a Report**. The Report scene says *Hello
  from the Title!*: a `Report` made by one scene, shown by the next. **Collect**: the
  beach.
- Open `Report` and press **Play**: *Welcome back! (test)*, and a yellow warning in the
  Console. Click the warning: Unity highlights the `Report Screen`, the object given as the
  warning's second argument.
- **The stale static.** In `Session`, put `//` in front of the
  `[RuntimeInitializeOnLoadMethod…]` line. Play the Title, **Test: Show a Report**, and
  stop on the Report scene **without** collecting. Now Play the `Report` scene on its own:
  it says *Hello from the Title!* again, a report from a Play that's over. Take the `//`
  away and try again: the test report. That's the line's whole job.
- Go back to the beach from the Title: everything you built is gone. Nothing is saved:
  that's the next chapter.

### Commit

*Add the Title and Report scenes, the fader, and Session.*

### Challenge

Give the Report scene a second way out: a small **Title** button in the top corner, for
players who want the menu. Which existing method can its On Click call, with no new code?

## C# 13 — Exceptions: try and catch

**Goal:** you can read an exception in the Console, catch the ones you expect with `try`
and `catch`, tidy up with `finally`, log what went wrong with `Debug.LogError`, and
avoid the ways `catch` hides bugs (Associate: Debugging — use debug messages to find
why code fails).

### Idea — when the program can't go on

Some problems a method can't carry on from: a file that isn't there, text that isn't a
number, a variable that's `null`. C# **throws an exception**: it stops the method at
that line, then the method that called it, and so on, until something **catches** it.
If nothing does, Unity does: it shows the exception in red in the Console and skips the
rest of that `Start`, or that frame's `Update`. The game itself keeps running.

```csharp
int lives = int.Parse("three");
Debug.Log($"Lives: {lives}");     // never runs
```

```
FormatException: Input string was not in a correct format.
```

The first word is the exception's **type**; after the colon comes its **message**.
Click it: the lines below, the **stack trace**, list the methods it passed through, and
one of them names your script and the line.

| Exception | Thrown when | For example |
| --- | --- | --- |
| `NullReferenceException` | you use a variable that holds `null` | a field left empty in the Inspector |
| `FormatException` | text isn't in the form a method expects | `int.Parse("three")` |
| `FileNotFoundException` | a file isn't there | `File.ReadAllText` on a missing file |
| `IOException` | a file can't be read or written (`FileNotFoundException` is one kind) | another program has it locked; the disk is full |
| `ArgumentException` | a method gets a value it can't use | `JsonUtility.FromJson` on damaged JSON |
| `IndexOutOfRangeException` | an index is outside an array | `laps[3]` in an array of 3 |
| `KeyNotFoundException` | a key isn't in a dictionary | `prices["kiwi"]` |

### Idea — try and catch

Put the code that might fail in a `try` block, and what to do if it does in a `catch`
block, with the type of exception it handles:

```csharp
try
{
    int lives = int.Parse("three");
    Debug.Log($"Lives: {lives}");
}
catch (FormatException)
{
    Debug.LogWarning("That wasn't a number, so lives stay at 3.");
}
Debug.Log("The game goes on.");
```

```
That wasn't a number, so lives stay at 3.
The game goes on.
```

The `try` block runs until something throws. Then C# jumps to a `catch` that fits, and
carries on after it. If nothing throws, the `catch` is skipped. A `catch` takes only its
own type, and the kinds of it: a `NullReferenceException` in that `try` would still
reach the Console. Write `catch (FormatException exception)` to use the exception
itself, such as `exception.Message`.

### Idea — several catch blocks, most specific first

Exceptions are a family of classes (C# 8): a `FileNotFoundException`
**is an** `IOException`, and every exception is an `Exception`. C# takes the first
`catch` that fits, from the top, so the most specific goes first:

```csharp
string path = Path.Combine(Application.persistentDataPath, "scores.txt");
try
{
    string text = File.ReadAllText(path);
    Debug.Log($"Read {text.Length} characters");
}
catch (FileNotFoundException)
{
    Debug.Log("No scores yet.");
}
catch (IOException exception)
{
    Debug.LogError($"The scores couldn't be read: {exception.Message}");
}
```

With no file yet, the Console says `No scores yet.` The other way round, the second
`catch` could never run, and the compiler says so:

```csharp
catch (IOException)
{
    // …
}
catch (FileNotFoundException)
{
    // …
}
// error CS0160: A previous catch clause already catches all exceptions of this or of a super type ('IOException')
```

### Idea — finally: whatever happened

A `finally` block runs at the end in every case: nothing thrown, an exception caught,
or one going on up to the Console. It's for what must happen either way, such as hiding
a loading panel or switching a button back on:

```csharp
try
{
    Debug.Log("Reading the prices");
    int price = int.Parse("12x");
    Debug.Log($"Price: {price}");
}
catch (FormatException)
{
    Debug.Log("A price was damaged");
}
finally
{
    Debug.Log("Done, either way");
}
```

```
Reading the prices
A price was damaged
Done, either way
```

### Idea — what not to do

**An empty catch.** It hides the error: the game goes on with half-loaded data, and
nothing in the Console says why. That's the hardest kind of bug to find.

```csharp
try
{
    // … load the level …
}
catch (Exception)
{
    // nothing here: the error vanishes
}
```

**Catching `Exception` everywhere.** It catches every exception, including the bugs you
need to see: a field left empty in the Inspector is treated like a missing file. Catch
the types you expect and can do something about, and let the rest reach the Console.

**Exceptions for normal events.** No file on the first run, letters typed into a number
box, a fruit that isn't on the price list: none of these is exceptional. Check first (as
the scores example could have, with `File.Exists`), and keep `try` for what you can't:

| Instead of catching | Check first with | Because |
| --- | --- | --- |
| `FormatException` from `int.Parse(text)` | `if (int.TryParse(text, out int amount))` | a typing mistake is normal |
| `FileNotFoundException` from `File.ReadAllText(path)` | `if (File.Exists(path))` | no save on the first run is normal |
| `KeyNotFoundException` from `prices[fruit]` | `if (prices.TryGetValue(fruit, out int price))` | a fruit not on the list is normal |

A file can still be locked, or damaged, after `File.Exists` says yes: that part is
exceptional, so reading it stays in a `try`.

### Idea — Debug.LogError in a catch

A `catch` that handles a problem should still report it. Use `Debug.LogError` (red), say
what failed and what the game does instead, add `exception.Message`, and pass `this`, so
clicking the message highlights the object. `Debug.LogWarning` (yellow) is for the odd
but harmless.

### Idea — a worked example: reading a settings file safely

```csharp
// The settings in options.json. JsonUtility fills these fields from the file's text.
[System.Serializable]
public class GameOptions
{
    [SerializeField] float musicVolume = 1f;
    [SerializeField] bool showTimer = true;

    public float MusicVolume { get { return musicVolume; } }
    public bool ShowTimer { get { return showTimer; } }
}
```

```csharp
using System;
using System.IO;
using UnityEngine;

// Reads options.json from the game's own folder. No file is normal (the first run);
// a damaged or unreadable one isn't, but it must never stop the game.
public class OptionsLoader : MonoBehaviour
{
    const string FileName = "options.json";

    public GameOptions Load()
    {
        string path = Path.Combine(Application.persistentDataPath, FileName);
        if (!File.Exists(path))
        {
            return new GameOptions();       // the first run: the defaults
        }
        try
        {
            return JsonUtility.FromJson<GameOptions>(File.ReadAllText(path));
        }
        catch (ArgumentException exception)
        {
            Debug.LogError($"{FileName} is damaged, so the defaults are used.\n{exception.Message}", this);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{FileName} couldn't be read, so the defaults are used.\n{exception.Message}", this);
        }
        return new GameOptions();
    }
}
```

Damage the file on purpose: change `"musicVolume":0.5` to `"musicVolume":loud`.
`JsonUtility` throws an `ArgumentException`, the first `catch` takes it, and the Console
says, in red:

```
options.json is damaged, so the defaults are used.
JSON parse error: Invalid value.
```

The game carries on with the defaults, and the message says what happened and why.
C# 14 builds a whole save system this way.

> **Note:** you'll meet `throw` in other people's code:
> `throw new ArgumentException("A price can't be negative.");` makes an exception and
> sends it up, just as `int.Parse` does. The method stops there, and so does every
> caller, until a `catch` fits. This course doesn't throw its own: in a game, a logged
> error and a safe default usually serve the player better.

### Do it

1. In a `Practice` script, give a `[SerializeField] string livesText` to `int.Parse`.
   Type `three` in the Inspector, play, and find your line in the stack trace. Then
   catch the `FormatException`, and log a warning instead.
2. Change it to `int.TryParse`, with no `try` at all.
3. Make `OptionsLoader`. Log `Application.persistentDataPath`, open that folder, and try
   it with no file, a good file (`{"musicVolume":0.5,"showTimer":false}`) and a damaged
   one. What happens with an empty file? Make sure the game still gets options.
4. Put the `IOException` catch first in the scores example, and read CS0160.

### Challenge

Read a high-score file with one `name,score` per line. A line with a bad score is
skipped, with a `Debug.LogWarning` naming its line number, and the rest still load. A
missing file means "no scores yet", with no warning. Which parts need `try`, and which
only need a check?

## C# 14 — Saving: PlayerPrefs and JSON

**Goal:** you can keep a player's settings in PlayerPrefs and their progress in a JSON save
file, read both back safely, and choose the right place for each piece of data
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — three places to keep things

Static data is gone when the game closes. PlayerPrefs and files are on the disk, so
they're still there next time: *between sessions*, as the exam puts it.

| Place | Lasts | Good for | Example |
| --- | --- | --- | --- |
| a `static` field (C# 11) | until the game closes | passing data between scenes in one run | the kart picked on the menu |
| **PlayerPrefs** | until it's deleted | a few small settings, one value each | the music volume, vibration on or off |
| **a file**, in JSON | until it's deleted | the game's data: progress, lists, anything with a shape | coins, unlocked karts, each stand's level |

### Idea — PlayerPrefs: small values under names

PlayerPrefs keeps each value under a name, its **key**, like a labelled box:

| Call | Does |
| --- | --- |
| `SetInt(key, value)`, `SetFloat(…)`, `SetString(…)` | stores a value under the key, replacing the old one |
| `GetInt(key, defaultValue)`, `GetFloat(…)`, `GetString(…)` | reads it back, or gives the default when nothing is stored |
| `HasKey(key)`, `DeleteKey(key)` | is anything stored under the key? remove it |
| `Save()` | writes everything to the disk now; otherwise that happens when the game quits normally, and a crash loses the changes |

```csharp
PlayerPrefs.SetInt("BestLap", 42);
Debug.Log(PlayerPrefs.HasKey("BestLap"));
PlayerPrefs.DeleteKey("BestLap");
Debug.Log(PlayerPrefs.GetInt("BestLap", 0));
```

```
True
0
```

There's no `SetBool`: store 1 or 0 with `SetInt(VibrationKey, isOn ? 1 : 0)`, and read it
with `GetInt(VibrationKey, 1) == 1`. Keep each key in a `const string` like `VibrationKey`:
a typo in a string key just never loads, but a typo in a constant's name doesn't compile.

> **Watch out:** PlayerPrefs isn't for game data. It's kept with the computer's settings
> (the **registry** on Windows, a **.plist** file in Library/Preferences on macOS, the
> **browser** in WebGL), where anyone can change it, and it's one flat list of keys.

### Idea — JsonUtility: an object to text and back

**JSON** writes data as text that people and programs can both read. `JsonUtility` turns
an object into JSON, and back. Its class must be `[System.Serializable]`, and it saves the
**public** and `[SerializeField]` fields, the ones the Inspector would show:

```csharp
using System.Collections.Generic;

// Public fields, because JsonUtility saves them: the style guide's one exception.
[System.Serializable]
public class SaveData
{
    public const int CurrentVersion = 1;

    public int version = CurrentVersion;
    public int coins;
    public float bestLapTime;
    public List<string> unlockedKarts = new List<string>();
}
```

- `JsonUtility.ToJson(data, true)` gives the JSON text, one value per line (`false`: all
  on one line). `JsonUtility.FromJson<SaveData>(json)` makes a new `SaveData` from it.
- A field the text doesn't mention keeps the class's own value; a name in the text that
  the class doesn't have is ignored.

| JsonUtility can't save | Save this instead |
| --- | --- |
| a `Dictionary` | two lists, or a list of `[System.Serializable]` pairs |
| a property, a `static` field, a private field without `[SerializeField]` | a public or `[SerializeField]` field |
| a reference to an asset: a ScriptableObject, a Sprite, a prefab | its id, as a `string` (see below) |
| a list or an array on its own | a field in a class |

> **Watch out:** none of these is an error. JsonUtility leaves them out, a list on its own
> comes out as `{}`, and an asset as an `instanceID` that means nothing next session.

### Idea — a save file, start to finish

`Application.persistentDataPath` is a folder Unity gives every game for its own files, on
every platform; a built game has no Assets folder to write to. Log it to find it: on a Mac
it's in Library/Application Support, on Windows in AppData\LocalLow. `Path.Combine` adds a
file name, and `File` has `Exists(path)`, `ReadAllText(path)` and `WriteAllText(path, text)`.

```csharp
using System;
using System.IO;
using UnityEngine;

public static class SaveSystem
{
    const string FileName = "save.json";
    const string DamagedFileName = "save.bad.json";

    static string FilePath
    {
        get { return Path.Combine(Application.persistentDataPath, FileName); }
    }

    public static SaveData Load()
    {
        if (!File.Exists(FilePath))
        {
            return new SaveData();      // the first run: nothing saved yet
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(File.ReadAllText(FilePath));
            if (data == null)
            {
                data = new SaveData();  // an empty file
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            Debug.LogError($"The save file is damaged: it's kept as {DamagedFileName}, and a new save starts.\n{exception.Message}");
            KeepDamagedFile();
            return new SaveData();
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save file couldn't be read: {exception.Message}");
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        try
        {
            File.WriteAllText(FilePath, JsonUtility.ToJson(data, true));
        }
        catch (IOException exception)
        {
            Debug.LogError($"The save file couldn't be written: {exception.Message}");
        }
    }

    static void KeepDamagedFile()
    {
        try
        {
            File.Copy(FilePath, Path.Combine(Application.persistentDataPath, DamagedFileName), true);
        }
        catch (IOException exception)
        {
            Debug.LogWarning($"The damaged save file couldn't be kept: {exception.Message}");
        }
    }
}
```

```csharp
SaveData data = SaveSystem.Load();
data.coins += 50;
SaveSystem.Save(data);
Debug.Log($"{data.coins} coins");
```

```
50 coins
```

Play again for `100 coins`, read back from the disk. After the first Play, `save.json`
holds this: braces `{ }` hold `"name": value` pairs, and brackets `[ ]` hold a list.

```json
{
    "version": 1,
    "coins": 50,
    "bestLapTime": 0.0,
    "unlockedKarts": []
}
```

### Idea — when the file is missing, damaged or old

| Problem | `Load` sees | and does (C# 13) |
| --- | --- | --- |
| no file: the first run | `File.Exists` is false | starts a new save |
| a damaged file, edited by hand or cut off half-written | an `ArgumentException` from `FromJson` | logs an error, keeps the bad file, starts a new save |
| a disk problem: no permission, the file locked | an `IOException` from `File` | logs an error, starts a new save |

Without the `try`, loading stops at `FromJson`, with an error such as this in the Console:

```
ArgumentException: JSON parse error: Invalid value.
```

Keep the bad file: you can see what broke, and if it was your bug, the progress can be
rescued. Catch the two named types only: anything else is a bug, and should show.

An **old** file is what `version` is for. Say version 2 of your game renames the buggy's id
to `dune-buggy`: after loading, `if (data.version < 2)`, it swaps the old id in the list for
the new one and sets `data.version = 2`. Put `version` in from the first release: a field
missing from the file keeps the class's own value, so a save without one looks new.

### Idea — saving ids, and turning them back into things

A save can't hold an asset, so it holds each one's **id**, and a `Dictionary`
(C# 6) turns the ids back into assets. A deck of cards or a row of juice
stands works the same way:

```csharp
[SerializeField] GameObject[] kartPrefabs;

readonly Dictionary<string, GameObject> kartsById = new Dictionary<string, GameObject>();

void Awake()
{
    foreach (GameObject kart in kartPrefabs)
    {
        kartsById[kart.name] = kart;        // the prefab's name is its id
    }
}

List<GameObject> UnlockedKarts(SaveData data)
{
    List<GameObject> karts = new List<GameObject>();
    foreach (string id in data.unlockedKarts)
    {
        if (kartsById.TryGetValue(id, out GameObject kart))
        {
            karts.Add(kart);
        }
        else
        {
            Debug.LogWarning($"The save has a kart '{id}' that the game doesn't know: skipped.", this);
        }
    }
    return karts;
}
```

> **Note:** in other people's code you'll also meet `Resources.Load<GameObject>("Karts/" +
> id)`: Unity loads an asset by its path, from a folder called `Resources`. It needs no
> list to fill in, but it has costs. Everything in a `Resources` folder goes into the
> build, used or not; Unity indexes all of it when the game starts; and a renamed file
> just returns `null`, found only when that line runs. Unity advises against it in
> finished games, so this course keeps references set in the Inspector, as above. Level 5
> measures those costs, and loads assets with **Addressables** instead.

> **Note:** a WebGL game runs in a browser, which gives it no folder on the disk, so Unity
> keeps `persistentDataPath` in the browser's own storage, for that website (the path
> starts `/idbfs/`). The save file and PlayerPrefs survive closing the browser: in a
> Unity 6000.6 web build, both were back on reopening, even after closing half a second
> after saving. Clearing the site's data in the browser deletes them both. Check your own
> game in a real web build all the same: play, close the tab, open the page again.

### Do it

1. Run the PlayerPrefs example. Then remove the `DeleteKey` line and change `"BestLap"` to
   `"Bestlap"` in the last line only: what comes back, and why?
2. Make `SaveData` and `SaveSystem`, run the save example three times, and read `save.json`.
3. Delete a quote mark in the file and press Play. Read the error; find `save.bad.json`.
4. Add a `Dictionary<string, int>` of trophies to `SaveData`, and look for it in the file.

### Challenge

An id must never change, but a prefab's name is easy to change: give each kart a
ScriptableObject (C# 5) with an `id` field, and look karts up by it.
Add an **Unlock** button that saves the next kart's id, and a vibration toggle in
PlayerPrefs. Type an unknown id into the file: does the game warn, and carry on?

## Chapter 14 — Save and Load

**Goal:** the game saved to a JSON file: your money (and the notes still on the cash
mats), everything built and what you've paid towards the next spot, the upgrades and
helpers, your tray and flip-flops, the kart, the counts behind the trophies and the
trophies won. It saves every 30 seconds, when a phone sends it to the background, when it
quits, and when you leave the Beach. **Continue** on the Title brings it all back; **New
Game** asks before it throws a save away. A missing or damaged file never stops the game.
And a **Settings** panel where you choose your own keys.

### Idea — what to save, and what not

Saving is choosing. Some of the game's state must outlive quitting; some of it can be
worked out again from the rest; some doesn't matter.

| Saved | Not saved, because… |
| --- | --- |
| the money, and what you've earned in your life; the notes on the cash mats, as money | |
| the **ids** of the spots built, and what's paid on the others | what they built: building again from the ids switches it all back on |
| the **ids** of the upgrades bought | what they did (×1.5, a helper) is applied again from the ids |
| the tray's, the flip-flops' and the kart's levels | the kart's place on its road: a new lap starts |
| the counts Sam's trophies need, and the trophies won (their ids) | the toasts already shown |
| | the fruit in the crates, the cups, the customers: a bar fills again in seconds, and saving every cup would cost more than it gives |

**Ids, not things.** `JsonUtility` (C# 14) writes a class's public fields as
text. It can't write a reference to an asset (an `Upgrade`) or to an object in the scene
(a `BuildSpot`), and it can't write a `Dictionary`. So the save keeps **ids**: `"table-1"`,
`"orange-bar-price-1"`. When the game loads, the build list builds each spot whose id is in
the save, and the `UpgradeLibrary` turns each upgrade id back into its upgrade (that's
what its `Dictionary` is for). This is also why an id must never change once players have
saves: `"orange-bar-price-1"` renamed to `"sweet-oranges"` would quietly lose the upgrade
for everyone.

**When to save.** A phone game can be closed at any moment, often without quitting: the
player switches apps, and the phone may stop the game later without warning. So the game
saves:

| When | Unity calls |
| --- | --- |
| every 30 seconds | `Update`, with a timer |
| a phone sends the game to the background; a browser tab is hidden | `OnApplicationPause(true)` |
| the game quits | `OnApplicationQuit` |
| you go back to the Title | the Title button calls `Save`, then fades |

Not in `OnDestroy`, though it looks like the obvious place. When a scene closes, Unity
destroys its objects in no promised order: by the time the game's `OnDestroy` runs, the
kart or a bar may already be gone, and reading them throws a
`MissingReferenceException`. (This game did exactly that while it was being made.)

**Never let a file break the game.** A save can be missing (the first run), half written
(the battery died), or edited by a curious player. C# 13: reading it goes in
a `try`; a file that can't be read is logged, kept aside for you to look at, and the game
starts afresh.

### Do it — what the file holds

1. In `Scripts`, a folder `Save`. In it, `SaveData`, the file's shape, with three small
   classes for its lists:

```csharp:SaveData.cs
using System.Collections.Generic;

// Everything juice-tycoon.json keeps. JsonUtility saves public fields only,
// and can't save a Dictionary or a DateTime: what's built and bought are lists
// of ids, and the time is a long, DateTime's Ticks. It doesn't keep the fruit
// in the crates, the cups on the counters or the customers: each bar fills
// again in seconds, and saving every cup would cost more than it gives.
[System.Serializable]
public class SaveData
{
    public int version = 2;
    public int beach;                   // 0 Sunny Bay, 1 Coral Cove, 2 Sunset Shore, 3 Sunny Bay again
    public int money;
    public int lifetimeEarned;
    public float boostSecondsLeft;
    public List<string> built = new List<string>();
    public List<SpotPaid> paid = new List<SpotPaid>();
    public List<string> upgrades = new List<string>();
    public int trayLevel;
    public int flipFlopLevel;
    public int kartLevel;
    public StatsSave stats = new StatsSave();
    public List<string> trophies = new List<string>();
    // When it was saved, and what earned by itself then: enough to work out
    // what you earned while away, before the Beach scene is even loaded.
    public long savedAtTicks;
    public List<AwaySource> awaySources = new List<AwaySource>();
}

// A build spot paid for in part.
[System.Serializable]
public class SpotPaid
{
    public string id;
    public int paid;
}

// The counts behind Sam's achievements, for the player's whole life.
[System.Serializable]
public class StatsSave
{
    public long cupsSold;
    public long customersServed;
    public long fruitPicked;
    public long spotsBuilt;
    public long upgradesBought;
    public long cupsCleared;
    public long beachesOpened;
    public long awayEarned;
    public long moneyEarned;
}

// Something that earns while you're away, and how much each second.
[System.Serializable]
public class AwaySource
{
    public string name;
    public float perSecond;
}
```

2. The style guide's one exception: a save-data class has **public fields**, because
   `JsonUtility` writes public fields. `[System.Serializable]` lets it write the small
   classes inside. `version` is for one day: if the shape of the file changes, the game
   can tell an old file from a new one. Four fields wait for later chapters: `beach`
   (16), `savedAtTicks` and `awaySources` (15), `boostSecondsLeft` (19). Until then they
   stay 0 and empty.

### Do it — reading and writing, safely

3. In `Save`, `SaveSystem`:

```csharp:SaveSystem.cs
using System;
using System.IO;
using UnityEngine;

// Reads and writes juice-tycoon.json in the folder Unity keeps for each game's
// files (Application.persistentDataPath). A file can be missing or damaged,
// so reading and writing are wrapped in try / catch: a bad file must never
// stop the game.
public static class SaveSystem
{
    const string FileName = "juice-tycoon.json";
    const string DamagedName = "juice-tycoon.bad.json";

    static string FilePath { get { return Path.Combine(Application.persistentDataPath, FileName); } }

    public static bool HasSave { get { return File.Exists(FilePath); } }

    // The saved game, or a new one when there's none (the first run) or it's damaged.
    public static SaveData Load()
    {
        if (!HasSave)
        {
            return new SaveData();
        }
        string json;
        try
        {
            json = File.ReadAllText(FilePath);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{FileName} couldn't be read: {exception.Message}");
            return new SaveData();
        }
        try
        {
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            if (data == null)
            {
                Debug.LogWarning("The save file is empty: starting a new game.");
                return new SaveData();
            }
            return data;
        }
        catch (ArgumentException exception)
        {
            KeepDamagedFile(exception);
            return new SaveData();
        }
    }

    public static void Save(SaveData data)
    {
        try
        {
            File.WriteAllText(FilePath, JsonUtility.ToJson(data, true));
        }
        catch (IOException exception)
        {
            Debug.LogError($"{FileName} couldn't be written: {exception.Message}");
        }
    }

    // New Game, and Delete Save in Settings. Only this game's file: in the
    // Editor, every game in the project shares the folder.
    public static void Delete()
    {
        try
        {
            File.Delete(FilePath);
        }
        catch (IOException exception)
        {
            Debug.LogError($"{FileName} couldn't be deleted: {exception.Message}");
        }
    }

    // JsonUtility couldn't read the file: keep it to look at, and start again without it.
    static void KeepDamagedFile(ArgumentException exception)
    {
        Debug.LogError($"{FileName} is damaged, so the game starts again without it. The old file is kept as {DamagedName}.\n{exception.Message}");
        try
        {
            File.Copy(FilePath, Path.Combine(Application.persistentDataPath, DamagedName), true);
        }
        catch (IOException copyException)
        {
            Debug.LogWarning($"The damaged file couldn't be kept: {copyException.Message}");
        }
    }
}
```

4. Look up **Application.persistentDataPath** in the Scripting API: a folder each game is
   given for its files, kept between runs and updates. Every `catch` names the exceptions
   it expects: `IOException` when the disk refuses (no space, a locked file),
   `ArgumentException` when `JsonUtility` can't read the text. Anything else is a bug in
   our code, and should stop loudly, not be swallowed. No `catch` is empty: each logs what
   went wrong, then recovers.

### Do it — every part of the game can be restored

5. Most of the game can already be put back: `Wallet.Restore`, `Upgrades.Restore`,
   `ChefLevels.Restore`, `JuiceKart.Restore` and Sam's `AchievementTracker.Restore` were
   written with their classes. Three parts need it now. A build spot, at the end of
   `BuildSpot`:

<!-- check: add to BuildSpot -->
```csharp
public class BuildSpot : Station
{
    // … as before …

    // Loading a save: what was paid before, and this beach's prices.
    public void Restore(int paidBefore, float beachPriceFactor)
    {
        priceFactor = beachPriceFactor;
        paid = Mathf.Clamp(paidBefore, 0, Price);
        Show();
    }
}
```

6. The build list, which builds again whatever the save says is built, in order, and tells
   the save what's built and what's paid. It no longer offers the first spots in `Start`:
   `Restore` does, as the Beach loads.

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// Every build spot on the beach, in the designer's order, and the ones offered
// at the start. A save keeps the ids of the spots built, and what was paid on
// the others; Restore builds them again, then offers what comes next.
public class BuildList : MonoBehaviour
{
    [SerializeField] BuildSpot[] spots;
    [SerializeField] BuildSpot[] first;

    public IReadOnlyList<BuildSpot> Spots { get { return spots; } }

    public event Action<BuildSpot> SpotBuilt;

    void OnEnable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built += OnBuilt;
        }
    }

    void OnDisable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built -= OnBuilt;
        }
    }

    void OnBuilt(BuildSpot spot)
    {
        SpotBuilt?.Invoke(spot);
    }

    public void Restore(List<string> builtIds, List<SpotPaid> paid, float priceFactor)
    {
        foreach (BuildSpot spot in spots)
        {
            spot.gameObject.SetActive(false);
            int paidBefore = 0;
            foreach (SpotPaid each in paid)
            {
                if (each.id == spot.Id)
                {
                    paidBefore = each.paid;
                }
            }
            spot.Restore(paidBefore, priceFactor);
        }
        // In order: each one built offers the next, and a later one built hides it again.
        foreach (BuildSpot spot in spots)
        {
            if (builtIds.Contains(spot.Id))
            {
                spot.Build();
            }
        }
        foreach (BuildSpot spot in first)
        {
            spot.Offer();
        }
    }

    public List<string> BuiltIds()
    {
        List<string> ids = new List<string>();
        foreach (BuildSpot spot in spots)
        {
            if (spot.IsBuilt)
            {
                ids.Add(spot.Id);
            }
        }
        return ids;
    }

    public List<SpotPaid> PaidSoFar()
    {
        List<SpotPaid> paid = new List<SpotPaid>();
        foreach (BuildSpot spot in spots)
        {
            if (!spot.IsBuilt && spot.Paid > 0)
            {
                SpotPaid each = new SpotPaid();
                each.id = spot.Id;
                each.paid = spot.Paid;
                paid.Add(each);
            }
        }
        return paid;
    }
}
```

7. Read `Restore`'s second loop. `Build` switches on what it builds, hides its own spot,
   and offers the ones after it. Going through the spots in the list's order, a spot
   offered by one built earlier is hidden again when its own turn comes, if it was built
   too. What's left showing is exactly the spots that come next. That only works because
   **Spots** is in the designer's order: keep it so. `Built` isn't raised: no toasts, and
   no trophy counts, for spots built long ago.
8. And Sam's counts. Add these to `GameStats`:

<!-- check: add to GameStats -->
```csharp
public class GameStats : MonoBehaviour, IStatSource
{
    // … as before …

    public void Restore(StatsSave saved)
    {
        CupsSold = saved.cupsSold;
        CustomersServed = saved.customersServed;
        FruitPicked = saved.fruitPicked;
        SpotsBuilt = saved.spotsBuilt;
        UpgradesBought = saved.upgradesBought;
        CupsCleared = saved.cupsCleared;
        BeachesOpened = saved.beachesOpened;
        AwayEarned = saved.awayEarned;
        MoneyEarned = saved.moneyEarned;
    }

    public StatsSave ToSave()
    {
        StatsSave saved = new StatsSave();
        saved.cupsSold = CupsSold;
        saved.customersServed = CustomersServed;
        saved.fruitPicked = FruitPicked;
        saved.spotsBuilt = SpotsBuilt;
        saved.upgradesBought = UpgradesBought;
        saved.cupsCleared = CupsCleared;
        saved.beachesOpened = BeachesOpened;
        saved.awayEarned = AwayEarned;
        saved.moneyEarned = MoneyEarned;
        return saved;
    }
}
```

### Do it — the Beach loads, and saves

9. In `Scripts/Flow`, `BeachGame`, for now:

```csharp
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, and saves every 30 seconds, when a phone sends the game to the
// background, when the game quits, and when Settings' Title button leaves the
// scene. Not in OnDestroy: by then the scene is being taken down, and the kart
// or a bar may already be gone.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] CashPile[] cashPiles;
    [SerializeField] BuildList buildList;
    [SerializeField] Upgrades upgrades;
    [SerializeField] ChefLevels chef;
    [SerializeField] JuiceKart kart;
    [SerializeField] GameStats stats;
    [SerializeField] AchievementTracker tracker;
    [SerializeField] float autosaveSeconds = 30f;

    float nextSaveTime;
    bool hasLoaded;         // saving before the save is loaded would write a new game over it

    void Start()
    {
        Load();
        hasLoaded = true;
        nextSaveTime = Time.unscaledTime + autosaveSeconds;
    }

    void Update()
    {
        if (Time.unscaledTime >= nextSaveTime)
        {
            Save();
            nextSaveTime = Time.unscaledTime + autosaveSeconds;
        }
    }

    // A phone switching to another app; a browser tab hidden.
    void OnApplicationPause(bool isPaused)
    {
        if (isPaused)
        {
            Save();
        }
    }

    void OnApplicationQuit()
    {
        Save();
    }

    public void Save()
    {
        // Unity can call OnApplicationPause before Start: a game starting in the
        // background does. The scene isn't loaded yet; there's nothing to save.
        if (!hasLoaded)
        {
            return;
        }
        SaveData data = new SaveData();
        // The notes still on the cash piles are yours: they're saved as money.
        int waiting = 0;
        foreach (CashPile pile in cashPiles)
        {
            waiting += pile.Total;
        }
        data.money = wallet.Money + waiting;
        data.lifetimeEarned = wallet.LifetimeEarned + waiting;
        data.built = buildList.BuiltIds();
        data.paid = buildList.PaidSoFar();
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.trayLevel = chef.TrayLevel;
        data.flipFlopLevel = chef.FlipFlopLevel;
        data.kartLevel = kart.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        SaveSystem.Save(data);
    }

    void Load()
    {
        // A new game is a save with nothing in it.
        SaveData data = SaveSystem.HasSave ? SaveSystem.Load() : new SaveData();
        wallet.Restore(data.money, data.lifetimeEarned);
        buildList.Restore(data.built, data.paid, 1f);
        upgrades.Restore(data.upgrades);
        chef.Restore(data.trayLevel, data.flipFlopLevel);
        kart.Restore(data.kartLevel, 1f);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```

10. Read `Load`'s order. The spots are built **before** the upgrades are applied: a hired
    runner walks to a crate, and the Apple Bar's crate must be built first. A new game
    and a loaded one go the same way: a new game is a `SaveData` with nothing in it,
    loaded like any other.
11. On the Beach, an empty `Beach Game`, with **Beach Game**: **Wallet**, **Cash Piles**
    the four bars' cash piles, **Build List**, **Upgrades**, **Chef** (the scene's
    `Chef`'s **Chef Levels**), **Kart**, **Stats** and **Tracker** (on `Trophies`).
12. **Leaving saves.** On the Settings panel in the Beach, the `Title Button`'s **On Click
    ()** gets a second line, **above** the fade: **+**, drag in `Beach Game`, **BeachGame →
    Save**. The listeners run in the order they're listed, so the game is saved, then the
    fade begins. (Drag the lines by their handles to reorder them.)

> **Watch out: `hasLoaded`.** It looks like a line you could do without. Unity calls
> `OnApplicationPause` whenever the game's pause state changes, and that can be **before
> `Start`**: a game that starts in the background does it (an Editor without focus, a
> phone that's busy). Without `hasLoaded`, `Save` would run then, writing the scene's
> starting state (nothing built, $0) over the real save, and *then* `Start` would load
> that. Never assume one of Unity's calls comes after another unless the docs promise it.

### Do it — your own keys

13. In `Save`, `GameSettings`:

```csharp:GameSettings.cs
using UnityEngine;
using UnityEngine.InputSystem;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads. They start with the game's name because every game in one
// Unity project shares the same PlayerPrefs.
public static class GameSettings
{
    const string MusicVolumeKey = "JuiceTycoon.MusicVolume";
    const string EffectsVolumeKey = "JuiceTycoon.EffectsVolume";
    const string BindingsKey = "JuiceTycoon.Bindings";
    const float DefaultMusicVolume = 0.5f;
    const float DefaultEffectsVolume = 0.8f;

    public static float MusicVolume
    {
        get { return PlayerPrefs.GetFloat(MusicVolumeKey, DefaultMusicVolume); }
        set { PlayerPrefs.SetFloat(MusicVolumeKey, value); }
    }

    public static float EffectsVolume
    {
        get { return PlayerPrefs.GetFloat(EffectsVolumeKey, DefaultEffectsVolume); }
        set { PlayerPrefs.SetFloat(EffectsVolumeKey, value); }
    }

    // Writes the settings to disk now, rather than when the game quits.
    public static void Save()
    {
        PlayerPrefs.Save();
    }

    // Every key the player has changed, as one line of JSON.
    public static void SaveBindings(InputActionAsset actions)
    {
        PlayerPrefs.SetString(BindingsKey, actions.SaveBindingOverridesAsJson());
        PlayerPrefs.Save();
    }

    public static void LoadBindings(InputActionAsset actions)
    {
        string json = PlayerPrefs.GetString(BindingsKey, "");
        if (json != "")
        {
            actions.LoadBindingOverridesFromJson(json);
        }
    }

    public static void ResetBindings(InputActionAsset actions)
    {
        actions.RemoveAllBindingOverrides();
        PlayerPrefs.DeleteKey(BindingsKey);
        PlayerPrefs.Save();
    }
}
```

14. Settings go in **PlayerPrefs**, not the save file (C# 14): they're small, they
    belong to this computer rather than this game's progress, and **Delete Save** shouldn't
    reset your keys. A changed key is an **override** on top of the asset's own binding;
    `SaveBindingOverridesAsJson` writes only the overrides. The volumes are for Chapter 17.
15. In `Save`, `RebindRow`:

```csharp:RebindRow.cs
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// One row of the Settings panel: a key's name, its key, and Change. Change
// waits for the next key pressed and makes it the binding's new key, then
// saves every changed key in PlayerPrefs. The Move action has several
// bindings: WASD is a composite, and each of its four parts is a binding of
// its own, with its own index (Up is 1, Down 2, Left 3, Right 4).
public class RebindRow : MonoBehaviour
{
    [SerializeField] InputActionReference action;
    [SerializeField] int bindingIndex;
    [SerializeField] TMP_Text keyText;
    [SerializeField] Button changeButton;

    InputActionRebindingExtensions.RebindingOperation rebinding;

    void OnEnable()
    {
        changeButton.onClick.AddListener(StartRebinding);
    }

    void OnDisable()
    {
        changeButton.onClick.RemoveListener(StartRebinding);
        if (rebinding != null)
        {
            rebinding.Cancel();
        }
    }

    // The key's own name, such as "1" or "Tab". GetBindingDisplayString would
    // name it by the computer's keyboard layout, which can be a letter our
    // font doesn't have.
    public void Refresh()
    {
        string path = action.action.bindings[bindingIndex].effectivePath;
        keyText.text = InputControlPath.ToHumanReadableString(path, InputControlPath.HumanReadableStringOptions.OmitDevice);
    }

    void StartRebinding()
    {
        // An action can't be rebound while it's listening, so switch it off for now.
        bool wasEnabled = action.action.enabled;
        action.action.Disable();
        keyText.text = "Press a key...";

        rebinding = action.action.PerformInteractiveRebinding(bindingIndex)
            .WithControlsHavingToMatchPath("<Keyboard>")
            .WithCancelingThrough("<Keyboard>/escape")
            .OnComplete(operation => Finish(wasEnabled))
            .OnCancel(operation => Finish(wasEnabled))
            .Start();
    }

    void Finish(bool enableAgain)
    {
        rebinding.Dispose();
        rebinding = null;
        if (enableAgain)
        {
            action.action.Enable();
        }
        GameSettings.SaveBindings(action.asset);
        Refresh();
    }
}
```

16. **Change** switches the action off (an action can't be rebound while it's listening),
    shows *Press a key...*, and starts `PerformInteractiveRebinding`: the Input System
    waits for the next key. Only keyboard keys count (`WithControlsHavingToMatchPath`), and
    **Esc** cancels. Either way, `Finish` tidies up, switches the action back on if it was,
    saves, and shows the key's name. `bindingIndex` says which of the action's bindings:
    Move has eleven (the WASD composite and its four parts, the arrows' composite and its
    four, the stick), and a row changes one of them.
17. **The Rebind Row.** In `Safe Area`, an empty `Rebind Row`, 880 × 90, with a **Layout
    Element** (**Preferred Height** 90, **Flexible Width** 1). In it:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Action` | a text | middle-left | (0, 0) | 380 × 70 | `Walk Up`, size 36, brown, left |
| `Key` | a text | middle-left | (390, 0) | 220 × 70 | `W`, size 36, light brown, centred |
| `Change Button` | **Candy Button** | middle-right | (0, 0) | 220 × 84 | `Change`, size 34 |

Add **Rebind Row** (**Key Text**, **Change Button**; **Action** stays empty in the
prefab). Into `Prefabs/UI`, and delete it from the scene.

18. In `Save`, `SettingsPanel`, for now with the keys and Delete Save:

```csharp
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.InputSystem;

// The Settings panel, in the Title and on the Beach: the keys, and (in the
// Title) Delete Save. Chapter 17 adds the volumes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] InputActionAsset actions;
    [SerializeField] RebindRow[] rebindRows;
    [SerializeField] GameObject confirmDelete;
    [SerializeField] UnityEvent onSaveDeleted;     // the Title greys out Continue

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        confirmDelete.SetActive(false);
        RefreshKeys();
    }

    // The Reset Keys button.
    public void ResetKeys()
    {
        GameSettings.ResetBindings(actions);
        RefreshKeys();
    }

    // Delete Save asks first; the confirm panel's Delete button calls DeleteSave.
    public void AskToDeleteSave()
    {
        confirmDelete.SetActive(true);
    }

    public void DeleteSave()
    {
        SaveSystem.Delete();
        confirmDelete.SetActive(false);
        onSaveDeleted.Invoke();
    }

    public void CancelDelete()
    {
        confirmDelete.SetActive(false);
    }

    void RefreshKeys()
    {
        foreach (RebindRow row in rebindRows)
        {
            row.Refresh();
        }
    }
}
```

19. `onSaveDeleted` is a **UnityEvent** field, named `on` + what happened, as the style
    guide says: whatever a scene wires to it in the Inspector runs after a delete. The
    panel doesn't need to know who listens.
20. **The Settings panel, filled.** Open the **Settings Panel** prefab. In `Content`:
    - A text `Keys`: top-left with its pivot, **Pos Y** −220, 880 × 60, size 42, brown.
      (The space above is for Chapter 17's volumes.)
    - An empty `Rebind Rows`: top-stretch with its pivot at the top, **Pos Y** −290,
      **Height** 820, with a **Vertical Layout Group** (**Control Child Size** both,
      **Child Force Expand** neither). Five **Rebind Row**s in it:

| Row | `Action` text | **Action** | **Binding Index** |
| --- | --- | --- | --- |
| `Walk Up Row` | `Walk Up` | `Chef/Move` | 1 |
| `Walk Down Row` | `Walk Down` | `Chef/Move` | 2 |
| `Walk Left Row` | `Walk Left` | `Chef/Move` | 3 |
| `Walk Right Row` | `Walk Right` | `Chef/Move` | 4 |
| `Menu Row` | `Menu` | `Chef/Menu` | 0 |

For **Action**, open the `Juice Tycoon Controls` asset in the Project window (the
arrow beside it) and drag the action from under it: each is an **Input Action
Reference**, an asset that points at one action.
- A **Candy Button** `Reset Keys Button`, bottom-left, **Pos** (0, 20), 280 × 110,
`Reset Keys`; and a **Candy Button Red** `Delete Save Button`, bottom-centre, **Pos**
(0, 20), 280 × 110, `Delete Save`. (The `Title Button` is already bottom-right.)
- **A question first.** An Image `Confirm Delete` on the panel's root, stretched with
no gaps, black with **A** 153: it dims everything. In it, an Image `Window`, centred,
860 × 520, `Panel`, **Sliced**, and in that: `Question` (a text stretched with **Left**
60, **Top** 60, **Right** 60, **Bottom** 200: `Delete your save? Your juice bar will be
lost.`, size 42, brown, centred); `Yes Button` (**Candy Button Red**, bottom-left,
(60, 50), 330 × 120, `Delete`); `Cancel Button` (**Candy Button**, bottom-right,
(−60, 50), 330 × 120, `Cancel`).

21. Add **Settings Panel** to the prefab's root: **Actions** the asset, **Rebind Rows** the
    five, **Confirm Delete**. Wire the buttons: **Reset Keys** → **ResetKeys**, **Delete
    Save** → **AskToDeleteSave**, the question's **Delete** → **DeleteSave**, its
    **Cancel** → **CancelDelete**. The Title and the Beach both get it, since both use the
    prefab.
22. On the Beach, deleting the save would do nothing: leaving the Beach saves the game
    again, a moment later. So in the `Beach` scene, untick the Settings panel's `Delete
    Save Button`, as you did the Title's `Title Button`.

### Do it — Escape opens Settings

23. The final `Controls`: **Menu** (Escape, or a gamepad's Start) opens Settings, and the
    keys you chose are loaded before anything reads them.

```csharp:Controls.cs
using UnityEngine;
using UnityEngine.InputSystem;

// The two action maps, and Escape. While a panel is open the Chef map is off
// and the Panel map is on: the stick can't walk you off the Office mat while
// you shop, and Escape closes the panel instead of opening Settings.
public class Controls : MonoBehaviour
{
    [SerializeField] InputActionAsset actions;
    [SerializeField] PanelSwitcher panels;
    [SerializeField] GameObject settingsPanel;

    InputActionMap chefMap;
    InputActionMap panelMap;
    InputAction menu;
    InputAction close;

    void Awake()
    {
        chefMap = actions.FindActionMap("Chef", true);
        panelMap = actions.FindActionMap("Panel", true);
        menu = chefMap.FindAction("Menu", true);
        close = panelMap.FindAction("Close", true);
    }

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        menu.performed += OnMenu;
        close.performed += OnClose;
        panels.OpenChanged += OnPanelOpenChanged;
        OnPanelOpenChanged(panels.IsAnyOpen);
    }

    void OnDisable()
    {
        menu.performed -= OnMenu;
        close.performed -= OnClose;
        panels.OpenChanged -= OnPanelOpenChanged;
        chefMap.Disable();
        panelMap.Disable();
    }

    void OnPanelOpenChanged(bool isOpen)
    {
        if (isOpen)
        {
            chefMap.Disable();
            panelMap.Enable();
        }
        else
        {
            panelMap.Disable();
            chefMap.Enable();
        }
    }

    void OnMenu(InputAction.CallbackContext context)
    {
        panels.Toggle(settingsPanel);
    }

    void OnClose(InputAction.CallbackContext context)
    {
        panels.CloseAll();
    }
}
```

24. On `Controls`, drag the Settings panel into **Settings Panel**.

### Do it — Continue, and New Game

25. On the Title, a question before a save is thrown away: copy the Settings panel's
    `Confirm Delete` (open the prefab, **Ctrl+C**), open the Title, select `Safe Area`, and
    **Ctrl+V**. Rename it `Confirm New Game`: question `Start again? Your saved juice bar
    will be deleted.`, its **Yes Button** label `Start Again`.
26. `TitleScreen` learns about the save:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Title scene's buttons. Continue goes back to the saved game; New Game
// asks before it deletes a save.
public class TitleScreen : MonoBehaviour
{
    [SerializeField] Button continueButton;
    [SerializeField] TMP_Text continueDetail;    // the money in the save
    [SerializeField] GameObject confirmNewGame;
    [SerializeField] GameObject quitButton;
    [SerializeField] SceneFader fader;

    void Start()
    {
        confirmNewGame.SetActive(false);
        // A web page can't quit itself: there's no Quit on the Web.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        ShowSave();
    }

    // Continue, and what's in the save under it. Settings' Delete Save calls
    // this too, through its On Save Deleted event.
    public void ShowSave()
    {
        bool hasSave = SaveSystem.HasSave;
        continueButton.interactable = hasSave;
        continueDetail.text = "";
        if (hasSave)
        {
            SaveData data = SaveSystem.Load();
            continueDetail.text = "$" + NumberFormat.Money(data.money);
        }
    }

    public void Continue()
    {
        fader.FadeTo("Beach");
    }

    // New Game: straight in with no save; asks first when there is one.
    public void AskNewGame()
    {
        if (SaveSystem.HasSave)
        {
            confirmNewGame.SetActive(true);
        }
        else
        {
            StartNewGame();
        }
    }

    public void StartNewGame()
    {
        SaveSystem.Delete();
        fader.FadeTo("Beach");
    }

    public void CancelNewGame()
    {
        confirmNewGame.SetActive(false);
    }

    public void Quit()
    {
        Application.Quit();
    }
}
```

27. The test report is gone: Chapter 15 makes real ones. Fill the new fields (**Continue
    Detail**, **Confirm New Game**), and wire the buttons: **Continue Button** →
    **Continue**; **New Game Button** → **AskNewGame** (no longer **StartNewGame**); **Yes
    Button** → **StartNewGame**; **Cancel Button** → **CancelNewGame**. And the Title's
    Settings panel: its **On Save Deleted ()** → `Title Screen`, **TitleScreen →
    ShowSave**.

### Test it

- Play the **Title**. **New Game**, then earn some money, build Table 1 and the second
  juicer, buy *Sweet Oranges*, and pay half of Table 2. Cog, **Title**. **Continue** is
  green now, with your money under it. **Continue**: the table, the bin and both juicers
  are there, the price tag says `$8` (*Sweet Oranges* applied again, from its id), and
  Table 2's spot has half to go. No toast for *First Sip*: it was won before, and
  `Restore` doesn't raise `Unlocked`.
- Hire a runner, go back to the Title, and continue: he walks out of the Staff Hut's door
  again, and back to work. His upgrade's `ApplyTo` hired him, as when you bought it.
- **Where's the file?** In `BeachGame.Start`, add `Debug.Log(Application.persistentDataPath);`
  for a moment, Play, and copy the folder from the Console (on a Mac it's under
  `~/Library/Application Support/`, on Windows under `AppData\LocalLow`). Open
  `juice-tycoon.json` in a text editor: your game, as text. Take the log out again.
- **Break it.** With the game stopped, delete the file's last `}` and save it. Play the
  Title: the Console says the file is damaged and kept as `juice-tycoon.bad.json`;
  **Continue** shows `$0`, and the game starts afresh. Nothing crashed. Delete both files
  (or use **New Game**) to tidy up.
- **New Game** with a save: the question. **Cancel**: nothing lost. **Start Again**: a new
  game. **Delete Save** in the Title's Settings: **Continue** goes grey at once.
- **Keys.** In Settings, **Change** beside *Walk Up*, and press **I**. Close the panel,
  and walk with I. Stop, Play again: still I. **Reset Keys**: W again. **Escape** on the
  beach opens Settings; with a panel open it closes it.

### Commit

*Save and load: the JSON save, Continue, New Game, and keys you choose.*

### Challenge

The save writes the whole file at once; if the computer died halfway through writing, the
file could be cut in half. A safer way: write to `juice-tycoon.tmp` first, then replace the
real file with it (`File.Copy(temp, real, true)`), so the real file is either the old one
or the new one, never half of each. Change `SaveSystem.Save`, and keep the `try` /
`catch`.

## Chapter 15 — While You Were Away

**Goal:** what makes an idle game idle. Close the game, come back later, and **Welcome
back!** says how long you were away and what each staffed bar and the kart made meanwhile,
up to 2 hours' worth. **Collect** adds it to your money. A clock set backwards can't fool
it.

### Idea — time, as a number

To know how long you were away, the save must say **when** it was saved. C#'s
`DateTime.UtcNow` is the time now; but `JsonUtility` can't save a `DateTime`. It can save
a `long`, and a `DateTime` is one inside: its **`Ticks`**, the number of 100-nanosecond
steps since the year 1. Ten million ticks make a second.

```
saved:   639,000,360,000,000,000 ticks
now:     639,000,432,000,000,000 ticks
away:    72,000,000,000 ticks ÷ 10,000,000 = 7,200 seconds = 2 hours
```

**UTC**, not local time: a phone that changes time zone, or a clock that jumps an hour for
summer time, would otherwise give or take an hour of income.

The **rules**, from the balance sheet:

| You were away | What counts |
| --- | --- |
| less than a minute | nothing: no Welcome back |
| 1 minute to 2 hours | all of it |
| more than 2 hours | 2 hours: come back now and then |
| a **negative** time | nothing: the phone's clock was set backwards |

**What earned while you were away?** The Beach scene isn't even loaded when the Title
works this out. So the save keeps it: when the game saves, it writes down each
`IIncomeSource` that earns by itself, and how much a second. Coming back, each one's share
is its per-second × the seconds away. Chapter 11's interface again: the save asks "what
earns by itself?" and never "is it a bar or a kart?". A bar without both its helpers
earns nothing while you're away: someone has to carry the fruit, and someone has to serve.

### Do it — working it out

1. `NumberFormat.Duration`, from Chapter 6, says how long: `45 s`, `12 min`, `2 h 00 min`.
   Read it again now.
2. In `Scripts/Flow`, `AwayEarnings`:

```csharp:AwayEarnings.cs
using System;

// What you earned while you were away, worked out from the save: the time it
// was saved, and what earned by itself each second then. Up to 2 hours count.
// A clock set backwards makes the time negative: that counts as no time.
public static class AwayEarnings
{
    const double MaxSeconds = 2 * 60 * 60;
    const double ShortestAway = 60;     // under a minute, there's nothing to welcome you back for

    public static double SecondsAway(SaveData data, DateTime now)
    {
        if (data.savedAtTicks == 0)
        {
            return 0;   // a new game: never saved
        }
        double seconds = (now.Ticks - data.savedAtTicks) / (double)TimeSpan.TicksPerSecond;
        if (seconds < 0)
        {
            return 0;
        }
        return Math.Min(seconds, MaxSeconds);
    }

    // "Welcome back", with each source's part, or null when there's nothing to show.
    public static Report MakeReport(SaveData data, DateTime now)
    {
        double seconds = SecondsAway(data, now);
        if (seconds < ShortestAway || data.awaySources.Count == 0)
        {
            return null;
        }
        int total = 0;
        foreach (AwaySource source in data.awaySources)
        {
            total += (int)(source.perSecond * seconds);
        }
        Report report = new Report(ReportKind.WelcomeBack, "Welcome back!", "+$" + NumberFormat.Money(total), total);
        report.Lines.Add($"You were away {NumberFormat.Duration(seconds)}.");
        foreach (AwaySource source in data.awaySources)
        {
            report.Lines.Add($"{source.name}: +${NumberFormat.Money((int)(source.perSecond * seconds))}");
        }
        return report;
    }
}
```

3. Three things to notice. `now` is a **parameter**, not `DateTime.UtcNow` inside: the
   method works out the same answer for the same inputs, which is what makes it easy to
   test (the Challenge does). `TimeSpan.TicksPerSecond` names the ten million, as the
   style guide asks. And `(double)` before dividing: two `long`s would divide as whole
   numbers, losing every part of a second.
4. `MakeReport` returns `null` for "nothing to show". The caller must check for it: that's
   the price of returning `null`, and the Title does, below.

### Do it — saving the time, and collecting

5. `Session` carries one more thing: what Welcome back collected, for the Beach to add. Its
   last form:

```csharp:Session.cs
using UnityEngine;

// What one scene leaves for the next, in static properties: they belong to no
// scene, so they're still there after a scene loads. Static has a price: they
// also outlive a Play in the Editor, so they're reset at the start of every
// Play, before any scene loads.
public static class Session
{
    // What the Report scene shows next.
    public static Report Report { get; set; }

    // What Welcome back collected, for the Beach scene to add to the money once.
    public static int AwayCollected { get; set; }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Report = null;
        AwayCollected = 0;
    }
}
```

6. `BeachGame` saves the time and the sources, and adds what was collected, once:

```csharp
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, adds what Welcome back collected, and saves every 30 seconds,
// when a phone sends the game to the background, when the game quits, and when
// Settings' Title button leaves the scene. Not in OnDestroy: by then the scene
// is being taken down, and the kart or a bar may already be gone.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] CashPile[] cashPiles;
    [SerializeField] BuildList buildList;
    [SerializeField] Upgrades upgrades;
    [SerializeField] ChefLevels chef;
    [SerializeField] JuiceKart kart;
    [SerializeField] GameStats stats;
    [SerializeField] AchievementTracker tracker;
    [SerializeField] IncomeSources income;
    [SerializeField] float autosaveSeconds = 30f;

    float nextSaveTime;
    bool hasLoaded;         // saving before the save is loaded would write a new game over it

    void Start()
    {
        Load();
        hasLoaded = true;
        if (Session.AwayCollected > 0)
        {
            wallet.Add(Session.AwayCollected);
            stats.AddAwayEarnings(Session.AwayCollected);
            Session.AwayCollected = 0;      // add it once
            Save();
        }
        nextSaveTime = Time.unscaledTime + autosaveSeconds;
    }

    void Update()
    {
        if (Time.unscaledTime >= nextSaveTime)
        {
            Save();
            nextSaveTime = Time.unscaledTime + autosaveSeconds;
        }
    }

    // A phone switching to another app; a browser tab hidden.
    void OnApplicationPause(bool isPaused)
    {
        if (isPaused)
        {
            Save();
        }
    }

    void OnApplicationQuit()
    {
        Save();
    }

    public void Save()
    {
        // Unity can call OnApplicationPause before Start: a game starting in the
        // background does. The scene isn't loaded yet; there's nothing to save.
        if (!hasLoaded)
        {
            return;
        }
        SaveData data = new SaveData();
        // The notes still on the cash piles are yours: they're saved as money.
        int waiting = 0;
        foreach (CashPile pile in cashPiles)
        {
            waiting += pile.Total;
        }
        data.money = wallet.Money + waiting;
        data.lifetimeEarned = wallet.LifetimeEarned + waiting;
        data.built = buildList.BuiltIds();
        data.paid = buildList.PaidSoFar();
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.trayLevel = chef.TrayLevel;
        data.flipFlopLevel = chef.FlipFlopLevel;
        data.kartLevel = kart.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        // What earns by itself now.
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0f)
            {
                AwaySource away = new AwaySource();
                away.name = source.SourceName;
                away.perSecond = source.IncomePerSecond;
                data.awaySources.Add(away);
            }
        }
        SaveSystem.Save(data);
    }

    void Load()
    {
        // A new game is a save with nothing in it.
        SaveData data = SaveSystem.HasSave ? SaveSystem.Load() : new SaveData();
        wallet.Restore(data.money, data.lifetimeEarned);
        buildList.Restore(data.built, data.paid, 1f);
        upgrades.Restore(data.upgrades);
        chef.Restore(data.trayLevel, data.flipFlopLevel);
        kart.Restore(data.kartLevel, 1f);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```

7. Set its new **Income** field (the `Income` object). **Add it once**:
   `Session.AwayCollected` goes back to 0 the moment it's added, and the game saves
   straight away. Without that, a crash right after would bring back the old save and
   Welcome back would pay twice. The money earned away also goes to `GameStats`, for Sam's
   *Night Shift* trophy.

### Do it — Welcome back

8. The Title works out the report when you press **Continue**, and goes to the Report scene
   if there's something to show. `TitleScreen`:

```csharp
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Title scene's buttons. Continue reads the save: if you were away long
// enough to earn something, the Report scene welcomes you back first. New Game
// asks before it deletes a save.
public class TitleScreen : MonoBehaviour
{
    [SerializeField] Button continueButton;
    [SerializeField] TMP_Text continueDetail;    // the money in the save
    [SerializeField] GameObject confirmNewGame;
    [SerializeField] GameObject quitButton;
    [SerializeField] SceneFader fader;

    void Start()
    {
        confirmNewGame.SetActive(false);
        // A web page can't quit itself: there's no Quit on the Web.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        ShowSave();
    }

    // Continue, and what's in the save under it. Settings' Delete Save calls
    // this too, through its On Save Deleted event.
    public void ShowSave()
    {
        bool hasSave = SaveSystem.HasSave;
        continueButton.interactable = hasSave;
        continueDetail.text = "";
        if (hasSave)
        {
            SaveData data = SaveSystem.Load();
            continueDetail.text = "$" + NumberFormat.Money(data.money);
        }
    }

    public void Continue()
    {
        SaveData data = SaveSystem.Load();
        Report welcome = AwayEarnings.MakeReport(data, DateTime.UtcNow);
        if (welcome == null)
        {
            fader.FadeTo("Beach");
            return;
        }
        Session.Report = welcome;
        fader.FadeTo("Report");
    }

    // New Game: straight in with no save; asks first when there is one.
    public void AskNewGame()
    {
        if (SaveSystem.HasSave)
        {
            confirmNewGame.SetActive(true);
        }
        else
        {
            StartNewGame();
        }
    }

    public void StartNewGame()
    {
        SaveSystem.Delete();
        fader.FadeTo("Beach");
    }

    public void CancelNewGame()
    {
        confirmNewGame.SetActive(false);
    }

    public void Quit()
    {
        Application.Quit();
    }
}
```

9. And the Report scene's **Collect** takes the money to the beach. `ReportScreen`:

```csharp
using TMPro;
using UnityEngine;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back's Collect takes what you earned to the beach.
public class ReportScreen : MonoBehaviour
{
    [SerializeField] TMP_Text title;
    [SerializeField] TMP_Text lines;
    [SerializeField] TMP_Text amount;
    [SerializeField] SceneFader fader;

    Report report;

    void Start()
    {
        report = Session.Report;
        if (report == null)
        {
            // The scene was started on its own, in the Editor: show a test report.
            Debug.LogWarning("Report started without a Session.Report: showing a test one.", this);
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", "+$12.3K", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        amount.text = report.Highlight;
    }

    public void Collect()
    {
        Leave(report.Amount);
    }

    void Leave(int collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

10. `Leave` is one method for every way out: Chapter 19's **Collect ×2** leaves with twice
    the amount, and Chapter 16's new beach with nothing.

### Test it

- Play the Title, **Continue** (or **New Game**), and get the Orange Bar a runner and a
  cashier. Cog, **Title**. Wait a minute and a bit, then **Continue**: *Welcome back!*,
  *You were away 1 min*, *Orange Bar: +$…*, and the total. **Collect**: the money jumps by
  it.
- **Two hours, without waiting.** In your `Practice` scene's `Practice` script (with
  `using System;` at the top, for `TimeSpan`), in `Start`:

```csharp
SaveData data = SaveSystem.Load();
data.savedAtTicks -= TimeSpan.FromHours(2).Ticks;
SaveSystem.Save(data);
Debug.Log("The save is now two hours old.");
```

  Play the `Practice` scene once, then play the Title and **Continue**: *2 h 00 min*, and
  two hours of income. Stop before collecting, run Practice again with `FromHours(20)`:
  *2 h 00 min* still, the cap.
- **A clock set backwards.** Change the line to `+= TimeSpan.FromHours(2).Ticks`: the save
  now claims it was made in the future. **Continue** goes straight to the beach: a
  negative time counts as none. (Without that `if`, the player would get minus two hours
  of income: money taken away.)
- Collect, then stop and play the Title again at once: **Continue** goes straight to the
  beach. Less than a minute away is nothing to report.
- **New Game**, and this time hire only the Orange Bar's runner. Go to the Title, wait a
  minute, **Continue**: straight to the beach. Open `juice-tycoon.json`: `awaySources` is
  empty. One helper isn't enough, and the save knew it when it was written.
- Earn $2,000 while away: *Trophy: Night Shift*.

### Commit

*Earn while away: the time in the save, the cap, and Welcome back.*

### Challenge

`AwayEarnings` takes the time as a parameter, so it can be tested without waiting. In your
`Practice` script, make a `SaveData` by hand (`savedAtTicks` and one `AwaySource` of $10 a
second), and log `AwayEarnings.SecondsAway(data, now)` and `MakeReport(data, now).Amount`
for a `now` 30 seconds, 1 hour and 10 hours later (`new
DateTime(data.savedAtTicks).AddHours(1)`). Predict each answer first.

## Chapter 16 — A New Beach, on a Branch

**Goal:** the end of the build list, and a new start. The last spot builds **the Pier**;
built, it sails you to the next beach: **Coral Cove**, then **Sunset Shore**, then round
again. Each has its own sand, sea and sunlight, and pays more for every cup, though its
spots cost more too. Your money, bars, upgrades, helpers, tray and kart start again; your
trophies and life-long counts come with you. It's built on a **Git branch**, and merged
when it works.

### Idea — starting again, richer

An idle game's growth slows down: after forty minutes the beach is full, and every next
thing costs more than it's worth waiting for. Idle games fix that with a **reset that
pays**: give up what you have, and start again somewhere everything is worth more.

| Starts again | Stays |
| --- | --- |
| the money | the trophies won |
| the build list: one Orange Bar again | everything you've earned in your life |
| the upgrades and the helpers | the counts behind the trophies |
| your tray, your flip-flops, the kart | |

From the balance sheet, each beach in a **BeachInfo** asset:

| Beach | Cups sell for | Spots cost | Sand | Sea | Sunlight |
| --- | --- | --- | --- | --- | --- |
| Sunny Bay | ×1 | ×1 | `#EBCB8B` | `#2FB0D0` | `#FFF4DC` |
| Coral Cove | ×3 | ×2.5 | `#F2D2BF` | `#25B8B0` | `#FFEAE0` |
| Sunset Shore | ×9 | ×6 | `#E7B488` | `#3C80C4` | `#FFC89A` |

The save already has `beach`, a number that only goes up: 0, 1, 2, then 3, which is
Sunny Bay again (`3 % 3` is 0). The `% beaches.Length` makes the list go round, however
long the player plays. Coming round to Sunny Bay a second time, everything pays ×1 again:
the challenge asks you to do better.

The `BeachGame` gives each beach its look and its numbers as the scene loads: the sand's
and the sea's colours, the sun's, the beach's name in the top bar, each bar's
`SetBeachFactor` (from Chapter 9), the spots' cost (`BuildSpot.Restore`, from Chapter 14)
and the kart's (`JuiceKart.Restore`, from Chapter 11). Those parameters were waiting for
this chapter.

### Idea — a branch

A new beach touches seven scripts and the scene. Halfway through, the game won't work. On
`main`, a half-done change is in everyone's way. So the work goes on a **branch**
(C# 1): a line of commits of its own, starting from `main`. Commit as often as you
like there; `main` stays as it was. When the new beach works, you **merge** the branch
into `main`, and the whole feature arrives at once.

```
main      ●───●───●────────────────────────●  merge: the new beach arrives
               \                           /
new-beach       ●── beaches ──●── Pier ───●
```

### Do it — the branch

1. Save the scene. In GitHub Desktop, **Current Branch → New Branch**, name it `new-beach`,
   **Create Branch**: it starts from `main`. The top bar says **Current Branch:
   new-beach**. Everything you commit now goes on it.

### Do it — the beaches

2. In `Scripts/Flow`, `BeachInfo`:

```csharp:BeachInfo.cs
using UnityEngine;

// One beach: its name, its colours, and how much more everything pays and
// costs there. The Pier sails to the next one.
[CreateAssetMenu(fileName = "New Beach", menuName = "Juice/Beach Info")]
public class BeachInfo : ScriptableObject
{
    [SerializeField] string displayName;
    [SerializeField] Color sand = new Color(0.93f, 0.8f, 0.55f);
    [SerializeField] Color sea = new Color(0.2f, 0.7f, 0.85f);
    [SerializeField] Color sunlight = Color.white;
    [SerializeField] float priceFactor = 1f;    // what a cup sells for
    [SerializeField] float costFactor = 1f;     // what a build spot costs

    public string DisplayName { get { return displayName; } }
    public Color Sand { get { return sand; } }
    public Color Sea { get { return sea; } }
    public Color Sunlight { get { return sunlight; } }
    public float PriceFactor { get { return priceFactor; } }
    public float CostFactor { get { return costFactor; } }
}
```

3. In `Data/Beaches`, **Create → Juice → Beach Info**, three times, from the table:
   `Sunny Bay`, `Coral Cove`, `Sunset Shore`.
4. `BeachGame`, again: it knows the beaches and which one this is, shows it, and passes its
   numbers on as everything loads.

```csharp
using System;
using LanternHill.Achievements;
using TMPro;
using UnityEngine;

// The Beach scene's start and its saving. It finds the beach in the save,
// gives it its colours and prices, builds again everything that was built,
// adds what Welcome back collected, and saves every 30 seconds, when a phone
// sends the game to the background, when the game quits, and when Settings'
// Title button leaves the scene. Not in OnDestroy: by then the scene is being
// taken down, and the kart or a bar may already be gone.
public class BeachGame : MonoBehaviour
{
    [SerializeField] BeachInfo[] beaches;
    [SerializeField] Wallet wallet;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] CashPile[] cashPiles;
    [SerializeField] BuildList buildList;
    [SerializeField] Upgrades upgrades;
    [SerializeField] ChefLevels chef;
    [SerializeField] JuiceKart kart;
    [SerializeField] GameStats stats;
    [SerializeField] AchievementTracker tracker;
    [SerializeField] IncomeSources income;
    [SerializeField] Renderer sand;
    [SerializeField] Renderer sea;
    [SerializeField] Light sun;
    [SerializeField] TMP_Text beachName;
    [SerializeField] float autosaveSeconds = 30f;

    int beachIndex;
    float nextSaveTime;
    bool hasLoaded;         // saving before the save is loaded would write a new game over it
    bool isLeaving;         // sailing to a new beach: that beach is saved already

    public int BeachIndex { get { return beachIndex; } }
    public BeachInfo Beach { get { return beaches[beachIndex % beaches.Length]; } }
    public BeachInfo NextBeach { get { return beaches[(beachIndex + 1) % beaches.Length]; } }

    void Start()
    {
        Load();
        hasLoaded = true;
        if (Session.AwayCollected > 0)
        {
            wallet.Add(Session.AwayCollected);
            stats.AddAwayEarnings(Session.AwayCollected);
            Session.AwayCollected = 0;      // add it once
            Save();
        }
        nextSaveTime = Time.unscaledTime + autosaveSeconds;
    }

    void Update()
    {
        if (Time.unscaledTime >= nextSaveTime)
        {
            Save();
            nextSaveTime = Time.unscaledTime + autosaveSeconds;
        }
    }

    // A phone switching to another app; a browser tab hidden.
    void OnApplicationPause(bool isPaused)
    {
        if (isPaused)
        {
            Save();
        }
    }

    void OnApplicationQuit()
    {
        Save();
    }

    // The Pier: the next beach is saved; this one mustn't save over it.
    public void Leave()
    {
        isLeaving = true;
    }

    public void Save()
    {
        // Unity can call OnApplicationPause before Start: a game starting in the
        // background does. The scene isn't loaded yet; there's nothing to save.
        if (!hasLoaded || isLeaving)
        {
            return;
        }
        SaveData data = new SaveData();
        data.beach = beachIndex;
        // The notes still on the cash piles are yours: they're saved as money.
        int waiting = 0;
        foreach (CashPile pile in cashPiles)
        {
            waiting += pile.Total;
        }
        data.money = wallet.Money + waiting;
        data.lifetimeEarned = wallet.LifetimeEarned + waiting;
        data.built = buildList.BuiltIds();
        data.paid = buildList.PaidSoFar();
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.trayLevel = chef.TrayLevel;
        data.flipFlopLevel = chef.FlipFlopLevel;
        data.kartLevel = kart.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0f)
            {
                AwaySource away = new AwaySource();
                away.name = source.SourceName;
                away.perSecond = source.IncomePerSecond;
                data.awaySources.Add(away);
            }
        }
        SaveSystem.Save(data);
    }

    void Load()
    {
        // A new game is a save with nothing in it.
        SaveData data = SaveSystem.HasSave ? SaveSystem.Load() : new SaveData();
        beachIndex = data.beach;
        ShowBeach();
        wallet.Restore(data.money, data.lifetimeEarned);
        buildList.Restore(data.built, data.paid, Beach.CostFactor);
        upgrades.Restore(data.upgrades);
        chef.Restore(data.trayLevel, data.flipFlopLevel);
        kart.Restore(data.kartLevel, Beach.PriceFactor);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }

    // This beach's colours, its name, and what a cup sells for here.
    void ShowBeach()
    {
        BeachInfo beach = Beach;
        sand.material.color = beach.Sand;
        sea.material.color = beach.Sea;
        sun.color = beach.Sunlight;
        beachName.text = beach.DisplayName;
        foreach (JuiceStand stand in stands)
        {
            stand.SetBeachFactor(beach.PriceFactor);
        }
    }
}
```

5. Read `ShowBeach`. `sand.material` (not `sharedMaterial`) gives this renderer **its own
   copy** of the material the first time it's asked, so changing its colour changes this
   sand only, in this Play, and not the `Sand` material asset in your project. And
   `isLeaving`: once the Pier has saved the **next** beach, nothing may save this one over
   it, not even the autosave in the second before the fade ends.
6. **The beach's name.** In `Top Bar`, an Image `Beach Name`: `Panel Light`, **Sliced**,
   middle-left with its pivot, **Pos X** `446`, 250 × 90; in it, a text `Text`, stretched
   with **Left** and **Right** 12, **Top** and **Bottom** 6, `Sunny Bay`, size 34, light
   brown, centred.
7. On `Beach Game`: **Beaches** the three, in order; **Stands** the four bars; **Sand**,
   **Sea** (their renderers), **Sun**, **Beach Name** (`Beach Name/Text`).

### Do it — the Pier

8. In `Scripts/Flow`, `NewBeach`:

```csharp:NewBeach.cs
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Pier: the last build spot. Built, it sails you to the next beach. What
// you built and bought there, and your money, start again; the stats and
// trophies come with you. The next beach is saved first, then the Report
// scene says where you're going.
public class NewBeach : MonoBehaviour
{
    [SerializeField] BuildSpot pier;
    [SerializeField] BeachGame game;
    [SerializeField] GameStats stats;
    [SerializeField] AchievementTracker tracker;
    [SerializeField] SceneFader fader;

    void OnEnable()
    {
        pier.Built += Sail;
    }

    void OnDisable()
    {
        pier.Built -= Sail;
    }

    void Sail(BuildSpot spot)
    {
        stats.AddBeach();
        BeachInfo next = game.NextBeach;
        SaveData data = new SaveData();
        data.beach = game.BeachIndex + 1;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        SaveSystem.Save(data);
        game.Leave();

        Report report = new Report(ReportKind.NewBeach, "Beach complete!", next.DisplayName, 0);
        report.Lines.Add($"Every cup sells for {next.PriceFactor:0.#} times as much there.");
        report.Lines.Add("You start again on an empty beach. Your trophies come with you.");
        Session.Report = report;
        fader.FadeTo("Report");
    }
}
```

9. Read `Sail`. A brand-new `SaveData` is the next beach: everything at 0 and empty, but
   the beach's number, the stats and the trophies. It's saved **first**: if the game
   closed during the fade, you'd still have sailed. Then `game.Leave()`, so nothing saves
   this beach over it. `{next.PriceFactor:0.#}` formats the number inside the string: `3`,
   not `3.0`.
10. **The Pier.** A material, `Pier`, `#A87C52`. An empty `Pier` at (7.4, 0, 8.2), on the
    shore by the east palms, with six cubes in it, their colliders removed: each **Scale**
    (1.6, 0.12, 1.1), at (0, 0.15, 0), (0, 0.15, 1.2), and so on to (0, 0.15, 6): planks
    out into the sea. Untick it.
11. **Its spot**: `Spot The Pier`, **Id** `pier`, `The Pier`, **Price** `5000`, at (7.4, 0,
    7.2), **Builds** `Pier`, picture `Emoji/palm_tree_3d`. `Spot Juice Kart`'s **Next** is
    `Spot The Pier`. Add it to the **Build List**: the list is now the balance sheet's,
    twenty spots.
12. On `Beach Game`, add **New Beach**: **Pier** `Spot The Pier`, **Game**, **Stats**,
    **Tracker**, **Fader**.

### Do it — Beach complete

13. In the Report scene, in `Window`, a **Candy Button Green** `Open Beach Button`:
    bottom-centre, **Pos Y** `70`, 600 × 150, `Set sail!`, size 56. The Report's last form
    for now: Welcome back shows Collect; Beach complete shows Set sail! and a palm.

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back offers Collect. Beach complete has one button, to the new beach.
public class ReportScreen : MonoBehaviour
{
    [SerializeField] TMP_Text title;
    [SerializeField] Image picture;
    [SerializeField] Sprite newBeachPicture;    // the picture is the money bag, for Welcome back
    [SerializeField] TMP_Text lines;
    [SerializeField] TMP_Text amount;
    [SerializeField] GameObject collectButton;
    [SerializeField] GameObject openBeachButton;
    [SerializeField] SceneFader fader;

    Report report;

    void Start()
    {
        report = Session.Report;
        if (report == null)
        {
            // The scene was started on its own, in the Editor: show a test report.
            Debug.LogWarning("Report started without a Session.Report: showing a test one.", this);
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", "+$12.3K", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        bool isWelcome = report.Kind == ReportKind.WelcomeBack;
        amount.text = report.Highlight;
        if (!isWelcome)
        {
            picture.sprite = newBeachPicture;
        }
        collectButton.SetActive(isWelcome);
        openBeachButton.SetActive(!isWelcome);
    }

    public void Collect()
    {
        Leave(report.Amount);
    }

    public void OpenBeach()
    {
        Leave(0);
    }

    void Leave(int collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

14. Fill the new fields: **Picture** (`Window/Picture`), **New Beach Picture**
    `Emoji/palm_tree_3d`, **Collect Button**, **Open Beach Button**; and its On Click:
    **ReportScreen → OpenBeach**.
15. **The Title says where.** The final `TitleScreen` shows the beach in the save under
    **Continue**:

```csharp:TitleScreen.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Title scene's buttons. Continue reads the save: if you were away long
// enough to earn something, the Report scene welcomes you back first. New Game
// asks before it deletes a save.
public class TitleScreen : MonoBehaviour
{
    [SerializeField] Button continueButton;
    [SerializeField] TMP_Text continueDetail;    // the money and the beach in the save
    [SerializeField] BeachInfo[] beaches;
    [SerializeField] GameObject confirmNewGame;
    [SerializeField] GameObject quitButton;
    [SerializeField] SceneFader fader;

    void Start()
    {
        confirmNewGame.SetActive(false);
        // A web page can't quit itself: there's no Quit on the Web.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        ShowSave();
    }

    // Continue, and what's in the save under it. Settings' Delete Save calls
    // this too, through its On Save Deleted event.
    public void ShowSave()
    {
        bool hasSave = SaveSystem.HasSave;
        continueButton.interactable = hasSave;
        continueDetail.text = "";
        if (hasSave)
        {
            SaveData data = SaveSystem.Load();
            continueDetail.text = $"${NumberFormat.Money(data.money)}  ·  {beaches[data.beach % beaches.Length].DisplayName}";
        }
    }

    public void Continue()
    {
        SaveData data = SaveSystem.Load();
        Report welcome = AwayEarnings.MakeReport(data, DateTime.UtcNow);
        if (welcome == null)
        {
            fader.FadeTo("Beach");
            return;
        }
        Session.Report = welcome;
        fader.FadeTo("Report");
    }

    // New Game: straight in with no save; asks first when there is one.
    public void AskNewGame()
    {
        if (SaveSystem.HasSave)
        {
            confirmNewGame.SetActive(true);
        }
        else
        {
            StartNewGame();
        }
    }

    public void StartNewGame()
    {
        SaveSystem.Delete();
        fader.FadeTo("Beach");
    }

    public void CancelNewGame()
    {
        confirmNewGame.SetActive(false);
    }

    public void Quit()
    {
        Application.Quit();
    }
}
```

16. On `Title Screen`, **Beaches**: the three. The Title knows them only to name the one
    in the save.

### Test it

- The Pier is at the end of a forty-minute list. As with the kart, add `Spot The Pier`
  to the **Build List**'s **First** for a moment, with a **Price** of `1`.
- **Play.** Build the Pier: the planks appear, the screen fades, and *Beach complete!*:
  a palm, **Coral Cove**, *Every cup sells for 3 times as much there.* **Set sail!**: a
  pink beach and a greener sea, `Coral Cove` in the top bar, one Orange Bar, $0. The
  price tag says `Orange Bar  $15`; Table 1's spot costs $75. *Trophy: New Horizons*.
- Open the Trophies: every trophy you'd won is still won. Back to the Title: **Continue**
  says `$… · Coral Cove`.
- Build the Pier again (it's still in **First**): *Sunset Shore*, a dusk-orange sun, cups at
  ×9. Once more: Sunny Bay again.
- Set the Pier back: **Price** `5000`, and not in **First**.

### Commit, and merge

17. Commit on the branch: *Sail to a new beach: three beaches, the Pier and the report*.
18. **See what a branch is.** In GitHub Desktop, **Current Branch → main**. Unity reloads:
    there's no Pier, `NewBeach.cs` and `BeachInfo.cs` are gone, and the game is as it was
    this morning. Switch back to `new-beach`: it's all there. (Save your scene before
    switching, every time: Git changes the files under Unity.)
19. **Merge.** Switch to `main`. **Branch → Merge into Current Branch…**, choose
    `new-beach`, **Create a merge commit**. Your commits are on `main` now. **Push
    origin**.
20. The branch has done its job: **Branch → Delete…** removes `new-beach`. Its commits stay,
    on `main`.

### Challenge

Coming round to Sunny Bay a second time pays ×1 again, which feels like a step back. Make
every lap round the beaches pay more: a beach's price factor times 10 for each time round
(`beachIndex / beaches.Length`). Where does the change go, and what else would need the
same factor? (Look at who calls `PriceFactor` and `CostFactor`.)

## C# 15 — Object Pooling

**Goal:** you can say why making and destroying objects many times a second makes a game
stutter, and replace it with a pool that switches objects off and reuses them (the Level
Reference's Level 4 topic: Object pooling; it connects to Associate: Debugging — select
profiling tools for performance problems).

### Idea — the cost of Instantiate and Destroy

A kart's exhaust puffs, the coins that fly from a juice stand, the damage numbers over a
card: many small objects, each living a second. The plain way makes each one and destroys
it a moment later:

```csharp
[SerializeField] GameObject coinPrefab;

const float CoinLifetime = 1f;

public void DropCoin(Vector3 position)
{
    GameObject coin = Instantiate(coinPrefab, position, Quaternion.identity);
    Destroy(coin, CoinLifetime);        // destroyed a second later
}
```

It works, and for one coin it's fine. For thirty a second, each one costs:

- **`Instantiate`** builds a copy of the prefab: every component is made, and its `Awake`
  and `OnEnable` run. That's work for the CPU, every time.
- **`Destroy`** takes it apart again, and leaves its C# side behind as **garbage**: memory
  that nothing uses any more.
- Every so often the **garbage collector** runs, to find that memory and free it. With a
  little garbage, you never notice. With a lot, it can take long enough to miss a frame:
  a **GC spike**, a stutter the player feels. The Profiler shows both the work and the
  garbage (C# 17).

### Idea — make a few, switch them off, reuse them

A pool works like a café's cups: washed and used again, not bought new and thrown away.
Instead of destroying an object, switch it off and keep it; next time one is needed, switch
a sleeping one back on.

| Without a pool | With a pool |
| --- | --- |
| `Instantiate` a new one | `Get()`: take a sleeping one, or make one if none is left |
| `Destroy` it when it's done | `Release()`: switch it off with `SetActive(false)`, and keep it |
| work and garbage for every object | work and garbage only while the pool grows |

### Idea — a pool on a Stack

A `Stack` (C# 6) suits a pool: `Push` puts an object back, `Pop` takes the
last one put back, and which sleeping object you get doesn't matter. First the pooled
object: a number that rises and fades. When it's done, it doesn't destroy itself. It
raises an event (C# 2), and its pool takes it back:

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;

public class FloatingNumber : MonoBehaviour
{
    const float RiseDistance = 1f;
    const float Lifetime = 0.8f;

    [SerializeField] TMP_Text text;

    public event Action<FloatingNumber> Finished;

    // Everything the last use changed is set again here, before it plays.
    public void Play(string message, Color colour, Vector3 position)
    {
        transform.position = position;
        text.text = message;
        text.color = colour;
        StartCoroutine(Rise());
    }

    IEnumerator Rise()
    {
        Vector3 start = transform.position;
        for (float t = 0f; t < Lifetime; t += Time.deltaTime)
        {
            transform.position = start + Vector3.up * RiseDistance * (t / Lifetime);
            text.alpha = 1f - t / Lifetime;
            yield return null;
        }
        Finished?.Invoke(this);
    }
}
```

Then the pool. It makes a few numbers as the scene starts, so the first ones shown don't
cost anything, and makes more only if they run out:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Floating numbers, pooled. Get pops a sleeping one off the stack, or makes a new
// one when it's empty; Release switches one off and pushes it back.
public class NumberPool : MonoBehaviour
{
    [SerializeField] FloatingNumber numberPrefab;
    [SerializeField] int warmUpCount = 10;

    readonly Stack<FloatingNumber> sleeping = new Stack<FloatingNumber>();

    void Start()
    {
        for (int i = 0; i < warmUpCount; i++)
        {
            Release(Make());
        }
    }

    public void Show(string message, Color colour, Vector3 position)
    {
        Get().Play(message, colour, position);
    }

    FloatingNumber Get()
    {
        FloatingNumber number;
        if (sleeping.Count > 0)
        {
            number = sleeping.Pop();
        }
        else
        {
            number = Make();
        }
        number.gameObject.SetActive(true);
        return number;
    }

    void Release(FloatingNumber number)
    {
        number.gameObject.SetActive(false);
        sleeping.Push(number);
    }

    FloatingNumber Make()
    {
        FloatingNumber number = Instantiate(numberPrefab, transform);
        number.Finished += Release;         // it comes back by itself when it's done
        return number;
    }
}
```

Any script with a reference to the pool shows a number with one call, such as
`numbers.Show($"+{price}", Color.yellow, transform.position)` when a stand sells a juice.
Watch the pool's children in the Hierarchy while it plays: they switch on and off, and a
new one appears only when all of them are busy.

### Idea — resetting what comes back

A reused object keeps everything from its last use. And `Awake` and `Start` run only once,
the first time, so reset it where it starts each use: in a method like `Play`, or in
`OnEnable`, which runs every time it's switched on.

| Left over from last time | Reset it by |
| --- | --- |
| position and rotation | setting them before it plays |
| colour, transparency, scale | setting them: `Play` sets the colour, which brings the alpha back to 1 |
| a Rigidbody's movement | `body.linearVelocity = Vector3.zero;` and `body.angularVelocity = Vector3.zero;` (for a Rigidbody 2D, `Vector2.zero` and `0f`) |
| health, timers, counters | setting them back to their start values |
| coroutines | nothing: `SetActive(false)` stops the object's own coroutines; start new ones in `Play` |
| a trail or particles | calling their `Clear()` |

> **Watch out:** releasing the same object twice puts it on the stack twice, and two
> later `Get` calls hand out the same object. Release each one from one place only, as
> `FloatingNumber` does with its event.

### Idea — growing, or a fixed size

`NumberPool` **grows**: it starts with ten, and makes another whenever all are busy. The
**warm-up** in `Start` moves the cost of making them to the loading, where nobody notices.
A **fixed-size** pool never makes more. When it's empty, it skips (a kart fires no bullet
this frame) or takes back the oldest one in use. Choose the size by watching how many are
ever in use at once.

| Pool it | Don't pool it |
| --- | --- |
| bullets, coins, damage numbers, particle bursts | the player, the level, a menu |
| enemies that come in waves, cars in traffic | a boss that appears once |
| anything made and destroyed many times while playing | anything made once, or rarely |

> **Tip:** a particle burst can return itself, too. Set its Particle System's **Stop
> Action** to **Callback**, and Unity calls `OnParticleSystemStopped()` on its scripts
> when it finishes.

### Idea — Unity's own ObjectPool

Unity has a pool ready-made: `ObjectPool<T>`, in `UnityEngine.Pool`. It's a **generic**
class, like `List<T>`: you say what it holds in the angle brackets. (Writing generic
classes of your own is Level 5.) It does the same job as `NumberPool`. You give it what to
do, as lambdas:

```csharp
using UnityEngine;
using UnityEngine.Pool;

public class PooledNumbers : MonoBehaviour
{
    [SerializeField] FloatingNumber numberPrefab;

    ObjectPool<FloatingNumber> pool;

    void Awake()
    {
        pool = new ObjectPool<FloatingNumber>(
            Make,                                           // make one when none is sleeping
            number => number.gameObject.SetActive(true),    // on Get
            number => number.gameObject.SetActive(false),   // on Release
            number => Destroy(number.gameObject),           // when the pool is full
            true,                                           // complain about a double Release
            10,                                             // room for 10 at first
            50);                                            // keep at most 50 asleep
    }

    public void Show(string message, Color colour, Vector3 position)
    {
        pool.Get().Play(message, colour, position);
    }

    FloatingNumber Make()
    {
        FloatingNumber number = Instantiate(numberPrefab, transform);
        number.Finished += pool.Release;
        return number;
    }
}
```

`true` turns on a check, in the Editor, that throws an exception if you release one
twice. Room for 10 isn't a warm-up: it makes nothing until the first `Get`.

### Do it

1. Make a **Floating Number** prefab from **GameObject → 3D Object → Text - TextMeshPro**,
   with `FloatingNumber` on it. Put `NumberPool` on an empty object, with the prefab.
2. Write a `Practice` script that calls `Show` ten times a second, with a number that
   counts up. Watch the pool's children in the Hierarchy.
3. Give `Show` and `Play` a `bool isBig` parameter. In `Play`, make a big number one and
   a half times the size: `if (isBig) { transform.localScale = Vector3.one * 1.5f; }`.
   Make every tenth number big. What happens once the numbers start being reused, and
   why? Fix it in `Play`.
4. Change the pool to `PooledNumbers`, and check that it behaves the same.

### Challenge

Pool the coins a juice stand throws: each has a Rigidbody 2D, flies up, falls, and goes
back to the pool after a second. Reset its velocity. Then make the pool a fixed size of
20 that takes back the oldest coin when it's empty. Which collection keeps them in order?

## Chapter 17 — Juice and Sound

**Goal:** the game feels alive, and costs nothing for it. Every orange, cup and note on the
beach comes from a **pool** now: hundreds an hour, none made after the first few. Every
customer who pays sends a "+$15" up from the counter, every lap of the kart a "+$60", from
a pool of their own. Squeezes, coins, builds, upgrades and trophies have their sounds, the
beach and the Title their music, and Settings has a volume for each.

### Idea — hundreds an hour, none made

Count what a busy beach moves: a fruit every second or so from each crate, a cup from
each machine, a note for each cup sold, an empty cup at each table. Made with
`Instantiate` and thrown away with `Destroy`, that's thousands of objects an hour for the
garbage collector to clean up, and a stutter each time it does. C# 15's answer:
keep the ones you're done with, asleep, and wake one up the next time.

Chapter 4 put every `Instantiate` and `Destroy` of an item in one place, the **Item Pool**,
for this day. Now it keeps a **sleeping stack for each kind** of item: a `Dictionary` from
`ItemInfo` to `Stack<Item>`. An orange put back sleeps with the oranges; asked for an
orange, the pool wakes one up, or makes one if none is asleep. Nothing that uses the pool
changes: `Get` and `Release` keep their names and their parameters.

| Step | The item pool |
| --- | --- |
| a crate makes a fruit | `Get(orange)`: pop a sleeping orange, or make one |
| the fruit goes into a juicer | `Release(item, delay)`: kept in a list with its time; at that time, put to sleep |
| asleep | switched off, a child of the pool, on its kind's stack |

A **delayed** release needs a timer per item. A coroutine per item would make garbage of
its own, so the pool keeps two lists side by side (the items, and when each goes to
sleep), and `Update` walks them **backwards**, removing as it goes.

The **floating numbers** get their own small pool, with a **warm-up**: ten are made at the
start, so the first sales don't make any.

### Do it — the item pool

1. The final `ItemPool`:

```csharp:ItemPool.cs
using System.Collections.Generic;
using UnityEngine;

// Every item on the beach, pooled: a sleeping Stack for each kind. Get wakes
// one up (or makes one when none sleeps); Release puts it to sleep, after a
// delay when it's still hopping into a juicer or the bin. A busy beach moves
// hundreds of oranges, cups and notes an hour: after the first few, none is
// made or destroyed.
public class ItemPool : MonoBehaviour
{
    readonly Dictionary<ItemInfo, Stack<Item>> sleeping = new Dictionary<ItemInfo, Stack<Item>>();
    readonly List<Item> releasing = new List<Item>();
    readonly List<float> releaseTimes = new List<float>();

    public Item Get(ItemInfo info, Vector3 position)
    {
        Item item;
        if (sleeping.TryGetValue(info, out Stack<Item> stack) && stack.Count > 0)
        {
            item = stack.Pop();
            item.transform.SetParent(null);
        }
        else
        {
            item = Instantiate(info.Prefab);
        }
        item.transform.SetPositionAndRotation(position, Quaternion.identity);
        item.Value = 0;
        item.gameObject.SetActive(true);
        return item;
    }

    public void Release(Item item)
    {
        item.gameObject.SetActive(false);
        item.transform.SetParent(transform);
        if (!sleeping.TryGetValue(item.Info, out Stack<Item> stack))
        {
            stack = new Stack<Item>();
            sleeping.Add(item.Info, stack);
        }
        stack.Push(item);
    }

    // Puts it to sleep after its hop has landed.
    public void Release(Item item, float delay)
    {
        releasing.Add(item);
        releaseTimes.Add(Time.time + delay);
    }

    void Update()
    {
        for (int i = releasing.Count - 1; i >= 0; i--)
        {
            if (Time.time >= releaseTimes[i])
            {
                Release(releasing[i]);
                releasing.RemoveAt(i);
                releaseTimes.RemoveAt(i);
            }
        }
    }
}
```

2. Read `Get`. `TryGetValue` finds the kind's stack, if there is one yet; `&& stack.Count >
   0` only then looks inside it. A sleeping item is a child of the pool, so it's taken out
   (`SetParent(null)`) before it's put where it's needed. Then **everything the last use
   changed** is set again: its place, its turn, its `Value` (a note that was worth $32
   mustn't come back worth $32), and it's switched on. A pooled object is only as clean as
   what you reset.
3. **Play** and watch the Hierarchy: `Item Pool` fills up with switched-off oranges, cups
   and notes, and stops growing. Pause after a few minutes, and count the oranges in the
   whole scene: no more than the crates, the hands and the machine trays hold, plus a few
   asleep.

### Do it — floating numbers

4. In `Scripts`, a folder `Juice`. In it, `FloatingNumber`, for now moved by its own
   `Update`:

```csharp
using System;
using TMPro;
using UnityEngine;

// A "+$15" that rises over a counter, or the kart, and fades. The NumberPool
// reuses it, so Play sets everything the last use changed.
public class FloatingNumber : MonoBehaviour
{
    const float RiseDistance = 1f;
    const float Lifetime = 0.8f;

    [SerializeField] TMP_Text text;

    Vector3 start;
    float age;

    public event Action<FloatingNumber> Finished;

    public void Play(string message, Color colour, Vector3 position)
    {
        start = position;
        transform.position = position;
        text.text = message;
        text.color = colour;
        text.alpha = 1f;
        age = 0f;
    }

    void Update()
    {
        age += Time.deltaTime;
        float t = Mathf.Clamp01(age / Lifetime);
        // Fast at first, then slowing: an ease out.
        float eased = 1f - (1f - t) * (1f - t) * (1f - t);
        transform.position = start + Vector3.up * RiseDistance * eased;
        text.alpha = 1f - t * t;
        if (t >= 1f)
        {
            Finished?.Invoke(this);
        }
    }
}
```

5. `1 − (1 − t)³` starts steep and ends flat: the number shoots up and settles. `1 − t²`
   does the opposite for the fade: it stays clear, then goes. Chapter 18 replaces both
   with one line each. `Finished` tells the pool it's done; the number doesn't know it's
   pooled.
6. `NumberPool`, in `Juice`:

```csharp:NumberPool.cs
using System.Collections.Generic;
using UnityEngine;

// Floating numbers, pooled. Get pops a sleeping one off the stack, or makes a new
// one when it's empty; Release switches one off and pushes it back. With four
// bars and the kart selling, dozens rise every minute: none is made or
// destroyed after the first few.
public class NumberPool : MonoBehaviour
{
    [SerializeField] FloatingNumber numberPrefab;
    [SerializeField] int warmUpCount = 10;

    readonly Stack<FloatingNumber> sleeping = new Stack<FloatingNumber>();

    void Start()
    {
        for (int i = 0; i < warmUpCount; i++)
        {
            Release(Make());
        }
    }

    public void Show(string message, Color colour, Vector3 position)
    {
        Get().Play(message, colour, position);
    }

    FloatingNumber Get()
    {
        FloatingNumber number;
        if (sleeping.Count > 0)
        {
            number = sleeping.Pop();
        }
        else
        {
            number = Make();
        }
        number.gameObject.SetActive(true);
        return number;
    }

    void Release(FloatingNumber number)
    {
        number.gameObject.SetActive(false);
        sleeping.Push(number);
    }

    FloatingNumber Make()
    {
        FloatingNumber number = Instantiate(numberPrefab, transform);
        number.Finished += Release;         // it comes back by itself when it's done
        return number;
    }
}
```

7. `number.Finished += Release` in `Make`: every number the pool makes comes back to it by
   itself. The pool subscribes once, when it makes the number, and never again.
8. **The prefab.** An empty `Floating Number`, with **Billboard** and **Floating Number**. A
   child **3D Object → Text - TextMeshPro** (not the UI one: this text lives in the world),
   `Text`: `+$1`, Lilita One, **Font Size** `6`, yellow, centred, **Wrapping** `Disabled`,
   the Shadow preset, its **Rect Transform** 4 × 1, and in **Extra Settings**, **Order in
   Layer** `30`, so it's drawn over the people. Drag it into **Text**, and the whole thing
   into `Prefabs`.
9. An empty `Number Pool`, with **Number Pool**: **Number Prefab** the prefab.
10. `SaleNumbers`, in `Juice`:

```csharp:SaleNumbers.cs
using System;
using UnityEngine;

// A "+$15" rising over a counter whenever a customer pays, from the pool.
public class SaleNumbers : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] NumberPool numbers;
    [SerializeField] Color colour = new Color(1f, 0.85f, 0.25f);

    Action<int>[] handlers;     // kept, so OnDisable can take the same ones off

    void OnEnable()
    {
        handlers = new Action<int>[stands.Length];
        for (int i = 0; i < stands.Length; i++)
        {
            // A copy for the lambda: every lambda would otherwise share i.
            JuiceStand stand = stands[i];
            handlers[i] = amount => Show(stand, amount);
            stand.CustomerServed += handlers[i];
        }
    }

    void OnDisable()
    {
        for (int i = 0; i < stands.Length; i++)
        {
            stands[i].CustomerServed -= handlers[i];
        }
    }

    void Show(JuiceStand stand, int amount)
    {
        numbers.Show("+$" + NumberFormat.Money(amount), colour, stand.Counter.transform.position + Vector3.up * 2.5f);
    }
}
```

11. Read `OnEnable`. Each bar needs its own handler, one that knows which bar paid: a
    **lambda** that captures `stand`. Two things make it work: the copy (`JuiceStand stand
    = stands[i]`, as in the intern's shop, so each lambda has its own), and the array of
    handlers, kept so `OnDisable` can take **the same** delegates off. A new lambda in
    `OnDisable` would be a different delegate, and `-=` would remove nothing.
12. Add **Sale Numbers** to `Number Pool`: **Stands** the four bars, **Numbers** the pool.
13. The kart shows its lap too. `JuiceKart`, with a number for each lap:

```csharp
using System;
using UnityEngine;

// The Juice Kart: a helper drives it round the beach road for ever, and each
// lap sells by itself, straight into the Wallet. Each level sells more. It
// earns while you're away: it's an IIncomeSource, like a staffed bar, and the
// two share nothing else.
public class JuiceKart : MonoBehaviour, IIncomeSource
{
    static readonly int SittingId = Animator.StringToHash("Sitting");

    [SerializeField] Walker walker;
    [SerializeField] Animator driver;
    [SerializeField] WalkPath road;
    [SerializeField] Wallet wallet;
    [SerializeField] NumberPool numbers;
    [SerializeField] int[] lapEarnings = { 60, 90, 135, 200, 300 };
    [SerializeField] int[] levelPrice = { 1500, 4000, 9000, 20000 };

    float beachFactor = 1f;

    public int Level { get; private set; }
    public bool IsBuilt { get { return gameObject.activeInHierarchy; } }
    public bool IsMax { get { return Level >= levelPrice.Length; } }
    public int NextLevelPrice { get { return IsMax ? 0 : levelPrice[Level]; } }
    public int LapEarnings { get { return Mathf.RoundToInt(lapEarnings[Level] * beachFactor); } }

    public event Action<int> Lapped;    // the money of one lap
    public event Action Changed;

    void OnEnable()
    {
        driver.SetBool(SittingId, true);
        walker.Arrived += OnLap;
        walker.WalkTo(road.Points());
    }

    void OnDisable()
    {
        walker.Arrived -= OnLap;
    }

    void OnLap()
    {
        int earned = LapEarnings;
        wallet.Add(earned);
        numbers.Show("+$" + NumberFormat.Money(earned), Color.white, transform.position + Vector3.up * 2f);
        Lapped?.Invoke(earned);
        walker.WalkTo(road.Points());
    }

    public bool TryLevelUp()
    {
        if (IsMax || !wallet.TrySpend(NextLevelPrice))
        {
            return false;
        }
        Level++;
        Changed?.Invoke();
        return true;
    }

    public void Restore(int level, float beachPriceFactor)
    {
        Level = Mathf.Clamp(level, 0, levelPrice.Length);
        beachFactor = beachPriceFactor;
        Changed?.Invoke();
    }

    // ------------------------------------------------------------ IIncomeSource

    public string SourceName { get { return "Juice Kart"; } }

    public float IncomePerSecond
    {
        get { return IsBuilt ? LapEarnings / (road.Length() / walker.Speed) : 0f; }
    }

    public bool EarnsWhileAway { get { return IsBuilt; } }
}
```

14. On the scene's kart, drag in `Number Pool`.

### Do it — sound

15. Select the two pieces of music, `Audio/Sunny` and `Audio/Chill`: **Load Type**
    `Streaming`, **Apply**. A short sound is loaded whole; a three-minute song is read from
    the file as it plays, so it doesn't sit in memory.
16. In `Juice`, `MusicPlayer`:

```csharp:MusicPlayer.cs
using UnityEngine;

// Plays this scene's music, looping, at the volume chosen in Settings.
[RequireComponent(typeof(AudioSource))]
public class MusicPlayer : MonoBehaviour
{
    AudioSource source;

    void Awake()
    {
        source = GetComponent<AudioSource>();
        source.loop = true;
        source.volume = GameSettings.MusicVolume;
    }

    void Start()
    {
        source.Play();
    }

    public void SetVolume(float volume)
    {
        source.volume = volume;
    }
}
```

17. And `SoundPlayer`:

```csharp:SoundPlayer.cs
using UnityEngine;

// The game's sounds, on one Audio Source: a squeeze when a machine makes a
// cup, coins when a customer pays, a pop when something is built, and the
// shop's and the trophies' sounds. Coins and squeezes are kept apart, so ten
// at once don't make a roar.
[RequireComponent(typeof(AudioSource))]
public class SoundPlayer : MonoBehaviour
{
    const float ShortestGap = 0.12f;

    [SerializeField] JuiceStand[] stands;
    [SerializeField] Juicer[] juicers;
    [SerializeField] BuildList buildList;
    [SerializeField] Upgrades upgrades;
    [SerializeField] AudioClip squeezeClip;
    [SerializeField] AudioClip coinClip;
    [SerializeField] AudioClip builtClip;
    [SerializeField] AudioClip upgradeClip;
    [SerializeField] AudioClip trophyClip;

    AudioSource source;
    float nextCoinTime;
    float nextSqueezeTime;

    void Awake()
    {
        source = GetComponent<AudioSource>();
        source.volume = GameSettings.EffectsVolume;
    }

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CustomerServed += OnCustomerServed;
        }
        foreach (Juicer juicer in juicers)
        {
            juicer.CupMade += OnCupMade;
        }
        buildList.SpotBuilt += OnSpotBuilt;
        upgrades.Bought += OnUpgradeBought;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CustomerServed -= OnCustomerServed;
        }
        foreach (Juicer juicer in juicers)
        {
            juicer.CupMade -= OnCupMade;
        }
        buildList.SpotBuilt -= OnSpotBuilt;
        upgrades.Bought -= OnUpgradeBought;
    }

    public void SetVolume(float volume)
    {
        source.volume = volume;
    }

    public void PlayTrophy()
    {
        source.PlayOneShot(trophyClip);
    }

    public void PlayUpgrade()
    {
        source.PlayOneShot(upgradeClip);
    }

    void OnCustomerServed(int amount)
    {
        if (Time.unscaledTime >= nextCoinTime)
        {
            nextCoinTime = Time.unscaledTime + ShortestGap;
            source.PlayOneShot(coinClip, 0.7f);
        }
    }

    void OnCupMade()
    {
        if (Time.unscaledTime >= nextSqueezeTime)
        {
            nextSqueezeTime = Time.unscaledTime + ShortestGap;
            source.PlayOneShot(squeezeClip, 0.35f);
        }
    }

    void OnSpotBuilt(BuildSpot spot)
    {
        source.PlayOneShot(builtClip);
    }

    void OnUpgradeBought(Upgrade upgrade)
    {
        source.PlayOneShot(upgradeClip);
    }
}
```

18. Read it. One `AudioSource`, and `PlayOneShot` for every sound: one-shots play on top of
    each other on the same source, each to its end. But four bars paying in the same
    second would be four coins at once, a roar. So coins and squeezes keep a **shortest
    gap**: one within 0.12 s of the last is skipped. The second argument to `PlayOneShot`
    is that sound's volume, times the source's: squeezes are quiet, because there are so
    many of them.
19. On the Beach: an empty `Music` with an **Audio Source** (**AudioClip** `Sunny`,
    **Play On Awake** off, **Loop** on) and **Music Player**. An empty `Sounds`, with an
    **Audio Source** (**Play On Awake** off) and **Sound Player**: **Stands** the four
    bars, **Juicers** all eight (`t:Juicer` in the Hierarchy), **Build List**, **Upgrades**,
    and the clips: **Squeeze** `Squeeze`, **Coin** `Coin`, **Built** `Balloon` (a pop),
    **Upgrade** `Upgrade`, **Trophy** `Trophy`. On the Title and the Report: a `Music` with
    `Chill`.
20. The final `ToastQueue` plays the trophy sound with a trophy's toast:

```csharp:ToastQueue.cs
using System.Collections.Generic;
using LanternHill.Achievements;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Runner hired!",
// "Table built!", and every trophy won. The toast shows them one at a time. A
// trophy's reward is paid the moment it's won. Sam's module has a Toast of its
// own: with his namespace in a using, "Toast" still means ours, because C#
// looks in this file's own namespace before the ones a using brings in.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] AchievementTracker tracker;
    [SerializeField] Upgrades upgrades;
    [SerializeField] BuildList buildList;
    [SerializeField] Sprite builtPicture;
    [SerializeField] Toast toast;
    [SerializeField] Wallet wallet;
    [SerializeField] SoundPlayer sounds;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        tracker.Unlocked += OnUnlocked;
        upgrades.Bought += OnUpgradeBought;
        buildList.SpotBuilt += OnSpotBuilt;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        tracker.Unlocked -= OnUnlocked;
        upgrades.Bought -= OnUpgradeBought;
        buildList.SpotBuilt -= OnSpotBuilt;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a helper gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is HireUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, upgrade.DisplayName + " hired!", upgrade.Description, false));
            ShowNext();
        }
    }

    void OnSpotBuilt(BuildSpot spot)
    {
        waiting.Enqueue(new ToastMessage(builtPicture, spot.DisplayName + " built!", "", false));
        ShowNext();
    }

    void OnUnlocked(Achievement achievement)
    {
        string line = achievement.Description;
        if (achievement.Reward > 0)
        {
            wallet.Add((int)achievement.Reward);     // Sam's rewards are long; our money is int
            line += "  +$" + NumberFormat.Money(achievement.Reward);
        }
        waiting.Enqueue(new ToastMessage(achievement.Picture, "Trophy: " + achievement.Title, line, true));
        ShowNext();
    }

    void ShowNext()
    {
        if (toast.IsShowing || waiting.Count == 0)
        {
            return;
        }
        ToastMessage next = waiting.Dequeue();
        toast.Show(next.Picture, next.Title, next.Line);
        if (next.IsTrophy)
        {
            sounds.PlayTrophy();
        }
    }
}
```

21. On `Trophies`, drag `Sounds` into **Sounds**.

### Do it — the volumes

22. Open the **Settings Panel** prefab. In `Content`, above `Keys`:
    - A text `Music Label`, top-left, **Pos** (0, −10), 260 × 80, `Music`, size 40, brown.
    - **UI → Slider**, `Music Slider`: top-right with its pivot, **Pos** (−20, −32), 560 ×
      36. Its `Background` colour `#EAD7AE`, its `Fill Area/Fill` pink (`#FF4FA3`), its
      `Handle Slide Area/Handle` 56 wide and blue (`#19B6E8`).
    - The same at **Pos Y** −110 and −132: `Effects Label` and `Effects Slider`.
23. The final `SettingsPanel`:

```csharp:SettingsPanel.cs
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// The Settings panel, in the Title and on the Beach: the music and effects
// volumes, the keys, and (in the Title) Delete Save. The volumes go straight to
// the players, so you hear the change, and into PlayerPrefs, written when the
// panel closes.
public class SettingsPanel : MonoBehaviour
{
    [SerializeField] Slider musicSlider;
    [SerializeField] Slider effectsSlider;
    [SerializeField] MusicPlayer music;         // this scene's
    [SerializeField] SoundPlayer sounds;        // this scene's; empty in the Title
    [SerializeField] InputActionAsset actions;
    [SerializeField] RebindRow[] rebindRows;
    [SerializeField] GameObject confirmDelete;
    [SerializeField] UnityEvent onSaveDeleted;     // the Title greys out Continue

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        musicSlider.SetValueWithoutNotify(GameSettings.MusicVolume);
        effectsSlider.SetValueWithoutNotify(GameSettings.EffectsVolume);
        musicSlider.onValueChanged.AddListener(OnMusicChanged);
        effectsSlider.onValueChanged.AddListener(OnEffectsChanged);
        confirmDelete.SetActive(false);
        RefreshKeys();
    }

    void OnDisable()
    {
        musicSlider.onValueChanged.RemoveListener(OnMusicChanged);
        effectsSlider.onValueChanged.RemoveListener(OnEffectsChanged);
        GameSettings.Save();
    }

    // The Reset Keys button.
    public void ResetKeys()
    {
        GameSettings.ResetBindings(actions);
        RefreshKeys();
    }

    // Delete Save asks first; the confirm panel's Delete button calls DeleteSave.
    public void AskToDeleteSave()
    {
        confirmDelete.SetActive(true);
    }

    public void DeleteSave()
    {
        SaveSystem.Delete();
        confirmDelete.SetActive(false);
        onSaveDeleted.Invoke();
    }

    public void CancelDelete()
    {
        confirmDelete.SetActive(false);
    }

    void OnMusicChanged(float value)
    {
        GameSettings.MusicVolume = value;
        music.SetVolume(value);
    }

    void OnEffectsChanged(float value)
    {
        GameSettings.EffectsVolume = value;
        if (sounds != null)
        {
            sounds.SetVolume(value);
        }
    }

    void RefreshKeys()
    {
        foreach (RebindRow row in rebindRows)
        {
            row.Refresh();
        }
    }
}
```

24. `SetValueWithoutNotify`: putting the saved volume on the slider would otherwise call
    `OnMusicChanged`, and save the value it just read. The volumes are written to disk
    when the panel closes (`GameSettings.Save`), not on every step of a drag.
25. In the prefab, drag in the two sliders. In each scene, the instance's **Music** is that
    scene's `Music`; on the Beach, **Sounds** is `Sounds`. In the Title, **Sounds** stays
    empty: there's nothing to hear there but the music, and the panel checks for `null`.

### Test it

- **Play** the Title: music. Settings: drag **Music** down, and it fades as you drag. Stop,
  Play again: the same volume.
- On the beach: a squeeze for each cup a machine makes, coins when a customer pays, and
  "+$15" rising over the counter. Build a spot: a pop. Buy an upgrade: its sound. Win a
  trophy: its chime with the toast.
- Hire runners and cashiers for two bars and watch the `Number Pool`: ten asleep at the
  start, and more only if more than ten are in the air at once.
- **Window → Analysis → Profiler**, with **Play**: look at the **GC Allocated In Frame**
  line in the CPU module's chart. Then, in `ItemPool.Get`, put the old `return
  Instantiate(info.Prefab, position, Quaternion.identity);` at the top for a moment:
  the line jumps each time an item is made. Take it out. (Chapter 20 does this
  properly.)

### Commit

*Pool every item, add floating numbers, sounds, music and volumes.*

### Challenge

The kart's number is white, the counters' gold. Give each bar its own colour (an orange
for the Orange Bar, a green for the Apple Bar…) without adding a field to `SaleNumbers`.
Where does a bar's colour belong? (In its `BarInfo`, beside its other numbers.)

## C# 16 — Packages and the Asset Store

**Goal:** you can add, update and remove packages with the Package Manager, bring in an
asset from the Asset Store or a `.unitypackage` file, and fix the conflicts an import can
cause (the Associate exam's prerequisites: importing assets or code from the Asset Store
or Package Manager and resolving conflicts).

### Idea — three ways in

Most of what's in a Unity project, you didn't make. It comes in one of three ways:

| What | Comes from | Lands in | Example |
| --- | --- | --- | --- |
| a **package** | Unity's registry, through the Package Manager | the project's packages, read-only | the Input System, the Memory Profiler |
| an **Asset Store asset** | the Asset Store, through **My Assets** | usually your Assets folder | a free pack of sounds, models or effects |
| a **`.unitypackage` file** | a file someone gives you | your Assets folder | a teammate's module, the art for a course |

A package is code and assets with a name, such as `com.unity.inputsystem`, and a version,
such as `1.20.0`. Unity keeps it outside your Assets: you use it, but you don't change it,
and updating it is one click. An asset or a `.unitypackage` drops its files into your
Assets, and from then on they're part of your project, like your own.

### Idea — the Package Manager window

Open **Window → Package Management → Package Manager**. The list on the left chooses what
the window shows:

| List | Shows |
| --- | --- |
| **In Project** | the packages your project has |
| **Updates** | the ones that have a newer version |
| **Unity Registry** | every package Unity offers |
| **My Assets** | what your Unity account has from the Asset Store |
| **Built-in** | the parts of Unity itself, such as physics and audio, which you can switch off |

Select a package, and the right shows its name, version and description, with tabs that
include **Version History** and **Dependencies**, and the buttons for what you can do:
**Install**, **Update to** a newer version, or **Remove**.

A version has three numbers. In `1.20.0`, the **1** changes when old code may stop
working, the **20** when features are added, and the **0** for fixes only. So an update to
the last number should be safe; one to the first means reading what changed, first.

A package can need others: its **dependencies**. URP needs Render Pipelines Core and
Shader Graph, for example, and the Package Manager installs them with it. The
**Dependencies** tab lists them.

### Idea — Packages/manifest.json

The Package Manager keeps its list in a text file, `Packages/manifest.json`. Each line is a
package's name and its version. This one is from this course's project:

```json
{
  "dependencies": {
    "com.unity.inputsystem": "1.20.0",
    "com.unity.render-pipelines.universal": "17.6.0",
    "com.unity.ugui": "2.6.0",
    …
  }
}
```

Beside it, `Packages/packages-lock.json` records the exact version of everything installed,
dependencies too. Both files go into Git (C# 1). The packages themselves don't:
Unity downloads them into `Library/PackageCache`, and the `.gitignore` leaves the Library
folder out. When a teammate opens the project, Unity reads the manifest and downloads the
same versions. A list of a few kilobytes travels, instead of hundreds of megabytes.

### Idea — installing a package by name

Some packages are easiest to add by their name. The **Memory Profiler** (C# 17)
is `com.unity.memoryprofiler`:

1. In the Package Manager, open the **+** menu and choose **Install package by technical
   name...**
2. Type `com.unity.memoryprofiler`, and **Install**.
3. When it's done, it's in **In Project**, and the manifest has a new line:
   `"com.unity.memoryprofiler": "1.1.12"`. That's its current release, which supports
   Unity 2022.3 and later.

Removing it is the same in reverse: select it, **Remove**, and its line goes.

### Idea — the Asset Store

The Asset Store (`assetstore.unity.com`) sells, and gives away, art, sound, tools and
code. Getting a free asset takes two places:

1. **On the website**, signed in with your Unity account, choose **Add to My Assets**. The
   asset is now yours, on every computer you sign in to.
2. **In Unity**, open the Package Manager's **My Assets** list, select the asset, then
   **Download**, then **Import**.
3. The import dialog lists every file, each with a tick box. Untick what you don't need,
   such as demo scenes, and **Import**.

Every asset comes with a licence. Most use the Asset Store's standard **EULA**: you may use
the asset in your games, built and shipped, but you may not share its files. So a public
repository, or a course's repository, doesn't include them: each person adds the asset
with their own account. Other assets use other licences: Kenney's packs, for example, are
CC0, free for anyone to share. Read the licence on the asset's page.

### Idea — .unitypackage files

A `.unitypackage` is a set of files from a project's Assets folder, packed into one file,
with their folders and `.meta` files, so that references between them still work.

- **Export:** select folders in the Project window, then
  **Assets → Export Asset Package…**. Untick what shouldn't go, and **Export**.
- **Import:** **Assets → Import Asset Package…**, and pick the file. The same
  import dialog opens: it shows which files are new, and which would replace a file you
  already have.

This is how a lead shares a module with the team, or a trainer shares a game's art.

### Idea — conflicts, and how to resolve them

An import can break a project that worked. Five conflicts are common:

**Two classes with the same name.** The pack has a `Health.cs`, and so does your game. Two
classes can't share a name, and the Console fills with errors like this:

```csharp
public class Health : MonoBehaviour     // the pack's Health.cs, beside yours
{
    [SerializeField] int hitPoints = 10;
}
// error CS0101: The namespace '<global namespace>' already contains a definition for 'Health'
```

If the two files are the same, delete one. If they're different classes that happen to
share a name, put one of them in a `namespace` (C# 10), or rename yours. Good
packages keep their code in a namespace, so this never happens.

**A package that needs a newer version of another.** A new package may depend on, say, a
newer Input System than yours, and the Package Manager shows an error naming both. Update
the other package, or choose an older version of the new one from its **Version History**.

**An asset made for another render pipeline.** Your project uses URP, and the asset was
made for Unity's older Built-in pipeline. Its models show bright **pink**: the materials
use shaders that URP can't draw. Select the materials and choose **Edit → Rendering →
Materials → Convert Selected Built-In Materials to Current SRP**, or use **Window →
Rendering → Render Pipeline Converter** for the whole project. A material that won't
convert can be given a URP shader by hand, in its **Shader** list: **Universal Render
Pipeline/Lit** for 3D, **Universal Render Pipeline/2D/Sprite-Lit-Default** for sprites.
Better still, check the asset's page first: it says which pipelines it supports.

**An asset saved by an older version of Unity.** Unity reads old files, but the Console
asks you to save them again, one line per file:

```
Serialized file "Assets/JMO Assets/Cartoon FX Remaster/CFXR Assets/Meshes/cfxr ring mesh.asset" contains a Mesh object at version 9, below the supported minimum (10). Open and re-save the file to upgrade.
```

Most such files still work. Some don't: in Unity 6, those meshes don't draw, and the
effects that use them lose parts. Saving them again, in your version, fixes it.
Unity has no menu item for it: a small Editor script with a `[MenuItem]` can call
`AssetDatabase.ForceReserializeAssets` on the files of a selected folder. The asset's
page lists the Unity versions it supports: check it before you import.

**An import that overwrites your file.** A pack's `Scripts/Player.cs` lands on top of
yours. The import dialog warned you: untick that file. If it's too late, Git shows the
change, and you can discard it.

### Idea — good habits

| Habit | Because |
| --- | --- |
| commit before you import | if it goes wrong, discarding the changes puts everything back |
| import into a branch (C# 1) | `main` keeps working; merge when the import does |
| import only what you need | demo scenes and unused models make the project bigger and slower to open |
| keep other people's assets in their own folders | you can see what's yours, and remove a pack in one go |
| read the README and the licence | they say what it needs, and what you may do with it |

> **Tip:** after an import, read the Console before anything else. A red error from the
> new files stops every script from compiling, yours too.

### Do it

1. Open the Package Manager. Find the Input System in **In Project**: what version is it,
   and what are its dependencies?
2. Install the Memory Profiler by name. Open `Packages/manifest.json` in a text editor and
   find its line. Then look at what Git says has changed, and commit it.
3. Select a folder of your own scripts and export it as a `.unitypackage`. Make a new,
   empty project and import it there.
4. In the new project, add a second script with the same class name as one of yours. Read
   the error, then fix it with a `namespace`.

### Challenge

On a new branch, import a free 3D asset made for the Built-in pipeline. Fix its pink
materials. Do any fail to convert? Find out why, give them a URP shader, and decide
whether to merge the branch, or delete it.

## Chapter 18 — DOTween

**Goal:** **DOTween**, the free tweening engine most Unity games use, from the Asset Store.
With it, the money counts up instead of jumping, every button bounces when pressed,
whatever you build pops up out of the sand, and three animations you wrote by hand (the
items' hop, the floating numbers, the toast) become a line or two each.

### Idea — a tween

Every animation you've written so far has the same shape: a loop over time, a `Lerp`
between a start and an end, a curve to make it feel right, and something to do when it's
over. A **tween** is that shape, done once, by a library: you say what changes, to what,
over how long, with which curve, and it does the loop.

```csharp
// The toast sliding down, as a coroutine (Chapter 10): a method of its own.
yield return Slide(hiddenY, shownY);

// The same with DOTween: one line, and it returns the tween, to chain more on it.
strip.DOAnchorPosY(shownY, slideTime).SetEase(Ease.OutBack);
```

DOTween's methods are **extension methods**: `using DG.Tweening;` adds `DOAnchorPosY` to
every `RectTransform`, `DOLocalJump` and `DOPunchScale` to every `Transform`, and so on.
Each returns the **tween** it made, so more calls chain on with dots (a **fluent** style):
`.SetEase(…)` for the curve, `.OnComplete(…)` for what to do after. A **Sequence** strings
tweens together: one after another (`Append`), at the same time (`Join`), or with a wait
(`AppendInterval`).

| Ease | Feels like | Here |
| --- | --- | --- |
| `OutQuad`, `OutCubic` | fast, then slowing down | the money counting, a number rising |
| `InQuad` | slow, then fast | a number fading away |
| `OutBack` | overshoots, then settles | the toast arriving, a table popping up |
| `InBack` | pulls back, then goes | the toast leaving |

A tween keeps running on its own until it's done, even if what it moves has gone. So each
script **kills** its tweens when they'd be wrong: before starting a new one on the same
thing, and when the object is switched off or destroyed. Or it **links** them:
`.SetLink(gameObject)` ends a tween when that object is destroyed. If you forget, DOTween's
safe mode catches it, and the Console says `Target or field is missing/null`.

### Do it — DOTween, from the Asset Store

1. In a browser, the **Unity Asset Store** (assetstore.unity.com), signed in with your
   Unity account: search **DOTween (HOTween v2)**, by Demigiant, free. **Add to My
   Assets**. (C# 16: the Asset Store is for assets you add to your own project's
   files; the Package Manager installs packages Unity keeps for you.)
2. In Unity: **Window → Package Manager**, **My Assets** on the left, **DOTween (HOTween
   v2)**, **Download**, then **Import**, and **Import** again in the window that lists its
   files: everything goes in `Assets/Plugins/Demigiant`.
3. The **DOTween Utility Panel** opens by itself (it's in **Tools → Demigiant** too). Click
   **Setup DOTween…**, then **Apply**: it switches on the modules for the parts of Unity
   this project has (UI, Audio, Physics…), and adds `DOTWEEN` to the project's **Scripting
   Define Symbols** (**Project Settings → Player**).
4. **Commit it on its own:** *Add DOTween*. Someone reading the history later sees exactly
   which files came from the Asset Store, and when; a package mixed into a commit with your
   own changes hides both.
5. Add a line to the Credits panel: `Tweens: <b>DOTween</b> by Demigiant`.

### Do it — the money counts up

6. `MoneyText`'s last form:

```csharp:MoneyText.cs
using DG.Tweening;
using TMPro;
using UnityEngine;

// The money at the top. It counts up (or down) to each new amount instead of
// jumping: DOTween.To runs a number from where it is to where it's going.
public class MoneyText : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] TMP_Text text;
    [SerializeField] float countTime = 0.4f;

    int shown;
    Tween counting;

    void OnEnable()
    {
        wallet.MoneyChanged += OnMoneyChanged;
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= OnMoneyChanged;
        counting?.Kill();
    }

    void Start()
    {
        Show(wallet.Money);
    }

    void OnMoneyChanged(int money)
    {
        counting?.Kill();
        counting = DOTween.To(() => shown, Show, money, countTime).SetEase(Ease.OutQuad);
    }

    void Show(int money)
    {
        shown = money;
        text.text = "$" + NumberFormat.Money(money);
    }
}
```

7. `DOTween.To` tweens anything you can read and write: here, an `int` the text shows.
   `() => shown` is how to read it; `Show` is how to set it (a method that takes an `int`);
   `money` is where to go, over `countTime` seconds. Each sale **kills** the count still
   running and starts a new one from where the number is: the money never jumps back.
   `?.Kill()`: the first time, there's no tween yet. Leave **Count Time** at 0.4 s.

### Do it — every button bounces

8. In `Scripts/Juice`, `PunchOnClick`:

```csharp:PunchOnClick.cs
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

// Every candy button bounces when it's pressed: a punch in scale, with DOTween.
// On the Candy Button prefab, so every button in the game has it.
[RequireComponent(typeof(Button))]
public class PunchOnClick : MonoBehaviour
{
    [SerializeField] float strength = 0.12f;
    [SerializeField] float duration = 0.2f;

    Button button;

    void Awake()
    {
        button = GetComponent<Button>();
    }

    void OnEnable()
    {
        button.onClick.AddListener(Punch);
    }

    void OnDisable()
    {
        button.onClick.RemoveListener(Punch);
        transform.DOKill();
        transform.localScale = Vector3.one;
    }

    void Punch()
    {
        transform.DOComplete();
        // Linked: the click that buys an upgrade destroys its row, and this button with it.
        transform.DOPunchScale(Vector3.one * strength, duration, 6).SetLink(gameObject);
    }
}
```

9. `DOPunchScale` grows the button by `strength` and springs back, 6 wobbles in `duration`.
   `DOComplete` first: two quick taps would otherwise start a punch on top of a punch, and
   the button could end up the wrong size. `[RequireComponent(typeof(Button))]`: it only
   makes sense on a button. `SetLink(gameObject)`: an upgrade's Buy button is destroyed by
   the very click that bounces it.
10. Open the **Candy Button** prefab and add `PunchOnClick`. Then the **Icon Button**
    prefab. **Play**, and press anything: every candy button in the game bounces, the
    green, grey and red variants too, and every row's Buy button. One change to a base
    prefab, everywhere: C# 4's promise, kept.

### Do it — the hop, the numbers and the toast

11. `Item`'s last form, its coroutine replaced by two tweens at once:

```csharp:Item.cs
using DG.Tweening;
using UnityEngine;

// One orange, cup or note in the world. It hops from pile to pile: HopTo makes
// it a child of where it's going and jumps it there, in a quarter of a second.
// Chapter 18's DOTween does the jump in one call (Chapter 4 wrote it as a
// coroutine). Value is a note's dollars; the other items leave it at 0.
public class Item : MonoBehaviour
{
    public const float HopSeconds = 0.25f;
    const float HopHeight = 0.9f;

    [SerializeField] ItemInfo info;

    Sequence hopping;

    public ItemInfo Info { get { return info; } }
    public int Value { get; set; }

    public void HopTo(Transform parent, Vector3 localPosition)
    {
        transform.SetParent(parent, true);
        hopping?.Kill();
        hopping = DOTween.Sequence()
            .Join(transform.DOLocalJump(localPosition, HopHeight, 1, HopSeconds))
            .Join(transform.DOLocalRotateQuaternion(Quaternion.identity, HopSeconds));
    }

    // Put back in the pool mid-hop: the hop stops with it.
    void OnDisable()
    {
        hopping?.Kill();
    }
}
```

12. `DOLocalJump(where, how high, how many jumps, how long)` is Chapter 4's arc, the
    `4h · t(1 − t)`, done for you. `Join` turns it upright at the same time. `OnDisable`
    kills the hop: an item put back in the pool mid-hop (a customer going home with its
    cups) mustn't finish the hop asleep, and wake up somewhere odd.
13. `FloatingNumber`'s last form:

```csharp:FloatingNumber.cs
using System;
using DG.Tweening;
using TMPro;
using UnityEngine;

// A "+$15" that rises over a counter, or the kart, and fades. The NumberPool
// reuses it, so Play sets everything the last use changed. One DOTween
// Sequence does the rising and the fading together; the free DOTween has no
// TextMeshPro fade, so the alpha is run with DOTween.To.
public class FloatingNumber : MonoBehaviour
{
    const float RiseDistance = 1f;
    const float Lifetime = 0.8f;

    [SerializeField] TMP_Text text;

    Sequence playing;

    public event Action<FloatingNumber> Finished;

    void OnDestroy()
    {
        playing?.Kill();
    }

    public void Play(string message, Color colour, Vector3 position)
    {
        transform.position = position;
        text.text = message;
        text.color = colour;
        text.alpha = 1f;
        playing?.Kill();
        playing = DOTween.Sequence()
            .Join(transform.DOMoveY(position.y + RiseDistance, Lifetime).SetEase(Ease.OutCubic))
            .Join(DOTween.To(() => text.alpha, alpha => text.alpha = alpha, 0f, Lifetime).SetEase(Ease.InQuad))
            .OnComplete(OnPlayed);
    }

    void OnPlayed()
    {
        Finished?.Invoke(this);
    }
}
```

14. The `Update` is gone: the number does nothing between one `Play` and the next.
    `Ease.OutCubic` is Chapter 17's `1 − (1 − t)³`, and `Ease.InQuad` its `t²`: the
    curves have names now, and trying another is one word.
15. `Toast`'s last form:

```csharp:Toast.cs
using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A strip that slides down from the top of the screen with a picture and two
// lines, stays a moment, and slides back up: "Runner hired!", or a trophy
// won. One message at a time: ToastQueue waits until IsShowing is false.
public class Toast : MonoBehaviour
{
    [SerializeField] RectTransform strip;
    [SerializeField] Image picture;
    [SerializeField] TMP_Text title;
    [SerializeField] TMP_Text line;
    [SerializeField] float shownY = -40f;       // below the top edge
    [SerializeField] float hiddenY = 260f;      // above it, out of sight
    [SerializeField] float slideTime = 0.35f;
    [SerializeField] float stayTime = 2.2f;

    Sequence showing;

    public bool IsShowing { get; private set; }

    public event Action Hidden;

    void Awake()
    {
        strip.anchoredPosition = new Vector2(strip.anchoredPosition.x, hiddenY);
        strip.gameObject.SetActive(false);
    }

    void OnDestroy()
    {
        showing?.Kill();
    }

    public void Show(Sprite icon, string heading, string text)
    {
        picture.sprite = icon;
        title.text = heading;
        line.text = text;
        IsShowing = true;
        strip.gameObject.SetActive(true);
        // Down, wait, back up: one Sequence instead of a coroutine.
        showing = DOTween.Sequence()
            .Append(strip.DOAnchorPosY(shownY, slideTime).SetEase(Ease.OutBack))
            .AppendInterval(stayTime)
            .Append(strip.DOAnchorPosY(hiddenY, slideTime).SetEase(Ease.InBack))
            .OnComplete(OnFinished);
    }

    void OnFinished()
    {
        strip.gameObject.SetActive(false);
        IsShowing = false;
        Hidden?.Invoke();
    }
}
```

16. Down, wait, back up: `Append`, `AppendInterval`, `Append`, then `OnComplete`. It reads
    like the story it tells, as the coroutine did, and each slide's curve has a name.
    `OnDestroy` kills the Sequence: leaving the scene mid-toast would otherwise leave
    DOTween moving a strip that's gone.

### Do it — what you build pops up

17. A spot built while you watch should arrive with a little life; one built by loading a
    save should just be there. `BuildSpot` and `BuildList` change together (Unity shows an
    error until both are saved). The final `BuildSpot`:

<!-- check: together -->

```csharp:BuildSpot.cs
using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A dashed square in the sand with a price. Stand on it and your money pours
// in, a little at a time. When it's paid, what it builds appears, and so do
// the spots that come after it. Leave halfway, and what you paid stays.
public class BuildSpot : Station
{
    [SerializeField] string id;                 // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] int price = 30;
    [SerializeField] GameObject builds;
    [SerializeField] BuildSpot[] next;
    [SerializeField] Wallet wallet;
    [SerializeField] ItemPool pool;
    [SerializeField] ItemInfo note;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Image paidFill;

    int paid;
    float priceFactor = 1f;     // a later beach's spots cost more

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public int Price { get { return Mathf.RoundToInt(price * priceFactor); } }
    public int Paid { get { return paid; } }
    public bool IsBuilt { get; private set; }

    public event Action<BuildSpot> Built;

    protected override void Trade(Carrier carrier)
    {
        if (!carrier.IsChef || IsBuilt)
        {
            return;
        }
        // About thirty steps from empty to paid, however big the price.
        int pay = Mathf.Min(Mathf.Max(1, Price / 30), Price - paid, wallet.Money);
        if (pay <= 0 || !wallet.TrySpend(pay))
        {
            return;
        }
        paid += pay;
        Item money = pool.Get(note, carrier.transform.position + Vector3.up * 1.2f);
        money.HopTo(transform, Vector3.zero);
        pool.Release(money, Item.HopSeconds);
        Show();
        if (paid >= Price)
        {
            Build(true);
            Built?.Invoke(this);
        }
    }

    // What it builds appears (popping up, when you've just paid for it), and
    // the spots after it are offered. A save builds this way too, at once and
    // for nothing.
    public void Build(bool popUp)
    {
        IsBuilt = true;
        paid = Price;
        builds.SetActive(true);
        if (popUp)
        {
            // Linked: the Pier's scene can end before its pop-up does.
            builds.transform.DOScale(builds.transform.localScale, 0.4f).From(Vector3.zero).SetEase(Ease.OutBack).SetLink(builds);
        }
        gameObject.SetActive(false);
        foreach (BuildSpot spot in next)
        {
            spot.Offer();
        }
    }

    public void Offer()
    {
        if (!IsBuilt)
        {
            gameObject.SetActive(true);
            Show();
        }
    }

    // Loading a save: what was paid before, and this beach's prices.
    public void Restore(int paidBefore, float beachPriceFactor)
    {
        priceFactor = beachPriceFactor;
        paid = Mathf.Clamp(paidBefore, 0, Price);
        Show();
    }

    void Show()
    {
        priceText.text = "$" + NumberFormat.Money(Price - paid);
        paidFill.fillAmount = paid / (float)Price;
    }
}
```

And the final `BuildList`, whose `Restore` builds without the pop:

```csharp:BuildList.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// Every build spot on the beach, in the designer's order, and the ones offered
// at the start. A save keeps the ids of the spots built, and what was paid on
// the others; Restore builds them again, then offers what comes next.
public class BuildList : MonoBehaviour
{
    [SerializeField] BuildSpot[] spots;
    [SerializeField] BuildSpot[] first;

    public IReadOnlyList<BuildSpot> Spots { get { return spots; } }

    public event Action<BuildSpot> SpotBuilt;

    void OnEnable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built += OnBuilt;
        }
    }

    void OnDisable()
    {
        foreach (BuildSpot spot in spots)
        {
            spot.Built -= OnBuilt;
        }
    }

    void OnBuilt(BuildSpot spot)
    {
        SpotBuilt?.Invoke(spot);
    }

    public void Restore(List<string> builtIds, List<SpotPaid> paid, float priceFactor)
    {
        foreach (BuildSpot spot in spots)
        {
            spot.gameObject.SetActive(false);
            int paidBefore = 0;
            foreach (SpotPaid each in paid)
            {
                if (each.id == spot.Id)
                {
                    paidBefore = each.paid;
                }
            }
            spot.Restore(paidBefore, priceFactor);
        }
        // In order: each one built offers the next, and a later one built hides it again.
        foreach (BuildSpot spot in spots)
        {
            if (builtIds.Contains(spot.Id))
            {
                spot.Build(false);
            }
        }
        foreach (BuildSpot spot in first)
        {
            spot.Offer();
        }
    }

    public List<string> BuiltIds()
    {
        List<string> ids = new List<string>();
        foreach (BuildSpot spot in spots)
        {
            if (spot.IsBuilt)
            {
                ids.Add(spot.Id);
            }
        }
        return ids;
    }

    public List<SpotPaid> PaidSoFar()
    {
        List<SpotPaid> paid = new List<SpotPaid>();
        foreach (BuildSpot spot in spots)
        {
            if (!spot.IsBuilt && spot.Paid > 0)
            {
                SpotPaid each = new SpotPaid();
                each.id = spot.Id;
                each.paid = spot.Paid;
                paid.Add(each);
            }
        }
        return paid;
    }
}
```

<!-- check: end -->

18. `DOScale(its own scale, 0.4 s).From(Vector3.zero)`: a tween **from** zero **to** what
    it is now, with `OutBack`, so it grows a little too big and settles. Tweening to its own
    scale keeps the counter's ×0.5 depth and the machine's ×0.6: a scale of 1 would have
    made the counter twice as deep. `SetLink(builds)`: the Pier's pop-up can still be running
    when its scene ends.

### Test it

- **Play.** Sell a cup: the money **counts up** to its new value. Build something: it
  counts down, and the table pops up out of the sand. Every button you press bounces.
- Pick up oranges: they hop as before, with no coroutine. Hire helpers: the numbers rise and
  fade as before. Hire two at once: the two toasts, one after the other, overshooting as
  they arrive.
- Go back to the Title and **Continue**: everything you'd built is there, without a pop.
- **Window → Analysis → Profiler**, **Play**, and click a frame while things are hopping.
  In the **CPU Usage** module's **Hierarchy**, open `PlayerLoop`: the coroutines are gone;
  every tween in the game runs from one place, `DOTweenComponent.Update`.

### Commit

*Animate with DOTween: the money, the buttons, the hops, the numbers, the toast and the
builds.*

### Challenge

The kart drives at one height. Make its big cup bob up and down a little as it drives,
with a tween that never ends: `DOLocalMoveY(0.65f, 0.3f)` with `.SetLoops(-1,
LoopType.Yoyo)`. Where should it start, and where should it be killed?

## Chapter 19 — Ads

**Goal:** ads, the way a good phone game uses them: always the player's choice, and always
for something. Watch one on **Welcome back** to collect twice as much; watch one from the
**TV** on the top bar, and every sale is doubled for 3 minutes. One ad, the only one you
don't choose, plays after the Pier, between two beaches, never during play. On a phone
they're **Unity LevelPlay**'s ads; on the Web and PC, where no ad can run, a **pretend
ad** does the same job.

### Idea — ads a player doesn't hate

Free phone games are paid for by ads, and two kinds matter here:

| Kind | What it is | Here |
| --- | --- | --- |
| **Rewarded** | the player chooses to watch, and gets something for it | Collect ×2 on Welcome back; every sale ×2 for 3 minutes |
| **Interstitial** | a full-screen ad between two parts of the game | once, after the Pier, before the new beach |

The studio's three rules: **never interrupt play** (no ad while you're carrying cups);
**always optional**, except the one between beaches; **always say what you get** (the
button says *Collect ×2*, with a TV on it).

### Idea — one interface, two kinds of ads

**Unity LevelPlay** (the **Ads Mediation** package) is Unity's own ad system: it shows ads
from many ad networks, and in the Editor it shows **mock ads**, with no account. But it
only runs on phones (Android and iOS): on the Web or a PC it does nothing at all. And this
game's Level 4 builds are for the Web and PC.

The answer is Chapter 11's again: an **interface**. The game asks an `IAdService` to show
an ad, and says what to do afterwards. Two classes keep that contract:

| | `PretendAds` | `LevelPlayAds` |
| --- | --- | --- |
| works on | everything: the Editor, the Web, PC | phones, and the Editor while the build target is Android or iOS |
| shows | a panel: *An ad would play here*, a 5-second countdown | LevelPlay's ad (a mock one in the Editor) |
| needs | nothing | the package; on a real phone, an account and an app key (Level 6) |

**What to do afterwards.** An ad takes seconds, and the code can't wait for it. So the
game hands over **what to do when it's watched**, as an `Action`:
`ShowRewarded(() => Leave(report.Amount * 2))`. A lambda passed to a method, to be called
later.

### Idea — a boost

The TV's reward, every sale ×2 for 3 minutes, is a **boost**: a multiplier that runs out.
An `IncomeBoost` knows when it ends; its `Factor` is 2 until then, 1 after. A bar's
`Price` and the kart's lap multiply by it, so the price tags double while it runs, and
everything that sells gets it for free. Its `Changed` event tells the bars when it starts
and ends, so their tags change at once. A boost still running when you leave is saved,
so you don't lose it by quitting. While you're **away**, though, it doesn't count: a
boost wouldn't last two hours.

### Do it — the contract, and pretend ads

1. In `Scripts`, a folder `Ads`. In it, `IAdService`:

```csharp:IAdService.cs
using System;

// Showing an ad, whoever shows it. The game asks for an ad and says what to do
// after; it never knows whether the ad is real (LevelPlayAds, on a phone or in
// the Editor) or pretend (PretendAds, on the Web and PC, where no ad can run).
public interface IAdService
{
    bool RewardedReady { get; }

    // onRewarded runs only if the player watched it to the end.
    void ShowRewarded(Action onRewarded);

    // onClosed runs when it's gone, watched or not.
    void ShowInterstitial(Action onClosed);
}
```

2. `PretendAds`:

```csharp:PretendAds.cs
using System;
using System.Collections;
using TMPro;
using UnityEngine;

// Ads that aren't: a panel that says an ad would play here, counts down, and
// then does what a real ad would. It works everywhere, so the Web and PC
// builds, where no ad SDK runs, still offer the rewards, and anyone can test
// the game's side of ads without an account.
public class PretendAds : MonoBehaviour, IAdService
{
    [SerializeField] GameObject panel;
    [SerializeField] TMP_Text countdownText;
    [SerializeField] float adSeconds = 5f;

    bool isShowing;

    public bool RewardedReady { get { return !isShowing; } }

    void Awake()
    {
        panel.SetActive(false);
    }

    public void ShowRewarded(Action onRewarded)
    {
        StartCoroutine(Play(onRewarded));
    }

    public void ShowInterstitial(Action onClosed)
    {
        StartCoroutine(Play(onClosed));
    }

    // Unscaled time: an ad plays on whatever else the game is doing.
    IEnumerator Play(Action whenDone)
    {
        isShowing = true;
        panel.SetActive(true);
        for (float left = adSeconds; left > 0f; left -= Time.unscaledDeltaTime)
        {
            countdownText.text = Mathf.CeilToInt(left).ToString();
            yield return null;
        }
        panel.SetActive(false);
        isShowing = false;
        whenDone?.Invoke();
    }
}
```

3. `whenDone?.Invoke()`: whatever the caller handed over, called when the countdown ends.
   The same coroutine serves both kinds: a pretend ad is always watched to the end.
4. An empty `Ads`, with **Pretend Ads**. In it, a **Canvas** of its own, `Ad Canvas`:
   **Screen Space - Overlay**, **Sort Order** 60 (over the game, under the fader), with a
   **Canvas Scaler** like the game's (1080 × 1920, **Match** 0). In `Ad Canvas`:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Pretend Ad` | an Image | stretched, no gaps | | | `#2A1A0C`: a whole screen, as an ad is |
| `Pretend Ad/Television` | an Image | centre | (0, 260) | 360 × 360 | `television_3d`, Preserve Aspect |
| `Pretend Ad/Words` | a text | centre | (0, −10) | 900 × 160 | `An ad would play here.`, size 56, white, centred, Shadow |
| `Pretend Ad/Countdown` | a text | centre | (0, −200) | 300 × 180 | `5`, size 140, white, centred, Shadow |

5. **Pretend Ads**: **Panel** `Pretend Ad`, **Countdown Text** `Countdown`.

### Do it — LevelPlay

6. **Window → Package Manager**, **+** (top left) **→ Install package by name…**:
   `com.unity.services.levelplay`, **Install**. That's the **Ads Mediation** package.
7. Unity asks to import the **Mobile Dependency Resolver**. Choose **Ignore**: it fetches
   the Android and iOS libraries a phone build needs (Level 6). It asks again each time
   Unity starts; **Ignore** each time.
8. In `Ads`, `LevelPlayAds`:

```csharp:LevelPlayAds.cs
using System;
using Unity.Services.LevelPlay;
using UnityEngine;

// Real ads, through Unity LevelPlay (the Ads Mediation package). In the Editor,
// LevelPlay shows its own mock ads with any app key; on a phone it needs the
// app key and ad unit ids from a LevelPlay account (Level 6). Each ad is loaded
// ahead, and loaded again after it's shown.
public class LevelPlayAds : MonoBehaviour, IAdService
{
    [SerializeField] string appKey = "editor";
    [SerializeField] string rewardedAdUnitId = "editor_rewarded";
    [SerializeField] string interstitialAdUnitId = "editor_interstitial";

    LevelPlayRewardedAd rewarded;
    LevelPlayInterstitialAd interstitial;
    Action afterRewarded;
    Action afterInterstitial;

    // LevelPlay runs on Android and iPhone only. The Editor shows its mock ads
    // only while the build target is one of them (File → Build Profiles): for
    // the Web or a PC, LevelPlay does nothing at all, not even fail. #if keeps
    // or drops the line for the build target, as LevelPlay's own code does.
    public static bool IsSupported
    {
        get
        {
#if UNITY_ANDROID || UNITY_IOS
            return true;
#else
            return false;
#endif
        }
    }

    public bool RewardedReady { get { return rewarded != null && rewarded.IsAdReady(); } }

    // Start, not Awake: Unity calls Awake even on a disabled component, and
    // AdServiceProvider disables this one where LevelPlay can't run.
    void Start()
    {
        LevelPlay.OnInitSuccess += OnInitSuccess;
        LevelPlay.OnInitFailed += OnInitFailed;
        LevelPlay.Init(appKey);
    }

    void OnDestroy()
    {
        LevelPlay.OnInitSuccess -= OnInitSuccess;
        LevelPlay.OnInitFailed -= OnInitFailed;
        if (rewarded != null)
        {
            rewarded.OnAdRewarded -= OnRewarded;
            rewarded.OnAdClosed -= OnRewardedClosed;
            rewarded.DestroyAd();
        }
        if (interstitial != null)
        {
            interstitial.OnAdClosed -= OnInterstitialClosed;
            interstitial.DestroyAd();
        }
    }

    public void ShowRewarded(Action onRewarded)
    {
        if (!RewardedReady)
        {
            return;
        }
        afterRewarded = onRewarded;
        rewarded.ShowAd();
    }

    public void ShowInterstitial(Action onClosed)
    {
        if (interstitial == null || !interstitial.IsAdReady())
        {
            onClosed?.Invoke();     // no ad ready: carry on without one
            return;
        }
        afterInterstitial = onClosed;
        interstitial.ShowAd();
    }

    void OnInitSuccess(LevelPlayConfiguration configuration)
    {
        rewarded = new LevelPlayRewardedAd(rewardedAdUnitId);
        rewarded.OnAdRewarded += OnRewarded;
        rewarded.OnAdClosed += OnRewardedClosed;
        rewarded.LoadAd();
        interstitial = new LevelPlayInterstitialAd(interstitialAdUnitId);
        interstitial.OnAdClosed += OnInterstitialClosed;
        interstitial.LoadAd();
    }

    void OnInitFailed(LevelPlayInitError error)
    {
        Debug.LogWarning($"LevelPlay couldn't start, so there are no ads: {error}", this);
    }

    // The reward can come before or after the ad closes (the Editor's mock
    // closes first), so it's paid the moment it comes.
    void OnRewarded(LevelPlayAdInfo info, LevelPlayReward reward)
    {
        afterRewarded?.Invoke();
        afterRewarded = null;
    }

    void OnRewardedClosed(LevelPlayAdInfo info)
    {
        rewarded.LoadAd();
    }

    void OnInterstitialClosed(LevelPlayAdInfo info)
    {
        afterInterstitial?.Invoke();
        afterInterstitial = null;
        interstitial.LoadAd();
    }
}
```

9. Read it in four parts.
   - **`#if UNITY_ANDROID || UNITY_IOS`** isn't an `if`: it's read **before** compiling.
     When the project's build target is Android or iOS, the compiler sees `return true;`;
     for anything else, `return false;`. The other line isn't even compiled. LevelPlay's
     own code does the same, which is why it does nothing on the Web or a PC.
   - **Start, not Awake.** Unity calls `Awake` even on a component that's switched off, and
     `AdServiceProvider` (next) switches this one off where LevelPlay can't run.
   - **Load ahead.** An ad takes a moment to arrive, so each is loaded when LevelPlay
     starts, and loaded again after it's shown: the next one is ready when the player
     asks. `RewardedReady` says whether it is.
   - **The reward comes on its own event**, `OnAdRewarded`, before or after the ad closes
     (LevelPlay's mock closes first). It's paid the moment it comes, once: `afterRewarded =
     null` afterwards.
10. Add **Level Play Ads** to `Ads`. Its app key and ad unit ids are LevelPlay's test values
    for the Editor; a real game puts its own there (Level 6).

### Do it — choosing one

11. In `Ads`, `AdServiceProvider`:

```csharp:AdServiceProvider.cs
using UnityEngine;

// Which ads the scene uses. Both kinds sit on this object; Unity can't show an
// interface in the Inspector, so the choice is made here, in code: LevelPlay
// where it runs (a phone, or the Editor with an Android or iOS build target),
// pretend ads everywhere else, or everywhere with Use Level Play unticked.
public class AdServiceProvider : MonoBehaviour
{
    [SerializeField] PretendAds pretendAds;
    [SerializeField] LevelPlayAds levelPlayAds;
    [SerializeField] bool useLevelPlay = true;

    public IAdService Service
    {
        get
        {
            if (useLevelPlay && LevelPlayAds.IsSupported)
            {
                return levelPlayAds;
            }
            return pretendAds;
        }
    }

    void Awake()
    {
        // No LevelPlay on the Web or PC: don't even start it there.
        levelPlayAds.enabled = useLevelPlay && LevelPlayAds.IsSupported;
    }
}
```

12. The Inspector can't hold an `IAdService` (Chapter 11's problem again), so the provider
    holds both kinds as what they are, and hands out one as what it can do: `Service`
    returns an `IAdService`. Everything else in the game asks `ads.Service.ShowRewarded(…)`
    and never knows which.
13. Add it to `Ads`: **Pretend Ads** and **Level Play Ads** (both on `Ads` itself). Drag
    `Ads` into `Prefabs`. Put one in the Beach scene and one in the Report scene.

### Do it — the boost

14. In `Income`, `IncomeBoost`:

```csharp:IncomeBoost.cs
using System;
using UnityEngine;

// Every sale doubled for a while: the TV's rewarded ad. Factor is 2 while it
// runs and 1 when it doesn't; the bars and the kart multiply by it.
public class IncomeBoost : MonoBehaviour
{
    [SerializeField] float boostSeconds = 180f;

    float endsAt;
    bool wasRunning;

    public bool IsRunning { get { return Time.time < endsAt; } }
    public float SecondsLeft { get { return Mathf.Max(0f, endsAt - Time.time); } }
    public float Factor { get { return IsRunning ? 2f : 1f; } }

    public event Action Changed;

    public void StartBoost()
    {
        endsAt = Time.time + boostSeconds;
        wasRunning = true;
        Changed?.Invoke();
    }

    // Loading a save: what was left of a boost.
    public void Restore(float secondsLeft)
    {
        endsAt = Time.time + secondsLeft;
        wasRunning = secondsLeft > 0f;
        Changed?.Invoke();
    }

    void Update()
    {
        if (wasRunning && !IsRunning)
        {
            wasRunning = false;
            Changed?.Invoke();
        }
    }
}
```

15. `IsRunning` is worked out from the time each time it's asked: nothing counts down.
    Only the moment it **ends** needs `Update`, to raise `Changed` once: `wasRunning`
    remembers that it was.
16. Four scripts multiply by it, and need it at once (Unity shows errors until all four are
    saved). The final `JuiceStand`, `JuiceKart`, `BeachGame` (which saves the boost's time
    left, and gives it back), and `BoostOffer`, the TV button:

<!-- check: together -->

```csharp:JuiceStand.cs
using System;
using UnityEngine;

// One bar: the Orange Bar, the Apple Bar. It knows its BarInfo, its price and
// its speed (upgrades multiply them), its stations and its two helpers. The
// counter calls Sell, and CupSold tells the cash pile, the numbers and the
// stats. A bar with a runner and a cashier earns by itself, even while you're
// away: it's an IIncomeSource.
public class JuiceStand : MonoBehaviour, IIncomeSource
{
    [SerializeField] BarInfo info;
    [SerializeField] FruitCrate crate;
    [SerializeField] Juicer[] juicers;
    [SerializeField] Counter counter;
    [SerializeField] Helper runner;
    [SerializeField] Helper cashier;
    [SerializeField] IncomeBoost boost;
    [SerializeField] Transform staffDoor;   // the Staff Hut's: where a new helper appears

    float priceFactor = 1f;
    float speedFactor = 1f;
    float beachFactor = 1f;

    public BarInfo Info { get { return info; } }
    public Counter Counter { get { return counter; } }
    public bool IsOpen { get { return counter.gameObject.activeInHierarchy; } }
    public bool HasRunner { get { return runner.IsWorking; } }
    public bool HasCashier { get { return cashier.IsWorking; } }
    public Vector3 CratePosition { get { return crate.transform.position; } }

    // A cup's price now: the bar's own, its upgrades, the beach, and the TV's boost.
    public int Price
    {
        get { return Mathf.RoundToInt(info.Price * priceFactor * beachFactor * boost.Factor); }
    }

    public float SecondsPerCup { get { return info.MachineSeconds / speedFactor; } }

    public event Action<int> CupSold;       // the money for one cup
    public event Action<int> CustomerServed;    // the money for the whole order
    public event Action Changed;            // the price changed

    void OnEnable()
    {
        boost.Changed += OnBoostChanged;
    }

    void OnDisable()
    {
        boost.Changed -= OnBoostChanged;
    }

    void OnBoostChanged()
    {
        Changed?.Invoke();
    }

    public void MultiplyPrice(float factor)
    {
        priceFactor *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedFactor *= factor;
    }

    // A later beach pays more for every cup.
    public void SetBeachFactor(float factor)
    {
        beachFactor = factor;
        Changed?.Invoke();
    }

    public void Sell(int cups)
    {
        int price = Price;
        for (int i = 0; i < cups; i++)
        {
            CupSold?.Invoke(price);
        }
        CustomerServed?.Invoke(cups * price);
    }

    // The machine for the runner: the built one with the least fruit in it.
    public Juicer EmptiestJuicer()
    {
        Juicer best = null;
        foreach (Juicer juicer in juicers)
        {
            if (juicer.isActiveAndEnabled && (best == null || juicer.Fruit < best.Fruit))
            {
                best = juicer;
            }
        }
        return best;
    }

    // Hired at the Staff Hut: the helper walks over from its door.
    public void Hire(HelperKind kind)
    {
        Helper helper = kind == HelperKind.Runner ? runner : cashier;
        if (!helper.IsWorking)
        {
            helper.StartWork(this, staffDoor.position);
        }
    }

    // ------------------------------------------------------------ IIncomeSource

    public string SourceName { get { return info.DisplayName; } }

    // Every built machine making cups, with no boost: a boost won't last while you're away.
    public float IncomePerSecond
    {
        get
        {
            if (!EarnsWhileAway)
            {
                return 0f;
            }
            int machines = 0;
            foreach (Juicer juicer in juicers)
            {
                if (juicer.isActiveAndEnabled)
                {
                    machines++;
                }
            }
            return machines / SecondsPerCup * info.Price * priceFactor * beachFactor;
        }
    }

    public bool EarnsWhileAway { get { return IsOpen && HasRunner && HasCashier; } }
}
```

```csharp:JuiceKart.cs
using System;
using UnityEngine;

// The Juice Kart: a helper drives it round the beach road for ever, and each
// lap sells by itself, straight into the Wallet. Each level sells more. It
// earns while you're away: it's an IIncomeSource, like a staffed bar, and the
// two share nothing else.
public class JuiceKart : MonoBehaviour, IIncomeSource
{
    static readonly int SittingId = Animator.StringToHash("Sitting");

    [SerializeField] Walker walker;
    [SerializeField] Animator driver;
    [SerializeField] WalkPath road;
    [SerializeField] Wallet wallet;
    [SerializeField] IncomeBoost boost;
    [SerializeField] NumberPool numbers;
    [SerializeField] int[] lapEarnings = { 60, 90, 135, 200, 300 };
    [SerializeField] int[] levelPrice = { 1500, 4000, 9000, 20000 };

    float beachFactor = 1f;

    public int Level { get; private set; }
    public bool IsBuilt { get { return gameObject.activeInHierarchy; } }
    public bool IsMax { get { return Level >= levelPrice.Length; } }
    public int NextLevelPrice { get { return IsMax ? 0 : levelPrice[Level]; } }
    public int LapEarnings { get { return Mathf.RoundToInt(lapEarnings[Level] * beachFactor); } }

    public event Action<int> Lapped;    // the money of one lap
    public event Action Changed;

    void OnEnable()
    {
        driver.SetBool(SittingId, true);
        walker.Arrived += OnLap;
        walker.WalkTo(road.Points());
    }

    void OnDisable()
    {
        walker.Arrived -= OnLap;
    }

    void OnLap()
    {
        int earned = Mathf.RoundToInt(LapEarnings * boost.Factor);
        wallet.Add(earned);
        numbers.Show("+$" + NumberFormat.Money(earned), Color.white, transform.position + Vector3.up * 2f);
        Lapped?.Invoke(earned);
        walker.WalkTo(road.Points());
    }

    public bool TryLevelUp()
    {
        if (IsMax || !wallet.TrySpend(NextLevelPrice))
        {
            return false;
        }
        Level++;
        Changed?.Invoke();
        return true;
    }

    public void Restore(int level, float beachPriceFactor)
    {
        Level = Mathf.Clamp(level, 0, levelPrice.Length);
        beachFactor = beachPriceFactor;
        Changed?.Invoke();
    }

    // ------------------------------------------------------------ IIncomeSource

    public string SourceName { get { return "Juice Kart"; } }

    public float IncomePerSecond
    {
        get { return IsBuilt ? LapEarnings / (road.Length() / walker.Speed) : 0f; }
    }

    public bool EarnsWhileAway { get { return IsBuilt; } }
}
```

```csharp:BeachGame.cs
using System;
using LanternHill.Achievements;
using TMPro;
using UnityEngine;

// The Beach scene's start and its saving. It finds the beach in the save,
// gives it its colours and prices, builds again everything that was built,
// adds what Welcome back collected, and saves every 30 seconds, when a phone
// sends the game to the background, when the game quits, and when Settings'
// Title button leaves the scene. Not in OnDestroy: by then the scene is being
// taken down, and the kart or a bar may already be gone.
public class BeachGame : MonoBehaviour
{
    [SerializeField] BeachInfo[] beaches;
    [SerializeField] Wallet wallet;
    [SerializeField] IncomeBoost boost;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] CashPile[] cashPiles;
    [SerializeField] BuildList buildList;
    [SerializeField] Upgrades upgrades;
    [SerializeField] ChefLevels chef;
    [SerializeField] JuiceKart kart;
    [SerializeField] GameStats stats;
    [SerializeField] AchievementTracker tracker;
    [SerializeField] IncomeSources income;
    [SerializeField] Renderer sand;
    [SerializeField] Renderer sea;
    [SerializeField] Light sun;
    [SerializeField] TMP_Text beachName;
    [SerializeField] float autosaveSeconds = 30f;

    int beachIndex;
    float nextSaveTime;
    bool hasLoaded;         // saving before the save is loaded would write a new game over it
    bool isLeaving;         // sailing to a new beach: that beach is saved already

    public int BeachIndex { get { return beachIndex; } }
    public BeachInfo Beach { get { return beaches[beachIndex % beaches.Length]; } }
    public BeachInfo NextBeach { get { return beaches[(beachIndex + 1) % beaches.Length]; } }

    void Start()
    {
        Load();
        hasLoaded = true;
        if (Session.AwayCollected > 0)
        {
            wallet.Add(Session.AwayCollected);
            stats.AddAwayEarnings(Session.AwayCollected);
            Session.AwayCollected = 0;      // add it once
            Save();
        }
        nextSaveTime = Time.unscaledTime + autosaveSeconds;
    }

    void Update()
    {
        if (Time.unscaledTime >= nextSaveTime)
        {
            Save();
            nextSaveTime = Time.unscaledTime + autosaveSeconds;
        }
    }

    // A phone switching to another app; a browser tab hidden.
    void OnApplicationPause(bool isPaused)
    {
        if (isPaused)
        {
            Save();
        }
    }

    void OnApplicationQuit()
    {
        Save();
    }

    // The Pier: the next beach is saved; this one mustn't save over it.
    public void Leave()
    {
        isLeaving = true;
    }

    public void Save()
    {
        // Unity can call OnApplicationPause before Start: a game starting in the
        // background does. The scene isn't loaded yet; there's nothing to save.
        if (!hasLoaded || isLeaving)
        {
            return;
        }
        SaveData data = new SaveData();
        data.beach = beachIndex;
        // The notes still on the cash piles are yours: they're saved as money.
        int waiting = 0;
        foreach (CashPile pile in cashPiles)
        {
            waiting += pile.Total;
        }
        data.money = wallet.Money + waiting;
        data.lifetimeEarned = wallet.LifetimeEarned + waiting;
        data.boostSecondsLeft = boost.SecondsLeft;
        data.built = buildList.BuiltIds();
        data.paid = buildList.PaidSoFar();
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.trayLevel = chef.TrayLevel;
        data.flipFlopLevel = chef.FlipFlopLevel;
        data.kartLevel = kart.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0f)
            {
                AwaySource away = new AwaySource();
                away.name = source.SourceName;
                away.perSecond = source.IncomePerSecond;
                data.awaySources.Add(away);
            }
        }
        SaveSystem.Save(data);
    }

    void Load()
    {
        // A new game is a save with nothing in it.
        SaveData data = SaveSystem.HasSave ? SaveSystem.Load() : new SaveData();
        beachIndex = data.beach;
        ShowBeach();
        wallet.Restore(data.money, data.lifetimeEarned);
        boost.Restore(data.boostSecondsLeft);
        buildList.Restore(data.built, data.paid, Beach.CostFactor);
        upgrades.Restore(data.upgrades);
        chef.Restore(data.trayLevel, data.flipFlopLevel);
        kart.Restore(data.kartLevel, Beach.PriceFactor);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }

    // This beach's colours, its name, and what a cup sells for here.
    void ShowBeach()
    {
        BeachInfo beach = Beach;
        sand.material.color = beach.Sand;
        sea.material.color = beach.Sea;
        sun.color = beach.Sunlight;
        beachName.text = beach.DisplayName;
        foreach (JuiceStand stand in stands)
        {
            stand.SetBeachFactor(beach.PriceFactor);
        }
    }
}
```

```csharp:BoostOffer.cs
using UnityEngine;
using UnityEngine.UI;

// The television button on the top bar: watch an ad, and every sale is doubled
// for 3 minutes. It shows only when an ad is ready and no boost runs.
public class BoostOffer : MonoBehaviour
{
    [SerializeField] AdServiceProvider ads;
    [SerializeField] IncomeBoost boost;
    [SerializeField] Button button;

    void OnEnable()
    {
        button.onClick.AddListener(Offer);
    }

    void OnDisable()
    {
        button.onClick.RemoveListener(Offer);
    }

    void Update()
    {
        bool canOffer = ads.Service.RewardedReady && !boost.IsRunning;
        if (button.gameObject.activeSelf != canOffer)
        {
            button.gameObject.SetActive(canOffer);
        }
    }

    void Offer()
    {
        ads.Service.ShowRewarded(Boost);
    }

    void Boost()
    {
        boost.StartBoost();
    }
}
```

<!-- check: end -->

17. Read what changed. A bar's `Price` has one more factor, `boost.Factor`, and its
    `OnEnable` listens to the boost so the price tag changes when it starts and stops.
    `IncomePerSecond` leaves the boost out, on purpose: it's what you earn while away. The
    kart's lap is multiplied when it's paid. `BeachGame` saves `boost.SecondsLeft`, and
    `Restore` starts it again from there.
18. `BoostOffer` shows the button only while an ad is ready and no boost runs. Ads are
    never pushed: the button waits quietly in the corner. `Boost` is handed over as a
    **method group**, `ShowRewarded(Boost)`: a method with no parameters is already an
    `Action`.
19. On the Beach, add **Income Boost** to the `Income` object, beside **Income Sources**.
    Select the four bars, and drag `Income` into **Boost**; the same on the kart and on
    `Beach Game`.
20. **The TV.** In `Top Bar`, an empty `Boost Offer`: middle-right with its pivot, **Pos X**
    `−292`, 124 × 130. In it, an **Icon Button** `Boost Button`, centred, 120 × 124, its
    `Icon` `television_3d`. Add **Boost Offer** to `Boost Offer` (not to the button: it
    switches the button off, and a switched-off object's `Update` doesn't run): **Ads** the
    scene's `Ads`, **Boost** `Income`, **Button** `Boost Button`.

### Do it — Collect ×2, and the ad between beaches

21. In the Report scene's `Window`, a **Candy Button Green** `Double Button`: bottom-centre,
    **Pos** (210, 70), 390 × 150, label `Collect ×2`, with its label's **Left** at 100 to
    leave room for a TV: an **Image** `Television` in the button, middle-left, **Pos** (24,
    4), 80 × 80, `television_3d`. **Transition** `Sprite Swap`, **Disabled Sprite** `Button
    Grey`.
22. `ReportScreen`'s last form:

```csharp:ReportScreen.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back offers Collect, or Collect ×2 for watching a rewarded ad. Beach
// complete has one button, and the game's only interstitial ad before the beach.
public class ReportScreen : MonoBehaviour
{
    [SerializeField] TMP_Text title;
    [SerializeField] Image picture;
    [SerializeField] Sprite newBeachPicture;    // the picture is the money bag, for Welcome back
    [SerializeField] TMP_Text lines;
    [SerializeField] TMP_Text amount;
    [SerializeField] GameObject collectButton;
    [SerializeField] Button doubleButton;
    [SerializeField] GameObject openBeachButton;
    [SerializeField] AdServiceProvider ads;
    [SerializeField] SceneFader fader;

    Report report;

    void Start()
    {
        report = Session.Report;
        if (report == null)
        {
            // The scene was started on its own, in the Editor: show a test report.
            Debug.LogWarning("Report started without a Session.Report: showing a test one.", this);
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", "+$12.3K", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        bool isWelcome = report.Kind == ReportKind.WelcomeBack;
        amount.text = report.Highlight;
        if (!isWelcome)
        {
            picture.sprite = newBeachPicture;
        }
        collectButton.SetActive(isWelcome);
        doubleButton.gameObject.SetActive(isWelcome);
        openBeachButton.SetActive(!isWelcome);
    }

    void Update()
    {
        // An ad can take a moment to load: the button waits for it.
        doubleButton.interactable = ads.Service.RewardedReady;
    }

    public void Collect()
    {
        Leave(report.Amount);
    }

    public void CollectDouble()
    {
        ads.Service.ShowRewarded(() => Leave(report.Amount * 2));
    }

    public void OpenBeach()
    {
        ads.Service.ShowInterstitial(() => Leave(0));
    }

    void Leave(int collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

23. `CollectDouble` hands over a lambda: `() => Leave(report.Amount * 2)`. It's called when
    the ad has been watched, seconds later; if the player closes a real ad early, LevelPlay
    never rewards, and the lambda never runs: they can still **Collect**. `OpenBeach` shows
    the interstitial, and leaves when it closes, watched or not. `Update` keeps **Collect
    ×2** grey until an ad is ready.
24. Set **Double Button** and **Ads** (the scene's `Ads`), and the button's On Click:
    **ReportScreen → CollectDouble**.
25. Add a line to the Credits: `Ads: <b>Unity LevelPlay</b>`.

### Test it

- **Play** the Title, **Continue** with a Welcome back to show (Chapter 15's two hours).
  **Collect ×2**: *An ad would play here.*, 5, 4, 3, 2, 1, and the beach, with twice the
  money.
- On the beach, the TV on the top bar: the pretend ad, then every price tag doubles
  (`Orange Bar  $10`), and the TV disappears. Three minutes later, the tags go back, and
  the TV returns.
- Start a boost, go back to the Title at once, and **Continue**: the tags are still
  doubled. The boost was saved.
- Build the Pier: *Beach complete!*, **Set sail!**, the pretend ad, then the new beach.
- **Optional: LevelPlay's mock ads.** You need **Android Build Support** (**Unity Hub →
  Installs →** the cog **→ Add modules**: a big download). **File → Build Profiles**,
  **Android**, **Switch Profile**. **Play**: the TV now shows LevelPlay's mock rewarded ad,
  LevelPlay's own test screen with a countdown. When it's over, the boost starts. Switch
  the profile back to your computer's (**Windows**, **macOS** or **Linux**) or **Web** when
  you're done: Chapter 23 builds for those.
- Untick **Use Level Play** on `Ads`: pretend ads everywhere, even on Android. A way to test
  the game's side of ads with nothing else in the way.

### Commit

*Add ads: an interface, pretend ads, LevelPlay, the TV boost and Collect ×2.*

### Challenge

A third kind of `IAdService`, `NoAds`, for players who bought the game: `RewardedReady` is
always `true`, and the rewards come at once, with no ad. Add it to `AdServiceProvider` with
a tick box **No Ads**. Which other scripts change? (None should.)

# Part 5 — Finish

## C# 17 — The Profiling Tools

**Goal:** you can choose the right tool for a performance problem, the Profiler, the Frame
Debugger or the Memory Profiler, and use it to find the cause before you change anything
(Associate: Debugging — select profiling tools for performance problems).

### Idea — measure, don't guess

A game that stutters, a phone that gets hot, a scene that's slow to load: the cause is
rarely where you'd guess. Change the wrong thing, and the code is harder to read and no
faster. So measure first, change one thing, and measure again.

A frame has a budget. At 60 frames a second, it has 16.7 ms for everything: your scripts,
physics, animation and drawing. At 30, it has 33.3 ms. A frame that takes longer arrives
late, and the player sees a stutter.

### Idea — three tools, three questions

| Tool | Open it with | It answers | Use it when |
| --- | --- | --- | --- |
| **Profiler** | **Window → Analysis → Profiler** | where each frame's time goes, method by method, and how much garbage each makes | the game is slow, or stutters |
| **Frame Debugger** | **Window → Analysis → Frame Debugger** | what one frame draws, step by step, in what order, and what's drawn together | something draws in the wrong order, or not at all; too many draw calls; layers of UI |
| **Memory Profiler** | a package, then **Window → Analysis → Memory Profiler** | what fills the memory: textures, meshes, sounds | memory use is high; a phone closes the game; loading is slow |

The exam describes a problem and asks for the tool. *A kart game stutters every few
seconds*: the Profiler, and its GC Alloc column. *A card is drawn behind the one it should
cover*: the Frame Debugger. *The game uses 900 MB on a phone*: the Memory Profiler.

### Idea — the Profiler

Open it, make sure **Record** is on, and press Play. The top half draws a chart for each
module; the first is **CPU Usage**, the time each frame took. A tall, thin peak is a
**spike**: one slow frame. Pause the game and click the spike: the bottom half shows that
frame, in a view you choose from the list on its left. Two matter most:

| View | Shows | Good for |
| --- | --- | --- |
| **Timeline** | bars along the frame's time, one row per thread, nested | seeing what happened when, and what waited for what |
| **Hierarchy** | a table of everything that ran, which opens like folders | finding the slowest thing, by its numbers |

The Hierarchy's columns:

| Column | Means |
| --- | --- |
| **Total**, **Time ms** | the time in this line and everything it called, as a share of the frame and in milliseconds |
| **Self**, **Self ms** | the same, for this line alone |
| **Calls** | how many times it ran in this frame |
| **GC Alloc** | how much memory it took that the garbage collector must free later |

Click **Time ms** to sort, open **PlayerLoop**, and keep opening the line with the biggest
time until you reach a line with your own script's name and method, such as
`CoinLabel.Update`. That's where the time goes. Ignore **EditorLoop**: it's the Editor's
own work, which a built game doesn't do.

### Idea — garbage, and the GC Alloc column

Garbage is memory a script takes and drops (C# 15). A little now and then is
fine; some every frame adds up, until the garbage collector's work shows as a spike. These
two make garbage every frame:

```csharp
using TMPro;
using UnityEngine;

public class CoinLabel : MonoBehaviour
{
    [SerializeField] TMP_Text label;

    int coins;

    void Update()
    {
        // A new string every frame, though the coins rarely change.
        label.text = "Coins: " + coins;
    }
}
```

```csharp
[SerializeField] Transform[] karts;
[SerializeField] float nearDistance = 5f;

void Update()
{
    // A new list every frame, thrown away at the end of it.
    List<Transform> nearby = new List<Transform>();
    foreach (Transform kart in karts)
    {
        if (Vector3.Distance(transform.position, kart.position) < nearDistance)
        {
            nearby.Add(kart);
        }
    }
}
```

In the Profiler, both `Update` lines show a GC Alloc in every frame. The fixes: make a new string
only when there's something new to show, and make the list once and empty it each frame:

```csharp
using TMPro;
using UnityEngine;

public class CoinLabel : MonoBehaviour
{
    [SerializeField] TMP_Text label;

    int coins;

    public void AddCoins(int amount)
    {
        coins += amount;
        label.text = $"Coins: {coins}";     // only when the coins change
    }
}
```

```csharp
[SerializeField] Transform[] karts;
[SerializeField] float nearDistance = 5f;

// Made once. Clear() empties it, and keeps its memory for the next frame.
readonly List<Transform> nearby = new List<Transform>();

void Update()
{
    nearby.Clear();
    foreach (Transform kart in karts)
    {
        if (Vector3.Distance(transform.position, kart.position) < nearDistance)
        {
            nearby.Add(kart);
        }
    }
}
```

`Instantiate` and `Destroy`, many times a second, make garbage too: that's what pooling
fixes (C# 15).

### Idea — deep profiling, and profiling a build

Normally the Profiler times only what Unity calls: your `Update`, but not the methods it
calls. **Deep Profile**, at the top of the window, times every C# method. Everything runs
much slower while it's on, so every number grows: use it briefly, to find which method
inside a slow `Update` is the slow one, then switch it off.

The Editor costs time too: it's drawing its own windows while your game runs. For real
numbers, profile a **development build**. In **File → Build Profiles**, tick **Development
Build** and **Autoconnect Profiler**, then **Build And Run**: the game connects to the
Profiler as it starts, and its frames appear there. A phone works the same way. Profile in
the Editor to find a problem quickly; check the numbers in a build.

### Idea — the Frame Debugger

Open it, press Play, and press **Enable**. The game stops on the current frame, and the
list on the left shows every step Unity took to draw it, in order. Click a step, and the
Game view shows the frame drawn up to that step, no further. On the right are its details:
what was drawn, with which shader, and a **Batch cause**: why it couldn't be drawn
together with the step before. **Disable** lets the game go on.

It's how you see that a hovered card is drawn last, so it's on top; that a sprite you
can't find is drawn, but behind another; or that a UI screen draws three see-through
panels over each other in every frame: **overdraw**, which slows phones most.

### Idea — the Memory Profiler

The Memory Profiler is a package: install it by its name, `com.unity.memoryprofiler`
(C# 16). Open it, press Play, and **Capture New Snapshot**. A snapshot is
everything in memory at that moment. Its **Summary** shows the totals, and **Unity
Objects** lists every texture, mesh and sound, which you can sort by size. The biggest are
almost always textures.

How big a texture is in memory depends on its import settings, not on the file. One
1800 × 10800 picture, imported as a sprite with no mipmaps, measured in Unity 6000.6:

| Import settings | In the game | Memory |
| --- | --- | --- |
| the defaults | shrunk to 341 × 2048, blurry | 4.7 MB |
| **Max Size** 16384, the default compression | 1800 × 10800, DXT1 | 18.5 MB |
| **Max Size** 16384, **Compression** None | 1800 × 10800, RGB24 | 129.8 MB |
| one 300 × 300 portrait cut from it, compressed | 300 × 300 | 89 KB |

A teammate who raises Max Size and turns compression off, to make one sheet sharp, turns
4.7 MB into 129.8 MB. The fix isn't a setting: it's one picture per file, at the size it's
shown.

### Idea — a method in five steps

1. **Reproduce** it: find a way to make the problem happen every time.
2. **Record** it: the Profiler open, the game doing the slow thing.
3. **Find the spike**: the tallest frame in CPU Usage, or frames with GC Alloc.
4. **Look at the Hierarchy**: sort by time, or by GC Alloc, and open it down to your code.
5. **Change one thing, and measure again**, doing the same thing. If it didn't help, undo
   it.

### Do it

1. Put the first `CoinLabel` on a text, play, and find its line in the Profiler's
   Hierarchy. What's in its GC Alloc column? Change it to the fixed one, and look again.
2. Write a script that makes 50 cubes with `Instantiate` and destroys them, every frame.
   Find the spikes, and the garbage. Which tool told you?
3. Open the Frame Debugger on a screen with UI. Step through it: which element is drawn
   last, and why is that the one on top?
4. Install the Memory Profiler, take a snapshot, and find the biggest texture in **Unity
   Objects**.

### Challenge

Make a development build with **Autoconnect Profiler**, and compare its CPU Usage with the
same moment in the Editor. Then repeat the picture experiment: import one large picture,
and record its memory at three settings, as in the table.

## Chapter 20 — Profile It

**Goal:** three performance problems in your game, each found with the right tool and fixed,
or measured for the next chapter to fix: garbage made every frame (the **Profiler**), a
screen drawn in more pieces than it needs (the **Frame Debugger**), and a picture filling
memory it doesn't need (the **Memory Profiler**).

### Idea — which tool for which problem

The exam asks this as a straight question (C# 17):

| The symptom | The tool | What it shows |
| --- | --- | --- |
| the game stutters, or a tap takes a moment | **Profiler**, CPU Usage | what took the time, frame by frame; **GC Alloc**: garbage made |
| something draws wrongly, or too often | **Frame Debugger** | every draw of one frame, in order |
| memory grows, or a phone runs out of it | **Memory Profiler** | what's in memory, and how big each thing is |

A phone is where this matters: it has less of everything than your computer, and it gets
hot and slows down when it works hard. An idle game is left running for minutes at a time,
so a little waste every frame adds up.

**Measure, then change, then measure again.** Every number in this chapter is yours: your
computer, your beach. Write each one down in the tables below, before and after. A fix you
haven't measured is a guess, and some fixes cost something somewhere else.

### Do it — a package

1. **Window → Package Manager**, **Unity Registry** on the left, search **Memory Profiler**,
   **Install**. In GitHub Desktop: one new line in `Packages/manifest.json`,
   `"com.unity.memoryprofiler"`. The package itself isn't in your repository, only that
   line. Commit it: *Add the Memory Profiler package*.

### Do it — problem 1: garbage, every frame

2. **Window → Analysis → Profiler**. Play the Beach, step on the Office's mat, and leave
   the panel open for a few seconds without touching anything, with the Profiler
   recording.
3. Click any frame of the **CPU Usage** graph and switch the lower half to **Hierarchy**.
   Sort by **GC Alloc**. Near the top: `UpgradeShop.Update`, on **every** frame, while
   nothing on the screen changes. Open it: `String.Concat`, from `"$" + Fmt(…)`, and the
   strings `Fmt` builds, for sixteen rows, many times a second.
4. Note what you measure:

| | Garbage each frame | Allocations each frame |
| --- | --- | --- |
| the intern's shop open | | |
| every panel closed | | |

   Expect a kilobyte or two a frame with the shop open: at 60 frames a second, that's
   something like 100 KB a second, megabytes a minute, all garbage the **garbage
   collector** must clear, all at once, every so often. That's the stutter. Close the
   panel: the garbage stops, since a switched-off panel's `Update` doesn't run.

5. Don't fix it here: the intern's code gets a proper clean-up in Chapter 21, and you'll
   measure it again. Write the two numbers in your list from Chapter 9.

> **Note:** the Editor itself makes garbage and takes time, so its numbers aren't a
> phone's. A **Development Build** with **Autoconnect Profiler** (in **File → Build
> Profiles**) profiles the real thing. To find *where* the waste is, the Editor is fine.

### Do it — problem 2: a screen drawn in too many pieces

6. **Window → Analysis → Frame Debugger**, **Enable**, with the Beach playing and the Office
   open. The list on the left is every draw of one frame. Open the UI's part
   (`UGUI.Rendering.RenderOverlays`) and click down it: each draw puts some of the screen
   up. A picture from a different texture can't be drawn in the same draw as the one
   before it: the money's panel (the `Windows` sheet), then its coin (an emoji, a texture
   of its own), then the TV (the `Buttons` sheet), then its emoji… Each change of texture
   is a new draw. **Disable** it.
7. The Game view's **Stats** (top right of the Game view) shows **Batches**: the number of
   draws. Note it, with the Office open:

| | Batches, the Office open |
| --- | --- |
| before the atlas | |
| after the atlas | |

8. A **Sprite Atlas** packs many sprites into one texture, so they can share draws. In
   `Art`, **Assets → Create → 2D → Sprite Atlas**, `Juice Tycoon`. In its **Objects for
   Packing**, **+** five times: the `Art/Emoji`, `Art/Ground` and `Art/Icons` folders, and
   the two sheets, `Art/GUI/Buttons` and `Art/GUI/Windows`. Under **Packing**, untick
   **Allow Rotation** and **Tight Packing**, **Padding** `4`: a 9-sliced panel and a UI
   image need their whole rectangle, upright. **Pack Preview**: one big texture, every
   emoji, mat, icon and button on it.
9. **Edit → Project Settings → Editor**, **Sprite Packer**, **Mode**: `Sprite Atlas V2 -
   Enabled` (the default). Play, open the Office, and look at **Batches** again, and at the
   Frame Debugger: fewer draws for the same screen.
10. The world's own canvases are a different story. Each mat, ring, price tag and bubble is
    a **World Space** canvas of its own, so each is at least one draw, atlas or not. That
    was a choice, in Chapter 3: a ring's fill changes every frame, and when anything on a
    canvas changes, Unity rebuilds that canvas's whole mesh. With a canvas each, a turning
    ring rebuilds only itself. In the Profiler, add the **UI Details** module (**Profiler
    Modules**, top left): it lists the canvases, and which ones were rebuilt.

### Do it — problem 3: a picture in memory

11. In Chapter 1, KayKit's bar picture, `restaurantbits_texture`, came in at its full
    size. Play the Beach, then **Window → Analysis → Memory Profiler** → **Capture New
    Snapshot**. Open it, look under **Unity Objects** for **Texture2D**s, and find it.
12. Open the picture itself (select it in `Art/Bar`, and look at the preview): 1024 × 1024
    pixels of colour patches, each a smooth gradient, 128 pixels wide. On the screen, a
    counter covers a few centimetres; one patch of it, a few millimetres. Select it: **Max
    Size** `256`, **Apply**. Every patch is still 32 pixels wide: plenty for a gradient.
    Take a new snapshot and compare:

| `restaurantbits_texture` | Size in memory |
| --- | --- |
| **Max Size** 2048 (the picture's own 1024) | |
| **Max Size** 256 | |

A quarter of the width and a quarter of the height: a sixteenth of the memory.

13. Does the game look worse? Put the two side by side (undo, look, redo): the bar is the
    same. Try `64`: now patches start to bleed into each other at their edges, and the
    counters' colours change. The right size is the smallest that looks the same, and only
    looking tells you which that is.
14. One more snapshot: find your new Sprite Atlas texture. Packing everything into one
    picture made the draws fewer, but the atlas is one big texture, and it holds every
    sprite on the two GUI sheets, even the many the game never uses. That's the price of
    problem 2's fix, in memory. Is it worth it? Write down both numbers, and say what you'd
    tell Sam.

> **Note:** the Editor's sizes are bigger than a build's (it keeps a copy of each picture
> that a build doesn't), so compare snapshots with each other, not with a phone's memory.

### Commit

*Profile it: a Sprite Atlas, and a smaller bar picture.*

### Challenge

The floating numbers make a little garbage too: each sale builds its `"+$15"` string.
Profile it with every bar staffed: how many bytes a second? Is it worth fixing? (Compare
it with the intern's shop: the answer is a number, not a feeling.)

## C# 18 — Coding Standards and Refactoring

**Goal:** you can follow a team's style guide, refactor code to fit it in small, tested
steps, and choose the version of some code that follows a given standard (Associate:
Programming — apply coding standards set by senior programmers; Associate: Debugging —
refactor code to fit coding standards).

### Idea — why teams have a style guide

A **style guide** is a short list of rules for how a team writes code. A senior
programmer writes it once, and everyone follows it, even where they'd have chosen
differently. It pays for itself three ways:

- **Everyone reads everyone's code.** When all of it looks the same, you read what it
  does, not how it's written.
- **Reviews go faster.** Nobody argues about braces; the review is about the logic.
- **Fewer bugs.** Most rules exist because breaking them once caused a bug: a public
  field changed by the wrong script, a number changed in one place but not another.

### Idea — a team's style guide

| What | Rule | Example |
| --- | --- | --- |
| Classes, methods, properties, enums | PascalCase | `JuiceStand`, `Sell`, `MaxCups` |
| Fields, locals, parameters | camelCase; a `bool` reads as a question | `cupsSold`, `isOpen` |
| Fields set in the Inspector | `[SerializeField]` and private, never `public` | `[SerializeField] float topSpeed = 12f;` |
| Values other scripts read | a property | `public int Coins { get { return coins; } }` |
| Numbers with a meaning | a named `const`, or a serialized field | `const int MaxCups = 20;`, not `20` |
| Files | one class per file, named after it | `JuiceStand.cs` holds `JuiceStand` |
| Layout | 4 spaces, braces on their own lines, braces on every `if`, `else` and loop | |
| Comments | say why, not what | `// a full stand turns customers away` |
| Other objects | a serialized reference, never a `Find…` call | `[SerializeField] TMP_Text coinText;` |
| C# events and handlers | events in the past tense, without `On`; handlers start with `On` | `LapFinished`, `OnLapFinished` |
| Not allowed | `var`, `public` fields, `Find…`, `SendMessage` | |

Your trainer, or your game's build chapters, give you the guide your team uses. Follow
that one: on a team, being consistent matters more than any single rule.

### Idea — refactoring, safely

**Refactoring** is changing how code is written *without changing what it does*. The
game plays exactly the same afterwards; the code is just easier to read and to change
next time. Fixing a bug or adding a feature isn't refactoring: do those separately.
Mixed together, when something breaks, you can't tell which change did it.

Refactor in **small steps**, and after each one:

1. **Save**, and wait for Unity to compile: the Console must be clear.
2. **Test** the part the change touches: it must behave exactly as before.
3. **Commit**, with a message that says what changed (C# 1).

Then, when a step breaks something, it's the last one, and you can throw away just
that step.

### Idea — a script to clean up

Here's a working script from an intern. It sells juice and shows the coins, and it
breaks most of the style guide:

```csharp
using TMPro;
using UnityEngine;

public class stand : MonoBehaviour
{
    public int c = 0;
    public int s = 10;
    TMP_Text t;

    void Start()
    {
        t = GameObject.Find("Coins Text").GetComponent<TMP_Text>();
    }

    void Update()
    {
        t.text = "Coins: " + c;
    }

    public void Sell()
    {
        if (s > 0)
        {
            s = s - 1;
            c = c + 3;
            if (c >= 100)
            {
                Debug.Log("Second stand unlocked!");
            }
        }
    }
}
```

And here it is after seven small refactors, one commit each:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

// A juice stand: sells a cup at a time, and shows the coins it has earned.
public class JuiceStand : MonoBehaviour
{
    const int UnlockAt = 100;   // the coins that unlock the second stand

    [SerializeField] int price = 3;
    [FormerlySerializedAs("s")]
    [SerializeField] int stock = 10;
    [SerializeField] TMP_Text coinText;

    int coins;

    public int Coins
    {
        get { return coins; }
    }

    void Start()
    {
        ShowCoins();
    }

    public void Sell()
    {
        if (stock > 0)
        {
            stock--;
            Earn(price);
        }
    }

    void Earn(int amount)
    {
        coins += amount;
        ShowCoins();
        if (coins >= UnlockAt)
        {
            Debug.Log("Second stand unlocked!");
        }
    }

    void ShowCoins()
    {
        coinText.text = $"Coins: {coins}";
    }
}
```

| Step | The refactor | Why | Test |
| --- | --- | --- | --- |
| 1 | **rename** the class to `JuiceStand`, and its file, in Unity's Project window | a name that says what it is | the component is still on the stand |
| 2 | **rename** `c`, `s` and `t` with your editor's **Rename Symbol** (F2 in VS Code), and keep the stock's value with `[FormerlySerializedAs("s")]` | names that say what they hold | the stock in the Inspector hasn't changed |
| 3 | turn the **public fields** into a private `coins`, a `[SerializeField] stock`, and a `Coins` property | only the stand can change its coins | it compiles: no other script wrote to them |
| 4 | replace the **magic numbers** with `price` and `UnlockAt` | `3` and `100` now have names, and one place each | a sale still earns 3 |
| 5 | replace **`GameObject.Find`** with a `[SerializeField] TMP_Text` | a renamed object no longer breaks it, and the Inspector shows what it needs | drag the text in: it still counts |
| 6 | show the coins **when they change**, not in `Update` | no new string every frame: less garbage (C# 17) | the text still updates |
| 7 | **extract** `Earn` from `Sell` | each method does one job, and a tip can call `Earn` too | sell: same as before |

> **Watch out:** Unity saves Inspector values **by field name**. Rename a serialized field,
> and the value set in every scene and prefab is lost. `[FormerlySerializedAs("s")]`,
> from `UnityEngine.Serialization`, tells Unity the old name, so the value carries over.
> Rename a MonoBehaviour's file in the Project window, never outside Unity, so that its
> `.meta` file, and every scene's link to the script, comes with it.

> **Note:** the unlock message shows on every sale after 100 coins. That's a bug, and the
> refactored script still has it, on purpose: a refactor doesn't change what code does.
> Fix it afterwards, in a commit of its own.

### Idea — review your own diff

Before each commit, read your change as a **diff**: in GitHub Desktop's **Changes**
tab, each file you changed, with removed lines in red and added lines in green. Read
every line, as a reviewer would, and ask:

- Is every change one I meant? Is it only this step, with no fix mixed in?
- Did a `Debug.Log` I added while testing, or some commented-out code, get left behind?
- Did a scene or a prefab change that I didn't mean to touch?

A minute here saves a reviewer's time, and catches the change you made by accident.

### Idea — how the exam asks

*The senior programmer's standard says: "Inspector fields are private and serialized;
other scripts read them through a property." Which version follows it?*

- A. `public float topSpeed = 12f;`
- B. `[SerializeField] float topSpeed = 12f;` and `public float TopSpeed { get { return topSpeed; } }`
- C. `[SerializeField] public float topSpeed = 12f;`
- D. `float topSpeed = 12f;` and `public float TopSpeed { get { return topSpeed; } }`

**B.** A is a public field. C is public too: `[SerializeField]` adds nothing to a public
field. D compiles, but the field isn't in the Inspector, so a designer can't tune it.

*The standard says "no magic numbers". Which change to `if (lap > 3)` is a refactor
that fits it?*

- A. `const int LapsPerRace = 3;` and `if (lap > LapsPerRace)`
- B. `if (lap >= 3)`
- C. `if (lap > 3)   // 3 laps`
- D. `public int laps = 3;` and `if (lap > laps)`

**A.** B changes what the code does, so it isn't a refactor at all. C keeps the bare
number, with a comment that says what, not why. D names the number, but breaks the
rule against public fields.

### Do it

1. Make the intern's `stand` script, with a Button that calls `Sell` and a text named
   **Coins Text**. Check it works, and commit.
2. Do the seven steps, one at a time. After each: save, play, sell, commit.
3. Rename a serialized field once without `[FormerlySerializedAs]`, and watch its
   Inspector value reset. Discard that change in GitHub Desktop.
4. Fix the repeated unlock message, in a commit of its own, after the refactor.

### Challenge

Swap a script from your last game with a partner. Each of you refactors the other's to
fit the style guide, in small commits. Then review each other's diffs: could you follow
every step? Did any of them change what the game does?

## Chapter 21 — Clean Up the Intern's Code

**Goal:** the intern's shop rewritten to Sam's style guide, in small steps, each tested and
committed, without changing what the player sees, except four things the review finds:
prices that read `$1000.0K`, buttons that look pressable when they aren't, rows for bars
you haven't built, and lists in no order. The garbage Chapter 20 measured is gone.

### Idea — refactor in small, safe steps

**Refactoring** changes how code is written, never what it does (C# 18). The
safe way is a series of small steps, each of which leaves a working game:

```
change one thing  →  Play: does the shop still work?  →  commit  →  next
```

If a step breaks something, you know which: the last one. And Git can take it back.

The shop's biggest problem isn't any one line. It's that one script knows everything about
every row: its children's names, which text is which, how a price is written, and it asks
all of it again every frame. A **row** should know how to show itself, and the shop should
only change what changed, when it changes. So the clean-up ends with two small classes:
`UpgradeRow`, one upgrade's row, and `UpgradesPanel`, one script for both shops, the
Office's and the Staff Hut's.

### Do it — read it against the guide

1. Open `UpgradeShop` beside `STYLE_GUIDE.md`, and your list from Chapter 9. Compare:

| In the intern's code | The guide says |
| --- | --- |
| `public Upgrade[] list;` and four more | `[SerializeField]` private fields, never `public` |
| `u`, `w`, `n`, `m` | names that say what they are |
| `transform.Find("Name").GetComponent<TMP_Text>()`, every frame | references set once, in the Inspector |
| `"$" + Fmt(…)` in `Update` | not allowed: string building in `Update` (Chapter 20's garbage) |
| `if (…) x; else y;` with no braces | braces on every `if` and `else` |
| `// update the rows`, `// format the money` | comments say why, not what |
| `Fmt`: `$1000.0K` for a million, and `1000,0K` on a French computer | the game already has `NumberFormat` |
| a button you can't afford looks like one you can | the rows' Buy buttons go grey (the Level Rows do) |
| the Apple Bar's upgrades listed before the Apple Bar is built | `Upgrades.IsForSale` already knows |
| each panel's list typed by hand, in the Inspector, in no order | the game has an `UpgradeLibrary` of every upgrade |

### Do it — step 1: names and fields

2. Rename the fields to say what they are, and make them private and `[SerializeField]`.
   One trap: Unity remembers an Inspector value **by the field's name**. Rename `u` to
   `upgrades`, and both panels forget their `Upgrades`. `[FormerlySerializedAs("u")]` tells
   Unity the field used to be called `u`:

```csharp
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;
using TMPro;

// upgrade shop
public class UpgradeShop : MonoBehaviour
{
    [FormerlySerializedAs("list")] [SerializeField] Upgrade[] forSale;
    [FormerlySerializedAs("u")] [SerializeField] Upgrades upgrades;
    [FormerlySerializedAs("w")] [SerializeField] Wallet wallet;
    [FormerlySerializedAs("row")] [SerializeField] GameObject rowPrefab;
    [SerializeField] Transform content;
    GameObject[] rows;

    void Start()
    {
        // make the rows
        rows = new GameObject[forSale.Length];
        for (int i = 0; i < forSale.Length; i++)
        {
            rows[i] = Instantiate(rowPrefab, content);
            int n = i;
            rows[i].transform.Find("Buy Button").GetComponent<Button>().onClick.AddListener(() => upgrades.TryBuy(forSale[n]));
        }
    }

    void Update()
    {
        // update the rows
        for (int i = 0; i < forSale.Length; i++)
        {
            if (upgrades.IsBought(forSale[i]))
                rows[i].SetActive(false);
            else
                rows[i].SetActive(true);
            rows[i].transform.Find("Picture").GetComponent<Image>().sprite = forSale[i].Picture;
            rows[i].transform.Find("Name").GetComponent<TMP_Text>().text = forSale[i].DisplayName;
            rows[i].transform.Find("Description").GetComponent<TMP_Text>().text = forSale[i].Description;
            rows[i].transform.Find("Buy Button/Label").GetComponent<TMP_Text>().text = "$" + Fmt(forSale[i].Cost);
            if (wallet.Money >= forSale[i].Cost)
                rows[i].transform.Find("Buy Button").GetComponent<Button>().interactable = true;
            else
                rows[i].transform.Find("Buy Button").GetComponent<Button>().interactable = false;
        }
    }

    // format the money
    string Fmt(int m)
    {
        if (m >= 1000)
            return (m / 1000f).ToString("0.0") + "K";
        return m.ToString();
    }
}
```

3. Select the two panels in the Beach scene: every field still filled in, under its new
   names. Save the scene (**Ctrl+S** or **Cmd+S**): it's written with the new names now.
   Play, buy an upgrade and hire a helper: as before. Commit: *Rename the shop's fields*.

### Do it — step 2: a row that shows itself

4. In `Scripts/UI`, `UpgradeRow`:

```csharp:UpgradeRow.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One upgrade in the Office or the Staff Hut: its picture, name, what it
// does, and its price on a button that's green when you can afford it.
public class UpgradeRow : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text descriptionText;
    [SerializeField] Button buyButton;
    [SerializeField] Image buyButtonImage;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Sprite canBuySprite;
    [SerializeField] Sprite cannotBuySprite;

    Upgrade upgrade;

    public event Action<Upgrade> BuyPressed;

    void OnEnable()
    {
        buyButton.onClick.AddListener(OnBuyPressed);
    }

    void OnDisable()
    {
        buyButton.onClick.RemoveListener(OnBuyPressed);
    }

    public void Show(Upgrade shown)
    {
        upgrade = shown;
        picture.sprite = upgrade.Picture;
        nameText.text = upgrade.DisplayName;
        descriptionText.text = upgrade.Description;
        priceText.text = "$" + NumberFormat.Money(upgrade.Cost);
    }

    public void SetAffordable(int money)
    {
        bool canBuy = upgrade.Cost <= money;
        buyButton.interactable = canBuy;
        buyButtonImage.sprite = canBuy ? canBuySprite : cannotBuySprite;
    }

    void OnBuyPressed()
    {
        BuyPressed?.Invoke(upgrade);
    }
}
```

5. The row is given its upgrade once, in `Show`, and draws it once. After that only
   `SetAffordable` runs, when the money changes: a bool, a button, a sprite, no strings. It
   doesn't buy anything itself: it raises `BuyPressed`, and whoever made the row decides.
   The price uses `NumberFormat.Money`: `$1.00M`. It's the same shape as Chapter 9's
   `LevelRow`, on purpose.
6. Open the **Upgrade Row** prefab and add **Upgrade Row**: **Picture**, **Name Text**,
   **Description Text**, **Buy Button** and its Image, **Price Text** (`Buy Button/Label`),
   and the two sprites, `Button Green` and `Button Grey`. The intern's shop still works: it
   ignores the script and finds the children by name, as before. Play to check. Commit:
   *Add UpgradeRow*.

### Do it — step 3: one panel, both shops

7. In `Scripts/UI`, `UpgradesPanel`:

```csharp:UpgradesPanel.cs
using System.Collections.Generic;
using UnityEngine;

// The Office's Upgrades panel, and the Staff Hut's panel: the same script,
// with Show Staff ticked for the second. Each lists the upgrades for sale
// (not bought yet, for a bar you've built), cheapest first, made in code. The
// rows are made when the panel opens and after a purchase; the money changing
// only turns their buttons green or grey.
public class UpgradesPanel : MonoBehaviour
{
    [SerializeField] bool showStaff;
    [SerializeField] Upgrades upgrades;
    [SerializeField] Wallet wallet;
    [SerializeField] UpgradeRow rowPrefab;
    [SerializeField] Transform content;
    [SerializeField] GameObject allBoughtText;

    readonly List<UpgradeRow> rows = new List<UpgradeRow>();

    void OnEnable()
    {
        wallet.MoneyChanged += OnMoneyChanged;
        Rebuild();
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= OnMoneyChanged;
    }

    void Rebuild()
    {
        foreach (UpgradeRow row in rows)
        {
            row.BuyPressed -= Buy;
            Destroy(row.gameObject);
        }
        rows.Clear();

        List<Upgrade> forSale = new List<Upgrade>();
        foreach (Upgrade upgrade in upgrades.Library.Upgrades)
        {
            // A helper is an upgrade too: this panel shows one kind or the other.
            bool isHire = upgrade is HireUpgrade;
            if (isHire == showStaff && upgrades.IsForSale(upgrade))
            {
                forSale.Add(upgrade);
            }
        }
        forSale.Sort((a, b) => a.Cost.CompareTo(b.Cost));

        foreach (Upgrade upgrade in forSale)
        {
            UpgradeRow row = Instantiate(rowPrefab, content);
            row.Show(upgrade);
            row.SetAffordable(wallet.Money);
            row.BuyPressed += Buy;
            rows.Add(row);
        }
        allBoughtText.SetActive(forSale.Count == 0);
    }

    void Buy(Upgrade upgrade)
    {
        if (upgrades.TryBuy(upgrade))
        {
            Rebuild();
        }
    }

    void OnMoneyChanged(int money)
    {
        foreach (UpgradeRow row in rows)
        {
            row.SetAffordable(money);
        }
    }
}
```

8. Read it as the answers to your list:
   - **What to show** comes from the library, not from a list typed by hand: every upgrade
     for sale (`IsForSale`: not bought, and its bar built), of the panel's kind. `upgrade is
     HireUpgrade`, compared with `showStaff`, splits them: one script, two panels.
   - **In order:** `forSale.Sort((a, b) => a.Cost.CompareTo(b.Cost))`, cheapest first, a
     lambda that compares two upgrades.
   - **When:** the rows are made when the panel opens (`OnEnable`) and after a purchase
     (`Rebuild`); the money changing only calls `SetAffordable`. No `Update` at all.
   - **Tidy:** `Rebuild` unsubscribes from each old row before destroying it.
9. Open the **Upgrades Panel** prefab and add **Upgrades Panel**: **Row Prefab** the
   **Upgrade Row**, **Content** its `List`, **All Bought Text** its `All Bought`. Then the
   **Staff Panel** prefab: the same, and tick **Show Staff**.
10. In the Beach scene, on each of the two panels: set **Upgrades** and **Wallet**, then
    remove the **Upgrade Shop** component (the ⋮ menu → **Remove Component**).
11. Play: both shops work, from the new script. Then delete `UpgradeShop.cs`. Play again,
    to be sure nothing used it. Commit: *Replace the intern's shop with UpgradesPanel*.

### Test it

- **The Office**, with only the Orange Bar: its four upgrades, cheapest first: *Sweet
  Oranges* `$100`, *Faster Juicer* `$150`, *Orange Zest* `$600`, *Turbo Juicer* `$800`. No
  Apple Bar rows yet. A button you can't afford is grey, and turns green as the money comes
  in. Build the Apple Bar: its four join the list, in price order.
- Hire everyone in the **Staff Hut** for the bars you've built: *Everyone's hired: build
  another bar to hire more.*
- **Profile it again**, as in Chapter 20: the Office open for a few seconds, **GC Alloc**.
  Write the number beside Chapter 20's: the same as with every panel closed. The shop makes
  no garbage at all now.

### Commit

Three commits, one per step, are already in your History. Look at them in GitHub Desktop:
each one's diff is small enough to read.

### Challenge

The rows are destroyed and made again after every purchase. With 24 upgrades that's fine;
with 500, it wouldn't be. How would you change `UpgradesPanel` to hide the bought row
instead, and keep the others? What would `Rebuild` still need to do, and when?

## C# 19 — Debug Messages and Compile Errors

**Goal:** you can write debug messages that show exactly why code fails, and read a
compile error to find its cause, including the errors Level 4's topics bring (Associate:
Debugging — use debug messages to find why code fails; identify the cause of a compile
error).

### Idea — three kinds of message

| Call | In the Console | Use it when |
| --- | --- | --- |
| `Debug.Log(message)` | a plain message | you want to see what's happening while you build and test |
| `Debug.LogWarning(message)` | a yellow warning | something's wrong, but the game can carry on, perhaps with a fallback: a save with an unknown card id, a scene played on its own |
| `Debug.LogError(message)` | a red error | something is broken and must be fixed: a missing reference, two cards with the same id, a damaged save file |

Warnings and errors mark things that should never happen in the finished game, so they
stay in the code. Plain logs are mostly for while you're working.

### Idea — the context object

Each call takes a second argument, a **context**: any Unity object, usually `this`.
Click the message in the Console, and Unity highlights that object in the Hierarchy, or
the asset in the Project window. With twelve karts in the scene, it shows you *which*
kart:

```csharp
using UnityEngine;

public class FuelTank : MonoBehaviour
{
    [SerializeField] float fuel = 20f;

    void Start()
    {
        if (fuel <= 0f)
        {
            Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.", this);
        }
    }
}
```

### Idea — messages that pinpoint the problem

A good message answers four questions: **what** happened, to **which object**, with
**which value**, and **what you expected**.

| Vague | Pinpoints |
| --- | --- |
| `Debug.Log("here");` | `Debug.Log($"{name}: Sell() with {stock} cups left", this);` |
| `Debug.LogError("error");` | `Debug.LogError($"{name}: no Coin Text set in the Inspector", this);` |
| `Debug.Log(speed);` | `Debug.Log($"{name}: speed {speed:0.0}, but the top speed is {topSpeed}", this);` |

```csharp
string kart = "Red Kart";
int lap = 4;
int lapsPerRace = 3;
Debug.LogWarning($"{kart} started lap {lap}, but the race has only {lapsPerRace} laps.");
```

```
Red Kart started lap 4, but the race has only 3 laps.
```

When hunting a bug, log the values just before the line that goes wrong, and compare
each one with what you expected. The first one that's different is where to look.

### Idea — the Console's buttons

| Button | Does |
| --- | --- |
| **Clear** | empties the Console. Its drop-down has **Clear on Play**, which empties it every time you press Play, **Clear on Build** and **Clear on Recompile** |
| **Collapse** | shows identical messages once, with a count: a message logged every frame becomes one line |
| **Error Pause** | pauses Play mode at the first error, so you can look at the scene as it was |
| the three counters | show or hide the logs, the warnings and the errors |

### Idea — turning noisy logs off

A log in `Update`, or one for every choice an opponent makes, buries everything else.
Don't delete a useful log: put it behind a switch you can tick in the Inspector.

```csharp
[SerializeField] bool logDecisions;     // tick it to see every choice

void Choose(string choice, int score)
{
    if (logDecisions)
    {
        Debug.Log($"{name} chose {choice}, score {score}", this);
    }
}
```

Off, the Console stays readable, and the game doesn't spend time building strings that
nobody reads. On, the next bug in the decisions takes a minute to find.

### Idea — compile errors

A compile error shows in red in the Console, and underlined in red in your code editor.
Until every one is fixed, Unity can't use any of your new code, and Play won't start.

```
Assets/Scripts/Kart.cs(14,9): error CS0103: The name 'sped' does not exist in the current context
```

| Part | Means |
| --- | --- |
| `Assets/Scripts/Kart.cs` | the file |
| `(14,9)` | line 14, character 9: double-click the error, and your editor opens there |
| `CS0103` | the error's code: the same codes come back again and again |
| the rest | what the compiler found |

Fix the **first** error first: one mistake, such as a missing brace, can cause a dozen
errors after it.

### Idea — Level 4's compile errors: classes and interfaces

```csharp
public abstract class Vehicle
{
    public abstract void Drive();
}

public class Kart : Vehicle         // error CS0534: 'Kart' does not implement inherited abstract member 'Vehicle.Drive()'
{
    public override void Drve()     // error CS0115: 'Kart.Drve()': no suitable method found to override
    {
    }
}
```

One typo, two errors: `Drve` overrides nothing in `Vehicle`, so `Drive` is still
missing. Fix the name, and both go. On its own, CS0534 means you haven't written the
abstract method yet, and CS0115 means the name or the parameters don't match any method
in the base class (C# 8).

```csharp
public interface IDamageable
{
    void TakeDamage(int amount);
}

public class Crate : MonoBehaviour, IDamageable     // error CS0535: 'Crate' does not implement interface member 'IDamageable.TakeDamage(int)'
{
}
```

A class that promises an interface must have every member of it, `public`, with the
same parameters (C# 9). And neither can be made with `new`: an abstract
class or an interface is a plan, not a thing. Make one of the classes built on it.

```csharp
Vehicle vehicle = new Vehicle();    // error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle'
```

### Idea — events, members and names

| Wrong | The compiler says | Fix |
| --- | --- | --- |
| `racer.LapFinished = OnLapFinished;` | `error CS0070: The event 'Racer.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Racer')` | subscribe with `+=`; only `Racer` can raise or reset its event (C# 2) |
| two `Countdown` classes, often after importing a package | `error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'` | delete the copy, rename yours, or use a namespace (C# 10) |
| `kart.Boost();` when `Kart` has no `Boost` | `error CS1061: 'Kart' does not contain a definition for 'Boost' and no accessible extension method 'Boost' accepting a first argument of type 'Kart' could be found (are you missing a using directive or an assembly reference?)` | fix the typo, use the right class, or write the member |
| `string cardId = 17;` | `error CS0029: Cannot implicitly convert type 'int' to 'string'` | the right type, `"17"`, or a conversion |
| `speed *= boost;`, with `boost` declared inside an `if` above it | `error CS0103: The name 'boost' does not exist in the current context` | fix the typo, or declare it before the `if`, outside its braces |
| `Random.Range(0f, 1f)`, with `using System;` and `using UnityEngine;` | `error CS0104: 'Random' is an ambiguous reference between 'UnityEngine.Random' and 'System.Random'` | write `UnityEngine.Random`, or remove a `using` the file doesn't need |
| a `TMP_Text` field without `using TMPro;` | `error CS0246: The type or namespace name 'TMP_Text' could not be found (are you missing a using directive or an assembly reference?)` | add the `using`; the same for a module's namespace |

### Idea — how the exam asks

*What's the cause of this compile error?* Try each one before reading the answers.

**1.**

```csharp
public class Card : ScriptableObject
{
    public virtual void Play()
    {
    }
}

public class HealCard : Card
{
    public override void Play(int amount)   // error CS0115: 'HealCard.Play(int)': no suitable method found to override
    {
    }
}
```

A. `HealCard` must be `abstract`. B. `Card.Play` isn't `abstract`. C. The override's
parameters don't match `Card.Play()`. D. A ScriptableObject can't be a base class.

**2.** `int lemons = stock;`, where `stock` is a `Dictionary<string, int>`, gives
`error CS0029: Cannot implicitly convert type 'System.Collections.Generic.Dictionary<string, int>' to 'int'`.
A. Dictionaries can't hold `int`s. B. The key is missing: `stock["Lemons"]`. C. `lemons`
should be a `float`. D. `stock` hasn't been made with `new`.

**3.** In a script called `Announcer`, `kart.LapFinished(3);` gives
`error CS0070: The event 'Kart.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Kart')`.
A. `Action<int>` needs two values. B. Only `Kart` can raise its own event. C. `kart` is
`null`. D. Events can't be used in `Start`.

**4.**

```csharp
public interface IUpgrade
{
    int Cost { get; }
    void Apply();
}

public class Blender : MonoBehaviour, IUpgrade     // error CS0535: 'Blender' does not implement interface member 'IUpgrade.Apply()'
{
    public int Cost { get { return 40; } }

    public void apply()
    {
    }
}
```

A. `Cost` needs a `set`. B. `Blender` must also inherit from `IUpgrade`'s base class.
C. `apply` isn't `Apply`: names are case-sensitive. D. Interfaces can't have properties.

**Answers.** 1 **C**: an override must match the base method's parameters exactly. 2
**B**: a dictionary isn't a number; one of its values is. 3 **B**: outside its class, an
event only takes `+=` and `-=`; C would be a runtime error, not a compile error. 4 **C**:
`Apply` is still missing.

### Do it

1. Make `FuelTank`, set **Fuel** to 0 on two objects, and play. Click each warning, and
   watch which object lights up in the Hierarchy.
2. Log a message every frame in `Update`, then turn on **Collapse**. Turn on **Error
   Pause**, log an error with `Debug.LogError`, and play.
3. Add a `logDecisions` switch to a script in your game, around a log that fires often.
4. Make each mistake in the two tables above in a `Practice` script, one at a time.
   Read the error, find its file and line, and fix it.

### Challenge

Write a script with four compile errors from this chapter, each one realistic. Swap with
a partner. Who can name every cause, and fix it, from the Console alone, without
running the game?

## Chapter 22 — Break It, Then Fix It

**Goal:** Level 4's common mistakes, made on purpose, one at a time: read the Console's
message, find the cause, fix it, and use Git to undo what you did. Do this chapter on a
branch, `breaking`, and delete it at the end.

### Idea — read the message, then the code

C# 19 gave the method: the file and line, the code (`CS0534`), the message;
then the code at that line. For a runtime error, the **stack trace**: the line at the top is
where it happened, the lines below are how the game got there.

1. In GitHub Desktop, **Current Branch → New Branch**, `breaking`. Nothing you break here
   reaches `main`.

### Do it — compile errors

Make each mistake, read the Console, and then **Discard Changes** in GitHub Desktop
(right-click the file) to undo it.

2. **Delete `ApplyTo` from `SpeedUpgrade`.**

```
Assets/Scripts/Upgrades/SpeedUpgrade.cs(5,14): error CS0534: 'SpeedUpgrade' does not implement inherited abstract member 'Upgrade.ApplyTo(JuiceStand)'
```

   An abstract member is a promise every kind must keep. Put it back.

3. **Misspell it:** `public override void AplyTo(JuiceStand stand)`.

```
Assets/Scripts/Upgrades/SpeedUpgrade.cs(9,26): error CS0115: 'SpeedUpgrade.AplyTo(JuiceStand)': no suitable method found to override
Assets/Scripts/Upgrades/SpeedUpgrade.cs(5,14): error CS0534: 'SpeedUpgrade' does not implement inherited abstract member 'Upgrade.ApplyTo(JuiceStand)'
```

   `override` says *there's a method like this in my base class*; there isn't one called
   `AplyTo`. And the real one is missing again, so CS0534 comes back too: one typo, two
   errors.

4. **Delete `IncomePerSecond` from `JuiceKart`.**

```
Assets/Scripts/Income/JuiceKart.cs(8,41): error CS0535: 'JuiceKart' does not implement interface member 'IIncomeSource.IncomePerSecond'
```

   An interface is a contract: a class that signs it must have every member.

5. **As the first line of `UpgradeRow.SetAffordable`, write `Upgrade test = new
   Upgrade();`.**

```
Assets/Scripts/UI/UpgradeRow.cs(44,24): error CS0144: Cannot create an instance of the abstract type or interface 'Upgrade'
```

   There's no such thing as a plain upgrade: only recipes, machines and helpers. (And a
   ScriptableObject is never made with `new` anyway: an asset, or
   `ScriptableObject.CreateInstance`.)

6. **In `SoundPlayer.OnUpgradeBought`, after the sound, write `stands[0].CupSold(10);`**, as
   if to sell a cup from outside.

```
Assets/Scripts/Juice/SoundPlayer.cs(101,19): error CS0070: The event 'JuiceStand.CupSold' can only appear on the left hand side of += or -= (except when used from within the type 'JuiceStand')
```

   Only the class that owns an event may raise it. Others subscribe and unsubscribe: that's
   what makes it an *event*, and not a field anyone could call.

### Do it — runtime errors

7. **Forget to unsubscribe.** In `Controls.OnDisable`, delete the line `menu.performed -=
   OnMenu;`. Play the **Title**, **Continue** to the beach, then the cog and **Title**, and
   **Continue** again. On the beach, press **Escape**:

```
MissingReferenceException while executing 'performed' callbacks of 'Chef/Menu[/Keyboard/escape]'
MissingReferenceException: The object of type 'UnityEngine.GameObject' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

   Read the stack trace: `PanelSwitcher.Toggle`, called from `Controls.OnMenu`. The
   **first** beach's `Controls`, destroyed with its scene, is still subscribed: the action
   belongs to an **asset**, and assets outlive scenes. Its handler runs, and reaches for its
   Settings panel, which was destroyed with it. Settings still opens: the second beach's
   handler runs too. A bug that doesn't stop the game is the kind that ships. The fix is the
   line you deleted: *subscribe in `OnEnable`, unsubscribe in `OnDisable`, always both*.
   Discard the change.

8. **Leave a field empty.** Select `Boost Offer` on the top bar, and clear its **Button**
   field (click it, **Delete**). **Play**:

```
UnassignedReferenceException: The variable button of BoostOffer has not been assigned.
You probably need to assign the button variable of the BoostOffer script in the inspector.
```

   Unity names the field and the script for you, and it happens at once, in `OnEnable`. Put
   it back with **Ctrl+Z**, or discard the scene's changes.

9. **A coroutine on a switched-off object.** Untick the `Ads` object in the Beach, and
   **Play**. The TV still shows (the pretend ads say they're ready); press it:

```
Coroutine couldn't be started because the the game object 'Ads' is inactive!
```

   (Yes, *the the*: that's Unity's own message.) `PretendAds` plays its countdown in a
   coroutine, and a switched-off object can't run one. The fix is to tick `Ads` again; the
   lesson is that a component on a switched-off object can still be **called**, and does
   half its job. Discard the change.

### Do it — undo a commit

10. Make a mistake *and commit it*: in `Data/Bars/Orange Bar`, set **Crate Seconds** to `12`,
    and commit *Slow down the orange crate* on your branch. Play: one orange every twelve
    seconds. Nobody would wait for that.
11. In GitHub Desktop's **History**, right-click that commit → **Revert Changes in Commit**.
    A new commit undoes the old one; the history keeps both, so a team can see what
    happened. Play: 1.2 seconds, as the balance sheet says.
12. Switch back to `main`, and delete the `breaking` branch.

### Commit

Nothing to commit on `main`. Everything you broke stayed on the branch.

### Challenge

Make a mistake for a friend: on a branch of your own, break one thing (a compile error or a
runtime one), and commit it. Swap computers. Find each other's mistake from the Console
alone, and fix it.

## Chapter 23 — Ship It

**Goal:** Juice Tycoon built for the **web**, playable on itch.io in a tall window, with a
mouse, the keys or a thumb, and for **your computer** (Windows or Mac), in a window shaped
like a phone, with a Quit button. Your juice bar is saved in both. A **release tag** in Git
marks the version you shipped.

### Idea — one project, two builds, shaped like a phone

| | Web (WebGL) | PC (Windows or Mac) |
| --- | --- | --- |
| Played | in a browser, on itch.io | as an app, in a window |
| Its shape | a 540 × 960 frame on the page | a 720 × 1280 window |
| Quit button | hidden: a web page can't close itself | shown |
| The save and the settings | kept by the browser, for that site | in the player's own folders |
| Ads | the pretend ads | the pretend ads |
| Saving when you leave | every 30 s, and when the tab is hidden: closing a tab may not run `OnApplicationQuit` | every 30 s, and when the window closes |

`TitleScreen` already hides **Quit** on the web, and `AdServiceProvider` already chooses
the pretend ads where LevelPlay can't run. The stick already works under a finger: it
pretends to be a gamepad, and a phone's browser sends touches. Real ads on a real phone,
and the phone builds themselves, are Level 6's.

### Do it — tidy up for release

1. Take out what you left in for testing: a `Debug.Log` of the save's folder (Chapter 14),
   the Juice Kart's or the Pier's spot still in the **Build List**'s **First**, a price of
   `1` on a spot, the kart's level prices. Search the project for `Debug.Log(` and read
   each one: keep the ones that report a real problem. Play once from the Title. Commit:
   *Tidy up for release*.

### Do it — the player settings

2. **Edit → Project Settings → Player**: **Company Name** *Lantern Hill Games*, **Product
   Name** *Juice Tycoon*. The product name is the app's name, and part of the save file's
   folder: change it, and the game looks for its save somewhere new.
3. Under **Resolution and Presentation**, for the PC: **Fullscreen Mode** `Windowed`,
   **Default Screen Width** 720, **Default Screen Height** 1280. For the Web (its own tab in
   the same section): **Default Canvas Width** 540, **Height** 960. A phone game in a wide
   window would leave the canvas scaler stretching a 1080-wide layout across 1920 pixels:
   the tall window keeps the shape you designed.
4. **File → Build Profiles**. The **Scene List**: `Title`, `Report` and `Beach`, in that
   order, all ticked.

### Do it — check it on phones

5. **Window → General → Device Simulator**, and Play from the Title on two phones: one with
   a notch, one without. Go through everything once: the safe area keeps the money and the
   buttons clear on both; a tall phone shows more beach, not smaller buttons; the stick
   appears under your thumb wherever it lands in the lower half.

### Do it — the web build

6. In **Build Profiles**, select **Web**, and **Switch Platform** (it takes a while: every
   picture is imported again for the web).
7. In the Web profile's **Player Settings**, **Publishing Settings**: **Compression Format**
   `Disabled` (itch.io serves the files as they are, and a compressed build would need the
   server's help).
8. **Build**, into a new folder, `Builds/Web` (it's in the `.gitignore`: builds stay out of
   Git). Zip the **contents** of `Builds/Web`, so `index.html` is at the top of the zip.
9. On itch.io: **Upload new project**, **Kind of project: HTML**, upload the zip, tick **This
   file will be played in the browser**, set the viewport to 540 × 960, and tick **Mobile
   friendly**, **Portrait**. Save, and open the page.

### Test it — the web build

- The Title fades in; there's no **Quit**. **New Game**, build a table and the second
  juicer, and hire the Orange Bar's runner and cashier.
- Close the tab. Wait two minutes, then open the page again: **Continue** shows your money,
  and **Welcome back** what the Orange Bar made. The browser kept your save.
- The TV and **Collect ×2** show the pretend ad: on the web, nothing else can.
- On a phone: drag your thumb, and the chef runs. Step on the Office's mat, and tap the
  buttons. Everything works with a thumb.
- In your browser's settings, clear the site's data: back to the first run.

### Do it — the PC build

10. In **Build Profiles**, select **Windows** or **macOS** (whichever you're on), **Switch
    Platform**, and **Build** into `Builds/PC`.
11. Run it: a tall window; **Quit** is there; the keys work, and so does changing them. The
    save lives in the player's own folders (on a Mac,
    `~/Library/Application Support/Lantern Hill Games/Juice Tycoon`). The company name is
    part of that path, so the game you played in the Editor before step 2 is in a
    `DefaultCompany` folder instead.

### Do it — tag the release

12. Commit everything: *Ship version 1.0*. In GitHub Desktop's **History**, right-click that
    commit → **Create Tag…**, `v1.0`. **Push origin**, and push the tag when it asks. On
    GitHub, your repository's **Releases** and **Tags** show `v1.0`: whatever happens to
    `main` next, anyone can get back the exact game you shipped.

### Commit

*Ship version 1.0*, tagged `v1.0`.

### Challenge

Add the version number to the Title, from **Player Settings → Version** (read it in code
with `Application.version`), and ship 1.0.1 with one small improvement of your own (a fifth
bar? a lemon crate? a daily gift?), tagged `v1.0.1`.

# Part 6 — The Exam

## C# 20 — The Associate Exam

**Goal:** you know what the **Unity Certified Associate: Programmer** exam covers, where
in this course you learned each part, how its questions are written, and how to spend
your time on the day and in the two weeks before it (Associate: Programming, UI,
Debugging and Assets — all four domains).

### Idea — the exam

The **Unity Certified Associate: Programmer** exam is Unity's certificate for a
programmer who's ready for a first job: someone who can work in a team's project, read
and plug in code they didn't write, follow the team's standards, find bugs, and use
Unity's assets and tools. It's the next step after the User exam.

You take it the same way, on a computer, in a set time. Most questions give you some
code, a Unity window or a short description, and answers to choose from. It's based on
**Unity 6**, and you can take it in English, Chinese (Simplified and Traditional),
Japanese, Korean or Spanish (Latin America).

The number of questions, the time, the pass mark and the price are shown when you book,
and they change from time to time: check them with your trainer before you book. Unity
also publishes an **official practice test**, to take before the real one.

### Idea — what it covers, and where you learned it

The exam has four **domains**: Programming, UI, Debugging and Assets. Every objective
has a place in this course:

| Domain | Objective | Where you learned it |
| --- | --- | --- |
| Programming | Evaluate code for integration into a system architected by a lead | C# 10, C# 9 |
| Programming | Apply coding standards set by senior programmers | C# 18; Level 3's naming conventions |
| Programming | Determine code for a specified interaction or logic | Levels 1–4: every chapter; C# 8, C# 2 |
| Programming | Implement transitions between scenes | C# 12 |
| Programming | Save data between scenes and sessions (static, PlayerPrefs) | C# 11, C# 12, C# 14 |
| Programming | Use Unity API methods, given the API docs | Level 2: the Unity docs; C# 14, C# 3 |
| Programming | Choose GameObject properties, scripts and components for a task | Levels 1 and 2; C# 4, C# 7 |
| Programming | Inheritance vs. interfaces | C# 8, C# 9 |
| Programming | Choose data structures: lists, arrays, dictionaries | Level 2; C# 6 |
| Programming | Choose data types: floats, bools, strings | Level 2; C# 6 |
| Programming | Build to WebGL or PC | Level 1; the last of your game's build chapters |
| UI | Lay out UI with anchors, pivots and groups | C# 7 |
| UI | Display data in UI elements | Levels 1 and 3; C# 7 |
| UI | Respond to user input with the UnityEvent system | Level 2: UI events; C# 2, C# 7 |
| Debugging | Use debug messages to find why code fails | Levels 0 to 3; C# 19 |
| Debugging | Identify the cause of a compile error | Levels 0 and 3; C# 19 |
| Debugging | Identify null-variable errors | Level 2; Level 3's finding errors; C# 13 |
| Debugging | Refactor code to fit coding standards | C# 18 |
| Debugging | Select profiling tools for performance problems | C# 17, C# 15 |
| Assets | Use prefabs in a scene | Level 1; C# 4 |
| Assets | Change nested prefabs and prefab variants, and predict the outcome | C# 4 |
| Assets | Primary purposes of version control | C# 1 |

The **Check Yourself** part at the end of this book has two exam-style questions on
every one of them, a timed practice paper, and a cheat sheet.

### Idea — what Unity expects before you sit it

Unity lists these as the exam's prerequisites. You've done every one:

| Unity expects | Where you did it |
| --- | --- |
| 2–3 semesters of Unity classwork, or the equivalent | Levels 0 to 4 of this course |
| a diverse range of Unity projects | a different game at every level since Level 0, each one built and published |
| importing assets or code from the Asset Store or the Package Manager, and resolving conflicts | C# 16, C# 10 |
| debugging non-complex problems | Levels 2 and 3; C# 19, C# 17 |
| interpreting, integrating and modifying well-documented existing code | C# 10, C# 18 |
| basic scene management | C# 12 |
| creating and using prefabs | Level 1; C# 4 |
| deploying a basic build | a published build at the end of every level |

### Idea — how the questions are written

| The question says… | It wants… | Practise with |
| --- | --- | --- |
| "What does this code print?" | a trace on paper, line by line: which override runs, what a queue gives back first, what a dictionary holds | C# 8, C# 6 |
| "Which code implements…?" | the option that compiles **and** does the whole task: often two of them compile | every chapter's Do it |
| "What's the cause of this error?" | the error's code, the line, and the one thing on it that's wrong | C# 19 |
| "Which tool or component should you use…?" | the one made for that job: the Profiler for slow frames and garbage, the Frame Debugger for draw calls, the Memory Profiler for memory | C# 17, C# 7 |
| "What happens when you change this prefab?" | the change followed down from the base to its variants and instances, stopping at every override | C# 4 |
| "Which version follows the standard…?" | the option that keeps every rule the question gives, not your own habits | C# 18 |
| "Which of these integrates correctly?" | the option that uses the module's contract, and leaves the module unchanged | C# 10 |

### Idea — the traps, collected

| Trap | Remember |
| --- | --- |
| `Add` for a key that's already in a dictionary | it throws; `dict[key] = value` replaces |
| reading `dict[key]` for a key that isn't there | it throws; `TryGetValue` doesn't |
| `Dequeue` or `Pop` | takes the item out; `Peek` only looks |
| a dictionary's order | it hasn't got one |
| money in a `float`, compared with `==` | it drifts: count whole coins in an `int` |
| an override with different parameters | CS0115: it overrides nothing |
| `new` on an abstract class or an interface | CS0144: make a class built on it |
| `myEvent = handler` outside the event's class | CS0070: only `+=` and `-=` |
| a `static` field | survives loading a new scene, and with domain reload off, even a new Play |
| game data in `PlayerPrefs` | PlayerPrefs is for small settings; game data goes in a file |
| a `Dictionary` and `JsonUtility` | it can't save one: save a list or an array |
| a ScriptableObject changed while playing | in the Editor, the change stays in the asset |
| a change to a base prefab | reaches every variant and instance, except where one overrides that property |
| `Time.timeScale = 0` | stops physics and `deltaTime`, not `Update` |

### Idea — reading a question under time

- **Read the last line first.** It's the real question: *which line*, *what's printed*,
  *which is NOT*. Then read the code, knowing what you're looking for.
- **Watch for NOT, BEST, FIRST and MOST.** They turn the question round.
- **Eliminate.** Two answers are usually clearly wrong. Of the last two, find the word
  that makes one of them false.
- **Don't overthink.** The exam asks about what Unity programmers do every day, not
  compiler puzzles. If an answer needs a rare rule to be right, it's probably wrong.
  Change an answer only when you've found a reason, not a feeling.
- **Flag and return.** Mark a hard question, answer the easy ones, and come back at
  the end. An unanswered question can't score.
- **Know your pace.** Before the day, divide the time by the number of questions. At
  the halfway point of the time, you should be about halfway through.

### Idea — one question, worked through

```csharp
Queue<string> drawPile = new Queue<string>();
drawPile.Enqueue("Spark");
drawPile.Enqueue("Heal");
drawPile.Enqueue("Shield");
Stack<string> discard = new Stack<string>();
discard.Push(drawPile.Dequeue());
discard.Push(drawPile.Dequeue());
Debug.Log($"{drawPile.Peek()} {discard.Peek()} {discard.Count + drawPile.Count}");
```

*What does this code print?* A. `Shield Heal 3` B. `Spark Heal 3` C. `Shield Spark 3`
D. `Shield Heal 2`

The last line asks for a trace, so trace it, on paper, a line at a time:

| After | `drawPile`, front first | `discard`, top first |
| --- | --- | --- |
| the three `Enqueue`s | Spark, Heal, Shield | (empty) |
| the first `Push(Dequeue())` | Heal, Shield | Spark |
| the second | Shield | Heal, Spark |

`Peek` only looks, so nothing moves while the message is built: it prints
`Shield Heal 3`, answer **A**. D forgets that `Peek` leaves the card where it is; B
and C mix up which end of each collection is the front. Each wrong answer is one
mistake away from the right one, which is how the exam writes them.

### Idea — the last two weeks

| Day | Do |
| --- | --- |
| 1 | the official practice test, timed, with no notes; list every objective you missed |
| 2–3 | Programming: inheritance and interfaces, collections and types, events; write an example of each from memory |
| 4 | scenes and saving: a transition, static data, PlayerPrefs, a JSON file |
| 5 | UI: anchors, pivots and layout groups; UnityEvents |
| 6 | Debugging: the compile-error drill, null references, which profiling tool |
| 7 | Assets: predict three prefab changes, then check them in Unity; Git's purposes |
| 8 | the Check Yourself questions for every objective, on paper |
| 9–10 | your two weakest objectives from day 1: reread their chapters, and redo their Do it |
| 11 | the practice paper, timed, as if it were the real exam |
| 12 | every mistake from day 11: why the right answer is right, and each wrong one wrong |
| 13 | a light read of the cheat sheet and the traps; check your booking and what to bring |
| 14 | rest: no new topics |

### Do it

1. For each objective in the first table, write one line of code or one sentence that
   shows it. Where you can't, go back to the chapter it names.
2. For each kind of question, write the first thing you'd do when you see one.
3. Take the practice paper at the end of this book with a timer, then mark it, and put
   your two weakest objectives into days 9 and 10 of your plan.
4. Write your own two-week plan on a calendar, with the exam date at the end.

### Challenge

Write an exam question of your own for each domain: a stem, four answers and one right
one, with three wrong answers that are each *nearly* right. Swap with a partner, answer
each other's, and explain why each wrong answer is wrong.

## Exam-style questions

These questions are written the way the **Unity Certified Associate: Programmer** exam
writes its own: two for each of its 22 objectives, domain by domain, with a short name
for the objective in brackets after each question (C# 20 lists them all). Answer
on paper first, then check the answers. The practice paper after them is a timed
rehearsal.

**Q1.** (Programming: integrating a lead's code) The lead's Tutorial module points an
arrow at what the player should look at next. Its README says: *"Implement
`IHighlightable` (`string Hint { get; }` and `void Highlight(bool isOn);`) on the
object. The module finds it with `GetComponentInParent<IHighlightable>()`."* Which
juice stand integrates correctly?

- A. `class JuiceStand : MonoBehaviour`, with a public `Hint` and a public `Highlight`
- B. `class JuiceStand : MonoBehaviour, IHighlightable`, with a public `Hint` and a public `Highlight`
- C. `class JuiceStand : IHighlightable`, with a public `Hint` and a public `Highlight`
- D. `class JuiceStand : MonoBehaviour, IHighlightable`, with a public `Hint` and `public override void Highlight(bool isOn)`

**Q2.** (Programming: integrating a lead's code) The lead's architecture says: *"Parts
of the game talk through C# events. No part finds another by name."* Which line of this
teammate's script breaks it, and what should replace it?

```csharp
public class ComboCounter : MonoBehaviour
{
    int combo;

    public event Action<int> ComboChanged;

    public void RegisterHit()
    {
        combo++;
        ComboChanged?.Invoke(combo);
        GameObject.Find("Combo Text").GetComponent<TMP_Text>().text = $"x{combo}";
    }
}
```

**Q3.** (Programming: coding standards) The style guide says: *"C# events are named for
what happened, in the past tense, without `On`. Methods that handle them start with
`On`."* Which pair follows it?

- A. `public event Action OnLapFinished;`, handled by `void LapFinished()`
- B. `public event Action FinishLap;`, handled by `void HandleFinishLap()`
- C. `public event Action LapFinished;`, handled by `void OnLapFinished()`
- D. `public event Action lapFinished;`, handled by `void onLapFinished()`

**Q4.** (Programming: coding standards) The guide says: *"Inspector fields are private
and serialized, without the word `private`. A `bool` reads as a question."* Which
follows it?

- A. `[SerializeField] private bool isLocked;`
- B. `public bool isLocked;`
- C. `[SerializeField] bool locked;`
- D. `[SerializeField] bool isLocked;`

**Q5.** (Programming: code for a task) What does this print?

```csharp
public class Pickup
{
    public virtual string Use()
    {
        return "Picked up";
    }
}

public class Potion : Pickup
{
    public override string Use()
    {
        return base.Use() + ", healed";
    }
}

public class BigPotion : Potion
{
    public override string Use()
    {
        return base.Use() + " twice";
    }
}
```

```csharp
Pickup item = new BigPotion();
Debug.Log(item.Use());
Debug.Log(item is Potion);
```

**Q6.** (Programming: code for a task) `PlayerHealth` has `public event Action Died;`. A
death sound must play when the player dies, and stop listening when it's switched off.
Which code goes in the sound's script?

- A. `player.Died = OnDied;` in `Start`
- B. `player.Died += OnDied;` in `Update`
- C. `player.Died += OnDied;` in `OnEnable`, and `player.Died -= OnDied;` in `OnDisable`
- D. `player.Died += OnDied;` in `OnEnable`, and `player.Died -= () => OnDied();` in `OnDisable`

**Q7.** (Programming: scene transitions) A **Results** button calls
`SceneManager.LoadScene("Results");`, and the Console says this. What's the fix?

```
Scene 'Results' couldn't be loaded because it has not been added to the active build profile or shared scene list or the AssetBundle has not been loaded.
```

**Q8.** (Programming: scene transitions) A pause screen sets `Time.timeScale = 0f`, and
its **Menu** button calls `SceneManager.LoadScene("Menu")`. In the Menu, the buttons
work, but the title's animation and the falling leaves don't move. Why?

- A. The Menu isn't in the Scene List.
- B. Loading a scene doesn't reset `Time.timeScale`.
- C. The Animator and the particles were destroyed with the old scene.
- D. `LoadScene` only loads the UI.

**Q9.** (Programming: saving data) Where does each belong: in a `static` property, in
PlayerPrefs or in a JSON file? 1. the track chosen on the menu, for the race scene to
read; 2. the music volume; 3. the coins, and the list of unlocked karts.

**Q10.** (Programming: saving data) `RunStats` is a static class with
`public static int Laps { get; set; }`, and the project's **Enter Play Mode Settings**
say **Reload Scene only**. A `Practice` script's `Start` runs:

```csharp
RunStats.Laps += 3;
Debug.Log($"Laps: {RunStats.Laps}");
```

You press Play, stop, and press Play again, changing no script. What does the second
Play print?

**Q11.** (Programming: the Unity API) The docs say `JsonUtility` has `public static T
FromJson<T>(string json)`: *"Create an object from its JSON representation."* `json`
holds a save file's text. Which makes a `SaveData` from it?

- A. `JsonUtility.FromJson(json)`
- B. `new SaveData(json)`
- C. `JsonUtility.FromJson<SaveData>(json)`
- D. `JsonUtility.ToJson<SaveData>(json)`

**Q12.** (Programming: the Unity API) The Input System's docs give `InputAction` the
method `public TValue ReadValue<TValue>() where TValue : struct`, which reads the
action's current value. A script has `[SerializeField] InputActionReference
steerAction;`, for a Value action whose Control Type is **Vector 2**. Which reads it?

- A. `steerAction.ReadValue<Vector2>()`
- B. `steerAction.action.ReadValue()`
- C. `steerAction.action.performed<Vector2>()`
- D. `steerAction.action.ReadValue<Vector2>()`

**Q13.** (Programming: components for a task) A full-screen black Image is the curtain
between scenes. It must fade with one value, and stop clicks while it shows. Which
component do you add to it?

- A. a Layout Element
- B. a Canvas Group
- C. a Content Size Fitter
- D. a Rect Mask 2D

**Q14.** (Programming: components for a task) Ten karts of one kind share a top speed
and a grip that a designer tunes; each kart's current speed is its own. Where does each
value belong?

- A. all three in the ScriptableObject asset
- B. all three in `static` fields
- C. top speed and grip in a ScriptableObject asset that every kart references; the current speed in a field on each kart
- D. top speed and grip in PlayerPrefs; the current speed in the asset

**Q15.** (Programming: inheritance vs. interfaces) A player, a crate and a magic door
can all be hurt, each in its own way, and share no other code. Each is a MonoBehaviour.
What's the best design?

- A. a base class, `Damageable`, that each inherits as well as `MonoBehaviour`
- B. the same `TakeDamage` code copied into all three
- C. a `static` class with a method for each kind
- D. an interface, `IDamageable`, that all three implement

**Q16.** (Programming: inheritance vs. interfaces) Which is true?

- A. A class can have one base class, and as many interfaces as it needs.
- B. A class can have several base classes, but only one interface.
- C. An interface can hold fields, and methods with bodies.
- D. A method that implements an interface's method must be marked `override`.

**Q17.** (Programming: data structures) What does this print?

```csharp
Dictionary<string, int> stock = new Dictionary<string, int>();
stock["Lemon"] = 4;
stock["Mango"] = 2;
stock["Lemon"] = 6;
stock.Remove("Mango");
stock.TryGetValue("Mango", out int mangoes);
Debug.Log($"{stock["Lemon"]} {mangoes} {stock.Count}");
```

**Q18.** (Programming: data structures) Choose a `List`, an array, a `Dictionary`, a
`Queue` or a `Stack` for each: 1. customers at a juice stand, served in the order they
came; 2. the upgrades bought, so that **Undo** takes back the latest first; 3. every
card in the game, found by its id when a save loads; 4. the four starting slots on a
grid, set in the Inspector.

**Q19.** (Programming: data types) Which type fits each best, `int`, `float`, `bool` or
`string`? 1. the coins a player has; 2. how long a lap took; 3. whether the shop is
open; 4. a card's id, such as `frost-bolt`.

**Q20.** (Programming: data types) A kart's `float health` starts at 1, and each hit
takes off 0.1. It explodes `if (health == 0f)`, but after ten hits it doesn't. Why, and
what's the best fix?

**Q21.** (Programming: builds) The menu's **Quit** button calls `Application.Quit()`. It
closes the PC build, but in the Web build the page stays open. What should the menu do?

**Q22.** (Programming: builds) The build opens straight into the **Race** scene, not the
**Menu**. What's the fix?

- A. Have the Menu open when you build.
- B. Drag the Menu to the top of the Scene List.
- C. Load the Menu from the Race's `Awake`.
- D. Rename the Menu `0`.

**Q23.** (UI: anchors, pivots and groups) A money counter must keep its size, near the
top-right corner, on a phone, a monitor and a tablet. Where do its anchors go?

- A. both at (0.5, 0.5)
- B. Min at (0, 1), Max at (1, 1)
- C. both at (1, 1)
- D. Min at (0, 0), Max at (1, 1)

**Q24.** (UI: anchors, pivots and groups) Buttons in a row along the bottom of a menu
grow to 1.2 times their size while the pointer is over them, but they grow downwards too,
off the screen. What do you change, so they grow upwards?

- A. **Pivot** to (0.5, 1)
- B. **Pivot** to (0.5, 0)
- C. the anchors to (0.5, 0)
- D. the layout group's **Child Force Expand**

**Q25.** (UI: displaying data) `stockBar` is an Image with **Image Type: Filled**;
`stock` is 3 and `capacity` is 4, both `int`s. Which line fills three quarters of it?

- A. `stockBar.fillAmount = stock / capacity;`
- B. `stockBar.fillAmount = (float)(stock / capacity);`
- C. `stockBar.fillAmount = stock;`
- D. `stockBar.fillAmount = (float)stock / capacity;`

**Q26.** (UI: displaying data) A coin counter sets `coinText.text = $"Coins: {coins}";`
in `Update`, though the coins change only a few times a minute. What's the better way?

**Q27.** (UI: UnityEvents) A shop makes a Button for each fruit in `fruits`, a
`string[]`. Each button must buy its own fruit. Which code completes the loop?

```csharp
for (int i = 0; i < fruits.Length; i++)
{
    Button button = Instantiate(buttonPrefab, buttonList);
    // ???
}
```

- A. `string fruit = fruits[i];`, then `button.onClick.AddListener(() => Buy(fruit));`
- B. `button.onClick.AddListener(() => Buy(fruits[i]));`
- C. `button.onClick.AddListener(Buy(fruits[i]));`
- D. `button.onClick = () => Buy(fruits[i]);`

**Q28.** (UI: UnityEvents) A designer wants the finish line to play a cheer and show a
panel when the race is won, and to change that later without code. What should its
script declare?

- A. `[SerializeField] UnityEvent onWon;`
- B. `public event Action Won;`
- C. `public bool hasWon;`
- D. `[SerializeField] GameObject panel;`

**Q29.** (Debugging: debug messages) Twelve karts share one script. Which line says which
kart has no fuel, and how much, and highlights the kart when you click the message?

- A. `Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.");`
- B. `Debug.LogWarning($"{name} starts with no fuel ({fuel}), so it can't move.", this);`
- C. `Debug.Log("no fuel");`
- D. `Debug.LogError(this);`

**Q30.** (Debugging: debug messages) What does this print?

```csharp
string[] prices = { "4", "x", "6" };
int total = 0;
foreach (string text in prices)
{
    try
    {
        total += int.Parse(text);
        Debug.Log($"Added {text}");
    }
    catch (FormatException)
    {
        Debug.LogWarning($"Skipped {text}");
    }
}
Debug.Log($"Total: {total}");
```

**Q31.** (Debugging: compile errors) This gives two errors. What's the one cause?

```csharp
public abstract class Generator : MonoBehaviour
{
    protected abstract int Produce(int seconds);
}

public class LemonTree : Generator      // error CS0534: 'LemonTree' does not implement inherited abstract member 'Generator.Produce(int)'
{
    protected override int Produce(float seconds)   // error CS0115: 'LemonTree.Produce(float)': no suitable method found to override
    {
        return 2;
    }
}
```

**Q32.** (Debugging: compile errors) A teammate moves the shop's scripts into
`namespace JuiceWorks.Shop`. Now your `Wallet`, with `[SerializeField] ShopWindow shop;`,
gives `error CS0246: The type or namespace name 'ShopWindow' could not be found (are you missing a using directive or an assembly reference?)`.
What's the fix?

**Q33.** (Debugging: null variables) `PauseMenu` has a field
`[SerializeField] GameObject settingsPanel;`, and its `OpenSettings` runs
`settingsPanel.SetActive(true);`. Clicking **Settings** gives
`UnassignedReferenceException: The variable settingsPanel of PauseMenu has not been assigned.`
What's the cause, and the fix?

**Q34.** (Debugging: null variables) The second line throws a `NullReferenceException`,
but only when a save file holds the id `frost-bolt`. Which variable is `null`, and why?

```csharp
cardsById.TryGetValue(id, out Card card);
nameText.text = card.DisplayName;
```

- A. `nameText`: its field is empty in the Inspector.
- B. `cardsById`: a `readonly` dictionary can't be read.
- C. `DisplayName`: that card's name is empty.
- D. `card`: no card has that id, so `TryGetValue` returned `false` and left `card` as `null`.

**Q35.** (Debugging: refactoring to a standard) Which is a refactor?

- A. renaming `c` to `coins` with **Rename Symbol**
- B. fixing an unlock message that shows on every sale
- C. playing a sound on a sale
- D. raising the price from 3 to 4

**Q36.** (Debugging: refactoring to a standard) To fit the style guide, you rename a
serialized field from `s` to `stock`. What happens to the values set in the Inspector,
and how do you keep them?

**Q37.** (Debugging: profiling tools) Which would you open first for each, the Profiler,
the Frame Debugger or the Memory Profiler? 1. The frame rate drops each time a stand
sells a cup, and you want the slow method. 2. A menu is slow on phones, and you suspect
three see-through panels drawn over each other. 3. A new background added 120 MB.

**Q38.** (Debugging: profiling tools) The Profiler shows a **GC Alloc** in every frame
on `CoinLabel.Update`, which runs `label.text = "Coins: " + coins;`. Which change
removes it?

- A. `label.text = $"Coins: {coins}";`
- B. setting `label.text` only when `coins` changes
- C. turning on **Deep Profile**
- D. moving the line into `LateUpdate`

**Q39.** (Assets: prefabs in a scene) A script has `[SerializeField] Coin coinPrefab;`.
What does `Coin coin = Instantiate(coinPrefab, coinParent);` give you?

- A. the `Coin` component on a new copy, a child of `coinParent`
- B. the prefab asset itself, moved under `coinParent`
- C. a new, empty GameObject
- D. `null`, until the copy's `Start` has run

**Q40.** (Assets: prefabs in a scene) You set one Coin instance's **Value** to 5 in the
scene, and the label turns bold. What's happened, and how do you make every coin worth 5?

Questions 41 and 42 use this setup. **Tag** is a prefab with a **Background** (a Sprite
Renderer, **Color** white) and a **Price** text (**Font Size** 24). **Sale Tag** is a
variant of Tag that overrides the Background's colour to red. **Stand** is a prefab with
a Tag nested in it. The scene holds two Stands, **Stand A** and **Stand B**, and a Sale
Tag.

**Q41.** (Assets: nested prefabs and variants) In Tag's Prefab Mode, you set the
Background's **Color** to yellow. Which backgrounds in the scene turn yellow?

- A. all three
- B. only the Sale Tag's
- C. none, until you apply
- D. Stand A's and Stand B's only

**Q42.** (Assets: nested prefabs and variants) Then, in the scene, you set Stand B's
Price **Font Size** to 32, and apply it to the **Stand** prefab. Which Price texts are
now 32?

- A. only Stand B's
- B. all of them, and the Tag prefab's too
- C. Stand A's and Stand B's
- D. Stand A's, Stand B's and the Sale Tag's

**Q43.** (Assets: version control) Which is NOT one of version control's primary
purposes?

- A. a smaller, faster build
- B. history
- C. rollback
- D. working together

**Q44.** (Assets: version control) You commit a new `Coin.png`, but not
`Coin.png.meta`. A teammate pulls, and every prefab that uses the picture shows it as
missing. Why?

## Answers

| Q | Answer | Why | Review |
| --- | --- | --- | --- |
| 1 | B | A has the members, but never says it's an `IHighlightable`, so `GetComponentInParent` finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile: an interface has nothing to override (CS0115). | C# 10 |
| 2 | the `GameObject.Find` line | The counter already announces each change: delete the line, and let a combo text subscribe to `ComboChanged`. | C# 10 |
| 3 | C | A names the event like a handler; B isn't the past tense; D isn't PascalCase. | C# 18 |
| 4 | D | A has the word `private`; B is a public field; C's `bool` isn't a question. | C# 18 |
| 5 | `Picked up, healed twice`, then `True` | The object is a `BigPotion`, so its `Use` runs, and each `base.Use()` runs the version one level up first. A big potion is a kind of potion. | C# 8 |
| 6 | C | A doesn't compile (CS0070); B subscribes again every frame, so one death plays the sound hundreds of times; D's lambda is a new method, so its `-=` takes nothing off. | C# 2 |
| 7 | — | Add the Results scene to the Scene List, in **File → Build Profiles**: code can only load a scene that's in it. | C# 12 |
| 8 | B | The time scale belongs to the whole game, not to a scene: set it back to 1 before loading. `Update` and the UI keep running; animations and particles on scaled time don't. | C# 12 |
| 9 | — | 1 a `static` property: it's for this run only. 2 PlayerPrefs: a small setting. 3 a JSON file: game data, with a list in it. | C# 14 |
| 10 | `Laps: 6` | With domain reload off, a static keeps last run's value: 3, then 3 more. A `[RuntimeInitializeOnLoadMethod]` reset fixes it. | C# 11 |
| 11 | C | A can't tell which type to make (CS0411); `SaveData` has no constructor that takes text (B); `ToJson` goes the other way, and isn't generic (D). | C# 14 |
| 12 | D | The reference isn't the action: its `.action` is (A is CS1061). B doesn't say which type to read; C: `performed` is an event. | C# 3 |
| 13 | B | A Canvas Group's **Alpha** fades it and everything under it, and **Blocks Raycasts** stops the clicks. The others lay out or clip. | C# 12 |
| 14 | C | Shared data that a designer tunes, and that doesn't change while playing, goes in an asset; what changes belongs on the object. In A, changes made while playing stay in the asset. | C# 5 |
| 15 | D | They share a capability, not code, and none is a kind of another. A is impossible: a class has one base class, and theirs is `MonoBehaviour`. | C# 9 |
| 16 | A | An interface has no fields and no bodies (C), and is implemented without `override` (D). | C# 9 |
| 17 | `6 0 1` | `stock["Lemon"] = 6` replaces the 4; Mango is removed, so `TryGetValue` gives 0; one pair is left. | C# 6 |
| 18 | — | 1 a `Queue`; 2 a `Stack`; 3 a `Dictionary<string, Card>`; 4 an array. | C# 6 |
| 19 | — | 1 `int`; 2 `float`; 3 `bool`; 4 `string`. | C# 6 |
| 20 | — | A `float` isn't exact: `0.1f` is a little more than 0.1, and ten of them don't land exactly on 0. Count whole hit points in an `int`, or check `<= 0f`. | C# 6 |
| 21 | — | Hide the button in a Web build: a page can't close the browser's tab. `quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);` | your game's last chapter |
| 22 | B | A build opens with the scene at index 0, in **File → Build Profiles**. The open scene only decides where **Play** starts in the Editor (A). | C# 12 |
| 23 | C | Anchors together at a corner keep the size and the distance from that corner. B and D stretch it. | C# 7 |
| 24 | B | An element scales around its pivot: at (0.5, 0), the bottom edge stays put. A grows it downwards only; anchors don't decide how it scales. | C# 7 |
| 25 | D | Two `int`s divide to a whole number: `3 / 4` is 0 (A), and B casts too late. C sets 3: a full bar. | C# 7 |
| 26 | — | Set the text only when the coins change: the wallet raises an event, and the counter listens. Every frame makes a new string and rebuilds the Canvas, for nothing. | C# 7 |
| 27 | A | A `for` loop has one `i`, read when the button is clicked: `fruits.Length` by then, past the end, so B throws an `IndexOutOfRangeException`. The copy gives each lambda its own. C and D don't compile. | C# 2 |
| 28 | A | A UnityEvent is wired in the Inspector, so a designer can change it. B is wired in code; C checks every frame for nothing; D ties the script to one panel. | C# 2 |
| 29 | B | The second argument, `this`, is the context: click the message, and that kart lights up. | C# 19 |
| 30 | `Added 4`, `Skipped x` (a warning), `Added 6`, `Total: 10` | `int.Parse("x")` throws before its `Debug.Log` runs; the `catch` logs, and the loop goes on. | C# 13 |
| 31 | — | `Produce` takes a `float` here, and an `int` in `Generator`. So it overrides nothing (CS0115), and `Produce(int)` is still missing (CS0534). | C# 19 |
| 32 | — | Add `using JuiceWorks.Shop;` at the top of `Wallet.cs`: the class's full name is now `JuiceWorks.Shop.ShopWindow`. | C# 10 |
| 33 | — | The **Settings Panel** field was left empty in the Inspector. Drag the panel into it. | C# 13 |
| 34 | D | For a missing key, `TryGetValue` returns `false`, and the `out` variable holds its default: `null` for a class. Check the result, and warn about the id. | C# 6 |
| 35 | A | A refactor changes how code is written, never what it does. B, C and D change what the game does. | C# 18 |
| 36 | — | They're lost: Unity saves Inspector values by field name. Add `[FormerlySerializedAs("s")]`, from `UnityEngine.Serialization`, to the field. | C# 18 |
| 37 | — | 1 the Profiler; 2 the Frame Debugger; 3 the Memory Profiler. | C# 17 |
| 38 | B | A still builds a new string every frame; C only measures; D runs just as often. | C# 17 |
| 39 | A | A prefab field typed as a component gives back that component, on the new copy. | C# 4 |
| 40 | — | It's an override, kept by that instance only. Apply it: the **Overrides** drop-down → **Apply All**, or right-click **Value** and apply it to the prefab. | C# 4 |
| 41 | D | A change to Tag reaches everything built on it, but the Sale Tag's own colour, an override, wins. | C# 4 |
| 42 | C | An override applied to Stand reaches every Stand. The Sale Tag isn't a Stand, and Tag is underneath, so it doesn't change. | C# 4 |
| 43 | A | Version control keeps the project's history; it doesn't change the build. | C# 1 |
| 44 | — | The `.meta` file holds the GUID that the prefabs use to find the picture. Without it, Unity makes a new `.meta` with a new GUID. Commit an asset and its `.meta` together. | C# 1 |

## Practice paper

Twenty questions, in the exam's styles and from all four of its domains. Give yourself
**30 minutes**, with no book and no Unity, then mark it with the answers that follow.
14 or more right is a good sign you're ready; under 14, go back to the chapters for the
objectives you missed (C# 20 names them), and try again a few days later.

**P1.** What does this print?

```csharp
Queue<int> waves = new Queue<int>();
waves.Enqueue(3);
waves.Enqueue(5);
waves.Enqueue(8);
Stack<int> undo = new Stack<int>();
undo.Push(waves.Dequeue());
undo.Push(waves.Peek());
Debug.Log($"{waves.Count} {undo.Pop()} {undo.Count}");
```

**P2.** Attack, heal and shield cards each have a name, a cost and a picture, and each
does something different when it's played. Which design fits best?

- A. an interface `ICard`, with the fields copied into each class
- B. one class, with an `if` for each kind
- C. an abstract base class `Card`, with the shared fields and `public abstract void Play();`
- D. three unrelated classes

**P3.** `Scorer` declares `public event Action<int> ScoreChanged;`, and nobody may be
listening yet. Which line raises it safely?

- A. `ScoreChanged.Invoke(score);`
- B. `ScoreChanged?.Invoke(score);`
- C. `ScoreChanged = score;`
- D. `ScoreChanged += score;`

**P4.** Code adds rows to a Scroll View's **Content**. They must stack in a column, 10
units apart, and **Content** must grow with them, so that the list scrolls. What goes on
**Content**?

- A. a Grid Layout Group and a Mask
- B. a Horizontal Layout Group
- C. a Canvas Scaler
- D. a Vertical Layout Group (**Spacing** 10) and a Content Size Fitter (**Vertical Fit: Preferred Size**)

**P5.** `Vehicle` is abstract; `Kart` is built on it, and `TurboKart` on `Kart`. Which
line doesn't compile?

- A. `Vehicle vehicle = new Kart();`
- B. `Vehicle vehicle = new Vehicle();`
- C. `Kart kart = new TurboKart();`
- D. `List<Vehicle> vehicles = new List<Vehicle>();`

**P6.** A `[System.Serializable]` class has these four fields. Which does
`JsonUtility.ToJson` leave out?

- A. `public int coins;`
- B. `[SerializeField] float bestLap;`
- C. `public List<string> unlockedKarts;`
- D. `public Dictionary<string, int> trophies;`

**P7.** You make a **Gold Coin** from the **Coin** prefab with **Ctrl + D** (**Cmd + D**
on a Mac), not as a variant, and recolour it. Later you add a sparkle to Coin. What
happens to Gold Coin?

- A. nothing
- B. it gets the sparkle and keeps its colour
- C. it gets the sparkle and loses its colour
- D. it becomes a variant

**P8.** A script subscribes `boostAction.action.performed += OnBoost;` in `OnEnable`, for
an action in your own Input Actions asset. Space never calls `OnBoost`, and the Console
is empty. What's missing?

**P9.** Which is true of `SceneManager.LoadSceneAsync("Race")`?

- A. It freezes the game until Race has loaded.
- B. It keeps every object of the old scene.
- C. It loads Race while the old scene keeps running; its `progress` climbs to 0.9, then 1 as Race takes over.
- D. It can load a scene that isn't in the Scene List.

**P10.** A race timer's text changes every frame, in a Canvas with fifty other elements,
and the Profiler shows the whole Canvas rebuilt every frame. What helps most?

- A. a Canvas for every element
- B. a nested Canvas for the timer
- C. a **World Space** Canvas
- D. no Canvas Scaler

**P11.** `UpgradeButton` subscribes to a static event, `Wallet.MoneyChanged`, in
`OnEnable`, and has no `OnDisable`. Its handler runs `button.gameObject.SetActive(money >= price);`.
After **Restart** reloads the scene, the next change of money gives
`MissingReferenceException: The object of type 'UnityEngine.UI.Button' has been destroyed but you are still trying to access it.`
What's the cause, and the fix?

**P12.** A script's `Start` calls `coinPrefab.SetValue(5);`, where `coinPrefab` is a
`[SerializeField] Coin` holding the Coin prefab, then makes coins with `Instantiate`.
What happens?

- A. The prefab asset changes: in the Editor, the coins it makes are worth 5, even after Play stops.
- B. Only the first coin made is worth 5.
- C. Nothing: a prefab can't be changed from code.
- D. A compile error: a prefab field is read-only.

**P13.** A stand's `Update` is slow, but the Profiler's Hierarchy shows only
`JuiceStand.Update`, not the methods it calls. What do you switch on, briefly?

- A. the Frame Debugger
- B. **Collapse**
- C. **Error Pause**
- D. **Deep Profile**

**P14.** A finish line has `[SerializeField] UnityEvent<int> onLapCompleted;`. In its
**On Lap Completed (Int32)** list, you choose `LapText.Show(int lap)`. Where in the list
of methods, so that it receives the lap?

- A. under **Static Parameters**
- B. anywhere
- C. under **Dynamic int**
- D. nowhere: a UnityEvent can't pass a value

**P15.** You import a lead's module from a `.unitypackage`, and the Console says `error
CS0101: The namespace '<global namespace>' already contains a definition for
'Countdown'`. The module's `Countdown` and yours are different classes. What do you do?

- A. Delete the module's `Countdown`.
- B. Rename yours, and ask the module's owner for a namespace.
- C. Edit the module to use yours.
- D. Import the package again.

**P16.** Which order of `catch` blocks lets each one run?

- A. `FileNotFoundException`, then `IOException`
- B. `IOException`, then `FileNotFoundException`
- C. `Exception`, then `IOException`
- D. any order: C# picks the best fit

**P17.** Which folder stays out of a Unity project's Git repository?

- A. `Assets/`
- B. `Packages/`
- C. `ProjectSettings/`
- D. `Library/`

**P18.** You're refactoring an intern's script to fit the style guide. Which way of
working is safest?

- A. every change at once, then one test
- B. fixing the bugs you notice as you rename, in the same commit
- C. one small change at a time: save, check the Console, test, commit
- D. renaming the script's file in Finder, to save time

**P19.** What does this print?

```csharp
int cups = 7;
int stands = 2;
float price = 1.5f;
Debug.Log(cups / stands);
Debug.Log(cups / (float)stands);
Debug.Log(cups * price);
```

**P20.** Your game saves to `Application.persistentDataPath`, and the save works in the
Web build on itch.io. A player clears the site's data in their browser. What happens?

- A. The save is gone.
- B. Nothing: the save is in the game's Assets folder.
- C. The save moves to the player's Documents.
- D. Only the PlayerPrefs are deleted.

## Practice paper answers

| P | Answer | Why | Objective |
| --- | --- | --- | --- |
| 1 | `2 5 1` | 3 goes onto the stack; `Peek` copies the 5 without taking it; `Pop` takes that 5 back off, and leaves one. | Programming: data structures |
| 2 | C | Kinds of one thing that share fields: a base class, with what differs `abstract`. | Programming: inheritance vs. interfaces |
| 3 | B | With no listeners the event is `null`, and A throws a `NullReferenceException`. C and D don't compile. | Programming: code for a task |
| 4 | D | The group stacks the rows; the fitter makes Content as tall as they are, so the Scroll Rect knows how far to scroll. | UI: anchors, pivots and groups |
| 5 | B | An abstract class can't be made with `new` (CS0144), but it's a fine type for a variable. | Debugging: compile errors |
| 6 | D | JsonUtility leaves a `Dictionary` out, with no error: save two lists instead. A `[SerializeField]` field is saved. | Programming: saving data |
| 7 | A | A duplicate has no link to Coin; only a variant keeps one to its base. | Assets: nested prefabs and variants |
| 8 | — | Enabling the action map: `boostAction.action.actionMap.Enable();`. Your own asset's actions start disabled, and a disabled action never fires, with no error. | Programming: code for a task |
| 9 | C | That's what lets a bar fill and a curtain fade while the next scene loads. | Programming: scene transitions |
| 10 | B | A nested Canvas rebuilds only itself. A Canvas for every element costs more, not less. | UI: displaying data |
| 11 | — | The static event still holds the old scene's `UpgradeButton`, whose button was destroyed with the scene. Unsubscribe with `-=` in `OnDisable`. | Debugging: null variables |
| 12 | A | Change the copy that `Instantiate` returns, never the prefab field. | Assets: prefabs in a scene |
| 13 | D | Deep Profile times every C# method, but slows everything down: switch it off afterwards. | Debugging: profiling tools |
| 14 | C | A dynamic method receives the event's value; a static parameter is typed in once. | UI: UnityEvents |
| 15 | B | Never edit or delete the module: its next version would be imported over your change. | Programming: integrating a lead's code |
| 16 | A | C# takes the first `catch` that fits, so the most specific goes first. B and C don't compile (CS0160). | Debugging: debug messages |
| 17 | D | Unity rebuilds `Library/` from `Assets/` and `Packages/`: it's big, and differs between computers. | Assets: version control |
| 18 | C | When a step breaks something, it's the last one, and you can throw away just that step. | Debugging: refactoring to a standard |
| 19 | `3`, then `3.5`, then `10.5` | Two `int`s divide to a whole number; a `float` on either side keeps the half. | Programming: data types |
| 20 | A | A Web build keeps that folder in the browser's storage, for the website. Test a save in a real Web build. | Programming: builds |

## Level 4 cheat sheet

**Classes and interfaces**

| Write | Means |
| --- | --- |
| `class Bat : Enemy` | a bat **is an** enemy: it has everything `Enemy` has |
| `protected int health;` | this class and its subclasses can use it; other scripts can't |
| `virtual`, `override` | `virtual`: a subclass **may** write its own version; `override`: this is it. The object decides which runs |
| `abstract` | no body: every subclass **must** override it. An abstract class can't be made with `new` |
| `base.Drive();` | runs the version one level up, as well |
| `enemy is Slime slime` | `true`, with a `slime` to use, if it's a slime; `enemy as Slime` gives it, or `null` |
| `public interface IDamageable` | **can do**: members with no bodies, no fields and no access words |
| `class Crate : MonoBehaviour, IDamageable, IHealable` | one base class, then any number of interfaces: every member `public`, with no `override` |
| `GetComponent<IDamageable>()` | whichever component implements it, or `null`. The Inspector can't show an interface field |

A base class for kinds of one thing that share code; an interface for unrelated things
that share a capability. Unity's event functions (`Start`, `Update`…) are never `override`.

**Collections and types**

| | Put in | Take out | Look |
| --- | --- | --- | --- |
| `List<T>` | `Add`, `Insert` | `Remove`, `RemoveAt`, `Clear` | `[i]`, `Count`, `Contains` |
| `Dictionary<K, V>` | `Add` (throws if the key is there), `[key] = value` (replaces) | `Remove(key)` | `[key]` (throws if missing), `TryGetValue(key, out V value)`, `ContainsKey`, `Count` |
| `Queue<T>`: first in, first out | `Enqueue`, at the back | `Dequeue`, from the front | `Peek`, `Count` |
| `Stack<T>`: last in, first out | `Push`, on top | `Pop`, from the top | `Peek`, `Count` |

An array's size never changes (`Length`). A dictionary has no order; a `foreach` over it
gives `KeyValuePair`s, with `.Key` and `.Value`. `Dequeue`, `Pop` and `Peek` throw when
it's empty. `IReadOnlyList<T>` lets others read a list, never change it. Choose `int` for
counts and money, `float` for time and speed (never `==`), `bool` for yes or no, `string`
for ids, and an `enum` for a fixed set.

**Events**

| Code | Does |
| --- | --- |
| `public event Action<int> HealthChanged;` | only its own class can raise it, or set it with `=` (CS0070) |
| `HealthChanged?.Invoke(health);` | raises it; `?.` skips it when nobody listens |
| `+= OnHealthChanged` in `OnEnable`, `-= OnHealthChanged` in `OnDisable` | subscribe and unsubscribe, as a pair. A lambda's `-=` takes nothing off |
| `button.onClick.AddListener(() => Buy(fruit));` | a lambda: a method with no name. In a `for` loop, copy `fruits[i]` first |
| `[SerializeField] UnityEvent<int> onLapCompleted;` | wired in the Inspector (**Dynamic int** receives the value); `onLapCompleted.Invoke(lap);` |

C# events between scripts; UnityEvents from a script to whatever a designer wires up.
Names: `HealthChanged`, `OnHealthChanged`, `onWon`.

**Static, scenes and saving**

| Code | Does |
| --- | --- |
| `const int MaxLaps = 9;`, `static readonly Color Gold` | never changes; set once |
| `public static int Coins { get; private set; }` | one copy: survives loading a scene and, with **Reload Scene only**, a new Play |
| `[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]` | on a `static void` method: resets statics as Play starts |
| `SceneManager.LoadScene("Results");` | switches at the start of the next frame, and freezes while it loads |
| `SceneManager.LoadSceneAsync("Results")` | loads behind the running scene: `progress` climbs to 0.9, then 1; `isDone` |
| `SceneManager.GetActiveScene().name` | the open scene: load it again to restart |
| `PlayerPrefs.SetInt(key, value)`, `PlayerPrefs.GetInt(key, defaultValue)` | small settings; also `Float`, `String`, `HasKey`, `DeleteKey`, `Save()`. A `bool` is 1 or 0 |
| `JsonUtility.ToJson(data, true)`, `JsonUtility.FromJson<SaveData>(json)` | the public and `[SerializeField]` fields of a `[System.Serializable]` class: no `Dictionary`, property, static or asset |
| `Path.Combine(Application.persistentDataPath, "save.json")` | the game's own folder: on the Web, the browser's storage |
| `File.Exists`, `File.ReadAllText`, `File.WriteAllText` | catch `IOException`; damaged JSON throws an `ArgumentException` |

Only scenes in the Scene List (**File → Build Profiles**) load; index 0 opens the build.
Set `Time.timeScale = 1f` before leaving a pause. A choice for the next scene goes in a
static, a setting in PlayerPrefs, and game data in a JSON file, with a `version`.

**Exceptions:** `try` what might fail; `catch (FormatException exception)` the types
you expect, most specific first (CS0160), never empty; `finally` runs whatever happened.
Check first where you can: `int.TryParse`, `File.Exists`, `TryGetValue`.
`FormatException`: `int.Parse("three")`. `KeyNotFoundException`: a missing key.
`ArgumentException`: `Add` twice, or damaged JSON. `InvalidOperationException`: an
empty queue or stack, or a collection changed in its own `foreach`.
`UnassignedReferenceException`: an empty Inspector field. `MissingReferenceException`:
a destroyed object.

**ScriptableObjects, Input Actions and pooling**

| Code | Does |
| --- | --- |
| `[CreateAssetMenu(fileName = "New Kart Stats", menuName = "Karts/Kart Stats")]`, on `class KartStats : ScriptableObject` | assets for shared data, from **Assets → Create**. Changes made while playing stay in the asset |
| `[SerializeField] InputActionReference boostAction;` | an action from an Input Actions asset; `boostAction.action` is the action itself |
| `boostAction.action.performed += OnBoost;` | `void OnBoost(InputAction.CallbackContext context)`; also `started` and `canceled` |
| `boostAction.action.actionMap.Enable();` | your own asset's actions start disabled. For a pause, disable one map and enable the other |
| `steerAction.action.ReadValue<Vector2>()` | a Value action, read every frame |
| `PerformInteractiveRebinding(bindingIndex)` … `.Start()` | the player picks a key; `Dispose()` the operation when it's done |
| `SaveBindingOverridesAsJson()`, `LoadBindingOverridesFromJson(json)` | keep the new keys in PlayerPrefs; load them in `Awake` |
| a pool's Get: `Pop()` a sleeping object, or `Instantiate` one; `SetActive(true)` | reset everything the last use changed |
| a pool's Release: `SetActive(false)`, then `Push` | once per use, never twice |

**Prefabs**

| Thing | Rule |
| --- | --- |
| a nested prefab | keeps its own link: change the inner prefab, and every outer one follows |
| a variant (**Assets → Create → Prefab Variant**) | its base, plus its own changes: base changes reach it, except where it overrides |
| a duplicate (**Ctrl + D**) | no link at all |
| an override | an instance's own value, in bold with a blue line. **Apply** sends it to a prefab; **Revert** takes the prefab's |
| a change | reaches everything built on top of where you made it, never underneath; an override wins |
| `Coin coin = Instantiate(coinPrefab, parent);` | change `coin`, the copy, never `coinPrefab` |

**Profiling** (**Window → Analysis**): slow frames, a stutter or garbage every frame,
the **Profiler** (CPU Usage, the Hierarchy, **GC Alloc**; **Deep Profile** briefly); the
wrong drawing order, draw calls or overdraw, the **Frame Debugger**; high memory or big
textures, the **Memory Profiler** (the `com.unity.memoryprofiler` package).

**Git:** version control is for history, rollback, working together and backup. Commit
`Assets/` with every `.meta` (it holds the GUID), `Packages/` and `ProjectSettings/`; the
Unity `.gitignore` leaves out `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` and
`Builds/`. **Force Text** and **Visible Meta Files** on. Discard what isn't committed;
revert a commit with a new one. Branch to try an idea, then merge. One person per scene.

**Level 4's compile errors**

| Code | Means | Fix |
| --- | --- | --- |
| CS0534 | a class doesn't override an abstract member it inherits | write it, with `override` |
| CS0115 | an `override` matches nothing above it: a typo, or other parameters | match the base method's name and parameters |
| CS0535 | a class lacks a member of its interface | write it: `public`, with the same name and types |
| CS0144 | `new` on an abstract class or an interface | `new` a class built on it |
| CS0070 | an event set with `=`, or raised, outside its class | only `+=` and `-=` from outside |
| CS0101 | two classes with one name, often after an import | delete the copy, rename yours, or use a namespace |
| CS1061 | the type has no member of that name | fix the typo or the type, or write the member |
| CS0246 | a type that can't be found | add the `using` for its namespace, or fix its name |

## Before Level 5: can you…

- Build a family of classes with `abstract`, `virtual`, `override` and `base.`, and say
  which version runs through a variable of the base type?
- Write an interface for unrelated classes, find it with `GetComponent`, and say when it
  beats a base class?
- Choose the right collection for a job, and the right type for every value?
- Announce with a C# event, subscribe and unsubscribe in pairs, and wire a UnityEvent?
- Fade between scenes, carry a choice into the next one, and keep settings in
  PlayerPrefs and progress in a JSON file that survives being damaged?
- Make ScriptableObject assets for shared data, and an Input Actions asset players can
  rebind?
- Lay out a screen that fits a phone and a tablet, with anchors, pivots and groups?
- Predict what a change to a nested prefab or a variant reaches?
- Plug a lead's module in without changing it, and refactor to the style guide in small
  commits?
- Read Level 4's compile errors from the Console alone, and pick the right profiling
  tool?
- Score 14 or more on the practice paper in 30 minutes?

If yes, you're ready for the **Unity Certified Associate: Programmer** exam, and for
Level 5, where the work turns to architecture and performance: systems that stay clean
and fast as a game grows. You'll write generic classes and methods of your own, use LINQ
and learn when not to, wait with `async` and `await`, and organise code with the SOLID
principles and the design patterns games use; and you'll load assets with Addressables,
and direct cameras and cutscenes with Cinemachine and Timeline.
