---
title: "Juice Tycoon"
subtitle: "Level 4: Junior"
author: "Unity Programmer Curriculum  ·  Level 4"
coverEyebrow: "Level 4 · Junior · Learn to Code · Make Games"
coverTop: "Juice"
coverRed: "Tycoon"
coverSub: "An idle tycoon game, made for a phone: five juice businesses by the sea, managers and upgrades, money that keeps coming while you're away, a new beach for Juice Stars, ads, and the achievements written by your lead."
coverPill: "Level 4 Workbook · Juice Tycoon"
coverCaption: "3 scenes · 5 businesses · 19 upgrades · 1 lead's module"
coverArt: image
coverImage: cover.png
footer: "Juice Tycoon  ·  Level 4 Workbook"
---

# Part 0 — Before You Start

## What you're going to build

An **idle tycoon game**, made the way phone games are: tall, played with one thumb, and
still earning while it's closed. You run a juice business by the sea. You start with one
lemonade cup: tap it to squeeze, and sell. Buy more cups, then a beach stand, a smoothie
bar, a juice shop and a juice factory. Hire managers so they squeeze by themselves, buy
fruit recipes and faster juicers, and send out a delivery van. When you come back
tomorrow, your managers have been working. When the growth slows, sell up and **open a
new beach**: you start again, faster, with **Juice Stars**.

**Five businesses**, each with its own picture, price and speed:

| Business | First one costs | Each costs more by | One cycle | Each one earns a cycle |
| --- | --- | --- | --- | --- |
| **Lemonade Cup** | $4 | ×1.07 | 1 s | $1 |
| **Beach Stand** | $60 | ×1.15 | 3 s | $60 |
| **Smoothie Bar** | $720 | ×1.14 | 6 s | $540 |
| **Juice Shop** | $8,640 | ×1.13 | 12 s | $4,320 |
| **Juice Factory** | $103,680 | ×1.12 | 24 s | $51,840 |

**The loop:**

- **Squeeze:** tap a business, on the beach or in its row, to start a **cycle**. When its
  bar fills, it sells: the money goes up, and a "+$" number rises from the business.
- **Buy:** every business costs more with each one you own; buy **×1, ×10, ×100** or
  **Max**. Every one you own adds to what a cycle earns, and owning 25, 50, 100, 200, 300
  or 400 of one doubles its earnings each time.
- **Upgrades:** fruit recipes make a business earn three times as much; better equipment
  makes it squeeze twice as fast. **Managers** are upgrades too: a business with a
  manager squeezes by itself.
- **The delivery van** opens with your first Juice Factory, drives along the road, and
  earns by itself. **Bigger Van** levels it up.
- **The bonus balloon** floats across the sky every couple of minutes: tap it for a
  minute's income, or double income for 30 seconds.
- **While you're away,** every business with a manager, and the van, keep earning, for up
  to 8 hours. Coming back shows **Welcome back**, and what each of them made.
- **A new beach:** everything you've ever earned turns into **Juice Stars**, each worth
  **+5 %** on everything, for good. Your businesses, upgrades and money start again.
- **Trophies:** twelve of them, from *First Sip* to *New Horizons*, some with a reward.
- **Ads,** always the player's choice: watch one to double what you made while away, or
  to double your income for five minutes.

**Three scenes:** the **Title**; the **Report**, which says *Welcome back* or *Your new
beach*; and the **Beach**, the game itself. Your money, businesses, upgrades, stars and
trophies are **saved**, and so is the time, so the game knows how long you were away.

**How to play:**

| Action | Tap or click | Keyboard |
| --- | --- | --- |
| Squeeze a business | the business on the beach, or its picture in the list | 1 to 5 |
| Buy | its row's **Buy** button | |
| How many Buy buys | **×1**, **×10**, **×100**, **Max** | Tab |
| Upgrades, Managers, Trophies | the tabs at the bottom | U, M, T |
| Settings | the cog, top right | Esc |
| Close a panel | its red **×** | Esc |
| Pop the balloon | the balloon | |

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
| Chapter 7 | an **Upgrades shop** written by last summer's intern: it works, but… | refactoring code to fit the standards (Chapter 19) |
| Chapter 9 | Sam's **achievements**, as a package | reading, judging and plugging in code you didn't write |

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
from: you'll meet `JuiceStand`, `Upgrade` and the floating "+$" numbers in the C#
chapters first, then build the real ones.

> **Tip:** you passed the Level 4 entry test, so everything in Levels 0 to 3 is yours:
> properties, coroutines, lists and dictionaries, `static` and `const`, raycasts, UI
> events, the Input System, state machines with `enum` and `switch`, the Animator, and
> naming conventions. Keep the Level 3 cheat sheet next to you.

## The route through this book

| Step | Chapter | You learn | You build |
| --- | --- | --- | --- |
| 1 | C# 1 | Version control with Git | — |
| 2 | Chapter 1 | A repository, `.meta` files, the style guide, cutting a sprite sheet | A project under Git |
| 3 | C# 2 | Canvas scaling, anchors, pivots, layout groups | — |
| 4 | Chapter 2 | A portrait screen, the safe area, a scrolling list | The screen |
| 5 | C# 3 | Nested prefabs, variants, overrides | — |
| 6 | Chapter 3 | A button with four variants, rows and panels, tabs | Buttons and rows |
| 7 | C# 4 | Data assets | — |
| 8 | Chapter 4 | A `StandInfo` for each business, rows made in code | Stand info |
| 9 | C# 5, C# 6 | `event`, `Action`, lambdas; `Queue`, `Stack`, choosing types | — |
| 10 | Chapter 5 | A cycle, a wallet, money as `long` | Squeeze and sell |
| 11 | Chapter 6 | Prices that grow, buttons that know you can't afford them | Buy more |
| 12 | C# 7 | Base classes, `abstract`, `override` | — |
| 13 | Chapter 7 | Three kinds of upgrade, one shop; the intern's code | Upgrades and managers |
| 14 | C# 8 | Contracts | — |
| 15 | Chapter 8 | `IIncomeSource`: a business and a van, both earning | Money per second |
| 16 | C# 9 | Reading, judging and plugging in someone else's code | — |
| 17 | Chapter 9 | A package, a namespace, a contract, three errors | Sam's achievements |
| 18 | C# 10, C# 11 | Static and its risks; loading scenes | — |
| 19 | Chapter 10 | A fader, data between scenes, one scene used two ways | Title, Beach and Report |
| 20 | C# 12, C# 13 | `try` / `catch`; PlayerPrefs and JSON | — |
| 21 | Chapter 11 | A save file that can't break the game | Save and load |
| 22 | Chapter 12 | Time as a number, a cap, a clock set backwards | While you were away |
| 23 | Chapter 13 | A reset that keeps what matters, a Git branch | A new beach |
| 24 | C# 14 | Actions, maps, bindings | — |
| 25 | Chapter 14 | Shortcuts, maps that swap, rebinding, touch for free | Shortcuts |
| 26 | C# 15 | Reusing objects | — |
| 27 | Chapter 15 | A pool of numbers, the balloon, sounds and volumes | Juice and sound |
| 28 | C# 16 | The Package Manager and the Asset Store | — |
| 29 | Chapter 16 | Tweens: each animation in a line | DOTween |
| 30 | Chapter 17 | An interface for ads, pretend and real | Ads |
| 31 | C# 17 | The Profiler, Frame Debugger and Memory Profiler | — |
| 32 | Chapter 18 | Three problems, three tools | Profile it |
| 33 | C# 18, C# 19 | Style guides and refactoring; logs and compile errors | — |
| 34 | Chapter 19 | Small, tested refactoring steps | The intern's code, cleaned up |
| 35 | Chapter 20 | Level 4's mistakes, and Git to undo them | Break it, then fix it |
| 36 | Chapter 21 | Web and PC builds, the Device Simulator, a release tag | A game you can share |
| 37 | Part 6 | The Associate exam | — |
| 38 | Part 7 | Exam-style practice | — |

## For trainers: running a session

Sessions follow the route above, with the same rhythm as Levels 0 to 3:

| Share | Activity | From |
| --- | --- | --- |
| About 20% | **Concept:** teach the idea. Students predict each example's Console output before you run it. | C# Concept chapters |
| About 60% | **Build:** students follow the chapter in Unity, press Play at every checkpoint, and commit. | Build chapters |
| About 20% | **Practice:** the **Do it** exercises, in class or as homework. | C# Concept chapters |

Students join Level 4 by passing the **Level 4 entry test**. Chapters 5, 7 and 9 are the
heart of this book: events and money, inheritance in data, and plugging in code someone
else wrote. Give them the most time. Chapters 2 and 3 build a whole screen of UI by hand;
slower students can finish them at home from the book.

**What you share with your students** is ready in the course project's
`Student Files/Level 4 - Juice Tycoon` folder, one folder for each row: zip it, and share
it.

| When | What |
| --- | --- |
| Before Chapter 1 | the `Art` and `Audio` folders, `CREDITS.md` and `STYLE_GUIDE.md` |
| Chapter 4 | `BALANCE.md`, the economy designer's balance sheet |
| Chapter 7 | `UpgradeShop.cs`, the intern's script |
| Chapter 9 | `Juice Tycoon Achievements 1.0.unitypackage`, Sam's module, and its README |

Two things they get themselves. In Chapter 16, **DOTween** from the Asset Store, with
their own free Unity account: tell them before Chapter 16. In Chapter 17, the **Ads
Mediation** package, from Unity's Package Manager. Chapter 17 has one optional step that
needs **Android Build Support**, a big download: students without it skip that step.

Your trainer project has the finished game, and a menu item that builds it from scratch:
**Tools → Juice Tycoon (Level 4) → Build Scenes**. Use it to show the goal on the first
day, or to rescue a project that's beyond repair.

## The pieces we'll build

Sixty scripts, in ten folders. Most are short; a few grow through the book.

```
Business ── StandInfo ──────── one business's numbers, in an asset
            JuiceStand ─────── one business on the beach: owned, cycle, upgrades
            Wallet ─────────── the money, and what you've earned in your life
            CostMath ───────── what the next one costs, and the next ten
            NumberFormat ───── 1.25K, 12.5M, 125B; 3 h 05 min

Upgrades ── Upgrade ────────── abstract: an id, a name, a price, a target
            PriceUpgrade ───── a fruit recipe: earn ×3
            SpeedUpgrade ───── better equipment: squeeze ×2 as fast
            ManagerUpgrade ─── a manager: squeezes by itself
            UpgradeLibrary ─── every upgrade, found by id
            Upgrades ───────── which are bought, and buying one

Income ──── IIncomeSource ──── anything that earns by itself
            IncomeSources ──── all of them, in one list
            DeliveryVan ────── drives, delivers, levels up: an IIncomeSource too
            IncomeBonus ────── the stars' +5 %s, and a ×2 boost
            BonusBalloon ───── floats across the sky; tap it
            BalloonSpawner ─── sends it, pays its reward

Trophies ── GameStats ──────── the numbers Sam's achievements count
            ToastMessage ───── one message waiting to be shown
            Toast ──────────── slides down, waits, slides back up
            ToastQueue ─────── the messages, one at a time
            TrophiesPanel ──── every trophy, won or not
            TrophyRow ──────── one of them

Flow ────── Session ────────── what one scene leaves the next (static)
            Report ─────────── Welcome back, or Your new beach
            SceneFader ─────── fades between scenes
            SafeArea ───────── keeps the screen clear of a phone's notch
            TitleScreen ────── the Title's buttons
            ReportScreen ───── the Report scene
            BeachGame ──────── loads the save, autosaves
            AwayEarnings ───── what you earned while you were away
            NewBeach ───────── the stars, the reset, what's kept
            NewBeachPanel ──── the New Beach tab
            PanelSwitcher ──── one panel open at a time

Save ────── SaveData ───────── what the save file holds
            SaveSystem ─────── reads and writes it, safely
            GameSettings ───── PlayerPrefs, with named keys
            SettingsPanel ──── volumes, keys, Delete Save
            RebindRow ──────── choose a new key

UI ──────── MoneyText ──────── the money, counting up
            IncomeText ─────── +38.2K / s
            StarsText ──────── your Juice Stars
            StandRow ───────── one business in the list
            StandList ──────── makes the rows
            BuyAmountBar ───── ×1, ×10, ×100, Max
            VanRow ─────────── the van's row
            UpgradeRow ─────── one upgrade in the shop
            UpgradesPanel ──── the shop (the intern's first, then yours)

Juice ───── FloatingNumber ─── a "+$" that rises and fades
            NumberPool ─────── floating numbers, reused
            StandSprite ────── a business on the beach: tap it
            PunchOnClick ───── every button bounces
            SoundPlayer ────── squeezes, coins, jingles
            MusicPlayer ────── the scene's music

Ads ─────── IAdService ─────── show an ad, whoever shows it
            PretendAds ─────── a countdown where an ad would be
            LevelPlayAds ───── Unity LevelPlay's ads
            AdServiceProvider ─ picks one
            BoostOffer ─────── the TV button: ×2 for 5 minutes

Input ───── Shortcuts ──────── the keys, and the maps they swap
```

Sam's module brings five more, in their own folder: `AchievementTracker`, `Achievement`,
`IStatSource`, `Stat`, and a `Toast` of Sam's own.

## One-time setup

- **Unity 6** (6000.6), with a new project made from the **Universal 2D** template, as for
  Arcane Duel. Call it `Juice Tycoon`. The **Input System** package comes with it, and so
  does the UI (uGUI) with TextMeshPro.
- **Git and GitHub Desktop.** Install **GitHub Desktop** from desktop.github.com (it
  brings Git with it), and make a free account on github.com. Chapter 1 sets up the
  rest.
- **WebGL and PC builds** (Chapter 21): in the **Unity Hub**, **Installs**, the cog next
  to your Unity 6 → **Add modules**, tick **Web Build Support**, and the build support for
  your computer (**Mac Build Support** or **Windows Build Support**) if it isn't there.
- **A free Unity account** (Chapter 16), to get DOTween from the Asset Store. You already
  sign in to the Unity Hub with one.
- **Art and sound:** your trainer shares two folders, `Art` and `Audio`, holding every
  file this book uses, each pack's licence beside them. `CREDITS.md` names them all:
  - **Fluent Emoji** by Microsoft: the businesses, the fruit, the van, the balloon, the
    coins and the icons, 42 pictures in a soft 3D style.
  - **Free Game GUI** by pzUH: the candy buttons, the panels, the ribbons, the bars.
  - **Free Beach game background** by bevouliin: the sky, the sea and the grass.
  - **Lilita One**, a font by Juan Montoreano, under the SIL Open Font License.
  - **Ninja Adventure** by Pixel-Boy and AAA: the sounds and the music.

  The GUI, the beach and the sounds are CC0: free to use for anything. The emoji are under
  the MIT License, which asks one thing: its licence file goes with them
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
account, with the studio's style guide beside it; the emoji, the beach and the font
imported; and the GUI's two big sheets cut into the named pieces the game uses.

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
| `Assets/` (with every `.meta` file) | **yes** | your work: scripts, scenes, prefabs, pictures |
| `Packages/manifest.json`, `packages-lock.json` | **yes** | which packages the project uses |
| `ProjectSettings/` | **yes** | the project's settings |
| `Library/`, `Temp/`, `Logs/`, `obj/`, `UserSettings/` | no | Unity rebuilds them |
| `Builds/` | no | anyone can make a build from the project |

The second half of the chapter is about **sprite sheets**. A game's buttons and panels
often come as one big picture with dozens of pieces on it. Unity can cut such a sheet
into many sprites, each with its own name, and remember the cuts in the picture's `.meta`
file.

### Do it — the repository

1. In the **Unity Hub**, **New project**, choose Unity 6 and the **Universal 2D**
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
| Methods that an event or Unity calls start with `On` | `OnCupSold` |
| Fields set in the Inspector are `[SerializeField]` and private: never `public` | `[SerializeField] long baseCost = 4;` |
| A number that means something gets a name | `const double MaxSeconds = 8 * 60 * 60;` |
| One class per file, named after it | `JuiceStand.cs` |
| Subscribe in `OnEnable`, unsubscribe in `OnDisable` | |
| Not allowed: `var`, `GameObject.Find`, `FindObjectOfType`, `public` fields | |

8. In GitHub Desktop, the Changes tab shows `STYLE_GUIDE.md`. Commit it: *Add the studio's
   style guide*.

### Do it — the emoji, the beach and the font

9. Your trainer shares two folders, `Art` and `Audio`. Drag both into Unity's **Project**
   window, into `Assets`. In the 2D template every picture comes in as a **Sprite (2D and
   UI)**, ready for the screen. Give it a minute.
10. **The emoji.** Open `Art/Emoji`: 42 pictures, each 256 pixels square. Click the first,
    **Shift**-click the last, and the Inspector edits all of them at once. **Pixels Per
    Unit** `128`, then **Apply** at the bottom. A Sprite Renderer draws a sprite at its
    pixels per unit: at 128, a 256-pixel emoji is 2 units across on the beach, the size
    of a business. A UI Image ignores it, so the same emoji works on the screen too.
11. **The beach.** Select `Art/Background/Beach`: a sky, the sea and a strip of grass,
    3072 × 1536 pixels. Its **Max Size** is 2048, Unity's default, so Unity would shrink
    it. The artist asked for every pixel, and no blotches in the sky: set **Max Size**
    `4096` and **Compression** `None`, and **Apply**. (Chapter 18 looks at what that
    costs.)
12. **The font.** Select `Art/Fonts/LilitaOne-Regular`, then **Assets → Create →
    TextMeshPro → Font Asset → SDF**. Unity asks to import the **TMP Essentials** the
    first time: **Import**, then make the font asset again. `LilitaOne-Regular SDF` is the
    game's one font: round and bold, like the buttons.
13. **The font's shadow.** Big white words on a candy button need an edge to stand out.
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

14. Select `Art/GUI/Buttons`. It's one picture, 2399 × 1822, holding every button and icon
    of the pack: candy buttons in four colours, a grid of square icon buttons, and more.
    In the Inspector, **Sprite Mode** `Multiple`, **Apply**, then **Open Sprite Editor**.
15. In the Sprite Editor, open the **Slice** menu at the top. **Type** `Automatic`,
    **Pivot** `Center`, **Method** `Delete Existing`, and click **Slice**. Unity finds
    every piece on the sheet by its see-through edges: 185 boxes, named `Buttons_0`,
    `Buttons_1`… Click one: the **Sprite** box, bottom right, shows its **Name** and
    **Position** (**X** and **Y**, from the sheet's bottom-left corner, then **W** and
    **H**).
16. The game uses 13 of them. Click each one below (find it by the picture, then check
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

17. Click **Apply** (top right), and close the Sprite Editor. Open `Buttons` in the
    Project window: 185 sprites, 13 of them with names you can read. The others can stay;
    they cost nothing until something uses them.
18. Do the same for `Art/GUI/Windows` (2000 × 2500: panels, ribbons, bars): **Sprite
    Mode** `Multiple`, **Apply**, **Open Sprite Editor**, **Slice**, **Automatic**. Name
    three pieces, and **Apply**:

| Name | X, Y | What it is | Border |
| --- | --- | --- | --- |
| `Panel` | 824, 660 | a cream panel with a brown edge | 40, 40, 40, 40 |
| `Panel Light` | 1161, 660 | the same, paler | 40, 40, 40, 40 |
| `Ribbon` | 822, 1070 | a red ribbon | 90, 0, 90, 0 |

19. **Why the borders:** a button or a panel gets stretched to many sizes. A **9-slice
    border** cuts the sprite into nine parts: the four corners never stretch, the edges
    stretch one way, and the middle both ways. A 290-wide button and a 600-wide one keep
    the same round corners. The ribbon only stretches sideways, so its ends keep their
    folds.
20. Make the folders the game will need, in `Assets`: `Scripts` (with ten folders in it:
    `Business`, `Upgrades`, `Income`, `Trophies`, `Flow`, `Save`, `UI`, `Juice`, `Ads`
    and `Input`), `Prefabs` (with a `UI` folder in it), `Data` and `Input`. `Scenes` is
    already there.

### Test it

- Drag `Art/Emoji/cup_with_straw_3d` into the **Scene** view: a cup, 2 units across, two
  squares of the grid. Delete it again.
- Right-click the Hierarchy → **UI (Canvas) → Image**. In its **Source Image**, choose
  `Button Green`, set **Image Type** **Sliced**, and make it 600 wide and 120 high: the
  corners stay round. Set it to `Simple`: the corners stretch. Delete the `Canvas` and
  `EventSystem` again.
- In GitHub Desktop, the Changes tab lists every new picture **and a `.meta` file beside
  it**. Click `Buttons.png.meta`: it's text, and among its lines are your names
  (`name: Button Green`) and your borders (`border: {x: 40, y: 34, z: 40, w: 34}`). One line
  near the top says `guid:` followed by 32 letters and numbers. That **GUID** is how Unity
  knows the picture: a scene or a prefab that uses the picture stores its GUID, not its
  name. A sprite cut from the sheet is the GUID plus a number for the piece.
- Find the same `.meta` file in Finder or Explorer: it's next to the picture, hidden from
  Unity's Project window.

> **Watch out:** move or rename assets **in Unity's Project window**, never in Finder or
> Explorer. Unity moves the `.meta` file with the asset. Move one outside Unity, and Unity
> sees a new file, gives it a new `.meta` with a new GUID, and everything that used the old
> one loses it: a missing sprite here, a missing script there. Lose `Buttons.png.meta`,
> and every cut and every name goes with it.

### Commit

*Add the art, sounds and font.* Then **Push origin**, so GitHub has it too.

> **Note:** big binary files (pictures, sounds) make a Git repository grow, since Git
> keeps every version of every file. Big teams use **Git LFS** (Large File Storage), which
> keeps them outside the history. This game's art is about 8 MB, which Git handles well,
> so this book doesn't need it.

### Challenge

Find the pink progress bar on `Windows`, name it `Bar Pink`, and give it a border that
lets it stretch sideways only, like the ribbon. Then, in the **History** tab, find the commit that changed
`Windows.png.meta`.

## C# 2 — UI in Depth

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
growing button doesn't push its neighbours. C# 8 shows a way to do it with no
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

## Chapter 2 — The Screen

**Goal:** the Beach scene's screen, tall like a phone's: the beach across the top, drawn in
the world by the camera; over it a **canvas** with the money and the stars at the top, and
a cream list area covering the bottom 60 %, ready for a row per business; all of it kept
clear of a phone's notch.

### Idea — a phone held upright

Phone games are played upright, so this one is **portrait**: 1080 pixels wide and 1920
tall. Two layers make the screen, as in every 2D game from Level 2 on:

| Layer | Made of | Holds |
| --- | --- | --- |
| **The world** | sprites, drawn by an orthographic camera | the beach; the businesses, the van and the balloon later |
| **The canvas** | UI (C# 2), a **Screen Space – Overlay** canvas | the money, the list, the buttons, the tabs, the panels |

An orthographic camera shows a fixed **height** of the world. At **Size** 10 that's 20
units, whatever the phone: the beach is always the same height on the screen.

The canvas has the opposite problem. Phones are all 1080 or so wide, but their heights
differ: a 9:16 phone is 1920 tall, a 9:20 one 2400. The **Canvas Scaler** keeps the UI's
size from the **width** (**Match** 0): every phone shows the same 1080-wide layout, and a
taller phone gets more list, not smaller buttons.

Then the **notch**. Most phones have a camera cut into the top of the screen, and rounded
corners. Anything under them can't be read or tapped. Unity knows the part of the screen
that's clear: `Screen.safeArea`, a rectangle in pixels. A small script keeps the UI
inside it; the beach and the cream behind the list can go to the edges.

### Do it — the scene and the camera

1. In `Assets/Scenes`, rename `SampleScene` to `Beach` (select it, **F2** on Windows or
   **Return** on a Mac). Open it. It has a **Main Camera** and a **Global Light 2D**:
   keep both. The light lights every sprite; without one, the 2D Renderer would draw them
   dark.
2. In the **Game** view, open the aspect menu (it says **Free Aspect**) and click **+**:
   **Label** `Phone`, **Type** **Fixed Resolution**, **Width & Height** 1080 × 1920, **OK**.
   Choose it. The Game view is now a tall phone screen.
3. Select the **Main Camera**: **Projection** is already **Orthographic**. **Size** `10`.
   Under **Environment**, **Background Type** **Solid Color**, and **Background**
   `#8ED8F5`, the beach's sky blue, for any sky the picture doesn't cover.
4. Drag `Art/Background/Beach` into the **Hierarchy**. **Position** (0, 6.75, 0), **Scale**
   (0.62, 0.62, 1), **Order in Layer** `-10`. At 100 pixels a unit the picture is 30.7 ×
   15.4 units; at 0.62 it's 19 × 9.5: the whole sea and the grass, from the screen's top
   down to y = 2, with the sides cut off by the tall screen.

### Do it — the canvas and the safe area

5. **Edit → Project Settings → TextMesh Pro → Settings**: drag `LilitaOne-Regular SDF`
   into **Default Font Asset**. Every new text uses it from now on.
6. **GameObject → UI (Canvas) → Canvas**. Unity makes a `Canvas` and an `EventSystem`.
   Select the `EventSystem`: it has an **Input System UI Input Module**, the Input
   System's way of pointing at UI. (If it shows the older **Standalone Input Module**
   instead, click **Replace with InputSystemUIInputModule**.)
7. Select the `Canvas`. **Render Mode** stays **Screen Space - Overlay**: drawn over
   everything the camera draws. In its **Canvas Scaler**: **UI Scale Mode** **Scale With
   Screen Size**, **Reference Resolution** 1080 × 1920, **Screen Match Mode** **Match
   Width Or Height**, **Match** `0` (all the way to **Width**).
8. Right-click the `Canvas` → **Create Empty**, `Safe Area`. In its Rect Transform, open
   the anchor presets, hold **Alt** (**Option** on a Mac), and click the bottom-right one,
   **stretch–stretch**: it fills the canvas.
9. In `Scripts/Flow`, a new script, `SafeArea`, and add it to `Safe Area`:

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

10. Read it with the docs open: search the Unity Scripting API for **Screen.safeArea**. It's
    a `Rect` in **pixels**, from the bottom-left corner. Anchors are **fractions** of the
    parent, 0 to 1, so the script divides by the screen's size. With the anchors on the
    safe area's edges and the offsets at zero, the rectangle **is** the safe area. It
    checks every frame, but only does the work when the safe area changed, as when a phone
    turns over.

### Do it — the top bar

11. Right-click `Safe Area` → **Create Empty**, `Top Bar`. Anchor preset **top–stretch**
    with **Alt** and **Shift** (anchor, position and pivot at the top). **Height** `170`.
12. In `Top Bar`, an **Image**, `Money`: anchor **middle–left** with Shift, **Pos** (14, 0),
    **Width** 530, **Height** 150. **Source Image** `Panel Light`, **Image Type**
    **Sliced**.
13. In `Money`, an **Image**, `Coin`: anchor **middle–left** with Shift, **Pos** (18, 0),
    100 × 100, **Source Image** `coin_3d`, **Preserve Aspect** ticked, **Raycast Target**
    off.
14. In `Money`, a **Text - TextMeshPro**, `Money Text`: anchor **top–left** with Shift,
    **Pos** (128, −12), 390 × 78. Text `$0`, size 66, colour `#7A4A1E` (the game's brown),
    aligned left and middle, **Raycast Target** off.
15. In `Money`, another text, `Income Text`: anchor **bottom–left** with Shift, **Pos**
    (128, 14), 390 × 46. Text `Tap to squeeze!`, size 32, colour `#B07A3E` (light brown),
    left and middle, **Raycast Target** off.
16. In `Top Bar`, an **Image**, `Stars`: anchor **middle–left** with Shift, **Pos** (556,
    0), 230 × 150, `Panel Light`, **Sliced**. In it, an Image `Star`: middle–left, **Pos**
    (14, 0), 92 × 92, `glowing_star_3d`, **Preserve Aspect**, no raycast; and a text `Stars
    Text`: middle–left, **Pos** (112, 0), 104 × 80, text `0`, size 58, brown, centred.

    The space between the stars and the right edge is for two buttons: the cog (Chapter
    3) and the ad's TV (Chapter 17).

### Do it — the list area

17. The beach shows at the top; a cream list covers the rest. Right-click `Safe Area` →
    **UI (Canvas) → Image**, `Bottom`. Set its anchors by hand: **Min** (0, 0), **Max**
    (1, 0.604), **Pivot** (0.5, 0), and **Left**, **Top**, **Right**, **Bottom** all 0. **Color**
    `#FCE9BE` (cream). The anchors keep it to the bottom 60.4 % of the safe area: on a
    1920-tall screen its top is at y = 2.08 in the world, just over the beach picture's
    bottom edge, so no gap shows.
18. In `Bottom`, an **Image**, `Edge`: anchor **top–stretch**, then set **Pivot** (0.5, 0),
    **Pos Y** 0 and **Height** 10. **Color** `#B07A3E`. It sits on top of `Bottom`, a
    brown line along the shore.
19. On a phone with a notch the safe area stops short of the screen's bottom too, and the
    beach would show under the list. Right-click the **Canvas** (not the safe area) →
    **UI (Canvas) → Image**, `Under`: anchor **bottom–stretch** with Shift, **Height**
    400, cream (`#FCE9BE`), **Raycast Target** off. Drag it to the top of the Canvas's
    children, so it's drawn first, behind everything.
20. In `Bottom`, **Create Empty**, `Buy Bar`: anchor **top–stretch** with Shift, **Pos Y**
    −10, **Height** 114. In it, a text `Buy`: middle–left with Shift, **Pos** (30, 0), 150 ×
    80, size 52, brown. The ×1, ×10, ×100 and Max buttons go beside it in Chapter 3.
21. In `Bottom`, **Create Empty**, `Stand List`. Anchor **stretch–stretch** with Alt, then
    **Left** 0, **Top** 124, **Right** 0, **Bottom** 190: under the buy bar, above the tabs.
22. Right-click `Stand List` → **UI (Canvas) → Scroll View**. Make it fill `Stand List`
    (**stretch–stretch** with Alt). Then tidy what Unity made:
    - Delete `Scrollbar Horizontal` and `Scrollbar Vertical`: a finger scrolls the list.
    - On `Scroll View`: remove its **Image** component (the list has no frame). In its
      **Scroll Rect**, untick **Horizontal**, **Scroll Sensitivity** `30`.
    - On `Viewport`: if it has a **Mask**, remove it and **Add Component → Rect Mask 2D**.
      It hides the rows that scroll out of the list, more cheaply than a Mask: a rectangle
      needs no stencil. Keep its **Image**, but set its **Color** alpha to 0: invisible,
      but it catches the finger's drag.
    - Rename `Content` to `List`. **Add Component → Vertical Layout Group**: **Padding**
      left 24, right 24, top 18, bottom 24; **Spacing** 14; **Control Child Size** both
      ticked; **Child Force Expand** only **Width**. **Add Component → Content Size
      Fitter**: **Vertical Fit** **Preferred Size**. The layout group puts the rows one
      under another, full width; the fitter makes `List` as tall as its rows, so the
      scroll view knows how far it can scroll.
23. In `Safe Area`, an **Image**, `Tab Bar`: anchor **bottom–stretch** with Shift,
    **Height** 190, **Color** `#F5D79A`. The five tabs go in it in Chapter 3. Make sure
    `Tab Bar` is below `Bottom` in the Hierarchy, so it's drawn over it.

### Test it

- **Play.** Nothing moves yet, but the screen is there: the sky and the sea, the money
  and the stars, a cream list area with its brown edge, and the tab bar at the bottom.
- **Window → General → Device Simulator.** A phone, drawn around the Game view. Choose a
  phone with a notch from the menu at the top (an iPhone 13, say). Play: the top bar moves
  down, clear of the notch, and the tab bar up, clear of the bar along the bottom. The
  sea and the cream still reach the edges. Select `Safe Area` while playing: its anchors
  are no longer 0 and 1.
- Turn the simulated phone on its side (the rotate button): the safe area changes, and
  `SafeArea` follows it. The layout looks odd sideways; the game will stay upright
  (Chapter 21).
- In the Game view, choose the `Phone` size again and change **Match** on the Canvas
  Scaler to 1 (**Height**) while playing, then try the Device Simulator on a tall phone:
  the whole UI shrinks to fit the height. Back to 0.

### Commit

*Add the Beach screen: the top bar, the beach and the list area.*

### Challenge

Make `SafeArea` log the safe area each time it changes, with
`Debug.Log($"Safe area: {applied}")` in `Apply`, and watch the Console while you turn the simulated
phone. Then take the log out again: the style guide says why.

## C# 3 — Prefabs in Depth

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

## Chapter 3 — Buttons and Rows

**Goal:** the pieces every screen of the game is made of, as prefabs: a **Candy Button**
with a green, a grey and a red variant; a square **Icon Button**; a **Progress Bar**; the
**Stand Row** and **Upgrade Row**, built from those; a **Panel** with a variant for each
of the game's five panels; and the tabs along the bottom, opening and closing them.

### Idea — one button, four colours

The game has dozens of buttons, all the same candy shape in four colours. Make one
**Candy Button** prefab, then a **variant** for each other colour: a variant is the
original plus a few overrides, here only its picture. Later a change to the Candy Button
(its press colour, its font, a bounce in Chapter 16) reaches all four at once.

The rows are **nested prefabs**: a Stand Row holds an Icon Button, a Progress Bar and a
green Candy Button, each still linked to its own prefab. Make the Progress Bar's pink a
little darker, and every row's bar changes.

| Prefab | Holds | Variants |
| --- | --- | --- |
| **Candy Button** | the blue button, a label | **Green**, **Grey**, **Red** |
| **Icon Button** | a blue square, an emoji | |
| **Progress Bar** | a back, a pink fill | |
| **Stand Row** | an **Icon Button**, a **Progress Bar**, a **Green** button, the texts, the manager's badge | |
| **Upgrade Row** | a picture, the texts, a **Green** button | |
| **Panel** | the frame, the ribbon, a close button, an empty `Content` | **Upgrades**, **Managers** (a variant of Upgrades), **Trophies**, **New Beach**, **Settings** |

### Do it — the Candy Button and its variants

1. Right-click `Safe Area` → **UI (Canvas) → Image**, `Candy Button`, 290 × 114. **Source
   Image** `Button Blue`, **Image Type** **Sliced**. **Add Component → Button**: in its
   colours, **Pressed** `#D1D1D1` and **Disabled** white (`#FFFFFF`). A button that can't
   be pressed will show it with a grey picture, not a faded one.
2. Right-click `Candy Button` → **UI (Canvas) → Text - TextMeshPro**, `Label`:
   **stretch–stretch** (with Alt), then **Left** 14, **Top** 10, **Right** 14, **Bottom**
   12. Text `Button`, size 44, white, centred both ways, **Raycast Target** off. **Material
   Preset** `LilitaOne-Regular SDF Shadow`: white letters with a brown edge.
3. Drag `Candy Button` into `Assets/Prefabs/UI`. Delete it from the scene.
4. Right-click the `Candy Button` prefab → **Create → Prefab Variant**, and name it
   `Candy Button Green`. Open it (double-click), set its **Source Image** to `Button
   Green`, and go back (the arrow at the top of the Hierarchy). Make `Candy Button Grey`
   (`Button Grey`) and `Candy Button Red` (`Button Red`) the same way.

### Do it — the Icon Button and the Progress Bar

5. In `Safe Area`, an **Image**, `Icon Button`, 122 × 126: **Source Image** `Square Blue`,
   **Preserve Aspect**. **Add Component → Button**. In it, an **Image** `Icon`:
   **stretch–stretch**, **Left** 22, **Top** 20, **Right** 22, **Bottom** 24, **Source
   Image** `star_3d`, **Preserve Aspect**, **Raycast Target** off. Drag it into
   `Prefabs/UI` and delete it from the scene. Each Icon Button in the game sets its own
   emoji: an override.
6. In `Safe Area`, an **Image**, `Progress Bar`, 360 × 36. For **Source Image**, click the
   small circle and choose `UISprite`, Unity's own rounded rectangle. **Sliced**, colour
   `#EAD7AE`. In it, an **Image** `Fill`: **stretch–stretch**, 4 from every side, `UISprite`
   again, colour `#FF4FA3` (pink), and **Image Type** **Filled**: **Fill Method**
   **Horizontal**, **Fill Origin** **Left**, **Fill Amount** 0.6 for now. Slide **Fill
   Amount** between 0 and 1: the bar fills from the left. A script will set it to the
   cycle's progress. Set it back to 0, drag the bar into `Prefabs/UI`, and delete it.

### Do it — the Stand Row

7. In `Safe Area`, an **Image**, `Stand Row`, 1000 × 156, `Panel Light`, **Sliced**. **Add
   Component → Layout Element**: **Preferred Height** 156 and **Flexible Width** 1. The
   list's layout group reads these: every row 156 tall, as wide as the list.
8. Fill it. Every position is from the anchor named, with the pivot moved there too
   (**Shift** with the anchor preset):

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture Button` | the **Icon Button** prefab | middle–left | (14, 0) | 122 × 126 | its `Icon`: `cup_with_straw_3d` |
| `Name` | a text | top–left | (150, −10) | 360 × 52 | `Lemonade Cup`, size 42, brown, left |
| `Owned` | a text | top–left | (150, −60) | 400 × 36 | `owns 1 · next ×2 at 25`, size 27, light brown, left |
| `Manager` | an Image | top–left | (456, −10) | 58 × 58 | `office_worker_3d_default`, Preserve Aspect |
| `Progress Bar` | the **Progress Bar** prefab | bottom–left | (150, 16) | 330 × 36 | |
| `Earnings` | a text | bottom–left | (490, 10) | 200 × 48 | `$1`, size 34, brown, left |
| `Buy Button` | the **Candy Button Green** prefab | middle–right | (−12, 0) | 290 × 124 | |

9. Untick **Raycast Target** on every text and on `Manager`: only the buttons need taps.
10. The Buy button has two lines: what you buy, and its price. Select `Buy Button`'s
   `Label`: **Bottom** 46, **Top** 6, size 38, text `Buy ×1`. Duplicate it (**Ctrl+D**),
   name the copy `Price`: **Top** 58, **Bottom** 10, size 32, text `$4`.
11. Drag `Stand Row` into `Prefabs/UI`, and delete it from the scene. Open the prefab and
    look at the Hierarchy: `Picture Button`, `Progress Bar` and `Buy Button` have blue
    cube icons. They're still the Icon Button, Progress Bar and Candy Button Green prefabs,
    nested inside this one.

### Do it — the Upgrade Row

12. The same way, an `Upgrade Row`: an **Image**, 1000 × 150, `Panel Light`, **Sliced**,
    with a **Layout Element** (**Preferred Height** 150, **Flexible Width** 1):

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture` | an Image | middle–left | (20, 0) | 104 × 104 | `lemon_3d`, Preserve Aspect |
| `Name` | a text | top–left | (140, −12) | 520 × 50 | `Fresh Lemons`, size 40, brown |
| `Description` | a text | top–left | (140, −62) | 520 × 76 | `Lemonade Cup earns ×3.`, size 27, light brown |
| `Buy Button` | the **Candy Button Green** prefab | middle–right | (−12, 0) | 260 × 114 | its `Label`: `$25K` |

13. The names matter: the intern's code, in Chapter 7, finds the row's parts by them.
    Drag it into `Prefabs/UI` and delete it from the scene.

### Do it — the buy bar and the cog

14. In `Buy Bar`, drag in four **Candy Button** prefabs: `×1 Button`, `×10 Button`, `×100
    Button` and `Max Button`. Each: anchor **middle–left** with Shift, 200 × 96, **Pos X**
    190, 408, 626 and 844 (218 apart), **Pos Y** 0. Their labels: `×1`, `×10`, `×100`, `Max`,
    size 42.
15. In `Top Bar`, an **Icon Button** prefab, `Settings Button`: anchor **middle–right**
    with Shift, **Pos** (−14, 0), 126 × 130. Its **Source Image** `Icon Gear`, and untick
    its `Icon` child: pzUH's icons are whole buttons, picture and all.

### Do it — the Panel and its variants

16. Right-click `Safe Area` → **Create Empty**, `Panels`: **stretch–stretch**, **Left** 0,
    **Top** 170, **Right** 0, **Bottom** 178. The panels open in this space, between the top
    bar and the tabs.
17. Right-click `Panels` → **Create Empty**, `Panel`, **stretch–stretch** with no gaps:

| Child | What | Anchor | Set |
| --- | --- | --- | --- |
| `Frame` | an Image | stretch–stretch: **Left** 12, **Top** 60, **Right** 12, **Bottom** 12 | `Panel`, **Sliced**; **Raycast Target** on: a tap on the panel mustn't reach the game behind it |
| `Ribbon` | an Image | top–center with Shift, **Pos** (0, 0), 660 × 128 | `Ribbon`, **Sliced** |
| `Ribbon/Title` | a text | stretch–stretch: **Left** 90, **Top** 10, **Right** 90, **Bottom** 34 | `Panel`, size 50, white, centred, the Shadow preset |
| `Close Button` | the **Icon Button** prefab | top–right with Shift, **Pos** (0, −36), 104 × 108 | **Source Image** `Icon Close`; untick its `Icon` |
| `Content` | an empty | stretch–stretch: **Left** 52, **Top** 160, **Right** 52, **Bottom** 48 | where each panel puts its own things |

18. Drag `Panel` into `Prefabs/UI`, and delete it from the scene.
19. Right-click the `Panel` prefab → **Create → Prefab Variant**, `Upgrades Panel`. Open it:
    rename its root `Upgrades Panel`, set its `Title` to `Upgrades`. In `Content`, a
    scrolling list, made as in Chapter 2: **UI (Canvas) → Scroll View** filling
    `Content`, without its scrollbars or its Image, **Horizontal** off; `Viewport` with a
    **Rect Mask 2D** and an invisible Image; `Content` renamed `List`, with a **Vertical
    Layout Group** (**Spacing** 12, **Control Child Size** both, **Child Force Expand**
    only **Width**) and a **Content Size Fitter** (**Vertical Fit** **Preferred Size**).
    Then, in `Content`, a text `All Bought`: centred, 800 × 200, `Every upgrade is
    bought!`, size 44, brown, centred; untick it at the top of the Inspector. Chapter 19
    shows it when the list is empty.
20. Right-click the `Upgrades Panel` prefab → **Create → Prefab Variant**: a variant of a
    variant. Name it `Managers Panel`; open it, rename its root, set its `Title` to
    `Managers` and its `All Bought` text to `Every business has a manager!`.
21. Back to variants of `Panel`: `Trophies Panel` (title `Trophies`, and a scrolling list in
    `Content`, made the same way, without `All Bought`), `New Beach Panel` (title `New
    Beach`) and `Settings Panel` (title `Settings`). The last two stay empty until Chapters
    13 and 14.
22. Drag the five into `Panels`, in this order: Upgrades, Managers, Trophies, New Beach,
    Settings. They lie on top of each other.

### Do it — the tabs, and a switcher

23. In `Tab Bar`, **Create Empty**, `Beach Tab`: anchor **middle–left** with Shift, **Pos**
    (10, 0), 204 × 186. In it, an **Icon Button** prefab `Button`: anchor **top–center**
    with Shift, **Pos** (0, −6), 124 × 128, **Source Image** `Icon Home`, its `Icon`
    unticked; and a text `Label`: **bottom–center** with Shift, **Pos** (0, 4), 204 × 46,
    `Beach`, size 32, brown, centred.
24. Duplicate `Beach Tab` four times, 214 apart (**Pos X** 224, 438, 652, 866): `Upgrades
    Tab` (`Icon Cart`), `Managers Tab` (`Icon Person`), `Trophies Tab` (`Icon Trophy`), and
    `New Beach Tab`, which keeps `Square Blue` and ticks its `Icon` back on, with
    `glowing_star_3d`. Change each `Label`.
25. Now the code. Each tab opens its panel and closes the others; a second press closes it.
    In `Scripts/Flow`, `PanelSwitcher`, and add it to `Panels`:

```csharp
using UnityEngine;

// The panels over the Beach (Upgrades, Managers, Trophies, New Beach,
// Settings): one open at a time. A tab's button calls Toggle with its panel,
// set in the button's On Click () list; a panel's close button calls CloseAll.
public class PanelSwitcher : MonoBehaviour
{
    [SerializeField] GameObject[] panels;

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
    }

    public void CloseAll()
    {
        foreach (GameObject each in panels)
        {
            each.SetActive(false);
        }
    }
}
```

26. Drag the five panels into its **Panels** list, in the same order.
27. Wire the buttons, in each **Button**'s **On Click ()** list (**+**, drag `Panels` into
    the box, then choose the method):
    - `Beach Tab`'s button: **PanelSwitcher → CloseAll**.
    - `Upgrades Tab`'s button: **PanelSwitcher → Toggle (GameObject)**, and drag the
      `Upgrades Panel` into the box under it. The same for Managers, Trophies and New
      Beach, each with its panel.
    - `Settings Button`, on the top bar: **Toggle**, with the `Settings Panel`.
    - Each panel's `Close Button`: **CloseAll**. Do it in the scene, on each of the five:
      the prefab can't know the scene's `Panels`.

    Nothing here needs code of its own: **UnityEvents** are for what a designer wires in
    the Inspector. C# events, in Chapter 5, are for what scripts tell each other.
28. Untick the five panels at the top of the Inspector, so the game starts on the beach.

### Test it

- **Play.** Click **Upgrades**: its panel opens over the list. Click **Managers**: the
  Upgrades panel closes, Managers opens. Click **Managers** again: it closes. The cog opens
  Settings; the red **×** closes any of them; **Beach** closes whatever is open.
- Click a candy button: it darkens while pressed.

### The experiment: predict, then look

The exam asks this about prefabs, so do it slowly. For each change, **write down** which
panels or buttons you think will change, then look.

1. Open the **Panel** prefab and set the `Ribbon`'s **Color** to a pale green. Which of
   the five panels change?
2. Open **Upgrades Panel** and change its `Title` to `Shop`. Does **Managers Panel**
   change?
3. In the scene, select the `×10 Button` in the buy bar and set its **Source Image** to
   `Button Red`. Does the **Candy Button** prefab change? The other three buy buttons?
4. Open the **Candy Button** prefab and set its label's size to 30. Which buttons change:
   the buy bar's? The Stand Row's green **Buy Button**? The ×10 you made red?

The answers: (1) all five: a variant takes everything it doesn't override from its base.
(2) No: `Managers Panel` overrides its title, and an override wins. (3) Neither: it's an
override on that one instance, shown **bold** in the Inspector, with a blue line. (4) All
of them, the red ×10 too, since its size was never overridden; the Stand Row's button
changes because it's nested, still linked to its prefab. Put everything back: the
ribbon's colour (right-click **Color** → **Revert**), `Upgrades`, the ×10's **Source
Image** (right-click → **Revert**), size 44.

### Commit

*Add the candy buttons, the rows, the panels and the tabs.*

### Challenge

Make a fifth Candy Button variant, `Candy Button Small`: a variant of **Candy Button
Green**, 200 × 80, with a label of size 32. Then change Candy Button Green's picture to
`Button Blue`, and predict what happens to Small before you look.

# Part 2 — The Business

## C# 4 — ScriptableObjects

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

A ScriptableObject can have methods and take part in inheritance (C# 7). A
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
| **JSON file** (or PlayerPrefs) | changes while playing and must still be there after quitting | the money, the unlocked upgrades, the best times (C# 13) |

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

## Chapter 4 — Stand Info

**Goal:** the economy designer's balance sheet turned into five **`StandInfo`** assets,
one for each business, and the list on the screen showing a row for each, made in code
from those assets.

### Idea — the designer's numbers, in assets

The studio's economy designer sends you `BALANCE.md`: every number the game runs on. The
businesses come first: a name, a picture, what the first one costs, how much more each
next one costs, how long a **cycle** takes, and what one business earns a cycle.

Those numbers are the same for every player, set by a designer, and **never change while
playing**: the shape of data for a ScriptableObject (C# 4). What
does change while playing (how many you own, what upgrades did) will live on a component
in the scene, in Chapter 5.

| Data | Changes while playing? | Lives in |
| --- | --- | --- |
| a business's name, picture, prices, cycle | no | a `StandInfo` asset |
| how many you own, the cycle's progress | yes | `JuiceStand`, on the beach (Chapter 5) |
| your money | yes, and must outlive quitting | the `Wallet`, then the save file (Chapter 11) |

Two of the fields are **`long`**s, not `int`s: the prices and the earnings. A `long`
holds bigger whole numbers than an `int`. Chapter 5 shows why a juice empire needs them.

The list comes from the assets too: one **Stand Row** for each `StandInfo`, made in code
with `Instantiate`. Add a business to the array, and its row appears; no one lays it out
by hand.

### Do it — the balance sheet

1. Your trainer shares `BALANCE.md`. Put it next to `STYLE_GUIDE.md`, outside `Assets`,
   and read its first two tables: the five businesses, and what each costs with 0, 1, 10
   and 25 already owned. Chapter 6 checks your maths against that second table.
2. Commit it: *Add the designer's balance sheet*.

### Do it — StandInfo

3. In `Scripts/Business`, `StandInfo`:

```csharp:StandInfo.cs
using UnityEngine;

// One kind of business, with the numbers from the economy designer's balance
// sheet. It's shared and read-only while playing: how many you own, and what
// upgrades did to it, live on the JuiceStand in the scene.
[CreateAssetMenu(fileName = "New Stand Info", menuName = "Juice/Stand Info")]
public class StandInfo : ScriptableObject
{
    [SerializeField] string id;                 // never changes: the save file stores it
    [SerializeField] string displayName;
    [SerializeField] Sprite picture;
    [SerializeField] long baseCost = 4;         // the first one's price
    [SerializeField] float costGrowth = 1.07f;  // each one costs this much more than the last
    [SerializeField] float cycleSeconds = 1f;
    [SerializeField] long earningsPerCycle = 1; // for each one you own

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public Sprite Picture { get { return picture; } }
    public long BaseCost { get { return baseCost; } }
    public float CostGrowth { get { return costGrowth; } }
    public float CycleSeconds { get { return cycleSeconds; } }
    public long EarningsPerCycle { get { return earningsPerCycle; } }
}
```

4. Every field is private and set in the Inspector; every property has only a `get`. Other
   scripts can read a business's numbers and can't change them, which is the rule for an
   asset in one line of C#.
5. The **id** is for the save file (Chapter 11): `lemonade-cup`, lowercase with dashes. The
   **display name** can change one day (*Lemon Cup*), and a save file must still find its
   business; so the save stores the id, which never changes.

### Do it — the five businesses

6. In `Assets/Data`, a folder `Stands`. In it, **Assets → Create → Juice → Stand Info**,
   five times, named after the businesses. Fill each from the balance sheet:

| Asset | Id | Display Name | Picture | Base Cost | Cost Growth | Cycle Seconds | Earnings Per Cycle |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Lemonade Cup` | `lemonade-cup` | Lemonade Cup | `cup_with_straw_3d` | 4 | 1.07 | 1 | 1 |
| `Beach Stand` | `beach-stand` | Beach Stand | `umbrella_on_ground_3d` | 60 | 1.15 | 3 | 60 |
| `Smoothie Bar` | `smoothie-bar` | Smoothie Bar | `tropical_drink_3d` | 720 | 1.14 | 6 | 540 |
| `Juice Shop` | `juice-shop` | Juice Shop | `convenience_store_3d` | 8640 | 1.13 | 12 | 4320 |
| `Juice Factory` | `juice-factory` | Juice Factory | `factory_3d` | 103680 | 1.12 | 24 | 51840 |

7. Look at the numbers side by side. Each business costs 12 times the one before, earns 9
   to 60 times more a cycle, and takes twice as long. A designer chose them so each new
   business is worth saving up for, and the next always seems just out of reach.

### Do it — a row for each

8. In `Scripts/UI`, `StandRow`. For now it shows a business's numbers; it grows a lot in
   the next two chapters:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One row of the list: a business's picture, its name, what one earns a cycle,
// and what the first one costs. StandList makes the rows in code and calls Show.
public class StandRow : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text ownedText;
    [SerializeField] TMP_Text earningsText;
    [SerializeField] TMP_Text priceText;

    public void Show(StandInfo info)
    {
        picture.sprite = info.Picture;
        nameText.text = info.DisplayName;
        ownedText.text = "not open yet";
        earningsText.text = "$" + info.EarningsPerCycle;
        priceText.text = "$" + info.BaseCost;
    }
}
```

9. Open the **Stand Row** prefab and add `StandRow` to its root. Fill its fields by
   dragging the row's own children in: **Picture** is `Picture Button/Icon`, **Name Text**
   `Name`, **Owned Text** `Owned`, **Earnings Text** `Earnings`, and **Price Text** `Buy
   Button/Price`.
10. In `Scripts/UI`, `StandList`:

```csharp
using UnityEngine;

// The scrolling list under the beach: one Stand Row for each business, made in
// code from the businesses' StandInfo assets. The List's Vertical Layout Group
// puts them one under another.
public class StandList : MonoBehaviour
{
    [SerializeField] StandInfo[] stands;
    [SerializeField] StandRow rowPrefab;
    [SerializeField] Transform content;

    void Start()
    {
        foreach (StandInfo info in stands)
        {
            StandRow row = Instantiate(rowPrefab, content);
            row.name = info.DisplayName + " Row";
            row.Show(info);
        }
    }
}
```

11. Add it to `Stand List` (in `Bottom`). Drag the five `StandInfo` assets into **Stands**,
    in the balance sheet's order; the **Stand Row** prefab into **Row Prefab**; and
    `Stand List/Scroll View/Viewport/List` into **Content**.
12. The field's type is `StandRow`, not `GameObject`, so `Instantiate` hands back the
    row's `StandRow` script, ready to call: no `GetComponent`. And the Inspector only
    accepts a prefab that has a `StandRow` on it.

### Test it

- **Play.** Five rows, from Lemonade Cup to Juice Factory, each with its picture and name,
  *not open yet*, its earnings and its price. Drag the list up and down: it scrolls, and
  the rows slide under the buy bar without showing over it (the Rect Mask 2D).
- Select a row in the Hierarchy while playing: its name is `Smoothie Bar Row`, from
  `row.name`. A name in the Hierarchy costs nothing and saves time when you look for one.
- **The trap, for real.** While playing, select the `Lemonade Cup` asset and change its
  **Display Name** to `Lemon Cup`. Stop. The asset still says `Lemon Cup`: an asset keeps
  what you change while playing. GitHub Desktop shows `Lemonade Cup.asset` changed. Put the
  name back. This is why nothing that changes while playing will ever go in a `StandInfo`.
- The prices say `$103680`: hard to read. Chapter 5 writes `NumberFormat`.

### Commit

*Add the five businesses from the balance sheet.*

### Challenge

Make a sixth business, `Bubble Tea Bar`, with `bubble_tea_3d` and numbers of your own
between the Juice Shop's and the Juice Factory's. Add it to **Stands**, between them,
and Play. Then take it out again: the designer owns the numbers.

## C# 5 — Events and Delegates

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

## Chapter 5 — Squeeze and Sell

**Goal:** the five businesses on the beach, as sprites; tap a business's picture in the
list and its bar fills over its cycle; when it's full the business sells, and the money
at the top goes up, in `long`s, written short: `$1.25K`.

### Idea — a cycle

Each business works in **cycles**. A tap starts one; the bar fills over the business's
cycle time (1 second for the Lemonade Cup, 24 for the Juice Factory); when it's full, the
business **sells**: every one you own earns its share at once. Then it waits for the
next tap. (A manager, in Chapter 7, will tap for you.)

`JuiceStand` is that business, on the beach. It holds what changes while playing, the
things `StandInfo` mustn't:

| On `JuiceStand` | What it is |
| --- | --- |
| `Owned` | how many of this business you own; you start with one Lemonade Cup |
| `IsRunning` | a cycle is running |
| `Progress` | how far through it, 0 to 1: the bar |
| `EarningsPerCycle` | what the cycle sells for: `info.EarningsPerCycle × Owned` |

### Idea — who needs to know about a sale?

When a cycle ends, the money goes up, and the money at the top of the screen changes. In
later chapters a "+$" number will rise from the business, a coin will clink, and Sam's
achievements will count the sale. If `JuiceStand` called each of them, it would need a
reference to each, and every new one would mean changing it.

Instead it raises an **event**, `CupSold`, and doesn't care who listens
(C# 5). The `Wallet` listens, and adds the money; the `Wallet` raises its own
event, `MoneyChanged`; the money text listens to that.

```
JuiceStand ──CupSold(amount)──► Wallet ──MoneyChanged(money)──► MoneyText
   (sells)                     (adds it)                        (shows it)
```

Nobody asks every frame whether something changed. The money text changes exactly when
the money does.

### Idea — money as a long

The shared C# 6 chapter says to count coins in an `int`. In a card game,
yes. An idle game's money grows a thousand times over in its first hour, and an `int`
stops at 2,147,483,647: about 2.1 billion. The balance sheet's simulation passes that 50
minutes in. Try it in your `Practice` script:

```csharp
int coins = int.MaxValue;
coins += 1;
Debug.Log(coins);
long money = int.MaxValue;
money += 1;
Debug.Log(money);
```

```
-2147483648
2147483648
```

An `int` that goes past its biggest **wraps round** to its most negative, with no error:
the player who just earned their two billionth dollar is suddenly in debt. A `long` uses
8 bytes instead of 4, and goes to 9,223,372,036,854,775,807: 9.2 **quintillion**.

| Type | Biggest it holds exactly | For |
| --- | --- | --- |
| `int` | 2,147,483,647 | counts: how many you own, taps, levels |
| `long` | 9,223,372,036,854,775,807 | money in an idle game |
| `float` | 16,777,216 (then it skips whole numbers) | multipliers, seconds, the bar's progress |
| `double` | 9,007,199,254,740,992 | working out a price (`Math.Pow`), then rounded to a `long` |

Why not a `float` for money, as many idle games use? A `float` past 16,777,216 can't hold
every whole number: add $1 to $20,000,000 and nothing happens. The money must be exact,
so it's a `long`, everywhere: the wallet, the prices, the earnings.

### Do it — the business

1. In `Scripts/Business`, `JuiceStand`:

```csharp
using System;
using UnityEngine;

// One business on the beach: how many you own, and its cycle. Squeeze starts a
// cycle; when the bar fills, it sells what every one you own earns, and waits
// for the next squeeze.
public class JuiceStand : MonoBehaviour
{
    [SerializeField] StandInfo info;
    [SerializeField] int ownedAtStart;          // 1 for the Lemonade Cup: you start with one

    public StandInfo Info { get { return info; } }
    public int Owned { get; private set; }
    public bool IsRunning { get; private set; }
    public float Progress { get; private set; }     // 0 to 1, through the cycle

    // What one cycle sells for: every one you own earns the same.
    public long EarningsPerCycle
    {
        get { return info.EarningsPerCycle * Owned; }
    }

    public event Action<long> CupSold;      // what the cycle sold for
    public event Action Squeezed;           // a tap started a cycle

    void Awake()
    {
        Owned = ownedAtStart;
    }

    void Update()
    {
        if (!IsRunning)
        {
            return;
        }
        Progress += Time.deltaTime / info.CycleSeconds;
        if (Progress >= 1f)
        {
            Progress = 0f;
            IsRunning = false;
            CupSold?.Invoke(EarningsPerCycle);
        }
    }

    // A tap, on the beach or on the row. Nothing happens while a cycle runs.
    public void Squeeze()
    {
        if (Owned == 0 || IsRunning)
        {
            return;
        }
        IsRunning = true;
        Squeezed?.Invoke();
    }
}
```

2. Read it against the style guide. `CupSold` and `Squeezed` are events, named for what
   happened, in the past tense. `CupSold` carries the amount, an `Action<long>`;
   `Squeezed` carries nothing. `?.Invoke` raises an event safely when nobody listens yet.
   The properties have a `private set`: only the stand changes its own numbers.
3. `Progress += Time.deltaTime / info.CycleSeconds` moves the bar 1/60 of a second's worth
   each frame: after `CycleSeconds` seconds it reaches 1, whatever the frame rate.

### Do it — the businesses on the beach

4. **Create Empty**, `Businesses`, at (0, 0, 0). In it, **Create Empty**, `Stand Sprite`,
   at (0, 4.05, 0). Drag `cup_with_straw_3d` onto it: a child with a **Sprite Renderer**.
   Rename the child `Picture`: **Scale** (0.9, 0.9, 1), 1.8 units across, and **Order in
   Layer** `10`, in front of the beach.
5. Add `JuiceStand` to `Stand Sprite`. Drag `Stand Sprite` into `Assets/Prefabs`. Every
   business on the beach will be one of these.
6. Rename the one in the scene `Lemonade Cup`, and put it at (−3.8, 4.05, 0). Its
   `JuiceStand`: **Info** the `Lemonade Cup` asset, **Owned At Start** `1`.
7. Four more **Stand Sprite** instances in `Businesses`, 1.9 apart along the grass:

| Name | Position | Its `Picture`'s sprite | Info |
| --- | --- | --- | --- |
| `Beach Stand` | (−1.9, 4.05, 0) | `umbrella_on_ground_3d` | Beach Stand |
| `Smoothie Bar` | (0, 4.05, 0) | `tropical_drink_3d` | Smoothie Bar |
| `Juice Shop` | (1.9, 4.05, 0) | `convenience_store_3d` | Juice Shop |
| `Juice Factory` | (3.8, 4.05, 0) | `factory_3d` | Juice Factory |

   Their **Owned At Start** stays 0: you don't own them yet. Chapter 6 hides the ones you
   don't own.

### Do it — the wallet

8. In `Scripts/Business`, `Wallet`:

```csharp
using System;
using UnityEngine;

// The money. It listens to every business, adds what they sell, and tells
// anyone who shows the money, or whose button depends on it, that it changed.
// A long, not an int: an int stops at 2,147,483,647, and a juice empire passes
// that in its first hour.
public class Wallet : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;

    public long Money { get; private set; }
    public long LifetimeEarned { get; private set; }    // never goes down: Juice Stars come from it

    public event Action<long> MoneyChanged;

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += Add;
        }
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= Add;
        }
    }

    public void Add(long amount)
    {
        Money += amount;
        LifetimeEarned += amount;
        MoneyChanged?.Invoke(Money);
    }

    // True, and the money spent, only if there was enough.
    public bool TrySpend(long amount)
    {
        if (amount > Money)
        {
            return false;
        }
        Money -= amount;
        MoneyChanged?.Invoke(Money);
        return true;
    }
}
```

9. `stand.CupSold += Add` subscribes the method `Add` itself: it takes a `long` and returns
   nothing, the shape of an `Action<long>`. `OnEnable` subscribes and `OnDisable`
   unsubscribes, always both, as Sam's guide says: a destroyed wallet must not stay on a
   stand's list.
10. Two numbers, not one. `Money` goes up and down; `LifetimeEarned` only goes up, and
    remembers everything you ever earned. The Juice Stars (Chapter 13) come from it.
    `TrySpend` is for Chapter 6: it spends only if there's enough, and says whether it did.
11. **Create Empty**, `Wallet`, with the `Wallet` script. Drag the five businesses into its
    **Stands**: select `Wallet`, lock the Inspector (the padlock), select the five in the
    Hierarchy and drag them all at once onto **Stands**. Unlock it.

### Do it — big numbers, short

12. In `Scripts/Business`, `NumberFormat`:

```csharp
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

13. Walk through 1,250: it's 1,000 or more, so it's divided by 1,000 once: 1.25, with the
    suffix `K`. Under 10, two decimals: `1.25K`. And 999,999: divided once, 999.999; no
    decimals above 100, so it rounds to 1000, which is too many figures, so it's divided
    again: `1.00M`. Without that last step it would say `1000K`.
14. `CultureInfo.InvariantCulture`: a computer set to French or German writes a decimal
    comma, `1,25K`. The invariant culture writes a point everywhere. It's a `static class`,
    like Level 3's `Mathf`: nothing to make, just `NumberFormat.Money(1250)`.

### Do it — the money on the screen

15. In `Scripts/UI`, `MoneyText`:

```csharp
using TMPro;
using UnityEngine;

// The money at the top. It changes only when the money does: the Wallet says
// so, and this listens.
public class MoneyText : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] TMP_Text text;

    void OnEnable()
    {
        wallet.MoneyChanged += OnMoneyChanged;
    }

    void OnDisable()
    {
        wallet.MoneyChanged -= OnMoneyChanged;
    }

    void Start()
    {
        Show(wallet.Money);
    }

    void OnMoneyChanged(long money)
    {
        Show(money);
    }

    void Show(long money)
    {
        text.text = "$" + NumberFormat.Money(money);
    }
}
```

16. Add it to `Money`, in the top bar: **Wallet** the `Wallet`, **Text** `Money Text`.
    `Start` shows the money once, before any sale; after that only the event changes it.

### Do it — tap to squeeze, in the list

17. `StandRow` now gets a real business, not just its numbers. In `Scripts/UI`, change
    `StandRow`:

<!-- check: together -->
```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One row of the list: a business's picture (tap it to squeeze), its name, how
// many you own, the cycle's bar, and what a cycle earns. StandList makes the
// rows in code and calls Setup, so the row only listens once it knows its
// business.
public class StandRow : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] Button pictureButton;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text ownedText;
    [SerializeField] Image barFill;             // a Filled image: fillAmount is the cycle's progress
    [SerializeField] TMP_Text earningsText;
    [SerializeField] TMP_Text priceText;

    JuiceStand stand;

    public void Setup(JuiceStand forStand)
    {
        stand = forStand;
        picture.sprite = stand.Info.Picture;
        nameText.text = stand.Info.DisplayName;
        Listen();
        Refresh();
    }

    // Instantiate runs OnEnable before Setup, when the row has no business yet.
    void OnEnable()
    {
        if (stand != null)
        {
            Listen();
            Refresh();
        }
    }

    void OnDisable()
    {
        if (stand == null)
        {
            return;
        }
        pictureButton.onClick.RemoveListener(stand.Squeeze);
    }

    // The bar moves every frame; a fill amount makes no garbage.
    void Update()
    {
        if (stand != null)
        {
            barFill.fillAmount = stand.Progress;
        }
    }

    void Listen()
    {
        pictureButton.onClick.AddListener(stand.Squeeze);
    }

    void Refresh()
    {
        ownedText.text = stand.Owned == 0 ? "not open yet" : $"owns {stand.Owned}";
        earningsText.text = "$" + NumberFormat.Money(stand.Owned > 0 ? stand.EarningsPerCycle : stand.Info.EarningsPerCycle);
        priceText.text = "$" + NumberFormat.Money(stand.Info.BaseCost);
    }
}
```

18. Change `StandList` too: until you do, Unity can't compile it, since `row.Show` is
    gone. `StandList` now takes the businesses in the scene:

```csharp
using UnityEngine;

// The scrolling list under the beach: one Stand Row for each business, made
// in code from the businesses in the scene. The List's Vertical Layout Group
// puts them one under another.
public class StandList : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] StandRow rowPrefab;
    [SerializeField] Transform content;

    void Start()
    {
        foreach (JuiceStand stand in stands)
        {
            StandRow row = Instantiate(rowPrefab, content);
            row.name = stand.Info.DisplayName + " Row";
            row.Setup(stand);
        }
    }
}
```
<!-- check: end -->

19. **The order of a new row's life.** `Instantiate` makes the row and runs its `Awake` and
    `OnEnable` at once, before `Instantiate` even returns: then `Setup` runs. So in
    `OnEnable` the row has no business yet (`stand` is `null`), and it waits; `Setup`
    starts the listening. If the row is ever switched off and on again, `OnEnable` starts
    it again. Remember this: it comes back in every list the game makes.
20. Open the **Stand Row** prefab. The `StandRow` fields have changed: drag in **Picture
    Button** (the `Picture Button` child itself: its **Button**) and **Bar Fill**
    (`Progress Bar/Fill`).
21. Select `Stand List`: its **Stands** field is now a list of `JuiceStand`s, and empty.
    Drag the five businesses in, in order.

### Test it

- **Play.** The list shows `owns 1` for the Lemonade Cup and *not open yet* for the
  others. Tap the cup's picture in its row: its bar fills in a second, and the money says
  `$1`. Tap again: `$2`. Tap twice quickly: the second tap does nothing while the cycle
  runs.
- Tap the Beach Stand's picture: nothing. You own none.
- Stop. Set the Beach Stand's **Owned At Start** to 10, and Play. Tap it: the bar takes 3
  seconds, then `$600`: ten of them, $60 each. Put it back to 0.
- In your `Practice` script, log a few: `NumberFormat.Money(1250)`, `(12500)`,
  `(999999)`, `(3243267274)` and `(long.MaxValue)`. You should see `1.25K`, `12.5K`,
  `1.00M`, `3.24B` and `9.22Qi`.

### Commit

*Squeeze and sell: the cycle, the wallet and the money.*

### Challenge

Show the Wallet's `LifetimeEarned` too: a small text under the money that says `earned
$12.5K so far`. Which event tells you when to change it? (No new event is needed.) Take it
out again afterwards: Chapter 8 puts the income per second there.

## Chapter 6 — Buy More

**Goal:** a **Buy** button on every row, for ×1, ×10, ×100 or as many as you can afford,
green when you can and grey when you can't; prices that grow with every one you own,
exactly as the balance sheet says; earnings that double at each milestone; and the
businesses you own standing on the beach, where a tap squeezes them too.

### Idea — every one costs more

The balance sheet's rule: each business costs its **cost growth** times more than the one
before. The Lemonade Cup's growth is 1.07, so:

| You own | The next one costs | Worked out |
| --- | --- | --- |
| 0 | $4 | 4 × 1.07⁰ = 4 |
| 1 | $5 | 4 × 1.07¹ = 4.28, rounded **up** |
| 10 | $8 | 4 × 1.07¹⁰ = 7.87 |
| 25 | $22 | 4 × 1.07²⁵ = 21.71 |
| 100 | $3,471 | 4 × 1.07¹⁰⁰ = 3,470.9 |

In C#: `Math.Pow(growth, owned)` raises a number to a power. It works in `double`s,
which can hold the huge powers (1.07⁵⁰⁰ has 15 figures); `Math.Ceiling` rounds up to a
whole dollar, and the result becomes a `long`. Ten at once is ten prices added up, one
after another. **Max** counts how many the money buys: add the next price, then the
next, until one is more than what's left.

The three are **pure maths**: numbers in, a number out, nothing in the scene. They go in
a `static class`, `CostMath`, like `NumberFormat`.

### Idea — a button that knows

A Buy button you can't afford should look it, grey, and do nothing. The row can't ask
"can I afford it?" once and forget: the money changes with every sale. It **listens** to
the wallet's `MoneyChanged` and checks again each time. That's the Challenge of
C# 5, built for real.

Three things can change a row's price and button:

| What changed | Who says so | The row |
| --- | --- | --- |
| the money | `Wallet.MoneyChanged` | re-checks the price |
| how many you own | `JuiceStand.Changed` | redraws everything |
| ×1, ×10, ×100 or Max | `BuyAmountBar.Changed` | redraws everything |

### Idea — milestones

Owning **25, 50, 100, 200, 300 and 400** of one business doubles its earnings at each:
at 400 it earns 64 times as much for each one. It's what makes "just ten more" tempting.
`EarningsPerCycle` becomes the business's own earnings × how many you own × the
milestones' multiplier, a `float`. Watch the types here: a `long` times a `float` is
worked out **as a `float`**, which can't hold every whole number above 16,777,216
(Chapter 5's table). Turning the multiplier into a `double` first, `(double)`, makes C#
work the whole sum out in `double`s, exact to 9 quadrillion; the result is rounded down
to a `long`.

### Do it — the maths

1. In `Scripts/Business`, `CostMath`:

```csharp:CostMath.cs
using System;

// What businesses cost. Each one costs costGrowth times more than the last, so
// the price of the next is baseCost × costGrowth to the power of how many you
// own, rounded up to a whole coin. Worked out in a double, which can hold the
// huge powers, then turned into a long.
public static class CostMath
{
    const int MaxAtOnce = 10000;    // Max never loops for ever

    public static long NextCost(StandInfo info, int owned)
    {
        double cost = Math.Ceiling(info.BaseCost * Math.Pow(info.CostGrowth, owned));
        if (cost >= long.MaxValue)
        {
            return long.MaxValue;
        }
        return (long)cost;
    }

    // The next count of them, one price after another.
    public static long CostOf(StandInfo info, int owned, int count)
    {
        long total = 0;
        for (int i = 0; i < count; i++)
        {
            long cost = NextCost(info, owned + i);
            if (cost > long.MaxValue - total)
            {
                return long.MaxValue;   // more than anyone can ever have
            }
            total += cost;
        }
        return total;
    }

    // How many you can buy now with this money.
    public static int Affordable(StandInfo info, int owned, long money)
    {
        int count = 0;
        long spent = 0;
        while (count < MaxAtOnce)
        {
            long cost = NextCost(info, owned + count);
            if (cost > money - spent)
            {
                break;
            }
            spent += cost;
            count++;
        }
        return count;
    }
}
```

2. Two guards against the ends of a `long`. A price so far out it's bigger than any `long`
   (1.07 to the power of 700 is) becomes `long.MaxValue`, which no wallet ever holds.
   And `cost > long.MaxValue - total` asks "would adding it go past the biggest `long`?"
   **before** adding, since after would be too late: it would have wrapped round, as
   Chapter 5's `int` did.

### Do it — ×1, ×10, ×100, Max

3. In `Scripts/UI`, `BuyAmountBar`. The `enum` is small and belongs to this class, so it
   shares its file, as the style guide allows:

```csharp:BuyAmountBar.cs
using System;
using UnityEngine;
using UnityEngine.UI;

// How many a Buy button buys.
public enum BuyAmount
{
    One,
    Ten,
    Hundred,
    Max
}

// The ×1, ×10, ×100 and Max buttons above the list. The chosen one is green.
// Each button's On Click () calls Select with its number, 0 to 3; Tab calls Next.
public class BuyAmountBar : MonoBehaviour
{
    [SerializeField] Image[] buttons;           // in the enum's order
    [SerializeField] Sprite chosenSprite;
    [SerializeField] Sprite otherSprite;

    public BuyAmount Current { get; private set; }

    public event Action Changed;

    void Start()
    {
        Show();
    }

    public void Select(int index)
    {
        Current = (BuyAmount)index;
        Show();
        Changed?.Invoke();
    }

    public void Next()
    {
        Select(((int)Current + 1) % buttons.Length);
    }

    // How many to buy of this business: Max is as many as the money buys, at least one.
    public int CountFor(JuiceStand stand, long money)
    {
        switch (Current)
        {
            case BuyAmount.Ten: return 10;
            case BuyAmount.Hundred: return 100;
            case BuyAmount.Max: return Math.Max(1, CostMath.Affordable(stand.Info, stand.Owned, money));
            default: return 1;
        }
    }

    void Show()
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            buttons[i].sprite = i == (int)Current ? chosenSprite : otherSprite;
        }
    }
}
```

4. Add it to `Buy Bar`. **Buttons**: the four buttons' **Image**s, `×1` to `Max` (drag the
   buttons themselves in). **Chosen Sprite** `Button Green`, **Other Sprite** `Button
   Blue`.
5. Wire each button's **On Click ()**: **+**, drag `Buy Bar` in, **BuyAmountBar →
   Select (int)**, and type its number in the box: 0 for ×1, 1 for ×10, 2 for ×100, 3 for
   Max. A UnityEvent can pass one fixed value like this, typed in the Inspector.
6. `(BuyAmount)index` turns a number into the `enum` value at that place: 2 is `Hundred`.
   `Next` goes round, with `%`: after Max (3), `(3 + 1) % 4` is 0, ×1 again. Chapter 14's
   Tab key calls it. **Max** buys at least one: with too little money the button shows one
   at its price, grey.

### Do it — buying, and milestones

7. `JuiceStand` learns to buy, and to count milestones. Change it:

```csharp
using System;
using UnityEngine;

// One business on the beach: how many you own, and its cycle. Squeeze starts a
// cycle; when the bar fills, it sells, and waits for the next squeeze. It earns
// more for every one you own, and twice as much at each milestone.
public class JuiceStand : MonoBehaviour
{
    static readonly int[] Milestones = { 25, 50, 100, 200, 300, 400 };

    [SerializeField] StandInfo info;
    [SerializeField] int ownedAtStart;          // 1 for the Lemonade Cup: you start with one

    public StandInfo Info { get { return info; } }
    public int Owned { get; private set; }
    public bool IsRunning { get; private set; }
    public float Progress { get; private set; }     // 0 to 1, through the cycle

    // What one cycle sells for: every one you own, and the milestones. Worked
    // out in a double: a long times a float is worked out as a float, which
    // can't hold every whole number above 16,777,216.
    public long EarningsPerCycle
    {
        get { return (long)(info.EarningsPerCycle * Owned * (double)MilestoneMultiplier); }
    }

    // The next milestone to reach, or 0 when every one is reached.
    public int NextMilestone
    {
        get
        {
            foreach (int milestone in Milestones)
            {
                if (Owned < milestone)
                {
                    return milestone;
                }
            }
            return 0;
        }
    }

    float MilestoneMultiplier
    {
        get
        {
            float multiplier = 1f;
            foreach (int milestone in Milestones)
            {
                if (Owned >= milestone)
                {
                    multiplier *= 2f;
                }
            }
            return multiplier;
        }
    }

    public event Action<long> CupSold;      // what the cycle sold for
    public event Action Squeezed;           // a tap started a cycle
    public event Action<int> Bought;        // how many were bought
    public event Action Changed;            // how many you own; more from Chapter 7

    void Awake()
    {
        Owned = ownedAtStart;
    }

    void Update()
    {
        if (!IsRunning)
        {
            return;
        }
        Progress += Time.deltaTime / info.CycleSeconds;
        if (Progress >= 1f)
        {
            Progress = 0f;
            IsRunning = false;
            CupSold?.Invoke(EarningsPerCycle);
        }
    }

    // A tap, on the beach or on the row. Nothing happens while a cycle runs.
    public void Squeeze()
    {
        if (Owned == 0 || IsRunning)
        {
            return;
        }
        IsRunning = true;
        Squeezed?.Invoke();
    }

    public void Buy(int count)
    {
        Owned += count;
        Bought?.Invoke(count);
        Changed?.Invoke();
    }
}
```

8. `Milestones` is `static readonly`: one array for every stand, made once, never
   replaced. (`const` can't hold an array.) `Buy` doesn't spend any money: the row does
   that first, with `TrySpend`, and calls `Buy` only if it worked. The stand doesn't need
   to know there's a wallet at all.

### Do it — the Buy button

9. The row learns to buy. Change `StandRow`, and `StandList` with it (they only compile
   together, since `Setup` takes two more things):

<!-- check: together -->
```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One row of the list: a business's picture (tap it to squeeze), its name, how
// many you own and the next milestone, the cycle's bar, what a cycle earns,
// and the Buy button, green when you can afford it. StandList makes the rows in
// code and calls Setup, so the row only listens once it knows its business.
public class StandRow : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] Button pictureButton;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text ownedText;
    [SerializeField] Image barFill;             // a Filled image: fillAmount is the cycle's progress
    [SerializeField] TMP_Text earningsText;
    [SerializeField] Button buyButton;
    [SerializeField] Image buyButtonImage;
    [SerializeField] TMP_Text buyText;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Sprite canBuySprite;
    [SerializeField] Sprite cannotBuySprite;

    JuiceStand stand;
    Wallet wallet;
    BuyAmountBar amounts;

    public void Setup(JuiceStand forStand, Wallet forWallet, BuyAmountBar forAmounts)
    {
        stand = forStand;
        wallet = forWallet;
        amounts = forAmounts;
        picture.sprite = stand.Info.Picture;
        nameText.text = stand.Info.DisplayName;
        Listen();
        Refresh();
    }

    // Instantiate runs OnEnable before Setup, when the row has no business yet.
    void OnEnable()
    {
        if (stand != null)
        {
            Listen();
            Refresh();
        }
    }

    void OnDisable()
    {
        if (stand == null)
        {
            return;
        }
        stand.Changed -= Refresh;
        wallet.MoneyChanged -= OnMoneyChanged;
        amounts.Changed -= Refresh;
        pictureButton.onClick.RemoveListener(stand.Squeeze);
        buyButton.onClick.RemoveListener(Buy);
    }

    // The bar moves every frame; a fill amount makes no garbage.
    void Update()
    {
        if (stand != null)
        {
            barFill.fillAmount = stand.Progress;
        }
    }

    void Listen()
    {
        stand.Changed += Refresh;
        wallet.MoneyChanged += OnMoneyChanged;
        amounts.Changed += Refresh;
        pictureButton.onClick.AddListener(stand.Squeeze);
        buyButton.onClick.AddListener(Buy);
    }

    void Buy()
    {
        int count = amounts.CountFor(stand, wallet.Money);
        if (wallet.TrySpend(CostMath.CostOf(stand.Info, stand.Owned, count)))
        {
            stand.Buy(count);
        }
    }

    // The money changes with every sale: only the price and the button can
    // change with it, so only they're redrawn.
    void OnMoneyChanged(long money)
    {
        ShowPrice();
    }

    void Refresh()
    {
        int next = stand.NextMilestone;
        if (stand.Owned == 0)
        {
            ownedText.text = "not open yet";
        }
        else if (next > 0)
        {
            ownedText.text = $"owns {stand.Owned} · next ×2 at {next}";
        }
        else
        {
            ownedText.text = $"owns {stand.Owned}";
        }
        earningsText.text = "$" + NumberFormat.Money(stand.Owned > 0 ? stand.EarningsPerCycle : stand.Info.EarningsPerCycle);
        ShowPrice();
    }

    void ShowPrice()
    {
        int count = stand.Owned == 0 ? 1 : amounts.CountFor(stand, wallet.Money);
        long price = CostMath.CostOf(stand.Info, stand.Owned, count);
        bool canBuy = price <= wallet.Money;
        buyText.text = stand.Owned == 0 ? "Open" : $"Buy ×{count}";
        priceText.text = "$" + NumberFormat.Money(price);
        buyButton.interactable = canBuy;
        buyButtonImage.sprite = canBuy ? canBuySprite : cannotBuySprite;
    }
}
```

```csharp
using UnityEngine;

// The scrolling list under the beach: one Stand Row for each business, made
// in code from the businesses in the scene. The List's Vertical Layout Group
// puts them one under another.
public class StandList : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] StandRow rowPrefab;
    [SerializeField] Transform content;
    [SerializeField] Wallet wallet;
    [SerializeField] BuyAmountBar amounts;

    void Start()
    {
        foreach (JuiceStand stand in stands)
        {
            StandRow row = Instantiate(rowPrefab, content);
            row.name = stand.Info.DisplayName + " Row";
            row.Setup(stand, wallet, amounts);
        }
    }
}
```
<!-- check: end -->

10. Read `Buy` slowly: it asks the bar how many, asks `CostMath` what they cost, asks the
    wallet to spend that, and only if the wallet says yes tells the stand. Each piece does
    one job, and the row is where they meet.
11. A business you don't own yet says **Open** instead of **Buy ×1**, and always shows
    the price of one: you open it once, then buy more.
12. Open the **Stand Row** prefab and fill the new fields: **Buy Button** (`Buy Button`),
    **Buy Button Image** (`Buy Button` again: its Image), **Buy Text** (`Buy
    Button/Label`), **Can Buy Sprite** `Button Green`, **Cannot Buy Sprite** `Button
    Grey`.
13. Select `Stand List`: drag in the **Wallet** and the **Amounts** (`Buy Bar`).
14. A test helper, for you and not the player. Add it at the end of `Wallet`:

```csharp
    // … as before …

    [ContextMenu("Test: Add $1M")]
    void AddMillionForTesting()
    {
        Add(1000000);
    }
}
```

15. While playing, select `Wallet`, open its script's **⋮** menu in the Inspector, and
    choose **Test: Add $1M**. `[ContextMenu]` puts a method there; it runs only in the
    Editor. Chapter 21 takes it out before the release.

### Do it — the businesses on the beach

16. In `Scripts/Juice`, `StandSprite`:

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

// A business on the beach, as a sprite: it appears when you own one, squeezes
// when you tap it, and squashes when it sells. The camera's Physics 2D
// Raycaster finds its collider for the tap.
public class StandSprite : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] JuiceStand stand;
    [SerializeField] SpriteRenderer picture;
    [SerializeField] Collider2D tapArea;
    [SerializeField] float squash = 0.15f;
    [SerializeField] float squashTime = 0.25f;

    Vector3 restingScale;

    void Awake()
    {
        restingScale = picture.transform.localScale;
    }

    void OnEnable()
    {
        stand.Changed += Refresh;
        stand.CupSold += OnCupSold;
    }

    void OnDisable()
    {
        stand.Changed -= Refresh;
        stand.CupSold -= OnCupSold;
    }

    void Start()
    {
        Refresh();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        stand.Squeeze();
    }

    void Refresh()
    {
        bool isOpen = stand.Owned > 0;
        picture.enabled = isOpen;
        tapArea.enabled = isOpen;
    }

    void OnCupSold(long amount)
    {
        StopAllCoroutines();
        StartCoroutine(Squash());
    }

    // Wider and shorter, then back again: a sale you can see.
    IEnumerator Squash()
    {
        for (float t = 0f; t < squashTime; t += Time.deltaTime)
        {
            float amount = Mathf.Sin(t / squashTime * Mathf.PI) * squash;
            picture.transform.localScale = restingScale + new Vector3(amount, -amount, 0f);
            yield return null;
        }
        picture.transform.localScale = restingScale;
    }
}
```

17. Open the **Stand Sprite** prefab. **Add Component → Box Collider 2D**, **Size** (2, 2):
    the area a finger can tap. Add `StandSprite`: **Stand** is the root's own `JuiceStand`
    (drag the root in), **Picture** the `Picture` child, **Tap Area** the Box Collider
    2D. The five on the beach get it all, each still pointing at its own `JuiceStand`.
18. Select the **Main Camera** and **Add Component → Physics 2D Raycaster**. The
    EventSystem now asks it, as well as the canvas, what's under a tap: it casts into the
    world, finds a 2D collider, and calls `OnPointerClick` on its scripts. That's
    `IPointerClickHandler`, the same interface a UI button uses, here on a sprite.

### Test it

- **Play.** Only the Lemonade Cup stands on the beach. Tap it there: its bar fills in the
  list, then it squashes as it sells.
- Squeeze a few times: at $5 the Buy button turns green (**Buy ×1**, **$5**). Buy: `owns
  2 · next ×2 at 25`, and the next costs $5. Look up the balance sheet's second table: the
  prices must match it.
- **Test: Add $1M.** The Beach Stand says **Open $60**: open it, and it appears on the
  beach. Choose **×10**: every row shows the price of ten. **Max**: each shows how many
  your money buys. Buy the Lemonade Cup up to 25: its earnings jump from $24 to $50.
- With little money, a grey button does nothing when clicked.
- Open all five. Spend everything with **Max** on the Juice Factory, then watch the Buy
  buttons turn green one by one as the sales come in.

### Commit

*Buy more: prices that grow, ×1 to Max, milestones, and the businesses on the beach.*

### Challenge

Add a **×25** amount between ×10 and ×100: a fifth button, a fifth `BuyAmount`. What else
has to change so **Next** goes round all five? (Look at what `Next` divides by.)

## C# 7 — Inheritance

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
| a player, a crate and a familiar that can all be hurt | none is a kind of another | almost none | an interface (C# 8) |

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

## Chapter 7 — Upgrades and Managers

**Goal:** nineteen upgrades from the balance sheet, of three kinds: **fruit recipes**
that make a business earn three times as much, **equipment** that makes it squeeze twice
as fast, and **managers** that squeeze for you. A shop to buy them in, written by last
summer's intern; and a toast that slides down to say *Manager hired!*

### Idea — three kinds, one base

Every upgrade has an id, a name, a line saying what it does, a picture, a price, and the
business it's for (or none, for all five). Then each kind does something different to a
business:

| Kind | Does | `ApplyTo(stand)` calls |
| --- | --- | --- |
| `PriceUpgrade` (a fruit recipe) | the business earns ×3 | `stand.MultiplyPrice(3)` |
| `SpeedUpgrade` (equipment) | it squeezes twice as fast | `stand.MultiplySpeed(2)` |
| `ManagerUpgrade` | it squeezes by itself | `stand.Automate()` |

They **are** the same kind of thing, with one difference each: that's inheritance
(C# 7). The **abstract** class `Upgrade` says everything they share once,
and declares `ApplyTo` with no body: every kind must **override** it. The shop, the save
file and the library deal only in `Upgrade`s. None of them knows there are three kinds,
and a fourth kind would need no change to any of them.

C# 7 ended with a question: *should an upgrade be a subclass of the
business it upgrades?* No. Inheritance says "is a": a Smoothie Bar **is a** business; a
fruit recipe **is not** a business. It **changes** one. So the business stays a
`JuiceStand`, the upgrade is an asset, and `ApplyTo` is how one changes the other.

The upgrades are ScriptableObjects, like `StandInfo`: the designer's numbers, the same for
everyone, never changing while playing. What an upgrade **does** changes the stand, in the
scene: the asset itself never changes. That's why `ApplyTo` takes the stand.

### Idea — a manager is an upgrade too

A manager is bought in a shop, once, like any upgrade. So it's an `Upgrade`, and the
Managers tab is the same kind of shop, showing the other kind. When the game needs to
tell them apart (a toast for a manager, nothing for a recipe), C# asks with **`is`**:
`upgrade is ManagerUpgrade` is `true` for a manager. Use it sparingly: if you find
yourself asking "is it this kind, is it that kind" everywhere, the difference belongs in
an overridden method.

### Do it — what upgrades do to a business

1. Each kind calls one method on the business. Give `JuiceStand` all three, and a manager
   that keeps the cycles going:

```csharp
using System;
using UnityEngine;

// One business on the beach: how many you own, what the upgrades did to it,
// and its cycle. Squeeze starts a cycle; when the bar fills it sells, and a
// business with a manager starts the next cycle by itself. It earns more for
// every one you own, and twice as much at each milestone.
public class JuiceStand : MonoBehaviour
{
    static readonly int[] Milestones = { 25, 50, 100, 200, 300, 400 };

    [SerializeField] StandInfo info;
    [SerializeField] int ownedAtStart;          // 1 for the Lemonade Cup: you start with one

    float priceMultiplier = 1f;
    float speedMultiplier = 1f;

    public StandInfo Info { get { return info; } }
    public int Owned { get; private set; }
    public bool IsAutomated { get; private set; }
    public bool IsRunning { get; private set; }
    public float Progress { get; private set; }     // 0 to 1, through the cycle
    public float CycleSeconds { get { return info.CycleSeconds / speedMultiplier; } }

    // What one cycle sells for now: every one you own, the upgrades and the
    // milestones. Worked out in a double: a long times a float is worked out as
    // a float, which can't hold every whole number above 16,777,216.
    public long EarningsPerCycle
    {
        get { return (long)(info.EarningsPerCycle * Owned * (double)priceMultiplier * MilestoneMultiplier); }
    }

    // The next milestone to reach, or 0 when every one is reached.
    public int NextMilestone
    {
        get
        {
            foreach (int milestone in Milestones)
            {
                if (Owned < milestone)
                {
                    return milestone;
                }
            }
            return 0;
        }
    }

    float MilestoneMultiplier
    {
        get
        {
            float multiplier = 1f;
            foreach (int milestone in Milestones)
            {
                if (Owned >= milestone)
                {
                    multiplier *= 2f;
                }
            }
            return multiplier;
        }
    }

    public event Action<long> CupSold;      // what the cycle sold for
    public event Action Squeezed;           // a tap started a cycle
    public event Action<int> Bought;        // how many were bought
    public event Action Changed;            // owned, multipliers or manager

    void Awake()
    {
        Owned = ownedAtStart;
    }

    void Update()
    {
        if (!IsRunning)
        {
            return;
        }
        Progress += Time.deltaTime / CycleSeconds;
        // A fast, managed business can finish more than one cycle in a frame.
        while (Progress >= 1f)
        {
            Progress -= 1f;
            CupSold?.Invoke(EarningsPerCycle);
            if (!IsAutomated)
            {
                Progress = 0f;
                IsRunning = false;
                return;
            }
        }
    }

    // A tap, on the beach or on the row. Nothing happens while a cycle runs.
    public void Squeeze()
    {
        if (Owned == 0 || IsRunning)
        {
            return;
        }
        IsRunning = true;
        Squeezed?.Invoke();
    }

    public void Buy(int count)
    {
        Owned += count;
        if (IsAutomated)
        {
            IsRunning = true;   // a manager hired before you owned one starts now
        }
        Bought?.Invoke(count);
        Changed?.Invoke();
    }

    public void MultiplyPrice(float factor)
    {
        priceMultiplier *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedMultiplier *= factor;
        Changed?.Invoke();
    }

    // A manager squeezes for you, from now on.
    public void Automate()
    {
        IsAutomated = true;
        if (Owned > 0)
        {
            IsRunning = true;
        }
        Changed?.Invoke();
    }
}
```

2. Look at `Update`'s new loop. A managed business never stops: when its bar fills, it
   keeps what's left over (`Progress -= 1f`) and goes straight on. With every speed
   upgrade a Lemonade Cup's cycle can drop below a frame; then one frame can finish two
   cycles, and the `while` sells both. A business without a manager sells once and stops,
   as before.
3. `MultiplyPrice` and `MultiplySpeed` are the shared C# 4 chapter's
   names: the juice stand there is this one. Each **multiplies** what's there, so two
   ×3 recipes make ×9, in whatever order they're bought.

### Do it — the upgrades

4. In `Scripts/Upgrades`, `Upgrade`:

```csharp:Upgrade.cs
using UnityEngine;

// What every upgrade has: an id for the save file, a name, a line saying what
// it does, a picture, a price, and the business it's for (none: all of them).
// It's abstract: each kind says what it does to a business, in ApplyTo. The
// asset never changes while playing; the business it's applied to does.
public abstract class Upgrade : ScriptableObject
{
    [SerializeField] string id;         // never changes: a save file stores it
    [SerializeField] string displayName;
    [SerializeField] string description;
    [SerializeField] Sprite picture;
    [SerializeField] long cost = 50;    // a long: the last upgrades cost billions
    [SerializeField] StandInfo target;  // empty: every business

    public string Id { get { return id; } }
    public string DisplayName { get { return displayName; } }
    public string Description { get { return description; } }
    public Sprite Picture { get { return picture; } }
    public long Cost { get { return cost; } }
    public StandInfo Target { get { return target; } }

    public bool AppliesTo(JuiceStand stand)
    {
        return target == null || stand.Info == target;
    }

    public abstract void ApplyTo(JuiceStand stand);
}
```

5. It's the shared chapter's `Upgrade`, grown: the cost is a `long` (the shared one's `int
   cost` would stop at $2.1 billion, and *Golden Juice* costs $1 billion already), and it
   has a **target**, the `StandInfo` of the business it's for. `AppliesTo` says yes to that
   business, or to every business when the target is empty. There's no
   `[CreateAssetMenu]`: nobody can make a plain `Upgrade`, only one of its kinds.
6. In `Scripts/Upgrades`, the three kinds:

```csharp:PriceUpgrade.cs
using UnityEngine;

// A fruit recipe: the business sells each cup for more.
[CreateAssetMenu(fileName = "New Price Upgrade", menuName = "Juice/Price Upgrade")]
public class PriceUpgrade : Upgrade
{
    [SerializeField] float factor = 3f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplyPrice(factor);
    }
}
```

```csharp:SpeedUpgrade.cs
using UnityEngine;

// Better equipment: the business squeezes faster.
[CreateAssetMenu(fileName = "New Speed Upgrade", menuName = "Juice/Speed Upgrade")]
public class SpeedUpgrade : Upgrade
{
    [SerializeField] float factor = 2f;

    public override void ApplyTo(JuiceStand stand)
    {
        stand.MultiplySpeed(factor);
    }
}
```

```csharp:ManagerUpgrade.cs
using UnityEngine;

// A manager: the business squeezes by itself, and earns while you're away.
[CreateAssetMenu(fileName = "New Manager", menuName = "Juice/Manager")]
public class ManagerUpgrade : Upgrade
{
    public override void ApplyTo(JuiceStand stand)
    {
        stand.Automate();
    }
}
```

7. Each is a few lines: everything else comes from `Upgrade`. `SpeedUpgrade` is the shared
   chapter's Challenge, done.

### Do it — nineteen assets

8. In `Assets/Data`, a folder `Upgrades`. Make the upgrades from the balance sheet, with
   **Assets → Create → Juice → Price Upgrade**, **Speed Upgrade** or **Manager**. Each
   asset is named after its upgrade. Leave **Target** empty for "every business", and
   **Factor** as it is (3 for a price upgrade, 2 for a speed upgrade):

| Asset | Kind | Id | Description | Picture | Cost | Target |
| --- | --- | --- | --- | --- | --- | --- |
| `Fresh Lemons` | Price | `fresh-lemons` | Lemonade Cup earns ×3. | `lemon_3d` | 25000 | Lemonade Cup |
| `Orange Blend` | Price | `orange-blend` | Beach Stand earns ×3. | `tangerine_3d` | 50000 | Beach Stand |
| `Electric Juicer` | Speed | `electric-juicer` | Beach Stand squeezes twice as fast. | `high_voltage_3d` | 75000 | Beach Stand |
| `Strawberry Swirl` | Price | `strawberry-swirl` | Smoothie Bar earns ×3. | `strawberry_3d` | 250000 | Smoothie Bar |
| `Ice Machine` | Speed | `ice-machine` | Smoothie Bar squeezes twice as fast. | `ice_3d` | 400000 | Smoothie Bar |
| `Watermelon Wave` | Price | `watermelon-wave` | Juice Shop earns ×3. | `watermelon_3d` | 1000000 | Juice Shop |
| `Fast Tills` | Speed | `fast-tills` | Juice Shop squeezes twice as fast. | `bell_3d` | 2000000 | Juice Shop |
| `Pineapple Punch` | Price | `pineapple-punch` | Juice Factory earns ×3. | `pineapple_3d` | 5000000 | Juice Factory |
| `Conveyor Belt` | Speed | `conveyor-belt` | Juice Factory squeezes twice as fast. | `gear_3d` | 10000000 | Juice Factory |
| `Tropical Mix` | Price | `tropical-mix` | Every business earns ×3. | `mango_3d` | 25000000 | (empty) |
| `Coconut Cream` | Price | `coconut-cream` | Lemonade Cup earns ×3. | `coconut_3d` | 100000000 | Lemonade Cup |
| `Kiwi Kick` | Price | `kiwi-kick` | Beach Stand earns ×3. | `kiwi_fruit_3d` | 250000000 | Beach Stand |
| `Rocket Blender` | Speed | `rocket-blender` | Every business squeezes twice as fast. | `rocket_3d` | 500000000 | (empty) |
| `Golden Juice` | Price | `golden-juice` | Every business earns ×3. | `sparkles_3d` | 1000000000 | (empty) |

   Each **Display Name** is the asset's name.

9. And the five managers, **Manager**, all with `office_worker_3d_default`:

| Asset | Id | Display Name | Description | Cost | Target |
| --- | --- | --- | --- | --- | --- |
| `Manager Lemonade Cup` | `manager-lemonade-cup` | Manager: Lemonade Cup | Lemonade Cup squeezes by itself, and earns while you're away. | 1000 | Lemonade Cup |
| `Manager Beach Stand` | `manager-beach-stand` | Manager: Beach Stand | Beach Stand squeezes by itself, and earns while you're away. | 15000 | Beach Stand |
| `Manager Smoothie Bar` | `manager-smoothie-bar` | Manager: Smoothie Bar | Smoothie Bar squeezes by itself, and earns while you're away. | 100000 | Smoothie Bar |
| `Manager Juice Shop` | `manager-juice-shop` | Manager: Juice Shop | Juice Shop squeezes by itself, and earns while you're away. | 500000 | Juice Shop |
| `Manager Juice Factory` | `manager-juice-factory` | Manager: Juice Factory | Juice Factory squeezes by itself, and earns while you're away. | 1200000 | Juice Factory |

10. Open **Assets → Create**: there's **Juice → Price Upgrade**, **Speed Upgrade** and
    **Manager**, and no plain **Upgrade**. The abstract class can't be made; its kinds can.

### Do it — the library, and buying

11. In `Scripts/Upgrades`, `UpgradeLibrary`, the shared chapter's:

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

12. In `Assets/Data`, **Assets → Create → Juice → Upgrade Library**, `Upgrade Library`.
    Select every asset in `Data/Upgrades` and drag them all into its **Upgrades**: the
    field is `Upgrade[]`, so it takes all three kinds. `TryGetUpgrade` is for the save
    file, in Chapter 11: it finds an upgrade by its id, through a `Dictionary`.
13. Something must remember what's bought, and buy. In `Scripts/Upgrades`, `Upgrades`:

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// Which upgrades are bought, and buying one: the money is spent, the upgrade
// is applied to every business it's for, and its id is kept for the save.
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

    public bool TryBuy(Upgrade upgrade)
    {
        if (IsBought(upgrade) || !wallet.TrySpend(upgrade.Cost))
        {
            return false;
        }
        Apply(upgrade);
        Bought?.Invoke(upgrade);
        return true;
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

14. `upgrade.ApplyTo(stand)` is the line inheritance is for. `upgrade` is declared as an
    `Upgrade`; when the game runs, it's a `PriceUpgrade`, a `SpeedUpgrade` or a
    `ManagerUpgrade`, and C# calls that kind's `ApplyTo`. `Upgrades` never asks which.
15. **Create Empty**, `Upgrades`, with the `Upgrades` script: **Library** the `Upgrade
    Library`, **Stands** the five businesses, **Wallet** the `Wallet`.

### Do it — the intern's shop

16. Sam forwards a file: *"Last summer's intern wrote the shop. It works, and we need it
    now: use it as it is. Before release we'll clean it up (that's yours too, in Chapter
    19). Read it first, and keep a list of what you'd change."* Your trainer shares
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
    string Fmt(long m)
    {
        if (m >= 1000)
            return (m / 1000f).ToString("0.0") + "K";
        return m.ToString();
    }
}
```

17. Start your list against `STYLE_GUIDE.md`. You should find at least these: `public`
    fields; names like `u`, `w` and `n`; comments that say what, not why; `if` and `else`
    without braces; parts found by their names with `transform.Find`, and
    `GetComponent`, **every frame**; text rebuilt from strings **every frame**, even when
    nothing changed; and `Fmt`. What does `Fmt` show for $1,000,000? Work it out, then
    keep the list: Chapter 18 measures what it costs, and Chapter 19 fixes it.
18. One good thing to notice: `int n = i;` before the lambda. Each button's lambda keeps
    its own copy of `n`. Without it, every lambda would share the loop's `i`, and every
    button would buy the upgrade after the last one.
19. The shop needs no changes to use. Select the `Upgrades Panel` **in the scene** (not
    the prefab: the shop needs the scene's `Upgrades` and `Wallet`). **Add Component →
    Upgrade Shop**. **List**: drag in the 14 upgrades that aren't managers. **U** the
    `Upgrades`, **W** the `Wallet`, **Row** the **Upgrade Row** prefab, **Content** the
    panel's `List` (in `Content/Scroll View/Viewport`).
20. The same on the `Managers Panel` in the scene, with the five managers in its **List**.

### Do it — the manager's badge

21. A row shows when its business has a manager: the badge you put in the Stand Row in
    Chapter 3. `StandRow`'s last change:

```csharp:StandRow.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One row of the list: a business's picture (tap it to squeeze), its name, how
// many you own and the next milestone, the cycle's bar, what a cycle earns,
// and the Buy button, green when you can afford it. StandList makes the rows in
// code and calls Setup, so the row only listens once it knows its business.
public class StandRow : MonoBehaviour
{
    [SerializeField] Image picture;
    [SerializeField] Button pictureButton;
    [SerializeField] TMP_Text nameText;
    [SerializeField] TMP_Text ownedText;
    [SerializeField] Image barFill;             // a Filled image: fillAmount is the cycle's progress
    [SerializeField] TMP_Text earningsText;
    [SerializeField] Button buyButton;
    [SerializeField] Image buyButtonImage;
    [SerializeField] TMP_Text buyText;
    [SerializeField] TMP_Text priceText;
    [SerializeField] GameObject managerBadge;
    [SerializeField] Sprite canBuySprite;
    [SerializeField] Sprite cannotBuySprite;

    JuiceStand stand;
    Wallet wallet;
    BuyAmountBar amounts;

    public void Setup(JuiceStand forStand, Wallet forWallet, BuyAmountBar forAmounts)
    {
        stand = forStand;
        wallet = forWallet;
        amounts = forAmounts;
        picture.sprite = stand.Info.Picture;
        nameText.text = stand.Info.DisplayName;
        Listen();
        Refresh();
    }

    // Instantiate runs OnEnable before Setup, when the row has no business yet.
    void OnEnable()
    {
        if (stand != null)
        {
            Listen();
            Refresh();
        }
    }

    void OnDisable()
    {
        if (stand == null)
        {
            return;
        }
        stand.Changed -= Refresh;
        wallet.MoneyChanged -= OnMoneyChanged;
        amounts.Changed -= Refresh;
        pictureButton.onClick.RemoveListener(stand.Squeeze);
        buyButton.onClick.RemoveListener(Buy);
    }

    // The bar moves every frame; a fill amount makes no garbage.
    void Update()
    {
        if (stand != null)
        {
            barFill.fillAmount = stand.Progress;
        }
    }

    void Listen()
    {
        stand.Changed += Refresh;
        wallet.MoneyChanged += OnMoneyChanged;
        amounts.Changed += Refresh;
        pictureButton.onClick.AddListener(stand.Squeeze);
        buyButton.onClick.AddListener(Buy);
    }

    void Buy()
    {
        int count = amounts.CountFor(stand, wallet.Money);
        if (wallet.TrySpend(CostMath.CostOf(stand.Info, stand.Owned, count)))
        {
            stand.Buy(count);
        }
    }

    // The money changes with every sale: only the price and the button can
    // change with it, so only they're redrawn.
    void OnMoneyChanged(long money)
    {
        ShowPrice();
    }

    void Refresh()
    {
        int next = stand.NextMilestone;
        if (stand.Owned == 0)
        {
            ownedText.text = "not open yet";
        }
        else if (next > 0)
        {
            ownedText.text = $"owns {stand.Owned} · next ×2 at {next}";
        }
        else
        {
            ownedText.text = $"owns {stand.Owned}";
        }
        earningsText.text = "$" + NumberFormat.Money(stand.Owned > 0 ? stand.EarningsPerCycle : stand.Info.EarningsPerCycle);
        managerBadge.SetActive(stand.IsAutomated);
        ShowPrice();
    }

    void ShowPrice()
    {
        int count = stand.Owned == 0 ? 1 : amounts.CountFor(stand, wallet.Money);
        long price = CostMath.CostOf(stand.Info, stand.Owned, count);
        bool canBuy = price <= wallet.Money;
        buyText.text = stand.Owned == 0 ? "Open" : $"Buy ×{count}";
        priceText.text = "$" + NumberFormat.Money(price);
        buyButton.interactable = canBuy;
        buyButtonImage.sprite = canBuy ? canBuySprite : cannotBuySprite;
    }
}
```

22. Open the **Stand Row** prefab: **Manager Badge** is the `Manager` image. `Refresh`
    runs on `Changed`, which `Automate` raises: the badge appears the moment the manager is
    hired.

### Do it — Manager hired!

23. A strip that slides down from the top, says something, and slides back up: a
    **toast**. In `Safe Area`, at the very bottom of its children (drawn over everything),
    **Create Empty**, `Toast`: anchor **top–stretch** with Shift, **Height** 200. In it:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Strip` | an Image | top–center with Shift | (0, 260) | 980 × 150 | `Panel Light`, Sliced |
| `Strip/Picture` | an Image | middle–left with Shift | (24, 0) | 104 × 104 | `trophy_3d`, Preserve Aspect, no raycast |
| `Strip/Title` | a text | top–left with Shift | (148, −16) | 800 × 54 | `Trophy`, size 42, brown |
| `Strip/Line` | a text | top–left with Shift | (148, −72) | 800 × 64 | empty, size 30, light brown |

24. At Y 260 the strip is above the screen's top edge, out of sight. Messages wait their
    turn in a `Queue` (C# 6): first in, first out, so two managers hired at
    once show one after the other. In `Scripts/Trophies`, `ToastMessage`, one waiting
    message:

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

25. A plain C# class: no `MonoBehaviour`, made with `new`, held in a list. (`IsTrophy` is
    for Chapter 9.) In `Scripts/Trophies`, `Toast`, which slides the strip:

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A strip that slides down from the top of the screen with a picture and two
// lines, stays a moment, and slides back up: "Manager hired!", or a trophy
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

    public bool IsShowing { get; private set; }

    public event Action Hidden;

    void Awake()
    {
        strip.anchoredPosition = new Vector2(strip.anchoredPosition.x, hiddenY);
        strip.gameObject.SetActive(false);
    }

    public void Show(Sprite icon, string heading, string text)
    {
        picture.sprite = icon;
        title.text = heading;
        line.text = text;
        IsShowing = true;
        strip.gameObject.SetActive(true);
        StartCoroutine(SlideDownAndUp());
    }

    // Down, wait, back up.
    IEnumerator SlideDownAndUp()
    {
        yield return Slide(hiddenY, shownY);
        yield return new WaitForSeconds(stayTime);
        yield return Slide(shownY, hiddenY);
        strip.gameObject.SetActive(false);
        IsShowing = false;
        Hidden?.Invoke();
    }

    IEnumerator Slide(float fromY, float toY)
    {
        for (float t = 0f; t < slideTime; t += Time.deltaTime)
        {
            float y = Mathf.Lerp(fromY, toY, Mathf.SmoothStep(0f, 1f, t / slideTime));
            strip.anchoredPosition = new Vector2(strip.anchoredPosition.x, y);
            yield return null;
        }
        strip.anchoredPosition = new Vector2(strip.anchoredPosition.x, toY);
    }
}
```

26. A coroutine can `yield return` another coroutine's `IEnumerator`: Unity runs it, and
    carries on when it's finished. So `SlideDownAndUp` reads like the story it tells.
    Chapter 16 does the same in one line with DOTween.
27. Add `Toast` to `Toast`: **Strip**, **Picture**, **Title** and **Line** from its children.
    Drag `Toast` into `Prefabs/UI`.
28. In `Scripts/Trophies`, `ToastQueue`:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Manager hired!",
// for now. The toast shows them one at a time.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] Upgrades upgrades;
    [SerializeField] Toast toast;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        upgrades.Bought += OnUpgradeBought;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        upgrades.Bought -= OnUpgradeBought;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a manager gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is ManagerUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, "Manager hired!", $"{upgrade.Target.DisplayName} squeezes by itself now.", false));
            ShowNext();
        }
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

29. `ShowNext` runs twice: when a message arrives, and when the toast is hidden
    (`toast.Hidden`). If the toast is busy, the message waits; when it's free, the oldest
    message goes. Notice it listens to `Upgrades.Bought`: the intern's shop calls
    `TryBuy`, which raises it, so the toast works without any change to the intern's code.
30. **Create Empty**, `Trophies` (Chapter 9 adds the trophies here). Add `ToastQueue`:
    **Upgrades** the `Upgrades`, **Toast** the `Toast` in the scene.

### Test it

- **Play**, and **Test: Add $1M** (Chapter 6's helper). Open **Managers**: five rows from
  the intern's shop. Hire the Lemonade Cup's manager: *Manager hired!* slides down, the
  row disappears from the shop, the badge appears on the Lemonade Cup's row, and its bar
  runs on its own, sale after sale.
- Hire two managers quickly: the second toast waits for the first.
- **Upgrades**: buy *Fresh Lemons*: the Lemonade Cup's earnings triple. Open the Beach
  Stand, then buy *Electric Juicer*: its bar fills in 1.5 seconds instead of 3.
- Look at the shop's prices. *Watermelon Wave* says `$1000.0K`, and *Golden Juice*
  `$1000000.0K`. Add it to your list. Then look at a button you can't afford: is it grey?
- Look at the Hierarchy while the Managers panel is open: the shop's rows are `Upgrade
  Row(Clone)`, with no names of their own.

### Commit

*Add upgrades and managers, with the intern's shop and a toast.*

### Challenge

A fourth kind of upgrade, `GrandOpening`: it gives a business ten more for free
(`stand.Buy(10)`). Make the class and one asset, *Grand Opening: Beach Stand*, and put it
in the shop's list. What did you have to change in `Upgrade`, `Upgrades` or the shop?
(The answer is what inheritance is for.) Take the asset out of the library and the list
afterwards: it isn't on the balance sheet.

## C# 8 — Interfaces

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
- No fields, and no `new` (CS0144), as with an abstract class (C# 7).

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

## Chapter 8 — Money per Second

**Goal:** under the money, what you earn by yourself each second, `+1.25K / s`; and the
**delivery van**, which opens with your first Juice Factory, drives along the road, earns
at the end of every trip, and levels up with **Bigger Van**. The income text adds up the
van's earnings with the businesses' without knowing it's a van.

### Idea — two things that earn, and nothing else in common

A business with a manager earns by itself. So will the delivery van. What do they share?
Very little: a business has cycles, a row in the list, upgrades and a manager; the van
drives a road, delivers, and levels up. Neither **is** the other, and no base class fits
both.

But both **can do** one thing: earn money by themselves, so much a second. That's an
**interface** (C# 8): a contract that unrelated classes sign.

```csharp
public interface IIncomeSource
{
    string SourceName { get; }
    long IncomePerSecond { get; }
    bool EarnsWhileAway { get; }
}
```

Everything that needs "what earns by itself" asks for `IIncomeSource`s: the money per
second now; the earnings while you're away (Chapter 12); the bonus balloon's reward, a
minute of income (Chapter 15). None of them will know what's behind the interface.

| | `JuiceStand` | `DeliveryVan` |
| --- | --- | --- |
| **is a** | `MonoBehaviour` | `MonoBehaviour` |
| **can** | `IIncomeSource` | `IIncomeSource` |
| `SourceName` | its business's name | "Delivery Van" |
| `IncomePerSecond` | a cycle's earnings ÷ the cycle's seconds, with a manager; else 0 | a trip's earnings ÷ the trip's seconds, once bought |
| `EarnsWhileAway` | it has a manager | it's been bought |

### Idea — an interface in the Inspector

Unity can't show a field of an interface type in the Inspector: `[SerializeField]
IIncomeSource[] sources` stays invisible. The fix is one small class, `IncomeSources`: it
takes the businesses and the van **as what they are** (`JuiceStand[]`, `DeliveryVan`), and
puts them in a `List<IIncomeSource>` **as what they can do**. Every other script asks it.

### Do it — a business is an income source

1. In `Scripts/Income`, `IIncomeSource`:

```csharp:IIncomeSource.cs
// Anything that earns money by itself: a business with a manager, the delivery
// van. The money per second, the earnings while you're away and the balloon's
// reward add up every IIncomeSource, without knowing which kind each one is.
public interface IIncomeSource
{
    string SourceName { get; }
    long IncomePerSecond { get; }   // 0 while it doesn't earn by itself
    bool EarnsWhileAway { get; }
}
```

2. `JuiceStand` signs it: add `, IIncomeSource` after `MonoBehaviour`, and the three
   members. Until all three are there, Unity says the class doesn't implement the
   interface (error CS0535): the contract is checked when it compiles.

```csharp
using System;
using UnityEngine;

// One business on the beach: how many you own, what the upgrades did to it,
// and its cycle. Squeeze starts a cycle; when the bar fills it sells, and a
// business with a manager starts the next cycle by itself. It earns more for
// every one you own, and twice as much at each milestone.
public class JuiceStand : MonoBehaviour, IIncomeSource
{
    static readonly int[] Milestones = { 25, 50, 100, 200, 300, 400 };

    [SerializeField] StandInfo info;
    [SerializeField] int ownedAtStart;          // 1 for the Lemonade Cup: you start with one

    float priceMultiplier = 1f;
    float speedMultiplier = 1f;

    public StandInfo Info { get { return info; } }
    public int Owned { get; private set; }
    public bool IsAutomated { get; private set; }
    public bool IsRunning { get; private set; }
    public float Progress { get; private set; }     // 0 to 1, through the cycle
    public float CycleSeconds { get { return info.CycleSeconds / speedMultiplier; } }
    public string SourceName { get { return info.DisplayName; } }
    public bool EarnsWhileAway { get { return IsAutomated && Owned > 0; } }

    // What one cycle sells for now: every one you own, the upgrades and the
    // milestones. Worked out in a double: a long times a float is worked out as
    // a float, which can't hold every whole number above 16,777,216.
    public long EarningsPerCycle
    {
        get { return (long)(info.EarningsPerCycle * Owned * (double)priceMultiplier * MilestoneMultiplier); }
    }

    public long IncomePerSecond
    {
        get
        {
            if (!EarnsWhileAway)
            {
                return 0;
            }
            return (long)(EarningsPerCycle / (double)CycleSeconds);
        }
    }

    // The next milestone to reach, or 0 when every one is reached.
    public int NextMilestone
    {
        get
        {
            foreach (int milestone in Milestones)
            {
                if (Owned < milestone)
                {
                    return milestone;
                }
            }
            return 0;
        }
    }

    float MilestoneMultiplier
    {
        get
        {
            float multiplier = 1f;
            foreach (int milestone in Milestones)
            {
                if (Owned >= milestone)
                {
                    multiplier *= 2f;
                }
            }
            return multiplier;
        }
    }

    public event Action<long> CupSold;      // what the cycle sold for
    public event Action Squeezed;           // a tap started a cycle
    public event Action<int> Bought;        // how many were bought
    public event Action Changed;            // owned, multipliers or manager

    void Awake()
    {
        Owned = ownedAtStart;
    }

    void Update()
    {
        if (!IsRunning)
        {
            return;
        }
        Progress += Time.deltaTime / CycleSeconds;
        // A fast, managed business can finish more than one cycle in a frame.
        while (Progress >= 1f)
        {
            Progress -= 1f;
            CupSold?.Invoke(EarningsPerCycle);
            if (!IsAutomated)
            {
                Progress = 0f;
                IsRunning = false;
                return;
            }
        }
    }

    // A tap, on the beach or on the row. Nothing happens while a cycle runs.
    public void Squeeze()
    {
        if (Owned == 0 || IsRunning)
        {
            return;
        }
        IsRunning = true;
        Squeezed?.Invoke();
    }

    public void Buy(int count)
    {
        Owned += count;
        if (IsAutomated)
        {
            IsRunning = true;   // a manager hired before you owned one starts now
        }
        Bought?.Invoke(count);
        Changed?.Invoke();
    }

    public void MultiplyPrice(float factor)
    {
        priceMultiplier *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedMultiplier *= factor;
        Changed?.Invoke();
    }

    // A manager squeezes for you, from now on.
    public void Automate()
    {
        IsAutomated = true;
        if (Owned > 0)
        {
            IsRunning = true;
        }
        Changed?.Invoke();
    }
}
```

3. A business without a manager earns nothing **by itself**: its `IncomePerSecond` is 0,
   even while you tap it. The money per second counts only what comes in while you watch,
   or while you're away.

### Do it — the money per second

4. In `Scripts/Income`, `IncomeSources`. For now, the businesses are its only sources:

```csharp
using System.Collections.Generic;
using UnityEngine;

// Every IIncomeSource in the scene, in one list. Unity can't show an interface
// in the Inspector, so the businesses are set as what they are, and put into
// the list as what they can do.
public class IncomeSources : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;

    readonly List<IIncomeSource> sources = new List<IIncomeSource>();

    public IReadOnlyList<IIncomeSource> All { get { return sources; } }

    // Everything that earns by itself, each second, now.
    public long PerSecond
    {
        get
        {
            long total = 0;
            foreach (IIncomeSource source in sources)
            {
                total += source.IncomePerSecond;
            }
            return total;
        }
    }

    void Awake()
    {
        foreach (JuiceStand stand in stands)
        {
            sources.Add(stand);
        }
    }
}
```

5. `sources.Add(stand)`: a `JuiceStand` goes into a list of `IIncomeSource`s with no cast,
   since it **is** one. `All` hands the list out as an `IReadOnlyList`: others can read it
   and loop over it, not add to it.
6. **Create Empty**, `Income`, with `IncomeSources`: **Stands** the five businesses.
7. In `Scripts/UI`, `IncomeText`:

```csharp
using TMPro;
using UnityEngine;

// Under the money: what everything earns by itself each second. It adds up the
// IIncomeSources four times a second, not every frame: a number that changes
// this slowly needn't make a new string 60 times a second.
public class IncomeText : MonoBehaviour
{
    const float RefreshSeconds = 0.25f;

    [SerializeField] IncomeSources income;
    [SerializeField] TMP_Text text;

    float nextRefreshTime;

    void Update()
    {
        if (Time.unscaledTime < nextRefreshTime)
        {
            return;
        }
        nextRefreshTime = Time.unscaledTime + RefreshSeconds;
        long perSecond = income.PerSecond;
        text.text = perSecond > 0 ? $"+{NumberFormat.Money(perSecond)} / s" : "Tap to squeeze!";
    }
}
```

8. Why not listen to an event, like the money text? The income per second changes when any
   business's manager, owned count or upgrade changes, or the van's level: five sources'
   events, for one small number. Checking four times a second is simpler, and a quarter of
   a second late is too soon for anyone to notice. What it never does is build a string
   **every frame**: the intern's shop does that, and Chapter 18 measures what it costs.
9. Add `IncomeText` to `Money` in the top bar (beside `MoneyText`): **Income** the
   `Income` object, **Text** `Income Text`.

### Test it — one kind of source

- **Play.** Under the money: *Tap to squeeze!* You earn nothing by yourself yet.
- **Test: Add $1M**, hire the Lemonade Cup's manager: `+1 / s`. Buy 24 more cups (25, a
  milestone): `+50 / s`. Hire the Beach Stand's manager too: the two add up.

### Do it — the delivery van

10. In `Scripts/Income`, `DeliveryVan`, the second kind of income source:

```csharp
using System;
using UnityEngine;

// The delivery van: it opens with your first Juice Factory, then drives crates
// along the road and earns at the end of every trip, by itself. Bigger Van
// levels it up: each level carries more. It's an IIncomeSource like a managed
// business, though it shares nothing else with one.
public class DeliveryVan : MonoBehaviour, IIncomeSource
{
    [SerializeField] JuiceStand factory;            // the van opens with the first factory
    [SerializeField] SpriteRenderer body;
    [SerializeField] long earningsPerTrip = 50000;  // for each level
    [SerializeField] float tripSeconds = 10f;
    [SerializeField] long firstCost = 1000000;
    [SerializeField] float costGrowth = 1.5f;
    [SerializeField] float roadStartX = -7f;
    [SerializeField] float roadEndX = 7f;

    float tripProgress;

    public int Level { get; private set; }
    public bool IsOpen { get { return factory.Owned > 0 || Level > 0; } }
    public string SourceName { get { return "Delivery Van"; } }
    public bool EarnsWhileAway { get { return Level > 0; } }
    public long EarningsPerTrip { get { return earningsPerTrip * Level; } }

    public long IncomePerSecond
    {
        get
        {
            if (Level == 0)
            {
                return 0;
            }
            return (long)(EarningsPerTrip / (double)tripSeconds);
        }
    }

    public long NextCost
    {
        get { return (long)Math.Ceiling(firstCost * Math.Pow(costGrowth, Level)); }
    }

    public event Action<long> Delivered;
    public event Action Changed;

    void Start()
    {
        body.enabled = Level > 0;
    }

    void Update()
    {
        if (Level == 0)
        {
            return;
        }
        tripProgress += Time.deltaTime / tripSeconds;
        if (tripProgress >= 1f)
        {
            tripProgress -= 1f;
            Delivered?.Invoke(EarningsPerTrip);
        }
        Vector3 position = body.transform.localPosition;
        position.x = Mathf.Lerp(roadStartX, roadEndX, tripProgress);
        body.transform.localPosition = position;
    }

    // Bigger Van: true if the wallet could pay.
    public bool TryLevelUp(Wallet wallet)
    {
        if (!IsOpen || !wallet.TrySpend(NextCost))
        {
            return false;
        }
        Level++;
        body.enabled = true;
        Changed?.Invoke();
        return true;
    }
}
```

11. Compare it with `JuiceStand`: a trip, not a cycle; a level, not owned and upgrades; it
    moves across the screen. Its `IncomePerSecond` is worked out its own way. Both sign
    the same contract, and that's all they share. Its price grows like a business's, with
    `Math.Pow`, ×1.5 a level: the balance sheet's van table.
12. In the world, **Create Empty**, `Delivery Van`, at (0, 2.65, 0), on the road below the
    businesses. In it, drag `delivery_truck_3d`: rename the child `Body`, **Position**
    (−7, 0, 0), **Scale** (0.65, 0.65, 1), **Flip X** ticked (the emoji faces left; the
    van drives right), **Order in Layer** `12`. Add `DeliveryVan` to `Delivery Van`:
    **Factory** the `Juice Factory`, **Body** the `Body`.

### Do it — the van joins in

13. `IncomeSources` takes the van too. One field and one line:

```csharp:IncomeSources.cs
using System.Collections.Generic;
using UnityEngine;

// Every IIncomeSource in the scene, in one list. Unity can't show an interface
// in the Inspector, so the businesses and the van are set as what they are,
// and put into the list as what they can do.
public class IncomeSources : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] DeliveryVan van;

    readonly List<IIncomeSource> sources = new List<IIncomeSource>();

    public IReadOnlyList<IIncomeSource> All { get { return sources; } }

    // Everything that earns by itself, each second, now.
    public long PerSecond
    {
        get
        {
            long total = 0;
            foreach (IIncomeSource source in sources)
            {
                total += source.IncomePerSecond;
            }
            return total;
        }
    }

    void Awake()
    {
        foreach (JuiceStand stand in stands)
        {
            sources.Add(stand);
        }
        sources.Add(van);
    }
}
```

14. Drag the `Delivery Van` into its **Van**. And that's all `IncomeText` needs: it doesn't
    change. Neither will Chapter 12's away earnings or Chapter 15's balloon. That's the
    interface paying off: a new kind of income source, and nothing that adds them up
    changed.
15. The wallet must hear the van's deliveries. `Wallet` listens to `Delivered` too (keep
    your Chapter 6 test helper at the end):

```csharp
using System;
using UnityEngine;

// The money. It listens to every business and every other income, adds what
// they sell, and tells anyone who shows the money, or whose button depends on
// it, that it changed. A long, not an int: an int stops at 2,147,483,647, and
// a juice empire passes that in its first hour.
public class Wallet : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] DeliveryVan van;

    public long Money { get; private set; }
    public long LifetimeEarned { get; private set; }    // never goes down: Juice Stars come from it

    public event Action<long> MoneyChanged;

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += Add;
        }
        van.Delivered += Add;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= Add;
        }
        van.Delivered -= Add;
    }

    public void Add(long amount)
    {
        Money += amount;
        LifetimeEarned += amount;
        MoneyChanged?.Invoke(Money);
    }

    // True, and the money spent, only if there was enough.
    public bool TrySpend(long amount)
    {
        if (amount > Money)
        {
            return false;
        }
        Money -= amount;
        MoneyChanged?.Invoke(Money);
        return true;
    }
}
```

16. **Wallet**'s new **Van** field: the `Delivery Van`.

### Do it — the van's row

17. The van gets a row at the end of the list, hidden until it opens. In `Safe Area`,
    **Create Empty**, `Van Row`, 1000 × 156, with a **Vertical Layout Group**: **Control
    Child Size** both, **Child Force Expand** only **Width**. In it, an **Image** `Row`,
    `Panel Light`, **Sliced**, with a **Layout Element** (**Preferred Height** 156,
    **Flexible Width** 1), and in `Row`:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture` | the **Icon Button** prefab | middle–left | (14, 0) | 122 × 126 | **Source Image** `Square Green`, its `Icon` `delivery_truck_3d`, **Interactable** off |
| `Name` | a text | top–left | (150, −10) | 360 × 52 | `Delivery Van`, size 42, brown |
| `Level` | a text | top–left | (150, −60) | 400 × 36 | `level 1`, size 27, light brown |
| `Earnings` | a text | bottom–left | (150, 12) | 520 × 48 | `$50K a trip`, size 34, brown |
| `Bigger Van Button` | the **Candy Button Green** prefab | middle–right | (−12, 0) | 290 × 124 | two lines, as the Stand Row's: `Bigger Van`, and a `Price` |

18. Why the extra layer? The van row hides by switching `Row` off. The outer `Van Row`'s
    layout group then has no child to size, so it asks the list for no height at all: the
    gap closes. Switching off a row that the list sizes directly would leave its 156
    pixels of nothing.
19. In `Scripts/UI`, `VanRow`:

```csharp:VanRow.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The van's row at the end of the list: hidden until your first Juice
// Factory, then its level, what a trip earns, and Bigger Van.
public class VanRow : MonoBehaviour
{
    [SerializeField] DeliveryVan van;
    [SerializeField] Wallet wallet;
    [SerializeField] GameObject content;            // everything but the row itself
    [SerializeField] TMP_Text levelText;
    [SerializeField] TMP_Text earningsText;
    [SerializeField] Button upgradeButton;
    [SerializeField] Image upgradeButtonImage;
    [SerializeField] TMP_Text priceText;
    [SerializeField] Sprite canBuySprite;
    [SerializeField] Sprite cannotBuySprite;

    void OnEnable()
    {
        van.Changed += Refresh;
        wallet.MoneyChanged += OnMoneyChanged;
        upgradeButton.onClick.AddListener(LevelUp);
    }

    void OnDisable()
    {
        van.Changed -= Refresh;
        wallet.MoneyChanged -= OnMoneyChanged;
        upgradeButton.onClick.RemoveListener(LevelUp);
    }

    void Start()
    {
        Refresh();
    }

    void LevelUp()
    {
        van.TryLevelUp(wallet);
    }

    // Buying the first factory spends money, so the money changing is when the van may open.
    void OnMoneyChanged(long money)
    {
        Refresh();
    }

    void Refresh()
    {
        content.SetActive(van.IsOpen);
        if (!van.IsOpen)
        {
            return;
        }
        levelText.text = van.Level == 0 ? "not bought yet" : $"level {van.Level}";
        earningsText.text = van.Level == 0 ? "" : $"${NumberFormat.Money(van.EarningsPerTrip)} a trip";
        bool canBuy = van.NextCost <= wallet.Money;
        priceText.text = "$" + NumberFormat.Money(van.NextCost);
        upgradeButton.interactable = canBuy;
        upgradeButtonImage.sprite = canBuy ? canBuySprite : cannotBuySprite;
    }
}
```

20. Add it to `Van Row`: **Content** `Row`; the texts, **Upgrade Button** (`Bigger Van
    Button`, and its Image), **Price Text** (its `Price`), and the two sprites, `Button
    Green` and `Button Grey`. Drag `Van Row` into `Prefabs/UI`.
21. Drag the `Van Row` into the Stand List's `List` (in `Scroll View/Viewport`), and set
    its **Van** and **Wallet** there, in the scene. The five business rows are made when
    the game starts, so they'd come **after** it. `StandList` moves it to the end, its last
    change:

```csharp:StandList.cs
using UnityEngine;

// The scrolling list under the beach: one Stand Row for each business, made
// in code from the businesses in the scene, then the van's row at the end. The
// Content's Vertical Layout Group puts them one under another.
public class StandList : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] StandRow rowPrefab;
    [SerializeField] Transform content;
    [SerializeField] Wallet wallet;
    [SerializeField] BuyAmountBar amounts;
    [SerializeField] Transform vanRow;          // already in the Content, moved to the end

    void Start()
    {
        foreach (JuiceStand stand in stands)
        {
            StandRow row = Instantiate(rowPrefab, content);
            row.name = stand.Info.DisplayName + " Row";
            row.Setup(stand, wallet, amounts);
        }
        vanRow.SetAsLastSibling();
    }
}
```

22. `SetAsLastSibling` moves it to the end of its parent's children; the layout group lays
    children out in that order. Drag `Van Row` into `Stand List`'s **Van Row**.

### Test it — two kinds of source

- **Play**, **Test: Add $1M** twice. Open the Juice Factory (**Open $104K**): the van's row
  appears at the end of the list, *not bought yet*. **Bigger Van** for $1.00M: the van drives
  across the road, and every 10 seconds the money jumps by $50K. The money per second goes
  up by $5,000: `5.00K` more.
- **Bigger Van** again: level 2, `$100K a trip`, $10,000 a second, and the next level costs
  $2.25M.
- Look at what changed for `IncomeText` to count the van: nothing.

### Commit

*Add money per second and the delivery van, both IIncomeSources.*

### Challenge

A third income source: a **lemonade machine** that earns $1 a second from the start,
forever. Make a small `LemonadeMachine` class that is an `IIncomeSource`, add it to
`IncomeSources`, and give it money with `Wallet.Add` once a second. Which scripts did
you have to change? Remove it afterwards.

# Part 3 — The Lead's Achievements

## C# 9 — Working in Someone Else's Code

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

## Chapter 9 — Sam's Achievements

**Goal:** Sam's **achievements** in your game: twelve trophies, from *First Sip* to *New
Horizons*, won as you play, each one sliding down in the toast with its reward paid, and
all of them listed in the **Trophies** tab, grey until they're won. You plug in code you
didn't write, without changing a line of it.

### Idea — someone else's code, in four steps

Sam wrote the achievements for the studio: they'll go in other games too, so they don't
know anything about juice. C# 9 gave the steps; this chapter does each one.

| Step | Here |
| --- | --- |
| **Read the contract** | the README: what the module needs from your game, and what it gives |
| **Import it, and read the errors** | the package, then three compile errors, each one a line of the contract |
| **Evaluate it, by reading** | how often it checks, what happens when a number goes down, what it does with a bad id |
| **Plug it in, and ask for changes in writing** | your stats, your toast, your Trophies tab; never an edit to Sam's files |

### Idea — a namespace, at last

In Arcane Duel and Pocket Karts, Sam's module brought a class whose name the game
already had, and Unity said **CS0101**: two classes called the same in one project. Sam
promised to fix it, and has: everything in this package is inside a **namespace**:

```
namespace LanternHill.Achievements
{
    public class AchievementTracker : MonoBehaviour { … }
}
```

A namespace is a surname for classes. Sam's tracker is really
`LanternHill.Achievements.AchievementTracker`; his test toast is
`LanternHill.Achievements.Toast`. Your game has a `Toast` too (Chapter 7), in no
namespace at all (the **global** namespace). Two different full names, so no clash.

To use Sam's classes by their short names, a file says `using LanternHill.Achievements;`
at the top, the way it says `using UnityEngine;`. Then, in that file, which `Toast` does
the word `Toast` mean? C# looks in the file's **own** namespace first (for your scripts,
the global one) and only then in the namespaces the `using`s bring in. Your `Toast` is
found first. To mean Sam's, you'd write its full name.

### Do it — read the contract

1. Your trainer shares `Juice Tycoon Achievements 1.0.unitypackage` and its `README.md`.
   Read the README before you import anything. The contract is two tables:

| The module needs | Your game has it? |
| --- | --- |
| a component that implements `IStatSource`: `long GetStat(Stat stat)` | not yet: `GameStats`, below |
| stats that only go up, for the player's whole life | the counts will be; the businesses owned go down after a new beach (Chapter 13) |
| the won ids saved, and given back with `Restore` | Chapter 11 |
| the rewards paid, in coins | the `Wallet` |

| The module gives | You'll use it for |
| --- | --- |
| `event Action<Achievement> Unlocked` | the toast, and the reward |
| `IReadOnlyList<Achievement> All`, `bool IsWon(Achievement)` | the Trophies tab |
| `WonIds`, `Restore` | the save (Chapter 11) |

2. Note the types: `GetStat` returns a `long`; each `Achievement`'s `Reward` is a `long`.
   The contract is in the types as much as the words.

### Do it — import it

3. **Assets → Import Package → Custom Package…**, choose the file. The import window lists
   everything it brings, all in `Assets/Achievements`: five scripts, twelve achievements,
   twelve pictures and the README. **Import**.
4. The Console is empty. Open `Assets/Achievements/Toast.cs`: `namespace
   LanternHill.Achievements`, around the whole class. Two toasts in one project, and no
   CS0101.
5. Select `Achievements/First Sip`: an **Achievement** asset: an id, a title, what to do,
   a picture, the **Stat** it counts (**Cups Sold**), its **Target** (1) and its
   **Reward** (10). The pictures are Sam's copies of the emoji: Unity knows a picture by
   its GUID, not its name, so the achievements couldn't use yours.

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
        CupsSold,           // every sale, by every business
        MoneyEarned,        // in the player's whole life, never reset
        BusinessesOwned,    // all the businesses owned now, added up
        ManagersHired,
        UpgradesBought,     // in the player's whole life
        Taps,
        BalloonsPopped,
        BeachesOpened,
        AwayEarned,         // earned while away, in the player's whole life
        VanLevel
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

7. A module other people use gets a comment on every public member: Sam's style guide
   says so, and here's why. You can plug it in from the comments alone. Note what each
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

10. **CS0246** means C# doesn't know the name. It even guesses why: *are you missing a
   using directive?* `IStatSource` lives in Sam's namespace. Add `using
   LanternHill.Achievements;` at the top, and save:

```
Assets/Scripts/Trophies/GameStats.cs(4,41): error CS0535: 'GameStats' does not implement interface member 'IStatSource.GetStat(Stat)'
```

11. **CS0535**: the class signed the contract and doesn't keep it. That error is the README's
   first line, checked by the compiler. Write the whole class:

```csharp
using LanternHill.Achievements;
using UnityEngine;

// Our half of Sam's contract: the numbers his achievements count. Some are
// counted here as things happen (cups sold, taps); the others are read from
// the game when asked (the money earned, the businesses owned). The counts are
// for the player's whole life: a new beach doesn't reset them.
public class GameStats : MonoBehaviour, IStatSource
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Wallet wallet;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;

    public long CupsSold { get; private set; }
    public long Taps { get; private set; }
    public long BalloonsPopped { get; private set; }
    public long BeachesOpened { get; private set; }
    public long AwayEarned { get; private set; }
    public long UpgradesBought { get; private set; }

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += OnCupSold;
            stand.Squeezed += OnSqueezed;
        }
        upgrades.Bought += OnUpgradeBought;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= OnCupSold;
            stand.Squeezed -= OnSqueezed;
        }
        upgrades.Bought -= OnUpgradeBought;
    }

    public long GetStat(Stat stat)
    {
        switch (stat)
        {
            case Stat.CupsSold: return CupsSold;
            case Stat.MoneyEarned: return wallet.LifetimeEarned;
            case Stat.BusinessesOwned: return BusinessesOwned();
            case Stat.ManagersHired: return ManagersHired();
            case Stat.UpgradesBought: return UpgradesBought;
            case Stat.Taps: return Taps;
            case Stat.BalloonsPopped: return BalloonsPopped;
            case Stat.BeachesOpened: return BeachesOpened;
            case Stat.AwayEarned: return AwayEarned;
            case Stat.VanLevel: return van.Level;
            default: return 0;
        }
    }

    public void AddAwayEarnings(long amount)
    {
        AwayEarned += amount;
    }

    public void AddBeach()
    {
        BeachesOpened++;
    }

    long BusinessesOwned()
    {
        long total = 0;
        foreach (JuiceStand stand in stands)
        {
            total += stand.Owned;
        }
        return total;
    }

    long ManagersHired()
    {
        long total = 0;
        foreach (JuiceStand stand in stands)
        {
            if (stand.IsAutomated)
            {
                total++;
            }
        }
        return total;
    }

    // A sale: one cycle of one business, however many of it you own.
    void OnCupSold(long amount)
    {
        CupsSold++;
    }

    void OnSqueezed()
    {
        Taps++;
    }

    void OnUpgradeBought(Upgrade upgrade)
    {
        UpgradesBought++;
    }
}
```

12. Read it against Sam's `Stat` enum: a `case` for every value. Two ways of answering:
   - **Counted** as things happen, from the events you already have: every sale
     (`CupSold`), every tap that started a cycle (`Squeezed`), every upgrade bought.
   - **Read** when asked, from what the game already knows: the money earned in your life
     (the wallet's `LifetimeEarned`), the businesses owned now, the managers, the van's
     level.

   Three counts can't happen yet: balloons (Chapter 15), beaches (Chapter 13) and money
   earned while away (Chapter 12). They stay 0 until then; `AddAwayEarnings` and
   `AddBeach` are ready for those chapters to call.

### Do it — evaluate it, by reading

13. Open `AchievementTracker.cs` and answer these from the code, before you plug it in.
    Write your answers down; the trainer will ask.
    - **How often does it check, and what does that cost?** `Update` returns at once
      unless half a second has passed (`CheckInterval`), so it checks twice a second.
      Then one `GetStat` for each achievement not won yet: at most 24 calls a second.
      Cheap, **as long as `GetStat` is cheap**. Ours loops over five businesses at most.
      It uses `Time.unscaledTime`: it keeps checking in a paused game.
    - **What happens if a stat goes down?** After a new beach you own one business
      again. Won achievements stay won: `IsWon` looks in `wonIds`, which never shrinks.
      One not yet won simply needs the number to climb again.
    - **What if `Restore` gets an id no achievement has?** The inner loop finds no match,
      and the id is dropped without a word. Fine for an achievement Sam removes one day; a
      typo in your save code would vanish just as quietly.
    - **What if the Stat Source isn't an `IStatSource`?** `Awake` checks with `as`, logs
      an error naming the object, and switches the tracker off. It fails loudly, at the
      start, and in one place: good behaviour for a module.

### Do it — plug it in

14. Select `Trophies` (Chapter 7's object, with the `ToastQueue`). **Add Component → Game
    Stats**: **Stands** the five businesses, **Wallet**, **Upgrades**, **Van** the
    `Delivery Van`.
15. **Add Component → Achievement Tracker**. Drag the twelve assets from
    `Achievements/Achievements` into **Achievements**, and `Trophies` itself into **Stat
    Source**: Unity puts the first component it finds there, so check it says `Trophies
    (Game Stats)`; if not, drag the **Game Stats** component's title instead.
16. Try the module on its own first, with Sam's test toast: drag
    `Assets/Achievements/Toast.cs` onto `Trophies`, and drag `Trophies` into its
    **Tracker**. **Play**, and squeeze the cup once: the Console says *Achievement won:
    First Sip*. The module works. Stop, and remove Sam's toast again: it's for his tests.
17. Now your toast. `ToastQueue` shows trophies too, and pays their rewards. Here's a
    mistake worth making once. Say you write the reward like this:

```csharp
    void OnUnlocked(Achievement achievement)
    {
        int reward = achievement.Reward;
        // …
    }
```

```
Assets/Scripts/Trophies/ToastQueue.cs(45,22): error CS0266: Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)
```

18. **CS0266**: the contract says `Reward` is a `long`, and a `long` doesn't fit in an `int`
    without a cast, which could lose part of it. Don't cast: an idle game's coins are
    `long`s, and the wallet takes a `long` anyway. Here's the whole `ToastQueue`:

```csharp
using System.Collections.Generic;
using LanternHill.Achievements;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Manager hired!",
// and every trophy won. The toast shows them one at a time. A trophy's reward
// is paid the moment it's won. Sam's module has a Toast of its own: with his
// namespace in a using, "Toast" still means ours, because C# looks in this
// file's own namespace before the ones a using brings in.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] AchievementTracker tracker;
    [SerializeField] Upgrades upgrades;
    [SerializeField] Toast toast;
    [SerializeField] Wallet wallet;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        tracker.Unlocked += OnUnlocked;
        upgrades.Bought += OnUpgradeBought;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        tracker.Unlocked -= OnUnlocked;
        upgrades.Bought -= OnUpgradeBought;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a manager gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is ManagerUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, "Manager hired!", $"{upgrade.Target.DisplayName} squeezes by itself now.", false));
            ShowNext();
        }
    }

    void OnUnlocked(Achievement achievement)
    {
        string line = achievement.Description;
        if (achievement.Reward > 0)
        {
            wallet.Add(achievement.Reward);
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
    Hover over `Toast` in your code editor: it says `class Toast`, with no namespace.
20. On `Trophies`, the `ToastQueue` has two new fields: **Tracker** (`Trophies`) and
    **Wallet**.

### Do it — the Trophies tab

21. A row for each trophy: in `Safe Area`, an **Image** `Trophy Row`, 1000 × 136, `Panel
    Light`, **Sliced**, with a **Layout Element** (**Preferred Height** 136, **Flexible
    Width** 1):

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Picture` | an Image | middle–left | (20, 0) | 100 × 100 | `trophy_3d`, Preserve Aspect, no raycast |
| `Title` | a text | top–left | (140, −12) | 660 × 50 | `First Sip`, size 40, brown |
| `Description` | a text | top–left | (140, −62) | 660 × 64 | `Sell your first cup`, size 27, light brown |
| `Tick` | an Image | middle–right | (−24, 0) | 86 × 90 | `Icon Tick`, Preserve Aspect, no raycast |

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
    time it opens after that, each row only checks whether its trophy is won. Open the
    **Trophies Panel** prefab, add `TrophiesPanel`: **Row Prefab** the **Trophy Row**,
    **Content** the panel's `List`. In the scene, set the instance's **Tracker** to
    `Trophies`.

### Do it — ask for a change, in writing

26. The Trophies tab would be better with a bar under each trophy: 37 of 50 businesses.
    The tracker can't tell you that: `GetStat` is yours, but there's no "how far" for one
    achievement. Don't add it to Sam's file. Write to Sam instead, in three parts, as a
    note in your project (`REQUESTS.md`, next to the style guide):
    - **What:** a method `float ProgressOf(Achievement achievement)`, 0 to 1.
    - **Why:** a progress bar in the Trophies tab.
    - **How you'd use it:** `bar.fillAmount = tracker.ProgressOf(row.Achievement);` when
      the panel opens.

    Your trainer plays Sam, and answers. A change to a shared module goes through its
    owner, so every game that uses it gets the same version.

### Test it

- **Play.** Squeeze the cup once: *Trophy: First Sip*, `Sell your first cup +$10`, and the
  money jumps by $10.
- **Test: Add $1M**, then hire a manager: *Manager hired!* and, right after it, *Trophy:
  Hired Help*: the queue showed them one at a time.
- Buy businesses until you own 50 in all: *Busy Beach*. Open **Trophies**: three rows in
  colour with a tick, nine grey.
- Close and open the tab again: the rows aren't made twice (look in the Hierarchy).
- **Stop, then Play again.** Every trophy is grey again: nothing is saved yet. Chapter 11
  saves `WonIds`.

### Commit

*Plug in Sam's achievements: stats, toasts and the Trophies tab.*

### Challenge

A thirteenth trophy, with no code at all: *Juice Baron*, own 200 businesses, a $250,000
reward, with `crown_3d`. Make the asset in your own `Data` folder (not Sam's), and add it
to the tracker's list. Why could you do this without touching any code, Sam's or yours?

# Part 4 — A Whole Game

## C# 10 — Static: Uses and Risks

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
| a choice carried to the next scene | `RaceSetup.Track` | loading a scene destroys its objects, but not a static (C# 11) |

```csharp
// Every PlayerPrefs key in the game, in one place.
public static class SettingsKeys
{
    public const string MusicVolume = "MusicVolume";
    public const string Difficulty = "Difficulty";
}
```

`PlayerPrefs.GetFloat(SettingsKeys.MusicVolume, 1f)` can't be misspelt the way
`"MusicVolum"` can: a wrong name doesn't compile (C# 13 covers PlayerPrefs).

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
`MissingReferenceException` from C# 5 as soon as it reaches its destroyed
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
| a small setting: the volume, a key binding | PlayerPrefs (C# 13) | it's deleted: it survives quitting |
| game data: unlocks, a deck, the cash of a juice empire | a JSON file (C# 13) | it's deleted |

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

## C# 11 — Scenes

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
where it leads. C# 5 compares this kind of event, a UnityEvent, with C# events.

### Idea — passing data between scenes

Everything in a scene is destroyed when it unloads, so the track chosen in the Menu must
wait somewhere outside any scene. There are four places:

| Way | Lasts | Use it for | Watch out for |
| --- | --- | --- | --- |
| a **static class** | until the game quits | a choice in one scene for the next | old values, and a scene played on its own |
| a **ScriptableObject** asset | until the game quits | the same, through an asset | set every value, every time |
| **PlayerPrefs** or a file | after quitting, too | settings, best times, the save | C# 13 |
| **`DontDestroyOnLoad`** | until it's destroyed | an object that must keep running | a new copy each time you come back |

**1. A static class.** It belongs to no scene and no object, so it survives every load
(C# 10 covers the risks):

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

## Chapter 10 — Title, Beach and Report

**Goal:** a whole game in three scenes. A **Title** with the logo, **New Game**,
**Settings**, **Credits** and **Quit**; the **Beach** you've built; and a **Report**
scene that shows whatever the scene before it left for it. Each scene fades into the
next, and a **Title** button on the Beach's Settings panel goes back.

### Idea — three scenes, one route

```
 ┌─────────┐ Continue  ┌──────────────────┐  Collect   ┌──────────────────────┐
 │  Title  │ ────────► │      Report      │ ─────────► │        Beach         │
 │         │ (away?)   │ "Welcome back":  │            │ the game: businesses,│
 └─────────┘           │ $ made while away│            │ panels, tabs         │
      │ New game       │ [Collect] [×2 ▶] │            └──────────┬───────────┘
      └──────────────► └──────────────────┘ ◄── New Beach ───────┘
                          "Your new beach": stars won, the bonus
                          Session.Report (static) carries what to show
```

**One scene, two uses.** The Report scene says *Welcome back* when you come back after
a while (Chapter 12), and *Your new beach* after you open one (Chapter 13). It doesn't
know which: it shows a `Report`, a plain C# class with a title, some lines and an
amount, made by the scene before. How does a `Report` get from one scene to the next,
when loading a scene destroys everything in the old one? C# 10 gave the answer
and its price: a `static` class, `Session`, whose values belong to no scene.

**The price.** This project reloads only the scene when you press Play, not the domain
(C# 10): statics keep the last Play's values. `Session` resets itself at the
start of every Play, with `[RuntimeInitializeOnLoadMethod]`, before any scene loads.

**A scene started on its own.** You'll press Play in the Report scene to work on it, with
nothing before it, so `Session.Report` is empty. The Report then shows a **test** report,
and says so in the Console: a warning, not an error, since it's what you asked for.

### Do it — the fader

1. Every scene fades in from dark brown, and out before the next loads. In the Beach
   scene, **Create Empty**, `Scene Fader`. Add a **Canvas** (**Screen Space - Overlay**,
   **Sort Order** 100, over every other canvas), a **Graphic Raycaster** and a **Canvas
   Group**. In it, an **Image** `Curtain`, **stretch–stretch** with no gaps, colour
   `#2A1A0C`.
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
   Raycasts** stops taps reaching the buttons beneath while it fades. Add `SceneFader`
   to `Scene Fader`, drag its own Canvas Group into **Curtain**, and set the Canvas
   Group's **Alpha** to 1: every scene starts dark, then fades in. Drag `Scene Fader` into
   `Prefabs`.

### Do it — what one scene hands the next

4. In `Scripts/Flow`, `Report`, what the Report scene shows, and its two kinds:

```csharp:Report.cs
using System.Collections.Generic;

// What the Report scene shows: "Welcome back" (what you earned while away,
// and the chance to double it), or "Your new beach" (the stars you won).
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
    public List<string> Lines { get; private set; }
    public long Amount { get; private set; }    // the money for Welcome back; the stars won for a new beach

    public Report(ReportKind kind, string title, long amount)
    {
        Kind = kind;
        Title = title;
        Amount = amount;
        Lines = new List<string>();
    }
}
```

5. In `Scripts/Flow`, `Session`:

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

6. `[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]`
   asks Unity to call `ResetForPlay` at the very start of every Play, before the first
   scene's `Awake`. In a build it runs once, when the game starts: the same.

### Do it — the Title scene

7. In `Assets/Scenes`, select `Beach` and duplicate it (**Ctrl+D**): rename the copy
   `Title`, and open it. Delete everything but the **Main Camera**, the **Global Light
   2D**, the **Canvas** with its `Safe Area` (delete every child of `Safe Area`), the
   **EventSystem** and the **Scene Fader**. The camera and the canvas are already set up
   for a portrait phone.
8. Drag `Art/Background/Beach` in again: **Position** (0, 0, 0), **Scale** (1.3, 1.3, 1),
   **Order in Layer** `-10`. The whole beach, filling the screen.
9. In `Safe Area`, the logo and the buttons. Every anchor here is the centre, except the
   logo's two, which are **top–center** with Shift:

| Object | What | Pos | Size | Set |
| --- | --- | --- | --- | --- |
| `Logo Picture` | an Image (top–center) | (0, −140) | 380 × 380 | `tropical_drink_3d`, Preserve Aspect, no raycast |
| `Logo` | a text (top–center) | (0, −530) | 1040 × 200 | `Juice Tycoon`, size 150, `#FFC83D` (gold), centred, the Shadow preset |
| `Continue Button` | **Candy Button Green** | (0, −40) | 620 × 150 | `Continue`, size 64 |
| `Continue Detail` | a text | (0, −150) | 800 × 60 | empty, size 42, white, centred, the Shadow preset |
| `New Game Button` | **Candy Button** | (0, −280) | 620 × 140 | `New Game`, size 56 |
| `Settings Button` | **Candy Button** | (−160, −440) | 300 × 124 | `Settings` |
| `Credits Button` | **Candy Button** | (160, −440) | 300 × 124 | `Credits` |
| `Quit Button` | **Candy Button Red** | (0, −590) | 300 × 124 | `Quit` |

10. **Continue** has nothing to continue until Chapter 11 saves a game. It should look
    it: select `Continue Button`, set its Button's **Transition** to **Sprite Swap**, and
    drag `Button Grey` into **Disabled Sprite**. A button that isn't **Interactable** now
    shows the grey sprite, with no code. (The rows' Buy buttons swap their sprite in code
    instead, because they change the picture for other reasons too.)
11. The Title needs a **Credits** panel. Make a variant of **Panel**, `Credits Panel`:
    title `Credits`, and in `Content` a text `Text`, **stretch–stretch** with no gaps,
    size 34, brown, aligned top left, with:

```
<b>Juice Tycoon</b>, for the Unity Programmer Curriculum, Level 4

Pictures: <b>Fluent Emoji</b> by Microsoft (MIT licence)
Buttons and panels: <b>Free Game GUI</b> by pzUH (CC0)
Beach: <b>Free Beach game background</b> by bevouliin (CC0)
Font: <b>Lilita One</b> by Juan Montoreano (SIL Open Font Licence)
Sounds and music: <b>Ninja Adventure</b> by Pixel-Boy and AAA (CC0)
```

12. Chapters 16 and 17 add two lines to the credits, for DOTween and LevelPlay.
13. In `Safe Area`, **Create Empty**, `Panels`: **stretch–stretch**, **Left** 30, **Top**
    140, **Right** 30, **Bottom** 140. Drag in a **Settings Panel** and a **Credits Panel**,
    and add a **Panel Switcher** with the two in its **Panels**. **Settings Button**'s On
    Click: **Toggle**, with the Settings panel; **Credits Button**'s: **Toggle**, with the
    Credits panel; each panel's **Close Button**: **CloseAll**. The same script as the
    Beach's tabs, reused. Untick both panels.
14. In `Scripts/Flow`, `TitleScreen`:

```csharp
using UnityEngine;
using UnityEngine.UI;

// The Title scene's buttons. Continue waits for Chapter 11's save; New Game
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
        continueButton.interactable = false;    // nothing saved yet: Chapter 11
    }

    public void StartNewGame()
    {
        fader.FadeTo("Beach");
    }

    public void Quit()
    {
        Application.Quit();
    }

    // A test until Chapter 12 makes real reports: while playing, open this
    // component's ⋮ menu in the Inspector.
    [ContextMenu("Test: Show a Report")]
    void ShowTestReport()
    {
        Report report = new Report(ReportKind.WelcomeBack, "Hello from the Title!", 4200);
        report.Lines.Add("Made by the Title scene, shown by the Report scene.");
        Session.Report = report;
        fader.FadeTo("Report");
    }
}
```

15. **Create Empty**, `Title Screen`, with `TitleScreen`: **Continue Button**, **Quit
    Button** and **Fader** (the `Scene Fader`). **New Game Button**'s On Click: **Title
    Screen → TitleScreen → StartNewGame**; **Quit Button**'s: **Quit**.
16. `Application.Quit` does nothing in the Editor, and on the Web a page can't close
    itself, so the Quit button hides there. `Application.platform` says where the game is
    running: `WebGLPlayer` is a browser.

### Do it — the Report scene

17. Duplicate `Title` as `Report`, open it, and delete everything in `Safe Area` and the
    `Title Screen`. Keep the beach, the camera, the light, the canvas and the fader.
18. In `Safe Area`, an **Image** `Window`: centred, **Pos** (0, −40), 960 × 1120, `Panel`,
    **Sliced**. In it:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Ribbon` | an Image | top–center | (0, 60) | 800 × 150 | `Ribbon`, Sliced |
| `Ribbon/Title` | a text | stretch–stretch: **Left** 100, **Top** 12, **Right** 100, **Bottom** 40 | | | `Welcome back!`, size 56, white, centred, Shadow |
| `Picture` | an Image | top–center | (0, −140) | 260 × 260 | `money_bag_3d`, Preserve Aspect |
| `Amount` | a text | top–center | (0, −420) | 880 × 150 | `+$0`, size 120, gold, centred, Shadow |
| `Lines` | a text | top–center | (0, −590) | 840 × 280 | empty, size 38, brown, centred at the top |
| `Collect Button` | **Candy Button** | bottom–center | (−210, 70) | 390 × 150 | `Collect` |

19. **Collect** sits to the left: Chapter 17 puts **Collect ×2** beside it. In
    `Scripts/Flow`, `ReportScreen`:

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
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        amount.text = "+$" + NumberFormat.Money(report.Amount);
    }

    public void Collect()
    {
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

20. `string.Join("\n", report.Lines)` puts the lines one under another. **Collect**
    empties `Session.Report` before leaving: a report is shown once. **Create Empty**,
    `Report Screen`, with `ReportScreen`; fill its fields, and set **Collect Button**'s On
    Click to **ReportScreen → Collect**.

### Do it — back to the Title, and the build's scenes

21. Open the **Settings Panel** prefab. In `Content`, a **Candy Button** `Title Button`:
    anchor **bottom–right** with Shift, **Pos** (0, 20), 280 × 110, label `Title`.
22. Open the `Beach` scene. Drag the **Scene Fader** prefab in, if it isn't there yet.
    Select the Settings panel's `Title Button`: On Click, drag the `Scene Fader` in,
    **SceneFader → FadeTo (string)**, and type `Title` in the box.
23. In the `Title` scene, select the Settings panel's `Title Button` and untick it: you're
    already at the Title.
24. **File → Build Profiles**, **Scene List**: drag in `Title`, `Report` and `Beach`, with
    `Title` first. The first scene is the one a build starts with; `LoadSceneAsync` can
    only load scenes in this list.

### Test it

- Open `Title` and **Play**. The screen fades in from brown. **Continue** is grey. **New
  Game**: a fade, and you're on the beach. The cog, then **Title**: back.
- **Settings** and **Credits** on the Title open their panels; the red **×** closes them.
- On the Title, while playing: select `Title Screen`, open the ⋮ menu of its **Title
  Screen** component, and choose **Test: Show a Report**. The Report scene says *Hello
  from the Title!*: a `Report` made by one scene, shown by the next. **Collect**: the
  beach.
- Open `Report` and press **Play**: *Welcome back! (test)*, and a yellow warning in the
  Console. Click the warning: Unity highlights the `Report Screen`, the object given as
  the warning's second argument.
- **The stale static.** In `Session`, put `//` in front of the
  `[RuntimeInitializeOnLoadMethod…]` line. Play the Title, **Test: Show a Report**, and
  stop on the Report scene **without** collecting. Now Play the `Report` scene on its own:
  it says *Hello from the Title!* again, a report from a Play that's over. Take the `//`
  away and try again: the test report. That's the line's whole job.

### Commit

*Add the Title and Report scenes, the fader, and Session.*

### Challenge

Give the Report scene a second way out: a small **Title** button in the top corner, for
players who want the menu. Which existing method can its On Click call, with no new
code?

## C# 12 — Exceptions: try and catch

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

Exceptions are a family of classes (C# 7): a `FileNotFoundException`
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
C# 13 builds a whole save system this way.

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

## C# 13 — Saving: PlayerPrefs and JSON

**Goal:** you can keep a player's settings in PlayerPrefs and their progress in a JSON save
file, read both back safely, and choose the right place for each piece of data
(Associate: Programming — save data between scenes and sessions (static, PlayerPrefs)).

### Idea — three places to keep things

Static data is gone when the game closes. PlayerPrefs and files are on the disk, so
they're still there next time: *between sessions*, as the exam puts it.

| Place | Lasts | Good for | Example |
| --- | --- | --- | --- |
| a `static` field (C# 10) | until the game closes | passing data between scenes in one run | the kart picked on the menu |
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

| Problem | `Load` sees | and does (C# 12) |
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
ScriptableObject (C# 4) with an `id` field, and look karts up by it.
Add an **Unlock** button that saves the next kart's id, and a vibration toggle in
PlayerPrefs. Type an unknown id into the file: does the game warn, and carry on?

## Chapter 11 — Save and Load

**Goal:** the game saved to a JSON file: your money, every business, the upgrades, the
van, the counts behind the trophies and the trophies won. It saves every 30 seconds, when
a phone sends it to the background, and when you leave the Beach. **Continue** on the
Title brings it all back; **New Game** asks before it throws a save away. A missing or
damaged file never stops the game.

### Idea — what to save, and what not

Saving is choosing. Some of the game's state must outlive quitting; some of it can be
worked out again from the rest; some doesn't matter.

| Saved | Not saved, because… |
| --- | --- |
| the money, and what you've earned in your life | |
| how many of each business you own, by its **id** | |
| the **ids** of the upgrades bought | what they did (×3, ×2, a manager) is applied again from the ids |
| the van's level | its place on the road: a new trip starts |
| the counts Sam's trophies need, and the trophies won (their ids) | the toasts already shown |
| | a cycle half done: a business with a manager starts a new one at once |

**Ids, not things.** `JsonUtility` (C# 13) writes a class's public fields as
text. It can't write a reference to an asset (a `StandInfo`, an `Upgrade`), and it can't
write a `Dictionary`. So the save keeps **ids**: `"lemonade-cup"`, `"fresh-lemons"`. When
the game loads, the businesses find their own id, and the `UpgradeLibrary` turns each
upgrade id back into its upgrade (that's what its `Dictionary` is for). This is also why
an id must never change once players have saves: `"fresh-lemons"` renamed to
`"lemon-recipe"` would quietly lose the upgrade for everyone.

**When to save.** A phone game can be closed at any moment, often without quitting: the
player switches apps, and the phone may stop the game later without warning. So the game
saves:

| When | Unity calls |
| --- | --- |
| every 30 seconds | `Update`, with a timer |
| a phone sends the game to the background; a browser tab is hidden | `OnApplicationPause(true)` |
| the game quits | `OnApplicationQuit` |
| the Beach scene closes (back to the Title) | `OnDestroy` |

**Never let a file break the game.** A save can be missing (the first run), half written
(the battery died), or edited by a curious player. C# 12: reading it goes in
a `try`; a file that can't be read is logged, kept aside for you to look at, and the game
starts afresh.

### Do it — what the file holds

1. In `Scripts/Save`, `SaveData`, the file's shape, with two small classes for its lists:

```csharp
using System.Collections.Generic;

// Everything juice-tycoon.json keeps. JsonUtility saves public fields only,
// and can't save a Dictionary: the businesses are a list, and the upgrades and
// trophies are ids.
[System.Serializable]
public class SaveData
{
    public int version = 1;
    public long money;
    public long lifetimeEarned;
    public List<StandSave> stands = new List<StandSave>();
    public List<string> upgrades = new List<string>();
    public int vanLevel;
    public StatsSave stats = new StatsSave();
    public List<string> trophies = new List<string>();
}

// One business: which, and how many you own.
[System.Serializable]
public class StandSave
{
    public string id;
    public int owned;
}

// The counts behind Sam's achievements, for the player's whole life.
[System.Serializable]
public class StatsSave
{
    public long cupsSold;
    public long taps;
    public long balloonsPopped;
    public long beachesOpened;
    public long awayEarned;
    public long upgradesBought;
}
```

2. The style guide's one exception: a save-data class has **public fields**, because
   `JsonUtility` writes public fields. `[System.Serializable]` lets it write the two small
   classes inside. `version` is for one day: if the shape of the file changes, the game
   can tell an old file from a new one.

### Do it — reading and writing, safely

3. In `Scripts/Save`, `SaveSystem`:

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

5. Loading puts each part of the game back as it was. Each part does its own: the
   wallet its money, each business how many it owns, the upgrades their ids. Add this at
   the end of `Wallet`:

<!-- check: add to Wallet -->
```csharp
    // … as before …

    // Loading a save.
    public void Restore(long money, long lifetimeEarned)
    {
        Money = money;
        LifetimeEarned = lifetimeEarned;
        MoneyChanged?.Invoke(Money);
    }
}
```

6. At the end of `JuiceStand`:

<!-- check: add to JuiceStand -->
```csharp
    // … as before …

    // Loading a save: how many you owned. The upgrades are applied again afterwards.
    public void Restore(int owned)
    {
        Owned = owned;
        Changed?.Invoke();
    }
}
```

7. At the end of `Upgrades`:

<!-- check: add to Upgrades -->
```csharp
    // … as before …

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
}
```

8. Here's where Sam's question from Chapter 9 comes back: what if a saved id no longer
   exists? `Upgrades` doesn't drop it silently: it **warns**, and carries on. `out Upgrade
   upgrade` declares the variable inside the call: `TryGetUpgrade` fills it, and returns
   whether it found one. And it applies the upgrade **without paying**: `Apply`, not
   `TryBuy`.
9. At the end of `DeliveryVan`:

<!-- check: add to DeliveryVan -->
```csharp
    // … as before …

    public void Restore(int level)
    {
        Level = level;
        body.enabled = Level > 0;
        Changed?.Invoke();
    }
}
```

10. And `GameStats` turns its counts into a `StatsSave`, and back. At its end:

<!-- check: add to GameStats -->
```csharp
    // … as before …

    public void Restore(StatsSave saved)
    {
        CupsSold = saved.cupsSold;
        Taps = saved.taps;
        BalloonsPopped = saved.balloonsPopped;
        BeachesOpened = saved.beachesOpened;
        AwayEarned = saved.awayEarned;
        UpgradesBought = saved.upgradesBought;
    }

    public StatsSave ToSave()
    {
        StatsSave saved = new StatsSave();
        saved.cupsSold = CupsSold;
        saved.taps = Taps;
        saved.balloonsPopped = BalloonsPopped;
        saved.beachesOpened = BeachesOpened;
        saved.awayEarned = AwayEarned;
        saved.upgradesBought = UpgradesBought;
        return saved;
    }
}
```

11. Sam's tracker already has its half: `WonIds` to save, `Restore` to give them back.
    That was in the contract.

### Do it — the Beach loads, and saves

12. In `Scripts/Flow`, `BeachGame`:

```csharp
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, and saves every 30 seconds, when a phone sends the game to the
// background, and when the scene closes.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
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

    // Leaving the scene: for the Title.
    void OnDestroy()
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
        data.money = wallet.Money;
        data.lifetimeEarned = wallet.LifetimeEarned;
        foreach (JuiceStand stand in stands)
        {
            StandSave saved = new StandSave();
            saved.id = stand.Info.Id;
            saved.owned = stand.Owned;
            data.stands.Add(saved);
        }
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.vanLevel = van.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        SaveSystem.Save(data);
    }

    void Load()
    {
        if (!SaveSystem.HasSave)
        {
            return;     // a new game: everything as the scene starts
        }
        SaveData data = SaveSystem.Load();
        wallet.Restore(data.money, data.lifetimeEarned);
        foreach (StandSave saved in data.stands)
        {
            foreach (JuiceStand stand in stands)
            {
                if (stand.Info.Id == saved.id)
                {
                    stand.Restore(saved.owned);
                }
            }
        }
        // After the stands: the upgrades multiply and automate them again.
        upgrades.Restore(data.upgrades);
        van.Restore(data.vanLevel);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```

13. **Order matters in `Load`.** The businesses get their counts first, **then** the
    upgrades are applied: *Manager: Juice Shop* applied to a Juice Shop you own none of
    yet would start nothing. Each saved business is matched by its id, so the order of
    the list in the file doesn't matter, and a business added in an update simply isn't
    in old saves: it keeps its starting count.
14. **Create Empty**, `Beach Game`, with `BeachGame`. Fill its fields: **Wallet**,
    **Stands** (the five), **Upgrades**, **Van**, **Stats** and **Tracker** (both on
    `Trophies`).

> **Watch out: `hasLoaded`.** It looks like a line you could do without. While this game
> was being made, the save kept coming back empty. The cause: Unity called
> `OnApplicationPause(true)` **before `Start`**, as it does when a game starts in the
> background (an Editor without focus, a phone that's busy). `Save` ran, wrote the scene's
> starting state (one Lemonade Cup, $0) over the real save, and *then* `Start` loaded
> that. Unity calls `OnApplicationPause` whenever the game's pause state changes, and it
> can come right after `Awake`, before `Start`. Never assume one of Unity's calls comes
> after another unless the docs promise it.

### Do it — Continue, and New Game

15. On the Title, a question before a save is thrown away. In `Safe Area`, an **Image**
    `Confirm New Game`, **stretch–stretch** with no gaps, black with **A** 153: it dims
    everything. In it, an **Image** `Window`, centred, 860 × 520, `Panel`, **Sliced**, and
    in that:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Question` | a text | stretch–stretch: **Left** 60, **Top** 60, **Right** 60, **Bottom** 200 | | | `Start again? Your saved juice empire will be deleted.`, size 42, brown, centred |
| `Yes Button` | **Candy Button Red** | bottom–left | (60, 50) | 330 × 120 | `Start Again` |
| `Cancel Button` | **Candy Button** | bottom–right | (−60, 50) | 330 × 120 | `Cancel` |

16. `TitleScreen` learns about the save. Replace it:

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

17. The test report is gone: Chapter 12 makes real ones. Fill the new fields (**Continue
    Detail**, **Confirm New Game**), and wire the buttons: **Continue Button** →
    **Continue**; **New Game Button** → **AskNewGame** (no longer **StartNewGame**); **Yes
    Button** → **StartNewGame**; **Cancel Button** → **CancelNewGame**.

### Test it

- Play the **Title**. **New Game**, then earn some money, buy a few businesses, an
  upgrade and a manager. Cog, **Title**. **Continue** is green now, with your money under
  it. **Continue**: everything is as you left it. *Fresh Lemons* still triples the
  Lemonade Cup (applied again, from its id), and the managers' bars are running. No toast
  for *First Sip*: it was won before, and `Restore` doesn't raise `Unlocked`.
- **Where's the file?** In `BeachGame.Start`, add `Debug.Log(Application.persistentDataPath);`
  for a moment, Play, and copy the folder from the Console (on a Mac it's under
  `~/Library/Application Support/`, on Windows under `AppData\LocalLow`). Open
  `juice-tycoon.json` in a text editor: your game, as text. Take the log out again.
- **Break it.** With the game stopped, delete the file's last `}` and save it. Play the
  Title: the Console says the file is damaged and kept as `juice-tycoon.bad.json`;
  **Continue** shows `$0`, and the game starts afresh. Nothing crashed. Delete both files
  (or use **New Game**) to tidy up.
- **New Game** with a save: the question. **Cancel**: nothing lost. **Start Again**: a new
  game, and **Continue** is grey when you come back.
- Leave the Beach running for 30 seconds, then stop Play from the Editor's toolbar: the
  file's time (in Finder or Explorer) shows it was saved.

### Commit

*Save and load: the JSON save, Continue, and New Game.*

### Challenge

The save writes the whole file at once; if the computer died halfway through writing,
the file could be cut in half. A safer way: write to `juice-tycoon.tmp` first, then
replace the real file with it (`File.Copy(temp, real, true)`), so the real file is either
the old one or the new one, never half of each. Change `SaveSystem.Save`, and keep the
`try` / `catch`.

## Chapter 12 — While You Were Away

**Goal:** what makes an idle game idle. Close the game, come back later, and **Welcome
back!** says how long you were away and what each manager and the van made meanwhile,
up to 8 hours' worth. **Collect** adds it to your money. A clock set backwards can't fool
it.

### Idea — time, as a number

To know how long you were away, the save must say **when** it was saved. C#'s
`DateTime.UtcNow` is the time now; but `JsonUtility` can't save a `DateTime`. It can save
a `long`, and a `DateTime` is one inside: its **`Ticks`**, the number of 100-nanosecond
steps since the year 1. Ten million ticks make a second.

```
saved:   638,999,712,000,000,000 ticks
now:     639,000,432,000,000,000 ticks
away:    720,000,000,000 ticks ÷ 10,000,000 = 72,000 seconds = 20 hours
```

**UTC**, not local time: a phone that changes time zone, or a clock that jumps an hour
for summer time, would otherwise give or take an hour of income.

The **rules**, from the balance sheet:

| You were away | What counts |
| --- | --- |
| less than a minute | nothing: no Welcome back |
| 1 minute to 8 hours | all of it |
| more than 8 hours | 8 hours: come back at least once a day |
| a **negative** time | nothing: the phone's clock was set backwards |

**What earned while you were away?** The Beach scene isn't even loaded when the Title
works this out. So the save keeps it: when the game saves, it writes down each
`IIncomeSource` that earns by itself, and how much a second. Coming back, each one's
share is its per-second × the seconds away. The interface from Chapter 8 again: the save
asks "what earns by itself?" and never "is it a business or a van?".

### Do it — durations, short

1. `NumberFormat` learns to say how long: `45 s`, `12 min`, `3 h 05 min`. Its last form:

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

2. `{minutes % 60:00}`: inside `$"…"`, a colon after a value gives its format. `00`
   means at least two figures, so 5 minutes past is `05`.

### Do it — the time in the save

3. `SaveData` gets the time it was saved, and what was earning then:

```csharp
using System.Collections.Generic;

// Everything juice-tycoon.json keeps. JsonUtility saves public fields only,
// and can't save a Dictionary or a DateTime: the businesses are a list, the
// upgrades and trophies are ids, and the time is a long, DateTime's Ticks.
[System.Serializable]
public class SaveData
{
    public int version = 1;
    public long money;
    public long lifetimeEarned;
    public List<StandSave> stands = new List<StandSave>();
    public List<string> upgrades = new List<string>();
    public int vanLevel;
    public StatsSave stats = new StatsSave();
    public List<string> trophies = new List<string>();
    // When it was saved, and what earned by itself then: enough to work out
    // what you earned while away, before the Beach scene is even loaded.
    public long savedAtTicks;
    public List<AwaySource> awaySources = new List<AwaySource>();
}

// One business: which, and how many you own.
[System.Serializable]
public class StandSave
{
    public string id;
    public int owned;
}

// The counts behind Sam's achievements, for the player's whole life.
[System.Serializable]
public class StatsSave
{
    public long cupsSold;
    public long taps;
    public long balloonsPopped;
    public long beachesOpened;
    public long awayEarned;
    public long upgradesBought;
}

// Something that earns while you're away, and how much each second.
[System.Serializable]
public class AwaySource
{
    public string name;
    public long perSecond;
}
```

4. An old save, from before this chapter, has no `savedAtTicks`: `JsonUtility` leaves a
   field it doesn't find at its starting value, 0. The code below treats 0 as "never
   saved", so old saves still load.

### Do it — working it out

5. In `Scripts/Flow`, `AwayEarnings`:

```csharp:AwayEarnings.cs
using System;

// What you earned while you were away, worked out from the save: the time it
// was saved, and what earned by itself each second then. Up to 8 hours count.
// A clock set backwards makes the time negative: that counts as no time.
public static class AwayEarnings
{
    const double MaxSeconds = 8 * 60 * 60;
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
        long total = 0;
        foreach (AwaySource source in data.awaySources)
        {
            total += (long)(source.perSecond * seconds);
        }
        Report report = new Report(ReportKind.WelcomeBack, "Welcome back!", total);
        report.Lines.Add($"You were away {NumberFormat.Duration(seconds)}.");
        foreach (AwaySource source in data.awaySources)
        {
            report.Lines.Add($"{source.name}: +{NumberFormat.Money((long)(source.perSecond * seconds))}");
        }
        return report;
    }
}
```

6. Three things to notice. `now` is a **parameter**, not `DateTime.UtcNow` inside: the
   method works out the same answer for the same inputs, which is what makes it easy to
   test (the Challenge does). `TimeSpan.TicksPerSecond` names the ten million, as the
   style guide asks. And `(double)` before dividing: two `long`s would divide as whole
   numbers, losing every part of a second.
7. `MakeReport` returns `null` for "nothing to show". The caller must check for it: that's
   the price of returning `null`, and the Title does, below.

### Do it — saving the time, and collecting

8. `Session` carries one more thing: what Welcome back collected, for the Beach to add.
   Its last form:

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
    public static long AwayCollected { get; set; }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    static void ResetForPlay()
    {
        Report = null;
        AwayCollected = 0;
    }
}
```

9. `BeachGame` saves the time and the sources, and adds what was collected, once:

```csharp
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, adds what Welcome back collected, and saves every 30 seconds,
// when a phone sends the game to the background, and when the scene closes.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
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

    // Leaving the scene: for the Title.
    void OnDestroy()
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
        data.money = wallet.Money;
        data.lifetimeEarned = wallet.LifetimeEarned;
        foreach (JuiceStand stand in stands)
        {
            StandSave saved = new StandSave();
            saved.id = stand.Info.Id;
            saved.owned = stand.Owned;
            data.stands.Add(saved);
        }
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.vanLevel = van.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        // What earns by itself now.
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0)
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
        if (!SaveSystem.HasSave)
        {
            return;     // a new game: everything as the scene starts
        }
        SaveData data = SaveSystem.Load();
        wallet.Restore(data.money, data.lifetimeEarned);
        foreach (StandSave saved in data.stands)
        {
            foreach (JuiceStand stand in stands)
            {
                if (stand.Info.Id == saved.id)
                {
                    stand.Restore(saved.owned);
                }
            }
        }
        // After the stands: the upgrades multiply and automate them again.
        upgrades.Restore(data.upgrades);
        van.Restore(data.vanLevel);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```

10. Set its new **Income** field. **Add it once**: `Session.AwayCollected` goes back to 0
    the moment it's added, and the game saves straight away. Without that, a crash right
    after would bring back the old save and Welcome back would pay twice. The money
    earned away also goes to `GameStats`, for Sam's *Night Shift* trophy.

### Do it — Welcome back

11. The Title works out the report when you press **Continue**, and goes to the Report
    scene if there's something to show. `TitleScreen`:

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

12. And **Collect** hands the amount to the Beach, through `Session`. `ReportScreen`:

```csharp
using TMPro;
using UnityEngine;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back shows what you earned while away, and Collect takes it to the beach.
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
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        amount.text = "+$" + NumberFormat.Money(report.Amount);
    }

    public void Collect()
    {
        Leave(report.Amount);
    }

    void Leave(long collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

13. Why doesn't the Report add the money itself? The money lives in the Beach scene's
    `Wallet`, which doesn't exist yet. The Report leaves the amount in `Session`; the Beach
    picks it up when it loads. Each scene only touches what's in it.

### Test it

- Play the Title, **Continue** (or **New Game**), hire a manager or two, then the cog and
  **Title**. Wait a minute and a bit (or two), then **Continue**: *Welcome back!*, *You were
  away 1 min*, each manager's share, and the total. **Collect**: the money jumps by it.
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
  *8 h 00 min*, the cap.
- **A clock set backwards.** Change the line to `+= TimeSpan.FromHours(2).Ticks`: the save
  now claims it was made in the future. **Continue** goes straight to the beach: a
  negative time counts as none. (Without that `if`, the player would get minus two hours
  of income: money taken away.)
- Collect, then stop and play the Title again at once: **Continue** goes straight to the
  beach. Less than a minute away is nothing to report.
- Earn $1M while away, two or three times over: *Trophy: Night Shift*.

### Commit

*Earn while away: the time in the save, the cap, and Welcome back.*

### Challenge

`AwayEarnings` takes the time as a parameter, so it can be tested without waiting. In
your `Practice` script, make a `SaveData` by hand (`savedAtTicks` and one `AwaySource` of
$10 a second), and log `AwayEarnings.SecondsAway(data, now)` and `MakeReport(data,
now).Amount` for a `now` 30 seconds, 1 hour and 10 hours later
(`new DateTime(data.savedAtTicks).AddHours(1)`). Predict each answer first.

## Chapter 13 — A New Beach, on a Branch

**Goal:** **Juice Stars**. Everything you've ever earned turns into stars; open a new
beach to cash them in, and every star adds 5 % to everything you earn, for good. Your
businesses, upgrades, managers, van and money start again; your stars, trophies and
life-long counts stay. It's built on a **Git branch**, and merged when it works.

### Idea — starting again, faster

An idle game's growth slows down: after an hour and a half, every next thing costs more
than it's worth waiting for. Idle games fix that with a **reset that pays**: give up
what you have, and start again with a bonus that makes everything faster. Here it's a
**new beach**:

| Starts again | Stays |
| --- | --- |
| the money | the Juice Stars, and their bonus |
| the businesses (one Lemonade Cup again) | the trophies won |
| the upgrades and the managers | everything you've earned in your life |
| the van | the counts behind the trophies |

**How many stars?** The balance sheet's formula: `floor(√(lifetime earnings ÷
100,000,000))`. The square root makes each star cost more than the last:

| Stars | Earned in your life |
| --- | --- |
| 1 | $100 million |
| 2 | $400 million |
| 5 | $2.5 billion |
| 10 | $10 billion |

The stars are a **total**: earn $2.5 billion and you're worth 5 stars. If you already
have 2, a new beach gives you 3 more. The button waits until there's at least one star to
win.

**The bonus.** Each star is +5 % on everything: 5 stars, ×1.25. It's one more multiplier
in `EarningsPerCycle`, and in the van's trip. Both ask an **`IncomeBonus`**, which knows
the stars (and, in Chapter 15, a ×2 boost from the balloon).

### Idea — a branch

A new beach touches eight scripts. Halfway through, the game won't work. On `main`, a
half-done change is in everyone's way. So the work goes on a **branch**
(C# 1): a line of commits of its own, starting from `main`. Commit as often as you
like there; `main` stays as it was. When the new beach works, you **merge** the branch
into `main`, and the whole feature arrives at once.

```
main      ●───●───●──────────────────────●  merge: the new beach arrives
               \                         /
new-beach       ●── stars ──●── reset ──●
```

### Do it — the branch

1. Save the scene. In GitHub Desktop, **Current Branch → New Branch**, name it
   `new-beach`, **Create Branch**: it starts from `main`. The top bar says **Current
   Branch: new-beach**. Everything you commit now goes on it.

### Do it — the stars and their bonus

2. In `Scripts/Income`, `IncomeBonus`:

```csharp
using System;
using UnityEngine;

// What multiplies everything you earn: the Juice Stars, each worth +5 % for
// good. Chapter 15 adds a boost.
public class IncomeBonus : MonoBehaviour
{
    const float StarBonus = 0.05f;

    public int Stars { get; private set; }
    public float Multiplier { get { return 1f + StarBonus * Stars; } }

    public event Action Changed;

    public void SetStars(int stars)
    {
        Stars = stars;
        Changed?.Invoke();
    }

    // Loading a save.
    public void Restore(int stars)
    {
        Stars = stars;
        Changed?.Invoke();
    }
}
```

3. Add it to the `Income` object. Now each business multiplies its earnings by the bonus,
   and can go back to how the game starts. `JuiceStand`'s last form:

```csharp:JuiceStand.cs
using System;
using UnityEngine;

// One business on the beach: how many you own, what the upgrades did to it,
// and its cycle. Squeeze starts a cycle; when the bar fills it sells, and a
// business with a manager starts the next cycle by itself. It earns more for
// every one you own, and twice as much at each milestone.
public class JuiceStand : MonoBehaviour, IIncomeSource
{
    static readonly int[] Milestones = { 25, 50, 100, 200, 300, 400 };

    [SerializeField] StandInfo info;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] int ownedAtStart;          // 1 for the Lemonade Cup: you start with one

    float priceMultiplier = 1f;
    float speedMultiplier = 1f;

    public StandInfo Info { get { return info; } }
    public int Owned { get; private set; }
    public bool IsAutomated { get; private set; }
    public bool IsRunning { get; private set; }
    public float Progress { get; private set; }     // 0 to 1, through the cycle
    public float CycleSeconds { get { return info.CycleSeconds / speedMultiplier; } }
    public string SourceName { get { return info.DisplayName; } }
    public bool EarnsWhileAway { get { return IsAutomated && Owned > 0; } }

    // What one cycle sells for now: every one you own, the upgrades, the milestones
    // and the bonus. Worked out in a double: a long times a float is worked out as
    // a float, which can't hold every whole number above 16,777,216.
    public long EarningsPerCycle
    {
        get { return (long)(info.EarningsPerCycle * Owned * (double)priceMultiplier * MilestoneMultiplier * bonus.Multiplier); }
    }

    public long IncomePerSecond
    {
        get
        {
            if (!EarnsWhileAway)
            {
                return 0;
            }
            return (long)(EarningsPerCycle / (double)CycleSeconds);
        }
    }

    // The next milestone to reach, or 0 when every one is reached.
    public int NextMilestone
    {
        get
        {
            foreach (int milestone in Milestones)
            {
                if (Owned < milestone)
                {
                    return milestone;
                }
            }
            return 0;
        }
    }

    float MilestoneMultiplier
    {
        get
        {
            float multiplier = 1f;
            foreach (int milestone in Milestones)
            {
                if (Owned >= milestone)
                {
                    multiplier *= 2f;
                }
            }
            return multiplier;
        }
    }

    public event Action<long> CupSold;      // what the cycle sold for
    public event Action Squeezed;           // a tap started a cycle
    public event Action<int> Bought;        // how many were bought
    public event Action Changed;            // owned, multipliers or manager

    void Awake()
    {
        Owned = ownedAtStart;
    }

    void Update()
    {
        if (!IsRunning)
        {
            return;
        }
        Progress += Time.deltaTime / CycleSeconds;
        // A fast, managed business can finish more than one cycle in a frame.
        while (Progress >= 1f)
        {
            Progress -= 1f;
            CupSold?.Invoke(EarningsPerCycle);
            if (!IsAutomated)
            {
                Progress = 0f;
                IsRunning = false;
                return;
            }
        }
    }

    // A tap, on the beach or on the row. Nothing happens while a cycle runs.
    public void Squeeze()
    {
        if (Owned == 0 || IsRunning)
        {
            return;
        }
        IsRunning = true;
        Squeezed?.Invoke();
    }

    public void Buy(int count)
    {
        Owned += count;
        if (IsAutomated)
        {
            IsRunning = true;   // a manager hired before you owned one starts now
        }
        Bought?.Invoke(count);
        Changed?.Invoke();
    }

    public void MultiplyPrice(float factor)
    {
        priceMultiplier *= factor;
        Changed?.Invoke();
    }

    public void MultiplySpeed(float factor)
    {
        speedMultiplier *= factor;
        Changed?.Invoke();
    }

    // A manager squeezes for you, from now on.
    public void Automate()
    {
        IsAutomated = true;
        if (Owned > 0)
        {
            IsRunning = true;
        }
        Changed?.Invoke();
    }

    // Loading a save: how many you owned. The upgrades are applied again afterwards.
    public void Restore(int owned)
    {
        Owned = owned;
        Changed?.Invoke();
    }

    // A new beach: back to how the game starts.
    public void ResetStand()
    {
        Owned = ownedAtStart;
        priceMultiplier = 1f;
        speedMultiplier = 1f;
        IsAutomated = false;
        IsRunning = false;
        Progress = 0f;
        Changed?.Invoke();
    }
}
```

4. Two changes: the **bonus** in `EarningsPerCycle`, one more multiplier in the `double`
   sum; and **`ResetStand`**, the starting count again, the multipliers back to 1, no
   manager, no cycle running. Set each business's **Bonus** to the `Income` object (select
   all five, then drag).
5. The van's trip gets the bonus too, and can be reset. `DeliveryVan`'s last form:

```csharp:DeliveryVan.cs
using System;
using UnityEngine;

// The delivery van: it opens with your first Juice Factory, then drives crates
// along the road and earns at the end of every trip, by itself. Bigger Van
// levels it up: each level carries more. It's an IIncomeSource like a managed
// business, though it shares nothing else with one.
public class DeliveryVan : MonoBehaviour, IIncomeSource
{
    [SerializeField] JuiceStand factory;            // the van opens with the first factory
    [SerializeField] IncomeBonus bonus;
    [SerializeField] SpriteRenderer body;
    [SerializeField] long earningsPerTrip = 50000;  // for each level
    [SerializeField] float tripSeconds = 10f;
    [SerializeField] long firstCost = 1000000;
    [SerializeField] float costGrowth = 1.5f;
    [SerializeField] float roadStartX = -7f;
    [SerializeField] float roadEndX = 7f;

    float tripProgress;

    public int Level { get; private set; }
    public bool IsOpen { get { return factory.Owned > 0 || Level > 0; } }
    public string SourceName { get { return "Delivery Van"; } }
    public bool EarnsWhileAway { get { return Level > 0; } }
    public long EarningsPerTrip { get { return (long)(earningsPerTrip * Level * (double)bonus.Multiplier); } }

    public long IncomePerSecond
    {
        get
        {
            if (Level == 0)
            {
                return 0;
            }
            return (long)(EarningsPerTrip / (double)tripSeconds);
        }
    }

    public long NextCost
    {
        get { return (long)Math.Ceiling(firstCost * Math.Pow(costGrowth, Level)); }
    }

    public event Action<long> Delivered;
    public event Action Changed;

    void Start()
    {
        body.enabled = Level > 0;
    }

    void Update()
    {
        if (Level == 0)
        {
            return;
        }
        tripProgress += Time.deltaTime / tripSeconds;
        if (tripProgress >= 1f)
        {
            tripProgress -= 1f;
            Delivered?.Invoke(EarningsPerTrip);
        }
        Vector3 position = body.transform.localPosition;
        position.x = Mathf.Lerp(roadStartX, roadEndX, tripProgress);
        body.transform.localPosition = position;
    }

    // Bigger Van: true if the wallet could pay.
    public bool TryLevelUp(Wallet wallet)
    {
        if (!IsOpen || !wallet.TrySpend(NextCost))
        {
            return false;
        }
        Level++;
        body.enabled = true;
        Changed?.Invoke();
        return true;
    }

    public void Restore(int level)
    {
        Level = level;
        body.enabled = Level > 0;
        Changed?.Invoke();
    }

    public void ResetVan()
    {
        Restore(0);
        tripProgress = 0f;
    }
}
```

6. `ResetVan` calls `Restore(0)`: a new beach is a game loaded at level 0. Set the van's
   **Bonus**.
7. The wallet empties its pocket, but not its memory. `Wallet`'s last form (keep your test
   helper at the end):

```csharp:Wallet.cs
using System;
using UnityEngine;

// The money. It listens to every business and every other income, adds what
// they sell, and tells anyone who shows the money, or whose button depends on
// it, that it changed. A long, not an int: an int stops at 2,147,483,647, and
// a juice empire passes that in its first hour.
public class Wallet : MonoBehaviour
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] DeliveryVan van;

    public long Money { get; private set; }
    public long LifetimeEarned { get; private set; }    // never goes down: Juice Stars come from it

    public event Action<long> MoneyChanged;

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += Add;
        }
        van.Delivered += Add;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= Add;
        }
        van.Delivered -= Add;
    }

    public void Add(long amount)
    {
        Money += amount;
        LifetimeEarned += amount;
        MoneyChanged?.Invoke(Money);
    }

    // True, and the money spent, only if there was enough.
    public bool TrySpend(long amount)
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
    public void Restore(long money, long lifetimeEarned)
    {
        Money = money;
        LifetimeEarned = lifetimeEarned;
        MoneyChanged?.Invoke(Money);
    }

    // A new beach: the money starts again; what you've earned in your life doesn't.
    public void ResetMoney()
    {
        Money = 0;
        MoneyChanged?.Invoke(Money);
    }
}
```

8. `ResetMoney` sets `Money` to 0 and leaves `LifetimeEarned` alone: the stars come from
   it. And the upgrades can all be bought again. `Upgrades`'s last form:

```csharp:Upgrades.cs
using System;
using System.Collections.Generic;
using UnityEngine;

// Which upgrades are bought, and buying one: the money is spent, the upgrade
// is applied to every business it's for, and its id is kept for the save.
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

    public bool TryBuy(Upgrade upgrade)
    {
        if (IsBought(upgrade) || !wallet.TrySpend(upgrade.Cost))
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

    // A new beach: every upgrade can be bought again.
    public void ResetAll()
    {
        boughtIds.Clear();
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

9. `ResetAll` only forgets the ids: the businesses' own `ResetStand` puts their
   multipliers back. Each part resets what it owns.
10. On the top bar, the stars. In `Scripts/UI`, `StarsText`, and add it to `Stars`
    (**Bonus** the `Income` object, **Text** `Stars Text`):

```csharp:StarsText.cs
using TMPro;
using UnityEngine;

// The Juice Stars at the top, changed only when the stars change.
public class StarsText : MonoBehaviour
{
    [SerializeField] IncomeBonus bonus;
    [SerializeField] TMP_Text text;

    void OnEnable()
    {
        bonus.Changed += Refresh;
    }

    void OnDisable()
    {
        bonus.Changed -= Refresh;
    }

    void Start()
    {
        Refresh();
    }

    void Refresh()
    {
        text.text = bonus.Stars.ToString();
    }
}
```

11. Commit, on the branch: *Add Juice Stars and their bonus*. The History tab shows it on
    `new-beach`.

### Do it — opening a new beach

12. In `Scripts/Flow`, `NewBeach`:

```csharp:NewBeach.cs
using System;
using UnityEngine;

// Opening a new beach: everything you've earned in your life turns into Juice
// Stars, each +5 % on everything, for good. The businesses, upgrades, van and
// money start again; the stars, the trophies and the life-long counts stay.
public class NewBeach : MonoBehaviour
{
    const double EarningsPerStarSquared = 100000000;    // stars = √(life-long earnings ÷ 100 million)

    [SerializeField] Wallet wallet;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
    [SerializeField] GameStats stats;
    [SerializeField] BeachGame game;
    [SerializeField] SceneFader fader;

    // Every star your life-long earnings are worth, counting those you have.
    public int StarsEarned
    {
        get { return (int)Math.Floor(Math.Sqrt(wallet.LifetimeEarned / EarningsPerStarSquared)); }
    }

    public int NewStars { get { return Math.Max(0, StarsEarned - bonus.Stars); } }
    public bool CanOpen { get { return NewStars > 0; } }

    public void Open()
    {
        if (!CanOpen)
        {
            return;
        }
        int won = NewStars;
        bonus.SetStars(StarsEarned);
        wallet.ResetMoney();
        foreach (JuiceStand stand in stands)
        {
            stand.ResetStand();
        }
        upgrades.ResetAll();
        van.ResetVan();
        stats.AddBeach();

        Report report = new Report(ReportKind.NewBeach, "Your new beach", won);
        report.Lines.Add($"You have {bonus.Stars} Juice Stars: everything earns +{bonus.Stars * 5} %, for good.");
        report.Lines.Add("Your businesses start again, by a new beach.");
        Session.Report = report;
        game.Save();
        fader.FadeTo("Report");
    }
}
```

13. Read `Open` as a list of what changes. The stars come from `LifetimeEarned`, with
    `Math.Sqrt` and `Math.Floor`; `NewStars` subtracts the ones you have. Then everything
    in the "starts again" column resets, `GameStats` counts a beach (for *New Horizons*),
    and a `Report` of the other kind goes to the Report scene: **Your new beach**, with
    the stars won as its amount. It saves first, so nothing is lost if the game closes
    on the way.
14. Add `NewBeach` to `Beach Game`, beside `BeachGame`, and fill it: **Wallet**, **Bonus**
    (`Income`), **Stands**, **Upgrades**, **Van**, **Stats** (`Trophies`), **Game** (`Beach
    Game`), **Fader**.

### Do it — the New Beach tab

15. Open the **New Beach Panel** prefab. In `Content`:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Star` | an Image | top–center | (0, −20) | 230 × 230 | `glowing_star_3d`, Preserve Aspect |
| `Have` | a text | top–center | (0, −280) | 880 × 110 | `You have 0 Juice Stars.`, size 40, brown, centred |
| `Win` | a text | top–center | (0, −400) | 880 × 110 | `Earn more for your next star.`, size 40, brown, centred |
| `What Stays` | a text | top–center | (0, −530) | 880 × 170 | `Your businesses, upgrades, managers, van and money start again. Your stars, trophies and life-long earnings stay.`, size 30, light brown, centred |
| `Open Button` | **Candy Button Green** | bottom–center | (0, 40) | 560 × 140 | `Open a new beach`; **Transition** Sprite Swap, **Disabled Sprite** `Button Grey` |

16. In `Scripts/Flow`, `NewBeachPanel`:

```csharp:NewBeachPanel.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The New Beach panel: the stars you have, the stars a new beach would give,
// and the button, which waits until there's at least one star to win.
public class NewBeachPanel : MonoBehaviour
{
    const float RefreshSeconds = 0.5f;

    [SerializeField] NewBeach newBeach;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] TMP_Text haveText;
    [SerializeField] TMP_Text winText;
    [SerializeField] Button openButton;

    float nextRefreshTime;

    void OnEnable()
    {
        Refresh();
    }

    void Update()
    {
        if (Time.unscaledTime >= nextRefreshTime)
        {
            Refresh();
        }
    }

    void Refresh()
    {
        nextRefreshTime = Time.unscaledTime + RefreshSeconds;
        haveText.text = $"You have {bonus.Stars} Juice Stars: +{bonus.Stars * 5} % on everything.";
        if (newBeach.CanOpen)
        {
            winText.text = $"A new beach now gives you +{newBeach.NewStars} more.";
        }
        else
        {
            winText.text = "Earn more for your next star.";
        }
        openButton.interactable = newBeach.CanOpen;
    }
}
```

17. Add it to the prefab's root (**Have Text**, **Win Text**, **Open Button**). In the
    scene, its instance needs **New Beach** (`Beach Game`) and **Bonus** (`Income`), and
    the **Open Button**'s On Click: **Beach Game → NewBeach → Open**.

### Do it — the stars in the save, and the report

18. The save keeps the stars. `SaveData`:

```csharp
using System.Collections.Generic;

// Everything juice-tycoon.json keeps. JsonUtility saves public fields only,
// and can't save a Dictionary or a DateTime: the businesses are a list, the
// upgrades and trophies are ids, and the time is a long, DateTime's Ticks.
[System.Serializable]
public class SaveData
{
    public int version = 1;
    public long money;
    public long lifetimeEarned;
    public int stars;
    public List<StandSave> stands = new List<StandSave>();
    public List<string> upgrades = new List<string>();
    public int vanLevel;
    public StatsSave stats = new StatsSave();
    public List<string> trophies = new List<string>();
    // When it was saved, and what earned by itself then: enough to work out
    // what you earned while away, before the Beach scene is even loaded.
    public long savedAtTicks;
    public List<AwaySource> awaySources = new List<AwaySource>();
}

// One business: which, and how many you own.
[System.Serializable]
public class StandSave
{
    public string id;
    public int owned;
}

// The counts behind Sam's achievements, for the player's whole life.
[System.Serializable]
public class StatsSave
{
    public long cupsSold;
    public long taps;
    public long balloonsPopped;
    public long beachesOpened;
    public long awayEarned;
    public long upgradesBought;
}

// Something that earns while you're away, and how much each second.
[System.Serializable]
public class AwaySource
{
    public string name;
    public long perSecond;
}
```

19. `BeachGame` saves them, and gives them back to the bonus. Two lines, and the field:

```csharp
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, adds what Welcome back collected, and saves every 30 seconds,
// when a phone sends the game to the background, and when the scene closes.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
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

    // Leaving the scene: for the Title, or for the Report after a new beach.
    void OnDestroy()
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
        data.money = wallet.Money;
        data.lifetimeEarned = wallet.LifetimeEarned;
        data.stars = bonus.Stars;
        foreach (JuiceStand stand in stands)
        {
            StandSave saved = new StandSave();
            saved.id = stand.Info.Id;
            saved.owned = stand.Owned;
            data.stands.Add(saved);
        }
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.vanLevel = van.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        // What earns by itself now.
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0)
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
        if (!SaveSystem.HasSave)
        {
            return;     // a new game: everything as the scene starts
        }
        SaveData data = SaveSystem.Load();
        wallet.Restore(data.money, data.lifetimeEarned);
        bonus.Restore(data.stars);
        foreach (StandSave saved in data.stands)
        {
            foreach (JuiceStand stand in stands)
            {
                if (stand.Info.Id == saved.id)
                {
                    stand.Restore(saved.owned);
                }
            }
        }
        // After the stands: the upgrades multiply and automate them again.
        upgrades.Restore(data.upgrades);
        van.Restore(data.vanLevel);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```

20. Set its **Bonus**. The Title shows the stars under **Continue**. In `TitleScreen`,
    the detail line and its comment change:

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
    [SerializeField] TMP_Text continueDetail;    // the money and stars in the save
    [SerializeField] GameObject confirmNewGame;
    [SerializeField] GameObject quitButton;
    [SerializeField] SceneFader fader;

    void Start()
    {
        confirmNewGame.SetActive(false);
        // A web page can't quit itself: there's no Quit on the Web.
        quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);
        bool hasSave = SaveSystem.HasSave;
        continueButton.interactable = hasSave;
        continueDetail.text = "";
        if (hasSave)
        {
            SaveData data = SaveSystem.Load();
            continueDetail.text = $"${NumberFormat.Money(data.money)}  ·  Juice Stars: {data.stars}";
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

21. Lilita One has no ★ (a font only has the letters its designer drew; a missing one
    shows as a box), so the words say *Juice Stars*.
22. The Report scene gets its second use. In the Report scene, a **Candy Button Green**
    in `Window`, `Open Beach Button`: bottom–center, **Pos** (0, 70), 600 × 150, label `To
    the beach!`, size 56. Then `ReportScreen`:

```csharp
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back offers Collect; Your new beach has one button, back to the beach.
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
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        bool isWelcome = report.Kind == ReportKind.WelcomeBack;
        if (isWelcome)
        {
            amount.text = "+$" + NumberFormat.Money(report.Amount);
        }
        else
        {
            amount.text = report.Amount == 1 ? "+1 star" : $"+{report.Amount} stars";
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

    void Leave(long collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

23. One scene, two uses: the `Kind` decides the amount's words, the picture, and which
    button shows. Fill the new fields: **Picture** (`Picture`), **New Beach Picture**
    (`glowing_star_3d`), **Collect Button** and **Open Beach Button** (the GameObjects).
    **Open Beach Button**'s On Click: **ReportScreen → OpenBeach**.

### Test it

- A star needs $100 million earned. Give yourself a second test helper, next to the first
  in `Wallet`, with `[ContextMenu("Test: Add $100M")]` and `Add(100000000)`.
- **Play.** The New Beach tab says *Earn more for your next star*, and its button is grey.
  **Test: Add $100M** once: *A new beach now gives you +1 more*. Four times in all ($400M):
  +2.
- **Open a new beach.** *Your new beach*, *+2 stars* under the glowing star, *You have 2
  Juice Stars: everything earns +10 %, for good.* **To the beach!**: one Lemonade Cup,
  $0, no upgrades, no van; the top bar says 2 stars; *Trophy: New Horizons*. Buy
  up to 25 cups: they earn $55 a cycle, not $50.
- Open the Trophies tab: every trophy you'd won is still won.
- Back to the Title: **Continue** says *Juice Stars: 2*.

### Commit, and merge

24. Commit on the branch: *Open a new beach: the reset, the panel and the report*.
25. **See what a branch is.** In GitHub Desktop, **Current Branch → main**. Unity
    reloads: the New Beach tab is empty again, `NewBeach.cs` is gone, and the game is as
    it was this morning. Switch back to `new-beach`: it's all there. (Save your scene
    before switching, every time: Git changes the files under Unity.)
26. **Merge.** Switch to `main`. **Branch → Merge into Current Branch…**, choose
    `new-beach`, **Create a merge commit**. Your two commits are on `main` now. **Push
    origin**.
27. The branch has done its job: **Branch → Delete…** removes `new-beach`. Its commits
    stay, on `main`.

### Challenge

The balance sheet's formula gives stars for everything earned in your life, so a second
new beach right after the first gives nothing until you've earned more. Change the
**What Stays** text, or the **Win** line, to tell the player how much more they need to
earn for their next star. (`(stars + 1)²` × $100 million is the total that gives it.)

## C# 14 — The Input Actions Asset

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
or pick it from the field's list. `performed` is a C# event (C# 5), so subscribe
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
binding as one string for PlayerPrefs (C# 13); a card game's End Turn, set to K:

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

## Chapter 14 — Shortcuts

**Goal:** the keyboard shortcuts a PC player expects: **1** to **5** squeeze the
businesses, **Tab** changes how many Buy buys, **U**, **M** and **T** open the Upgrades,
Managers and Trophies, **Esc** opens Settings, and with a panel open, **Esc** closes it.
Every key can be changed in Settings, and the change is remembered. On a phone, nothing
changes: taps already work.

### Idea — taps for free, keys on purpose

Everything you've built is tapped or clicked: buttons on the canvas, and the businesses
and the balloon through the camera's Physics 2D Raycaster. The **EventSystem** turns a
mouse click and a finger's tap into the same thing, so the game already works on a
phone. Try it in the Device Simulator: no code needed.

What a phone doesn't have is a keyboard. For PC and Web players, the **Input Actions
asset** (C# 14) names what the keys do:

| Map | Action | Type | Key |
| --- | --- | --- | --- |
| `Beach` | `Squeeze 1` … `Squeeze 5` | Button | 1 … 5 |
| `Beach` | `Buy Amount` | Button | Tab |
| `Beach` | `Upgrades`, `Managers`, `Trophies` | Button | U, M, T |
| `Beach` | `Menu` | Button | Escape |
| `Panel` | `Close` | Button | Escape |

**Two maps, one switched on at a time.** With the Upgrades panel open, pressing **1**
mustn't squeeze the Lemonade Cup behind it, and **Esc** should close the panel, not open
Settings over it. So when a panel opens, the `Beach` map is switched off and the `Panel`
map on; when the last panel closes, the other way round. The panel switcher already
knows when that happens: it only has to say so, with an event.

### Do it — the actions

1. In `Assets/Input`, **Assets → Create → Input Actions**, `Juice Tycoon Controls`.
   Double-click it.
2. **Action Maps**, **+**: `Beach`. In it, **+** for each action in the table, with
   **Action Type** **Button**. For each binding (the **<No Binding>** under the action),
   click **Path**, then **Listen**, and press the key. Then **+**, a second map, `Panel`,
   with one action, `Close`, on **Escape**. **Save Asset** (or tick **Auto-Save**).

### Do it — the switcher says when a panel opens

3. `PanelSwitcher` gets a property and an event. Its last form:

```csharp:PanelSwitcher.cs
using System;
using UnityEngine;

// The panels over the Beach (Upgrades, Managers, Trophies, New Beach,
// Settings): one open at a time. A tab's button calls Toggle with its panel,
// set in the button's On Click () list; a panel's close button calls CloseAll.
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

4. `OpenChanged` carries a `bool`: `true` when a panel opens over the beach, `false` when
   the last one closes. `SetOpen` raises it only on a change: switching from Upgrades to
   Managers is still "a panel is open", and says nothing.

### Do it — remembering the keys

5. In `Scripts/Save`, `GameSettings`:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// The player's settings, kept in PlayerPrefs: small values, one key each. The
// keys are constants, so a typo is a compile error, not a setting that quietly
// never loads. They start with the game's name because every game in one
// Unity project shares the same PlayerPrefs.
public static class GameSettings
{
    const string BindingsKey = "JuiceTycoon.Bindings";

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

6. Settings go in **PlayerPrefs**, not the save file (C# 13): they're small,
    they belong to this computer rather than this game's progress, and **Delete Save**
    shouldn't reset your keys. A changed key is an **override** on top of the asset's own
    binding; `SaveBindingOverridesAsJson` writes only the overrides.

### Do it — the shortcuts

7. In `Scripts/Input`, `Shortcuts`:

```csharp:Shortcuts.cs
using System;
using UnityEngine;
using UnityEngine.InputSystem;

// The keyboard shortcuts, from the Input Actions asset: 1 to 5 squeeze the
// businesses, Tab changes how many Buy buys, U, M and T open the panels, and
// Escape opens Settings. While a panel is open, the Beach map is off and the
// Panel map is on: the number keys can't squeeze behind the shop, and Escape
// closes the panel instead. Taps and clicks need none of this: the EventSystem
// already sends them to the buttons and the sprites.
public class Shortcuts : MonoBehaviour
{
    [SerializeField] InputActionAsset actions;
    [SerializeField] JuiceStand[] stands;       // in the order of the keys
    [SerializeField] BuyAmountBar amounts;
    [SerializeField] PanelSwitcher panels;
    [SerializeField] GameObject upgradesPanel;
    [SerializeField] GameObject managersPanel;
    [SerializeField] GameObject trophiesPanel;
    [SerializeField] GameObject settingsPanel;

    InputActionMap beachMap;
    InputActionMap panelMap;
    InputAction[] squeezeActions;
    Action<InputAction.CallbackContext>[] squeezeHandlers;

    void Awake()
    {
        beachMap = actions.FindActionMap("Beach", true);
        panelMap = actions.FindActionMap("Panel", true);
        squeezeActions = new InputAction[stands.Length];
        squeezeHandlers = new Action<InputAction.CallbackContext>[stands.Length];
        for (int i = 0; i < stands.Length; i++)
        {
            // A copy for the lambda: every lambda would otherwise share i, and
            // all squeeze the business after the last.
            JuiceStand stand = stands[i];
            squeezeActions[i] = beachMap.FindAction("Squeeze " + (i + 1), true);
            squeezeHandlers[i] = context => stand.Squeeze();
        }
    }

    void OnEnable()
    {
        GameSettings.LoadBindings(actions);
        for (int i = 0; i < squeezeActions.Length; i++)
        {
            squeezeActions[i].performed += squeezeHandlers[i];
        }
        beachMap.FindAction("Buy Amount", true).performed += OnBuyAmount;
        beachMap.FindAction("Upgrades", true).performed += OnUpgrades;
        beachMap.FindAction("Managers", true).performed += OnManagers;
        beachMap.FindAction("Trophies", true).performed += OnTrophies;
        beachMap.FindAction("Menu", true).performed += OnMenu;
        panelMap.FindAction("Close", true).performed += OnClose;
        panels.OpenChanged += OnPanelOpenChanged;
        OnPanelOpenChanged(panels.IsAnyOpen);
    }

    void OnDisable()
    {
        for (int i = 0; i < squeezeActions.Length; i++)
        {
            squeezeActions[i].performed -= squeezeHandlers[i];
        }
        beachMap.FindAction("Buy Amount", true).performed -= OnBuyAmount;
        beachMap.FindAction("Upgrades", true).performed -= OnUpgrades;
        beachMap.FindAction("Managers", true).performed -= OnManagers;
        beachMap.FindAction("Trophies", true).performed -= OnTrophies;
        beachMap.FindAction("Menu", true).performed -= OnMenu;
        panelMap.FindAction("Close", true).performed -= OnClose;
        panels.OpenChanged -= OnPanelOpenChanged;
        beachMap.Disable();
        panelMap.Disable();
    }

    void OnPanelOpenChanged(bool isOpen)
    {
        if (isOpen)
        {
            beachMap.Disable();
            panelMap.Enable();
        }
        else
        {
            panelMap.Disable();
            beachMap.Enable();
        }
    }

    void OnBuyAmount(InputAction.CallbackContext context)
    {
        amounts.Next();
    }

    void OnUpgrades(InputAction.CallbackContext context)
    {
        panels.Toggle(upgradesPanel);
    }

    void OnManagers(InputAction.CallbackContext context)
    {
        panels.Toggle(managersPanel);
    }

    void OnTrophies(InputAction.CallbackContext context)
    {
        panels.Toggle(trophiesPanel);
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

8. Read it in three parts.
   - **The five squeezes** are five actions, so `Awake` keeps them in an array, with a
     lambda for each that squeezes its own stand. `JuiceStand stand = stands[i];` is the
     copy each lambda keeps (the intern's `int n = i;` again). The lambdas are kept in an
     array too, so `OnDisable` can unsubscribe the very same ones: `-=` with a new lambda
     would remove nothing.
   - **The other actions** call one method each, named `On` + what happened.
   - **The maps** follow the panels: `OnPanelOpenChanged` switches one map off and the
     other on. `OnEnable` calls it once itself, so the right map is on from the start.
9. `GameSettings.LoadBindings` puts back the keys the player chose, before any action is
   used.
10. **Create Empty**, `Shortcuts`, with `Shortcuts`: **Actions** the asset, **Stands** the
   five businesses in order, **Amounts** `Buy Bar`, **Panels** the `Panels` object, and
   the four panels.

### Do it — a row for each key

11. In `Safe Area`, **Create Empty**, `Rebind Row`, 880 × 90, with a **Layout Element**
    (**Preferred Height** 90, **Flexible Width** 1). In it:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Action` | a text | middle–left | (0, 0) | 380 × 70 | `Squeeze 1`, size 36, brown, left |
| `Key` | a text | middle–left | (390, 0) | 220 × 70 | `1`, size 36, light brown, centred |
| `Change Button` | **Candy Button** | middle–right | (0, 0) | 220 × 84 | `Change`, size 34 |

12. In `Scripts/Save`, `RebindRow`:

```csharp:RebindRow.cs
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

// One row of the Settings panel: a shortcut's name, its key, and Change.
// Change waits for the next key pressed and makes it the action's new key,
// then saves every changed key in PlayerPrefs.
public class RebindRow : MonoBehaviour
{
    [SerializeField] InputActionReference action;
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
        string path = action.action.bindings[0].effectivePath;
        keyText.text = InputControlPath.ToHumanReadableString(path, InputControlPath.HumanReadableStringOptions.OmitDevice);
    }

    void StartRebinding()
    {
        // An action can't be rebound while it's listening, so switch it off for now.
        bool wasEnabled = action.action.enabled;
        action.action.Disable();
        keyText.text = "Press a key...";

        rebinding = action.action.PerformInteractiveRebinding(0)
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

13. **Change** switches the action off (an action can't be rebound while it's listening),
    shows *Press a key...*, and starts `PerformInteractiveRebinding`: the Input System
    waits for the next key. Only keyboard keys count (`WithControlsHavingToMatchPath`), and
    **Esc** cancels. Either way, `Finish` tidies up, switches the action back on if it was,
    saves, and shows the key's name.
14. Add `RebindRow` to `Rebind Row` (**Key Text**, **Change Button**; **Action** stays
    empty in the prefab). Drag it into `Prefabs/UI`, and delete it from the scene.

### Do it — the Settings panel

15. Open the **Settings Panel** prefab. In `Content`:
    - A text `Keys`: top–left, **Pos** (0, −220), 880 × 60, size 42, brown. (The space
      above is for the volumes, in Chapter 15.)
    - **Create Empty**, `Rebind Rows`: anchor **top–stretch** with Shift, **Pos Y** −290,
      **Height** 820, with a **Vertical Layout Group** (**Control Child Size** both,
      **Child Force Expand** neither). Drag nine **Rebind Row**s into it, and name them
      after the actions: `Squeeze 1 Row` … `Squeeze 5 Row`, `Buy Amount Row`, `Upgrades
      Row`, `Managers Row`, `Trophies Row`. Set each one's `Action` text, and its
      **Action**: open the `Juice Tycoon Controls` asset in the Project window (the arrow
      beside it) and drag the action from under it. Each action there is an **Input
      Action Reference**, an asset that points at one action.
    - A **Candy Button** `Reset Keys Button`, bottom–left, **Pos** (0, 20), 280 × 110,
      `Reset Keys`; and a **Candy Button Red** `Delete Save Button`, bottom–center,
      **Pos** (0, 20), 280 × 110, `Delete Save`.
16. A question before deleting a save, like the Title's: copy the Title's `Confirm New
    Game` (in the Title scene, **Ctrl+C**), open the Settings Panel prefab, select its
    root, and **Ctrl+V**. Rename it `Confirm Delete`: question `Delete your save? Your
    juice empire will be lost.`, its **Yes Button** label `Delete`.
17. In `Scripts/Save`, `SettingsPanel`:

```csharp
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.InputSystem;

// The Settings panel, in the Title and on the Beach: the keys, and (in the
// Title) Delete Save. Chapter 15 adds the volumes.
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

18. Add it to the prefab's root: **Actions** the asset, **Rebind Rows** the nine,
    **Confirm Delete**. Wire the buttons: **Reset Keys** → **ResetKeys**, **Delete Save**
    → **AskToDeleteSave**, the confirm's **Delete** → **DeleteSave**, its **Cancel** →
    **CancelDelete**. The Title and the Beach both get it, since both use the prefab.

### Do it — Delete Save, where it makes sense

19. On the Beach, deleting the save would do nothing: leaving the Beach saves the game
    again, a moment later. So in the `Beach` scene, select the Settings panel's `Delete
    Save Button` and untick it, as you did the Title's `Title Button`.
20. On the Title it works, but **Continue** would stay green: the Title looked for a save
    once, in `Start`. `onSaveDeleted` is a **UnityEvent** field, named `on` + what
    happened as the style guide says: whatever the scene wires to it in the Inspector
    runs after a delete. The Settings panel doesn't need to know who listens. Give the
    Title a method to wire to; `TitleScreen`'s last form:

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
    [SerializeField] TMP_Text continueDetail;    // the money and stars in the save
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
            continueDetail.text = $"${NumberFormat.Money(data.money)}  ·  Juice Stars: {data.stars}";
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

21. `ShowSave` is `Start`'s save part, moved into a public method so it can run again. In
    the `Title` scene, select the Settings panel: its **On Save Deleted ()** list, **+**,
    drag in `Title Screen`, and choose **TitleScreen → ShowSave**.

### Test it

- **Play** the Beach (click the Game view first, so it has the keyboard). **1** squeezes
  the Lemonade Cup; open more businesses and try **2** to **5**. **Tab**: ×1, ×10, ×100,
  Max, and round again.
- **U**: the Upgrades panel. **1** now does nothing; **Esc** closes the panel. **M**, **T**:
  their panels; the same key again closes them. **Esc** on the beach: Settings.
- **Change** on the `Squeeze 1` row, then press **Q**: the row says `Q`, and **Q** squeezes
  the cup; **1** doesn't. Stop and Play again: still **Q**. **Reset Keys**: **1** again.
- On the Title, **Settings**, **Delete Save**: the question. **Cancel** keeps the save;
  **Delete** deletes it, and **Continue** turns grey at once. On the Beach, Settings has
  no Delete Save.
- **The phone.** **Window → General → Device Simulator**, a phone, **Play**. Click the
  businesses and the buttons with the mouse: on the simulator they're touches, and
  everything works. There are no keys on a phone, and no code was needed.

### Commit

*Add keyboard shortcuts, two action maps, and rebinding.*

### Challenge

Add a shortcut for **Max** on its own: **X** chooses Max, whatever was chosen before. A new
action in the `Beach` map, a handler in `Shortcuts`, and one call: which `BuyAmountBar`
method, with which number?

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
raises an event (C# 5), and its pool takes it back:

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

## Chapter 15 — Juice and Sound

**Goal:** the game feels alive. Every sale sends a "+$" number up from its business,
dozens a minute, all reused from a **pool**. A **bonus balloon** floats across the sky
every couple of minutes: tap it for a minute's income, or double income for 30 seconds.
Squeezes, coins, purchases and trophies have their sounds, the beach its music, and
Settings has a volume for each.

### Idea — dozens a minute, none made

Four businesses with managers sell every second or so, and each sale sends up a
floating number that lives under a second. Made with `Instantiate` and thrown away with
`Destroy`, that's thousands of objects an hour for the garbage collector to clean up,
and a stutter each time it does. C# 15's answer, which the shared chapter
built with these very numbers: keep the ones that finish, asleep, and wake one up for the
next sale.

| Step | The pool |
| --- | --- |
| a sale | `Get`: pop a sleeping number off the `Stack`, or make one if it's empty |
| the number plays | it rises and fades, then raises `Finished` |
| `Finished` | `Release`: switch it off, push it back on the `Stack` |

A `Stack`, because any sleeping number will do, and the last one put back is the
quickest to take. Ten are made at the start (**warm-up**); after that, the pool only
grows if more than ten are in the air at once.

### Idea — a boost

The balloon's second reward, ×2 income for 30 seconds, needs a **boost**: a multiplier
that runs out. It belongs with the stars' bonus, in `IncomeBonus`, so everything that
already asks for the `Multiplier` gets the boost for free. Chapter 17's ad gives the same
boost, for 5 minutes. A second boost adds its time to the first, never ×4. And a boost
still running when you leave is saved, so you don't lose it by quitting.

### Do it — the floating numbers

1. In `Scripts/Juice`, `FloatingNumber`. For now it rises and fades in a coroutine
   (Chapter 16 does it with DOTween):

```csharp
using System;
using System.Collections;
using TMPro;
using UnityEngine;

// A "+$1.2K" that rises from a business and fades. The NumberPool reuses it, so
// Play sets everything the last use changed.
public class FloatingNumber : MonoBehaviour
{
    const float RiseDistance = 1f;
    const float Lifetime = 0.8f;

    [SerializeField] TMP_Text text;

    public event Action<FloatingNumber> Finished;

    public void Play(string message, Color colour, Vector3 position)
    {
        transform.position = position;
        text.text = message;
        text.color = colour;
        text.alpha = 1f;
        StopAllCoroutines();
        StartCoroutine(RiseAndFade(position));
    }

    // Up fast, then slowing down; fading slowly, then fast.
    IEnumerator RiseAndFade(Vector3 from)
    {
        for (float t = 0f; t < Lifetime; t += Time.deltaTime)
        {
            float k = t / Lifetime;
            transform.position = from + Vector3.up * (RiseDistance * (1f - (1f - k) * (1f - k)));
            text.alpha = 1f - k * k;
            yield return null;
        }
        Finished?.Invoke(this);
    }
}
```

2. **A pooled object resets everything in `Play`**: the position, the words, the colour,
   the alpha. Whatever its last use left behind, the next starts clean.
3. **GameObject → 3D Object → Text - TextMeshPro**: a text in the world, not on a canvas.
   Name it `Text`, and put it in a new empty, `Floating Number`. On `Text`: size 5,
   yellow, centred, **Wrapping** off, the Shadow preset, and under **Extra Settings**,
   **Order in Layer** `30` (over the businesses). Its Rect Transform, 4 × 1. Add
   `FloatingNumber` to `Floating Number` (**Text** its child), and drag it into
   `Prefabs`. Delete it from the scene.
4. In `Scripts/Juice`, `NumberPool`, the shared chapter's pool:

```csharp:NumberPool.cs
using System.Collections.Generic;
using UnityEngine;

// Floating numbers, pooled. Get pops a sleeping one off the stack, or makes a new
// one when it's empty; Release switches one off and pushes it back. With five
// businesses selling, dozens rise every minute: none is made or destroyed after
// the first few.
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

5. `number.Finished += Release` when a number is made: it subscribes once, for its whole
   life, and comes back to the pool by itself. **Create Empty**, `Number Pool`, with
   `NumberPool`: **Number Prefab** the **Floating Number**.
6. Each business sends up its sales. `StandSprite`:

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

// A business on the beach, as a sprite: it appears when you own one, squeezes
// when you tap it, and squashes and sends up a "+$" number when it sells. The
// camera's Physics 2D Raycaster finds its collider for the tap.
public class StandSprite : MonoBehaviour, IPointerClickHandler
{
    static readonly Color NumberColour = new Color(1f, 0.95f, 0.35f);

    [SerializeField] JuiceStand stand;
    [SerializeField] SpriteRenderer picture;
    [SerializeField] Collider2D tapArea;
    [SerializeField] NumberPool numbers;
    [SerializeField] Vector3 numberOffset = new Vector3(0f, 1f, 0f);
    [SerializeField] float squash = 0.15f;
    [SerializeField] float squashTime = 0.25f;

    Vector3 restingScale;

    void Awake()
    {
        restingScale = picture.transform.localScale;
    }

    void OnEnable()
    {
        stand.Changed += Refresh;
        stand.CupSold += OnCupSold;
    }

    void OnDisable()
    {
        stand.Changed -= Refresh;
        stand.CupSold -= OnCupSold;
    }

    void Start()
    {
        Refresh();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        stand.Squeeze();
    }

    void Refresh()
    {
        bool isOpen = stand.Owned > 0;
        picture.enabled = isOpen;
        tapArea.enabled = isOpen;
    }

    void OnCupSold(long amount)
    {
        numbers.Show("+" + NumberFormat.Money(amount), NumberColour, transform.position + numberOffset);
        StopAllCoroutines();
        StartCoroutine(Squash());
    }

    // Wider and shorter, then back again: a sale you can see.
    IEnumerator Squash()
    {
        for (float t = 0f; t < squashTime; t += Time.deltaTime)
        {
            float amount = Mathf.Sin(t / squashTime * Mathf.PI) * squash;
            picture.transform.localScale = restingScale + new Vector3(amount, -amount, 0f);
            yield return null;
        }
        picture.transform.localScale = restingScale;
    }
}
```

7. Select the five businesses together and drag the `Number Pool` into their **Numbers**.

### Do it — a boost, and saving it

8. `IncomeBonus` gets the boost: a time that counts down, and a factor of 2 while it
   runs. Its `Restore` takes the boost's time too, so the save and the Beach change with
   it. All three only compile together:

<!-- check: together -->
```csharp:IncomeBonus.cs
using System;
using UnityEngine;

// What multiplies everything you earn: the Juice Stars, each worth +5 % for
// good, and a boost (from the balloon or an ad) that doubles it for a while.
public class IncomeBonus : MonoBehaviour
{
    const float StarBonus = 0.05f;
    const float BoostMultiplier = 2f;

    public int Stars { get; private set; }
    public float BoostSecondsLeft { get; private set; }
    public bool IsBoosting { get { return BoostSecondsLeft > 0f; } }
    public float BoostFactor { get { return IsBoosting ? BoostMultiplier : 1f; } }
    public float Multiplier { get { return (1f + StarBonus * Stars) * BoostFactor; } }

    public event Action Changed;

    void Update()
    {
        if (!IsBoosting)
        {
            return;
        }
        BoostSecondsLeft -= Time.deltaTime;
        if (!IsBoosting)
        {
            BoostSecondsLeft = 0f;
            Changed?.Invoke();
        }
    }

    // A second boost adds its time to the first.
    public void StartBoost(float seconds)
    {
        BoostSecondsLeft += seconds;
        Changed?.Invoke();
    }

    public void SetStars(int stars)
    {
        Stars = stars;
        Changed?.Invoke();
    }

    // Loading a save: a boost still running when you left keeps its time.
    public void Restore(int stars, float boostSecondsLeft)
    {
        Stars = stars;
        BoostSecondsLeft = boostSecondsLeft;
        Changed?.Invoke();
    }
}
```

```csharp:SaveData.cs
using System.Collections.Generic;

// Everything juice-tycoon.json keeps. JsonUtility saves public fields only,
// and can't save a Dictionary or a DateTime: the businesses are a list, the
// upgrades and trophies are ids, and the time is a long, DateTime's Ticks.
[System.Serializable]
public class SaveData
{
    public int version = 1;
    public long money;
    public long lifetimeEarned;
    public int stars;
    public float boostSecondsLeft;
    public List<StandSave> stands = new List<StandSave>();
    public List<string> upgrades = new List<string>();
    public int vanLevel;
    public StatsSave stats = new StatsSave();
    public List<string> trophies = new List<string>();
    // When it was saved, and what earned by itself then: enough to work out
    // what you earned while away, before the Beach scene is even loaded.
    public long savedAtTicks;
    public List<AwaySource> awaySources = new List<AwaySource>();
}

// One business: which, and how many you own.
[System.Serializable]
public class StandSave
{
    public string id;
    public int owned;
}

// The counts behind Sam's achievements, for the player's whole life.
[System.Serializable]
public class StatsSave
{
    public long cupsSold;
    public long taps;
    public long balloonsPopped;
    public long beachesOpened;
    public long awayEarned;
    public long upgradesBought;
}

// Something that earns while you're away, and how much each second.
[System.Serializable]
public class AwaySource
{
    public string name;
    public long perSecond;
}
```

```csharp:BeachGame.cs
using System;
using LanternHill.Achievements;
using UnityEngine;

// The Beach scene's start and its saving. It loads the save into every part
// of the game, adds what Welcome back collected, and saves every 30 seconds,
// when a phone sends the game to the background, and when the scene closes.
public class BeachGame : MonoBehaviour
{
    [SerializeField] Wallet wallet;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
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

    // Leaving the scene: for the Title, or for the Report after a new beach.
    void OnDestroy()
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
        data.money = wallet.Money;
        data.lifetimeEarned = wallet.LifetimeEarned;
        data.stars = bonus.Stars;
        data.boostSecondsLeft = bonus.BoostSecondsLeft;
        foreach (JuiceStand stand in stands)
        {
            StandSave saved = new StandSave();
            saved.id = stand.Info.Id;
            saved.owned = stand.Owned;
            data.stands.Add(saved);
        }
        data.upgrades.AddRange(upgrades.BoughtIds);
        data.vanLevel = van.Level;
        data.stats = stats.ToSave();
        data.trophies.AddRange(tracker.WonIds);
        data.savedAtTicks = DateTime.UtcNow.Ticks;
        // What earns by itself now, without a boost that won't last while you're away.
        foreach (IIncomeSource source in income.All)
        {
            if (source.EarnsWhileAway && source.IncomePerSecond > 0)
            {
                AwaySource away = new AwaySource();
                away.name = source.SourceName;
                away.perSecond = (long)(source.IncomePerSecond / (double)bonus.BoostFactor);
                data.awaySources.Add(away);
            }
        }
        SaveSystem.Save(data);
    }

    void Load()
    {
        if (!SaveSystem.HasSave)
        {
            return;     // a new game: everything as the scene starts
        }
        SaveData data = SaveSystem.Load();
        wallet.Restore(data.money, data.lifetimeEarned);
        bonus.Restore(data.stars, data.boostSecondsLeft);
        foreach (StandSave saved in data.stands)
        {
            foreach (JuiceStand stand in stands)
            {
                if (stand.Info.Id == saved.id)
                {
                    stand.Restore(saved.owned);
                }
            }
        }
        // After the stands: the upgrades multiply and automate them again.
        upgrades.Restore(data.upgrades);
        van.Restore(data.vanLevel);
        stats.Restore(data.stats);
        tracker.Restore(data.trophies);
    }
}
```
<!-- check: end -->

9. In `BeachGame.Save`, look at the away earnings: each source's income is divided by the
   `BoostFactor`. A boost that runs out in a minute mustn't double eight hours of
   earnings while you're away.
10. The income text shows a running boost, and its time left. `IncomeText`'s last form:

```csharp:IncomeText.cs
using TMPro;
using UnityEngine;

// Under the money: what everything earns by itself each second, and a boost's
// time left. It adds up the IIncomeSources four times a second, not every
// frame: a number that changes this slowly needn't make a new string 60 times
// a second.
public class IncomeText : MonoBehaviour
{
    const float RefreshSeconds = 0.25f;

    [SerializeField] IncomeSources income;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] TMP_Text text;

    float nextRefreshTime;

    void Update()
    {
        if (Time.unscaledTime < nextRefreshTime)
        {
            return;
        }
        nextRefreshTime = Time.unscaledTime + RefreshSeconds;
        long perSecond = income.PerSecond;
        string line = perSecond > 0 ? $"+{NumberFormat.Money(perSecond)} / s" : "Tap to squeeze!";
        if (bonus.IsBoosting)
        {
            int seconds = Mathf.CeilToInt(bonus.BoostSecondsLeft);
            line += $"   ×2 {seconds / 60}:{seconds % 60:00}";
        }
        text.text = line;
    }
}
```

11. Set its **Bonus** (the `Income` object). `{seconds % 60:00}` again: `4:05`, not `4:5`.

### Do it — the balloon

12. In `Scripts/Income`, `BonusBalloon`:

```csharp:BonusBalloon.cs
using System;
using UnityEngine;
using UnityEngine.EventSystems;

// The bonus balloon: a sprite that drifts across the sky, bobbing. Tap it
// before it's gone. The camera's Physics 2D Raycaster finds its collider, and
// the EventSystem calls OnPointerClick, as for a UI button.
public class BonusBalloon : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] float speed = 1.2f;        // units a second
    [SerializeField] float bobHeight = 0.3f;
    [SerializeField] float bobSpeed = 2f;

    Vector3 start;
    Vector3 end;
    float travelled;

    public event Action<BonusBalloon> Popped;

    void Update()
    {
        travelled += speed * Time.deltaTime;
        float distance = Vector3.Distance(start, end);
        if (travelled >= distance)
        {
            gameObject.SetActive(false);    // missed: it floated away
            return;
        }
        Vector3 position = Vector3.Lerp(start, end, travelled / distance);
        position.y += Mathf.Sin(travelled * bobSpeed) * bobHeight;
        transform.position = position;
    }

    public void Fly(Vector3 from, Vector3 to)
    {
        start = from;
        end = to;
        travelled = 0f;
        transform.position = from;
        gameObject.SetActive(true);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        gameObject.SetActive(false);
        Popped?.Invoke(this);
    }
}
```

13. It drifts from one point to another with `Vector3.Lerp`, bobbing with `Mathf.Sin`, and
    switches itself off when it gets there: a missed balloon. A tap reaches it the way it
    reaches the businesses: the camera's Physics 2D Raycaster, a collider,
    `IPointerClickHandler`.
14. In the world, drag in `balloon_3d`: `Bonus Balloon`, at (0, 7, 0), **Scale** (0.7, 0.7,
    1), **Order in Layer** `15`. **Add Component → Circle Collider 2D** (**Radius** 0.8), and
    `BonusBalloon`.
15. In `Scripts/Income`, `BalloonSpawner`:

```csharp:BalloonSpawner.cs
using System;
using UnityEngine;

// Sends the bonus balloon across the sky every minute and a half to two and a
// half minutes. Popping it gives one of two rewards, chosen at random: a
// minute of what you earn by yourself, or double income for 30 seconds.
public class BalloonSpawner : MonoBehaviour
{
    const float RewardSeconds = 60f;
    const float BoostSeconds = 30f;
    const long SmallestReward = 50;     // before any manager, a minute's income is nothing

    [SerializeField] BonusBalloon balloon;
    [SerializeField] Wallet wallet;
    [SerializeField] IncomeSources income;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] NumberPool numbers;
    [SerializeField] float shortestWait = 90f;
    [SerializeField] float longestWait = 150f;
    [SerializeField] Vector3 leftEdge = new Vector3(-7f, 6f, 0f);
    [SerializeField] Vector3 rightEdge = new Vector3(7f, 7.5f, 0f);

    float nextBalloonTime;

    public event Action Popped;

    void OnEnable()
    {
        balloon.Popped += OnBalloonPopped;
    }

    void OnDisable()
    {
        balloon.Popped -= OnBalloonPopped;
    }

    void Start()
    {
        balloon.gameObject.SetActive(false);
        PlanNext();
    }

    void Update()
    {
        if (Time.time < nextBalloonTime || balloon.gameObject.activeSelf)
        {
            return;
        }
        // Half the balloons go left to right, half right to left.
        if (UnityEngine.Random.value < 0.5f)
        {
            balloon.Fly(leftEdge, rightEdge);
        }
        else
        {
            balloon.Fly(rightEdge, leftEdge);
        }
        PlanNext();
    }

    void PlanNext()
    {
        nextBalloonTime = Time.time + UnityEngine.Random.Range(shortestWait, longestWait);
    }

    void OnBalloonPopped(BonusBalloon popped)
    {
        if (UnityEngine.Random.value < 0.5f)
        {
            long reward = Math.Max(SmallestReward, (long)(income.PerSecond * (double)RewardSeconds));
            wallet.Add(reward);
            numbers.Show("+" + NumberFormat.Money(reward), Color.yellow, popped.transform.position);
        }
        else
        {
            bonus.StartBoost(BoostSeconds);
            numbers.Show("×2 for 30 s", Color.yellow, popped.transform.position);
        }
        Popped?.Invoke();
    }
}
```

16. `UnityEngine.Random.value < 0.5f`: a coin toss. (`Random` alone would be ambiguous here:
    `System`, used for `Action`, has a `Random` too, so the name says which.) The reward
    is a minute of everything that earns by itself, `income.PerSecond`, the
    `IIncomeSource`s once more; before any manager, that's nothing, so it's at least $50.
17. **Create Empty**, `Balloon Spawner`, with `BalloonSpawner`: **Balloon**, **Wallet**,
    **Income** and **Bonus** (both the `Income` object), **Numbers** (`Number Pool`).
18. Sam's *Balloon Catcher* can count now. `GameStats`'s last form:

```csharp:GameStats.cs
using LanternHill.Achievements;
using UnityEngine;

// Our half of Sam's contract: the numbers his achievements count. Some are
// counted here as things happen (cups sold, taps, balloons); the others are
// read from the game when asked (the money earned, the businesses owned).
// The counts are for the player's whole life: a new beach doesn't reset them.
public class GameStats : MonoBehaviour, IStatSource
{
    [SerializeField] JuiceStand[] stands;
    [SerializeField] Wallet wallet;
    [SerializeField] Upgrades upgrades;
    [SerializeField] DeliveryVan van;
    [SerializeField] BalloonSpawner balloons;

    public long CupsSold { get; private set; }
    public long Taps { get; private set; }
    public long BalloonsPopped { get; private set; }
    public long BeachesOpened { get; private set; }
    public long AwayEarned { get; private set; }
    public long UpgradesBought { get; private set; }

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold += OnCupSold;
            stand.Squeezed += OnSqueezed;
        }
        upgrades.Bought += OnUpgradeBought;
        balloons.Popped += OnBalloonPopped;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.CupSold -= OnCupSold;
            stand.Squeezed -= OnSqueezed;
        }
        upgrades.Bought -= OnUpgradeBought;
        balloons.Popped -= OnBalloonPopped;
    }

    public long GetStat(Stat stat)
    {
        switch (stat)
        {
            case Stat.CupsSold: return CupsSold;
            case Stat.MoneyEarned: return wallet.LifetimeEarned;
            case Stat.BusinessesOwned: return BusinessesOwned();
            case Stat.ManagersHired: return ManagersHired();
            case Stat.UpgradesBought: return UpgradesBought;
            case Stat.Taps: return Taps;
            case Stat.BalloonsPopped: return BalloonsPopped;
            case Stat.BeachesOpened: return BeachesOpened;
            case Stat.AwayEarned: return AwayEarned;
            case Stat.VanLevel: return van.Level;
            default: return 0;
        }
    }

    public void AddAwayEarnings(long amount)
    {
        AwayEarned += amount;
    }

    public void AddBeach()
    {
        BeachesOpened++;
    }

    public void Restore(StatsSave saved)
    {
        CupsSold = saved.cupsSold;
        Taps = saved.taps;
        BalloonsPopped = saved.balloonsPopped;
        BeachesOpened = saved.beachesOpened;
        AwayEarned = saved.awayEarned;
        UpgradesBought = saved.upgradesBought;
    }

    public StatsSave ToSave()
    {
        StatsSave saved = new StatsSave();
        saved.cupsSold = CupsSold;
        saved.taps = Taps;
        saved.balloonsPopped = BalloonsPopped;
        saved.beachesOpened = BeachesOpened;
        saved.awayEarned = AwayEarned;
        saved.upgradesBought = UpgradesBought;
        return saved;
    }

    long BusinessesOwned()
    {
        long total = 0;
        foreach (JuiceStand stand in stands)
        {
            total += stand.Owned;
        }
        return total;
    }

    long ManagersHired()
    {
        long total = 0;
        foreach (JuiceStand stand in stands)
        {
            if (stand.IsAutomated)
            {
                total++;
            }
        }
        return total;
    }

    // A sale: one cycle of one business, however many of it you own.
    void OnCupSold(long amount)
    {
        CupsSold++;
    }

    void OnSqueezed()
    {
        Taps++;
    }

    void OnUpgradeBought(Upgrade upgrade)
    {
        UpgradesBought++;
    }

    void OnBalloonPopped()
    {
        BalloonsPopped++;
    }
}
```

19. Set its **Balloons** (`Balloon Spawner`).

### Do it — sound

20. Select the two pieces of music, `Audio/Sunny` and `Audio/Chill`: **Load Type**
    **Streaming**, **Apply**. A short sound is loaded whole; a three-minute song is read
    from the file as it plays, so it doesn't sit in memory.
21. The volumes are settings, kept in PlayerPrefs with the keys. `GameSettings`'s last
    form:

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

22. `PlayerPrefs.GetFloat(key, default)` gives the default until the player has chosen.
    In `Scripts/Juice`, `MusicPlayer`:

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

23. And `SoundPlayer`, every short sound through one Audio Source:

```csharp:SoundPlayer.cs
using UnityEngine;

// The game's short sounds, through one Audio Source. Sales are the commonest:
// five fast businesses could sell many times a second, so a coin plays at most
// every tenth of a second.
[RequireComponent(typeof(AudioSource))]
public class SoundPlayer : MonoBehaviour
{
    const float ShortestCoinGap = 0.1f;

    [SerializeField] JuiceStand[] stands;
    [SerializeField] Upgrades upgrades;
    [SerializeField] BalloonSpawner balloons;
    [SerializeField] AudioClip squeezeClip;
    [SerializeField] AudioClip coinClip;
    [SerializeField] AudioClip buyClip;
    [SerializeField] AudioClip upgradeClip;
    [SerializeField] AudioClip trophyClip;
    [SerializeField] AudioClip balloonClip;

    AudioSource source;
    float nextCoinTime;

    void Awake()
    {
        source = GetComponent<AudioSource>();
        source.volume = GameSettings.EffectsVolume;
    }

    void OnEnable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.Squeezed += OnSqueezed;
            stand.CupSold += OnCupSold;
            stand.Bought += OnBought;
        }
        upgrades.Bought += OnUpgradeBought;
        balloons.Popped += OnBalloonPopped;
    }

    void OnDisable()
    {
        foreach (JuiceStand stand in stands)
        {
            stand.Squeezed -= OnSqueezed;
            stand.CupSold -= OnCupSold;
            stand.Bought -= OnBought;
        }
        upgrades.Bought -= OnUpgradeBought;
        balloons.Popped -= OnBalloonPopped;
    }

    public void SetVolume(float volume)
    {
        source.volume = volume;
    }

    public void PlayTrophy()
    {
        source.PlayOneShot(trophyClip);
    }

    void OnSqueezed()
    {
        source.PlayOneShot(squeezeClip);
    }

    void OnCupSold(long amount)
    {
        if (Time.unscaledTime < nextCoinTime)
        {
            return;
        }
        nextCoinTime = Time.unscaledTime + ShortestCoinGap;
        source.PlayOneShot(coinClip, 0.6f);
    }

    void OnBought(int count)
    {
        source.PlayOneShot(buyClip, 0.8f);
    }

    void OnUpgradeBought(Upgrade upgrade)
    {
        source.PlayOneShot(upgradeClip);
    }

    void OnBalloonPopped()
    {
        source.PlayOneShot(balloonClip);
    }
}
```

24. Five businesses selling at once could ask for dozens of coins a second; one every
    tenth of a second sounds the same, and doesn't drown everything else. `PlayOneShot`
    plays a clip over whatever's playing, at its own volume (the second argument).
25. In the Beach scene: **Create Empty**, `Music`, with an **Audio Source** (**AudioClip**
    `Sunny`, **Play On Awake** off) and `MusicPlayer`. **Create Empty**, `Sounds`, with an
    **Audio Source** (**Play On Awake** off) and `SoundPlayer`: **Stands**, **Upgrades**,
    **Balloons**, and the six clips (`Squeeze`, `Coin`, `Buy`, `Upgrade`, `Trophy`,
    `Balloon`). In the Title and the Report, a `Music` the same way, with `Chill`.
26. The trophy's jingle plays when its toast shows, not when it's won: two trophies won
    at once each get their jingle, a few seconds apart. `ToastQueue`'s last form:

```csharp:ToastQueue.cs
using System.Collections.Generic;
using LanternHill.Achievements;
using UnityEngine;

// Messages for the toast wait here, first come first shown: "Manager hired!",
// and every trophy won. The toast shows them one at a time. A trophy's reward
// is paid the moment it's won. Sam's module has a Toast of its own: with his
// namespace in a using, "Toast" still means ours, because C# looks in this
// file's own namespace before the ones a using brings in.
public class ToastQueue : MonoBehaviour
{
    [SerializeField] AchievementTracker tracker;
    [SerializeField] Upgrades upgrades;
    [SerializeField] Toast toast;
    [SerializeField] Wallet wallet;
    [SerializeField] SoundPlayer sounds;

    readonly Queue<ToastMessage> waiting = new Queue<ToastMessage>();

    void OnEnable()
    {
        tracker.Unlocked += OnUnlocked;
        upgrades.Bought += OnUpgradeBought;
        toast.Hidden += ShowNext;
    }

    void OnDisable()
    {
        tracker.Unlocked -= OnUnlocked;
        upgrades.Bought -= OnUpgradeBought;
        toast.Hidden -= ShowNext;
    }

    // Every upgrade bought comes here; only a manager gets a toast.
    void OnUpgradeBought(Upgrade upgrade)
    {
        if (upgrade is ManagerUpgrade)
        {
            waiting.Enqueue(new ToastMessage(upgrade.Picture, "Manager hired!", $"{upgrade.Target.DisplayName} squeezes by itself now.", false));
            ShowNext();
        }
    }

    void OnUnlocked(Achievement achievement)
    {
        string line = achievement.Description;
        if (achievement.Reward > 0)
        {
            wallet.Add(achievement.Reward);
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

27. Set its **Sounds**.

### Do it — the volumes

28. Open the **Settings Panel** prefab. In `Content`, above `Keys`:
    - A text `Music Label`, top–left, **Pos** (0, −10), 260 × 80, `Music`, size 40, brown.
    - **UI (Canvas) → Slider**, `Music Slider`: anchor **top–right** with Shift, **Pos**
      (−20, −32), 560 × 36. Its `Background` colour `#EAD7AE`, its `Fill Area/Fill` pink
      (`#FF4FA3`), its `Handle Slide Area/Handle` 56 wide and blue (`#19B6E8`).
    - The same at **Pos Y** −110 and −132: `Effects Label` and `Effects Slider`.
29. `SettingsPanel`'s last form:

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

30. **`SetValueWithoutNotify`** moves the slider to the saved volume without raising
    `onValueChanged`: opening the panel shouldn't count as the player changing it. The
    volumes reach the players at once, so you hear them as you drag; PlayerPrefs writes
    them to disk when the panel closes (`GameSettings.Save` in `OnDisable`), not 60 times
    a second while you drag.
31. Fill the prefab's two sliders. In each scene, set the Settings panel's **Music** (and,
    on the Beach, **Sounds**). In the Title there are no sounds to set: `sounds` stays
    empty, and `OnEffectsChanged` checks for it.

### Test it

- **Play.** Squeeze: `+$1` rises from the cup and fades. Hire managers: numbers rise all
  over the beach. Open `Number Pool` in the Hierarchy while it's busy: ten or so
  `Floating Number(Clone)`s, switching on and off. Count them after a minute: no more.
- Wait for the balloon (up to two and a half minutes; set **Shortest Wait** and **Longest
  Wait** to 5 and 10 to test, then back to 90 and 150). Tap it: a pop, and either `+$`
  something or `×2 for 30 s`, with `×2 0:30` counting down under the money and every
  number on the beach doubled.
- Pop ten balloons (with the short waits): *Trophy: Balloon Catcher*.
- With a boost running, go back to the Title and **Continue**: the boost's time is still
  there.
- Settings: drag **Music** down while it plays. Stop, Play: the volume stayed.

### Commit

*Juice and sound: pooled numbers, the balloon, the boost, and the volumes.*

### Challenge

A **golden balloon**: one balloon in ten is gold (tint the Sprite Renderer `#FFD700`) and
pays ten minutes of income instead of one. Where does the tint go, and where the reward?
Keep `BonusBalloon` knowing nothing about money.

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
share a name, put one of them in a `namespace` (C# 9), or rename yours. Good
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

## Chapter 16 — DOTween

**Goal:** **DOTween**, the free tweening engine most Unity games use, from the Asset Store.
With it, the money counts up instead of jumping, every button bounces when pressed, and
three animations you wrote as coroutines (the floating numbers, the business's squash,
the toast) become a line or two each.

### Idea — a tween

Every animation you've written so far has the same shape: a loop over time, a `Lerp`
between a start and an end, a curve to make it feel right, and something to do when it's
over. A **tween** is that shape, done once, by a library: you say what changes, to what,
over how long, with which curve, and it does the loop.

```csharp
// The toast sliding down, as a coroutine (Chapter 7): a method of its own.
yield return Slide(hiddenY, shownY);

// The same with DOTween: one line, and it returns the tween, to chain more on it.
strip.DOAnchorPosY(shownY, slideTime).SetEase(Ease.OutBack);
```

DOTween's methods are **extension methods**: `using DG.Tweening;` adds `DOAnchorPosY` to
every `RectTransform`, `DOPunchScale` to every `Transform`, and so on. Each returns the
**tween** it made, so more calls chain on with dots (a **fluent** style): `.SetEase(…)`
for the curve, `.OnComplete(…)` for what to do after. A **Sequence** strings tweens
together: one after another (`Append`), at the same time (`Join`), or with a wait
(`AppendInterval`).

| Ease | Feels like | Here |
| --- | --- | --- |
| `OutQuad`, `OutCubic` | fast, then slowing down | the money counting, a number rising |
| `InQuad` | slow, then fast | a number fading away |
| `OutBack` | overshoots, then settles | the toast arriving |
| `InBack` | pulls back, then goes | the toast leaving |

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
   this project has (UI, Sprite, Audio, Physics 2D…), and adds `DOTWEEN` to the project's
   **Scripting Define Symbols** (**Project Settings → Player**).
4. **Commit it on its own:** *Add DOTween*. Someone reading the history later sees exactly
   which files came from the Asset Store, and when; a package mixed into a commit with
   your own changes hides both.
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

    long shown;
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

    void OnMoneyChanged(long money)
    {
        counting?.Kill();
        counting = DOTween.To(() => shown, Show, money, countTime).SetEase(Ease.OutQuad);
    }

    void Show(long money)
    {
        shown = money;
        text.text = "$" + NumberFormat.Money(money);
    }
}
```

7. `DOTween.To` tweens anything you can read and write: here, a `long` the text shows.
   `() => shown` is how to read it; `Show` is how to set it (a method that takes a `long`);
   `money` is where to go, over `countTime` seconds. Each sale **kills** the count still
   running and starts a new one from where the number is: the money never jumps back.
   `?.Kill()`: the first time, there's no tween yet.

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
        transform.DOPunchScale(Vector3.one * strength, duration, 6);
    }
}
```

9. `DOPunchScale` grows the button by `strength` and springs back, 6 wobbles in
   `duration`. `DOComplete` first: two quick taps would otherwise start a punch on top of
   a punch, and the button could end up the wrong size. `[RequireComponent(typeof(Button))]`:
   it only makes sense on a button.
10. Open the **Candy Button** prefab and add `PunchOnClick`. Then the **Icon Button**
    prefab. **Play**, and press anything: every candy button in the game bounces, the
    green, grey and red variants too, and every row's Buy button. One change to a base
    prefab, everywhere: Chapter 3's promise, kept.

### Do it — the numbers, the squash and the toast

11. `FloatingNumber`'s last form, its coroutine replaced by a Sequence:

```csharp:FloatingNumber.cs
using System;
using DG.Tweening;
using TMPro;
using UnityEngine;

// A "+$1.2K" that rises from a business and fades. The NumberPool reuses it, so
// Play sets everything the last use changed. One DOTween Sequence does the
// rising and the fading together; the free DOTween has no TextMeshPro fade,
// so the alpha is run with DOTween.To.
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

12. Two tweens **joined**, so they run together: `DOMoveY` rises, and the alpha fades.
    Free DOTween has no fade for TextMeshPro (DOTween Pro adds one), so `DOTween.To` runs
    the alpha, as `MoneyText` runs its number. `OnComplete(OnPlayed)` raises `Finished`:
    the pool takes it back, as before. `OnDestroy` kills a Sequence still playing when the
    scene closes.
13. `StandSprite`'s last form:

```csharp:StandSprite.cs
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

// A business on the beach, as a sprite: it appears when you own one, squeezes
// when you tap it, and squashes and sends up a "+$" number when it sells. The
// camera's Physics 2D Raycaster finds its collider for the tap.
public class StandSprite : MonoBehaviour, IPointerClickHandler
{
    static readonly Color NumberColour = new Color(1f, 0.95f, 0.35f);

    [SerializeField] JuiceStand stand;
    [SerializeField] SpriteRenderer picture;
    [SerializeField] Collider2D tapArea;
    [SerializeField] NumberPool numbers;
    [SerializeField] Vector3 numberOffset = new Vector3(0f, 1f, 0f);
    [SerializeField] float squash = 0.15f;

    void OnEnable()
    {
        stand.Changed += Refresh;
        stand.CupSold += OnCupSold;
    }

    void OnDisable()
    {
        stand.Changed -= Refresh;
        stand.CupSold -= OnCupSold;
        picture.transform.DOKill();
    }

    void Start()
    {
        Refresh();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        stand.Squeeze();
    }

    void Refresh()
    {
        bool isOpen = stand.Owned > 0;
        picture.enabled = isOpen;
        tapArea.enabled = isOpen;
    }

    void OnCupSold(long amount)
    {
        numbers.Show("+" + NumberFormat.Money(amount), NumberColour, transform.position + numberOffset);
        // Complete the last squash first, or a fast business would shrink for good.
        picture.transform.DOComplete();
        picture.transform.DOPunchScale(new Vector3(squash, -squash, 0f), 0.25f, 6);
    }
}
```

14. The coroutine and its `restingScale` are gone: `DOPunchScale` springs back to where it
    started by itself. `DOComplete` first, again: a fast business sells before the last
    squash ends.
15. `Toast`'s last form:

```csharp:Toast.cs
using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// A strip that slides down from the top of the screen with a picture and two
// lines, stays a moment, and slides back up: "Manager hired!", or a trophy
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

### Test it

- **Play.** Squeeze: the money **counts up** to its new value. Buy: it counts down. Every
  button you press bounces.
- Hire managers: the numbers rise and fade as before, and the businesses squash. Hire two
  at once: the two toasts, one after the other, overshooting as they arrive.
- **Count the lines.** Before and after, braces included, comments not:

| Animation | Coroutine | DOTween |
| --- | --- | --- |
| the toast's slides and wait | two coroutines: 19 lines | a Sequence and `OnFinished`: 10 lines |
| the squash | a coroutine, a field and `Awake`: 18 lines | 3 lines |
| a floating number | a coroutine with its own easing maths: 13 lines | a Sequence with named eases: 13 lines |

  The floating number is no shorter, but `Ease.OutCubic` replaced `1f - (1f - k) * (1f -
  k)`: the curve has a name, and trying another is one word.
- **Window → Analysis → Profiler**, **Play**, and click a frame while numbers are rising.
  In the **CPU Usage** module's **Hierarchy**, open `PlayerLoop`: the coroutines are gone;
  every tween in the game runs from one place, `DOTweenComponent.Update`.

### Commit

*Animate with DOTween: the money, the buttons, the numbers, the squash and the toast.*

### Challenge

The van drives in a straight line at one speed. Make it bob up and down a little as it
drives, with a tween that never ends: `body.transform.DOLocalMoveY(0.08f, 0.3f)` with
`.SetLoops(-1, LoopType.Yoyo)`. Where should it start, and where should it be killed?

## Chapter 17 — Ads

**Goal:** ads, the way a good phone game uses them: always the player's choice, and
always for something. Watch one on **Welcome back** to collect twice as much; watch one
from the **TV** on the top bar for double income for 5 minutes. One ad, the only one you
don't choose, plays after opening a new beach, never during play. On a phone they're
**Unity LevelPlay**'s ads; on the Web and PC, where no ad can run, a **pretend ad** does
the same job.

### Idea — ads a player doesn't hate

Free phone games are paid for by ads, and two kinds matter here:

| Kind | What it is | Here |
| --- | --- | --- |
| **Rewarded** | the player chooses to watch, and gets something for it | Collect ×2 on Welcome back; ×2 income for 5 minutes |
| **Interstitial** | a full-screen ad between two parts of the game | once, after opening a new beach, before the beach |

The studio's three rules: **never interrupt play** (no ad while you're tapping); **always
optional**, except the one between beaches; **always say what you get** (the button says
*Collect ×2*, with a TV on it).

### Idea — one interface, two kinds of ads

**Unity LevelPlay** (the **Ads Mediation** package) is Unity's own ad system: it shows ads
from many ad networks, and in the Editor it shows **mock ads**, with no account. But it
only runs on phones (Android and iOS): on the Web or a PC it does nothing at all. And
this game's Level 4 builds are for the Web and PC.

The answer is Chapter 8's again, for a third time: an **interface**. The game asks an
`IAdService` to show an ad, and says what to do afterwards. Two classes keep that
contract:

| | `PretendAds` | `LevelPlayAds` |
| --- | --- | --- |
| works on | everything: the Editor, the Web, PC | phones, and the Editor while the build target is Android or iOS |
| shows | a panel: *An ad would play here*, a 5-second countdown | LevelPlay's ad (a mock one in the Editor) |
| needs | nothing | the package; on a real phone, an account and an app key (Level 6) |

**What to do afterwards.** An ad takes seconds, and the code can't wait for it. So the
game hands over **what to do when it's watched**, as an `Action`:
`ShowRewarded(() => Leave(report.Amount * 2))`. A lambda passed to a method, to be called
later: the next step after Level 4's lambdas in `Sort` and in button listeners.

### Do it — the contract, and pretend ads

1. In `Scripts/Ads`, `IAdService`:

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

2. In `Scripts/Ads`, `PretendAds`:

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
4. **Create Empty**, `Ads`. Add `PretendAds`. In it, a **Canvas** of its own, `Ad Canvas`:
   **Screen Space - Overlay**, **Sort Order** 60 (over the game, under the fader), with a
   **Canvas Scaler** like the game's (1080 × 1920, **Match** 0). In `Ad Canvas`:

| Child | What | Anchor | Pos | Size | Set |
| --- | --- | --- | --- | --- | --- |
| `Pretend Ad` | an Image | stretch–stretch, no gaps | | | `#2A1A0C`: a whole screen, as an ad is |
| `Pretend Ad/Television` | an Image | centre | (0, 260) | 360 × 360 | `television_3d`, Preserve Aspect |
| `Pretend Ad/Words` | a text | centre | (0, −10) | 900 × 160 | `An ad would play here.`, size 56, white, centred, Shadow |
| `Pretend Ad/Countdown` | a text | centre | (0, −200) | 300 × 180 | `5`, size 140, white, centred, Shadow |

5. `PretendAds`: **Panel** `Pretend Ad`, **Countdown Text** `Countdown`.

### Do it — LevelPlay

6. **Window → Package Manager**, **+** (top left) **→ Install package by name…**:
   `com.unity.services.levelplay`, **Install**. That's the **Ads Mediation** package.
7. Unity asks to import the **Mobile Dependency Resolver**. Choose **Ignore**: it fetches
   the Android and iOS libraries a phone build needs (Level 6). It asks again each time
   Unity starts; **Ignore** each time.
8. In `Scripts/Ads`, `LevelPlayAds`:

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
   - **Start, not Awake.** Unity calls `Awake` even on a component that's switched off,
     and `AdServiceProvider` (next) switches this one off where LevelPlay can't run.
   - **Load ahead.** An ad takes a moment to arrive, so each is loaded when LevelPlay
     starts, and loaded again after it's shown: the next one is ready when the player
     asks. `RewardedReady` says whether it is.
   - **The reward comes on its own event**, `OnAdRewarded`, before or after the ad closes
     (LevelPlay's mock closes first). It's paid the moment it comes, once:
     `afterRewarded = null` afterwards.
10. Add `LevelPlayAds` to `Ads`. Its app key and ad unit ids are LevelPlay's test values
    for the Editor; a real game puts its own there (Level 6).

### Do it — choosing one

11. In `Scripts/Ads`, `AdServiceProvider`:

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

12. The Inspector can't hold an `IAdService` (Chapter 8's problem again), so the
    provider holds both kinds as what they are, and hands out one as what it can do:
    `Service` returns an `IAdService`. Everything else in the game asks
    `ads.Service.ShowRewarded(…)` and never knows which.
13. Add it to `Ads`: **Pretend Ads** and **Level Play Ads** (both on `Ads` itself). Drag
    `Ads` into `Prefabs`. Put one in the Beach scene and one in the Report scene.

### Do it — the TV button

14. In `Scripts/Ads`, `BoostOffer`:

```csharp:BoostOffer.cs
using UnityEngine;
using UnityEngine.UI;

// The television button on the top bar: watch an ad, and everything earns
// double for 5 minutes. It shows only when an ad is ready and no boost runs.
public class BoostOffer : MonoBehaviour
{
    [SerializeField] AdServiceProvider ads;
    [SerializeField] IncomeBonus bonus;
    [SerializeField] Button button;
    [SerializeField] float boostSeconds = 300f;

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
        bool canOffer = ads.Service.RewardedReady && !bonus.IsBoosting;
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
        bonus.StartBoost(boostSeconds);
    }
}
```

15. The button shows only while an ad is ready and no boost runs. Ads are never pushed:
    the button waits quietly in the corner. `Boost` is handed over as a **method group**,
    `ShowRewarded(Boost)`: a method with no parameters is already an `Action`.
16. In `Top Bar`, **Create Empty**, `Boost Offer`: anchor **middle–left** with Shift,
    **Pos** (800, 0), 130 × 140. In it, an **Icon Button** `Boost Button`, centred, 126 ×
    130, its `Icon` `television_3d`. Add `BoostOffer` to `Boost Offer` (not to the button:
    it switches the button off, and a switched-off object's `Update` doesn't run): **Ads**
    the scene's `Ads`, **Bonus** the `Income` object, **Button** `Boost Button`.

### Do it — Collect ×2, and the ad between beaches

17. In the Report scene's `Window`, a **Candy Button Green** `Double Button`:
    bottom–center, **Pos** (210, 70), 390 × 150, label `Collect ×2`, with its label's
    **Left** at 100 to leave room for a TV: an **Image** `Television` in the button,
    middle–left, **Pos** (24, 4), 80 × 80, `television_3d`. **Transition** **Sprite Swap**,
    **Disabled Sprite** `Button Grey`.
18. `ReportScreen`'s last form:

```csharp:ReportScreen.cs
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// The Report scene: whatever the last scene left in Session.Report. Welcome
// back offers Collect, or Collect ×2 for watching a rewarded ad. Your new
// beach has one button, and the game's only interstitial ad before the beach.
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
            report = new Report(ReportKind.WelcomeBack, "Welcome back! (test)", 12345);
            report.Lines.Add("Started on its own, from the Editor.");
        }
        title.text = report.Title;
        lines.text = string.Join("\n", report.Lines);
        bool isWelcome = report.Kind == ReportKind.WelcomeBack;
        if (isWelcome)
        {
            amount.text = "+$" + NumberFormat.Money(report.Amount);
        }
        else
        {
            amount.text = report.Amount == 1 ? "+1 star" : $"+{report.Amount} stars";
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

    void Leave(long collected)
    {
        Session.AwayCollected = collected;
        Session.Report = null;
        fader.FadeTo("Beach");
    }
}
```

19. `CollectDouble` hands over a lambda: `() => Leave(report.Amount * 2)`. It's called when
    the ad has been watched, seconds later; if the player closes a real ad early,
    LevelPlay never rewards, and the lambda never runs: they can still **Collect**.
    `OpenBeach` shows the interstitial, and leaves when it closes, watched or not.
    `Update` keeps **Collect ×2** grey until an ad is ready.
20. Set **Double Button** and **Ads** (the scene's `Ads`), and the button's On Click:
    **ReportScreen → CollectDouble**.
21. Add a line to the Credits: `Ads: <b>Unity LevelPlay</b>`.

### Test it

- **Play** the Title, **Continue** with a Welcome back to show (Chapter 12's two hours).
  **Collect ×2**: *An ad would play here.*, 5, 4, 3, 2, 1, and the beach, with twice the
  money.
- On the beach, the TV on the top bar: the pretend ad, then `×2 4:59` under the money,
  and the TV disappears until the boost ends.
- Open a new beach: *Your new beach*, **To the beach!**, the pretend ad, then the beach.
- **Optional: LevelPlay's mock ads.** You need **Android Build Support** (**Unity Hub →
  Installs →** the cog **→ Add modules**: a big download). **File → Build Profiles**,
  **Android**, **Switch Profile**. **Play**: the TV now shows LevelPlay's mock rewarded
  ad, LevelPlay's own test screen with a countdown. When it's over, the boost starts.
  Switch the profile back to your computer's (**Windows**, **macOS** or **Linux**) or
  **Web** when you're done: Chapter 21 builds for those.
- Untick **Use Level Play** on `Ads`: pretend ads everywhere, even on Android. A way to
  test the game's side of ads with nothing else in the way.

### Commit

*Add ads: an interface, pretend ads, LevelPlay, the TV boost and Collect ×2.*

### Challenge

A third kind of `IAdService`, `NoAds`, for players who bought the game: `RewardedReady`
is always `true`, and the rewards come at once, with no ad. Add it to `AdServiceProvider`
with a tick box **No Ads**. Which other scripts change? (None should.)

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

## Chapter 18 — Profile It

**Goal:** three performance problems in your game, each found with the right tool and
fixed, or measured for the next chapter to fix: garbage made every frame (the
**Profiler**), a screen rebuilt and drawn more than it needs (the **Profiler** and the
**Frame Debugger**), and a picture filling memory (the **Memory Profiler**).

### Idea — which tool for which problem

The exam asks this as a straight question (C# 17):

| The symptom | The tool | What it shows |
| --- | --- | --- |
| the game stutters, or a tap takes a moment | **Profiler**, CPU Usage | what took the time, frame by frame; **GC Alloc**: garbage made |
| something draws wrongly, or too often | **Frame Debugger** | every draw of one frame, in order |
| memory grows, or a phone runs out of it | **Memory Profiler** | what's in memory, and how big each thing is |

A phone is where this matters: it has less of everything than your computer, and it gets
hot and slows down when it works hard. An idle game is left running for minutes at a
time, so a little waste every frame adds up.

### Do it — a package

1. **Window → Package Manager**, **Unity Registry** on the left, search **Memory
   Profiler**, **Install**. In GitHub Desktop: one new line in `Packages/manifest.json`,
   `"com.unity.memoryprofiler"`. The package itself isn't in your repository, only that
   line. Commit it: *Add the Memory Profiler package*.

### Do it — problem 1: garbage, every frame

2. **Window → Analysis → Profiler**. Play the Beach, open the **Upgrades** tab, and leave
   it open for a few seconds without touching anything, with the Profiler recording.
3. Click any frame of the **CPU Usage** graph and switch the lower half to **Hierarchy**.
   Sort by **GC Alloc**. Near the top: `UpgradeShop.Update`, on **every** frame, while
   nothing on the screen changes. Open it: `String.Concat`, from `"$" + Fmt(…)`, and the
   strings `Fmt` builds, for fourteen rows, sixty times a second.
4. Measured while this book was written, with the Upgrades panel open:

| | Garbage each frame | Allocations each frame |
| --- | --- | --- |
| the intern's shop open | 1,612 bytes | 45 |
| every panel closed | 82 bytes | 3 |

   1.5 KB a frame is 90 KB a second, 5.4 MB a minute: garbage the **garbage collector**
   must clear, all at once, every so often. That's the stutter. Close the panel: the
   garbage stops, since a switched-off panel's `Update` doesn't run.
5. Don't fix it here: the intern's code gets a proper clean-up in Chapter 19, and you'll
   measure it again. Write the two numbers in your list from Chapter 7.

> **Note:** the Editor itself makes garbage and takes time, so its numbers aren't a
> phone's. A **Development Build** with **Autoconnect Profiler** (in **File → Build
> Profiles**) profiles the real thing. To find *where* the waste is, the Editor is fine.

### Do it — problem 2: a screen rebuilt, and drawn, more than it needs

6. **The rebuild.** Every business's bar moves every frame: its **Fill Amount** changes.
   When anything on a canvas changes, Unity rebuilds that canvas's whole mesh, and the
   bars are on the game's one canvas, with the top bar, the list, the tabs, everything.
   In the Profiler's **Hierarchy**, with managers running, type `Canvas` in its search box:
   `Canvas.BuildBatch`, every frame.
7. The fix is C# 2's: put what changes every frame on a **canvas of its own**. Select
   `Stand List` (in `Bottom`), **Add Component → Canvas**, and **Add Component → Graphic
   Raycaster** (a nested canvas needs its own, or its buttons can't be clicked). Now a
   moving bar rebuilds only the list; the top bar, the tabs and the panels stay as they
   were.
8. Profile again: `Canvas.BuildBatch` still runs, but for a smaller canvas. Add the **UI
   Details** module to the Profiler (**Profiler Modules**, top left): it lists each canvas,
   and `Stand List` is one now.
9. **The draws.** **Window → Analysis → Frame Debugger**, **Enable**, with the Beach
   playing. The list on the left is every draw of one frame. Open the UI's part
   (`UGUI.Rendering.RenderOverlays`) and click down it: each draw puts some of the screen
   up. Count them. A picture from a different texture can't be drawn in the same draw as
   the one before it, and every emoji is a texture of its own: a row needs several draws.
   **Disable** it.
10. A **Sprite Atlas** packs many sprites into one texture, so they can share draws. In
    `Art`, **Assets → Create → 2D → Sprite Atlas**, `Juice Tycoon`. In its **Objects for
    Packing**, **+** three times: the `Art/Emoji` folder, `Art/GUI/Buttons` and
    `Art/GUI/Windows`. Under **Packing**, untick **Allow Rotation** and **Tight Packing**,
    **Padding** 4: a 9-sliced panel and a UI image need their whole rectangle, upright.
    **Pack Preview**: one big texture, every emoji and every button on it.
11. **Edit → Project Settings → Editor**, **Sprite Packer**, **Mode**: **Sprite Atlas V2 -
    Enabled** (the default). Play, and the Frame Debugger again: fewer draws for the same
    screen. The Game view's **Stats** shows the **Batches** too: note them before and after.

### Do it — problem 3: a picture in memory

12. In Chapter 1, the beach was imported at full size with no compression. Play the Beach,
    then **Window → Analysis → Memory Profiler** → **Capture New Snapshot**. Open it, look
    under **Unity Objects** for **Texture2D**s, and find `Beach`. Measured for this book:

| `Beach` | Size in memory | Format |
| --- | --- | --- |
| **Max Size** 4096, **Compression** None | 31.5 MB | 3072 × 1536, 3 bytes a pixel |
| **Max Size** 2048, **Compression** Normal Quality | 2.0 MB | 2048 × 1024, half a byte a pixel |

13. Select `Art/Background/Beach`: **Max Size** `2048`, **Compression** **Normal Quality**,
    **Apply**. Take a new snapshot and compare: fifteen times smaller.
14. Does the game look worse? The beach is 30.7 units wide, and the screen shows 19 of
    them: at 2048 pixels, that's still more than 1,200 of the picture's pixels across a
    1080-pixel screen. No one can see the difference; everyone's phone feels the memory.
    The artist asked for "every pixel". Tell Sam what you changed, and why, with the
    snapshots.

> **Note:** the Editor's sizes are bigger than a build's (it keeps a copy of each picture
> that a build doesn't), so compare snapshots with each other, not with a phone's memory.

### Commit

*Profile it: a canvas for the list, a Sprite Atlas, and a smaller beach.*

### Challenge

The floating numbers make a little garbage too: each sale builds its `"+$1.25K"` string.
Profile it with every business managed: how many bytes a second? Is it worth fixing?
(Compare it with the intern's shop: the answer is a number, not a feeling.)

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
in the base class (C# 7).

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
same parameters (C# 8). And neither can be made with `new`: an abstract
class or an interface is a plan, not a thing. Make one of the classes built on it.

```csharp
Vehicle vehicle = new Vehicle();    // error CS0144: Cannot create an instance of the abstract type or interface 'Vehicle'
```

### Idea — events, members and names

| Wrong | The compiler says | Fix |
| --- | --- | --- |
| `racer.LapFinished = OnLapFinished;` | `error CS0070: The event 'Racer.LapFinished' can only appear on the left hand side of += or -= (except when used from within the type 'Racer')` | subscribe with `+=`; only `Racer` can raise or reset its event (C# 5) |
| two `Countdown` classes, often after importing a package | `error CS0101: The namespace '<global namespace>' already contains a definition for 'Countdown'` | delete the copy, rename yours, or use a namespace (C# 9) |
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

## Chapter 19 — Clean Up the Intern's Code

**Goal:** the intern's Upgrades shop rewritten to Sam's style guide, in small steps, each
tested and committed, without changing what the player sees, except three things the
review finds: prices that read `$1000.0K`, buttons that look pressable when they aren't,
and lists in no order. The garbage Chapter 18 measured is gone.

### Idea — refactor in small, safe steps

**Refactoring** changes how code is written, never what it does (C# 18). The
safe way is a series of small steps, each of which leaves a working game:

```
change one thing  →  Play: does the shop still work?  →  commit  →  next
```

If a step breaks something, you know which: the last one. And Git can take it back.

The shop's biggest problem isn't any one line. It's that one script knows everything
about every row: its children's names, which text is which, how a price is written, and
it asks all of it again sixty times a second. A **row** should know how to show itself,
and the shop should only change what changed, when it changes. So the clean-up ends with
two small classes: `UpgradeRow`, one upgrade's row, and `UpgradesPanel`, one script for
both shops.

### Do it — read it against the guide

1. Open `UpgradeShop` beside `STYLE_GUIDE.md`, and your list from Chapter 7. Compare:

| In the intern's code | The guide says |
| --- | --- |
| `public Upgrade[] list;` and four more | `[SerializeField]` private fields, never `public`; names that say what they are |
| `u`, `w`, `n`, `m` | names that say what they are |
| `transform.Find("Name").GetComponent<TMP_Text>()`, every frame | references set once, in the Inspector |
| `"$" + Fmt(…)` in `Update` | not allowed: string building in `Update` (Chapter 18's 1.6 KB a frame) |
| `if (…) x; else y;` with no braces | braces on every `if` and `else` |
| `// update the rows`, `// format the money` | comments say why, not what |
| `Fmt`: `$1000.0K` for a million, and `1000,0K` on a French computer | the game already has `NumberFormat` |
| a button you can't afford looks like one you can | the rows' Buy buttons go grey (Chapter 6) |
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
    string Fmt(long m)
    {
        if (m >= 1000)
            return (m / 1000f).ToString("0.0") + "K";
        return m.ToString();
    }
}
```

3. Select the two panels in the Beach scene: every field still filled in, under its new
   names. Save the scene (**Ctrl+S** or **Cmd+S**): it's written with the new names now.
   Play, buy an upgrade and a manager: as before. Commit: *Rename the shop's fields*.

### Do it — step 2: a row that shows itself

4. In `Scripts/UI`, `UpgradeRow`:

```csharp:UpgradeRow.cs
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// One upgrade in the Upgrades or Managers panel: its picture, name, what it
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

    public void SetAffordable(long money)
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
   `SetAffordable` runs, when the money changes: a bool, a button, a sprite, no strings.
   It doesn't buy anything itself: it raises `BuyPressed`, and whoever made the row
   decides. The price uses `NumberFormat.Money`: `$1.00M`.
6. Open the **Upgrade Row** prefab and add `UpgradeRow`: **Picture**, **Name Text**,
   **Description Text**, **Buy Button** and its Image, **Price Text** (`Buy Button/Label`),
   and the two sprites, `Button Green` and `Button Grey`. The intern's shop still works:
   it ignores the script and finds the children by name, as before. Play to check.
   Commit: *Add UpgradeRow*.

### Do it — step 3: one panel, both shops

7. In `Scripts/UI`, `UpgradesPanel`:

```csharp:UpgradesPanel.cs
using System.Collections.Generic;
using UnityEngine;

// The Upgrades panel, and the Managers panel: the same script, with Show
// Managers ticked for the second. Each lists the upgrades not bought yet,
// cheapest first, made in code. The rows are made when the panel opens and
// after a purchase; the money changing only turns their buttons green or grey.
public class UpgradesPanel : MonoBehaviour
{
    [SerializeField] bool showManagers;
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
            // A manager is an upgrade too: this panel shows one kind or the other.
            bool isManager = upgrade is ManagerUpgrade;
            if (isManager == showManagers && !upgrades.IsBought(upgrade))
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

    void OnMoneyChanged(long money)
    {
        foreach (UpgradeRow row in rows)
        {
            row.SetAffordable(money);
        }
    }
}
```

8. Read it as the answers to your list:
   - **What to show** comes from the library, not from a list typed by hand: every
     upgrade not bought yet, of the panel's kind. `upgrade is ManagerUpgrade`, compared
     with `showManagers`, splits them: one script, two panels.
   - **In order:** `forSale.Sort((a, b) => a.Cost.CompareTo(b.Cost))`, cheapest first, a
     lambda that compares two upgrades.
   - **When:** the rows are made when the panel opens (`OnEnable`) and after a purchase
     (`Rebuild`); the money changing only calls `SetAffordable`. No `Update` at all.
   - **Tidy:** `Rebuild` unsubscribes from each old row before destroying it.
9. Open the **Upgrades Panel** prefab and add `UpgradesPanel`: **Row Prefab** the
   **Upgrade Row**, **Content** its `List`, **All Bought Text** its `All Bought`. Open the
   **Managers Panel** prefab: it has the script too, since it's a variant of Upgrades
   Panel; tick **Show Managers** there (an override).
10. In the Beach scene, on each of the two panels: set **Upgrades** and **Wallet**, then
    remove the **Upgrade Shop** component (the ⋮ menu → **Remove Component**).
11. Play: both shops work, from the new script. Then delete `UpgradeShop.cs`. Play again,
    to be sure nothing used it. Commit: *Replace the intern's shop with UpgradesPanel*.

### Test it

- **Upgrades**: the cheapest first, `$25.0K` for *Fresh Lemons*, `$1.00M` for *Watermelon
  Wave*, `$1.00B` for *Golden Juice*. A button you can't afford is grey, and turns green
  as the money comes in.
- Buy everything in **Managers**: *Every business has a manager!*
- **Profile it again**, as in Chapter 18: the Upgrades panel open for a few seconds,
  **GC Alloc**. Measured for this book: 82 bytes and 3 allocations a frame, the same as
  with every panel closed. The shop makes no garbage at all now.

### Commit

Three commits, one per step, are already in your History. Look at them in GitHub
Desktop: each one's diff is small enough to read.

### Challenge

The rows are destroyed and made again after every purchase. With 19 upgrades that's
fine; with 500, it wouldn't be. How would you change `UpgradesPanel` to hide the bought
row instead, and keep the others? What would `Rebuild` still need to do, and when?

## Chapter 20 — Break It, Then Fix It

**Goal:** Level 4's common mistakes, made on purpose, one at a time: read the Console's
message, find the cause, fix it, and use Git to undo what you did. Do this chapter on a
branch, `breaking`, and delete it at the end.

### Idea — read the message, then the code

C# 19 gave the method: the file and line, the code (`CS0534`), the message;
then the code at that line. For a runtime error, the **stack trace**: the line at the top
is where it happened, the lines below are how the game got there.

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

4. **Delete `IncomePerSecond` from `DeliveryVan`.**

```
Assets/Scripts/Income/DeliveryVan.cs(8,43): error CS0535: 'DeliveryVan' does not implement interface member 'IIncomeSource.IncomePerSecond'
```

   An interface is a contract: a class that signs it must have every member.

5. **As the first line of `UpgradeRow.SetAffordable`, write `Upgrade test = new
   Upgrade();`.**

```
Assets/Scripts/UI/UpgradeRow.cs(44,24): error CS0144: Cannot create an instance of the abstract type or interface 'Upgrade'
```

   There's no such thing as a plain upgrade: only recipes, equipment and managers. (And a
   ScriptableObject is never made with `new` anyway: an asset, or
   `ScriptableObject.CreateInstance`.)

6. **In `SoundPlayer.OnBought`, after the sound, write `stands[0].CupSold(10);`**, as if to
   sell a cup from outside.

```
Assets/Scripts/Juice/SoundPlayer.cs(82,19): error CS0070: The event 'JuiceStand.CupSold' can only appear on the left hand side of += or -= (except when used from within the type 'JuiceStand')
```

   Only the class that owns an event may raise it. Others subscribe and unsubscribe: that's
   what makes it an *event*, and not a field anyone could call.

### Do it — runtime errors

7. **Forget to unsubscribe.** In `Shortcuts.OnDisable`, delete the line
   `beachMap.FindAction("Upgrades", true).performed -= OnUpgrades;`. Play the **Title**,
   **Continue** to the beach, then the cog and **Title**, and **Continue** again. On the
   beach, press **U**:

```
MissingReferenceException while executing 'performed' callbacks of 'Beach/Upgrades[/Keyboard/u]'
MissingReferenceException: The object of type 'UnityEngine.GameObject' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
```

   Read the stack trace: `PanelSwitcher.Toggle`, called from `Shortcuts.OnUpgrades`. The
   **first** beach's `Shortcuts`, destroyed with its scene, is still subscribed: the
   action belongs to an **asset**, and assets outlive scenes. Its handler runs, and reaches
   for its Upgrades panel, which was destroyed with it. The panel still opens: the second
   beach's handler runs too. A bug that doesn't stop the game is the kind that ships. The
   fix is the line you deleted: *subscribe in `OnEnable`, unsubscribe in `OnDisable`,
   always both*. Discard the change.

8. **Leave a field empty.** Select `Boost Offer` on the top bar, and clear its **Button**
   field (click it, **Delete**). **Play**:

```
UnassignedReferenceException: The variable button of BoostOffer has not been assigned.
You probably need to assign the button variable of the BoostOffer script in the inspector.
```

   Unity names the field and the script for you, and it happens at once, in `OnEnable`.
   Put it back with **Ctrl+Z**, or discard the scene's changes.

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

10. Make a mistake *and commit it*: in `Data/Stands/Lemonade Cup`, set **Cost Growth** to
    `1.7`, and commit *Make lemonade dearer* on your branch. Play: the second cup costs
    $7, the tenth $475. Nobody would buy a tenth.
11. In GitHub Desktop's **History**, right-click that commit → **Revert Changes in
    Commit**. A new commit undoes the old one; the history keeps both, so a team can see
    what happened. Play: $5, as the balance sheet says.
12. Switch back to `main`, and delete the `breaking` branch.

### Commit

Nothing to commit on `main`. Everything you broke stayed on the branch.

### Challenge

Make a mistake for a friend: on a branch of your own, break one thing (a compile error or
a runtime one), and commit it. Swap computers. Find each other's mistake from the Console
alone, and fix it.

## Chapter 21 — Ship It

**Goal:** Juice Tycoon built for the **web**, playable on itch.io in a tall window, with a
mouse or a finger, and for **your computer** (Windows or Mac), in a window shaped like a
phone, with a Quit button. Your juice empire is saved in both. A **release tag** in Git
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
the pretend ads where LevelPlay can't run. Real ads on a real phone, and the phone builds
themselves, are Level 6's.

### Do it — tidy up for release

1. Take the test helpers out of `Wallet`: the two `[ContextMenu]` methods from Chapters 6
   and 13. They only run in the Editor, but they're not part of the game, and a reviewer
   will ask. Play once to check nothing used them. Commit: *Remove the test helpers*.

### Do it — the player settings

2. **Edit → Project Settings → Player**: **Company Name** *Lantern Hill Games*, **Product
   Name** *Juice Tycoon*. The product name is the app's name, and part of the save file's
   folder: change it, and the game looks for its save somewhere new.
3. Under **Resolution and Presentation**, for the PC: **Fullscreen Mode** **Windowed**,
   **Default Screen Width** 720, **Default Screen Height** 1280. For the Web (its own tab
   in the same section): **Default Canvas Width** 540, **Height** 960. A phone game in a
   wide window would leave the canvas scaler stretching a 1080-wide layout across 1920
   pixels: the tall window keeps the shape you designed.
4. **File → Build Profiles**. The **Scene List**: `Title`, `Report` and `Beach`, in that
   order, all ticked.

### Do it — check it on phones

5. **Window → General → Device Simulator**, and Play from the Title on two phones: one
   with a notch, one without. Go through everything once: the safe area keeps the money
   and the tabs clear on both; a tall phone gets a longer list, not smaller buttons.

### Do it — the web build

6. In **Build Profiles**, select **Web**, and **Switch Platform** (it takes a while: every
   picture is imported again for the web).
7. In the Web profile's **Player Settings**, **Publishing Settings**: **Compression
   Format** **Disabled** (itch.io serves the files as they are, and a compressed build
   would need the server's help).
8. **Build**, into a new folder, `Builds/Web` (it's in the `.gitignore`: builds stay out of
   Git). Zip the **contents** of `Builds/Web`, so `index.html` is at the top of the zip.
9. On itch.io: **Upload new project**, **Kind of project: HTML**, upload the zip, tick
   **This file will be played in the browser**, set the viewport to 540 × 960, and tick
   **Mobile friendly**, **Portrait**. Save, and open the page.

### Test it — the web build

- The Title fades in; there's no **Quit**. **New Game**, earn, hire a manager, and buy the
  first upgrades.
- Close the tab. Wait two minutes, then open the page again: **Continue** shows your
  money, and **Welcome back** what the manager made. The browser kept your save.
- The TV and **Collect ×2** show the pretend ad: on the web, nothing else can.
- On a phone: tap the businesses and the buttons. Everything works with a thumb.
- In your browser's settings, clear the site's data: back to the first run.

### Do it — the PC build

10. In **Build Profiles**, select **Windows** or **macOS** (whichever you're on), **Switch
    Platform**, and **Build** into `Builds/PC`.
11. Run it: a tall window; **Quit** is there; the keys work, and so does changing them.
    The save lives in the player's own folders (on a Mac,
    `~/Library/Application Support/Lantern Hill Games/Juice Tycoon`). The company name is
    part of that path, so the game you played in the Editor before step 2 is in a
    `DefaultCompany` folder instead.

### Do it — tag the release

12. Commit everything: *Ship version 1.0*. In GitHub Desktop's **History**, right-click
    that commit → **Create Tag…**, `v1.0`. **Push origin**, and push the tag when it asks.
    On GitHub, your repository's **Releases** and **Tags** show `v1.0`: whatever happens to
    `main` next, anyone can get back the exact game you shipped.

### Commit

*Ship version 1.0*, tagged `v1.0`.

### Challenge

Add the version number to the Title, from **Player Settings → Version** (read it in code
with `Application.version`), and ship 1.0.1 with one small improvement of your own (a
sixth business? a golden balloon? a daily gift?), tagged `v1.0.1`.

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
| Programming | Evaluate code for integration into a system architected by a lead | C# 9, C# 8 |
| Programming | Apply coding standards set by senior programmers | C# 18; Level 3's naming conventions |
| Programming | Determine code for a specified interaction or logic | Levels 1–4: every chapter; C# 7, C# 5 |
| Programming | Implement transitions between scenes | C# 11 |
| Programming | Save data between scenes and sessions (static, PlayerPrefs) | C# 10, C# 11, C# 13 |
| Programming | Use Unity API methods, given the API docs | Level 2: the Unity docs; C# 13, C# 14 |
| Programming | Choose GameObject properties, scripts and components for a task | Levels 1 and 2; C# 3, C# 2 |
| Programming | Inheritance vs. interfaces | C# 7, C# 8 |
| Programming | Choose data structures: lists, arrays, dictionaries | Level 2; C# 6 |
| Programming | Choose data types: floats, bools, strings | Level 2; C# 6 |
| Programming | Build to WebGL or PC | Level 1; the last of your game's build chapters |
| UI | Lay out UI with anchors, pivots and groups | C# 2 |
| UI | Display data in UI elements | Levels 1 and 3; C# 2 |
| UI | Respond to user input with the UnityEvent system | Level 2: UI events; C# 5, C# 2 |
| Debugging | Use debug messages to find why code fails | Levels 0 to 3; C# 19 |
| Debugging | Identify the cause of a compile error | Levels 0 and 3; C# 19 |
| Debugging | Identify null-variable errors | Level 2; Level 3's finding errors; C# 12 |
| Debugging | Refactor code to fit coding standards | C# 18 |
| Debugging | Select profiling tools for performance problems | C# 17, C# 15 |
| Assets | Use prefabs in a scene | Level 1; C# 3 |
| Assets | Change nested prefabs and prefab variants, and predict the outcome | C# 3 |
| Assets | Primary purposes of version control | C# 1 |

The **Check Yourself** part at the end of this book has two exam-style questions on
every one of them, a timed practice paper, and a cheat sheet.

### Idea — what Unity expects before you sit it

Unity lists these as the exam's prerequisites. You've done every one:

| Unity expects | Where you did it |
| --- | --- |
| 2–3 semesters of Unity classwork, or the equivalent | Levels 0 to 4 of this course |
| a diverse range of Unity projects | a different game at every level since Level 0, each one built and published |
| importing assets or code from the Asset Store or the Package Manager, and resolving conflicts | C# 16, C# 9 |
| debugging non-complex problems | Levels 2 and 3; C# 19, C# 17 |
| interpreting, integrating and modifying well-documented existing code | C# 9, C# 18 |
| basic scene management | C# 11 |
| creating and using prefabs | Level 1; C# 3 |
| deploying a basic build | a published build at the end of every level |

### Idea — how the questions are written

| The question says… | It wants… | Practise with |
| --- | --- | --- |
| "What does this code print?" | a trace on paper, line by line: which override runs, what a queue gives back first, what a dictionary holds | C# 7, C# 6 |
| "Which code implements…?" | the option that compiles **and** does the whole task: often two of them compile | every chapter's Do it |
| "What's the cause of this error?" | the error's code, the line, and the one thing on it that's wrong | C# 19 |
| "Which tool or component should you use…?" | the one made for that job: the Profiler for slow frames and garbage, the Frame Debugger for draw calls, the Memory Profiler for memory | C# 17, C# 2 |
| "What happens when you change this prefab?" | the change followed down from the base to its variants and instances, stopping at every override | C# 3 |
| "Which version follows the standard…?" | the option that keeps every rule the question gives, not your own habits | C# 18 |
| "Which of these integrates correctly?" | the option that uses the module's contract, and leaves the module unchanged | C# 9 |

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
| 1 | B | A has the members, but never says it's an `IHighlightable`, so `GetComponentInParent` finds nothing. C isn't a component, so it can't be on a GameObject. D doesn't compile: an interface has nothing to override (CS0115). | C# 9 |
| 2 | the `GameObject.Find` line | The counter already announces each change: delete the line, and let a combo text subscribe to `ComboChanged`. | C# 9 |
| 3 | C | A names the event like a handler; B isn't the past tense; D isn't PascalCase. | C# 18 |
| 4 | D | A has the word `private`; B is a public field; C's `bool` isn't a question. | C# 18 |
| 5 | `Picked up, healed twice`, then `True` | The object is a `BigPotion`, so its `Use` runs, and each `base.Use()` runs the version one level up first. A big potion is a kind of potion. | C# 7 |
| 6 | C | A doesn't compile (CS0070); B subscribes again every frame, so one death plays the sound hundreds of times; D's lambda is a new method, so its `-=` takes nothing off. | C# 5 |
| 7 | — | Add the Results scene to the Scene List, in **File → Build Profiles**: code can only load a scene that's in it. | C# 11 |
| 8 | B | The time scale belongs to the whole game, not to a scene: set it back to 1 before loading. `Update` and the UI keep running; animations and particles on scaled time don't. | C# 11 |
| 9 | — | 1 a `static` property: it's for this run only. 2 PlayerPrefs: a small setting. 3 a JSON file: game data, with a list in it. | C# 13 |
| 10 | `Laps: 6` | With domain reload off, a static keeps last run's value: 3, then 3 more. A `[RuntimeInitializeOnLoadMethod]` reset fixes it. | C# 10 |
| 11 | C | A can't tell which type to make (CS0411); `SaveData` has no constructor that takes text (B); `ToJson` goes the other way, and isn't generic (D). | C# 13 |
| 12 | D | The reference isn't the action: its `.action` is (A is CS1061). B doesn't say which type to read; C: `performed` is an event. | C# 14 |
| 13 | B | A Canvas Group's **Alpha** fades it and everything under it, and **Blocks Raycasts** stops the clicks. The others lay out or clip. | C# 11 |
| 14 | C | Shared data that a designer tunes, and that doesn't change while playing, goes in an asset; what changes belongs on the object. In A, changes made while playing stay in the asset. | C# 4 |
| 15 | D | They share a capability, not code, and none is a kind of another. A is impossible: a class has one base class, and theirs is `MonoBehaviour`. | C# 8 |
| 16 | A | An interface has no fields and no bodies (C), and is implemented without `override` (D). | C# 8 |
| 17 | `6 0 1` | `stock["Lemon"] = 6` replaces the 4; Mango is removed, so `TryGetValue` gives 0; one pair is left. | C# 6 |
| 18 | — | 1 a `Queue`; 2 a `Stack`; 3 a `Dictionary<string, Card>`; 4 an array. | C# 6 |
| 19 | — | 1 `int`; 2 `float`; 3 `bool`; 4 `string`. | C# 6 |
| 20 | — | A `float` isn't exact: `0.1f` is a little more than 0.1, and ten of them don't land exactly on 0. Count whole hit points in an `int`, or check `<= 0f`. | C# 6 |
| 21 | — | Hide the button in a Web build: a page can't close the browser's tab. `quitButton.SetActive(Application.platform != RuntimePlatform.WebGLPlayer);` | your game's last chapter |
| 22 | B | A build opens with the scene at index 0, in **File → Build Profiles**. The open scene only decides where **Play** starts in the Editor (A). | C# 11 |
| 23 | C | Anchors together at a corner keep the size and the distance from that corner. B and D stretch it. | C# 2 |
| 24 | B | An element scales around its pivot: at (0.5, 0), the bottom edge stays put. A grows it downwards only; anchors don't decide how it scales. | C# 2 |
| 25 | D | Two `int`s divide to a whole number: `3 / 4` is 0 (A), and B casts too late. C sets 3: a full bar. | C# 2 |
| 26 | — | Set the text only when the coins change: the wallet raises an event, and the counter listens. Every frame makes a new string and rebuilds the Canvas, for nothing. | C# 2 |
| 27 | A | A `for` loop has one `i`, read when the button is clicked: `fruits.Length` by then, past the end, so B throws an `IndexOutOfRangeException`. The copy gives each lambda its own. C and D don't compile. | C# 5 |
| 28 | A | A UnityEvent is wired in the Inspector, so a designer can change it. B is wired in code; C checks every frame for nothing; D ties the script to one panel. | C# 5 |
| 29 | B | The second argument, `this`, is the context: click the message, and that kart lights up. | C# 19 |
| 30 | `Added 4`, `Skipped x` (a warning), `Added 6`, `Total: 10` | `int.Parse("x")` throws before its `Debug.Log` runs; the `catch` logs, and the loop goes on. | C# 12 |
| 31 | — | `Produce` takes a `float` here, and an `int` in `Generator`. So it overrides nothing (CS0115), and `Produce(int)` is still missing (CS0534). | C# 19 |
| 32 | — | Add `using JuiceWorks.Shop;` at the top of `Wallet.cs`: the class's full name is now `JuiceWorks.Shop.ShopWindow`. | C# 9 |
| 33 | — | The **Settings Panel** field was left empty in the Inspector. Drag the panel into it. | C# 12 |
| 34 | D | For a missing key, `TryGetValue` returns `false`, and the `out` variable holds its default: `null` for a class. Check the result, and warn about the id. | C# 6 |
| 35 | A | A refactor changes how code is written, never what it does. B, C and D change what the game does. | C# 18 |
| 36 | — | They're lost: Unity saves Inspector values by field name. Add `[FormerlySerializedAs("s")]`, from `UnityEngine.Serialization`, to the field. | C# 18 |
| 37 | — | 1 the Profiler; 2 the Frame Debugger; 3 the Memory Profiler. | C# 17 |
| 38 | B | A still builds a new string every frame; C only measures; D runs just as often. | C# 17 |
| 39 | A | A prefab field typed as a component gives back that component, on the new copy. | C# 3 |
| 40 | — | It's an override, kept by that instance only. Apply it: the **Overrides** drop-down → **Apply All**, or right-click **Value** and apply it to the prefab. | C# 3 |
| 41 | D | A change to Tag reaches everything built on it, but the Sale Tag's own colour, an override, wins. | C# 3 |
| 42 | C | An override applied to Stand reaches every Stand. The Sale Tag isn't a Stand, and Tag is underneath, so it doesn't change. | C# 3 |
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
